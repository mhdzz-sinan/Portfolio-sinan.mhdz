
-- Explicitly deny SELECT on contact_messages (only service role via edge functions should read)
CREATE POLICY "No public read access"
  ON public.contact_messages
  FOR SELECT
  USING (false);

-- Explicitly deny UPDATE
CREATE POLICY "No updates allowed"
  ON public.contact_messages
  FOR UPDATE
  USING (false);

-- Explicitly deny DELETE
CREATE POLICY "No deletes allowed"
  ON public.contact_messages
  FOR DELETE
  USING (false);
