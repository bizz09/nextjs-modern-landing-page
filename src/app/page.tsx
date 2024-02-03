"use client"
import Hero from "@/components/organisms/hero";
import Skills from "@/components/organisms/skills";
import Encryption from "@/components/organisms/encryption";
import Project from "@/components/organisms/project";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="flex flex-col h-full gap-20">
        <Hero/>
        <Skills/>
        <Encryption/>
        <Project/>
      </div>
    </main>
  );
}
