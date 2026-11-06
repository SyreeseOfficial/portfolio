'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ARROW_RIGHT, Icon } from '@/components/Icons';
import VideoLoop from '@/components/VideoLoop';
import type { Project } from '@/data/projects';

export default function ProjectPicker({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="picker">
      <div className="picker-rows">
        {projects.map((p, i) => (
          <Link key={p.slug} href={`/project/${p.slug}`} className={`pick${i === active ? ' active' : ''}`} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)}>
            <span className="pick-text">
              <span className="pick-name">{p.title}</span>
              <span className="pick-blurb">{p.blurb}</span>
            </span>
            <span className="pick-arrow">
              <Icon size={12} d={ARROW_RIGHT} />
            </span>
          </Link>
        ))}
        <Link href="/archive" className="more-link all-projects">
          ALL PROJECTS <Icon d={ARROW_RIGHT} />
        </Link>
      </div>
      <div className="picker-panels">
        {projects.map((p, i) => (
          <div key={p.slug} data-proj-panel className={`panel${i === active ? ' active' : ''}`} inert={i !== active}>
            <Link href={`/project/${p.slug}`} className="card card-link">
              <span className="card-img wide">
                <VideoLoop src={`/uploads/${p.slug}`} label={p.title} drift />
                <span className="card-overlay">
                  <span className="view-case">
                    View case study
                    <Icon size={13} d={ARROW_RIGHT} />
                  </span>
                </span>
              </span>
            </Link>
            <div className="panel-text">
              <h3>{p.title}</h3>
              <p>{p.solution}</p>
              <div className="stack">{p.stack}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
