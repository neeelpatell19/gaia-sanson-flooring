// ===========================================
// ANALYTICS EVENTS
// Sends events to Google Analytics 4 once its tag is on the page (gtag.js
// pushes to window.dataLayer). Until a GA4 measurement ID is added, every
// call here is a safe no-op, so the events can be wired in ahead of time.
//
// To switch GA4 on, set GA4_ID below to the property's measurement ID
// ("G-XXXXXXXXXX"). Mark "generate_lead" as a key event (conversion) in GA4.
// ===========================================

export const GA4_ID = "";

export function loadAnalytics() {
  if (!GA4_ID || typeof window === "undefined" || window.gtag) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA4_ID);
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  document.head.appendChild(script);
}

export function track(event, params = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, { page_path: window.location.pathname, ...params });
}

// One listener for the whole site: clicks on phone, WhatsApp, e-mail and
// brochure (PDF) links are tracked wherever those links appear.
export function trackLinkClicks() {
  if (typeof document === "undefined") return;
  document.addEventListener("click", (event) => {
    const link = event.target.closest && event.target.closest("a[href]");
    if (!link) return;
    const href = link.getAttribute("href") || "";
    if (href.startsWith("tel:")) track("phone_click", { link_url: href });
    else if (href.startsWith("mailto:")) track("email_click", { link_url: href });
    else if (/wa\.me|whatsapp\.com/.test(href)) track("whatsapp_click", { link_url: href });
    else if (/\.pdf($|\?)/i.test(href)) track("brochure_download", { file_name: href.split("/").pop() });
  });
}
