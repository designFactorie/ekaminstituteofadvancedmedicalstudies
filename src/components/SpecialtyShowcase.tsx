"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Specialty = {
  id: string;
  index: string;
  name: string;
  tagline: string;
  description: string;
  procedures: string[];
  stats: { value: string; label: string }[];
  hue: { from: string; to: string };
};

const specialties: Specialty[] = [
  {
    id: "cardio",
    index: "01",
    name: "Interventional Cardiology",
    tagline: "Hearts, restored — through millimetre-precise catheters",
    description:
      "Fellowships built around live cath-lab exposure: complex PCI, structural intervention, and chronic total occlusion programs led by working interventionalists.",
    procedures: [
      "Complex PCI",
      "Structural Heart",
      "TAVR / TAVI",
      "IVUS & OCT Imaging",
      "Rotational Atherectomy",
    ],
    stats: [
      { value: "1,800+", label: "Procedures / yr" },
      { value: "24/7", label: "Cath lab access" },
    ],
    hue: { from: "#5eead4", to: "#22d3ee" },
  },
  {
    id: "ir",
    index: "02",
    name: "Interventional Radiology",
    tagline: "Image-guided medicine, performed millimetre by millimetre",
    description:
      "Hybrid suite training in oncologic, vascular, and neuro-interventional procedures — the fastest-growing surgical sub-specialty in modern medicine.",
    procedures: [
      "TACE / TARE",
      "Endovascular Repair",
      "Embolisation",
      "Biliary & GI Intervention",
      "Pain Intervention",
    ],
    stats: [
      { value: "DSA", label: "Bi-plane suite" },
      { value: "2 yr", label: "Fellowship" },
    ],
    hue: { from: "#67e8f9", to: "#818cf8" },
  },
  {
    id: "robotic",
    index: "03",
    name: "Robotic Surgery",
    tagline: "The surgeon, augmented",
    description:
      "Hands-on console hours on multi-arm robotic platforms across urology, gynaecology, GI, and thoracic indications — with structured simulator-to-suite progression.",
    procedures: [
      "Robotic Radical Prostatectomy",
      "Robotic Hysterectomy",
      "Robotic Hernia Repair",
      "Robotic Thoracic",
      "Simulator Library",
    ],
    stats: [
      { value: "120+ hrs", label: "Console time" },
      { value: "4-arm", label: "Robotic platform" },
    ],
    hue: { from: "#818cf8", to: "#c084fc" },
  },
  {
    id: "onco",
    index: "04",
    name: "Surgical Oncology",
    tagline: "Precision oncology, end to end",
    description:
      "A multi-disciplinary fellowship across surgical, medical, and radiation oncology — anchored in tumour boards, molecular profiling, and complex resections.",
    procedures: [
      "Complex Resections",
      "HIPEC",
      "Robotic Oncology",
      "Tumour Board",
      "Molecular Diagnostics",
    ],
    stats: [
      { value: "Weekly", label: "Tumour boards" },
      { value: "Multi-D", label: "Care model" },
    ],
    hue: { from: "#c084fc", to: "#f472b6" },
  },
  {
    id: "sports",
    index: "05",
    name: "Sports & Regenerative Medicine",
    tagline: "Returning athletes — and everyone else — to motion",
    description:
      "Arthroscopy, biologics, and joint preservation training built alongside elite athletic care pathways and a dedicated rehabilitation institute.",
    procedures: [
      "Arthroscopy",
      "Joint Preservation",
      "PRP & Biologics",
      "Cartilage Restoration",
      "Athletic Rehab",
    ],
    stats: [
      { value: "On-site", label: "Performance lab" },
      { value: "18 mo", label: "Fellowship" },
    ],
    hue: { from: "#f472b6", to: "#fb923c" },
  },
  {
    id: "critical",
    index: "06",
    name: "Critical Care",
    tagline: "The discipline of the next decisive hour",
    description:
      "Multi-organ ICU training with ECMO, point-of-care ultrasound, and a research curriculum in sepsis, ARDS, and neuro-critical care.",
    procedures: [
      "ECMO",
      "Point-of-care US",
      "Mechanical Ventilation",
      "Neuro-critical Care",
      "Sepsis Bundles",
    ],
    stats: [
      { value: "ECMO", label: "Certified centre" },
      { value: "24/7", label: "Intensivist cover" },
    ],
    hue: { from: "#fb923c", to: "#fbbf24" },
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function SpecialtyShowcase() {
  const [active, setActive] = useState<string>(specialties[0].id);

  return (
    <section
      id="specialties"
      className="relative w-full bg-bg py-[140px] overflow-hidden"
    >
      {/* Top divider — subtle */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />

      {/* Section header */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-px bg-teal" />
          <span className="text-[11px] tracking-[0.24em] uppercase text-teal font-medium">
            Chapter 02 — Advanced Fields of Medicine
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, ease, delay: 0.1 }}
            className="font-display text-[clamp(36px,5.4vw,76px)] leading-[0.96] tracking-[-0.035em] font-medium max-w-[20ch]"
          >
            <span className="text-gradient">Six disciplines.</span>
            <br />
            <span className="serif-italic text-gradient-teal">
              One institution
            </span>{" "}
            <span className="text-gradient">built for them.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            className="max-w-[44ch] text-[15px] leading-[1.6] text-ink-dim"
          >
            {"Each fellowship at "}
            <strong className="font-bold text-ink">EKAM</strong>
            {" is engineered around the procedures, the technologies, and the volume that produce specialists, not students. Hover a discipline to step inside."}
          </motion.p>
        </div>
      </div>

      {/* Horizontal panel system */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="flex h-[640px] w-full gap-2.5">
          {specialties.map((s) => {
            const isActive = s.id === active;
            return (
              <SpecialtyPanel
                key={s.id}
                specialty={s}
                isActive={isActive}
                onActivate={() => setActive(s.id)}
              />
            );
          })}
        </div>
      </div>

      {/* Hint */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 mt-8 flex items-center justify-between text-[11px] tracking-[0.18em] uppercase text-ink-mute">
        <span>Hover to expand</span>
        <span className="hidden md:inline">
          06 disciplines · {specialties.find((s) => s.id === active)?.name}
        </span>
      </div>
    </section>
  );
}

function SpecialtyPanel({
  specialty,
  isActive,
  onActivate,
}: {
  specialty: Specialty;
  isActive: boolean;
  onActivate: () => void;
}) {
  return (
    <motion.div
      onMouseEnter={onActivate}
      onFocus={onActivate}
      tabIndex={0}
      role="button"
      aria-expanded={isActive}
      aria-label={specialty.name}
      animate={{ flexGrow: isActive ? 7 : 1 }}
      transition={{ duration: 0.9, ease }}
      className="relative h-full min-w-[88px] rounded-2xl overflow-hidden cursor-pointer outline-none ring-0 focus-visible:ring-2 focus-visible:ring-teal/60"
      style={{ flexBasis: 0 }}
    >
      {/* Background fill */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(160deg, ${specialty.hue.from}26 0%, ${specialty.hue.to}14 60%, rgba(10,15,28,0.9) 100%)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg/80" />

      {/* Subtle grid texture inside */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Border */}
      <div className="absolute inset-0 rounded-2xl border border-border" />
      <motion.div
        className="absolute inset-0 rounded-2xl"
        animate={{
          borderColor: isActive
            ? "rgba(94, 234, 212, 0.4)"
            : "rgba(148, 163, 184, 0.12)",
        }}
        transition={{ duration: 0.6, ease }}
        style={{ borderWidth: 1, borderStyle: "solid" }}
      />

      {/* Glow when active */}
      <motion.div
        className="absolute -inset-px rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.8, ease }}
        style={{
          background: `radial-gradient(ellipse at top, ${specialty.hue.from}20 0%, transparent 60%)`,
        }}
      />

      {/* Vertical index + collapsed name */}
      <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
        <span
          className="text-[11px] tracking-[0.24em] uppercase font-medium"
          style={{ color: isActive ? specialty.hue.from : "#94a3b8" }}
        >
          {specialty.index}
        </span>
        <motion.span
          animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 8 }}
          transition={{ duration: 0.4, ease }}
          className="text-[11px] tracking-[0.24em] uppercase text-ink-dim"
        >
          Fellowship
        </motion.span>
      </div>

      {/* Collapsed: vertical-rotated name */}
      <AnimatePresence>
        {!isActive && (
          <motion.div
            key="collapsed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <span
              className="block whitespace-nowrap font-display text-[15px] tracking-tight font-medium text-ink"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              {specialty.name}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded content */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            key="expanded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease, delay: 0.2 }}
            className="absolute inset-0 p-8 md:p-10 flex flex-col"
          >
            {/* Top spacer for index */}
            <div className="h-8" />

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.25 }}
              className="mt-auto"
            >
              <div className="serif-italic text-[15px] text-ink-dim mb-3 max-w-[40ch]">
                {specialty.tagline}
              </div>
              <h3 className="font-display text-[clamp(28px,3.2vw,42px)] leading-[1.02] tracking-[-0.025em] font-medium max-w-[16ch] text-ink">
                {specialty.name}
              </h3>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.32 }}
              className="mt-6 max-w-[52ch] text-[14.5px] leading-[1.55] text-ink-dim"
            >
              {specialty.description}
            </motion.p>

            {/* Procedures + stats */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.4 }}
              className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[640px]"
            >
              <div>
                <div className="text-[10px] tracking-[0.24em] uppercase text-ink-mute mb-3">
                  Core procedures
                </div>
                <ul className="space-y-1.5">
                  {specialty.procedures.map((p, i) => (
                    <motion.li
                      key={p}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        ease,
                        delay: 0.5 + i * 0.05,
                      }}
                      className="flex items-center gap-2 text-[13.5px] text-ink"
                    >
                      <span
                        className="w-1 h-1 rounded-full"
                        style={{ background: specialty.hue.from }}
                      />
                      {p}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.24em] uppercase text-ink-mute mb-3">
                  Programme
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {specialty.stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        ease,
                        delay: 0.55 + i * 0.08,
                      }}
                      className="glass rounded-xl p-4"
                    >
                      <div
                        className="font-display text-[24px] tracking-tight font-medium leading-none"
                        style={{ color: specialty.hue.from }}
                      >
                        {stat.value}
                      </div>
                      <div className="mt-2 text-[11px] tracking-[0.16em] uppercase text-ink-mute">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
                <motion.a
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease, delay: 0.72 }}
                  href="#programs"
                  className="mt-6 inline-flex items-center gap-2 text-[13px] text-ink hover:text-teal transition-colors group"
                >
                  View fellowship details
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path
                      d="M5 12 H19 M13 6 L19 12 L13 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
