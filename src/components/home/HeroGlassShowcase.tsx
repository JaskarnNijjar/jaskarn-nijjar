import Image from "next/image";
import type { CSSProperties } from "react";

import { CLIENT_PROJECTS } from "@/lib/constants";

const showcaseProjects = CLIENT_PROJECTS.slice(0, 3);

export function HeroGlassShowcase() {
  return (
    <div aria-hidden className="hero-glass-showcase">
      <div className="hero-glass-rail" />
      {showcaseProjects.map((project, index) => (
        <div
          key={project.name}
          className="hero-glass-frame"
          style={{ "--hero-frame-index": index } as CSSProperties}
        >
          <div className="hero-glass-frame-top">
            <span />
            <span />
            <span />
          </div>
          <div className="hero-showcase-lens">
            <Image
              src={project.previewImage}
              alt=""
              fill
              sizes="(min-width: 1024px) 34vw, 70vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
