"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const links = [
  { label: "About Us", href: "/about" },
  { label: "Our Programs", href: "/programs" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact Us", href: "/contact" },
];

export function NavigationLight() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 120], [0, 1]);
  const blur = useTransform(scrollY, [0, 120], [0, 20]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
    >
      <motion.div
        style={{
          backgroundColor: useTransform(
            bgOpacity,
            (v) => `rgba(250, 251, 253, ${v * 0.85})`
          ),
          backdropFilter: useTransform(
            blur,
            (v) => `blur(${v}px) saturate(140%)`
          ),
          WebkitBackdropFilter: useTransform(
            blur,
            (v) => `blur(${v}px) saturate(140%)`
          ),
          borderBottomColor: useTransform(
            bgOpacity,
            (v) => `rgba(15, 23, 42, ${v * 0.08})`
          ),
        }}
        className="border-b border-transparent"
      >
        <nav className="max-w-[1440px] mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9">
              <div className="absolute inset-0 rounded-md bg-gradient-to-br from-teal/20 to-indigo/20 blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-9 h-9 rounded-md border border-border-strong flex items-center justify-center bg-bg-elevated">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 12 L9 12 L11 6 L13 18 L15 9 L17 12 L20 12"
                    stroke="var(--color-teal)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[15px] font-bold tracking-tight text-ink">
                EKAM
              </span>
              <span className="text-[10px] text-ink-dim tracking-[0.18em] uppercase mt-0.5">
                Advanced Medical Studies
              </span>
            </div>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="px-4 py-2 text-[13.5px] text-ink-dim hover:text-ink transition-colors rounded-full"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/#admissions"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ink text-bg-elevated text-[13px] font-medium hover:bg-teal transition-colors"
          >
            Apply
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12 H19 M13 6 L19 12 L13 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </nav>
      </motion.div>
    </motion.header>
  );
}
