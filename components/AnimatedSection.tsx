"use client"

import { HTMLMotionProps, motion, useReducedMotion } from "framer-motion"

type AnimatedSectionProps = {
  children: React.ReactNode
  className?: string
} & Omit<HTMLMotionProps<"section">, "children" | "className">

export default function AnimatedSection({
  children,
  className = "",
  ...props
}: AnimatedSectionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
      {...props}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75 }}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.section>
  )
}
