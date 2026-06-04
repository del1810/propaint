/* ============================================================
   PROPAINT 2027 — Shared Header & Footer Components
   Injected into every page via DOMContentLoaded
   ============================================================ */

(function () {
  /* Detect current page for active nav highlighting */
  const page = window.location.pathname.split("/").pop() || "index.html";

  function isActive(href) {
    if (href === "index.html" && (page === "" || page === "/" || page === "index.html")) return "active";
    if (href !== "index.html" && page.includes(href.replace(".html", ""))) return "active";
    return "";
  }

  /* ---- Header ---- */
  const headerHTML = `
  <header id="site-header">
  <!-- Topbar -->
  <div class="topbar d-none d-lg-block">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center gap-3">
          <a href="tel:+919500532234" class="d-flex align-items-center gap-2">
            <i class="fas fa-phone-alt"></i> +91 95005 32234
          </a>
          <div class="separator"></div>
          <a href="mailto:sales@propaint.in" class="d-flex align-items-center gap-2">
            <i class="fas fa-envelope"></i> sales@propaint.in
          </a>
          <div class="separator"></div>
          <span class="d-flex align-items-center gap-2" style="font-size:.875rem;color:#1a1a1a;font-weight:600;">
            <i class="fas fa-map-marker-alt"></i> Chennai Trade Centre, Chennai
          </span>
        </div>
        <div class="social-icons d-flex align-items-center">
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Twitter / X"><i class="fab fa-x-twitter"></i></a>
          <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>
  </div>

  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg site-navbar">
    <div class="container">
      <a class="navbar-brand" href="index.html">
        <img src="/images/logo.png" alt="PROPAINT 2027" class="navbar-logo">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMain" aria-controls="navMain" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navMain">
        <ul class="navbar-nav ms-auto py-0 pe-0 pe-lg-4" style="border-right:0">
          <li class="nav-item"><a class="nav-link ${isActive("index.html")}"      href="index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link ${isActive("about.html")}"      href="about.html">About</a></li>
          <li class="nav-item"><a class="nav-link ${isActive("exhibitors.html")}" href="exhibitors.html">Exhibitors</a></li>
          <li class="nav-item"><a class="nav-link ${isActive("visitors.html")}"   href="visitors.html">Visitors</a></li>
          <li class="nav-item"><a class="nav-link ${isActive("sponsors.html")}"   href="sponsors.html">Sponsors</a></li>
          <li class="nav-item"><a class="nav-link ${isActive("contact.html")}"    href="contact.html">Contact</a></li>
        </ul>
        <div class="navbar-phone d-none d-lg-flex">
          <i class="fa fa-phone-alt icon"></i>
          <div>
            <small>Call Us Now</small>
            <strong>+91 95005 32234</strong>
          </div>
        </div>
      </div>
    </div>
  </nav>
  </header>`;

  /* ---- Footer ---- */
  const footerHTML = `
  <footer class="site-footer">
    <div class="container">
      <div class="row gy-5">

        <!-- Brand -->
        <div class="col-lg-4 col-md-6">
          <img src="/images/logo.png" alt="PROPAINT 2027" class="footer-logo">
          <p>South India's largest dedicated business platform for the paints, coatings and surface finishing industry — connecting manufacturers, distributors, architects, contractors and industrial buyers.</p>
          <div class="footer-social">
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-x-twitter"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="col-lg-2 col-md-3 col-6">
          <h5 class="footer-heading">Quick Links</h5>
          <ul class="footer-links">
            <li><a href="index.html"><i class="fas fa-chevron-right"></i> Home</a></li>
            <li><a href="about.html"><i class="fas fa-chevron-right"></i> About</a></li>
            <li><a href="exhibitors.html"><i class="fas fa-chevron-right"></i> Exhibitors</a></li>
            <li><a href="visitors.html"><i class="fas fa-chevron-right"></i> Visitors</a></li>
            <li><a href="sponsors.html"><i class="fas fa-chevron-right"></i> Sponsors</a></li>
            <li><a href="contact.html"><i class="fas fa-chevron-right"></i> Contact</a></li>
          </ul>
        </div>

        <!-- Event Info -->
        <div class="col-lg-2 col-md-3 col-6">
          <h5 class="footer-heading">Event Info</h5>
          <ul class="footer-links">
            <li><a href="exhibitors.html"><i class="fas fa-chevron-right"></i> Book a Stall</a></li>
            <li><a href="visitors.html"><i class="fas fa-chevron-right"></i> Register to Visit</a></li>
            <li><a href="sponsors.html"><i class="fas fa-chevron-right"></i> Sponsorship</a></li>
            <li><a href="contact.html"><i class="fas fa-chevron-right"></i> Send Enquiry</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="col-lg-4 col-md-6">
          <h5 class="footer-heading">Contact Us</h5>
          <div class="footer-contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <span>Chennai Trade Centre, Nandambakkam, Chennai – 600 089, Tamil Nadu, India</span>
          </div>
          <div class="footer-contact-item">
            <i class="fas fa-phone-alt"></i>
            <span>+91 95005 32234</span>
          </div>
          <div class="footer-contact-item">
            <i class="fas fa-envelope"></i>
            <span>sales@propaint.in</span>
          </div>
          <div class="footer-contact-item">
            <i class="fas fa-globe"></i>
            <span>www.propaint.in</span>
          </div>
          <div class="footer-contact-item">
            <i class="fas fa-calendar-alt"></i>
            <span><strong style="color:var(--theme-primary)">May 14–16, 2027</strong> &nbsp;|&nbsp; Chennai Trade Centre</span>
          </div>
        </div>

      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <p class="mb-0">&copy; 2025 PROPAINT 2027. Organised by <a href="#">Fair Connects India (FCI)</a>. All rights reserved.</p>
      </div>
    </div>
  </footer>`;

  /* ---- Inject ---- */
  document.addEventListener("DOMContentLoaded", function () {
    const hp = document.getElementById("header-placeholder");
    if (hp) hp.innerHTML = headerHTML;

    const fp = document.getElementById("footer-placeholder");
    if (fp) fp.innerHTML = footerHTML;

    /* ---- Fixed header: set body padding-top to header height ---- */
    function syncBodyPadding() {
      const hdr = document.getElementById("site-header");
      if (hdr) {
        document.body.style.paddingTop = hdr.offsetHeight + "px";
      }
    }
    syncBodyPadding();
    window.addEventListener("resize", syncBodyPadding);

    /* ---- Scroll-to-top button ---- */
    const scrollBtn = document.createElement("button");
    scrollBtn.id = "scroll-top";
    scrollBtn.setAttribute("aria-label", "Scroll to top");
    scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    document.body.appendChild(scrollBtn);

    scrollBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    /* ---- Scroll event: sticky header collapse + show scroll-to-top ---- */
    window.addEventListener("scroll", function () {
      const siteHeader = document.getElementById("site-header");
      const scrollY = window.scrollY || window.pageYOffset;

      if (siteHeader) {
        if (scrollY > 60) {
          siteHeader.classList.add("scrolled");
        } else {
          siteHeader.classList.remove("scrolled");
        }
        /* keep body padding in sync as topbar collapses */
        document.body.style.paddingTop = siteHeader.offsetHeight + "px";
      }

      if (scrollY > 300) {
        scrollBtn.classList.add("visible");
      } else {
        scrollBtn.classList.remove("visible");
      }
    }, { passive: true });
  });
})();
