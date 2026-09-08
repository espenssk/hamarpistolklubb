# To-do

- [ ] Sign up for a free Web3Forms account and put the access key into
      `src/pages/kontakt.astro` (replaces `TODO-REPLACE-WITH-YOUR-WEB3FORMS-ACCESS-KEY`)
- [ ] Wire up Terminliste + add a new Resultatlister page using NSF's official
      embeddable widgets (`<competition-list>` / `<result-list>` from
      `https://app.skyting.no/static/js/nsfWebComponents.js`, filtered to
      pistol via `branch-id="0BEFF7E2-94F7-4284-B76E-FC3E17B29E4F"`), plus a
      nav dropdown: Terminliste → Resultatlister
- [ ] (Nice-to-have, branch + test separately) Member-only weapons
      marketplace/classifieds board - whole section gated behind a verified
      login, not just posting. GitHub Pages is static-only, so this needs
      [Supabase](https://supabase.com) (free tier: Postgres + Auth +
      Storage) as the backend:
      - `profiles` table (`approved` boolean, defaults `false`) + `listings`
        table (title, price, phone, photo, seller), with RLS policies so
        `select`/`insert` on `listings` require `auth.uid()` to match an
        approved profile - this is what keeps listings invisible to anyone
        not logged in and approved.
      - New members sign up + confirm email, then sit "pending" until a
        club admin manually flips `approved = true` in Supabase Studio's
        table editor (cross-checked against the membership spreadsheet) -
        no custom admin UI needed for this step.
      - New Astro pages: `/marked`, `/marked/logg-inn`, `/marked/ny-annonse`,
        using the Supabase JS client client-side (can't be static
        content-collection pages like `nyheter` since access depends on
        live auth state).
      - Blocked on: creating a free Supabase project (sign-up + grab the
        project URL + anon key) before schema/pages can be scaffolded and
        tested.
