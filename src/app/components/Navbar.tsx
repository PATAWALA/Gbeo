// app/components/Navbar.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sun, 
  Moon, 
  Menu, 
  X,
  ChevronDown,
  Sparkles,
  Flame,
  Dumbbell,
  Trophy,
  Target,
  Users,
  UserPlus // Icône pour inscription
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['accueil', 'programmes', 'coaching', 'nutrition', 'resultats'];
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

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
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

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // Fonction d'inscription
  const handleInscription = () => {
    const phoneNumber = "2250544752377";
    const message = encodeURIComponent(
      "🎯 INSCRIPTION IRONFORCE PRO\n\nJe souhaite m'inscrire au programme de musculation !\n\nMerci de me contacter pour les modalités."
    );
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const navItems = [
    { 
      id: 'accueil', 
      label: 'Accueil',
      icon: <Sparkles className="w-4 h-4" />
    },
    { 
      id: 'programmes', 
      label: 'Programmes',
      icon: <Dumbbell className="w-4 h-4" />,
      dropdown: [
        { id: 'debutant', label: 'Débutant', desc: 'Pour commencer' },
        { id: 'intermediaire', label: 'Intermédiaire', desc: 'Niveau avancé' },
        { id: 'pro', label: 'Professionnel', desc: 'Performance max' }
      ]
    },
    { 
      id: 'coaching', 
      label: 'Coaching',
      icon: <Users className="w-4 h-4" />
    },
    { 
      id: 'nutrition', 
      label: 'Nutrition',
      icon: <Target className="w-4 h-4" />
    },
    { 
      id: 'resultats', 
      label: 'Résultats',
      icon: <Trophy className="w-4 h-4" />
    },
  ];

  return (
    <>
      {/* Barre de navigation principale */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-2 w-full z-50 px-4 ${scrolled ? 'py-1' : 'py-1'}`}
        ref={dropdownRef}
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
              
              {/* Logo */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 md:gap-3 cursor-pointer group flex-shrink-0"
                onClick={() => scrollToSection("accueil")}
              >
                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center shadow-lg ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-orange-500 to-red-600'
                    : 'bg-gradient-to-br from-orange-400 to-red-500'
                }`}>
                  <Flame className="text-white w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="flex flex-col">
                  <span className={`font-bold text-sm md:text-base lg:text-lg leading-tight whitespace-nowrap ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    IronForce Pro
                  </span>
                  <span className="text-[10px] md:text-xs text-orange-500 font-medium hidden xs:inline">
                    Transformation Physique
                  </span>
                </div>
              </motion.div>

              {/* Navigation Desktop */}
              <div className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                <div className="flex items-center gap-1">
                  {navItems.map((item) => (
                    <div key={item.id} className="relative">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => 
                          item.dropdown ? toggleDropdown(item.id) : scrollToSection(item.id)
                        }
                        className={`relative px-4 py-2.5 rounded-lg mx-1 transition-all duration-300 flex items-center gap-2 ${
                          activeSection === item.id
                            ? theme === 'dark'
                              ? 'bg-gradient-to-r from-orange-500/20 to-red-600/10 text-orange-400 font-semibold'
                              : 'bg-gradient-to-r from-orange-500/10 to-red-500/5 text-orange-600 font-semibold'
                            : theme === 'dark'
                              ? 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
                        }`}
                      >
                        <span className="font-medium whitespace-nowrap">{item.label}</span>
                        {item.dropdown && (
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                            openDropdown === item.id ? 'rotate-180' : ''
                          } ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} />
                        )}
                      </motion.button>

                      {/* Dropdown */}
                      <AnimatePresence>
                        {item.dropdown && openDropdown === item.id && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className={`absolute left-0 top-full mt-2 min-w-[200px] rounded-xl p-2 shadow-2xl z-50 ${
                              theme === 'dark'
                                ? 'bg-gray-900/95 backdrop-blur-lg border border-gray-800'
                                : 'bg-white/95 backdrop-blur-lg border border-gray-200'
                            }`}
                          >
                            {item.dropdown.map((subItem) => (
                              <button
                                key={subItem.id}
                                onClick={() => scrollToSection(subItem.id)}
                                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 mb-1 last:mb-0 ${
                                  theme === 'dark'
                                    ? 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                                    : 'text-gray-700 hover:bg-gray-100/50 hover:text-gray-900'
                                }`}
                              >
                                <div className="font-medium mb-1">{subItem.label}</div>
                                <div className={`text-xs ${
                                  theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                                }`}>
                                  {subItem.desc}
                                </div>
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

              {/* Boutons à droite */}
              <div className="flex items-center gap-2 md:gap-3">
                {/* Bouton Inscription avec RGB orange */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleInscription}
                  className="hidden lg:flex items-center gap-2 px-4 py-2 font-bold rounded-lg transition-all duration-300 shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, rgb(255, 165, 0) 0%, rgb(255, 140, 0) 25%, rgb(255, 69, 0) 50%, rgb(255, 99, 71) 100%)',
                    color: 'white',
                    border: 'none'
                  }}
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Rejoindre</span>
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
                >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </motion.button>

                {/* Bouton menu mobile */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`lg:hidden p-1.5 md:p-2 rounded-lg transition-colors ${
                    theme === 'dark'
                      ? 'text-gray-300 hover:bg-gray-800'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30 }}
              className={`absolute right-0 top-0 h-full w-80 max-w-full shadow-2xl ${
                theme === 'dark'
                  ? 'bg-gradient-to-b from-gray-900 to-black'
                  : 'bg-gradient-to-b from-white to-gray-50'
              }`}
            >
              {/* En-tête */}
              <div className={`p-6 border-b ${
                theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      theme === 'dark'
                        ? 'bg-gradient-to-br from-orange-500 to-red-600'
                        : 'bg-gradient-to-br from-orange-400 to-red-500'
                    }`}>
                      <Flame className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        IronForce Pro
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
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* Navigation mobile */}
              <div className="p-6 space-y-1 overflow-y-auto max-h-[calc(100vh-180px)]">
                {navItems.map((item) => (
                  <div key={item.id}>
                    <button
                      onClick={() => {
                        if (item.dropdown) {
                          toggleDropdown(`mobile-${item.id}`);
                        } else {
                          scrollToSection(item.id);
                          setIsMenuOpen(false);
                        }
                      }}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center justify-between ${
                        activeSection === item.id
                          ? theme === 'dark'
                            ? 'bg-gradient-to-r from-orange-500/20 to-red-600/10 text-orange-400'
                            : 'bg-gradient-to-r from-orange-500/10 to-red-500/5 text-orange-600'
                          : theme === 'dark'
                            ? 'text-gray-300 hover:bg-gray-800/50'
                            : 'text-gray-600 hover:bg-gray-100/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                          theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                        }`}>
                          <div className="text-orange-500">
                            {item.icon}
                          </div>
                        </div>
                        <span className="font-medium">{item.label}</span>
                      </div>
                      {item.dropdown && (
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          openDropdown === `mobile-${item.id}` ? 'rotate-180' : ''
                        } ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} />
                      )}
                    </button>

                    {/* Sous-menu mobile */}
                    {item.dropdown && openDropdown === `mobile-${item.id}` && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`ml-12 pl-4 border-l-2 ${
                          theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
                        }`}
                      >
                        <div className="space-y-1 py-2">
                          {item.dropdown.map((subItem) => (
                            <button
                              key={subItem.id}
                              onClick={() => {
                                scrollToSection(subItem.id);
                                setIsMenuOpen(false);
                              }}
                              className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                                theme === 'dark'
                                  ? 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
                              }`}
                            >
                              <div className="font-medium mb-1">{subItem.label}</div>
                              <div className={`text-xs ${
                                theme === 'dark' ? 'text-gray-600' : 'text-gray-500'
                              }`}>
                                {subItem.desc}
                              </div>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}

                {/* Bouton Inscription mobile */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    handleInscription();
                    setIsMenuOpen(false);
                  }}
                  className="w-full mt-6 p-4 font-bold rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-3"
                  style={{
                    background: 'linear-gradient(135deg, rgb(255, 165, 0) 0%, rgb(255, 140, 0) 25%, rgb(255, 69, 0) 50%, rgb(255, 99, 71) 100%)',
                    color: 'white',
                    border: 'none'
                  }}
                >
                  <UserPlus className="w-5 h-5" />
                  Rejoindre maintenant
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}