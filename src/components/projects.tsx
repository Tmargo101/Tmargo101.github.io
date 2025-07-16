import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/types/types";
import { motion } from "framer-motion";

export interface ProjectsProps {
    isDarkMode: boolean,
    projects: Project[],
}

export function Projects(props: ProjectsProps) {
    return (
        <section id="projects" className="max-w-5xl mx-auto px-4 py-16">
            <h3 className="text-3xl font-semibold mb-6">Selected Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {props.projects.map((project, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05 }}>
                <Card isDarkMode={props.isDarkMode}>
                    <CardContent isDarkMode={props.isDarkMode} className="p-4">
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
    )
}