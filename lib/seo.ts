import type { Metadata } from "next"

export const siteConfig = {
  name: "Ottea Studio",
  url: "https://teastrategystudio.com",
  email: "otteastudio@gmail.com",
  instagram: "https://www.instagram.com/otteastudio/",
  whatsapp: "https://wa.me/555496492500",
  ogImage: "/logo-ottea.png",
  descriptionPt:
    "Estudio de branding e estrategia para marcas que precisam de posicionamento, identidade visual, conteudo e direcao.",
  descriptionEn:
    "Brand and strategy studio for businesses that need positioning, visual identity, content and strategic direction.",
} as const

type SupportedLocale = "pt-BR" | "en"

type BuildMetadataInput = {
  title: string
  description: string
  path: string
  locale: SupportedLocale
}

function normalizePath(path: string) {
  if (!path) {
    return "/"
  }

  return path.startsWith("/") ? path : `/${path}`
}

function buildAlternates(path: string) {
  const normalizedPath = normalizePath(path)
  const portuguesePath = normalizedPath.startsWith("/en") ? normalizedPath.replace(/^\/en/, "") || "/" : normalizedPath
  const englishPath = normalizedPath.startsWith("/en") ? normalizedPath : normalizedPath === "/" ? "/en" : `/en${normalizedPath}`

  return {
    canonical: normalizedPath,
    languages: {
      "pt-BR": portuguesePath,
      en: englishPath,
      "x-default": portuguesePath,
    },
  }
}

function getAbsoluteUrl(path: string) {
  const normalizedPath = normalizePath(path)
  return normalizedPath === "/" ? siteConfig.url : `${siteConfig.url}${normalizedPath}`
}

export function buildMetadata({ title, description, path, locale }: BuildMetadataInput): Metadata {
  const alternates = buildAlternates(path)
  const openGraphLocale = locale === "pt-BR" ? "pt_BR" : "en_US"
  const absoluteUrl = getAbsoluteUrl(path)

  return {
    title,
    description,
    alternates,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl,
      siteName: siteConfig.name,
      locale: openGraphLocale,
      type: "website",
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
      title,
      description,
      images: [siteConfig.ogImage],
    },
  }
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: getAbsoluteUrl("/logo-ottea.png"),
  image: getAbsoluteUrl(siteConfig.ogImage),
  description: siteConfig.descriptionPt,
  email: siteConfig.email,
  sameAs: [siteConfig.instagram],
  areaServed: {
    "@type": "Country",
    name: "Brasil",
  },
  serviceType: [
    "Branding",
    "Identidade visual",
    "Estrategia de conteudo",
    "Gestao de redes sociais",
    "Trafego pago",
  ],
}

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: ["pt-BR", "en"],
}
