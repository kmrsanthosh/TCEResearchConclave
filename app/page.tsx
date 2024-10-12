import About from "@/components/Home/About";
import AuthorGuidelines from "@/components/Home/AuthorGuidelines";
import CallForPaper from "@/components/Home/CallForPaper";
import { Hero } from "@/components/Home/Hero";
import Registration from "@/components/Home/Registration";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <CallForPaper />
      <Registration />
      <AuthorGuidelines />
    </div>
  );
}
