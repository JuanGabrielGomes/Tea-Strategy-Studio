import "./globals.css"
import type { Metadata } from "next"
import Header from "@/components/Header"
import SiteFooter from "@/components/SiteFooter"
import CustomCursor from "@/components/CustomCursor"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  metadataBase: new URL("https://teastrategystudio.com"),
  title: {
    default: "Tea Strategy Studio",
    template: "%s | Tea Strategy Studio",
  },
  description: "Criacao estrategica de conteudo para empresas que querem crescer com coerencia.",
  icons: {
    icon: [{ url: "/favicon-tea.png", type: "image/png" }],
    shortcut: ["/favicon-tea.png"],
    apple: [{ url: "/favicon-tea.png" }],
  },
  openGraph: {
    title: "Tea Strategy Studio",
    description: "Criacao estrategica de conteudo para empresas que querem crescer com coerencia.",
    type: "website",
    locale: "pt_BR",
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
          dangerouslySetInnerHTML={{
            __html:
              '(function(){try{var s=localStorage.getItem("tea-theme");var t=(s==="dark"||s==="light")?s:((window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)?"dark":"light");document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t;}catch(e){}})();',
          }}
        />
      </head>
      <body className="tea-body">
        <CustomCursor />
        <Header />
        <div className="pt-20 pb-28 md:pb-32">{children}</div>
        <SiteFooter />
        <SpeedInsights />
      </body>
    </html>
  )
}
