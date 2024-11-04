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
    const targetDate = new Date("2025-05-16T00:00:00");

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
    <section
      id="home"
      className="relative md:h-[calc(100vh-95px)] h-[calc(100vh-80px)] overflow-hidden"
    >
      <Image
        src="/TCEResearchConclave/assets/images/TCE-Main-Building.webp"
        alt="TCE Main Building Image"
        layout="fill"
        objectFit="cover"
        className="blur-sm"
        priority={true}
        unoptimized
      />
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 backdrop-blur-sm" /> */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-black/70 backdrop-blur-[1px] " />

      <div className="relative  z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=" text-center md:text-2xl font-bold tracking-[5px] md:tracking-[8px] uppercase mb-8"
        >
          Thiagarajar College of Engineering
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 text-center"
        >
          Research Conclave 2025
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center mb-8"
        >
          <CalendarDateRangeIcon className="w-5 md:w-8 h-5 md:h-8 mr-3" />
          <span className="text-sm sm:text-lg md:text-xl font-semibold">
            May 16 - 17, 2025
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
        {/* <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-primary-accent py-3 px-5 rounded-lg mb-8 text-sm sm:text-lg md:text-xl font-medium hover:bg-opacity-90 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Register Now
        </motion.button> */}
        {/* <a
          target="_blank"
          href="https://forms.gle/kwc4LLmbtjZZnxVV7"
          rel="noopener noreferrer"
        >
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-accent py-3 px-5 rounded-lg mb-8 text-sm sm:text-lg md:text-xl font-medium hover:bg-opacity-90 transition duration-300"
          >
            Register Now
          </motion.button>
        </a> */}

        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-lg md:text-xl font-semibold mb-4">
            In Cooperation With
          </h3>
          <div className="flex justify-center space-x-6">
            <div className="relative w-20 h-20 bg-white/90 backdrop-blur rounded-full">
              <Image
                src={"/assets/logos/Institute-innovation-Centre-Logo.png"}
                alt={"Institute-innovation-Centre-Logo.png"}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};
