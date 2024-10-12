export const timelineData = [
  {
    id: 1,
    title: "First event",
    date: "2024-10-10",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio euismod lacinia at quis risus sed vulputate odio ut. Quam viverra orci sagittis eu volutpat odio facilisis mauris.",
  },
  {
    id: 2,
    title: "Second event",
    date: "2025-02-01",
    description:
      "Aut eius excepturi ex recusandae eius est minima molestiae. Nam dolores iusto ad fugit reprehenderit hic dolorem quisquam et quia omnis non suscipit nihil sit libero distinctio. Ad dolorem tempora sit nostrum voluptatem qui tempora unde? Sit rerum magnam nam ipsam nesciunt aut rerum necessitatibus est quia esse non magni quae.",
  },
  {
    id: 3,
    title: "Third event",
    date: "2025-03-01",
    description:
      "Sit culpa quas ex nulla animi qui deleniti minus rem placeat mollitia. Et enim doloremque et quia sequi ea dolores voluptatem ea rerum vitae. Aut itaque incidunt est aperiam vero sit explicabo fuga id optio quis et molestiae nulla ex quae quam. Ab eius dolores ab tempora dolorum eos beatae soluta At ullam placeat est incidunt cumque.",
  },
];

export type TimelineData = (typeof timelineData)[number];

export interface TimelineElement {
  id: number;
  title: string;
  date: string;
  description: string;
}

export const topics = [
  {
    title: "Energy and Environment Sustainability",
    subtopics: [
      "Green Energy and Renewable Systems",
      "Energy Efficiency and Management",
      "Sustainable Water Management",
      "Climate Change Mitigation and Adaptation",
      "Eco-Friendly Technologies",
    ],
  },
  {
    title: "Smart and Sustainable Infrastructure",
    subtopics: [
      "Smart Buildings and Cities",
      "Sustainable Transportation Systems",
      "Green Architecture and Urban Planning",
      "Resilient Infrastructure and Disaster Management",
      "Intelligent Transportation Systems",
    ],
  },
  {
    title: "Sustainable Materials and Manufacturing",
    subtopics: [
      "Sustainable Materials Science",
      "Green Manufacturing and Supply Chain",
      "Circular Economy and Waste Management",
      "Biodegradable Materials and Packaging",
      "Sustainable Textiles and Fashion",
    ],
  },
  {
    title: "Digital Sustainability and Transformation",
    subtopics: [
      "Green IT and Computing",
      "Digitalization for Sustainability",
      "Artificial Intelligence for Environmental Sustainability",
      "Cyber-Physical Systems for Sustainable Infrastructure",
      "Blockchain for Sustainable Supply Chain",
    ],
  },
  {
    title: "Humanities and Social Sustainability",
    subtopics: [
      "Sustainable Development and Policy",
      "Environmental Economics and Management",
      "Social Entrepreneurship and Innovation",
      "Education for Sustainable Development",
      "Human Values and Environmental Ethics",
    ],
  },
  {
    title: "Health and Wellbeing Sustainability",
    subtopics: [
      "Healthcare and Medical Technology",
      "Public Health and Epidemiology",
      "Sustainable Healthcare Systems",
      "Mental Health and Wellbeing",
      "Nutrition and Food Security",
    ],
  },
  {
    title: "Innovation and Entrepreneurship for Sustainability",
    subtopics: [
      "Sustainable Business Models",
      "Green Entrepreneurship and Startups",
      "Innovation and Technology Transfer",
      "Sustainable Product Design and Development",
      "Circular Economy Business Models",
    ],
  },
  {
    title: "Cross-Thematic Areas",
    subtopics: [
      "Sustainable Agriculture and Food Systems",
      "Disaster Risk Reduction and Management",
      "Sustainable Tourism and Hospitality",
      "Education for Sustainable Development",
      "Sustainable Policy and Governance",
    ],
  },
];
