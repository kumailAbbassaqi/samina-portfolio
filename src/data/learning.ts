import { ExposureVisit, Workshop } from "@/types";

/**
 * Exposure Visits, Study Tours, and Field Learning from verified CV and Reports.
 */
export const exposureVisits: ExposureVisit[] = [
  {
    id: "visit-kathmandu-icimod",
    destination: "Kathmandu, Nepal",
    purpose:
      "Selected as participant representing mountain women pastoralists at the international conference exploring high-altitude livelihoods, indigenous knowledge, and climate adaptation.",
    hostOrganization: "International Centre for Integrated Mountain Development (ICIMOD)",
    date: "May 26–29, 2026",
    geographicScope: "International (Hindu Kush Himalaya Region)",
    outcomes: [
      "Cross-border exchange on high-altitude climate adaptation strategies.",
      "Highlighting challenges faced by mountain women pastoralists in Gilgit-Baltistan on a regional platform.",
      "Fostering networks with mountain researchers, practitioners, and regional eco-defenders.",
    ],
  },
  {
    id: "visit-islamabad-akrsp",
    destination: "Islamabad, Pakistan",
    purpose:
      "National Exposure Visit to observe governance systems, institutional planning, and development models at the federal level under the BEST4WEER project.",
    hostOrganization: "Aga Khan Rural Support Programme (AKRSP) / BEST4WEER",
    date: "10–16 December 2024",
    duration: "7 Days",
    geographicScope: "National",
    outcomes: [
      "Observed governance systems and social development models at the national level.",
      "Gained practical exposure on community development and institutional planning frameworks.",
      "Strengthened understanding of policy processes and program implementation mechanisms.",
    ],
  },
  {
    id: "visit-gb-administration",
    destination: "Gilgit-Baltistan, Pakistan",
    purpose:
      "District Administration Exposure Visit participating in 1st November Gilgit-Baltistan Independence Day celebrations and administrative engagement.",
    hostOrganization: "Force Command Northern Areas (FCNA) Gilgit-Baltistan",
    date: "November 2023",
    geographicScope: "Regional",
    outcomes: [
      "Engaged directly with youth leadership groups and regional administrative representatives.",
      "Strengthened understanding of civic administration and civil-military coordination in mountain territories.",
    ],
  },
];

export const workshops: Workshop[] = [
  {
    id: "ws-climate-educator-siachen",
    title: "5-Day Interactive Climate Educator Training",
    organizer: "IEI Pakistan / Saheli Network",
    date: "2–6 December 2025",
    location: "Siachen Public School, Saltoro",
    duration: "5 Days",
    topic: "SDGs (13, 15, 4), Climate Justice, Multi-Species Justice, School Safety Framework",
    role: "Lead Facilitator / Organizer",
    keyLearnings: [
      "Trained Principal and 12 teachers on age-appropriate climate pedagogy.",
      "Explored indigenous mountain knowledge and ancestors' climate-friendly practices.",
      "Developed School Safety and disaster preparedness frameworks with teaching staff.",
    ],
  },
  {
    id: "ws-mhm-gobag-leadership",
    title: "Leadership Team MHM & Go-Bag Preparedness Workshop",
    organizer: "IEI Pakistan / KOH-E-ZAN",
    date: "7 December 2025",
    location: "Haji Ali Foo House, Goma, Saltoro",
    duration: "1 Day",
    topic: "Menstrual Hygiene Management, Emergency Go-Bag Assembly, Stockpiling",
    role: "Lead Trainer",
    keyLearnings: [
      "Trained 45 women leaders with a multiplier model (each enabling 5 more women).",
      "Assembled sample Go-Bags with essentials (warm clothes, medicines, emergency food, birth kits).",
      "Addressed cultural stigmas around menstrual health during emergency evacuation.",
    ],
  },
  {
    id: "ws-youth-capacity-restrung",
    title: "Youth Climate Capacity Building & Risk Mapping",
    organizer: "KOH-E-ZAN / Team RESTRUNG",
    date: "11–13 December 2025",
    location: "Saheli Circle, Goma",
    duration: "3 Days",
    topic: "Climate Change Science, Participatory Risk Mapping, Safe Zones, Action Planning",
    role: "Facilitator",
    keyLearnings: [
      "Trained volunteer youth on village vulnerability and hazard zoning.",
      "Formulated practical community action plans: dustbin installation and cleanliness campaigns.",
    ],
  },
  {
    id: "ws-saltoro-teachers-conference",
    title: "All Saltoro DDO-Level Teachers Conference",
    organizer: "KOH-E-ZAN Educational Reforms",
    date: "July – August 2025",
    location: "High School Saith, Saltoro",
    topic: "Activity-Based Teaching, Classroom Accountability, Overcoming Student Hesitation",
    role: "Organizer & Keynote Facilitator",
    keyLearnings: [
      "Engaged school heads and teachers across Saltoro on active learning techniques.",
      "Built collective teacher consensus on supporting girls' participation and classroom questioning.",
    ],
  },
];
