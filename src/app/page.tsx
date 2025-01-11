import { Hero } from "@/common/components/hero";
import { Navbar } from "@/common/components/Navbar";
import { Presentation } from "@/common/components/Presentation";
import { UnderConstruction } from "@/common/components/UnderConstruction";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="h-20"></div>
      <Presentation />
      <div className="h-32 sm:h-40"></div>
      <UnderConstruction />
    </div>
  );
}
