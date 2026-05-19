"use client";

import { motion } from "framer-motion";
import { EcgLine } from "./EcgLine";
import { NeuralNetwork } from "./NeuralNetwork";

const specialtyChips = [
  "Interventional Sciences",
  "Robotic Surgery",
  "Cardiac Care",
  "Neurosciences",
  "Critical Care",
  "Medical Imaging",
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-bg"
    >
      {/* Layer 0: ambient gradient + grain */}
      <div className="absolute inset-0 bg-grain" />
      <div className="absolute inset-0 bg-grid" />

      {/* Layer 1: neural network — large, soft, behind everything */}
      <div className="absolute inset-0 opacity-[0.55]">
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]">
          <NeuralNetwork />
        </div>
      </div>

      {/* Layer 2: large radial glow behind headline */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-60 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(94,234,212,0.18) 0%, rgba(94,234,212,0.06) 30%, transparent 60%)",
          filter: "blur(20px)",
        }}
      />

      {/* Layer 3: content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-10 pt-[180px] pb-[160px] min-h-screen flex flex-col">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.4 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-teal opacity-75 animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal" />
          </span>
          <span className="text-[11px] tracking-[0.24em] uppercase text-ink-dim font-medium">
            <strong className="font-bold text-ink">EKAM</strong>
            {" Institute "}&nbsp;·&nbsp;{" Established for the next generation of specialists"}
          </span>
        </motion.div>

        {/* Headline — staggered word reveal */}
        <h1 className="font-display text-[clamp(44px,7.2vw,108px)] leading-[0.94] tracking-[-0.035em] font-medium max-w-[14ch]">
          <StaggerLine delay={0.55}>Shaping the </StaggerLine>
          <StaggerLine delay={0.7}>
            <span className="serif-italic text-gradient-teal">future</span> of
          </StaggerLine>
          <StaggerLine delay={0.85}>advanced medical</StaggerLine>
          <StaggerLine delay={1.0}>education.</StaggerLine>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 1.25 }}
          className="mt-10 max-w-[52ch] text-[17px] md:text-[18px] leading-[1.55] text-ink-dim"
        >
          {"Where medicine meets advanced technology. "}
          <strong className="font-bold text-ink">EKAM</strong>
          {" trains the interventionists, surgeons, and clinical scientists shaping tomorrow’s healthcare — through fellowships built around live procedures, simulation, and research."}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 1.4 }}
          className="mt-12 flex flex-wrap items-center gap-3"
        >
          <a
            href="#programs"
            className="btn-glow group inline-flex items-center gap-3 px-6 h-12 rounded-full bg-ink text-bg text-[14px] font-medium tracking-tight hover:bg-teal transition-colors"
          >
            Explore Programs
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              className="transition-transform duration-500 group-hover:translate-x-1"
            >
              <path
                d="M5 12 H19 M13 6 L19 12 L13 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#admissions"
            className="inline-flex items-center gap-2 px-6 h-12 rounded-full border border-border-strong text-ink text-[14px] font-medium tracking-tight hover:bg-white/[0.04] hover:border-teal/40 transition-all"
          >
            Apply Now
          </a>
        </motion.div>

        {/* Spacer pushes meta to bottom */}
        <div className="flex-1" />

        {/* Floating specialty chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease, delay: 1.7 }}
          className="mt-16 flex flex-wrap items-center gap-x-2 gap-y-2 max-w-[680px]"
        >
          {specialtyChips.map((chip, i) => (
            <motion.span
              key={chip}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease,
                delay: 1.8 + i * 0.08,
              }}
              className="glass inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] text-ink-dim hover:text-ink transition-colors"
            >
              <span className="w-1 h-1 rounded-full bg-teal" />
              {chip}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Layer 4: ECG line at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[140px] pointer-events-none z-20">
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-[40px] pointer-events-auto">
          <EcgLine className="h-[80px]" />
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-mute"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-ink-mute to-transparent"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}

function StaggerLine({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block text-gradient"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.1, ease, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}
