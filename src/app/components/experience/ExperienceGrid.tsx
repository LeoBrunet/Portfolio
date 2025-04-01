import { Experience } from '../../../types/experience';
import { Theme } from '../../../types/theme';
import { ExperienceCard } from './ExperienceCard';

interface ExperienceGridProps {
  experiences: Experience[];
  theme: Theme;
}

export const ExperienceGrid = ({ experiences, theme }: ExperienceGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-8">
      {experiences.map((experience) => (
        <ExperienceCard
          key={experience.id}
          experience={experience}
          theme={theme}
        />
      ))}
    </div>
  );
};
