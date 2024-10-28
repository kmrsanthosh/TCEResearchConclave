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
const chiefPatrons: CommitteeMember[] = [
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
  {
    name: "Dr. K. Hariharan",
    designation:
      "Dean (III), Professor, Department of Electronics and Communication Engineering",
    committeeDesignation: "Organizing Secretary",
  },
  {
    name: "Dr. S. Charles Raja",
    designation:
      "Associate Dean (R&D), Associate Professor, Department of Electrical and Electronics Engineering",
    committeeDesignation: "Organizing Secretary",
  },
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
      "Dr. N.B. Balamurugan",
      // "Dr. G. Ananthi",
      // "Dr. M. Sermaraj",
      // "Dr. Ilankumaran",
      // "Dr. Ramalinga Chandrasekar",
      // "Dr. M. Rajalakshmi",
      // "Ms. R. Subhashini",
    ],
  },
  {
    title: "Finance Committee",
    members: [
      "Dr. S. Arockia Edwin Xavier",
      "Mr. M. Sivakumar (Accounts)",
      // "Dr. R. Sankaranarayanan",
      // "Ms. Nisha Angelin",
      // "Mr. S. Rajkumar",
      // "Dr. N. Ayyanar",
      // "Ms. S. Thiruchadai Pandeeswari",
    ],
  },
  {
    title: "Publication Committee",
    members: [
      "Dr. K. Rajeswari",
      // "Dr. B. Sathyabama",
      // "Dr. K. Vasudevan",
      // "Dr. S. Sridevi",
      "Dr. L. Radha",
      // "Ms. H. Srivinodhini",
      // "Mr. M.M. Devarajan",
      // "Ms. Priya Thiagarajan",
    ],
  },
  {
    title: "Registration Committee",
    members: [
      "Dr. D. Anitha",
      "Dr. M. Sarapparaje",
      // "Dr. I. Chandramathy",
      // "Dr. D. Gracia Nirmala Rani",
      // "Dr. M. Velayudham",
      // "Dr. S. Suriyakala",
      // "Mr. M. Karthic",
      // "Mr. M. Gowtham Sethupathi",
      // "Dr. R. Sivanesan",
    ],
  },
  {
    title: "Funding/Sponsors Committee",
    members: [
      "Dr. S. Karthikeyan",
      // "Dr. P. Karthikeyan",
      // "Mr. T. Prakash",
      // "Mr. B. Dinesh Kumar",
      // "Dr. R.S. Swarnalakshmi",
      // "Dr. K.V. Uma",
      // "Ar. A. Ayshwarya",
      // "Dr. M. Tamil Elakkiya",
      // "Mr. H. Ramesh",
    ],
  },
  {
    title: "Technical Committee",
    members: [
      "Dr. A.M. Abirami",
      // "Dr. M.S.K. Manikandan",
      // "Dr. B. Shankar",
      // "Dr. S. Julius Fusic",
      // "Dr. M. Balamurali",
      // "Ms. R. Subhashni",
      // "Dr. D. Kavitha",
      // "Dr. R. Sanjay Kumar",
      // "Dr. G. Sivasankar",
    ],
  },
  {
    title: "Infrastructure Committee",
    members: [
      "Dr. S.Md. Mansoorroomi",
      // "Dr. L. Muthusubramanian",
      // "Dr. H. Ramesh",
      // "Dr. V.R. Venkata Subramani",
      // "Dr. V. Ravi Sankar",
      // "Dr. C. Vignesh",
      // "Dr. P. Velusamy",
      // "Mr. S. Parthasarathi",
    ],
  },
  {
    title: "Branding Committee",
    members: [
      "Mr. R. Vinothkumar",
      // "Ar. S.M. Vidhya Sankari",
      // "Ar. Vaishali",
      // "Dr. J. Shanthi",
      // "Ar. P. Pavalavelsh",
      // "Dr. J. Dharani",
      // "Mr. S. Santhana Hari",
      // "Ar. S. Raghul",
    ],
  },
  {
    title: "Website Team",
    members: [
      "Dr. K. Sundarakantham",
      // "Dr. K. Narasima Mallikarjunan",
      // "Dr. G.S.R. Emil Selvan",
      // "Dr. J. Felicia Lilian",
      // "Mr. M.A. Ganesh",
      // "Dr. A.J. Sunija",
      // "Dr. G. Prabhakar",
      // "Dr. B. Surya Devi",
    ],
  },
  {
    title: "Refreshment and Lunch Committee",
    members: [
      "Dr. P.S. Manoharan",
      // "Dr. S. Prasanna",
      // "Dr. E. Murugavalli",
      // "Dr. P. Victor",
      // "Dr. S. Saravanakumar",
      // "Mr. S.A.R. Sheik Masthan",
      // "Mr. C. Selvakumar",
    ],
  },
  {
    title: "Post Conclave Material Preparation Committee",
    members: [
      "Dr. C. Jeyamala",
      // "Dr. B. Subbulakshmi",
      // "Ms. S. Pudumalar",
      // "Ms. P.M. Devie",
      // "Dr. M. Senthilarasi",
      // "Mr. V. Janakiraman",
      // "Dr. M. Nirmala Devi",
    ],
  },
  {
    title: "Accommodation Committee",
    members: [
      "Dr. D. Rajkumar",
      "Mr. K. Saravana Kumar (Admin Manager)",
      // "Dr. V. Vinoth Thyagarajan",
      // "Dr. R. Kodipandyan",
      // "Dr. M. P. Ramkumar",
      // "Dr. R. Sivakumar",
      // "Dr. K. Athiappan",
    ],
  },
  {
    title: "Publicity/Press Committee",
    members: [
      "Dr. S.A.V. Elanchezian",
      // "Dr. R.K.C. Jeyakumar",
      // "Dr. R. Maniarasu",
      // "Dr. M. Jeeveraj",
      // "Ar. S. Karthikeya Raja",
      // "Dr. C. Balasundar",
    ],
  },
  {
    title: "Function Arrangement Committee",
    members: [
      "Dr. G. Jeya Jeevakani",
      // "Dr. R. Rajan Prakash",
      // "Dr. M.L. Mahadevan",
      // "Dr. Rajalavanya",
      // "Dr. A. Indrani",
      // "Dr. C. Mahadevi",
      // "Ms. S. Srimathi",
    ],
  },
  {
    title: "Event Management Committee",
    members: [
      "Dr. A. Anitha",
      // "Dr. T. Chandrakumar",
      // "Dr. V. Velkannan",
      // "Dr. S. Sivailango",
      // "Dr. R.S. Swarnalakshmi",
      // "Dr. M. Meenakshi Devi",
      // "Ms. J. Eunice",
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {chiefPatrons.map((patron, index) => (
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
