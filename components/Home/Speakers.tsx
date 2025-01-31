import React from "react";
import SectionHeader from "../SectionHeader";
import { Building2, MapPin } from "lucide-react";

interface Speaker {
  name: string;
  title: string;
  organization: string;
  credentials?: string[];
  address?: string;
  imagePlaceholder?: string;
}

interface SpeakerCardProps {
  speaker: Speaker;
}

const speakersData: Speaker[] = [
  {
    name: "Mr. K. Sridhar",
    title: "",
    organization: "Amazon, USA",
    credentials: [
      "Digital transformation and AI for Business Leaders from IIM-Lucknow",
      "MS in Computing Science from Coventry University, UK",
    ],
    imagePlaceholder: "/assets/speakers/k-sridhar.jpg",
  },
  {
    name: "Mr. Suresh Rajappa",
    title: "",
    organization: "KPMG, USA",
    credentials: [
      "Digital transformation and AI for Business Leaders from IIM-Lucknow",
      "MS in Computing Science from Coventry University, UK",
    ],
    imagePlaceholder: "/assets/speakers/suresh-rajappa.png",
  },
  {
    name: "Ms. Harshitha Phaniraj",
    title: "Senior Manager, Security Operations Center & Brand Monitoring",
    organization: "Titan Company, Integrity Office, Bangalore",
    credentials: [
      "Digital transformation and AI for Business Leaders from IIM-Lucknow",
      "MS in Computing Science from Coventry University, UK",
    ],
    imagePlaceholder: "/assets/speakers/harshitha-phaniraj.jpg",
  },
  {
    name: "Mr. N. G. Karthikeyan",
    title: "",
    organization: "TaxNodes, Bangalore",
    credentials: [
      "Digital transformation and AI for Business Leaders from IIM-Lucknow",
      "MS in Computing Science from Coventry University, UK",
    ],
    imagePlaceholder: "/assets/speakers/karthikeyan.png",
  },
  {
    name: "Dr. Manivel Raja",
    title: "",
    organization: "DRDO, Ministry of Defence, Hyderabad",
    credentials: [
      "Digital transformation and AI for Business Leaders from IIM-Lucknow",
      "MS in Computing Science from Coventry University, UK",
    ],
    imagePlaceholder: "/assets/speakers/manivel-raja.jpg",
  },
  {
    name: "Dr. N. Anandavalli",
    title: "",
    organization: "CSIR- Structural Engineering Research Centre, Chennai",
    credentials: [
      "Digital transformation and AI for Business Leaders from IIM-Lucknow",
      "MS in Computing Science from Coventry University, UK",
    ],
    imagePlaceholder: "/assets/speakers/anandavalli.jpg",
  },
  {
    name: "Dr. B. Somasundaram",
    title: "",
    organization: "ELGI Equipment Limited, Chennai",
    credentials: [
      "Digital transformation and AI for Business Leaders from IIM-Lucknow",
      "MS in Computing Science from Coventry University, UK",
    ],
    imagePlaceholder: "/assets/speakers/b-somasundaram.png",
  },
  {
    name: "Dr.M. Rajesh Pandian",
    title: "",
    organization: "Qualcomm, Chennai",
    credentials: [
      "Digital transformation and AI for Business Leaders from IIM-Lucknow",
      "MS in Computing Science from Coventry University, UK",
    ],
    imagePlaceholder: "/assets/speakers/rajesh-pandian.png",
  },
  {
    name: "Dr. Y. Uma Maheswari",
    title: "",
    organization: "Cognizant Technology Solutions, Coimbatore",
    credentials: [
      "Digital transformation and AI for Business Leaders from IIM-Lucknow",
      "MS in Computing Science from Coventry University, UK",
    ],
    imagePlaceholder: "/assets/speakers/uma-maheswari.jpg",
  },
  {
    name: "Mr. P. Bhagavathy",
    title: "",
    organization: "Bosch Global Software Technologies, Coimbatore",
    credentials: [
      "Digital transformation and AI for Business Leaders from IIM-Lucknow",
      "MS in Computing Science from Coventry University, UK",
    ],
    imagePlaceholder: "/assets/speakers/p-bhagavathy.jpg",
  },
  {
    name: "Dr. M.S. Sabitha",
    title: "Head, Information systems",
    organization: "TVS Sensing Solutions, Madurai",
    // address: "Madurai-Melur Road, Vellaripatti, Madurai – 625122",
    imagePlaceholder: "/assets/speakers/m-s-sabitha.png",
  },
  {
    name: "Mr. Srinivasulu Thayam",
    title: "Chief Technology Officer (CTO)",
    organization: "Aravind Eye Care System, Madurai",
    imagePlaceholder: "/assets/speakers/srinivasulu-thayam.jpeg",
  },
];

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker }) => (
  <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
    {/* Top accent border */}
    <div className="absolute top-0 left-0 right-0 h-1 bg-[#830000]" />

    <div className="p-8">
      {/* Image and basic info */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-gray-50 shadow-md">
          <img
            src={speaker.imagePlaceholder}
            alt={speaker.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3
          className="text-2xl font-bold text-center mb-2"
          style={{ color: "#830000" }}
        >
          {speaker.name}
        </h3>
        <div className="w-16 h-1 bg-[#830000] rounded-full mb-4 opacity-75" />
      </div>

      {/* Details section */}
      <div className="space-y-4">
        {/* <div className="flex items-start space-x-3">
          <User className="w-5 h-5 mt-1 text-[#830000]" />
          <p className="text-gray-700 font-medium flex-1">{speaker.title}</p>
        </div> */}

        <div className="flex items-start space-x-3">
          <Building2 className="w-5 h-5 mt-1 text-[#830000]" />
          <p className="text-gray-600 flex-1">{speaker.organization}</p>
        </div>

        {/* {speaker.credentials && (
          <div className="flex items-start space-x-3">
            <GraduationCap className="w-5 h-5 mt-1 text-[#830000]" />
            <ul className="list-none space-y-2 flex-1">
              {speaker.credentials.map((credential, index) => (
                <li key={index} className="text-sm text-gray-600">
                  {credential}
                </li>
              ))}
            </ul>
          </div>
        )} */}

        {speaker.address && (
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 mt-1 text-[#830000]" />
            <p className="text-sm text-gray-500 flex-1">{speaker.address}</p>
          </div>
        )}
      </div>
    </div>
  </div>
);

const Speakers: React.FC = () => {
  return (
    <>
      <SectionHeader
        id="keynote-speakers"
        sectionTitle="Keynote Speakers"
        sectionDescription="Distinguished experts sharing cutting-edge insights in technology and innovation"
        sectionButtonText="Submit Now"
        sectionButtonHref=""
      />
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {speakersData.map((speaker, index) => (
              <SpeakerCard key={index} speaker={speaker} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Speakers;
