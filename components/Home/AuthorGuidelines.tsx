"use client";

import React from "react";
import SectionHeader from "../SectionHeader";
import { motion } from "framer-motion";
import { guidelines } from "@/app/data";

const AuthorGuidelines = () => {
  return (
    <>
      <SectionHeader
        sectionTitle={"Author Guidelines"}
        sectionDescription={
          "Please take a moment to read our registration policy carefully before continuing."
        }
        sectionButtonText={"Register Now"}
        sectionButtonHref={""}
      />

      {/* Version 1 */}

      {/* <section className="mt-8 space-y-6 px-2 md:px-14 text-justify">
        <h2 className="text-3xl font-bold text-primary-accent sm:text-4xl">
          Guidelines
        </h2>
        <ul className="space-y-4 px-5">
          {guidelines.map((guideline, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.01 }}
              className="flex items-start"
            >
              <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-accent text-justify flex items-center justify-center">
                <span className="text-white font-medium text-sm">
                  {index + 1}
                </span>
              </span>
              <p className="ml-3 text-base text-gray-700">{guideline}</p>
            </motion.li>
          ))}
        </ul>
      </section> */}

      {/* Version 2 */}

      {/* <section className="max-w-7xl mx-auto mt-16 bg-white shadow-xl rounded-lg overflow-hidden">
        <h2 className="text-3xl font-bold text-gray-800 p-8 bg-gray-100">
          Guidelines
        </h2>
        <ul className="p-8 space-y-6">
          {guidelines.map((guideline, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start"
            >
              <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-accent flex items-center justify-center mr-3">
                <span className="text-white font-medium text-sm">
                  {index + 1}
                </span>
              </span>
              <p className="text-gray-600">{guideline}</p>
            </motion.li>
          ))}
        </ul>
      </section> */}

      {/* Version 3 */}

      <section className="max-w-7xl mx-auto mt-16 bg-white ">
        <h1 className="font-bold text-center text-primary-accent text-5xl mb-2">
          Guidelines
        </h1>
        <ul className="p-8 space-y-6">
          {guidelines.map((guideline, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start"
            >
              <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-accent flex items-center justify-center mr-3">
                <span className="text-white font-medium text-sm">
                  {index + 1}
                </span>
              </span>
              <p className="text-gray-600">{guideline}</p>
            </motion.li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default AuthorGuidelines;
