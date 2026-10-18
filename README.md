# Grindwise home – Coolify static deployment

## Files
- `index.html` – entry point (renamed from exported `Main.dc.html`).
- `support.js` and `vendor/react*.js` – required local runtime files for the design-tool export.

Upload all files **and** the `vendor/` folder to the **root** of the GitHub repository.
Use Coolify build strategy **Static**, exposed port **80**, and `nginx:alpine` web server (as with the earlier test site).

## Important – prototype only
This is a **design mockup**, not a complete website or booking platform. Example tutor data and marketing statements must be verified. The apparent contact/signup form changes its UI state but does not submit data to a backend. Links, search, accounts, payments and bookings need actual implementation before production use.

The exported HTML currently loads a Google Fonts stylesheet (may require an Internet connection for the font).
