// components/ServiceItem.tsx
"use client";

import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { ShoppingCart, MessageCircle } from "lucide-react";

interface ServiceItemProps {
  title: string;
  description: string;
}

export default function ServiceItem({ title, description }: ServiceItemProps) {
  const { theme } = useTheme();

  const handleOrder = (serviceTitle: string, serviceDescription: string) => {
    const phoneNumber = "+22501809886";
    const message = encodeURIComponent(
      `Bonjour !\n\nJe souhaite commander le service suivant :\n\n` +
      `📌 **Service :** ${serviceTitle}\n` +
      `📋 **Description :** ${serviceDescription}\n\n` +
      `Je suis intéressé(e) et j'aimerais en discuter plus en détail.`
    );
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`p-6 rounded-2xl shadow-sm border transition-colors duration-300 flex flex-col h-full ${
        theme === 'dark' 
          ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' 
          : 'bg-white border-gray-100 hover:bg-gray-50'
      }`}
    >
      <div className="flex-grow">
        <h3 className={`text-lg font-semibold mb-2 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          {title}
        </h3>
        <p className={`text-sm leading-relaxed mb-4 ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {description}
        </p>
      </div>
      
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => handleOrder(title, description)}
        className={`mt-4 w-full py-2 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors ${
          theme === 'dark'
            ? 'bg-green-600 hover:bg-green-700 text-white'
            : 'bg-green-500 hover:bg-green-600 text-white'
        }`}
      >
        <MessageCircle size={18} />
        Commander sur WhatsApp
      </motion.button>
    </motion.div>
  );
}