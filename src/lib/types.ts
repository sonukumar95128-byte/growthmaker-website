export interface LinkItem {
  label: string;
  href: string;
}

export interface Brand {
  name: string;
  tagline: string;
  positioning: string;
  primaryCta: string;
  secondaryCta: string;
  targetAudience: string[];
  tone: string;
}

export interface Nav {
  links: LinkItem[];
  cta: LinkItem;
}

export interface DashboardMetric {
  label: string;
  value: string;
}

export interface HomeHero {
  eyebrow: string;
  headline: string;
  subheadline: string;
  ctaPrimary: LinkItem;
  ctaSecondary: LinkItem;
  dashboardMetrics: DashboardMetric[];
  floatingCards: string[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface HomeStats {
  title: string;
  subtitle: string;
  items: StatItem[];
}

export interface WhyUsCard {
  title: string;
  description: string;
}

export interface HomeWhyUs {
  title: string;
  cards: WhyUsCard[];
}

export interface HomeServicesPreview {
  title: string;
  subtitle: string;
  items: string[];
  cta: LinkItem;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface HomeProcess {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
}

export interface ResultCard {
  title: string;
  description: string;
  metrics: string[];
}

export interface HomeResultsPreview {
  title: string;
  subtitle: string;
  cards: ResultCard[];
  cta: LinkItem;
}

export interface FoundationOffer {
  title: string;
  subtitle: string;
  price: string;
  included: string[];
  cta: LinkItem;
}

export interface FinalCta {
  title: string;
  subtitle: string;
  cta: LinkItem;
}

export interface HomeContent {
  hero: HomeHero;
  stats: HomeStats;
  whyUs: HomeWhyUs;
  servicesPreview: HomeServicesPreview;
  process: HomeProcess;
  resultsPreview: HomeResultsPreview;
  foundationOffer: FoundationOffer;
  finalCta: FinalCta;
}

export interface AboutHero {
  title: string;
  subtitle: string;
}

export interface AboutStory {
  title: string;
  paragraphs: string[];
}

export interface MissionVision {
  title: string;
  content: string;
}

export interface CoreValueItem {
  title: string;
  description: string;
}

export interface AboutCoreValues {
  title: string;
  items: CoreValueItem[];
}

export interface AboutContent {
  hero: AboutHero;
  story: AboutStory;
  mission: MissionVision;
  vision: MissionVision;
  coreValues: AboutCoreValues;
}

export interface CaseStudy {
  title: string;
  challenge: string;
  solution: string;
  results: string[];
}

export interface ClientResultsContent {
  hero: AboutHero;
  overview: MissionVision;
  caseStudies: CaseStudy[];
  finalCta: FinalCta;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface ServicesPackage {
  title: string;
  price: string;
  subtitle: string;
  includes: string[];
  cta: LinkItem;
}

export interface ServicesContent {
  hero: AboutHero;
  items: ServiceItem[];
  package: ServicesPackage;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
}

export interface BlogContent {
  hero: AboutHero;
  categories: string[];
  posts: BlogPost[];
}

export interface ContactForm {
  submitLabel: string;
  businessTypeOptions: string[];
  revenueRangeOptions: string[];
  serviceOptions: string[];
}

export interface ContactDetails {
  email: string;
  phone: string;
  location: string;
  workingHours: string;
}

export interface ContactContent {
  hero: AboutHero;
  form: ContactForm;
  details: ContactDetails;
  finalCta: FinalCta;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Newsletter {
  title: string;
  placeholder: string;
  button: string;
}

export interface FooterContent {
  tagline: string;
  description: string;
  quickLinks: LinkItem[];
  servicesLinks: string[];
  policyLinks: LinkItem[];
  newsletter: Newsletter;
  copyright: string;
}

export interface SiteContent {
  brand: Brand;
  nav: Nav;
  home: HomeContent;
  about: AboutContent;
  clientResults: ClientResultsContent;
  services: ServicesContent;
  blog: BlogContent;
  contact: ContactContent;
  faqs: Faq[];
  footer: FooterContent;
}

export interface Lead {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  businessType: string;
  revenueRange: string;
  serviceInterested: string;
  message: string;
  submittedAt: string;
}
