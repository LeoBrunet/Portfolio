export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  category: 'web' | 'mobile' | 'other';
  featured: boolean;
  completionDate: string;
}
