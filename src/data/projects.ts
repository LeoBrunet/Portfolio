import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'runify',
    title: 'Runify',
    description: 'Application de suivi de course à pied avec analyse de performances et statistiques avancées.',
    technologies: ['React Native', 'MongoDB', 'Spotify API'],
    imageUrl: '/images/projects/runify.jpg',
    githubUrl: 'https://github.com/username/runify',
    category: 'mobile',
    featured: true,
    completionDate: '2025-02',
  },
  {
    id: 'gitlab-notion',
    title: 'GitLab to Notion Sync',
    description: 'Outil d\'automatisation pour synchroniser les issues GitLab avec Notion, facilitant la gestion de projet.',
    technologies: ['Python', 'FastAPI', 'GitLab API', 'Notion API'],
    imageUrl: '/images/projects/gitlab-notion.jpeg',
    githubUrl: 'https://github.com/username/gitlab-notion',
    category: 'web',
    featured: true,
    completionDate: '2024-12',
  },
  {
    id: 'lhmind',
    title: 'LHMind',
    description: 'Plateforme d\'apprentissage automatique pour l\'analyse prédictive de données financières.',
    technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    imageUrl: '/images/projects/lhmind.jpeg',
    githubUrl: 'https://github.com/username/lhmind',
    category: 'other',
    featured: true,
    completionDate: '2025-01',
  }
];
//TODO: ADD MASTERMIND, RECIPE APP, QUOI D'AUTRE??