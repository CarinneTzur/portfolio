const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.querySelector("span").textContent = isOpen ? "−" : "+";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.querySelector("span").textContent = "+";
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

// Keep the next section below the absolutely positioned résumé sheet.
const heroSection = document.querySelector(".hero");
const resumeSheet = document.querySelector(".resume-sheet");
function fitHeroToResume() {
  if (!heroSection || !resumeSheet) return;
  const heroBox = heroSection.getBoundingClientRect();
  const resumeBox = resumeSheet.getBoundingClientRect();
  const requiredHeight = Math.ceil(resumeBox.bottom - heroBox.top + 72);
  const minimumHeroHeight = window.innerWidth <= 760 ? 1900 : 1980;
  heroSection.style.minHeight = `${Math.max(minimumHeroHeight, requiredHeight)}px`;
}
fitHeroToResume();
window.addEventListener("load", fitHeroToResume);
window.addEventListener("resize", fitHeroToResume);
document.fonts?.ready.then(fitHeroToResume);
window.setTimeout(fitHeroToResume, 250);
if ("ResizeObserver" in window && resumeSheet) {
  new ResizeObserver(fitHeroToResume).observe(resumeSheet);
}

const sections = document.querySelectorAll("main section");
const links = document.querySelectorAll("nav a");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => link.removeAttribute("aria-current"));
      document.querySelector(`nav a[href="#${entry.target.id}"]`)?.setAttribute("aria-current", "page");
    });
  }, { threshold: 0.25 });
  sections.forEach((section) => observer.observe(section));
}

const projectData = {
  seo: {
    number: "BUILD / 001",
    type: "AGENTIC AUTOMATION · 2025",
    kicker: "AUTONOMOUS CONTENT SYSTEM",
    title: "SEO Content Agent",
    description: "An autonomous content and backlink pipeline that crawled client sites, generated optimized articles, and published across 80+ external sites.",
    outcome: "95%+ autonomous task completion; 30+ hours of weekly work reduced to under four.",
    stack: "LLMs, Make.com, APIs, JSON, automated validation.",
    mark: "SEO",
    theme: "theme-seo",
    presentation: true,
    media: null,
    links: [["OPEN PRESENTATION ↗", "assets/seo-agent-presentation.svg"]],
  },
  map: {
    number: "BUILD / 002",
    type: "FULL-STACK PRODUCT · 2026",
    kicker: "LOCATION-BASED DISCOVERY",
    title: "Coach Discovery Platform",
    description: "A map-based fitness product for finding and comparing coaches and gyms by location, specialty, availability, and market.",
    outcome: "Interactive map pins, searchable profiles, ratings, favorites, contact pathways, and market-specific filtering.",
    stack: "React, Vite, TypeScript, Supabase, SQL, APIs, JSON.",
    mark: "MAP",
    theme: "theme-map",
    media: null,
    links: [["VIEW LIVE PLATFORM ↗", "https://weightlistedmap.vercel.app/"]],
  },
  edi: {
    number: "BUILD / 003",
    type: "OPERATIONS AI · 2026",
    kicker: "MULTI-PARTY EMAIL INTELLIGENCE",
    title: "EDI Intelligence Agent",
    description: "An AI agent that parses complex EDI email threads into structured operational dashboards for carriers, shippers, 3PLs, and enterprise clients.",
    outcome: "Surfaced bottlenecks, delay ownership, and operational pain points across high-volume supply-chain communication.",
    stack: "Glean, SOQL, Outlook, LLMs, parsing logic.",
    mark: "EDI",
    theme: "theme-edi",
    media: "edi",
    links: [],
  },
  case: {
    number: "BUILD / 004",
    type: "INTERNAL AI AGENT · 2026",
    kicker: "ONE VIEW OF EVERY CASE",
    title: "Case Management Agent",
    description: "Centralized Jira tickets, emails, documents, and consultant notes into clear status updates, blockers, ownership, and next steps.",
    outcome: "Saved 5–8 hours per consultant each week while improving cross-team visibility and case continuity.",
    stack: "Glean, SOQL, Salesforce, Jira, Outlook, LLMs.",
    mark: "CASE",
    theme: "theme-case",
    media: null,
    links: [],
  },
  vision: {
    number: "BUILD / 005",
    type: "COMPUTER VISION · 2025",
    kicker: "ACCESSIBLE INTERFACE RESEARCH",
    title: "UI Detection for Accessibility",
    description: "Optimized Faster R-CNN models to classify interface elements and improve screen understanding for visually impaired users.",
    outcome: "Contributed model training, debugging, performance analysis, and final research-paper authorship.",
    stack: "Python, PyTorch, TorchVision, Faster R-CNN, ResNet, RICO.",
    mark: "UI",
    theme: "theme-vision",
    media: "vision",
    links: [
      ["OPEN PAGE 01 ↗", "assets/ui-detection-1.svg"],
      ["OPEN PAGE 02 ↗", "assets/ui-detection-2.svg"],
      ["OPEN PAGE 03 ↗", "assets/ui-detection-3.svg"],
    ],
  },
  clients: {
    number: "BUILD / 006",
    type: "FOUNDER-LED PRODUCTS · 2025—NOW",
    kicker: "DESIGNED, BUILT, AND SHIPPED",
    title: "Client Web Systems",
    description: "Custom websites and digital systems for coaches, gyms, healthcare practices, small businesses, and independent professionals.",
    outcome: "Full-cycle delivery spanning discovery, requirements, UI/UX, development, deployment, onboarding, and launch support.",
    stack: "React, Vite, JavaScript, HTML, CSS, APIs, responsive design.",
    mark: "WEB",
    theme: "theme-clients",
    media: null,
    sameTab: true,
    links: [
      ["STEMWAVE PAIN RELIEF ↗", "https://stemwavepainrelief.vercel.app/"],
      ["HEALING SEEDS ↗", "https://yourhealingseeds.vercel.app/"],
      ["COACH SITE ↗", "https://tony-hinson.vercel.app/"],
      ["KSU BARBELL ↗", "https://ksubarbell.club/"],
    ],
  },
  weightlisted: {
    number: "BUILD / 007",
    type: "FOUNDER-BUILT BUSINESS · 2025—NOW",
    kicker: "BUILT FROM ZERO TO LIVE BUSINESS",
    title: "Weightlisted",
    description: "An affordable web-solutions business and product ecosystem built from the ground up for coaches, gyms, small businesses, and independent professionals.",
    outcome: "Founded the business, led a three-person team, shaped the brand and pricing, acquired clients, shipped production websites, and developed a map-based coach and gym discovery platform.",
    stack: "Business strategy, product design, React, Vite, TypeScript, Supabase, SQL, APIs, client delivery.",
    mark: "WL",
    theme: "theme-weightlisted",
    media: null,
    links: [
      ["VIEW WEIGHTLISTED ↗", "https://weightlisted.vercel.app/"],
      ["VIEW WEIGHTLISTED MAP ↗", "https://weightlistedmap.vercel.app/"],
    ],
  },
  grocery: {
    number: "BUILD / 008",
    type: "FULL-STACK AI APP · 2025",
    kicker: "NATURAL-LANGUAGE MEAL PLANNING",
    title: "Grocery List AI Chatbot",
    description: "A full-stack grocery-planning app that turns recipes, meals, dietary goals, and party sizes into structured, portion-scaled shopping lists.",
    outcome: "Combined recipe ingestion, ingredient normalization, LLM interpretation, and traditional search into a practical mobile workflow.",
    stack: "Flutter, Dart, APIs, LLMs, Figma, Agile documentation.",
    mark: "LIST",
    theme: "theme-grocery",
    media: "video",
    links: [["OPEN DEMO VIDEO ↗", "assets/grocery-list-demo.mp4"]],
  },
  feedback: {
    number: "BUILD / 009",
    type: "PUBLISHING AUTOMATION · 2025",
    kicker: "FEEDBACK IN, STRUCTURE OUT",
    title: "Client Feedback Ingestion Agent",
    description: "An agent that parsed incoming client feedback and converted revision requests into reusable, structured content parameters.",
    outcome: "Preserved client preferences across publishing cycles, reduced repeated handoff steps, and cut manual revision work.",
    stack: "LLMs, Make.com, APIs, JSON, Google Sheets.",
    mark: "REV",
    theme: "theme-feedback",
    media: null,
    links: [],
  },
  whatsapp: {
    number: "BUILD / 010",
    type: "BUSINESS AUTOMATION · 2025",
    kicker: "ALWAYS-AVAILABLE CLIENT COMMUNICATION",
    title: "WhatsApp Business LLM Chatbot",
    description: "A reusable WhatsApp Business chatbot for service-based client communication and natural-language customer support.",
    outcome: "Automated common requests and reduced manual workload by more than 10 hours per week per client.",
    stack: "LLMs, Make.com, APIs, JSON, WhatsApp Business.",
    mark: "WA",
    theme: "theme-whatsapp",
    media: null,
    links: [],
  },
  audit: {
    number: "BUILD / 011",
    type: "SEO AUDIT AUTOMATION · 2025",
    kicker: "THIRTY-PLUS SITES, ONE PIPELINE",
    title: "AI SEO Extraction Pipeline",
    description: "An autonomous audit agent that collected sitemaps, robots.txt files, metadata, page structures, and crawl outputs across client sites.",
    outcome: "Generated actionable Google Sheets reports and eliminated over 10 hours of manual SEO analysis each week.",
    stack: "LLMs, Make.com, APIs, JSON, Python, Google Sheets.",
    mark: "AUDIT",
    theme: "theme-audit",
    media: "feedback",
    links: [
      ["OPEN AUDIT OUTPUT 01 ↗", "assets/client-feedback-agent-1.png"],
      ["OPEN AUDIT OUTPUT 02 ↗", "assets/client-feedback-agent-2.png"],
    ],
  },
  spotify: {
    number: "BUILD / 012",
    type: "MACHINE LEARNING · 2024",
    kicker: "PERSONALIZED MUSIC RECOMMENDATION",
    title: "Spotify ML Case Study",
    description: "A machine-learning recommendation architecture designed to model listener preference and music similarity.",
    outcome: "Compared supervised-learning approaches with unsupervised matrix factorization for personalized recommendations.",
    stack: "Machine learning, recommendation systems, supervised learning, matrix factorization.",
    mark: "ML",
    theme: "theme-spotify",
    media: "pdf",
    links: [["OPEN FULL CASE STUDY ↗", "assets/Spotify-ML-Case-Study.pdf"]],
  },
};

const projectViewer = document.querySelector(".project-viewer");
const projectButtons = document.querySelectorAll(".project-index-item");
const projectPresentation = document.querySelector("#project-presentation");
const projectMedia = document.querySelector("#viewer-media");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let renderTimer;

function renderProject(projectKey) {
  const project = projectData[projectKey];
  if (!project || !projectViewer || !projectPresentation || !projectMedia) return;

  window.clearTimeout(renderTimer);
  projectViewer.classList.add("is-changing");
  projectViewer.setAttribute("aria-busy", "true");
  renderTimer = window.setTimeout(() => {
    projectViewer.className = `project-viewer ${project.theme}`;
    document.querySelector("#viewer-number").textContent = project.number;
    document.querySelector("#viewer-type").textContent = project.type;
    document.querySelector("#viewer-kicker").textContent = project.kicker;
    document.querySelector("#viewer-title").textContent = project.title;
    document.querySelector("#viewer-description").textContent = project.description;
    document.querySelector("#viewer-outcome").textContent = project.outcome;
    document.querySelector("#viewer-stack").textContent = project.stack;
    document.querySelector("#viewer-mark").textContent = project.mark;
    projectPresentation.hidden = !project.presentation;
    projectMedia.replaceChildren();
    projectMedia.hidden = !project.media;

    if (project.media === "edi") {
      projectMedia.className = "project-viewer-media edi-pipeline";
      ["EDI", "EMAIL", "LLM", "DASHBOARD"].forEach((stage, index) => {
        const cell = document.createElement("span");
        cell.textContent = stage;
        cell.dataset.step = `0${index + 1}`;
        projectMedia.append(cell);
      });
    } else if (project.media === "vision") {
      projectMedia.className = "project-viewer-media vision-gallery";
      ["ui-detection-1.svg", "ui-detection-2.svg", "ui-detection-3.svg"].forEach((file, index) => {
        const link = document.createElement("a");
        link.href = `assets/${file}`;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.setAttribute("aria-label", `Open UI detection project page ${index + 1}`);
        const image = document.createElement("img");
        image.src = `assets/${file}`;
        image.alt = `UI detection project page ${index + 1}`;
        image.loading = "lazy";
        link.append(image);
        projectMedia.append(link);
      });
    } else if (project.media === "video") {
      projectMedia.className = "project-viewer-media project-video";
      const video = document.createElement("video");
      video.src = "assets/grocery-list-demo.mp4";
      video.controls = true;
      video.preload = "metadata";
      video.playsInline = true;
      video.setAttribute("aria-label", "Grocery List AI application demonstration");
      projectMedia.append(video);
    } else if (project.media === "feedback") {
      projectMedia.className = "project-viewer-media feedback-gallery";
      ["client-feedback-agent-1.png", "client-feedback-agent-2.png"].forEach((file, index) => {
        const link = document.createElement("a");
        link.href = `assets/${file}`;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        const image = document.createElement("img");
        image.src = `assets/${file}`;
        image.alt = `AI SEO extraction audit output ${index + 1}`;
        image.loading = "lazy";
        link.append(image);
        projectMedia.append(link);
      });
    } else if (project.media === "pdf") {
      projectMedia.className = "project-viewer-media project-pdf";
      const frame = document.createElement("iframe");
      frame.src = "assets/Spotify-ML-Case-Study.pdf#view=FitH";
      frame.title = "Spotify machine learning case study";
      frame.loading = "lazy";
      projectMedia.append(frame);
    } else {
      projectMedia.className = "project-viewer-media";
    }

    const actions = document.querySelector("#viewer-actions");
    actions.replaceChildren(...project.links.map(([label, href]) => {
      const link = document.createElement("a");
      link.textContent = label;
      link.href = href;
      if (!project.sameTab) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
      return link;
    }));

    projectViewer.classList.remove("is-changing");
    projectViewer.setAttribute("aria-busy", "false");
  }, prefersReducedMotion.matches ? 0 : 140);
}

function selectProject(projectKey, { updateUrl = true, scrollOnMobile = true } = {}) {
  const button = Array.from(projectButtons).find((item) => item.dataset.project === projectKey);
  if (!button || !projectData[projectKey]) return;

  projectButtons.forEach((item) => {
    const selected = item === button;
    item.classList.toggle("is-active", selected);
    item.setAttribute("aria-selected", String(selected));
    item.tabIndex = selected ? 0 : -1;
  });
  projectViewer?.setAttribute("aria-labelledby", button.id);
  renderProject(projectKey);
  try {
    sessionStorage.setItem("portfolioProject", projectKey);
  } catch {
    // Selection still works when storage is unavailable.
  }

  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("project", projectKey);
    url.hash = "builds";
    history.replaceState({ project: projectKey }, "", url);
  }
  if (scrollOnMobile && window.matchMedia("(max-width: 760px)").matches) {
    window.setTimeout(() => projectViewer.scrollIntoView({ behavior: "smooth", block: "start" }), 160);
  }
}

projectButtons.forEach((button) => {
  button.id = `project-tab-${button.dataset.project}`;
  button.setAttribute("aria-controls", "project-viewer");
  button.addEventListener("click", () => selectProject(button.dataset.project));
  button.addEventListener("keydown", (event) => {
    const keys = ["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"];
    if (!keys.includes(event.key)) return;

    event.preventDefault();
    const buttons = Array.from(projectButtons);
    const currentIndex = buttons.indexOf(button);
    let nextIndex = currentIndex;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") nextIndex = (currentIndex + 1) % buttons.length;
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + buttons.length) % buttons.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = buttons.length - 1;

    buttons[nextIndex].focus();
    selectProject(buttons[nextIndex].dataset.project, { scrollOnMobile: false });
  });
});

let storedProject = null;
try {
  storedProject = sessionStorage.getItem("portfolioProject");
} catch {
  // Ignore storage restrictions, including strict local-file privacy settings.
}
const savedProject = new URL(window.location.href).searchParams.get("project") || storedProject;
if (savedProject && projectData[savedProject]) {
  selectProject(savedProject, { updateUrl: false, scrollOnMobile: false });
} else {
  selectProject("seo", { updateUrl: false, scrollOnMobile: false });
}
window.addEventListener("pageshow", () => {
  const returningProject = new URL(window.location.href).searchParams.get("project");
  if (returningProject && projectData[returningProject]) {
    selectProject(returningProject, { updateUrl: false, scrollOnMobile: false });
  }
});

const photoCards = document.querySelectorAll(".photo-card");
function bringPhotoForward(card) {
  photoCards.forEach((item) => item.classList.toggle("is-front", item === card));
}
photoCards.forEach((card) => {
  card.addEventListener("mouseenter", () => bringPhotoForward(card));
  card.addEventListener("focus", () => bringPhotoForward(card));
  card.addEventListener("click", () => bringPhotoForward(card));
});
