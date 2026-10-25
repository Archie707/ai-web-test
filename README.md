# Grindwise — light rose edition (v4)

Live site: https://tutoring-test.duckdns.org/
Repository: Archie707/ai-web-test, branch main. Deployment uses the existing Coolify Static/Nginx application; the repository root is the document root. No build or npm installation is needed to serve the website.

## Visual direction
Warm white, powder pink and raspberry red, with dark rose-brown text. Large hero, tutor and footer surfaces use a light palette. The CSS palette excludes green and its shades. The educational photograph is rendered in grayscale with a warm rose duotone. The sliding banners, motion, layout and interactions from v3 are preserved.

## Interaction
- Three complete hero scenes physically slide horizontally every 5.2 seconds. Previous/next, direct slide selection, keyboard arrows and touch swipes are available. Autoplay continues while the pointer is over the banner and pauses when focus enters it; users can pause or explicitly restart it.
- Floating panels, animated decorative orbits, audio bars, cursor animation and a continuously scrolling subjects ribbon. The ribbon has a decorative-animation pause button.
- Buttons have glow, elevation, arrow movement and a light sweep on hover. Subject cards show a pointer-following highlight and elevation.
- Scroll-triggered reveals use IntersectionObserver; the header gains depth on scroll and a back-to-top button appears lower on the page.
- Four original illustrative tutor profiles are presented in a scroll-snap carousel with next/previous controls.
- Subject search and category filters, request prefilling, earnings calculator, native FAQ and mobile menu remain functional.
- Reduced-motion settings disable decorative animation and automatic slide rotation by default. Inactive hero scenes are inert and hidden from assistive technology. Content remains available without scroll animation support.

## Files
index.html, styles.css, app.js, assets/student.jpg and assets/fonts/. DM Sans and Manrope are self-hosted WOFF2 files; their SIL Open Font Licenses are included beside them. The page makes no external font requests, and system fonts provide fallbacks.

## Verification
Playwright with Microsoft Edge: physical track movement, autoplay with pointer over the hero, pause, reduced motion, marquee, tutor carousel, filters/search, calculator, FAQ, local demo form, mobile navigation and viewports from 320 to 1440px. No browser JavaScript errors. Mobile card content and hero text bounds are checked. CSS colors are checked for green values.

## Prototype scope
All tutor profiles, prices and availability are illustrative. The request form is a local demonstration and sends no data, stores nothing and sends no email. Accounts, messaging, tutor verification, payments and bookings require backend implementation before use.

## Photograph credit
Julio Lopez / Unsplash: https://unsplash.com/photos/young-woman-wearing-headphones-studying-at-desk-Imz-pn2LMbg
Source image: https://images.unsplash.com/photo-1759984782106-4b56d0aa05b8
The image illustrates learning; it does not represent a listed tutor or a customer testimonial.