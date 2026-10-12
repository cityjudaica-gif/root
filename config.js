// Настройки сайта «Истоки». Этот файл НЕ меняется при обновлении index.html —
// впишите сюда свои значения один раз.
window.ISTOKI_CONFIG = {
  // Адрес посредника на Cloudflare, без слэша в конце
  PROXY_URL: "https://istoki-proxy.aligiftstip.workers.dev",

  // Europeana — бесплатный ключ (инструкция в README). Пусто — источник скрыт
  EUROPEANA_KEY: "alformoruinu",

  // DPLA (Цифровая публичная библиотека Америки) — бесплатный ключ. Пусто — источник скрыт
  DPLA_KEY: "106ea0e6380f1ef94f52b65987ec9cfc",

  // Адрес вашего сайта для рекламных блоков
  AD_URL: "https://mystorytel.com",

  // Поиск по Национальному архиву США — true после добавления NARA_KEY в воркер
  NARA_ENABLED: false,

  // Реклама в подвале сайта. Добавляйте, удаляйте и меняйте блоки здесь — код трогать не нужно.
  // title / text / cta можно писать одной строкой или отдельно для языков: { ru: "...", en: "..." }
  // image — необязательная ссылка на логотип (квадратная картинка). Пустой список [] скрывает блок.
  FOOTER_ADS: [
    {
      title: { ru: "Mystorytel — семейная летопись", en: "Mystorytel — family chronicle" },
      text:  { ru: "Древо, воспоминания, фото и печатная книга памяти", en: "Tree, memories, photos and a printed memory book" },
      cta:   { ru: "Попробовать", en: "Try it" },
      url: "https://mystorytel.com",
      badge: "M"
    },
    {
      title: { ru: "Реестр Кишинёвского еврейского кладбища", en: "Kishinev Jewish Cemetery registry" },
      text:  { ru: "Найдите сектор и номер могилы", en: "Find the sector and grave number" },
      cta:   { ru: "Открыть", en: "Open" },
      url: "https://gbsearch.vercel.app/",
      badge: "✡"
    }
  ]
};
