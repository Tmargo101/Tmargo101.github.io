import { useState } from "react";
import { Card, CardContent } from "@/components/card";
import { Button } from "@/components/button";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-gray-900 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      <header className="flex justify-between items-center p-6 max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold">Thomas Margosian</h1>
        <nav className="flex space-x-6">
          <Link to="about" smooth duration={500} className="cursor-pointer">About</Link>
          <Link to="projects" smooth duration={500} className="cursor-pointer">Projects</Link>
          <Link to="contact" smooth duration={500} className="cursor-pointer">Contact</Link>
          <Button onClick={() => setDarkMode(!darkMode)}>{darkMode ? "Light Mode" : "Dark Mode"}</Button>
        </nav>
      </header>

      <section className="flex flex-col items-center justify-center text-center py-24 px-4">
        <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold mb-4">
          Full‑Stack Web & React Developer
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-lg max-w-xl">
          Passionate about building clean, responsive web applications.
        </motion.p>
      </section>

      <section id="about" className="max-w-3xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-semibold mb-6">About Me</h3>
        <p className="text-lg leading-relaxed">
          I’m a software developer specializing in React and modern web technologies. I graduated from RIT in 2021 and enjoy creating intuitive and scalable web applications.
        </p>
      </section>

      <section id="projects" className="max-w-5xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-semibold mb-6">Selected Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "TheKnow", tech: ["React", "Node.js", "MongoDB"], link: "#" },
            { title: "Audio Sandbox", tech: ["Canvas", "WebAudio"], link: "#" },
            { title: "SpaceX Mapping API", tech: ["React", "Mapbox"], link: "#" }
          ].map((project, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }}>
              <Card>
                <CardContent className="p-4">
                  <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((badge, idx) => (
                      <span key={idx} className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded">
                        {badge}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="text-blue-600 hover:underline">View Project</a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h3 className="text-3xl font-semibold mb-6">Contact</h3>
        <p className="text-lg mb-4">Email: thomas@example.com</p>
        <p className="text-lg">GitHub: <a href="https://github.com/Tmargo101" className="text-blue-600 hover:underline">Tmargo101</a></p>
      </section>

      <footer className="text-center py-6 text-sm">
        &copy; {new Date().getFullYear()} Thomas Margosian
      </footer>
    </div>
  );
}
