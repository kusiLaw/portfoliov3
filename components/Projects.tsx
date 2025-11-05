'use client'
import { useState } from "react";
import {
  ExternalLink,
  Github,
  Globe,
  Cloud,
  Code,
  
} from "lucide-react";
import { ClientMotion } from "./animation";
import { projects } from "../data/data";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
export function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Projects", icon: <Code size={16} /> },
    { id: "web", label: "Web Development", icon: <Globe size={16} /> },
    { id: "aws", label: "AWS Projects", icon: <Cloud size={16} /> },
    // { id: "ai", label: "Agentic AI", icon: <Sparkles size={16} /> },
  ];


  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className=" py-20 px-4 sm:px-6 lg:px-8 bg-white ">
      <div className="max-w-6xl mx-auto ">
        <ClientMotion
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-slate-900 mb-4 text-center text-2xl sm:text-3xl lg:text-4xl">
            Featured Projects
          </h2>
          <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
            A selection of projects showcasing expertise in web development,
            cloud infrastructure, and AI integration
          </p>

          {/* Category Filter */}
          <div className="  flex flex-wrap justify-center gap-3 mt-8 mb-12 py-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all shadow-md  ${
                  activeCategory === category.id
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 hover:shadow-lg"
                }`}
              >
                {category.icon}
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* <AnimatePresence mode="popLayout"> */}
            {filteredProjects.map((project, index) => (
              <ClientMotion
                key={project.title}
                //   layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white group rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title} // Good!
                    // --- SEO: Provide width/height for CLS prevention ---
                    width={1280} // Example width
                    height={720} // Example height for 16:9
                    objectFit="cover"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <Link
                    href={project.links.demo}
                    target="_blank"
                    className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  >
                    <ExternalLink className="w-12 h-12 text-white" />
                  </Link>
                </div>
                <div className="p-6">
                  <Badge className="block mb-3 text-center">
                    {project.category}
                  </Badge>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-start justify-between mb-3 ">
                    <h3 className="text-slate-900 flex-1">{project.title}</h3>
                    <div className="flex gap-2">
                      {project.links.demo && (
                        <Link target="_blank"
                          href={project.links.demo}
                          className="text-slate-600 hover:text-slate-900 transition-colors"
                          aria-label="View demo"
                        >
                          <ExternalLink size={18} />
                        </Link>
                      )}
                      {project.links.github && (
                        <Link target="_blank"
                          href={project.links.github}
                          className="text-slate-600 hover:text-slate-900 transition-colors"
                          aria-label="View code"
                        >
                          <Github size={18} />
                        </Link>
                      )}
                    </div>
                  </div>

                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <h3 className="text-slate-900 mb-2 font-medium">Challenge</h3>
                  {project.challenge && (
                    <p className="text-slate-600 mb-4">{project.challenge}</p>
                  )}
                  <h3 className="text-slate-900 mb-2 font-medium">
                    Key Achievements:
                  </h3>
                  <ul className="space-y-1 text-sm text-slate-600">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-2 ">
                        <span className="text-slate-400">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ClientMotion>
            ))}
            {/* </AnimatePresence> */}
          </div>
        </ClientMotion>
      </div>
    </section>
  );
}
