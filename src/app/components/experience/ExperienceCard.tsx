import Image from 'next/image';
import { Experience } from '../../../types/experience';
import { Theme } from '../../../types/theme';
import { useState } from 'react';
import { format } from 'date-fns';
import { fr, enUS } from 'date-fns/locale';
import { useLanguage } from '@/i18n/LanguageContext';

interface ExperienceCardProps {
  experience: Experience;
  theme: Theme;
}

interface LocalizedContent {
  en: string;
  fr: string;
}

export const ExperienceCard = ({ experience, theme }: ExperienceCardProps) => {
  const { language } = useLanguage();
  const [expandedPositionId, setExpandedPositionId] = useState<string | null>(null);

  const getLocalizedContent = <T extends string | string[]>(content: { en: T; fr: T }): T => {
    return content[language];
  };

  const getThemeClasses = () => {
    return theme.colors.surface;
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return language === 'fr' ? 'Présent' : 'Present';
    return format(new Date(dateStr), 'MMM yyyy', { locale: language === 'fr' ? fr : enUS });
  };

  const getLocationIcon = () => {
    switch (experience.locationType) {
      case 'remote':
        return '🌐';
      case 'hybrid':
        return '🏢💻';
      case 'on-site':
        return '🏢';
      default:
        return '📍';
    }
  };

  return (
    <div
      className={`
        rounded-xl overflow-hidden relative
        transition-all duration-500
        cursor-pointer select-none
        ${getThemeClasses()}
      `}
      id={experience.id}
    >
      <div className={`p-6 ${theme.spacing.element}`}>
        {/* Company header */}
        <div className="flex items-center gap-4" onClick={() => experience.url && window.open(experience.url, '_blank')}>
          <div className={`
            relative w-16 h-16 rounded-lg overflow-hidden
            ${theme.colors.surface} p-2
          `}
          >
            <Image
              src={experience.logoUrl}
              alt={getLocalizedContent(experience.company)}
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h3 className={`${theme.fonts.heading} ${theme.colors.text}`}>
              {getLocalizedContent(experience.company)}
            </h3>
            <p className={`${theme.fonts.mono} text-sm text-gray-500 flex items-center gap-2`}>
              {getLocationIcon()} {getLocalizedContent(experience.location)}
            </p>
          </div>
        </div>

        {/* Positions */}
        <div className="mt-8 space-y-8">
          {experience.positions.map((position) => (
            <div key={position.id} className="space-y-3">
              <div
                className="group cursor-pointer"
                onClick={() =>
                  setExpandedPositionId(
                    expandedPositionId === position.id ? null : position.id
                  )
                }
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <h4 className={`
                      ${theme.fonts.body} font-medium ${theme.colors.text}
                      group-hover:${theme.colors.accent.replace('bg-', 'text-')} transition-colors
                    `}>
                      {getLocalizedContent(position.title)}
                    </h4>
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${expandedPositionId === position.id ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <span className={`
                    px-2 py-1 text-xs rounded-full
                    ${theme.colors.primary} text-white
                    ${theme.fonts.mono}
                  `}>
                    {position.type === 'internship' 
                      ? (language === 'fr' ? 'Stage' : 'Internship')
                      : (language === 'fr' ? 'CDI' : 'Full-time')}
                  </span>
                </div>
                <p className={`${theme.fonts.mono} text-sm text-gray-500`}>
                  {formatDate(position.startDate)} - {formatDate(position.endDate)}
                </p>
              </div>

              {/* Expanded content */}
              {expandedPositionId === position.id && (
                <div className={`
                  space-y-4 animate-fadeIn
                  ${theme.colors.surface} rounded-lg p-4
                `}>
                  {position.description && (
                    <p className={`${theme.fonts.body} text-sm text-gray-600 leading-relaxed`}>
                      {position.description && getLocalizedContent(position.description)}
                    </p>
                  )}
                  {position.skills && (
                    <div className="flex flex-wrap gap-2">
                      {getLocalizedContent(position.skills).map((skill) => (
                        <span
                          key={skill}
                          className={`
                            px-2 py-1 text-xs rounded-full
                            ${theme.colors.secondary} ${theme.colors.text}
                            ${theme.fonts.mono}
                          `}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
