# Grindwise — cream and red edition (v5)

Live site: https://tutoring-test.duckdns.org/
Repository: Archie707/ai-web-test, branch main. Deployment uses the existing Coolify Static/Nginx application; the repository root is the document root. No build or npm installation is needed to serve the website.

## Visual direction
Warm white, ivory and soft beige replace powder pink; existing red accents are retained. The layout, animation and functionality are unchanged. The upper hero uses an AI-generated group of four adult students looking down at shared paper notes, without a laptop. The lower section retains the AI-generated blonde woman with glasses and a high ponytail. Both images use natural photographic colour. No green is introduced into the design palette.

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

## New image
assets/student-blonde.png was generated with the built-in imagegen tool for this approved design. The original Unsplash asset is retained separately. The user approved publication of the local preview. This edition is deployed through the existing GitHub and Coolify pipeline.


## Upper hero photograph
assets/students-notes.png is the final user-approved generated photograph of four students, all looking at the central notes. Only the upper image placement changed; the lower blonde photograph, desktop and mobile layout, CSS and JavaScript are retained.


## Dedicated mobile layout
mobile.css is loaded for screens up to 760px and short touch-screen landscape layouts. Desktop styles are preserved. On phones the hero uses shorter copy and a compact photo, subject areas use two-column tiles, and a fixed bottom navigation links to Subjects, Tutors, How it works and Request. Touch controls are at least 44px high. Slide autoplay starts paused on phones and can be explicitly enabled; swipe and previous/next controls remain available. The earnings calculator is an optional disclosure on phones and stays visible on desktop. The quick navigation is hidden while text fields are being edited.

At a 390x844 viewport the default page height decreased from 8184 to 5118px and the hero from 1090 to 570px. Automated Edge browser checks cover 320, 360, 375, 390, 430, 600 and 760px portrait views and 844x390 touch-screen landscape. All three hero scenes are checked for text/image overlap. The 1440px desktop screenshot matched the pre-change screenshot exactly.
