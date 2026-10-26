"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { GraduationCap, Briefcase, Code, Terminal, Trophy, CheckCircle } from "lucide-react";
import { cn } from "../../../lib/utils";

const timeline = [
  {
    id: 1,
    type: "experience",
    icon: Briefcase,
    title: "Frontend Developer Intern",
    organization: "XenParkSolutions",
    date: "Aug 2025 – Dec 2025",
    points: [
      "Developed responsive, user-friendly UI components for client and internal projects using Angular and modern frontend practices.",
      "Integrated frontend components with backend services through REST APIs in collaboration with backend developers.",
      "Applied Git and GitHub workflows for version control, code collaboration, and maintainable code history.",
      "Tested, debugged, and optimized frontend code to improve usability, performance, and user experience.",
    ],
  },
  {
    id: 2,
    type: "education",
    icon: GraduationCap,
    title: "B.Tech in Computer Science Engineering",
    organization: "Sushila Devi Bansal College of Technology, Indore · RGPV",
    date: "2022 – 2026",
    points: [
      "CGPA: 7.30",
      "Core focus on Data Structures, Algorithms, Modular Backend Architecture, and Full-Stack Web Development.",
    ],
  },
  {
    id: 3,
    type: "education",
    icon: GraduationCap,
    title: "School of Excellence, MP Board",
    organization: "Higher Secondary & High School",
    date: "2019 – 2022",
    points: [
      "Class XII: 79.6% · Class X: 89.66%",
      "Solid foundation in Mathematics, Sciences, and Computer Applications.",
    ],
  },
];

const achievements = [
  "Participated in a debugging competition at Sushila Devi Bansal College of Technology.",
  "Participated in the Heritage Quiz and sports activities.",
  "Completed HackerRank practice and certification activities.",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="About Me"
          subtitle="Full-Stack Developer with hands-on enterprise & scalable web application experience."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Bio Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-semibold mb-6 flex items-center gap-2">
              <Terminal className="text-primary w-6 h-6" /> Who am I?
            </h3>
            <div className="space-y-6 text-muted leading-relaxed">
              <p>
                I am a Computer Science Engineering student and <span className="text-foreground font-medium">Full-Stack Developer</span> with experience building responsive, scalable web applications and enterprise content-management systems using React, Next.js, TypeScript, Node.js, and Express.js.
              </p>
              <p>
                Skilled in integrating REST APIs, designing role-based access control (RBAC) systems, and delivering production features in agile, cross-functional teams. I thrive on clean modular architectures and solving complex debugging challenges.
              </p>

              <div className="p-6 bg-card border border-card-border rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <h4 className="text-foreground font-medium mb-2 flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" /> Core Focus
                </h4>
                <p className="text-sm">
                  Full-Stack Architecture (Model → Service → Controller), Role-Based Access Control (RBAC), Scalable REST APIs, and Enterprise Content Management.
                </p>
              </div>

              {/* Achievements & Activities Card */}
              <div className="p-6 bg-card border border-card-border rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-secondary" />
                <h4 className="text-foreground font-medium mb-3 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-secondary" /> Achievements & Activities
                </h4>
                <ul className="space-y-2.5">
                  {achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-muted">
                      <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Timeline Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-6 top-4 bottom-4 w-px bg-white/10" />

            <div className="space-y-10">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-16 group"
                >
                  {/* Timeline Node */}
                  <div
                    className={cn(
                      "absolute left-4 top-1 w-5 h-5 -translate-x-1/2 rounded-full border-4 border-background flex items-center justify-center transition-colors duration-300",
                      item.type === "experience" ? "bg-secondary" : "bg-primary"
                    )}
                  />

                  <div className="bg-card border border-card-border p-6 rounded-2xl hover:border-white/20 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                      <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <item.icon className="w-5 h-5 text-muted group-hover:text-primary transition-colors" />
                        {item.title}
                      </h4>
                      <span className="text-xs font-medium text-primary/80 bg-primary/10 px-3 py-1 rounded-full w-fit">
                        {item.date}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-foreground/80 mb-3">{item.organization}</p>
                    <ul className="space-y-1.5 text-sm text-muted">
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
