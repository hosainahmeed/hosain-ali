export interface IHeroStats {
  projectsCount: string;
  yearsExperience: string;
  clientsCount: string;
}

export interface IHeroSocials {
  githubUrl: string;
  githubUsername: string;
  linkedinUrl: string;
  linkedinUsername: string;
  email: string;
}

export interface IHeroCta {
  title: string;
  subtitle: string;
}

export interface IHeroData {
  _id: string;
  name: string;
  tagline: string;
  availabilityStatus: string;
  location: string;
  avatarUrl?: string;
  cvUrl?: string;
  welcomeMessage: string;
  stats: IHeroStats;
  socialLinks: IHeroSocials;
  ctaText: IHeroCta;
  featuredTechStack: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface IHeroApiResponse {
  success: boolean;
  data: IHeroData;
}
