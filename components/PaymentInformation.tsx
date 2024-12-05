import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PaymentInformation: React.FC = () => {
  const Router = useRouter();

  return (
    <div className="sm:p-6 md:p-8 rounded-lg mt-10 md:mt-0">
      <h2 className="text-3xl text-center font-bold text-gray-800 mb-6">
        Payment Information
      </h2>

      <div className="mt-8 space-y-4 text-justify">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-start bg-white p-4 rounded-lg shadow"
        >
          <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
          <p className="text-gray-600 w-full">
            All payments should be made through{" "}
            <span
              className="font-bold hover:underline hover:cursor-pointer hover:text-blue-500"
              onClick={() => Router.push("https://eazypay.icicibank.com")}
            >
              https://eazypay.icicibank.com
            </span>
            <br />
            <span className="text-center w-full flex justify-center items-center mt-4">
              Account Name : T C E SOUVENIOR.CCE
              <br />
              Note: Type T Space C Space E in the Institution Name for Selecting
              the bank account for payment
            </span>
          </p>
        </motion.div>

        {/* <motion.div
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
        </motion.div> */}
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
            without fail.
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
            To complete the registration, please enter the required information
            (Paper ID, name of the registered author, institution or industry
            name, mobile number, email ID, etc.), click the attached link{" "}
            <Link
              href={"https://forms.gle/kwc4LLmbtjZZnxVV7"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 break-all whitespace-normal"
            >
              (https://forms.gle/kwc4LLmbtjZZnxVV7)
              <ExternalLink className="ml-1 h-4 w-4" />
            </Link>
            , and upload the appropriate payment receipt as proof of
            transaction.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PaymentInformation;
