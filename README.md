# Aryan Networking Solutions — static website

A plain HTML/CSS/JS site. No build step, no framework, no dependencies.
Open `index.html` in a browser and it works.

## Files

```
index.html        Home
solutions.html    Solutions (networking, security, cloud, data centre, workplace)
services.html     Services + engagement models
about.html        About us, mission, values
careers.html      Careers
contact.html      Contact details, enquiry form, map
assets/css/styles.css   All styling
assets/js/site.js       Company details + header/footer
```

## The two files you will actually edit

### 1. `assets/js/site.js` — company details

Everything at the top of this file (the `SITE` block) feeds the header, the
footer and the contact page automatically. Change the phone number here and it
updates everywhere on the site.

```js
const SITE = {
  name: "Aryan Networking Solutions",
  tagline: "Let us link you with success",
  phone: "+91 91103 85837",
  phoneRaw: "+919110385837",     // used for the tap-to-call link
  whatsapp: "+91 70136 03940",
  whatsappRaw: "917013603940",   // used for the wa.me link, no + or spaces
  email: "shyam@aryannetworkingsolutions.com",
  ...
};
```

The `nav` and `quickLinks` arrays in the same block control the menu and the
footer links — add or remove a line and both update.

### 2. `assets/css/styles.css` — colours and type

The whole design system lives in the `:root` block at the very top — colours,
corner radii, shadows, fonts. The ones you are most likely to touch:

```css
--accent:      #1F80AC;   /* brand blue, taken from the logo */
--accent-2:    #2E9BCC;   /* brighter step, used in hovers and gradients */
--accent-light:#6FC0E4;   /* lighter tint, for text on dark sections */
--navy-900:    #0A0F1C;   /* darkest — footer, hero base */
--navy-800:    #0F1626;   /* dark sections */
```

Change `--accent` and the entire site re-themes. `--accent-light` exists because
the logo blue is too dark to read as text on the navy sections — if you change
the brand colour, change both.

## Fonts

Headings use Plus Jakarta Sans, body text uses Inter, both loaded from Google
Fonts via a `<link>` in each page's `<head>`. If a visitor is offline or Google
Fonts is blocked, the site falls back to Segoe UI / system sans and still looks
correct — just less distinctive.

To change the fonts: swap the `<link>` in all six pages, then update
`--font` and `--font-display` in the `:root` block.

## Components you can reuse

Drop these class names into any page and they just work:

| Class | What it does |
|---|---|
| `card` | White panel, lifts on hover with a brand hairline across the top |
| `card-feature` | The dark version of `card`, for the one tile you want to stand out |
| `bento` | 6-column grid. Children span 2 by default; add `b-wide` for 3, `b-full` for 6 |
| `grid grid-2` / `grid-3` / `grid-4` | Plain equal-width grids |
| `split` / `split-wide` | Two columns, `split-wide` weights the left one heavier |
| `stagger` | Put on any container — children fade in one after another on scroll |
| `reveal` | Put on a single element to fade it in on scroll |
| `ticks` | Bulleted list with brand-coloured dots |
| `chip` | Rounded pill, used for the industries row |
| `faq` | Wraps `<details>` / `<summary>` into a styled accordion |
| `eyebrow` | Small uppercase label above a heading |
| `link-arrow` | Text link with an arrow that slides on hover |
| `section` / `section-alt` / `section-dark` | Page bands: white, tinted, navy |

## Placing text on a page from the config

Anywhere in the HTML you can write:

```html
<span data-site="phone"></span>          <!-- prints the phone number -->
<a data-href="whatsapp" href="#">Chat</a> <!-- links to WhatsApp -->
```

Valid `data-site` values: `name`, `tagline`, `phone`, `whatsapp`, `email`,
`person`, `role`, `address`.
Valid `data-href` values: `phone`, `email`, `whatsapp`.

## Still to add

Deliberately left out for now, per the brief — add them when you have the
material:

- **Clients / customer logos** — a logo strip section on the home page
- **Certifications / partner badges** — a section on the home page or its own page
- **Real photos** — the site currently uses no imagery, only the logo mark
- **A favicon** — export the mark at 32×32 and 180×180 and link it in each page's
  `<head>`
## The logo

The site uses the real logo artwork:

- `assets/img/logo-mark.png` — the triangle mark, cropped out of the supplied
  photo with the paper background made transparent. This is what appears in the
  header and footer.
- `assets/img/logo-original.jpg` — the untouched photo as supplied, kept for
  reference. Not used by any page.

It is set in `site.js`:

```js
logoImage: "assets/img/logo-mark.png",
```

Point that at a different file to swap the logo. Set it to `""` and the site
falls back to a drawn SVG version of the mark (the `LOGO_SVG` constant lower
down in the same file).

**Worth upgrading when you can.** `logo-mark.png` is derived from a photograph of
a printed logo, so it carries the softness and slight colour noise of the print.
If you can get the original vector from whoever designed the cards (`.ai`, `.cdr`,
`.eps` or `.svg`), export a transparent PNG at ~1000px wide, drop it in
`assets/img/`, and point `logoImage` at it — it will be noticeably crisper on
high-resolution screens.

The logo's linework is dark navy, so on the navy footer it sits on a small white
chip (`.footer-brand .logo-mark` in the stylesheet). If you get a white or
light version of the logo, remove that rule and use the light file instead.

## Contact form

The form on `contact.html` opens the visitor's email app with everything filled
in. That needs no server, but it does depend on the visitor having mail set up.

To use a hosted form service instead (recommended once live), sign up at
Formspree or similar and replace the `<form>` tag in `contact.html` with:

```html
<form class="form-grid" action="https://formspree.io/f/YOUR_ID" method="POST">
```

then delete the `<script>` block at the bottom of that page.

## Publishing

It is a static site, so any host works — Netlify, Vercel, GitHub Pages, Cloudflare
Pages, or plain shared hosting via FTP. Upload the folder as-is; `index.html` is
the entry point.

To preview locally with clean URLs:

```bash
npx serve .
```
