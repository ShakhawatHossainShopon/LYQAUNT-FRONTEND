export const NAVIGATION_CONFIG = {
  appName: "QUANT",
  appSubtitle: "Forex Indices",

  // Currency Conversion Rate for BDT display (1 USD = 120 BDT)
  usdToBdtRate: 120.0,

  // Sidebar navigation routes
  links: [
    { name: "Dashboard", href: "/", iconName: "LayoutDashboard" },
    { name: "Asset List", href: "/assets", iconName: "Layers" },
    { name: "My Assets", href: "/my-assets", iconName: "Bookmark" },
    { name: "Open Positions", href: "/positions", iconName: "Activity" },
    { name: "All Positions", href: "/all-positions", iconName: "ListOrdered" },
    { name: "Correlation", href: "/correlation", iconName: "GitCommit" },
  ],
};
