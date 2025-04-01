import Image from 'next/image';
import { Education } from '../../../types/education';

interface EducationTimelineProps {
  educations: Education[];
  theme: 'modern' | 'dark' | 'gradient';
}

export const EducationTimeline = ({ educations, theme }: EducationTimelineProps) => {
  const getThemeClasses = () => {
    switch (theme) {
      case 'dark':
        return 'border-gray-700';
      case 'gradient':
        return 'border-purple-200';
      default:
        return 'border-blue-200';
    }
  };

  return (
    <div className="relative space-y-8">
      <div className={`absolute left-8 top-0 h-full w-0.5 ${getThemeClasses()} border-dashed`} />
      {educations.map((education) => (
        <div key={education.id} className="relative flex items-center gap-6">
          <div className="relative z-10">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white bg-white">
              <Image
                src={education.logoUrl}
                alt={education.school}
                fill
                className="object-contain p-2"
              />
            </div>
          </div>
          <div className={`flex-1 p-6 rounded-lg ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          } shadow-lg`}>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg">{education.school}</h3>
              <span className="text-sm opacity-75">{education.period}</span>
            </div>
            <p className="font-medium mb-4">{education.degree}</p>
            <div className="flex flex-wrap gap-2">
              {education.skills.map((skill) => (
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
          </div>
        </div>
      ))}
    </div>
  );
};
