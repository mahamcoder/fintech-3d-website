import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({
  children,
  variant = 'primary',
  className = '',
  icon,
  onClick,
  style
}) => {
  const baseStyles = "relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-tight transition-all duration-300 rounded-full overflow-hidden group";

  const variants = {
    primary: "bg-[linear-gradient(to_bottom_right,_#ffffff,_#92d5d8,_#052e23)] text-black shadow-[0_4px_20px_rgba(89, 145, 143,0.3)] hover:shadow-[0_4px_35px_rgba(89, 145, 143,0.5)] hover:scale-105 active:scale-95",
    secondary: "bg-white text-black border border-black/10 hover:border-black shadow-sm hover:shadow-md hover:scale-105",
    ghost: "bg-transparent text-black border border-black/5 hover:bg-black/5 hover:scale-105",
    accent: "bg-black text-white hover:bg-black/90 hover:scale-105 shadow-xl"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      style={style}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="group-hover:translate-x-1 transition-transform duration-300">{icon}</span>}
      </span>
    </motion.button>
  );
};
