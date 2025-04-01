interface LocalizedContent {
  en: string;
  fr: string;
}

interface LocalizedArrayContent {
  en: string[];
  fr: string[];
}

export interface Education {
  id: string;
  school: LocalizedContent;
  degree: LocalizedContent;
  period: {
    startDate: string;
    endDate?: string;
  };
  skills?: LocalizedArrayContent;
  logo?: string;
  description?: LocalizedContent;
  url?: string;
}

export const educationData: Education[] = [
  {
    id: 'polytech',
    school: {
      en: 'Polytech Montpellier',
      fr: 'Polytech Montpellier'
    },
    degree: {
      en: 'Engineering Degree, Computer Science and Management',
      fr: "Diplôme d'ingénieur, Informatique et Gestion"
    },
    period: {
      startDate: '2020-09',
      endDate: '2023-08'
    },
    skills: {
      en: ['Management', 'Software Development', 'Programming', 'Software Design', 'Project Management', 'Cryptography'],
      fr: ['Management', 'Développement de logiciels', 'Programmation', 'Conception de logiciels', 'Gestion de projet', 'Cryptographie']
    },
    logo: '/images/education/polytech.jpeg',
    url: 'https://www.polytech.umontpellier.fr/formation/cycle-ingenieur/informatique-et-gestion/formation',
    description: {
      en: 'Computer science and management training with a specialization in software development and project management.',
      fr: 'Formation en informatique et gestion avec une spécialisation en développement logiciel et gestion de projet.'
    }
  },
  {
    id: 'linkoping',
    school: {
      en: 'Linköping University',
      fr: 'Université de Linköping'
    },
    degree: {
      en: 'Exchange Semester, Computer Science',
      fr: 'Échange universitaire, Computer Science'
    },
    period: {
      startDate: '2022-08',
      endDate: '2023-01'
    },
    skills: {
      en: ['Computer Science', 'Artificial Intelligence', 'Machine Learning', 'Data Science'],
      fr: ['Informatique', 'Intelligence Artificielle', 'Machine Learning', 'Science des Données']
    },
    logo: '/images/education/liu.jpeg',
    url: 'https://liu.se/en',
    description: {
      en: 'Exchange semester in Sweden focusing on artificial intelligence and machine learning.',
      fr: 'Semestre d\'échange en Suède avec focus sur l\'intelligence artificielle et le machine learning.'
    }
  },
  {
    id: 'iut',
    school: {
      en: 'IUT of Laval',
      fr: 'IUT de Laval'
    },
    degree: {
      en: 'Technical Degree in Computer Science',
      fr: 'DUT Informatique'
    },
    period: {
      startDate: '2018-09',
      endDate: '2020-06'
    },
    skills: {
      en: ['Agile Methods', 'Communication', 'C++', 'Application Development', 'Programming', 'Database Development'],
      fr: ['Méthodes agiles', 'Communication', 'C++', 'Développement d\'applications', 'Programmation', 'Développement de bases de données']
    },
    logo: '/images/education/iut.jpeg',
    url: 'https://iut-laval.univ-lemans.fr/fr/nos-formations/catalogue-des-formations/bachelor-universitaire-de-technologie-but-BUT/sciences-technologies-sante-0004/but-informatique-KIOQ4VHY.html',
    description: {
      en: 'Two-year intensive program in computer science, covering software development, databases, and project management with a focus on practical applications.',
      fr: 'Formation intensive de deux ans en informatique, couvrant le développement logiciel, les bases de données et la gestion de projet avec un accent sur les applications pratiques.'
    }
  }
];
