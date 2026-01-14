"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Sparkles,
  MessageCircle
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'services', 'about', 'temoignages', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "+22501809886";
    const message = encodeURIComponent(
      "Bonjour Média Plus Créa ! 👋\n\nJe souhaite prendre contact avec vous pour discuter d'un projet.\n\nPouvez-vous me rappeler ou me répondre sur WhatsApp ?"
    );
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const navItems = [
    { id: 'hero', label: 'Accueil' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'À propos' },
    { id: 'temoignages', label: 'Témoignages' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Barre de navigation principale */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-3 w-full z-50 px-4 overflow-hidden ${scrolled ? 'py-1' : 'py-1'}`}
      >
        <div className="flex justify-center w-full">
          <div className={`w-full max-w-6xl rounded-2xl backdrop-blur-lg transition-all duration-300 overflow-hidden ${
            theme === 'dark'
              ? scrolled
                ? 'bg-gray-900/95 border border-gray-800 shadow-2xl shadow-black/40'
                : 'bg-gray-900/90 border border-gray-800/60 shadow-xl shadow-black/30'
              : scrolled
                ? 'bg-white/98 border border-gray-200 shadow-2xl shadow-gray-400/20'
                : 'bg-white/95 border border-gray-100 shadow-xl shadow-gray-400/10'
          }`}>
            <div className="flex items-center justify-between px-4 md:px-6 lg:px-8 py-3">
              
              {/* Logo - MODIFIÉ pour montrer le nom sur mobile */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 md:gap-3 cursor-pointer group flex-shrink-0"
                onClick={() => scrollToSection("hero")}
              >
                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center shadow-lg ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-orange-500 to-amber-500'
                    : 'bg-gradient-to-br from-orange-400 to-amber-400'
                }`}>
                  <Sparkles className="text-white w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="flex flex-col">
                  <span className={`font-bold text-sm md:text-base lg:text-lg leading-tight whitespace-nowrap ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Média Plus Créa
                  </span>
                  <span className="text-[10px] md:text-xs text-orange-500 font-medium hidden xs:inline">
                    Créations Digitales
                  </span>
                </div>
              </motion.div>

              {/* Navigation Desktop - CENTRÉE */}
              <div className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                <div className="flex items-center gap-1">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => scrollToSection(item.id)}
                      className={`relative px-4 py-2.5 rounded-lg mx-1 transition-all duration-300 ${
                        activeSection === item.id
                          ? theme === 'dark'
                            ? 'bg-gradient-to-r from-orange-500/20 to-amber-500/10 text-orange-400 font-semibold'
                            : 'bg-gradient-to-r from-orange-500/10 to-amber-500/5 text-orange-600 font-semibold'
                          : theme === 'dark'
                            ? 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
                      }`}
                    >
                      <span className="font-medium whitespace-nowrap">{item.label}</span>
                      {activeSection === item.id && (
                        <motion.div
                          layoutId="activeTab"
                          className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 rounded-t-full ${
                            theme === 'dark' ? 'bg-orange-500' : 'bg-orange-500'
                          }`}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Boutons d'action à droite */}
              <div className="flex items-center gap-2 md:gap-3">
                {/* Bouton WhatsApp - UNIQUEMENT sur desktop (lg et plus) */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleWhatsAppClick}
                  className="hidden lg:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg font-semibold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp</span>
                </motion.button>

                {/* Bouton thème */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleTheme}
                  className={`p-1.5 md:p-2 rounded-lg transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-gray-800 text-amber-300 hover:bg-gray-700'
                      : 'bg-gray-100 text-amber-600 hover:bg-gray-200'
                  }`}
                  aria-label={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
                >
                  {theme === 'dark' ? <Sun size={18} className="md:w-5 md:h-5" /> : <Moon size={18} className="md:w-5 md:h-5" />}
                </motion.button>

                {/* Bouton menu hamburger - VISIBLE sur mobile et tablette */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`lg:hidden p-1.5 md:p-2 rounded-lg transition-colors ${
                    theme === 'dark'
                      ? 'text-gray-300 hover:bg-gray-800'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  aria-label="Ouvrir le menu de navigation"
                >
                  {isMenuOpen ? <X size={20} className="md:w-6 md:h-6" /> : <Menu size={20} className="md:w-6 md:h-6" />}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Menu sidebar - VISIBLE sur mobile et tablette */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu sidebar */}
          <div className={`absolute right-0 top-0 h-full w-80 max-w-full shadow-2xl ${
            theme === 'dark'
              ? 'bg-gradient-to-b from-gray-900 to-gray-950'
              : 'bg-gradient-to-b from-white to-gray-50'
          }`}>
            {/* En-tête du menu */}
            <div className={`p-6 border-b ${
              theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-orange-500 to-amber-500'
                      : 'bg-gradient-to-br from-orange-400 to-amber-400'
                  }`}>
                    <Sparkles className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Média Plus Créa
                    </h3>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Menu de navigation
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className={`p-2 rounded-lg ${
                    theme === 'dark'
                      ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                  aria-label="Fermer le menu"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Navigation dans le sidebar */}
            <div className="p-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                    activeSection === item.id
                      ? theme === 'dark'
                        ? 'bg-gradient-to-r from-orange-500/20 to-amber-500/10 text-orange-400'
                        : 'bg-gradient-to-r from-orange-500/10 to-amber-500/5 text-orange-600'
                      : theme === 'dark'
                        ? 'text-gray-300 hover:bg-gray-800/50'
                        : 'text-gray-600 hover:bg-gray-100/50'
                  }`}
                >
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}

              {/* WhatsApp dans le sidebar mobile/tablette */}
              <button
                onClick={() => {
                  handleWhatsAppClick();
                  setIsMenuOpen(false);
                }}
                className="w-full mt-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white p-4 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-lg shadow-orange-500/25"
              >
                <MessageCircle size={20} />
                Contacter sur WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Indicateur de section (scroll indicator) */}
      <div className="fixed left-1/2 transform -translate-x-1/2 bottom-6 z-40 hidden lg:block">
        <div className={`flex gap-1.5 p-2 rounded-full backdrop-blur-md ${
          theme === 'dark'
            ? 'bg-gray-900/50 border border-gray-800/50'
            : 'bg-white/50 border border-gray-200/50'
        }`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === item.id
                  ? theme === 'dark'
                    ? 'bg-orange-500 w-8'
                    : 'bg-orange-500 w-8'
                  : theme === 'dark'
                    ? 'bg-gray-700 hover:bg-gray-600'
                    : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Aller à ${item.label}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}