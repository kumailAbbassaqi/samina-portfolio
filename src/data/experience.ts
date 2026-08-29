import { Experience } from "@/types";

/**
 * Professional Experience records from verified CV.
 */
export const experiences: Experience[] = [
  {
    id: "iei-pakistan-fellow",
    role: "Saheli Fellow / First Responder",
    organization: "IEI Pakistan",
    location: "Saltoro, Ghanche, Gilgit-Baltistan, Pakistan",
    startDate: "May 2025",
    endDate: "May 2026",
    isCurrent: true,
    summary:
      "Working as a grassroots fellow focusing on education reform, gender equality, and climate justice.",
    responsibilities: [
      "Engaging with communities and schools to address barriers to girls’ education and improve accountability in the education system.",
      "Supporting initiatives that promote inclusive education and climate awareness in vulnerable, remote areas.",
      "Collaborating with teachers, parents, and School Management Committees (SMCs) to strengthen local education governance.",
      "Mobilizing community members across 12 villages in UC Saltoro for climate disaster preparedness and Menstrual Hygiene Management (MHM).",
      "Forming and mentoring decentralized Saheli Circles and youth leadership teams across high-altitude mountain settlements.",
    ],
    skills: [
      "Community Mobilization",
      "Education Reform",
      "Climate Resilience",
      "Gender Equality",
      "Disaster Risk Management",
      "Feminist Leadership",
    ],
    stakeholders: [
      "IEI Pakistan",
      "School Management Committees (SMCs)",
      "Local Schools",
      "Community Elders",
      "Saltoro Saheli Network",
    ],
  },
  {
    id: "crsm-unicef-ra",
    role: "Research Assistant (Mid Term Evaluation)",
    organization: "CRSM / UNICEF",
    location: "Pakistan",
    startDate: "December 2024",
    endDate: "March 2025",
    isCurrent: false,
    summary:
      "Mid Term Evaluation for the project: 'Pakistan Plan of Action for Prevention, Early Detection and Treatment of Child Wasting'.",
    responsibilities: [
      "Conducted field data collection and evaluation assessments for child nutrition and wasting intervention programs.",
      "Engaged with healthcare providers, community focal points, and beneficiaries to assess program implementation and efficacy.",
      "Maintained data integrity, structured documentation, and timely reporting to evaluation coordinators.",
    ],
    skills: [
      "Field Data Collection",
      "Program Evaluation",
      "Nutrition Research",
      "Qualitative & Quantitative Assessment",
    ],
    stakeholders: ["UNICEF", "CRSM", "Local Health Authorities"],
  },
  {
    id: "govt-high-school-teacher",
    role: "Science Teacher",
    organization: "Govt. Boys High School Saith Saltoro",
    location: "Saith, Saltoro, Ghanche, GB, Pakistan",
    startDate: "August 2023",
    endDate: "June 2024",
    isCurrent: false,
    summary:
      "Instructed students in chemistry, biology, and general science through engaging lessons and hands-on experiments as a community teacher.",
    responsibilities: [
      "Delivered curriculum-aligned interactive instruction in chemistry, biology, and general science.",
      "Designed and conducted practical laboratory experiments to enhance student engagement and understanding.",
      "Collaborated with colleagues to enhance the overall science program and participated in professional development initiatives.",
      "Achieved 100% result in SSC First Annual Examinations 2025, receiving formal Certificate of Appreciation.",
    ],
    achievements: [
      "Awarded Certificate of Appreciation from Govt. Boys High School Saith for 100% Result in SSC First Annual Examinations 2025.",
    ],
    skills: [
      "Science Pedagogy",
      "Curriculum Delivery",
      "Laboratory Instruction",
      "Student Mentorship",
    ],
    stakeholders: ["Govt. Boys High School Saith", "Education Department", "Students & Parents"],
  },
  {
    id: "akhsp-enumerator",
    role: "Enumerator / Data Collector",
    organization: "Aga Khan Health Services Pakistan (AKHSP)",
    location: "Gilgit-Baltistan, Pakistan",
    startDate: "June 2024",
    endDate: "September 2024",
    isCurrent: false,
    summary:
      "Worked as an enumerator in the End Line Survey of the Integrated Newborn Care and Knowledge (INCK) initiative.",
    responsibilities: [
      "Administered standardized survey instruments to households and maternal healthcare beneficiaries.",
      "Collected accurate health and newborn care indicators across rural target areas.",
      "Ensured survey compliance, data verification, and secure reporting in accordance with AKHSP research protocols.",
    ],
    skills: [
      "Household Survey Administration",
      "Health Data Collection",
      "Field Enumeration",
      "Data Quality Verification",
    ],
    stakeholders: ["Aga Khan Health Services Pakistan (AKHSP)"],
  },
  {
    id: "awkum-research-assistant",
    role: "Enumerator / Research Assistant",
    organization: "Abdul Wali Khan University Mardan",
    location: "Baltistan Division, Pakistan",
    startDate: "December 2022",
    endDate: "April 2024",
    isCurrent: false,
    summary:
      "Conducted field research and data collection on the research project: 'Sociocultural Constraints in Accessing Maternal Health Care Services in Baltistan Division, Pakistan'.",
    responsibilities: [
      "Conducted in-depth community interviews and surveys on sociocultural barriers affecting maternal health access.",
      "Documented qualitative case insights and quantitative data across diverse mountain communities in Baltistan.",
      "Collaborated with academic principal investigators to synthesize field observations and data sets.",
    ],
    skills: [
      "Academic Field Research",
      "Maternal Health Assessment",
      "Sociocultural Analysis",
      "Qualitative Interviewing",
    ],
    stakeholders: ["Abdul Wali Khan University Mardan", "Rural Community Respondents"],
  },
];
