/* ============================================================================
   SITE CONFIG  —  EDIT THIS BLOCK TO CHANGE COMPANY DETAILS SITE-WIDE.
   Name, phone, email and address below feed the header, footer and
   contact page automatically. You do not need to touch any HTML file.
   ============================================================================ */

const SITE = {
  name: "Aryan Networking Solutions",
  shortName: "Aryan",
  tagline: "Let us link you with success",

  // Logo. This is the real logo artwork, background removed.
  // Set to "" to fall back to the drawn SVG mark (see LOGO_SVG below).
  logoImage: "assets/img/logo-mark.png",

  phone: "+91 91103 85837",
  phoneRaw: "+919110385837",

  // WhatsApp is the same line as the phone number.
  whatsapp: "+91 91103 85837",
  whatsappRaw: "919110385837",

  email: "shyam@aryannetworkingsolutions.com",

  person: {
    name: "Shyam S",
    role: "Managing Partner"
  },

  address: {
    line1: "Plot No. 38 &amp; 39, G-2, Heavenly Hills Residency",
    line2: "Sai Laxmi Layout, D.P. Pally, Nizampet",
    line3: "Pragathi Nagar, Hyderabad &ndash; 500 090",
    line4: "Telangana, India"
  },

  // Navigation. Add or remove items here — the header and footer both use it.
  nav: [
    { label: "Home",       href: "index.html" },
    { label: "Solutions",  href: "solutions.html" },
    { label: "Services",   href: "services.html" },
    { label: "About Us",   href: "about.html" },
    { label: "Careers",    href: "careers.html" },
    { label: "Contact Us", href: "contact.html" }
  ],

  // Footer link column
  quickLinks: [
    { label: "Enterprise Networking", href: "solutions.html#networking" },
    { label: "Data Centre &amp; Storage", href: "solutions.html#datacentre" },
    { label: "Surveillance &amp; Workplace", href: "solutions.html#workplace" },
    { label: "Managed Services",      href: "services.html" },
    { label: "About Us",              href: "about.html" },
    { label: "Contact Us",            href: "contact.html" }
  ]
};

/* ============================================================================
   Below this line is rendering logic. You normally do not need to edit it.
   ============================================================================ */

/* The logo mark, traced from the company logo: a double-outlined navy triangle
   with the bold blue "A" inside, a chevron crossbar at the base, and a circuit
   trace running through it with hollow ring nodes.
   Colours come from CSS (--logo-line, --logo-blue, --logo-ring) so the mark
   re-themes itself on the white header and the navy footer.
   If you have the original artwork file, set SITE.logoImage above and this SVG
   is bypassed entirely. */
const LOGO_SVG = `
<svg class="logo-mark" viewBox="0 0 520 400" aria-hidden="true">
  <!-- bold blue "A": long left leg, right leg cut short -->
  <path class="lg-fill" d="M250 62 L388 278 H300 L250 199 L149 360 H61 Z"/>

  <g class="lg-line" fill="none" stroke-linejoin="miter" stroke-linecap="square">
    <!-- outer triangle -->
    <path d="M250 8 L490 392 H8 Z" stroke-width="13"/>
    <!-- inner triangle: the two sloping sides -->
    <path d="M55 366 L250 57 L445 366" stroke-width="13"/>
    <!-- inner base, left segment only -->
    <path d="M55 366 H150" stroke-width="13"/>
    <!-- chevron crossbar across the foot of the A -->
    <path d="M248 392 L277 300 L492 392" stroke-width="13"/>
    <!-- circuit trace -->
    <g stroke-width="8">
      <path d="M82 175 H178 L250 92"/>
      <path d="M250 92 L340 227"/>
      <path d="M238 227 H340"/>
      <path d="M340 227 L462 278"/>
      <path d="M462 278 L505 365"/>
    </g>
  </g>

  <!-- hollow ring nodes -->
  <g class="lg-line lg-ring" stroke-width="8">
    <circle cx="82"  cy="175" r="11"/>
    <circle cx="250" cy="92"  r="11"/>
    <circle cx="238" cy="227" r="11"/>
    <circle cx="340" cy="227" r="11"/>
    <circle cx="462" cy="278" r="11"/>
    <circle cx="505" cy="365" r="11"/>
  </g>
</svg>`;

// Uses the artwork file when SITE.logoImage is set, otherwise the inline SVG.
function logoMarkup() {
  return SITE.logoImage
    ? `<img class="logo-mark" src="${SITE.logoImage}" alt="${SITE.name} logo">`
    : LOGO_SVG;
}

function currentPage() {
  const path = window.location.pathname.split("/").pop();
  return path === "" ? "index.html" : path;
}

function renderHeader() {
  const here = currentPage();
  const links = SITE.nav.map(item => {
    const active = item.href === here ? ' class="active"' : "";
    return `<a href="${item.href}"${active}>${item.label}</a>`;
  }).join("");

  return `
  <div class="topbar">
    <div class="container topbar-inner">
      <span class="topbar-tag">${SITE.tagline}</span>
      <div class="topbar-links">
        <a href="mailto:${SITE.email}">${SITE.email}</a>
        <a href="tel:${SITE.phoneRaw}">${SITE.phone}</a>
      </div>
    </div>
  </div>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="index.html">
        ${logoMarkup()}
        <span class="brand-text">
          <span class="brand-name">${SITE.name}</span>
          <span class="brand-sub">${SITE.tagline}</span>
        </span>
      </a>
      <nav class="main-nav" id="mainNav">${links}</nav>
      <a class="btn btn-primary header-cta" href="contact.html">Get a Quote</a>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>`;
}

function renderFooter() {
  const quick = SITE.quickLinks
    .map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join("");
  const nav = SITE.nav
    .map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join("");

  return `
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-col footer-about">
        <div class="brand footer-brand">
          ${logoMarkup()}
          <span class="brand-text">
            <span class="brand-name">${SITE.name}</span>
            <span class="brand-sub">${SITE.tagline}</span>
          </span>
        </div>
        <p>Design, deployment and managed operations of enterprise network,
           security and data centre infrastructure &mdash; engineered for uptime.</p>
      </div>

      <div class="footer-col">
        <h4>Company</h4>
        <ul>${nav}</ul>
      </div>

      <div class="footer-col">
        <h4>What We Do</h4>
        <ul>${quick}</ul>
      </div>

      <div class="footer-col">
        <h4>Reach Us</h4>
        <ul class="footer-contact">
          <li><a href="tel:${SITE.phoneRaw}">${SITE.phone}</a></li>
          <li><a href="https://wa.me/${SITE.whatsappRaw}">WhatsApp ${SITE.whatsapp}</a></li>
          <li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
          <li class="footer-address">
            ${SITE.address.line1}<br>
            ${SITE.address.line2}<br>
            ${SITE.address.line3}<br>
            ${SITE.address.line4}
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <span>&copy; <span id="year"></span> ${SITE.name}. All rights reserved.</span>
        <span>${SITE.person.name} &middot; ${SITE.person.role}</span>
      </div>
    </div>
  </footer>`;
}

function mount() {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  if (header) header.innerHTML = renderHeader();
  if (footer) footer.innerHTML = renderFooter();

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      toggle.classList.toggle("open");
    });
  }

  // Fill any element marked with data-site="phone" | "email" | "whatsapp" etc.
  document.querySelectorAll("[data-site]").forEach(el => {
    const key = el.getAttribute("data-site");
    const map = {
      name: SITE.name,
      tagline: SITE.tagline,
      phone: SITE.phone,
      whatsapp: SITE.whatsapp,
      email: SITE.email,
      person: SITE.person.name,
      role: SITE.person.role,
      address: [SITE.address.line1, SITE.address.line2,
                SITE.address.line3, SITE.address.line4].join("<br>")
    };
    if (map[key] !== undefined) el.innerHTML = map[key];
  });

  document.querySelectorAll("[data-href]").forEach(el => {
    const key = el.getAttribute("data-href");
    const map = {
      phone: "tel:" + SITE.phoneRaw,
      email: "mailto:" + SITE.email,
      whatsapp: "https://wa.me/" + SITE.whatsappRaw
    };
    if (map[key]) el.setAttribute("href", map[key]);
  });

  // Header condenses and gains a hairline once the page is scrolled
  const bar = document.querySelector(".site-header");
  if (bar) {
    const onScroll = () => bar.classList.toggle("scrolled", window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Reveal-on-scroll. Children of a .stagger group fade in one after another.
  document.querySelectorAll(".stagger").forEach(group => {
    [...group.children].forEach((child, i) => {
      child.classList.add("reveal");
      child.style.setProperty("--d", Math.min(i, 6) * 80 + "ms");
    });
  });

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -60px 0px" });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
}

document.addEventListener("DOMContentLoaded", mount);
