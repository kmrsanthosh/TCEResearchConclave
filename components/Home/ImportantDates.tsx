import React from "react";
import SectionHeader from "../SectionHeader";
import AnimatedTimeline from "../timeline/AnimatedTimeline";
import { timelineData } from "@/app/data";

const ImportantDates = () => {
  return (
    <>
      <SectionHeader
        id="important-dates"
        sectionTitle={"Important Dates"}
        sectionDescription={"Mark your calendars for upcoming deadlines."}
        sectionButtonText={"Submit Now"}
        sectionButtonHref={""}
      />
      <div className="mx-20 my-10">
        <AnimatedTimeline timelineData={timelineData} />
      </div>
    </>
  );
};

export default ImportantDates;
