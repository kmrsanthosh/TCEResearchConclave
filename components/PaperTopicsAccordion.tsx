import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Subtopic {
  title: string;
  subtopics: string[];
}

interface PaperTopicsAccordionProp {
  topics: Subtopic[];
}

const PaperTopicsAccordion: React.FC<PaperTopicsAccordionProp> = ({
  topics,
}) => {
  const [activeAccordion, setActiveAccordion] = useState<string | undefined>(
    undefined
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="max-w-4xl "
    >
      {/* <h2 className="text-3xl font-bold text-primary-accent mb-8 text-center sm:text-left">
        Research Topics
      </h2> */}
      <Accordion
        type="single"
        collapsible
        className="w-full space-y-4"
        value={activeAccordion}
        onValueChange={setActiveAccordion}
      >
        {topics.map((topic, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border rounded-lg shadow-sm"
          >
            <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 transition-colors">
              <span className="text-lg font-semibold text-gray-900 text-left">
                {topic.title}
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-4 py-3">
              <div className="grid grid-cols-1 gap-6">
                {topic.subtopics.map((subtopic, subIndex) => (
                  <div key={subIndex} className="flex items-start space-x-2">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-accent text-white rounded-full flex items-center justify-center text-sm font-medium">
                      {subIndex + 1}
                    </span>
                    <p className="text-gray-700 text-sm ">{subtopic}</p>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  );
};

export default PaperTopicsAccordion;
