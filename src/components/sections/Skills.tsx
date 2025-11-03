'use client';

import { Section } from '../Section';
import type { Skills as SkillsType } from '@/types/content';
import { useState } from 'react';

interface SkillsProps {
  skills: SkillsType;
}

const levelLabels = {
  1: '기초',
  2: '숙련',
  3: '전문가',
};

export function Skills({ skills }: SkillsProps) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <Section
      id="skills"
      title="Skills & Expertise"
      subtitle="기술 스택"
      className="bg-[var(--color-background-secondary)]"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {skills.categories.map((category) => (
            <div
              key={category.name}
              className="p-8 bg-[var(--color-background)] rounded-2xl border border-[var(--color-border)] hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="relative group"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex items-center gap-2 px-4 py-2 bg-[var(--color-background-secondary)] border border-[var(--color-border-light)] rounded-lg hover:border-[var(--color-primary)] transition-colors cursor-default">
                      <span className="text-sm font-medium text-[var(--color-text-primary)]">
                        {skill.name}
                      </span>
                      <div className="flex gap-0.5">
                        {[1, 2, 3].map((level) => (
                          <div
                            key={level}
                            className={`w-1.5 h-1.5 rounded-full ${
                              level <= skill.level
                                ? 'bg-[var(--color-primary)]'
                                : 'bg-[var(--color-border)]'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* 툴팁 */}
                    {hoveredSkill === skill.name && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg shadow-lg whitespace-nowrap z-10">
                        <p className="text-xs text-[var(--color-text-secondary)]">
                          {levelLabels[skill.level]} · 최근 사용: {skill.lastUsed}
                        </p>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                          <div className="border-4 border-transparent border-t-[var(--color-border)]" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}


