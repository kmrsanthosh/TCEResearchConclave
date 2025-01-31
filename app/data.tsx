export interface NavItem {
  label: string;
  id: string;
}

export const navItems: NavItem[] = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Call for Papers", id: "call-for-papers" },
  { label: "Keynote Speakers", id: "keynote-speakers" },
  { label: "Important Dates", id: "important-dates" },
  { label: "Author Guidelines", id: "author-guidelines" },
  { label: "Registration Details", id: "registration-details" },
  { label: "Committee", id: "committee" },
  { label: "Contact Us", id: "contact-us" },
];

export const timelineData = [
  {
    id: 1,
    title: "Last date for submission of full paper",
    date: "2025-02-10",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio euismod lacinia at quis risus sed vulputate odio ut. Quam viverra orci sagittis eu volutpat odio facilisis mauris.",
  },
  {
    id: 2,
    title: "Acceptance notification",
    date: "2025-02-25",
    description:
      "Aut eius excepturi ex recusandae eius est minima molestiae. Nam dolores iusto ad fugit reprehenderit hic dolorem quisquam et quia omnis non suscipit nihil sit libero distinctio. Ad dolorem tempora sit nostrum voluptatem qui tempora unde? Sit rerum magnam nam ipsam nesciunt aut rerum necessitatibus est quia esse non magni quae.",
  },
  {
    id: 3,
    title: "Final submission",
    date: "2025-03-10",
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

export const paperSubmissions = [
  "Read through Author Guidelines carefully & proceed with submission.",
  "Paper should not exceed more than 6 pages.",
  "Make sure to prepare the paper in the format prescribed. Click the link below to download the format.",
  // "Please click the link below (https://forms.gle/kwc4LLmbtjZZnxVV7), complete the registration by entering the correct details, and upload the appropriate payment receipt.",
];

export const publication: (string | string[])[] = [
  "Selected papers will be published in Springer book series - SEE - Sustainable Economy and Ecotechnology*",
  "Best Paper Awards for each technical session with a total prize sum of Rs. 50,000/-",
  "Selected papers have the opportunity for publication in UGC-CARE (Group-1) listed ICTACT Journals:",
];

export const publicationUGC = [
  "• ICTACT Journal on Communication Technology",
  "• ICTACT Journal on Image and Video Processing",
  "• ICTACT Journal on Soft Computing",
  "• ICTACT Journal on Microelectronics",
];

export const guidelines = [
  "RC 2025 invites full-length original research contributions from professionals from industries, R&D organizations, academic institutions, government departments, and research scholars from across the country.",
  "Full-length original research or review articles not exceeding 6 pages shall be submitted.",
  "The manuscript should contain original research ideas, developmental ideas, analysis, findings, results, etc.",
  "The manuscript should not have been published in any journals/magazines or conference proceedings and should not be under review in any of them.",
  "Further, the manuscript should contain the names of the corresponding author and all other authors with e-mail id and affiliation.",
  "Soft copy of the full-length manuscripts shall be submitted through the manuscript submission portal.",
  "All the submitted manuscripts will be sent for peer review, and the corresponding author will be notified of the outcome of the review process.",
  "Suggestions by the reviewers for improvement of the manuscript, if any, will be sent back to the corresponding author, and the revised version of the manuscript shall be submitted within ten days from the date of notification.",
];

export const topics1 = [
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
  // {
  //   title: "Sustainable Materials and Manufacturing",
  //   subtopics: [
  //     "Sustainable Materials Science",
  //     "Green Manufacturing and Supply Chain",
  //     "Circular Economy and Waste Management",
  //     "Biodegradable Materials and Packaging",
  //     "Sustainable Textiles and Fashion",
  //   ],
  // },
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
    title: "Advanced Materials and Manufacturing",
    subtopics: [
      "Green IT and Computing",
      "Digitalization for Sustainability",
      "Artificial Intelligence for Environmental Sustainability",
      "Cyber-Physical Systems for Sustainable Infrastructure",
      "Blockchain for Sustainable Supply Chain",
    ],
  },
  {
    title: "Communication Technologies ",
    subtopics: [
      "Green IT and Computing",
      "Digitalization for Sustainability",
      "Artificial Intelligence for Environmental Sustainability",
      "Cyber-Physical Systems for Sustainable Infrastructure",
      "Blockchain for Sustainable Supply Chain",
    ],
  },
  {
    title: "Smart and Intelligent Vehicles ",
    subtopics: [
      "Green IT and Computing",
      "Digitalization for Sustainability",
      "Artificial Intelligence for Environmental Sustainability",
      "Cyber-Physical Systems for Sustainable Infrastructure",
      "Blockchain for Sustainable Supply Chain",
    ],
  },
];
export const topics2 = [
  {
    title: "Artificial Intelligence / Machine Learning ",
    subtopics: [
      "Sustainable Development and Policy",
      "Environmental Economics and Management",
      "Social Entrepreneurship and Innovation",
      "Education for Sustainable Development",
      "Human Values and Environmental Ethics",
    ],
  },
  {
    title: "Climate and Remote Sensing",
    subtopics: [
      "Healthcare and Medical Technology",
      "Public Health and Epidemiology",
      "Sustainable Healthcare Systems",
      "Mental Health and Wellbeing",
      "Nutrition and Food Security",
    ],
  },
  {
    title: "Data and Computational Techniques",
    subtopics: [
      "Sustainable Business Models",
      "Green Entrepreneurship and Startups",
      "Innovation and Technology Transfer",
      "Sustainable Product Design and Development",
      "Circular Economy Business Models",
    ],
  },
  {
    title: "Agriculture and Healthcare",
    subtopics: [
      "Sustainable Agriculture and Food Systems",
      "Disaster Risk Reduction and Management",
      "Sustainable Tourism and Hospitality",
      "Education for Sustainable Development",
      "Sustainable Policy and Governance",
    ],
  },
  {
    title: "Networking IoT and Embedded Systems",
    subtopics: [
      "Sustainable Agriculture and Food Systems",
      "Disaster Risk Reduction and Management",
      "Sustainable Tourism and Hospitality",
      "Education for Sustainable Development",
      "Sustainable Policy and Governance",
    ],
  },
];

export interface RegistrationStep {
  title: string;
  content: string[];
}

export const registrationSteps: RegistrationStep[] = [
  {
    title: "Payment fee",
    content: [
      "No registration fee for UG/PG/PhD Scholars from Thiagarajar College of Engineering, Madurai.",
      "Payment Registration fee with inclusive of GST",
      "A bonafide certificate is needed for external participants.",
    ],
  },
  {
    title: "Registration",
    content: [
      "After acceptance of your final paper proceed with registration.",
      "At least one author of each accepted paper must register for the conference.",
      "Pay the registration fee through the provided portal: eazypay.icicibank.com",
      "Click the link below to complete the registration process.",
    ],
  },
];
