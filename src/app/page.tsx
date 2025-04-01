'use client';

import { useState } from 'react';
import { Header } from './components/Header';
import { ProjectGrid } from './components/ProjectGrid';
import { projects } from '../data/projects';
import { Project } from '../types/project';
import { theme } from '../types/theme';
import { educationData } from '../types/education';
import { experiences } from '../data/experiences';

import { EducationCard } from './components/education/EducationCard';
import { EducationTimeline } from './components/education/EducationTimeline';
import { EducationMinimal } from './components/education/EducationMinimal';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { ExperienceGrid } from './components/experience/ExperienceGrid';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Home() {
  const { language, t } = useLanguage();
  const getLocalizedContent = <T extends string | string[]>(content: { en: T; fr: T }): T => {
    return content[language as keyof typeof content];
  };

  const [selectedCategory, setSelectedCategory] = useState<Project['category'] | undefined>(undefined);
  const categories: Project['category'][] = ['web', 'mobile', 'other'];

  const renderEducation = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {educationData.map((education) => (
          <EducationCard
            key={education.id}
            education={education}
            theme={theme}
          />
        ))}
      </div>
    );
  };

  return (
    <main className={`min-h-screen ${theme.colors.background} ${theme.colors.text}`}>
      <Header theme={theme} />
      
      {/* Spacer for fixed header */}
      <div className="h-76"></div>
      
      <div className="container mx-auto px-4 py-12 space-y-32 relative">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl" />
        </div>

        <section>
          <h2 className={`
            text-2xl font-bold mb-8
            ${theme.fonts.heading}
          `}>
            {t('sections.experience')}
          </h2>
          <ExperienceGrid experiences={experiences} theme={theme} />
        </section>
        
        <section>
          <h2 className={`
            text-2xl font-bold mb-8
            ${theme.fonts.heading}
          `}>
            {t('sections.education')}
          </h2>
          {renderEducation()}
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-8">{language === 'fr' ? 'Projets' : 'Projects'}</h2>
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setSelectedCategory(undefined)}
              className={`px-4 py-2 rounded-full ${!selectedCategory ? theme.colors.primary + ' text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              {language === 'fr' ? 'Tous' : 'All'}
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full ${selectedCategory === category ? theme.colors.primary + ' text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <ProjectGrid projects={projects} category={selectedCategory} theme={theme} />
        </section>
      </div>

      <LanguageSwitcher />
    </main>
  );
}
