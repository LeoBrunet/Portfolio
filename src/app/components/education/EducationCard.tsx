import Image from 'next/image';
import { Education } from '../../../types/education';
import { useState } from 'react';
import { Theme } from '../../../types/theme';
import { useLanguage } from '@/i18n/LanguageContext';
import { format } from 'date-fns';
import { fr, enUS } from 'date-fns/locale';

interface EducationCardProps {
  education: Education;
  theme: Theme;
}

export const EducationCard = ({ education, theme }: EducationCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { language } = useLanguage();

  const getLocalizedContent = <T extends string | string[]>(content: { en: T; fr: T }): T => {
    return content[language];
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return language === 'fr' ? 'Présent' : 'Present';
    return format(new Date(dateStr), 'MMM yyyy', { locale: language === 'fr' ? fr : enUS });
  };

  const getThemeClasses = () => {
    return `${theme.colors.surface} ${theme.colors.text}`;
  };

  return (
    <div
      className={`
        rounded-xl overflow-hidden relative
        transition-all duration-500 transform
        cursor-pointer select-none
        ${getThemeClasses()}
        ${isHovered ? 'scale-102 shadow-2xl' : 'shadow-lg'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => education.url && window.open(education.url, '_blank')}
    >
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          {education.logo && (
            <div className="relative w-12 h-12">
              <Image
                src={education.logo}
                alt={getLocalizedContent(education.school)}
                fill
                className="object-contain"
              />
            </div>
          )}
          <div>
            <h3 className={`${theme.fonts.heading} mb-1`}>
              {getLocalizedContent(education.school)}
            </h3>
            <p className={`${theme.fonts.body} opacity-75 text-sm`}>
              {getLocalizedContent(education.degree)}
            </p>
          </div>
        </div>
        
        <div className="space-y-4">
          <p className={`${theme.fonts.body} text-sm opacity-75`}>
            {formatDate(education.period.startDate)} - {education.period.endDate ? formatDate(education.period.endDate) : language === 'fr' ? 'Présent' : 'Present'}
          </p>
          {education.description && (
            <p className={`${theme.fonts.body} text-sm`}>
              {education.description && getLocalizedContent(education.description)}
            </p>
          )}
          {education.skills && (
            <div className="flex flex-wrap gap-2">
              {getLocalizedContent(education.skills).map((skill) => (
                <span
                  key={skill}
                  className={`
                    px-2 py-1 text-xs rounded-full
                    ${theme.colors.secondary}
                    ${theme.colors.text}
                    ${theme.fonts.mono}
                  `}
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
