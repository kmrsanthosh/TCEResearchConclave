"use client";

import About from "@/components/Home/About";
import AuthorGuidelines from "@/components/Home/AuthorGuidelines";
import CallForPaper from "@/components/Home/CallForPaper";
import { Hero } from "@/components/Home/Hero";
import ImportantDates from "@/components/Home/ImportantDates";
import Registration from "@/components/Home/Registration";
import Speakers from "@/components/Home/Speakers";
import Gallery from "@/components/Home/Gallery";
import BrochurePopup from "@/components/BrochurePopup";

export default function Home() {
  return (
    <div>
      <BrochurePopup />
      <Hero />
      <About />
      <CallForPaper />
      <Speakers />
      <ImportantDates />
      <AuthorGuidelines />
      <Registration />
      <Gallery />
    </div>
  );
}
