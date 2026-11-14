/* Статистика посещений для всех страниц сайта. Номера счётчиков — в /config.js.
   Имена и фамилии в статистику не попадают: поисковые данные не хранятся в адресе страницы. */
(function(){
const CFG = window.ISTOKI_CONFIG || {};
/* ===================== статистика: Яндекс Метрика и/или Google Analytics (номера — в config.js) ===================== */
// Введённые имена и фамилии в статистику НЕ отправляются: адрес страницы передаётся без параметров поиска.
const YM_ID = parseInt(CFG.YANDEX_METRIKA_ID, 10) || 0;
const GA_ID = String(CFG.GA4_ID || "").trim();
const cleanUrl = () => location.origin + location.pathname;
(function initAnalytics(){
  if (YM_ID){
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    ym(YM_ID, "init", { defer: true, clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: false });
    ym(YM_ID, "hit", cleanUrl(), { title: document.title, referer: document.referrer });
  }
  if (GA_ID){
    const s = document.createElement("script"); s.async = true; s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA_ID);
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){ dataLayer.push(arguments); };
    gtag("js", new Date());
    gtag("config", GA_ID, { send_page_view: false, anonymize_ip: true });
    gtag("event", "page_view", { page_location: cleanUrl(), page_title: document.title, page_referrer: document.referrer });
  }
})();
function track(goal, params){
  params = params || {};
  try { if (YM_ID && window.ym) ym(YM_ID, "reachGoal", goal, params); } catch(e){}
  try { if (GA_ID && window.gtag) gtag("event", goal, params); } catch(e){}
}
// все переходы по ссылкам: на mystorytel.com — отдельной целью с местом на странице, на другие сайты — с названием сайта
document.addEventListener("click", e => {
  const a = e.target.closest("a[href]"); if (!a) return;
  let u; try { u = new URL(a.href, location.href); } catch(err){ return; }
  if (u.host === location.host) return;
  if (/mystorytel\.com$/i.test(u.hostname)){
    const placement = u.searchParams.get("utm_content") || (a.closest("footer") ? "footer" : a.closest(".ext") ? "sidebar_links" : "other");
    track("mystorytel_click", { placement });
  } else {
    const row = a.closest(".rrow");
    if (a.dataset.plan) track("plan_click", { site: u.hostname.replace(/^www\./, ""), item: a.dataset.plan });
    track("outbound_click", { site: u.hostname.replace(/^www\./, ""), kind: row ? "result" : a.dataset.plan ? "plan" : a.closest(".ext") ? "also_search" : a.closest(".cov") ? "source_search" : "other" });
  }
}, true);
window.istokiTrack = track;
window.ISTOKI_STATS_ON = !!(YM_ID || GA_ID);
})();
