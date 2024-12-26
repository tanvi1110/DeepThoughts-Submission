import FourMethodCard from "./components/fourMethodCard";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import StructureCard from "./components/StructureCard";
import TechnicalCard from "./components/TechnicalCard";
import ThreadBuildCard from "./components/ThreadBuildCard";


export default function App() {
  return (
    <div className=" text-neutral-900 antialiased selection:bg-cyan-300 selection:text-cyan-900">
    <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 -z-10 h-full w-full bg-white"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>
    </div>
      
      <div className="container mx-auto px-8 ">
 
      <Navbar />
      <Hero/>
      <div className="flex flex-wrap mt-45 py-12 justify-between gap-[5rem]">
      <TechnicalCard />
      <ThreadBuildCard />
      <StructureCard />
       <FourMethodCard />
      </div>
      </div>
   </div>
  )
}