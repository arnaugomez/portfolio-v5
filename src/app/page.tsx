import { Hero } from "@/common/components/hero";
import { Navbar } from "@/common/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </div>
  );
}
