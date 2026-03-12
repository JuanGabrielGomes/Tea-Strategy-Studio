import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/seo"

const routes = [
  "/",
  "/sobre",
  "/metodo",
  "/projetos",
  "/diagnostico",
  "/en",
  "/en/sobre",
  "/en/metodo",
  "/en/projetos",
  "/en/diagnostico",
] as const

function getAbsoluteUrl(path: string) {
  return path === "/" ? siteConfig.url : `${siteConfig.url}${path}`
}

function getAlternates(path: string) {
  const portuguesePath = path.startsWith("/en") ? path.replace(/^\/en/, "") || "/" : path
  const englishPath = path.startsWith("/en") ? path : path === "/" ? "/en" : `/en${path}`

  return {
    languages: {
      "pt-BR": getAbsoluteUrl(portuguesePath),
      en: getAbsoluteUrl(englishPath),
    },
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map((path) => ({
    url: getAbsoluteUrl(path),
    lastModified,
    changeFrequency: path.includes("diagnostico") ? "monthly" : "weekly",
    priority: path === "/" ? 1 : path.startsWith("/en") ? 0.7 : 0.8,
    alternates: getAlternates(path),
  }))
}