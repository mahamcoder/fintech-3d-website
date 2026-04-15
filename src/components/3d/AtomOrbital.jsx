/**
 * AtomOrbital — PREMIUM Edition
 * Pure SVG + SMIL + Framer Motion badges. Zero JS main loop.
 *
 * What makes this premium:
 * ✦ Nucleus pulse halos (2 expanding rings)
 * ✦ Sparkle cross on the nucleus center
 * ✦ Per-ring glow filter (soft neon cyan ring lines)
 * ✦ Comet-particle trailing each satellite
 * ✦ Scattered field particles on faint outer orbits
 * ✦ Richer sphere gradients (deeper shadows, crisper highlights)
 * ✦ Accent-bar badges with icon dots
 */
import React from 'react';
import { motion } from 'framer-motion';

/* Shared orbit path shape (used via mpath) */
const OP = 'M 252,0 A 252,91 0 1,1 -252,0 A 252,91 0 1,1 252,0';
const OP_OUTER = 'M 285,0 A 285,104 0 1,1 -285,0 A 285,104 0 1,1 285,0';

const BADGES = [
  { label: 'AI Analytics', sub: 'Real-time insights', color: '#3B82F6', pos: { top: '25%', right: '20%' }, delay: 0 },
  { label: 'Global Markets', sub: '160+ countries', color: '#06B6D4', pos: { top: '58%', left: '25%' }, delay: 0.6 },
  { label: '$2.5B+ Deployed', sub: 'Capital optimized', color: '#8B5CF6', pos: { bottom: '10%', right: '25%' }, delay: 1.2 },
];

export const AtomOrbital = ({ className = '' }) => (
  <div className={className} style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible' }}>

    {/* ═══════════════════ SVG ATOM ═══════════════════ */}
    <svg viewBox="-320 -320 640 640" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', overflow: 'visible' }} aria-hidden="true">

      <defs>
        {/* ── Gradient: Nucleus ── */}
        <radialGradient id="NG" cx="34%" cy="26%" r="66%" fx="34%" fy="26%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.98" />
          <stop offset="6%" stopColor="#cff7fe" />
          <stop offset="22%" stopColor="#22d3ee" />
          <stop offset="50%" stopColor="#0891b2" />
          <stop offset="78%" stopColor="#0a4d65" />
          <stop offset="100%" stopColor="#052c3d" />
        </radialGradient>

        {/* ── Gradient: Satellite bright teal ── */}
        <radialGradient id="ST" cx="34%" cy="26%" r="66%" fx="34%" fy="26%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#f0fdff" />
          <stop offset="10%" stopColor="#a5f3fc" />
          <stop offset="38%" stopColor="#22d3ee" />
          <stop offset="70%" stopColor="#0891b2" />
          <stop offset="100%" stopColor="#0b4c65" />
        </radialGradient>

        {/* ── Gradient: Satellite deep blue-teal ── */}
        <radialGradient id="SD" cx="34%" cy="26%" r="66%" fx="34%" fy="26%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#e0f9ff" />
          <stop offset="15%" stopColor="#67e8f9" />
          <stop offset="45%" stopColor="#0e7490" />
          <stop offset="78%" stopColor="#064e63" />
          <stop offset="100%" stopColor="#021f2a" />
        </radialGradient>

        {/* ── Gradient: Satellite soft grey ── */}
        <radialGradient id="SG" cx="34%" cy="26%" r="66%" fx="34%" fy="26%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="22%" stopColor="#e2e8f0" />
          <stop offset="58%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#475569" />
        </radialGradient>

        {/* ── Nucleus glow ── */}
        <filter id="NF" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="16" result="b" />
          <feFlood floodColor="#22d3ee" floodOpacity="0.45" result="c" />
          <feComposite in="c" in2="b" operator="in" result="g" />
          <feMerge><feMergeNode in="g" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>

        {/* ── Satellite glow ── */}
        <filter id="SF" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="9" result="b" />
          <feFlood floodColor="#22d3ee" floodOpacity="0.55" result="c" />
          <feComposite in="c" in2="b" operator="in" result="g" />
          <feMerge><feMergeNode in="g" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>

        {/* ── Ring glow ── */}
        <filter id="RF" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>

        {/* ── Sparkle glow ── */}
        <filter id="SPK" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="5" result="b" />
          <feFlood floodColor="#38bdf8" floodOpacity="0.8" result="c" />
          <feComposite in="c" in2="b" operator="in" result="g" />
          <feMerge><feMergeNode in="g" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>

        {/* ── Ambient radial background ── */}
        <radialGradient id="BG" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.13" />
          <stop offset="55%" stopColor="#22d3ee" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ── Ambient background glow ── */}
      <circle cx="0" cy="0" r="305" fill="url(#BG)" />

      {/* ══════════════════════════════════
          OUTER PARTICLE RING — very faint,
          slow drift, creates depth field
      ══════════════════════════════════ */}
      <g opacity="0.5">
        <animateTransform attributeName="transform" type="rotate"
          from="30 0 0" to="390 0 0" dur="35s" repeatCount="indefinite" />
        <path id="OPO" d={OP_OUTER} fill="none" />
        {[0, 1, 2, 3].map((i) => (
          <circle key={i} r="3.5" fill="rgba(34,211,238,0.5)" filter="url(#SF)">
            <animateMotion dur="35s" begin={`${-i * 8.75}s`} repeatCount="indefinite" rotate="none">
              <mpath href="#OPO" />
            </animateMotion>
          </circle>
        ))}
      </g>

      {/* ══════════════════════════════════
          RING 1 — equatorial, CW 20s
      ══════════════════════════════════ */}
      <g>
        <animateTransform attributeName="transform" type="rotate"
          from="0 0 0" to="360 0 0" dur="20s" repeatCount="indefinite" />
        <path id="OR1" d={OP} fill="none" />
        {/* Glowing ring line */}
        <ellipse cx="0" cy="0" rx="252" ry="91" fill="none"
          stroke="rgba(34,211,238,0.45)" strokeWidth="1.8" filter="url(#RF)" />
        {/* Bright accent arc (top portion) */}
        <ellipse cx="0" cy="0" rx="252" ry="91" fill="none"
          stroke="rgba(34,211,238,0.80)" strokeWidth="1.0"
          strokeDasharray="80 1000" />
        {/* Large bright teal satellite */}
        <g filter="url(#SF)">
          <circle r="24" fill="url(#ST)">
            <animateMotion dur="7s" repeatCount="indefinite" rotate="none">
              <mpath href="#OR1" />
            </animateMotion>
          </circle>
        </g>
        {/* Small grey satellite (opposite) */}
        <g filter="url(#SF)">
          <circle r="13" fill="url(#SG)">
            <animateMotion dur="7s" begin="-3.5s" repeatCount="indefinite" rotate="none">
              <mpath href="#OR1" />
            </animateMotion>
          </circle>
        </g>
        {/* Tiny particle comet */}
        <circle r="4" fill="rgba(34,211,238,0.7)" filter="url(#SF)">
          <animateMotion dur="7s" begin="-1.8s" repeatCount="indefinite" rotate="none">
            <mpath href="#OR1" />
          </animateMotion>
        </circle>
      </g>

      {/* ══════════════════════════════════
          RING 2 — 62° tilt, CCW 14s
      ══════════════════════════════════ */}
      <g>
        <animateTransform attributeName="transform" type="rotate"
          from="62 0 0" to="-298 0 0" dur="14s" repeatCount="indefinite" />
        <path id="OR2" d={OP} fill="none" />
        <ellipse cx="0" cy="0" rx="252" ry="91" fill="none"
          stroke="rgba(34,211,238,0.45)" strokeWidth="1.8" filter="url(#RF)" />
        <ellipse cx="0" cy="0" rx="252" ry="91" fill="none"
          stroke="rgba(100,230,255,0.80)" strokeWidth="1.0"
          strokeDasharray="100 1000" />
        {/* Large deep teal */}
        <g filter="url(#SF)">
          <circle r="31" fill="url(#SD)">
            <animateMotion dur="11s" repeatCount="indefinite" rotate="none">
              <mpath href="#OR2" />
            </animateMotion>
          </circle>
        </g>
        {/* Small bright teal */}
        <g filter="url(#SF)">
          <circle r="14" fill="url(#ST)">
            <animateMotion dur="11s" begin="-5.5s" repeatCount="indefinite" rotate="none">
              <mpath href="#OR2" />
            </animateMotion>
          </circle>
        </g>
        {/* Comet particle */}
        <circle r="5" fill="rgba(100,230,255,0.65)" filter="url(#SF)">
          <animateMotion dur="11s" begin="-2.5s" repeatCount="indefinite" rotate="none">
            <mpath href="#OR2" />
          </animateMotion>
        </circle>
      </g>

      {/* ══════════════════════════════════
          RING 3 — -50° tilt, CW 17s
      ══════════════════════════════════ */}
      <g>
        <animateTransform attributeName="transform" type="rotate"
          from="-50 0 0" to="310 0 0" dur="17s" repeatCount="indefinite" />
        <path id="OR3" d={OP} fill="none" />
        <ellipse cx="0" cy="0" rx="252" ry="91" fill="none"
          stroke="rgba(34,211,238,0.45)" strokeWidth="1.8" filter="url(#RF)" />
        <ellipse cx="0" cy="0" rx="252" ry="91" fill="none"
          stroke="rgba(34,211,238,0.80)" strokeWidth="1.0"
          strokeDasharray="60 1000" />
        {/* Medium teal */}
        <g filter="url(#SF)">
          <circle r="20" fill="url(#ST)">
            <animateMotion dur="15s" repeatCount="indefinite" rotate="none">
              <mpath href="#OR3" />
            </animateMotion>
          </circle>
        </g>
        {/* Small grey */}
        <g filter="url(#SF)">
          <circle r="11" fill="url(#SG)">
            <animateMotion dur="15s" begin="-7.5s" repeatCount="indefinite" rotate="none">
              <mpath href="#OR3" />
            </animateMotion>
          </circle>
        </g>
        {/* Comet particle */}
        <circle r="4" fill="rgba(34,211,238,0.6)" filter="url(#SF)">
          <animateMotion dur="15s" begin="-3.8s" repeatCount="indefinite" rotate="none">
            <mpath href="#OR3" />
          </animateMotion>
        </circle>
      </g>

      {/* ══════════════════════════════════
          NUCLEUS PULSE HALOS (before nucleus)
      ══════════════════════════════════ */}
      <circle cx="0" cy="0" r="100" fill="none" stroke="rgba(34,211,238,0.22)" strokeWidth="1.2">
        <animate attributeName="r" values="92;106;92" dur="3.2s" repeatCount="indefinite" />
        <animate attributeName="stroke-opacity" values="0.22;0.50;0.22" dur="3.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="0" cy="0" r="114" fill="none" stroke="rgba(34,211,238,0.12)" strokeWidth="1">
        <animate attributeName="r" values="108;122;108" dur="4.5s" repeatCount="indefinite" />
        <animate attributeName="stroke-opacity" values="0.12;0.30;0.12" dur="4.5s" repeatCount="indefinite" />
      </circle>

      {/* ══════════════════════════════════
          NUCLEUS — floats up/down, always on top
      ══════════════════════════════════ */}
      <g>
        {/* Gentle vertical float */}
        <animateTransform
          attributeName="transform" type="translate"
          values="0,0; 0,-14; 0,0"
          dur="3.8s" repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
        />
        <g filter="url(#NF)">
          {/* Sphere body */}
          <circle cx="0" cy="0" r="85" fill="url(#NG)" />
          {/* Large primary specular */}
          <ellipse cx="-26" cy="-28" rx="24" ry="15"
            fill="rgba(255,255,255,0.65)" style={{ filter: 'blur(5.5px)' }} />
          {/* Secondary specular dot */}
          <circle cx="20" cy="-44" r="8"
            fill="rgba(255,255,255,0.42)" style={{ filter: 'blur(2.5px)' }} />
          {/* Deep shadow on bottom edge */}
          <ellipse cx="8" cy="52" rx="42" ry="14"
            fill="rgba(0,0,0,0.18)" style={{ filter: 'blur(8px)' }} />
        </g>
      </g>

    </svg>

    {/* ═══════════════ FLOATING BADGES — overlaid ═══════════════ */}
    {BADGES.map((b) => (
      <motion.div
        key={b.label}
        animate={{ y: [0, -11, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: b.delay }}
        style={{
          position: 'absolute',
          ...b.pos,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '11px 18px 11px 10px',
          borderRadius: 16,
          background: 'rgba(255,255,255,0.90)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,1)',
          boxShadow: `0 8px 32px rgba(0,0,0,0.09), 0 2px 8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)`,
          zIndex: 30,
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
        }}
      >
        {/* Vertical accent bar */}
        <div style={{
          width: 3, height: 34, borderRadius: 3, flexShrink: 0,
          background: `linear-gradient(to bottom, ${b.color}, ${b.color}88)`,
          boxShadow: `0 0 8px ${b.color}66`,
        }} />
        <div>
          <p style={{ margin: 0, fontSize: 12, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.025em', lineHeight: 1.25 }}>
            {b.label}
          </p>
          <p style={{ margin: '2px 0 0', fontSize: 9, fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            {b.sub}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
);
