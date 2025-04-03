interface LocalizedContent {
  en: string;
  fr: string;
}

export interface Project {
  id: string;
  title: string;
  description: LocalizedContent;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  category: ('web' | 'mobile' | 'other')[];
  featured: boolean;
  completionDate: string;
}
