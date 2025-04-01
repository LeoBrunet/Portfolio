export interface Experience {
  id: string;
  company: {
    en: string;
    fr: string;
  };
  logoUrl: string;
  url: string;
  positions: Position[];
  location: {
    en: string;
    fr: string;
  };
  locationType: 'remote' | 'hybrid' | 'on-site';
  skills?: {
    en: string[];
    fr: string[];
  };
}

export interface Position {
  id: string;
  title: {
    en: string;
    fr: string;
  };
  type: 'internship' | 'full-time';
  startDate: string;
  endDate: string;
  current: boolean;
  description?: {
    en: string;
    fr: string;
  };
  skills?: {
    en: string[];
    fr: string[];
  };
}
