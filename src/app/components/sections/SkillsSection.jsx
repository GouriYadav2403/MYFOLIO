"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { Code2, Database, LayoutTemplate, Server, Wrench } from "lucide-react";

const skillCategories = [
  {
    id: "languages",
    title: "Languages",
    icon: Code2,
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
    skills: ["C/C++", "JavaScript", "TypeScript"],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: LayoutTemplate,
    color: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-400",
    skills: ["React", "Next.js", "Angular", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    color: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-400",
    skills: ["Node.js", "Express.js", "REST APIs", "Socket.io"],
  },
  {
    id: "databases",
    title: "Databases",
    icon: Database,
    color: "from-emerald-500/20 to-green-500/20",
    iconColor: "text-emerald-400",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "SQL Server"],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    icon: Wrench,
    color: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-400",
    skills: ["Git", "GitHub", "Postman", "Docker", "Nginx", "VS Code"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-card/30 relative border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Technical Arsenal"
          subtitle="A comprehensive toolkit for building modern, scalable full-stack applications."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="relative group h-full"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative h-full bg-background border border-card-border p-6 rounded-2xl hover:border-white/20 transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center mb-5 shadow-inner">
                  <category.icon className={`w-6 h-6 ${category.iconColor}`} />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center w-full mt-auto">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg text-xs font-medium text-muted hover:text-foreground transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
