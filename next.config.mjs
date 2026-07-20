/** @type {import('next').NextConfig} */

// ─── Product → aanraders redirect map ───────────────────────────────────────
// Thin product pages (~100-150 woorden) worden 301-geredirect naar de
// bijbehorende aanraders-pagina waar de vergelijkende content al staat.
// Noindex-categorieën (slimme-cameras, slimme-deurbellen, slimme-sloten)
// zijn hier weggelaten — die hebben al een noindex meta-tag.

const PRODUCT_REDIRECTS = [
  // ── Slimme verlichting → /aanraders/beste-slimme-verlichting ──────────────
  "philips-hue-white-ambiance-starterkit",
  "philips-hue-white-e27",
  "philips-hue-color-ambiance-e27",
  "philips-hue-lightstrip-plus",
  "govee-rgbic-ledstrip",
  "tapo-l530e",
  "innr-zigbee-e27",
  "tapo-l510e",
  "philips-hue-gu10-white-ambiance",
  "philips-hue-dimmer-switch-v2",
  "tapo-l920-5-ledstrip",
  "govee-outdoor-ledstrip",
  "innr-smart-gu10-zigbee-4pack",
  "philips-hue-go-tafellamp-white-and-color-zwart",
  "philips-hue-lily-starter-pack-white-and-color-prik",
  "philips-hue-play-hdmi-sync-box-8k",
  "tp-link-tapo-l630-wit-en-gekleurd-licht-gu10-4-pac",
  "nanoleaf-lines-60-degrees-starterkit-slimme-verlic",
  "nanoleaf-shapes-mini-triangles-uitbreidingspakket-",
  "govee-neon-rope-light-2-white-5m",
  "tp-link-tapo-l535e-wit-en-gekleurd-licht-e27",
  "tp-link-tapo-l535e-wit-en-gekleurd-licht-e27-4-pac",
  "tp-link-tapo-l930-5-lichtstrip-5m",
].map((slug) => ({
  source: `/producten/${slug}`,
  destination: "/aanraders/beste-slimme-verlichting",
  permanent: true,
})).concat([
  // ── Sensoren → /aanraders/beste-slimme-sensoren ───────────────────────────
  "aqara-deur-raamsensor-p2",
  "eve-motion-matter-bewegingssensor",
  "aqara-fp2-aanwezigheidssensor",
  "aqara-temperatuur-rv-t1",
  "tapo-t110",
  "aqara-waterleksensor-t1",
  "tapo-t315",
  "aqara-vibratiesensor",
  "aqara-motion-sensor",
  "eve-weather",
  "tapo-t100",
  "eve-door-window",
  "philips-hue-motion-sensor",
  "aqara-rookmelder",
  "aqara-mini-switch-t1",
  "tapo-t300-waterlekkagesensor",
  "aqara-presence-sensor-fp1e",
  "sonoff-zigbee-bewegingssensor-snzb-03p-voor-huisbe",
  "sonoff-zigbee-openingssensor-voor-smart-home-syste",
  "aqara-cube-t1-pro",
  "bosch-deur-en-raamcontact-2-matter",
  "bosch-draadloze-rookmelder-2",
  "tp-link-tapo-t30-smart-sensor-kit",
].map((slug) => ({
  source: `/producten/${slug}`,
  destination: "/aanraders/beste-slimme-sensoren",
  permanent: true,
}))).concat([
  // ── Slimme stekkers → /aanraders/beste-slimme-stekkers ───────────────────
  "tapo-p115",
  "tapo-p110",
  "eve-energy",
  "philips-hue-smart-plug",
  "philips-hue-smart-plug-combipack",
  "innr-zigbee-outdoor-smart-plug",
  "switchbot-matter-plug-mini",
  "aqara-smart-plug",
  "tp-link-tapo-p410m",
  "bosch-smart-plug-compact",
].map((slug) => ({
  source: `/producten/${slug}`,
  destination: "/aanraders/beste-slimme-stekkers",
  permanent: true,
}))).concat([
  // ── Smart home hubs → /aanraders/beste-smart-home-hub ────────────────────
  "samsung-smartthings-hub",
  "homey-pro-early-2023",
  "homey-pro-2026",
  "homey-bridge",
  "philips-hue-bridge",
  "home-assistant-green",
  "tapo-h200-smart-hub",
  "aqara-hub-m3",
  // Bosch hub valt in slimme-thermostaten categorie maar hoort hier
  "bosch-smart-home-controller-2",
].map((slug) => ({
  source: `/producten/${slug}`,
  destination: "/aanraders/beste-smart-home-hub",
  permanent: true,
}))).concat([
  // ── Mesh wifi → /aanraders/beste-mesh-wifi-systeem ───────────────────────
  "tp-link-deco-xe75",
  "eero-pro-6e",
  "google-nest-wifi-pro",
  "tp-link-deco-xe75-2pack",
  "tp-link-deco-be25",
  "tp-link-deco-be25-2-pack",
  "tp-link-deco-be65-2-pack",
  "tp-link-deco-x10-3-pack",
].map((slug) => ({
  source: `/producten/${slug}`,
  destination: "/aanraders/beste-mesh-wifi-systeem",
  permanent: true,
}))).concat([
  // ── Energie-monitors → /aanraders/beste-energie-monitor ──────────────────
  "frient-elektriciteitsmeter-interface-2-p1",
  "shelly-pro-3em",
  "brostrend-mini-ax900-wifi-6",
  "zendure-slimme-meter-p1",
  "shelly-em",
].map((slug) => ({
  source: `/producten/${slug}`,
  destination: "/aanraders/beste-energie-monitor",
  permanent: true,
}))).concat([
  // ── Slimme thermostaten → /aanraders/beste-slimme-thermostaat ────────────
  "google-nest-thermostaat",
  "slimme-thermostaat-combiketel",
  "tado-smart-thermostat-v3",
  "netatmo-slimme-thermostaat",
  "tado-smart-thermostat-v3-bedraad",
  "bosch-slimme-kamerthermostaat-2",
].map((slug) => ({
  source: `/producten/${slug}`,
  destination: "/aanraders/beste-slimme-thermostaat",
  permanent: true,
}))).concat([
  // ── Radiatorkranen → /aanraders/beste-slimme-radiatorkraan ───────────────
  "tapo-ke100-kit",
  "tado-radiatorkraan-v3-plus",
  "bosch-slimme-radiatorknop-2-matter",
].map((slug) => ({
  source: `/producten/${slug}`,
  destination: "/aanraders/beste-slimme-radiatorkraan",
  permanent: true,
})));

const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "media.s-bol.com" },
      { protocol: "https", hostname: "m.media-amazon.com" },
    ],
  },

  async redirects() {
    return [
      {
        source: "/categorie",
        destination: "/#categorieen",
        permanent: true,
      },
      {
        source: "/categorieen",
        destination: "/#categorieen",
        permanent: true,
      },
      // Aanraders buiten verlichtingsfocus
      {
        source: "/aanraders/beste-robotstofzuigers-2026",
        destination: "/aanraders/beste-slimme-verlichting",
        permanent: true,
      },
      // Keyword-kannibalisatie fix: beste-slimme-stekkers-2026 → canonieke pagina
      {
        source: "/aanraders/beste-slimme-stekkers-2026",
        destination: "/aanraders/beste-slimme-stekkers",
        permanent: true,
      },
      {
        source: "/aanraders/beste-slimme-deurbel",
        destination: "/aanraders/beste-slimme-sensoren",
        permanent: true,
      },
      {
        source: "/aanraders/beste-slimme-camera",
        destination: "/aanraders/beste-slimme-verlichting",
        permanent: true,
      },
      {
        source: "/aanraders/beste-slimme-slot",
        destination: "/aanraders/beste-smart-home-hub",
        permanent: true,
      },
      // Categorie redirects
      {
        source: "/categorie/slimme-cameras",
        destination: "/categorie/slimme-verlichting",
        permanent: true,
      },
      {
        source: "/categorie/slimme-deurbellen",
        destination: "/categorie/slimme-verlichting",
        permanent: true,
      },
      // Topic redirects
      {
        source: "/topic/beveiliging",
        destination: "/aanraders/beste-slimme-verlichting",
        permanent: true,
      },
      {
        source: "/topic/smart-home-basis",
        destination: "/aanraders/beste-smart-home-hub",
        permanent: true,
      },
      {
        source: "/topic/wifi-netwerk",
        destination: "/how-to/wifi-verbeteren-voor-smart-home",
        permanent: true,
      },
      // Product-pagina redirects: thin template (~100-150 woorden) → aanraders
      ...PRODUCT_REDIRECTS,
    ];
  },
};

export default nextConfig;
