# PersonalSite

Source for [astrihale.me](https://astrihale.me), built with Angular 22 and Angular Material.

Requires Node.js 22.22+, 24.15+ or 26+ (see `engines` in `package.json`).

## Development server

Run `npm start` and open `http://localhost:4200/`. The app reloads when source files change.

## Build

Run `npm run build`. The output goes to `dist/personal-site/browser`.

## Deployment

Pushing to `main` runs `.github/workflows/static.yml`, which builds the app and deploys
`dist/personal-site/browser` to GitHub Pages. The build output is not committed.

The custom domain (`astrihale.me`) is configured in the repository's Pages settings. DNS is
on Cloudflare with the records set to **DNS only**. Proxying them through Cloudflare stops
GitHub from issuing the HTTPS certificate.
