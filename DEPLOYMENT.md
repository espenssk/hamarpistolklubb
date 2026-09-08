# Deployment (one-time setup)

This site auto-deploys to **hamarpistolklubb.no** every time someone pushes
to the `master` branch on GitHub - no FTP, no manual upload. The workflow
that does this lives in `.github/workflows/deploy.yml`.

Two one-time steps are needed before this works. Both only need to be done
once, by whoever has admin access to the GitHub repo and the domain's DNS
settings.

## 1. Turn on GitHub Pages for this repository

1. Go to the repository on GitHub → **Settings** → **Pages**.
2. Under "Build and deployment" → "Source", choose **GitHub Actions**.
3. That's it - the next push to `master` will build and publish the site.

## 2. Point the domain at GitHub Pages

At the domain registrar/DNS provider for `hamarpistolklubb.no`, add these
DNS records (this only needs to be done once; GitHub's IPs are stable):

| Type  | Name | Value                |
|-------|------|-----------------------|
| A     | @    | 185.199.108.153       |
| A     | @    | 185.199.109.153       |
| A     | @    | 185.199.110.153       |
| A     | @    | 185.199.111.153       |
| CNAME | www  | espenssk.github.io    |

(These are GitHub Pages' standard IP addresses - see
[GitHub's docs on custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
if the site is later moved to a different GitHub account/org.)

After DNS propagates (can take up to a few hours), the repository's
**Settings → Pages** should show the domain as verified with HTTPS enabled.

## Everyday content updates

Once this is set up, day-to-day maintainers do **not** need to touch any
of this - they just add/edit files in the repository (see the maintainer
guide) and push/merge to `master`. The GitHub Action handles the rest
automatically.
