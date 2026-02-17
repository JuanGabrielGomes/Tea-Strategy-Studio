"use client"

import { useEffect, useRef, useState } from "react"

type MediaWithLegacy = MediaQueryList & {
  addListener?: (listener: (event: MediaQueryListEvent) => void) => void
  removeListener?: (listener: (event: MediaQueryListEvent) => void) => void
}

function canUseCustomCursor() {
  if (typeof window === "undefined") return false
  if (window.matchMedia("(pointer: coarse)").matches) return false
  return true
}

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(pointer: coarse)") as MediaWithLegacy
    const update = () => setEnabled(!media.matches && canUseCustomCursor())

    update()

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", update)
      return () => media.removeEventListener("change", update)
    }

    media.addListener?.(update)
    return () => media.removeListener?.(update)
  }, [])

  useEffect(() => {
    if (!enabled) {
      delete document.documentElement.dataset.cursor
      return
    }

    document.documentElement.dataset.cursor = "custom"

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let targetX = x
    let targetY = y
    let rafId = 0

    const ring = ringRef.current
    const dot = dotRef.current
    if (!ring || !dot) return

    const animate = () => {
      x += (targetX - x) * 0.18
      y += (targetY - y) * 0.18

      ring.style.transform = `translate3d(${x}px, ${y}px, 0)`
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`

      rafId = window.requestAnimationFrame(animate)
    }

    const show = () => {
      ring.classList.add("is-visible")
      dot.classList.add("is-visible")
    }

    const hide = () => {
      ring.classList.remove("is-visible", "is-hovering", "is-down")
      dot.classList.remove("is-visible")
    }

    const onMove = (event: MouseEvent) => {
      targetX = event.clientX
      targetY = event.clientY
      show()
    }

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const interactive = target?.closest("a, button, input, textarea, select, label, [role='button']")
      if (interactive) {
        ring.classList.add("is-hovering")
      } else {
        ring.classList.remove("is-hovering")
      }
    }

    const onDown = () => ring.classList.add("is-down")
    const onUp = () => ring.classList.remove("is-down")

    window.addEventListener("mousemove", onMove, { passive: true })
    document.addEventListener("mouseover", onOver)
    document.addEventListener("mousedown", onDown)
    document.addEventListener("mouseup", onUp)
    document.addEventListener("mouseleave", hide)
    window.addEventListener("mouseleave", hide)
    window.addEventListener("blur", hide)

    animate()

    return () => {
      window.cancelAnimationFrame(rafId)
      window.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseover", onOver)
      document.removeEventListener("mousedown", onDown)
      document.removeEventListener("mouseup", onUp)
      document.removeEventListener("mouseleave", hide)
      window.removeEventListener("mouseleave", hide)
      window.removeEventListener("blur", hide)
      delete document.documentElement.dataset.cursor
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div ref={ringRef} className="tea-cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="tea-cursor-dot" aria-hidden="true" />
    </>
  )
}
