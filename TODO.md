# To-do

- [ ] Sign up for a free Web3Forms account and put the access key into
      `src/pages/kontakt.astro` (replaces `TODO-REPLACE-WITH-YOUR-WEB3FORMS-ACCESS-KEY`)
- [ ] Wire up Terminliste + add a new Resultatlister page using NSF's official
      embeddable widgets (`<competition-list>` / `<result-list>` from
      `https://app.skyting.no/static/js/nsfWebComponents.js`, filtered to
      pistol via `branch-id="0BEFF7E2-94F7-4284-B76E-FC3E17B29E4F"`), plus a
      nav dropdown: Terminliste → Resultatlister
- [ ] Deploy: build (`npm run build`) and upload `dist/` via FTP to Domeneshop
      for the live domain
