import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Shrikrishna Sutar | Portfolio",
  description: "Welcome to my full stack Next.js 14 space portfolio.",
  icons: {
    icon: [
      {
        url: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        url: "/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png"
      }
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon/safari-pinned-tab.svg",
        color: "#030014"
      }
    ]
  },
  manifest: "/favicon/site.webmanifest",
  themeColor: "#030014",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Shrikrishna Sutar"
  },
  keywords: [
    "reactjs",
    "nextjs",
    "vercel",
    "react",
    "space-portfolio",
    "portfolio",
    "react-icons",
    "cn",
    "clsx",
    "3d-portfolio",
    "3d-website",
    "sonner",
    "framer-motion",
    "motion",
    "animation",
    "heroicons",
    "next-themes",
    "postcss",
    "prettier",
    "react-dom",
    "tailwindcss",
    "tailwindcss-animate",
    "ui/ux",
    "js",
    "javascript",
    "typescript",
    "eslint",
    "html",
    "css",
  ] as Array<string>,
  authors: {
    name: "Shrikrishna Sutar",
    url: "https://github.com/Skrishna0703",
  
  },
} as const;
