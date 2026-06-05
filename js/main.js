/* ============================================================
   PROPAINT 2027 — Main JS
   Countdown timer, AOS init, number counters, form handler
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {

  /* ---- AOS (Animate On Scroll) ---- */
  if (typeof AOS !== "undefined") {
    AOS.init({ duration: 700, once: true, offset: 60 });
  }

  /* ---- Countdown Timer ---- */
  function updateCountdown() {
    const target = new Date(SITE.eventDate).getTime();
    const now = Date.now();
    const diff = target - now;

    if (diff <= 0) {
      document.querySelectorAll(".countdown-box").forEach(b => b.querySelector(".num").textContent = "0");
      return;
    }

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);

    const d = document.getElementById("cd-days");
    const h = document.getElementById("cd-hours");
    const m = document.getElementById("cd-mins");
    const s = document.getElementById("cd-secs");

    if (d) d.textContent = String(days).padStart(3, "0");
    if (h) h.textContent = String(hours).padStart(2, "0");
    if (m) m.textContent = String(mins).padStart(2, "0");
    if (s) s.textContent = String(secs).padStart(2, "0");
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);

  /* ---- Number Counter Animation ---- */
  function animateCounter(el) {
    const target = parseFloat(el.dataset.target) || 0;
    const duration = 1800;
    const step = 16;
    const steps = Math.ceil(duration / step);
    let current = 0;
    const increment = target / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = target % 1 === 0 ? Math.round(current) : current.toFixed(1);
    }, step);
  }

  const counterEls = document.querySelectorAll(".counter-num");
  if (counterEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    counterEls.forEach(el => observer.observe(el));
  }

  /* ---- Dynamic Content Rendering ---- */

  /* Stats strip */
  const statsContainer = document.getElementById("stats-container");
  if (statsContainer && typeof STATS !== "undefined") {
    statsContainer.innerHTML = STATS.map((s, i) => `
      <div class="col-6 col-md-3 stat-item" data-aos="fade-up" data-aos-delay="${i * 100}">
        <div class="stat-num"><span class="counter-num" data-target="${parseFloat(s.num)}">${s.num.replace(/[^0-9.]/g, "") || 0}</span><span class="stat-suffix">${s.suffix}</span></div>
        <div class="stat-label">${s.label}</div>
        ${i < STATS.length - 1 ? '<div class="stat-divider d-none d-md-block" style="height:60px;width:1px;background:rgba(255,255,255,.2);position:absolute;right:0;top:50%;transform:translateY(-50%)"></div>' : ""}
      </div>
    `).join("");

    /* re-observe newly created counter elements */
    document.querySelectorAll(".counter-num").forEach(el => {
      if (!el.dataset.observed) {
        el.dataset.observed = "1";
        const obs = new IntersectionObserver((entries) => {
          entries.forEach(e => {
            if (e.isIntersecting) { animateCounter(e.target); obs.unobserve(e.target); }
          });
        }, { threshold: 0.4 });
        obs.observe(el);
      }
    });
  }

  /* Why Exhibit cards */
  const whyExhibitContainer = document.getElementById("why-exhibit-container");
  if (whyExhibitContainer && typeof WHY_EXHIBIT !== "undefined") {
    whyExhibitContainer.innerHTML = WHY_EXHIBIT.map((item, i) => `
      <div class="col-md-6 col-lg-4 why-exhibit-col" data-aos="fade-up" data-aos-delay="${(i % 3) * 100}">
        <div class="why-exhibit-icon"><i class="fas ${item.icon}"></i></div>
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
      </div>
    `).join("");
  }

  /* Exhibitor profiles */
  const profilesContainer = document.getElementById("exhibitor-profiles-container");
  if (profilesContainer && typeof EXHIBITOR_PROFILES !== "undefined") {
    const themeColors = [
      "#3b82f6"
    ];

    profilesContainer.innerHTML = EXHIBITOR_PROFILES.map((cat, i) => {
      const color = themeColors[i % themeColors.length];
      return `
      <div class="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="${(i % 3) * 100}">
        <div class="exhibitor-modern-card" style="--card-theme: ${color};">
          <div class="exhibitor-modern-header">
            <div class="exhibitor-modern-icon">
              <i class="fas ${cat.icon}"></i>
            </div>
            <div class="exhibitor-title-wrap">
              <h4>${cat.title}</h4>
              <span class="exhibitor-count">${cat.items.length} categories</span>
            </div>
          </div>
          <div class="exhibitor-modern-body">
            <ul class="exhibitor-modern-list">
              ${cat.items.map(item => `<li>${item}</li>`).join("")}
            </ul>
          </div>
        </div>
      </div>
      `;
    }).join("");
  }

  /* Visitor profiles */
  const visitorContainer = document.getElementById("visitor-profiles-container");
  if (visitorContainer && typeof VISITOR_PROFILES !== "undefined") {
    visitorContainer.innerHTML = VISITOR_PROFILES.map((v, i) => `
      <div class="col-md-6" data-aos="fade-up" data-aos-delay="${(i % 2) * 80}">
        <div class="visitor-badge">
          <i class="fas ${v.icon}"></i>
          <span>${v.text}</span>
        </div>
      </div>
    `).join("");
  }

  /* Event highlights */
  const highlightsContainer = document.getElementById("event-highlights-container");
  if (highlightsContainer && typeof EVENT_HIGHLIGHTS !== "undefined") {
    highlightsContainer.innerHTML = EVENT_HIGHLIGHTS.map((h, i) => `
      <div class="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="${(i % 3) * 80}">
        <div class="highlight-card">
          <i class="fas ${h.icon}"></i>
          <p>${h.text}</p>
        </div>
      </div>
    `).join("");
  }

  /* Why visit */
  const whyVisitContainer = document.getElementById("why-visit-container");
  if (whyVisitContainer && typeof WHY_VISIT !== "undefined") {
    whyVisitContainer.innerHTML = WHY_VISIT.map((item, i) => `
      <div class="col-md-6" data-aos="fade-up" data-aos-delay="${(i % 2) * 80}">
        <div class="visitor-badge">
          <i class="fas ${item.icon}"></i>
          <span>${item.text}</span>
        </div>
      </div>
    `).join("");
  }

  /* Market insights */
  const insightsContainer = document.getElementById("market-insights-container");
  if (insightsContainer && typeof MARKET_INSIGHTS !== "undefined") {
    insightsContainer.innerHTML = MARKET_INSIGHTS.map((item, i) => `
      <div class="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="${i * 100}">
        <div class="insight-card">
          <div class="big-num">${item.num}</div>
          <p>${item.label}</p>
        </div>
      </div>
    `).join("");
  }

  /* Industry sectors */
  const sectorsContainer = document.getElementById("industry-sectors-container");
  if (sectorsContainer && typeof INDUSTRY_SECTORS !== "undefined") {
    sectorsContainer.innerHTML = INDUSTRY_SECTORS.map((s, i) => `
      <div class="col-md-6" data-aos="fade-up" data-aos-delay="${(i % 2) * 100}">
        <div class="reason-item">
          <div class="reason-icon"><i class="fas ${s.icon}"></i></div>
          <div>
            <h5>${s.title}</h5>
            <p>${s.desc}</p>
          </div>
        </div>
      </div>
    `).join("");
  }

  /* Sponsor packages */
  const sponsorContainer = document.getElementById("sponsor-packages-container");
  if (sponsorContainer && typeof SPONSOR_PACKAGES !== "undefined") {
    sponsorContainer.innerHTML = SPONSOR_PACKAGES.map((pkg, i) => `
      <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="${(i % 3) * 80}">
        <div class="sponsor-card ${pkg.featured ? "featured" : ""}">
          <div class="sponsor-card-header">
            <span class="sponsor-tier-badge">${pkg.exclusive ? "Exclusive" : pkg.slots + " Available"}</span>
            <h3>${pkg.tier}</h3>
            <div class="price">${pkg.price} <small>${pkg.gst}</small></div>
          </div>
          <div class="sponsor-card-body">
            ${pkg.benefits.map(b => `
              <div class="sponsor-benefit">
                <i class="fas fa-check-circle"></i>
                <span>${b}</span>
              </div>`).join("")}
          </div>
          <div class="sponsor-card-footer">
            <a href="contact.html" class="btn btn-${pkg.featured ? "primary" : "secondary"} w-100 rounded-pill-btn">Enquire Now</a>
          </div>
        </div>
      </div>
    `).join("");
  }

  // /* ---- Hero background images from data.js ---- */
  // if (typeof IMAGES !== "undefined") {
  //   const heroBg = document.querySelector(".hero");
  //   if (heroBg && !heroBg.dataset.bgSet) {
  //     heroBg.style.backgroundImage = `url('${IMAGES.heroBg}')`;
  //     heroBg.dataset.bgSet = "1";
  //   }
  //   document.querySelectorAll("[data-img-key]").forEach(el => {
  //     const key = el.dataset.imgKey;
  //     if (IMAGES[key]) el.style.backgroundImage = `url('${IMAGES[key]}')`;
  //   });
  //   document.querySelectorAll("[data-img-src-key]").forEach(el => {
  //     const key = el.dataset.imgSrcKey;
  //     if (IMAGES[key]) el.src = IMAGES[key];
  //   });
  // }

  /* ---- Contact form ---- */
  const contactForm = document.getElementById("enquiry-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const btn = contactForm.querySelector("[type=submit]");
      btn.textContent = "Sending…";
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = "Send Enquiry";
        btn.disabled = false;
        const alert = document.getElementById("form-success");
        if (alert) { alert.style.display = "block"; setTimeout(() => alert.style.display = "none", 4000); }
        contactForm.reset();
      }, 1200);
    });
  }

  /* ---- Sticky navbar shrink on scroll ---- */
  const navbar = document.querySelector(".site-navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      navbar.style.boxShadow = window.scrollY > 50
        ? "0 4px 20px rgba(0,0,0,.35)"
        : "0 2px 12px rgba(0,0,0,.25)";
    });
  }

});
