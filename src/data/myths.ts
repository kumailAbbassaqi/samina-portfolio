export interface ClimateMyth {
  id: number;
  myth: string;
  communityBelief: string;
  dialogueApproach: string;
}

/**
 * Verified indigenous environmental perceptions, local myths, and care ethics from field research.
 */
export const climateMyths: ClimateMyth[] = [
  {
    id: 1,
    myth: "Disasters caused by divine wrath or devils",
    communityBelief: "Many community members believe that natural disasters are caused by supernatural forces, such as devils or divine punishment for sins.",
    dialogueApproach: "Built upon spiritual respect without invalidating religious beliefs; linked real-life climate observations and upstream glacial changes using respectful terminology.",
  },
  {
    id: 2,
    myth: "Animals killed cruelly trigger disasters",
    communityBelief: "Belief that if an animal like a dog or lizard is killed cruelly, it brings misfortune or triggers natural catastrophes such as floods or storms.",
    dialogueApproach: "Honored empathy for wildlife while explaining meteorological patterns, rainfall intensity, and environmental ecosystems.",
  },
  {
    id: 3,
    myth: "Women wearing red clothes near rivers cause floods",
    communityBelief: "Belief that if a woman wears red clothing near a river, water levels rise or floods occur, leading to prohibitions against women entering disaster zones.",
    dialogueApproach: "Gently engaged mothers and elders on hydrological science and physical hazard safety, dismantling discriminatory mobility restrictions.",
  },
  {
    id: 4,
    myth: "Glaciers possess male and female gender characteristics",
    communityBelief: "Local lore classifies glaciers as male (yellow, slow-moving, calm) and female (red, fast-moving, dangerous toward human settlements).",
    dialogueApproach: "Acknowledged traditional naming and glacial observation systems while introducing scientific principles of glacier surge, moraine buildup, and temperature-driven melting.",
  },
  {
    id: 5,
    myth: "Disasters predicted by animal behavior or omens",
    communityBelief: "Belief that unusual animal behavior (e.g., cows lying down, dogs barking excessively) serves as the primary omen of impending disaster.",
    dialogueApproach: "Integrated traditional observational awareness into early-warning communication systems alongside physical monitoring.",
  },
  {
    id: 6,
    myth: "Rituals or prayers alone prevent disasters",
    communityBelief: "Belief that rituals such as Quran Khwani or specific prayers are solely sufficient to halt floods, snowstorms, or avalanches.",
    dialogueApproach: "Reinforced that spiritual supplication and practical disaster preparedness (stockpiling, evacuation planning, Go-Bags) work hand-in-hand.",
  },
  {
    id: 7,
    myth: "Absence of recent disaster implies permanent safety",
    communityBelief: "Assumption that areas with no recent floods, landslides, or snowstorms remain safe indefinitely.",
    dialogueApproach: "Conducted community risk mapping and historical hazard timeline tracking to demonstrate shifting disaster zones.",
  },
  {
    id: 8,
    myth: "Unfulfilled household prayers increase communal vulnerability",
    communityBelief: "Belief that if households neglect prayers or men do not attend the mosque, communal sins multiply and directly cause disasters.",
    dialogueApproach: "Collaborated with religious scholars (Sir Abdul Karim, Imam Juma Darvaish Ali) to advocate for proactive civic responsibility and disaster mitigation alongside faith.",
  },
];

export const careEthicsPrinciples = {
  dialogueWithElders:
    "While interacting with community elders, we were always careful not to deny or dismiss their beliefs. We respected that their thoughts and understandings were part of their personal and cultural worldview. At no point did we tell them that they were wrong, nor did we attempt to 'teach them science' in a way that would contradict their spiritual or traditional perspectives. From our observations, the community has a deep connection with nature and interprets events through natural and spiritual lenses. Their strongest belief is in Allah, and this spiritual understanding guides much of their worldview. During discussions, we built on their perspectives rather than challenging them directly... This approach ensured that the dialogue remained respectful, culturally sensitive, and effective, while also gently introducing practical insights.",
};
