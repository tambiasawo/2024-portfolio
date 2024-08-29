import React from "react";
import Hero from "./Hero";
import { FloatingNav } from "./ui/FloatingNavbar";
import { navItems } from "@/data";
import RecentProjects from "./RecentProjects";
import Clients from "./Clients";
import Experiences from "./Experience";
import Process from "./Process";
import Footer from "./Footer";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <FloatingNav navItems={navItems} />
        <RecentProjects />
        <Clients />
        <Experiences />
        <Process />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
