"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { Download, FileText } from "lucide-react";

export default function ResumeSection() {
  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl z-0 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <SectionHeading 
          title="Ready to dive deeper?" 
          subtitle="Download my complete resume to see full details of my education, experience, and projects." 
        />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card/50 backdrop-blur-md border border-card-border p-10 md:p-16 rounded-3xl max-w-3xl mx-auto shadow-2xl"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <FileText className="w-10 h-10 text-primary" />
          </div>
          
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
            Get the full picture
          </h3>
          <p className="text-muted mb-8 max-w-lg mx-auto">
            My resume contains a comprehensive overview of my technical skills, internships, academic performance, and personal projects.
          </p>
          
          <Button as="a" href="/resume.pdf" target="_blank" className="px-8 py-4 text-lg">
            <Download className="w-5 h-5 mr-3" />
            Download Resume (PDF)
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
