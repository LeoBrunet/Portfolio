export interface Location {
  id: string;
  name: {
    en: string;
    fr: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  period: {
    startDate: string;
    endDate?: string;
  };
  description?: {
    en: string;
    fr: string;
  };
  type: ('work' | 'education')[];
  experienceId?: string;
}
