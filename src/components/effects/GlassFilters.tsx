"use client";

import { useReducedMotion } from "framer-motion";

/**
 * Shared SVG filter defs for the liquid-glass material. Rendered once near the
 * root so any element can reference url(#liquid-distortion) in a backdrop-filter.
 * The animated turbulence is what makes the refraction look liquid; it is
 * dropped when the user prefers reduced motion.
 */
export function GlassFilters() {
  const reduced = useReducedMotion();

  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute h-0 w-0"
      focusable="false"
    >
      <defs>
        <filter
          id="liquid-distortion"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.009 0.013"
            numOctaves={2}
            seed={7}
            result="noise"
          >
            {!reduced && (
              <animate
                attributeName="baseFrequency"
                dur="26s"
                values="0.009 0.013;0.014 0.008;0.009 0.013"
                repeatCount="indefinite"
              />
            )}
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={28}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
