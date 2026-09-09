# To-do

- [ ] Set up a branch protection ruleset for `master` (Settings → Rules →
      Rulesets → New ruleset): enforcement Active, bypass list = Repository
      admin role only. Enable: Restrict deletions, Block force pushes,
      Require a pull request before merging, Automatically request Copilot
      code review. Skip signed commits/code scanning/code quality/coverage
      (need paid features) and status checks (no PR-time CI check exists
      yet). Once this is Active, update `MAINTAINER-GUIDE.md`'s wording
      from "PR recommended" to "PR required" (direct commits to `master`
      will no longer be possible for non-admins).
- [ ] Once the club approves the site (currently only live at the default
      `https://espenssk.github.io/hps-homepage/`), point the real domain:
      add `hamarpistolklubb.no` to Settings → Pages → Custom domain, and
      add the DNS records at the registrar - see `DEPLOYMENT.md` step 2.
      The `public/CNAME` file alone does nothing for Actions-based Pages
      deploys, so the Settings step can't be skipped.
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
