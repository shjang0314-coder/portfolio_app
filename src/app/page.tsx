import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';

import profileData from '@/../content/profile.json';
import skillsData from '@/../content/skills.json';
import experienceData from '@/../content/experience.json';
import projectsData from '@/../content/projects.json';

import type { Profile, Skills as SkillsData, ExperienceData, ProjectsData } from '@/types/content';

export default function Home() {
  const profile = profileData as Profile;
  const skills = skillsData as SkillsData;
  const experience = experienceData as ExperienceData;
  const projects = projectsData as ProjectsData;

  return (
    <>
      <Header />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Skills skills={skills} />
        <Experience experience={experience} />
        <Projects projects={projects} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
