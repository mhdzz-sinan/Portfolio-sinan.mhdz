import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactEmailRequest = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (message.length < 10) {
      return new Response(
        JSON.stringify({ error: "Message must be at least 10 characters" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Store message in database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { error: dbError } = await supabase.from("contact_messages").insert({
      name: name.trim(),
      email: email.trim(),
      subject: subject?.trim() || null,
      message: message.trim(),
    });

    if (dbError) {
      console.error("Database insert error:", dbError);
    }

    // Send email using Resend API
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["mhdzzsinan@gmail.com"],
        subject: `[Portfolio] ${subject || "New Message"} - from ${name}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #0a0f1f 0%, #1a1f3f 100%); padding: 30px; border-radius: 12px; border: 1px solid #00eaff33;">
              <h1 style="color: #00eaff; margin: 0 0 20px 0; font-size: 24px;">New Portfolio Message</h1>
              <div style="background: rgba(0, 234, 255, 0.1); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <p style="color: #fff; margin: 0 0 10px 0;"><strong style="color: #00eaff;">From:</strong> ${name}</p>
                <p style="color: #fff; margin: 0 0 10px 0;"><strong style="color: #00eaff;">Email:</strong> ${email}</p>
                <p style="color: #fff; margin: 0;"><strong style="color: #00eaff;">Subject:</strong> ${subject || "No subject"}</p>
              </div>
              <div style="background: rgba(255, 255, 255, 0.05); padding: 20px; border-radius: 8px;">
                <p style="color: #00eaff; margin: 0 0 10px 0; font-weight: bold;">Message:</p>
                <p style="color: #e0e0e0; margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
              </div>
              <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #00eaff33;">
                <p style="color: #666; font-size: 12px; margin: 0;">Sent from your portfolio website</p>
              </div>
            </div>
          </div>
        `,
        text: `New message from your portfolio:\n\nFrom: ${name}\nEmail: ${email}\nSubject: ${subject || "No subject"}\n\nMessage:\n${message}`,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error("Resend API error:", errorData);
      throw new Error(errorData.message || "Failed to send email");
    }

    const data = await res.json();
    console.log("Email sent successfully:", data);

    return new Response(JSON.stringify({ success: true, id: data.id }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to send email" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
