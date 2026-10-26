"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { ExternalLink, Layers, CheckCircle2 } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Media Octus CRM — OOH Advertising Platform",
    category: "Full-Stack Application",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    description:
      "Full-stack, role-based CRM platform (Admin, Manager, HR, User roles) for out-of-home advertising operations with modular backend architecture and Next.js 16 App Router frontend.",
    highlights: [
      "Modular backend architecture (Model → Service → Controller → Routes → Validator) with coding standards.",
      "JWT-based authentication with role-based access control (RBAC) and bcrypt password hashing.",
      "HR Attendance module with GPS check-in/check-out, shift logic, and MongoDB unique-index constraints.",
      "Server-side input validation with Zod and role-scoped database query isolation.",
    ],
    tech: ["Node.js", "Express", "TypeScript", "MongoDB", "Next.js", "Tailwind CSS", "JWT", "Zod"],
    github: "https://github.com",
    demo: "#contact",
    image: "/projects/media-octus-crm.jpg",
  },
  {
    id: 2,
    title: "Tyler Content Manager (TCM)",
    category: "Enterprise Platform",
    badgeColor: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    description:
      "Enterprise-grade content management solution integrated with 7 Tyler products (Municipal Justice, School ERP Pro, Enterprise Assessment & Tax, etc.) supporting 3,000+ customers.",
    highlights: [
      "Engineered core content capture, automation, secure storage, and cross-platform document workflows.",
      "Built robust Angular frontend components interfaced with Spring Boot middleware and optimized Java backend.",
      "Exposed business logic through OData REST APIs and implemented OpenSearch for advanced indexing.",
      "Owned front-end architecture decisions and collaborated in an agile environment with code reviews.",
    ],
    tech: ["Angular", "Java", "Spring Boot", "OData", "OpenSearch", "SQL Server", "PDFTron", "Vaadin"],
    github: "https://github.com",
    demo: "#contact",
    image: "/projects/tyler-content-manager.jpg",
  },
  {
    id: 3,
    title: "Company HRMS / CRM Platform",
    category: "Full-Stack Application",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    description:
      "Internal HRMS and CRM application delivering real-time status management, attendance monitoring, and critical system stability for company-wide operations.",
    highlights: [
      "Fixed critical bugs and resolved production issues in the company's internal platform, boosting stability.",
      "Implemented responsive feature enhancements and UI refinements based on client and QA feedback.",
      "Collaborated with the team to test, debug, and deploy real-time websocket modules using Socket.io.",
    ],
    tech: ["React", "Node.js", "Express", "Socket.io", "MongoDB", "Nginx"],
    github: "https://github.com",
    demo: "#contact",
    image: "/projects/hrms-crm-platform.jpg",
  },
  {
    id: 4,
    title: "AI Code Debugging Assistant",
    category: "Web Application",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    description:
      "AI-powered web application that analyzes source code in real-time, detects syntax and logical errors, and generates instant debugging suggestions to help developers fix bugs faster.",
    highlights: [
      "Analyzes code dynamically, detects errors, and outputs clear debugging suggestions with diff previews.",
      "Crafted responsive UI with React and Tailwind CSS, featuring structured error-boundary handling.",
      "Integrated frontend with backend services through fast REST APIs for smooth AI model communication.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "JavaScript", "Tailwind CSS", "REST APIs"],
    github: "https://github.com",
    demo: "#contact",
    image: "/projects/ai-debugger-assistant.jpg",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Featured Projects"
          subtitle="Real-world applications & enterprise systems showcasing full-stack architectural engineering."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-card border border-card-border rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image & Header */}
              <div>
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-background/50">
                  <div className="absolute top-4 left-4 z-20">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full border backdrop-blur-md ${project.badgeColor}`}
                    >
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 z-10" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-7 sm:p-8">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights from Resume */}
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wider flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-primary" /> Key Highlights
                    </p>
                    <ul className="space-y-1.5 text-xs text-muted">
                      {project.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-white/5 text-foreground/80 text-xs font-medium rounded-lg border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="px-7 sm:px-8 pb-7 pt-4 border-t border-white/5 flex items-center justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  Code Repository
                </a>
                <a
                  href={project.demo}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-foreground transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> View Details
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

