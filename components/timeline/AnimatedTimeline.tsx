import { TimelineElement } from "@/app/data";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

interface AnimatedTimelineProps {
  timelineData: TimelineElement[];
}

const AnimatedTimeline: React.FC<AnimatedTimelineProps> = ({
  timelineData,
}) => {
  const currentDate = new Date();

  const isCompleted = (date: string) => {
    return new Date(date) <= currentDate;
  };

  // Animation variants for timeline items
  const timelineItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
      {timelineData.map((item, index) => (
        <ScrollAnimatedTimelineItem
          key={item.id}
          item={item}
          index={index}
          isCompleted={isCompleted(item.date)}
          variants={timelineItemVariants}
        />
      ))}
    </div>
  );
};

// Sub-component for each timeline item to handle scroll animation
const ScrollAnimatedTimelineItem: React.FC<{
  item: TimelineElement;
  index: number;
  isCompleted: boolean;
  variants: any;
}> = ({ item, index, isCompleted, variants }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${
        isCompleted ? "is-active" : ""
      }`}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {/* Icon */}
      <motion.div
        className={`flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 ${
          isCompleted ? "bg-emerald-500 text-emerald-50" : "text-slate-500"
        } shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2`}
        whileHover={{ scale: 1.1 }}
      >
        <svg
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="10"
        >
          <path
            fillRule="nonzero"
            d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
          />
        </svg>
      </motion.div>

      {/* Card */}
      <motion.div
        className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow"
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center justify-between space-x-2 mb-1">
          <div className="font-bold text-primary-accent">{item.title}</div>
          <time
            className={`font-caveat font-medium ${
              isCompleted ? "text-emerald-500" : "text-amber-500"
            }`}
          >
            {new Date(item.date).toLocaleDateString()}
          </time>
        </div>
        <div className="text-slate-500">{item.description}</div>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedTimeline;
