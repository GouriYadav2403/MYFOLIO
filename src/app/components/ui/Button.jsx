"use client";

import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  as = "button",
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20",
    secondary: "bg-secondary text-primary-foreground hover:bg-secondary/90 shadow-lg shadow-secondary/20",
    outline: "border border-zinc-800 bg-transparent hover:bg-zinc-800 text-foreground",
    ghost: "hover:bg-zinc-800 text-foreground hover:text-primary transition-colors",
  };

  const classes = cn(baseStyles, variants[variant], className);

  if (as === "a" || href) {
    return (
      <motion.a
        href={href || "#"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={classes}
        onClick={onClick}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
}
