import About from "@/components/Home/About";
import CallForPaper from "@/components/Home/CallForPaper";
import { Hero } from "@/components/Home/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <CallForPaper />
    </div>
  );
}
