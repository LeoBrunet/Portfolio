import { Location } from '../types/location';

export const locations: Location[] = [
  {
    id: 'montpellier',
    name: {
      en: 'Montpellier, France',
      fr: 'Montpellier, France'
    },
    coordinates: {
      lat: 43.6108,
      lng: 3.8767
    },
    period: {
      startDate: '2021-09',
      endDate: '2025-04'
    },
    description: {
      en: 'Computer Science Engineering School at Polytech Montpellier and remote work for Pradeo.',
      fr: 'École d\'ingénieur en informatique à Polytech Montpellier et travail à distance pour Pradeo.'
    },
    type: ['work', 'education'],
    experienceId: 'pradeo'
  },
  {
    id: 'kuala-lumpur',
    name: {
      en: 'Kuala Lumpur, Malaysia',
      fr: 'Kuala Lumpur, Malaisie'
    },
    coordinates: {
      lat: 3.1390,
      lng: 101.6869
    },
    period: {
      startDate: '2023-06',
      endDate: '2023-08'
    },
    description: {
      en: 'Internship as a Frontend Developer at Lizard Global.',
      fr: 'Stage en tant que développeur Frontend chez Lizard Global.'
    },
    type: ['work'],
    experienceId: 'lizard-global'
  },
  {
    id: 'linkoping',
    name: {
      en: 'Linköping, Sweden',
      fr: 'Linköping, Suède'
    },
    coordinates: {
      lat: 58.4108,
      lng: 15.6214
    },
    period: {
      startDate: '2022-08',
      endDate: '2023-01'
    },
    description: {
      en: 'Exchange semester at Linköping University focusing on AI and Machine Learning.',
      fr: 'Semestre d\'échange à l\'Université de Linköping avec focus sur l\'IA et le Machine Learning.'
    },
    type: ['education']
  },
  {
    id: 'laval',
    name: {
      en: 'Laval, France',
      fr: 'Laval, France'
    },
    coordinates: {
      lat: 48.0785,
      lng: -0.7669
    },
    period: {
      startDate: '2019-09',
      endDate: '2021-06'
    },
    description: {
      en: 'Computer Science degree at IUT of Laval.',
      fr: 'DUT Informatique à l\'IUT de Laval.'
    },
    type: ['education']
  },
  {
    id: 'nantes',
    name: {
      en: 'Nantes, France',
      fr: 'Nantes, France'
    },
    coordinates: {
      lat: 47.2184,
      lng: -1.5536
    },
    period: {
      startDate: '2021-04',
      endDate: '2021-06'
    },
    description: {
      en: 'Internship as a Mobile Developer at TIKEASY.',
      fr: 'Stage en tant que développeur Mobile chez TIKEASY.'
    },
    type: ['work'],
    experienceId: 'tikeasy'
  }
];
