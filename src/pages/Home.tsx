import { useEffect, useState } from "react";
import { Nav, HeroText, AboutMe, Projects, ContactMe, Footer } from '@/components'
import { Project } from '@/types/types'

export function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }

    const listener = (e: any) => setIsDarkMode(e.matches);
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', listener);

    return () => window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', listener);
  }, []);

  const projects: Project[] = [
        { title: "TheKnow", tech: ["React", "Node.js", "MongoDB"], link: "https://github.com/Tmargo101/TheKnow-Web" },
        { title: "Audio Sandbox", tech: ["Canvas", "WebAudio"], link: "#" },
        { title: "SpaceX Mapping API", tech: ["React", "Mapbox"], link: "#" }
  ]
  return (
    <div className={isDarkMode ? "bg-gray-900 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
        <Nav/>
        <HeroText/>
        <AboutMe/>
        <Projects isDarkMode={isDarkMode} projects={projects}/>
        <ContactMe/>
        <Footer/>
    </div>
  );
}