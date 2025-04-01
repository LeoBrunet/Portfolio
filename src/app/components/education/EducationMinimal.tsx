import { Education } from '../../../types/education';
import { useLanguage } from '@/i18n/LanguageContext';
import { format } from 'date-fns';
import { fr, enUS } from 'date-fns/locale';

interface EducationMinimalProps {
  educations: Education[];
  theme: 'modern' | 'dark' | 'gradient';
}

export const EducationMinimal = ({ educations, theme }: EducationMinimalProps) => {
  const { language } = useLanguage();

  const getLocalizedContent = <T extends string | string[]>(content: { en: T; fr: T }): T => {
    return content[language as keyof typeof content];
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return language === 'fr' ? 'Présent' : 'Present';
    return format(new Date(dateStr), 'MMM yyyy', { locale: language === 'fr' ? fr : enUS });
  };

  const getThemeClasses = () => {
    switch (theme) {
      case 'dark':
        return 'divide-gray-700';
      case 'gradient':
        return 'divide-purple-200';
      default:
        return 'divide-gray-200';
    }
  };

  return (
    <div className={`space-y-8 divide-y ${getThemeClasses()}`}>
      {educations.map((education) => (
        <div key={education.id} className="pt-8 first:pt-0">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold text-lg">{getLocalizedContent(education.school)}</h3>
              <p className="font-medium opacity-90">{getLocalizedContent(education.degree)}</p>
            </div>
            <span className="text-sm opacity-75">
              {formatDate(education.period.startDate)} - {education.period.endDate ? formatDate(education.period.endDate) : language === 'fr' ? 'Présent' : 'Present'}
            </span>
          </div>
          {education.skills && (
            <div className="flex flex-wrap gap-2 mt-4">
              {getLocalizedContent(education.skills).map((skill) => (
                <span
                  key={skill}
                  className={`px-2 py-1 text-sm rounded-full ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
