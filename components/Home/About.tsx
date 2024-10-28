"use client";

import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <section id="about" className="flex flex-col w-full md:flex-row">
      {/* Left Section */}
      <div className="flex flex-col w-full md:w-[50%] px-5 md:px-20 py-5 text-justify space-y-2 ">
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
          Thiagarajar College of Engineering (TCE) is a Government Aided
          Autonomous Institution, established in 1957 by the philanthropist Late
          Karumuttu Thiagarajan Chettiar. TCE is affiliated with Anna
          University, Chennai, and approved by the All India Council for
          Technical Education (AICTE). TCE offers a wide array of Undergraduate,
          Postgraduate and PhD Programs across various disciplines of
          Engineering, Architecture and Science. The campus is set within a
          serene and eco-friendly environment surrounded by dense vegetation and
          the best infrastructure facilities. TCE has consistently embraced
          reforms and upgrades in its Teaching-Learning processes. Noteworthy
          initiatives include the implementation of a Competency-Based
          Curriculum and Outcome-Based Education. Since 2018, TCE has adopted
          the Conceive Design Implement Operate (CDIO) framework, shaping
          curriculum design, pedagogical methods, and assessment techniques,
          with adequate hands-on training for students. The institution's
          programs have been accredited by NBA since 1998, indicating compliance
          with quality standards in technical education. The programmes offered
          at the institution has garnered numerous accolades, including
          accreditation by NAAC with a CGPA of 3.56 (out of 4.0) with A++ Grade
          in Cycle 2. The institution launched Massive Open Online Courses
          (MOOCs) in 2021 and introduced the Thiagarajar Research Fellowship
          (TRF) scheme for PhD research scholars, furthering its commitment to
          academic excellence and research innovation. In 2024, the Institute
          received a Platinum Certificate in 5S Audit for having a clean and
          sustainable campus.{" "}
        </motion.p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col w-full md:w-[50%] px-5 md:px-20 py-5 text-justify space-y-2 ">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-bold text-2xl text-primary-accent"
        >
          About The Conclave
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          The Research Conclave 2025, themed &quote;Sustainability: Advancing
          towards a Resilient Future&quote; convenes visionary leaders,
          innovators, and scholars to explore transformative solutions for
          sustainable development. This premier gathering facilitates
          cross-sectoral dialogue, knowledge sharing, and collaboration to
          address environmental, social, and economic challenges. Through
          keynote addresses, panel discussions and research presentations,
          participants will delve into cutting-edge themes. The Research
          conclave comprises keynote addresses, panel discussions, and
          presentations by Research scholars, Undergraduate and Postgraduate
          students and Faculty Members on cutting-edge themes.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
