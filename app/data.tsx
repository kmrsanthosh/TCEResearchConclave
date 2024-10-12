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

export const guidelines = [
  "RC 2025 invites full-length original research contributions from professionals from industries, R&D organizations, academic institutions, government departments, and research scholars from across the country.",
  "Full-length original research or review articles not exceeding __________ format shall be submitted.",
  "The manuscript should contain original research ideas, developmental ideas, analysis, findings, results, etc.",
  "The manuscript should not have been published in any journals/magazines or conference proceedings and should not be under review in any of them.",
  "Further, the manuscript should contain the names of the corresponding author and all other authors with e-mail id and affiliation.",
  "Soft copy of the full-length manuscripts shall be submitted through the manuscript submission portal.",
  "All the submitted manuscripts will be sent for peer review, and the corresponding author will be notified of the outcome of the review process.",
  "Suggestions by the reviewers for improvement of the manuscript, if any, will be sent back to the corresponding author, and the revised version of the manuscript shall be submitted within ten days from the date of notification.",
];

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

export interface RegistrationStep {
  title: string;
  content: string[];
}

export const registrationSteps: RegistrationStep[] = [
  {
    title: "Camera-ready paper submission Guidelines",
    content: [
      "The camera-ready paper submission is open until November 15, 2023.",
      "Authors are requested to check the formatting of the paper before the final submission.",
      "Your final paper will be checked to verify the format and compliance with the reviewers' comments.",
      "The similarity index of the final paper should not be above 25% in any case (including reference).",
      "The conference technical committee will check for plagiarism, compliance with reviewer comments, and format before final acceptance.",
      "If a paper fails to comply with these requirements, it may be rejected at any stage.",
    ],
  },
  {
    title: "Camera-ready Paper Preparation",
    content: [
      "Revise your manuscript carefully per the reviewers' comments and proofread thoroughly.",
      "Check names, affiliations, postal addresses, and e-mail addresses in the paper.",
      "The final paper must be in IEEE double-column format and not exceed six pages.",
      "Use Times New Roman font throughout the paper.",
      "Title should be in 24 font size regular, not bold or italic.",
      "Author's name in size 9 regular, without titles like Mr/Mrs/Dr/Prof.",
      "Author affiliation in size 9 regular.",
      "Abstract and Keywords in bold, italic, size 9.",
      "Headings in capital (1st letter) size 10 regular and centered.",
      "Subheadings in size 10, italic and left justified.",
      "Figures and graphs should be high resolution.",
      "Figure and table captions in size 8 regular.",
      "References in size 8 and in the prescribed form.",
    ],
  },
  {
    title: "IEEEXplore® Compatibility",
    content: [
      "Use IEEE PDFeXpress® service to generate the PDF version of your final paper.",
      "Enter Conference ID 57940X and create your login if you are a new user.",
      "Submit your paper for checking or converting.",
      "Download the IEEE-compatible PDF version for your paper.",
    ],
  },
  {
    title: "Electronic IEEE Copyright Submission",
    content: [
      "Complete and sign the electronic Copyright Form (eCF) on the Microsoft CMT portal.",
      "Verify the details during copyright form submission.",
      "You will receive an automated confirmation email upon successful submission.",
      "Include a copy of the copyright form with your camera-ready submission.",
    ],
  },
  {
    title: "Registration",
    content: [
      "Begin registration after acceptance of your final camera-ready paper.",
      "At least one author of each accepted paper must register for the conference.",
      "Pay the registration fee through the provided portal: eazypay.icicibank.com",
      "Upload the transaction receipt in the registration form.",
      "Complete your registration by visiting the provided Form Link.",
      "The last date of registration is October 31, 2023.",
    ],
  },
];
