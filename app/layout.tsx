import "./globals.css"
import type { Metadata } from "next"
import { Parisienne } from "next/font/google"
import Header from "@/components/Header"
import SiteFooter from "@/components/SiteFooter"
import CustomCursor from "@/components/CustomCursor"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { organizationJsonLd, siteConfig, websiteJsonLd } from "@/lib/seo"

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: "Tea Strategy Studio",
    template: "%s | Tea Strategy Studio",
  },
  description: siteConfig.descriptionPt,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "marketing",
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? {
        google: process.env.GOOGLE_SITE_VERIFICATION,
      }
    : undefined,
  icons: {
    icon: [{ url: "/favicon-tea.png", type: "image/png" }],
    shortcut: ["/favicon-tea.png"],
    apple: [{ url: "/favicon-tea.png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.descriptionPt,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.descriptionPt,
    images: [siteConfig.ogImage],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              '(function(){try{var s=localStorage.getItem("tea-theme");var t=(s==="dark"||s==="light")?s:((window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)?"dark":"light");document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t;}catch(e){}})();',
          }}
        />
      </head>
      <body className={`tea-body ${parisienne.variable}`}>
        <CustomCursor />
        <Header />
        <div className="pt-20 pb-28 md:pb-32">{children}</div>
        <SiteFooter />
        <SpeedInsights />
      </body>
    </html>
  )
}