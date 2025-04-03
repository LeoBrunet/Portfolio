import { Project } from '../../types/project';
import { Theme } from '../../types/theme';
import ProjectCard from './ProjectCard';

interface ProjectGridProps {
  projects: Project[];
  category?: Project['category'];
  theme: Theme;
}

export const ProjectGrid = ({ projects, category, theme }: ProjectGridProps) => {
  const filteredProjects = category
    ? projects.filter((project) => project.category.some((cat) => category.includes(cat)))
    : projects;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} theme={theme} />
      ))}
    </div>
  );
};
