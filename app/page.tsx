import About from "@/components/Home/About";
import { Hero } from "@/components/Home/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
    </div>
  );
}
