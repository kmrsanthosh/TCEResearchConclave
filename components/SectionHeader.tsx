import { motion } from "framer-motion";
import React from "react";

interface SectionHeaderProps {
  id?: string;
  sectionTitle: string;
  sectionDescription: string;
  sectionButtonText: string;
  sectionButtonHref: string;
}

const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <section
      id={props.id}
      className="relative bg-primary-accent text-white overflow-hidden"
    >
      <div className="container mx-auto py-16 px-4 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-white/95 relative mb-4"
        >
          {props.sectionTitle}
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute text-5xl md:text-8xl font-bold bottom-[-8%] text-transparent font-sans font-outline-2"
        >
          {props.sectionTitle}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl mb-8 max-w-2xl"
        >
          {props.sectionDescription}
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-primary-accent font-semibold py-2 px-6 rounded-full hover:bg-opacity-90 transition duration-300"
        >
          {props.sectionButtonText}
        </motion.button>
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="100 200 600 800"
          className="h-full w-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <g
            fill="none"
            strokeLinecap="round"
            strokeOpacity=".05"
            strokeWidth="27.5"
          >
            <path stroke="#a7a8a9" d="m639 727-49 49" />
            <path
              stroke="#909192"
              d="m586 717 302-302 93 97-702 703-159-159 487-487"
            />
            <path stroke="#FFFFFF" d="M935 494 776 653" />
            <path stroke="#FFFFFF" d="m425 624 63-64" />
            <path stroke="#FFFFFF" d="m745 685-547 547-222-222 250-251" />
            <path stroke="#FFFFFF" d="m383 666 10-11" />
            <path stroke="#FFFFFF" d="m416 569 22-22" />
            <path stroke="#FFFFFF" d="m194 664 43-42" />
            <path stroke="#FFFFFF" d="M374 547 35 886l159 159 424-423" />
            <path stroke="#FFFFFF" d="m681 685-10 11" />
            <path stroke="#FFFFFF" d="m724 516-75 74" />
            <path stroke="#FFFFFF" d="m334 776 167-165" />
            <path
              stroke="#656669"
              d="m556 746-330 331 127 127 699-699-96-95-243 243"
            />
            <path stroke="#505156" d="m258 727 127-127" />
            <path stroke="#2e3039" d="m671 505-32 32" />
            <path stroke="#1d212d" d="M162 696-24 883l95 95 282-282" />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default SectionHeader;
