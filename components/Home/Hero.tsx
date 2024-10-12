// import Image from "next/image";
// import React from "react";
// import { CalendarDateRangeIcon } from "@heroicons/react/24/outline";

// export const Hero = () => {
//   return (
//     <section className="flex h-[calc(100vh-95px)]">
//       {/* <div className="left-[450px]  h-full w-full bg-white relative"> */}
//       <div className="h-full w-full relative">
//         <div className="relative top-[25%] space-y-10 z-10  text-center border-white">
//           <h1 className="uppercase tracking-[8px] font-bold text-lg text-white ">
//             Thiagarajar College of Engineering
//           </h1>
//           <h1 className="uppercase tracking-[5px] font-bold text-[4rem] text-white ">
//             2025 Research Conclave
//           </h1>
//           <div className="flex flex-row justify-center items-center">
//             <CalendarDateRangeIcon
//               className="text-white font-extrabold"
//               height={40}
//               strokeWidth={1.3}
//             />
//             <h1 className="ml-3 uppercase font-bold text-lg text-white ">
//               May 17-18, 2025
//             </h1>
//           </div>
//           <h1 className="ml-3 text-lg text-white ">In-Cooperation With</h1>
//         </div>
//         <Image
//           src={"/assets/images/TCE-Main-Building.webp"}
//           alt={"TCE Main Building Image"}
//           layout="fill" // required
//           objectFit="cover" // change to suit your needs
//           className="blur-sm" // just an example
//           style={
//             {
//               // clipPath: "polygon(14% 0, 100% 0, 100% 100%, 0 100%)",
//             }
//           }
//         />
//         <div className="absolute inset-0 bg-black opacity-70 backdrop-blur-sm" />
//       </div>
//     </section>
//   );
// };

"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { CalendarDateRangeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Hero = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-05-17T00:00:00");

    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      let timeLeft: TimeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return timeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    // <section className="relative h-[calc(100vh-95px)] overflow-hidden">
    <section className="relative h-screen overflow-hidden">
      <Image
        src="/assets/images/TCE-Main-Building.webp"
        alt="TCE Main Building Image"
        layout="fill"
        objectFit="cover"
        className="blur-sm"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 backdrop-blur-sm" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=" text-center md:text-lg font-bold tracking-[5px] md:tracking-[8px] uppercase mb-8"
        >
          Thiagarajar College of Engineering
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 text-center"
        >
          2025 Research Conclave
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center mb-8"
        >
          <CalendarDateRangeIcon className="w-5 md:w-8 h-5 md:h-8 mr-3" />
          <span className="text-sm sm:text-lg md:text-xl font-semibold">
            May 17-18, 2025
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center mb-10"
        >
          <MapPinIcon className="w-5 md:w-8 h-5 md:h-8 mr-3" />
          <span className="text-sm sm:text-lg md:text-xl font-semibold">
            TCE, Thiruparankundram, Madurai{" "}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-4 gap-4 mb-10"
        >
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="text-center bg-white/10 rounded-lg p-2 sm:p-4 md:p-4 backdrop-blur-md"
            >
              <div className="text-xl sm:text-2xl md:text-4xl font-bold">
                {value}
              </div>
              <div className="text-[0.6rem] sm:text-xs md:text-sm uppercase">
                {unit}
              </div>
            </div>
          ))}
        </motion.div>
        <motion.button className="bg-primary-accent py-3 px-5 rounded-lg mb-12 text-sm sm:text-lg md:text-xl font-semibold ">
          Register Now
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-lg md:text-xl font-semibold mb-2">
            In Cooperation With
          </h3>
          <div className="flex justify-center space-x-6">
            {/* Add partner logos here */}
            <div className="w-16 h-16 bg-white/20 rounded-full" />
            <div className="w-16 h-16 bg-white/20 rounded-full" />
            <div className="w-16 h-16 bg-white/20 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
