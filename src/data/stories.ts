export interface FieldStory {
  id: string;
  title: string;
  category: string;
  protagonist: string;
  location: string;
  narrative: string;
  keyTakeaway: string;
}

/**
 * Verified Field Stories and Leadership Reflections from source reports.
 */
export const fieldStories: FieldStory[] = [
  {
    id: "story-najma-gobag",
    title: "Najma's First Household Go-Bag",
    category: "Emergency Preparedness",
    protagonist: "Najma (Sister-in-law)",
    location: "Goma, Saltoro",
    narrative:
      "Najma attended the community emergency session and immediately took action by preparing an emergency grab bag for her young daughter at home. She packed it with a blanket, warm clothing, a feeder, essential medicines, and critical family documents so it would be ready in any sudden evacuation. This inspired Saheli Circle girls to make emergency bag packing a regular household habit.",
    keyTakeaway: "Demonstrated immediate behavioral conversion from workshop learning to household disaster readiness.",
  },
  {
    id: "story-kulsoom-mhm",
    title: "Overcoming Taboos: Kulsoom's Menstrual Health Journey",
    category: "Health & Dignity",
    protagonist: "Kulsoom (Mother of two girls)",
    location: "Saltoro Valley",
    narrative:
      "Kulsoom attended a Saheli Circle session and shared deep anxiety regarding her younger daughter, who suffered severe, debilitating menstrual pain for the first two days of every cycle, unable to eat or leave bed. Kulsoom had avoided medical care assuming pain would naturally resolve after marriage. The team advised her on the necessity of professional gynecological evaluation. Overcoming cultural hesitation, Kulsoom took her daughter to a gynecologist in Khaplu and expressed profound gratitude for the session.",
    keyTakeaway: "Transformed deep-seated stigma into proactive maternal health-seeking behavior.",
  },
  {
    id: "story-army-solidarity",
    title: "Civil-Military Solidarity in High-Altitude Preparedness",
    category: "Community Solidarity",
    protagonist: "Pakistan Army Representatives & Saheli Circle",
    location: "Saltoro Valley",
    narrative:
      "When Pakistan Army representatives visited the Saheli Circle to support local internet connectivity, the team presented their comprehensive community disaster resilience plans, including stockpiling and evacuation routes. Recognizing that the military is often first on the scene in remote Siachen border sectors, the representatives commended the local initiative and offered collaborative support.",
    keyTakeaway: "Validated grassroots resilience planning with institutional first-line actors in border zones.",
  },
  {
    id: "story-school-climate-advocacy",
    title: "Student Speeches on School Results Day",
    category: "Youth Advocacy & Narrative Shift",
    protagonist: "School Students & Rescue 1122",
    location: "Siachen Public School, Saltoro",
    narrative:
      "Leveraging the large annual gathering of parents and community elders on school results announcement day, students delivered impassioned speeches on local glacier melt, flood risks, and environmental stewardship. In tandem, Rescue 1122 conducted community-wide live demonstrations on fire safety and first-aid response.",
    keyTakeaway: "Transformed traditional academic events into powerful multi-stakeholder civic mobilization platforms.",
  },
];

export const leadershipReflections = {
  philosophyOfLeadership:
    "When we studied leadership, we explored that the term 'leader' is a construct. A leader is often expected to be perfect, but no one is perfect in this world. Through my field experience, I realized that leadership is not about being flawless or doing everything alone. One person cannot manage everything, but at the same time, not everyone can do everything either. Leadership requires balance. As an organizer, I learned that if someone genuinely wants to create change, they must be ready to take responsibility. This includes carrying some level of burden—organizational, emotional, and practical. Leadership is not about authority or control; it is about taking initiative, guiding others, encouraging participation, and motivating people to move forward together. Leadership is simply about taking the lead and giving courage and direction to others.",
  feltStrongAsOrganizer:
    "I often felt strong as an organizer when I saw my ideas turning into action. When the work we planned started happening on the ground, or when I noticed signs that community members were beginning to think in the same direction, it gave me confidence. Seeing people reflect the same concerns, thoughts, or solutions that we had discussed made me feel that the work was meaningful and effective. This time, we faced very little judgment because the youth were also with us and actively participating... Their presence created a sense of solidarity and support.",
  resilienceAndSelfCare:
    "Honestly, I did not feel tired in this work. The work was very close to our lived realities and deeply connected to real-life experiences. It was something new that we were emerging and building from the ground up. Because it was practical, visible, and meaningful, it never felt exhausting or overwhelming... We took conscious care of ourselves throughout the process and regularly practiced self-care. Since the work never felt like a burden and we clearly understood what we were doing, it did not create stress or burnout.",
};
