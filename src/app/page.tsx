import { Hero } from "@/common/components/hero";
import { Navbar } from "@/common/components/Navbar";
import { Presentation } from "@/common/components/Presentation";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="h-20"></div>
      <Presentation />
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </div>
  );
}
