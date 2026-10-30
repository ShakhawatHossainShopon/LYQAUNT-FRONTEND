export const NAVIGATION_CONFIG = {
  appName: "QUANT",
  appSubtitle: "Forex Indices",

  // Account environment info
  environment: "Real",
  accountType: "Cent",

  // Currency Conversion Rate for BDT display (1 USD = 120 BDT)
  usdToBdtRate: 120.0,

  // Sidebar navigation routes
  links: [
    { name: "Dashboard", href: "/", iconName: "LayoutDashboard" },
    { name: "Position Volumes", href: "/positions", iconName: "Activity" },
    { name: "Asset List", href: "/assets", iconName: "Layers" },
    { name: "My Assets", href: "/my-assets", iconName: "Bookmark" },
    { name: "All Positions", href: "/all-positions", iconName: "ListOrdered" },
    { name: "Correlation", href: "/correlation", iconName: "GitCommit" },
  ],
};
