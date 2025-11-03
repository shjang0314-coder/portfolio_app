'use client';

import { Section } from '../Section';
import type { ExperienceData } from '@/types/content';
import { useState } from 'react';

interface ExperienceProps {
  experience: ExperienceData;
}

export function Experience({ experience }: ExperienceProps) {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    setExpandedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <Section id="experience" title="Work Experience" subtitle="경력">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {experience.timeline.map((exp, index) => {
            const isExpanded = expandedIds.has(exp.id);
            const displayAchievements = isExpanded
              ? exp.achievements
              : exp.achievements.slice(0, 3);

            return (
              <div
                key={exp.id}
                className="relative pl-8 pb-8 border-l-2 border-[var(--color-border)] last:pb-0"
              >
                {/* 타임라인 점 */}
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[var(--color-primary)] border-4 border-[var(--color-background)]"></div>

                {/* 카드 */}
                <div className="p-6 bg-[var(--color-background-secondary)] rounded-2xl border border-[var(--color-border)] hover:shadow-lg transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-[var(--color-primary)] font-medium mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm text-[var(--color-text-tertiary)] whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {/* 성과 */}
                  <ul className="space-y-3 mb-4">
                    {displayAchievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[var(--color-text-secondary)]"
                      >
                        <svg
                          className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* 펼치기/접기 버튼 */}
                  {exp.achievements.length > 3 && (
                    <button
                      onClick={() => toggleExpanded(exp.id)}
                      className="text-sm text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] font-medium mb-4 transition-colors"
                    >
                      {isExpanded ? '접기 ↑' : `더 보기 (${exp.achievements.length - 3}개) ↓`}
                    </button>
                  )}

                  {/* 기술 스택 */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--color-border-light)]">
                    {exp.stacks.map((stack) => (
                      <span
                        key={stack}
                        className="px-3 py-1 bg-[var(--color-background)] text-[var(--color-text-secondary)] rounded-md text-sm font-medium"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}


