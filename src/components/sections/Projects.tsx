'use client';

import { Section } from '../Section';
import type { ProjectsData } from '@/types/content';
import { useState } from 'react';

interface ProjectsProps {
  projects: ProjectsData;
}

export function Projects({ projects }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(projects.projects.map(p => p.category)))];
  
  const filteredProjects = filter === 'all' 
    ? projects.projects 
    : projects.projects.filter(p => p.category === filter);

  const selectedProjectData = projects.projects.find(p => p.id === selectedProject);

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="프로젝트"
      className="bg-[var(--color-background-secondary)]"
    >
      {/* 필터 */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
              filter === category
                ? 'bg-[var(--color-primary)] text-white shadow-lg'
                : 'bg-[var(--color-background)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-[var(--color-primary)]'
            }`}
          >
            {category === 'all' ? 'All' : category}
          </button>
        ))}
      </div>

      {/* 프로젝트 그리드 */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group p-6 bg-[var(--color-background)] rounded-2xl border border-[var(--color-border)] hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1"
            onClick={() => setSelectedProject(project.id)}
          >
            {/* 썸네일 영역 (배경 그라디언트로 대체) */}
            <div className="w-full h-48 mb-6 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 via-[var(--color-accent)]/20 to-[var(--color-primary)]/20 flex items-center justify-center group-hover:scale-105 transition-transform">
              <svg
                className="w-16 h-16 text-[var(--color-primary)]/40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full whitespace-nowrap">
                    {project.category}
                  </span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] mb-2">
                  {project.role}
                </p>
                <p className="text-[var(--color-text-secondary)] line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* 스택 */}
              <div className="flex flex-wrap gap-2">
                {project.stacks.slice(0, 4).map((stack) => (
                  <span
                    key={stack}
                    className="px-2 py-1 bg-[var(--color-background-secondary)] text-[var(--color-text-tertiary)] rounded text-xs font-medium"
                  >
                    {stack}
                  </span>
                ))}
                {project.stacks.length > 4 && (
                  <span className="px-2 py-1 text-[var(--color-text-tertiary)] text-xs">
                    +{project.stacks.length - 4}
                  </span>
                )}
              </div>

              <div className="pt-2 text-sm text-[var(--color-primary)] font-medium group-hover:gap-2 flex items-center transition-all">
                자세히 보기
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 모달 */}
      {selectedProjectData && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[var(--color-background)] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 닫기 버튼 */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-lg hover:bg-[var(--color-background-secondary)] transition-colors"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6 text-[var(--color-text-secondary)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="space-y-6">
              <div>
                <span className="text-xs px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full">
                  {selectedProjectData.category}
                </span>
                <h3 className="text-3xl font-bold text-[var(--color-text-primary)] mt-4">
                  {selectedProjectData.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] mt-2">
                  {selectedProjectData.role}
                </p>
              </div>

              <p className="text-lg text-[var(--color-text-secondary)]">
                {selectedProjectData.description}
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">
                    🎯 문제
                  </h4>
                  <p className="text-[var(--color-text-secondary)]">
                    {selectedProjectData.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">
                    💡 해결
                  </h4>
                  <p className="text-[var(--color-text-secondary)]">
                    {selectedProjectData.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">
                    📈 성과
                  </h4>
                  <p className="text-[var(--color-text-secondary)]">
                    {selectedProjectData.result}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[var(--color-text-tertiary)] uppercase mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProjectData.stacks.map((stack) => (
                    <span
                      key={stack}
                      className="px-3 py-1.5 bg-[var(--color-background-secondary)] border border-[var(--color-border)] text-[var(--color-text-primary)] rounded-lg text-sm font-medium"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>

              {/* 링크 */}
              <div className="flex gap-4 pt-4 border-t border-[var(--color-border)]">
                {selectedProjectData.links.demo && (
                  <a
                    href={selectedProjectData.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg font-medium hover:bg-[var(--color-primary-dark)] transition-colors"
                  >
                    Live Demo
                  </a>
                )}
                {selectedProjectData.links.github && (
                  <a
                    href={selectedProjectData.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-[var(--color-border)] text-[var(--color-text-primary)] rounded-lg font-medium hover:border-[var(--color-primary)] transition-colors"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}


