# Grindwise — redesign
Static HTML, CSS and JavaScript. No build step, React, npm packages or paid services are needed to run the website. Google Fonts are optional; system fonts are used when unavailable.
## Preview
Open index.html in your browser. Keep styles.css and app.js beside it.
## Publish using your existing Coolify application
Upload index.html, styles.css, app.js and this README.md into the root of Archie707/ai-web-test and commit to main. The existing GitHub webhook should trigger Coolify. Keep the existing Static/Nginx deployment settings. No backend or new hosting service is required.
## Features
Three banners (6.5-second rotation, previous/next, direct selection, pause, hover/focus pause and reduced-motion support); responsive mobile navigation; combined subject filters and search; subject selection prefills the demo form; live earnings calculator; native accessible FAQ; keyboard focus and skip link.
## Current status
Published through Archie707/ai-web-test and the existing Coolify deployment at https://tutoring-test.duckdns.org/. Public HTML, CSS and JavaScript were verified after publication. DOM/logic and Edge browser tests passed. Desktop and mobile layouts were inspected; mobile profile clipping was corrected. Banners, reduced motion, pause, filters, search, form, calculator, FAQ, navigation and viewport overflow were checked.
Tutor profiles and prices remain illustrative. Tutor requests are explicitly a local demonstration: no submission, storage or email. Accounts, verification, payments, messaging and bookings require backend implementation before launch.
## Changes from the exported prototype
Replaced the design-tool runtime with native HTML/CSS/JS. Removed empty statistics and review placeholders and unsupported claims about real bookings or verification. Preserved the Grindwise name, English language, Irish tutoring scope, original sample tutor identities and rates, subject categories and earnings calculation.