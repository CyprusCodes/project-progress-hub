export interface MonthlyProgress {
  month: string;
  year: number;
  coverImage: string;
  images: string[];
}

export interface LogGroup {
  id: string;
  name: string;
  slug: string;
  bannerUrl: string | null;
  iconUrl: string | null;
  descriptionEn: string | null;
  descriptionTr: string | null;
  startDate: string | null;
  finishDate: string | null;
  color: string;
  latestUpdate: string;
  gallery: string[];
  monthlyProgress: MonthlyProgress[];
  heroImage: string;
  location: string;
  projectLink?: string | null;
}

// Re-export as Project alias for any remaining references
export type Project = LogGroup;
