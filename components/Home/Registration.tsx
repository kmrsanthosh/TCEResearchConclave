"use client";

import React, { useState } from "react";
import SectionHeader from "../SectionHeader";
import { guidelines, registrationSteps } from "@/app/data";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, CheckCircle } from "lucide-react";

const Registration = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <>
      <SectionHeader
        sectionTitle="Registration Details"
        sectionDescription="Before proceeding, we kindly ask you to thoroughly review our registration policy."
        sectionButtonText="Register Now"
        sectionButtonHref="#registration-form"
      />

      <div className=" bg-gradient-to-br from-gray-100 to-gray-200 p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-[1.02]">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gray-50 p-6 md:p-8 lg:p-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Registration Steps
              </h2>
              <nav className="space-y-2">
                {registrationSteps.map((step, index) => (
                  <button
                    key={index}
                    className={`w-full text-left py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-between ${
                      activeStep === index
                        ? "bg-primary-accent text-white shadow-lg"
                        : "text-gray-600 hover:bg-gray-200"
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <span className="font-medium">{step.title}</span>
                    {activeStep === index ? (
                      <ChevronRight className="h-5 w-5" />
                    ) : (
                      activeStep > index && (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      )
                    )}
                  </button>
                ))}
              </nav>
            </div>
            <div className="md:w-2/3 p-6 md:p-8 lg:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="h-full flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-6">
                      {registrationSteps[activeStep].title}
                    </h3>
                    <ul className="space-y-6">
                      {registrationSteps[activeStep].content.map(
                        (item, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-start"
                          >
                            <span className="flex-shrink-0 h-8 w-8 rounded-full bg-primary-accent flex items-center justify-center mr-4">
                              <span className="text-white font-medium text-sm">
                                {index + 1}
                              </span>
                            </span>
                            <p className="text-gray-600 text-lg">{item}</p>
                          </motion.li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className="mt-10 flex justify-between">
                    <button
                      onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                      className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-200"
                      disabled={activeStep === 0}
                    >
                      Previous
                    </button>
                    <button
                      onClick={() =>
                        setActiveStep(
                          Math.min(registrationSteps.length - 1, activeStep + 1)
                        )
                      }
                      className="px-6 py-3 bg-primary-accent text-white rounded-lg hover:bg-primary-accent transition-colors duration-200"
                    >
                      {activeStep === registrationSteps.length - 1
                        ? "Finish"
                        : "Next"}
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      {/* 
        <div
          id="registration-form"
          className="max-w-3xl mx-auto mt-16 p-8 bg-white shadow-xl rounded-lg"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Registration Form
          </h2>
          <p className="text-gray-600 mb-8">
            Please fill out the form below to complete your registration. Make
            sure to have your transaction receipt ready for upload.
          </p>
          // Add your registration form here
          <p className="text-gray-600 mt-4">
            For any questions or issues with registration, please contact us at
            icemce2023@tce.edu
          </p>
        </div>
         */}
    </>
  );
};

export default Registration;
