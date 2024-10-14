import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface FeeEntry {
  category: string;
  fee: string;
}

const feeData: FeeEntry[] = [
  { category: "Student (UG/PG)", fee: "Rs. 4000 /-" },
  { category: "Research Scholar", fee: "Rs. 5000 /-" },
  { category: "Faculty Members", fee: "Rs. 6000 /-" },
];

const RegistrationFeesTable: React.FC = () => {
  return (
    <div className="sm:p-6 md:p-8 rounded-lg ">
      <h2 className="text-3xl text-center font-bold text-gray-800 mb-6">
        Registration Fees
        <span className="text-lg ml-2">(Inclusive of GST)</span>
      </h2>
      <div className="overflow-hidden rounded-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white"
        >
          {feeData.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-center justify-between p-4 ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-primary-accent hover:text-white transition-all duration-300`}
            >
              <div className="flex items-center">
                <span className="h-8 w-8 rounded-full bg-primary-accent text-white flex items-center justify-center mr-3 md:mr-4">
                  {index + 1}
                </span>
                <span className="font-medium">{entry.category}</span>
              </div>
              <span className="text-lg font-bold">{entry.fee}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="mt-8 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-start bg-white p-4 rounded-lg shadow"
        >
          <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
          <p className="text-gray-600">
            A bonafide certificate is needed for external participants.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-start bg-white p-4 rounded-lg shadow"
        >
          <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
          <p className="text-gray-600">
            No registration fee for UG/PG/PhD Scholars from Thiagarajar College
            of Engineering, Madurai.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-start bg-white p-4 rounded-lg shadow"
        >
          <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
          <p className="text-gray-600">
            Payment of registration fee for Research Conclave 2025 can be made
            through Website.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default RegistrationFeesTable;
