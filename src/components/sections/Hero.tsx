import type { Profile } from '@/types/content';

interface HeroProps {
  profile: Profile;
}

export function Hero({ profile }: HeroProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 relative overflow-hidden"
    >
      {/* 배경 그라디언트 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-[var(--color-primary)] opacity-10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-[var(--color-accent)] opacity-10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[var(--color-primary)] opacity-10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="mx-auto max-w-[var(--container-max-width)] px-6">
        <div className="text-center space-y-8">
          {/* 인사말 */}
          <div className="space-y-2">
            <p className="text-lg text-[var(--color-text-secondary)] font-medium">
              안녕하세요, 저는
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-green-600">
              {profile.name}
            </h1>
            <p className="text-2xl md:text-3xl text-[var(--color-text-secondary)] font-medium">
              {profile.title}
            </p>
          </div>

          {/* 태그라인 */}
          <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            {profile.tagline}
          </p>

          {/* 키워드 하이라이트 */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {profile.keywords.map((keyword, index) => (
              <span
                key={index}
                className="px-5 py-2 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-sm font-semibold"
              >
                {keyword}
              </span>
            ))}
          </div>

          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href={profile.links.resume}
              download
              className="px-8 py-4 bg-[var(--color-primary)] text-white rounded-xl font-semibold text-lg hover:bg-[var(--color-primary-dark)] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              이력서 다운로드
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-[var(--color-border)] text-[var(--color-text-primary)] rounded-xl font-semibold text-lg hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all"
            >
              연락하기
            </a>
          </div>

          {/* 스크롤 안내 */}
          <div className="pt-16 animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-[var(--color-text-tertiary)]"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

