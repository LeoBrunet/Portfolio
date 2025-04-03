import Image from 'next/image';
import { Project } from '../../types/project';
import { useState } from 'react';
import { Theme } from '../../types/theme';
import { useLanguage } from '@/i18n/LanguageContext';

interface ProjectCardProps {
  project: Project;
  theme?: Theme;
}

const ProjectCard = ({ project, theme }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { language } = useLanguage();

  const getThemeClasses = () => {
    if (!theme) return 'bg-white';
    return theme.colors.surface;
  };

  return (
    <div
      className={`
        rounded-xl overflow-hidden relative
        transition-all duration-500 transform
        ${getThemeClasses()}
        ${isHovered ? 'scale-102 shadow-2xl' : 'shadow-lg'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
        />
        {project.featured && (
          <div className={`
            absolute top-4 right-4 z-20
            px-3 py-1 rounded-full text-sm
            ${theme?.colors.primary}
            text-white font-medium
          `}>
            Featured
          </div>
        )}
      </div>

      <div className={`p-6 ${theme?.spacing.element}`}>
        <h3 className={`
          ${theme?.fonts.heading}
          ${theme?.colors.text}
          mb-4
        `}>
          {project.title}
        </h3>
        <p className={`
          ${theme?.fonts.body}
          ${theme?.colors.text}
          opacity-75
          mb-6
        `}>
          {project.description[language as keyof typeof project.description]}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`
                px-2 py-1 text-xs rounded-full
                ${theme?.colors.secondary}
                ${theme?.colors.text}
                ${theme?.fonts.mono}
              `}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
