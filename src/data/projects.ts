import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'runify',
    title: 'Runify',
    description: {
      fr: 'Application de suivi de course à pied avec analyse de performances et statistiques avancées.',
      en: 'Running tracking application with performance analysis and advanced statistics.'
    },
    technologies: ['Swift', 'iOS', 'Spotify API'],
    imageUrl: '/images/projects/runify.jpg',
    githubUrl: 'https://github.com/LeoBrunet/Runify',
    category: ['mobile'],
    featured: true,
    completionDate: '2025-02',
  },
  {
    id: 'gitlab-notion',
    title: 'GitLab to Notion Sync',
    description: {
      fr: 'Outil d\'automatisation pour synchroniser les issues GitLab avec Notion, facilitant la gestion de projet.',
      en: 'Automation tool to synchronize GitLab issues with Notion, streamlining project management.'
    },
    technologies: ['Python', 'FastAPI', 'GitLab API', 'Notion API'],
    imageUrl: '/images/projects/gitlab-notion.jpeg',
    githubUrl: 'https://github.com/LeoBrunet/GitlabToNotion',
    category: ['other'],
    featured: true,
    completionDate: '2024-12',
  },
  {
    id: 'mastermind',
    title: 'Mastermind',
    description: {
      fr: 'Jeu mobile en ligne reproduisant le Mastermind.',
      en: 'Online mobile game recreating the classic Mastermind.'
    },
    technologies: ['Android', 'Kotlin', 'JetpackCompose', 'NestJS', 'MariaDB'],
    imageUrl: '/images/projects/mastermind.jpg',
    githubUrl: 'https://github.com/LeoBrunet/Mastermind',
    category: ['mobile', 'web'],
    featured: true,
    completionDate: '2025-01',
  },
  {
    id: 'recipe-app',
    title: 'Recipe App',
    description: {
      fr: 'Application de gestion de recettes avec plateforme web.',
      en: 'Recipe management application with web platform.'
    },
    technologies: ['Swift', 'iOS', 'ReactJS', 'MongoDB'],
    imageUrl: '/images/projects/recipe.jpeg',
    githubUrl: 'https://github.com/LeoBrunet/RecipeApp',
    category:  ['mobile', 'web'],
    featured: true,
    completionDate: '2024-12',
  },
  {
    id: 'share-it',
    title: 'Share It',
    description: {
      fr: 'Réseau social de partage de contenu culturel.',
      en: 'Social network for sharing cultural content.'
    },
    technologies: ['Android', 'Java', 'Firebase'],
    imageUrl: '/images/projects/share-it.jpeg',
    githubUrl: 'https://github.com/LeoBrunet/ShareHitV2',
    category: ['mobile'],
    featured: true,
    completionDate: '2024-12',
  },
  {
    id: 'lhmind',
    title: 'LHMind',
    description: {
      fr: 'Outil d\'apprentissage automatique pour l\'analyse prédictive de données financières.',
      en: 'Machine learning tool for predictive analysis of financial data.'
    },
    technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    imageUrl: '/images/projects/lhmind.jpeg',
    githubUrl: 'https://github.com/username/lhmind',
    category: ['other'],
    featured: true,
    completionDate: '2025-01',
  }
];
//TODO: ADD MASTERMIND, RECIPE APP, QUOI D'AUTRE, MDM APPLE
//TODO: UPDATE PICTURES AND MAKE highlight-animation WORKS