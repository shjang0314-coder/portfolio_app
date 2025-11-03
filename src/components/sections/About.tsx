import { Section } from '../Section';
import type { Profile } from '@/types/content';

interface AboutProps {
  profile: Profile;
}

export function About({ profile }: AboutProps) {
  return (
    <Section id="about" title="About Me" subtitle="소개">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* 자기소개 */}
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              {profile.bio}
            </p>

            {/* 하이라이트 배지 */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="p-6 bg-[var(--color-background-secondary)] rounded-2xl border border-[var(--color-border)]">
                <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">
                  {profile.experience_years}+
                </div>
                <div className="text-sm text-[var(--color-text-secondary)]">
                  Years of Experience
                </div>
              </div>
              <div className="p-6 bg-[var(--color-background-secondary)] rounded-2xl border border-[var(--color-border)]">
                <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">
                  50+
                </div>
                <div className="text-sm text-[var(--color-text-secondary)]">
                  Projects Completed
                </div>
              </div>
            </div>
          </div>

          {/* 추가 정보 */}
          <div className="space-y-6">
            <div className="p-6 bg-[var(--color-background-secondary)] rounded-2xl border border-[var(--color-border)] space-y-4">
              <div>
                <dt className="text-sm text-[var(--color-text-tertiary)] mb-1">
                  Location
                </dt>
                <dd className="text-base text-[var(--color-text-primary)] font-medium">
                  {profile.location}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-[var(--color-text-tertiary)] mb-1">
                  Email
                </dt>
                <dd className="text-base text-[var(--color-text-primary)] font-medium">
                  <a
                    href={`mailto:${profile.email}`}
                    className="hover:text-[var(--color-primary)] transition-colors"
                  >
                    {profile.email}
                  </a>
                </dd>
              </div>
              <div className="pt-2">
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] font-medium transition-colors"
                >
                  LinkedIn →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}


