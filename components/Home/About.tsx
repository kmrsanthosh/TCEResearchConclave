"use client";

import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <section className="flex flex-col w-full md:flex-row">
      {/* Left Section */}
      <div className="flex flex-col w-full md:w-[50%] px-5 md:px-20 py-5 text-justify space-y-2 border border-red-500">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-bold text-2xl text-primary-accent"
        >
          About TCE
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Thiagarajar College of Engineering (TCE), Madurai, Tamilnadu
          established in 1957, is an autonomous institution affiliated to Anna
          University, Chennai. It is one among the several educational and
          philanthropic institutions founded by Philanthropist and Industrialist
          Late. Shri.Karumuttu Thiagarajan Chettiar. TCE offers 9 Undergraduate
          Programmes, 10 Postgraduate Programmes, and Doctoral Programmes in
          Engineering, Science, and Architecture.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          The UG and PG programmes of TCE are accredited by the National Board
          of Accreditation. TCE is ranked 85th among the top 200 engineering
          institutions in India in the National Institutional Ranking Framework
          published by MHRD, Govt. of India in 2022.
        </motion.p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col w-full md:w-[50%] px-5 md:px-20 py-5 text-justify space-y-2 border border-red-500">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-bold text-xl text-primary-accent"
        >
          About The Conclave
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          The Research Conclave 2025, themed &quot;Advancing towards a Resilient
          Future,&quot; convenes visionary leaders, innovators, and scholars to
          explore transformative solutions for sustainable development. This
          premier gathering facilitates cross-sectoral dialogue, knowledge
          sharing, and collaboration to address environmental, social, and
          economic challenges. Through keynote addresses, panel discussions and
          research presentations, participants will delve into cutting-edge
          themes. Join us in shaping a sustainable tomorrow.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
