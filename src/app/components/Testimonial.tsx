// components/Testimonial.tsx
"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export default function Testimonial({ name, role, company, content, rating }: TestimonialProps) {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`p-6 rounded-2xl shadow-lg border transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-gray-600'
          : 'bg-gradient-to-br from-white to-blue-50 border-blue-100 hover:border-blue-200'
      }`}
    >
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i}
            size={16}
            className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
      
      <p className={`mb-6 italic leading-relaxed ${
        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
      }`}>
        "{content}"
      </p>
      
      <div>
        <h4 className={`font-semibold ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          {name}
        </h4>
        <p className={`text-sm ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {role} • {company}
        </p>
      </div>
    </motion.div>
  );
}