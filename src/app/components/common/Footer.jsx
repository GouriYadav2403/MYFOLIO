"use client";

import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-background py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="font-display font-bold text-2xl tracking-tighter mb-2">
            Gouri<span className="text-primary">.</span>
          </Link>
          <p className="text-muted text-sm text-center md:text-left max-w-sm">
            Full-Stack Developer building scalable web applications and enterprise systems.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4 text-muted">
            <a href="mailto:gouriy2414@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4" /> gouriy2414@gmail.com
            </a>
            <span className="hidden md:inline text-white/20">|</span>
            <a href="tel:+917805001521" className="hover:text-primary transition-colors flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4" /> +91-7805001521
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            {/* LeetCode Icon using simple text/svg placeholder */}
            <a href="https://leetcode.com" target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-primary transition-colors text-sm font-bold flex items-center justify-center w-5 h-5">
              LC
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 mt-8 text-center text-sm text-muted/60">
        &copy; {currentYear} Gouri Yadav. All rights reserved.
      </div>
    </footer>
  );
}
