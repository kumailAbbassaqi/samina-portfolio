/**
 * TypeScript Data Models for Samina Batool Portfolio
 * Strictly adheres to client-supplied document structures.
 */

// ==========================================
// 1. Navigation & Meta Types
// ==========================================
export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  children?: NavItem[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
  iconName?: string;
}

// ==========================================
// 2. Experience & Professional History
// ==========================================
export interface Experience {
  id: string;
  role: string;
  organization: string;
  location?: string;
  startDate: string;
  endDate?: string; // empty or "Present" if current
  isCurrent?: boolean;
  department?: string;
  summary?: string;
  responsibilities: string[];
  achievements?: string[];
  skills?: string[];
  stakeholders?: string[];
  documentIds?: string[];
}

// ==========================================
// 3. Education & Academic Background
// ==========================================
export interface Education {
  id: string;
  degree: string;
  fieldOfStudy: string;
  institution: string;
  location?: string;
  startYear?: string | number;
  endYear?: string | number;
  gradeOrDistinction?: string;
  description?: string;
  keyCoursesOrSubjects?: string[];
  thesisOrProject?: string;
}

// ==========================================
// 4. Projects & Programs
// ==========================================
export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline?: string;
  organization?: string;
  role?: string;
  period?: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  category: "Climate Resilience" | "Community Empowerment" | "Emergency Response" | "Education" | "Advocacy" | string;
  overview: string;
  objectives?: string[];
  keyActivities?: string[];
  outcomes?: string[];
  impactMetrics?: ImpactMetric[];
  stakeholdersInvolved?: string[];
  toolsAndMethodologies?: string[];
  coverImage?: string;
  galleryImages?: string[];
  relatedDocuments?: Document[];
  featured?: boolean;
}

// ==========================================
// 5. Impact Metrics
// ==========================================
export interface ImpactMetric {
  id: string;
  label: string;
  value: string | number;
  suffix?: string;
  prefix?: string;
  description?: string;
  category?: string;
  sourceContext?: string;
}

// ==========================================
// 6. Achievements & Awards
// ==========================================
export interface Achievement {
  id: string;
  title: string;
  description?: string;
  date?: string;
  organization?: string;
  impactReference?: string;
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  year?: string | number;
  date?: string;
  description?: string;
  category?: string;
  certificateUrl?: string;
}

// ==========================================
// 7. Certifications & Credentials
// ==========================================
export interface Certification {
  id: string;
  title: string;
  issuingOrganization: string;
  issueDate?: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skillsCovered?: string[];
  verificationDocument?: string;
}

// ==========================================
// 8. Workshops, Training & Exposure Visits
// ==========================================
export interface Workshop {
  id: string;
  title: string;
  organizer: string;
  date?: string;
  location?: string;
  duration?: string;
  topic?: string;
  role?: "Participant" | "Facilitator" | "Speaker" | "Organizer" | string;
  keyLearnings?: string[];
}

export interface ExposureVisit {
  id: string;
  destination: string;
  purpose: string;
  hostOrganization?: string;
  date?: string;
  duration?: string;
  outcomes?: string[];
  geographicScope?: string;
}

// ==========================================
// 9. Stakeholders & Networks
// ==========================================
export interface Stakeholder {
  id: string;
  name: string;
  type: "Government" | "Civil Society" | "Community Group" | "Academic" | "Donor" | "Private Sector" | string;
  engagementDescription?: string;
  initiativesInvolved?: string[];
  influenceLevel?: "Local" | "Regional" | "National" | "International";
}

// ==========================================
// 10. Activities & Initiatives
// ==========================================
export interface Activity {
  id: string;
  title: string;
  projectId?: string;
  projectName?: string;
  description: string;
  dateOrPeriod?: string;
  beneficiariesOrParticipants?: string;
  location?: string;
  category?: string;
}

// ==========================================
// 11. Timeline & Chronology
// ==========================================
export interface TimelineItem {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  category: "Career" | "Education" | "Project" | "Award" | "Publication" | "Training" | string;
  description?: string;
  highlights?: string[];
  linkUrl?: string;
  linkText?: string;
}

// ==========================================
// 12. Documents & Publications
// ==========================================
export interface Document {
  id: string;
  title: string;
  fileType: "PDF" | "DOCX" | "Report" | "Case Study" | "Manual" | "Certificate" | string;
  fileSize?: string;
  fileUrl: string;
  datePublished?: string;
  publisherOrOrg?: string;
  description?: string;
  category?: "Report" | "Policy Brief" | "Training Material" | "Research" | "Certificate" | string;
}

// ==========================================
// 13. Skills & Competencies
// ==========================================
export interface Skill {
  id: string;
  name: string;
  category: "Community Mobilization" | "Climate & DRR" | "Leadership & Management" | "Research & Advocacy" | "Technical" | "Languages" | string;
  proficiencyLevel?: "Foundational" | "Intermediate" | "Advanced" | "Expert";
  yearsOfExperience?: number;
  highlightedInProjects?: string[];
}
