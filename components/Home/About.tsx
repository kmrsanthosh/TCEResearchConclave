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
          with adequate hands-on training for students. The institution&apos;s
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
          The Research Conclave 2025 invites thought leaders, innovators,
          researchers, and scholars from across the globe to gather and address
          the urgent need for sustainable solutions. With the theme
          &quot;Sustainability: Advancing towards a Resilient Future,&quot; this
          event serves as a platform for collaborative exploration and
          actionable solutions for pressing environmental, social, and economic
          challenges.
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-bold text-2xl pt-5 text-primary-accent"
        >
          Highlights of the Conclave
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 "
        >
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>
              <strong className="font-medium">Keynote Addresses:</strong>{" "}
              Featuring renowned experts and pioneers in sustainability, energy,
              and resilience. These thought-provoking speeches will set the tone
              for innovative approaches to a sustainable future.
            </li>
            <li>
              <strong className="font-medium">Panel Discussions:</strong>{" "}
              Multi-disciplinary panels will engage in dialogue on current
              sustainability challenges, from climate change adaptation and
              green technology to ethical economic development and community
              resilience.
            </li>
            <li>
              <strong className="font-medium">Research Presentations:</strong>{" "}
              An opportunity for Research Scholars, Undergraduate, Postgraduate
              students, and Faculty Members to showcase their groundbreaking
              work. These presentations span across diverse themes including
              renewable energy, sustainable agriculture, smart cities, waste
              management, social equity, and more.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
