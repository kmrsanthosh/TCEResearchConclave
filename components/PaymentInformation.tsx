import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ExternalLink } from "lucide-react";
import Link from "next/link";

const PaymentInformation: React.FC = () => {
  return (
    <div className="sm:p-6 md:p-8 rounded-lg mt-10 md:mt-0">
      <h2 className="text-3xl text-center font-bold text-gray-800 mb-6">
        Payment Information
      </h2>

      <div className="mt-8 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-start bg-white p-4 rounded-lg shadow"
        >
          <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
          <p className="text-gray-600">
            Step 1: Please note that the registration fee should be paid
            exclusively through the provided portal:{" "}
            <Link
              href={"https://eazypay.icicibank.com/"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              eazypay.icicibank.com
              <ExternalLink className="ml-1 h-4 w-4" />
            </Link>
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
            Type T C E with space (as mentioned&quot;T space C space E&quot;) in
            the “Enter Institute Name” field and select the “TCE SOUVENIOR” from
            the appearing drop down menu
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
            Enter the required information (Paper id, name of the registered
            author, institution or industry name, mobile number, email id etc.)
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
            Pay the fees as per the category mentioned above
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
            Once completed with payment, Make sure download the payment receipt
            without fail. Registration
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
            Please click the link below
            <Link
              href={"https://forms.gle/kwc4LLmbtjZZnxVV7"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              (https://forms.gle/kwc4LLmbtjZZnxVV7)
              <ExternalLink className="ml-1 h-4 w-4" />
            </Link>
            , complete the registration by entering the correct details, and
            upload the appropriate payment receipt.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PaymentInformation;
