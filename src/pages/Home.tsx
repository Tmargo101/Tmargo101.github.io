import { useEffect, useState } from "react";
import { Nav, HeroText, AboutMe, Projects, ContactMe, Footer, Resume } from '@/components'
import { projects } from '@/constants/projects'

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

  return (
    <div className={isDarkMode ? "bg-gray-900 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
        <Nav isDarkMode={isDarkMode} onClick={() => setIsDarkMode(!isDarkMode)}/>
        <HeroText/>
        <AboutMe/>  
        <Projects isDarkMode={isDarkMode} projects={projects}/>
        <ContactMe/>
        <Footer/>
    </div>
  );
}