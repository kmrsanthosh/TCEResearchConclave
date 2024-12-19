import React from "react";
interface CommitteeMember {
  name: string;
  designation?: string;
  committeeDesignation?: string;
}

interface Committee {
  title: string;
  members: string[];
}
const Patrons: CommitteeMember[] = [
  {
    name: "Mr. K. Hari Thiagarajan",
    designation: "Chairman & Correspondent, TCE",
    committeeDesignation: "Chief Patron",
  },
  {
    name: "Dr. L. Ashok Kumar",
    designation: "Principal, TCE",
    committeeDesignation: "Patron",
  },
];
const OrganizingSecretary: CommitteeMember[] = [
  {
    name: "Dr. K. Hariharan",
    designation:
      "Dean (Industry Institute Interaction), Professor, Department of Electronics and Communication Engineering",
    committeeDesignation: "Organizing Secretary",
  },
  {
    name: "Dr. S. Charles Raja",
    designation:
      "Associate Dean (Research and Development), Associate Professor, Department of Electrical and Electronics Engineering",
    committeeDesignation: "Organizing Secretary",
  },
];
const Coordinators: CommitteeMember[] = [
  {
    name: "Dr. B. Ashok Kumar",
    designation:
      "Associate Professor, Department of Electrical and Electronics Engineering",
    committeeDesignation: "Coordinator",
  },
  {
    name: "Ms. M. Aruna",
    designation: "Assistant Professor, Department of Civil Engineering",
    committeeDesignation: "Coordinator",
  },
];

const committees: Committee[] = [
  {
    title: "Programme Committee",
    members: [
      "Dr. N. B. Balamurugan (ECE)",
      "Dr. G. Ananthi (ECE)",
      "Dr. M. Sermaraj (MECH)",
      "Dr. Ilankumaran (IT)",
      "Dr. RamalingaChandrasekar (CHE)",
      "Dr. M. Rajalakshmi (MECT)",
      "Ms. R. Subhashini (CSBS)",
    ],
  },
  {
    title: "Finance Committee",
    members: [
      "Dr. S. Arockia Edwin Xavier (EEE)",
      "Dr. R. Sankaranarayanan (CIV)",
      "Ms. NishaAngelin (IT)",
      "Mr. S. Rajkumar (MECT)",
      "Dr. N. Ayyanar (ECE)",
      "Ms. Thiruchadai Pandeeswari (IT)",
    ],
  },
  {
    title: "Technical Committee",
    members: [
      "Dr. A. M. Abirami (IT)",
      "Dr. M. S. K. Manikandan (ECE)",
      "Dr. B. Shankar (CHE)",
      "Dr. S. Julius Fusic (MECT)",
      "Dr. M. Balamurali (MECH)",
      "Dr. D Kavitha (EEE)",
      "Dr. R. Sanjay Kumar (CIV)",
      "Dr. G. Sivasankar (EEE)",
    ],
  },
  {
    title: "Publication Committee",
    members: [
      "Dr. K. Rajeswari (ECE)",
      "Dr. L. Radha (LIB)",
      "Dr. B. Sathyabama (ECE)",
      "Dr. K. Vasudevan (ECE)",
      "Dr. S. Sridevi (IT)",
      "Ms. H. Srivinodhini (MAT)",
      "Mr. M. M. Devarajan (MECT)",
      "Ms. PriyaThiagarajan (CSBS)",
    ],
  },
  {
    title: "Registration Committee",
    members: [
      "Dr. D. Anitha (AMCS)",
      "Dr. M. Sarapparaje (ENG)",
      "Dr. I. Chandramathy (ARCH)",
      "Dr. D. Gracia Nirmala Rani (ECE)",
      "Dr. M. Velayudham (CHE)",
      "Dr. S. Suriyakala (MAT)",
      "Mr. M. Karthic (MECH)",
      "Mr. M. Gowtham Sethupathi (CSBS)",
      "Dr. R. Sivanesan (AMCS)",
    ],
  },
  {
    title: "Sponsor Committee",
    members: [
      "Dr. S. Karthikeyan (MECH)",
      "Dr. P. Karthikeyan (IT)",
      "Mr. T. Prakash (MECH)",
      "Mr. B. Dinesh Kumar (CIV)",
      "Dr. M. Suguna (IT)",
      "Ar. A. Ayshwarya (ARCH)",
      "Dr. M. Tamil Elakkiya (PHY)",
    ],
  },
  {
    title: "Infrastructure committee",
    members: [
      "Dr. S. Md. Mansoor roomi (ECE)",
      "Dr. L. Muthusubramanian (MAT)",
      "Dr. H. Ramesh (MECT)",
      "Dr. V. R. VenkataSubramani (MECH)",
      "Dr. V. Ravi Sankar (CIV)",
      "Dr. C. Vignesh (MECH)",
      "Dr. P. Velusamy (PHY)",
      "Mr. S. Parthasarathi (MECT)",
    ],
  },
  {
    title: "Branding committee",
    members: [
      "Mr. R. Vinothkumar (ARCH)",
      "Ar. S. M. VidhyaSankari (ARCH)",
      "Ar. Vaishali (ARCH)",
      "Dr. J. Shanthi (ECE)",
      "Dr. J. Dharani (CSE)",
      "Mr. S. Santhana Hari (CSE)",
      "Ar. S. Ragul (ARCH)",
    ],
  },
  {
    title: "Website team",
    members: [
      "Dr. K. Sundarakantham (CSE)",
      "Dr. K. Narasima Mallikarjunan (CSE)",
      "Dr. G. S. R. Emil Selvan (CSE)",
      "Dr. J.Felicia Lilian (CSBS)",
      "Mr. M.A.Ganesh (MECT)",
      "Dr. A J Sunija (CHE)",
      "Dr. G. Prabhakar (ECE)",
      "Dr. B. Surya Devi (AMCS)",
    ],
  },
  {
    title: "Refreshment and Lunch committee",
    members: [
      "Dr. P. S. Manoharan (EEE)",
      "Dr. S. Prasanna (CSE)",
      "Dr. E. Murugavalli (ECE)",
      "Dr. P. Victor (MAT)",
      "Dr. M. S. Govardhanan (MECH)",
      "Mr. S. A. R. Sheik Masthan (MECT)",
      "Mr. C. Selvakumar (MECH)",
    ],
  },
  {
    title: "Post conclave material preparation committee",
    members: [
      "Dr. C. Jeyamala (IT)",
      "Dr. B. Subbulakshmi (CSE)",
      "Ms. S. Pudumalar (IT)",
      "Ms. P M Devie (EEE)",
      "Dr. M. Senthilarasi (ECE)",
      "Mr. V. Janakiraman (CSBS)",
      "Dr. M. Nirmala Devi (CSE)",
    ],
  },
  {
    title: "Accommodation committee",
    members: [
      "Dr. D. Rajkumar (CIV)",
      "Mr. K. Saravana Kumar (Manager - Admin)",
      "Dr. V. Vinoth Thyagarajan (ECE)",
      "Dr. R. Kodipandyan (CHE)",
      "Dr. M. P. Ramkumar (CSE)",
      "Dr. R. Sivakumar (CHE)",
      "Dr. K. Athiappan (CIV)",
    ],
  },
  {
    title: "Publicity/Press",
    members: [
      "Dr. S. A. V. Elanchezian (ARCH)",
      "Dr. RKC. Jeyakumar (CIV)",
      "Dr. R. Maniarasu (MECH)",
      "Dr. M. Jeeveraj (PHY)",
      "Ar. S. Karthikeya Raja (ARCH)",
      "Dr. C. Balasundar (EEE)",
    ],
  },
  {
    title: "Function arrangement committee",
    members: [
      "Dr. G. JeyaJeevakani (ENG)",
      "Dr. R. Rajan Prakash (EEE)",
      "Dr. M. L. Mahadevan (MECH)",
      "Dr. Rajalavanya (CSE)",
      "Mrs. A. Indrani (CSBS)",
      "Dr. C. Mahadevi (AMCS)",
      "Ms. S. Srimathi (AMCS)",
    ],
  },
  {
    title: "Event Management committee",
    members: [
      "Dr. A. Anitha (MAT)",
      "Dr. T. Chandrakumar (AMCS)",
      "Dr. V. Velkannan (CHE)",
      "Dr. S. Sivailango (CHE)",
      "Dr. R. S. Swarnalakshmi (ENG)",
      "Dr. M. Meenakshi Devi (EEE)",
      "Ms. J. Eunice (CIV)",
    ],
  },
];

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="py-8 text-5xl font-bold text-[#830101]">
        Committee Members
      </h1>

      <div className="w-full bg-[#830101] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-8">
            {Patrons.map((patron, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center space-y-2 text-center text-white bg-[#9a0101] rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-2xl font-bold">
                  {patron.committeeDesignation}
                </h2>
                <h1 className="text-xl font-semibold">{patron.name}</h1>
                <p className="text-sm text-gray-300">{patron.designation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h2 className="w-full bg-[#830101] text-4xl font-bold text-white text-center py-1">
        Organizing Secretary
      </h2>

      <div className="w-full bg-[#830101] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-8">
            {OrganizingSecretary.map((patron, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center space-y-2 text-center text-white bg-[#9a0101] rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <h1 className="text-xl font-semibold">{patron.name}</h1>
                <p className="text-sm text-gray-300">{patron.designation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h2 className="w-full bg-[#830101] text-4xl font-bold text-white text-center py-1">
        Coordinators
      </h2>

      <div className="w-full bg-[#830101] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-8">
            {Coordinators.map((patron, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center space-y-2 text-center text-white bg-[#9a0101] rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <h1 className="text-xl font-semibold">{patron.name}</h1>
                <p className="text-sm text-gray-300">{patron.designation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {committees.map((committee, committeeIndex) => (
            <div
              key={committeeIndex}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-[#830101] text-white p-4">
                <h2 className="text-xl font-semibold flex items-center justify-between">
                  {committee.title}
                  {/* <ChevronDown size={20} /> */}
                </h2>
              </div>
              <div className="p-4 space-y-3">
                {committee.members.map((member, memberIndex) => (
                  <div
                    key={memberIndex}
                    className="flex items-center justify-between bg-gray-100 rounded-md p-3"
                  >
                    <span className="font-medium">{member}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
