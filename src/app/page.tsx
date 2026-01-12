
// app/page.tsx
"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { 
  Send, 
  BarChart3, 
  Facebook,
  PenTool, 
  Video, 
  Instagram,
  ChevronRight,
  CheckCircle,
  Mail,
  ArrowRight,
  TrendingUp,
  Eye,
  Sparkles,
  Target,
  MessageCircle,
  Phone
} from "lucide-react";
import ServiceItem from "./components/ServiceItem";
import Testimonial from "./components/Testimonial";
import Navbar from "./components/Navbar";
import { useTheme } from "./context/ThemeContext";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });
  const { theme } = useTheme();

  const controls = useAnimation();

  useEffect(() => {
    // Animation des éléments décoratifs
    controls.start({
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    });
  }, [controls]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Traitement du formulaire
    console.log(formData);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-gray-900 to-gray-950' 
        : 'bg-gradient-to-b from-gray-50 to-white'
    }`}>
      <Navbar />
<section id="hero" className="pt-40 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            {/* Titre principal */}
            <h1 className={`text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="block">Rendez votre activité</span>
              <span className="text-gradient-orange">visible et florissante</span>
            </h1>

            {/* Description */}
            <p className={`text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed px-4 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Nous vous accompagnons dans <span className="font-semibold text-emerald-600 dark:text-emerald-400">l'explosion de votre business</span> à travers nos services de visibilité digitale.
            </p>

            {/* Boutons d'action - CORRIGÉS POUR ÊTRE PRO */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              {/* Bouton principal - Orange vif */}
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto px-8 py-3 md:px-10 md:py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 focus:ring-4 focus:ring-orange-500/30 focus:outline-none shadow-lg hover:shadow-xl"
                aria-label="Discuter de votre projet avec Média Créa Plus"
              >
                Discutons de votre projet
              </motion.button>
              
              {/* Bouton secondaire - Bleu professionnel avec texte visible en dark mode */}
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto px-8 py-3 md:px-10 md:py-4 bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-200 font-semibold rounded-full border-2 border-blue-200 dark:border-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/60 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 focus:ring-4 focus:ring-blue-500/30 focus:outline-none"
                aria-label="Voir les offres de services de Média Créa Plus"
              >
                Voir nos offres
              </motion.button>
            </div>

            {/* Points décoratifs colorés */}
            <div className="flex justify-center gap-8 mt-20">
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse animation-delay-200"></div>
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse animation-delay-400"></div>
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse animation-delay-600"></div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Section Services */}
      <section id="services" className={`py-16 px-4 transition-colors duration-300 overflow-hidden${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Mes <span className="text-blue-500">services</span>
            </h2>
            <p className={`max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Une offre complète pour booster votre présence digitale et transformer 
              vos visiteurs en clients fidèles.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Conception Graphique */}
            <ServiceItem
              title="Conception graphique"
              description="Création d'identités visuelles percutantes : Affiches, flyers professionnels, carrousels optimisés, visuels mensuels et stories engageantes."
            />
            
            {/* Gestion de campagnes */}
            <ServiceItem
              title="Gestion de campagnes publicitaires"
              description="Configuration et optimisation de campagnes Facebook/Instagram. Spécialisé lead generation et conversion avec suivi mensuel."
            />
            
            {/* Stratégie & rédaction */}
            <ServiceItem
              title="Stratégie & rédaction de contenu"
              description="Textes optimisés SEO, storytelling impactant, message de marque authentique et scripts vidéo qui convertissent."
            />
            
            {/* Création vidéo */}
            <ServiceItem
              title="Création de visuels & vidéos"
              description="Production de Reels percutants, montage vidéo sur mesure et packs mensuels pour une présence constante."
            />
            
            {/* Community Management */}
            <ServiceItem
              title="Community Management"
              description="Animation et modération de vos communautés, création de contenu engageant, stratégie de croissance sociale."
            />
            
            {/* Audit & Conseil */}
            <ServiceItem
              title="Audit & Stratégie digitale"
              description="Analyse complète de votre présence en ligne, plan d'action personnalisé et accompagnement sur mesure."
            />
          </div>

          {/* Processus */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-8 md:p-12 transition-colors duration-300 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-gray-800 to-gray-900'
                : 'bg-gradient-to-r from-blue-50 to-indigo-50'
            }`}
          >
            <h3 className={`text-2xl font-bold mb-8 text-center ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Mon <span className="text-blue-500">processus</span> en 4 étapes
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: <MessageCircle className="text-blue-500" />, title: "Audit & Brief", desc: "Analyse de vos besoins" },
                { icon: <PenTool className="text-blue-500" />, title: "Stratégie", desc: "Plan d'action personnalisé" },
                { icon: <Target className="text-blue-500" />, title: "Exécution", desc: "Création & optimisation" },
                { icon: <BarChart3 className="text-blue-500" />, title: "Suivi", desc: "Analyse des résultats" }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full shadow-sm mb-4 transition-colors ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-white'
                  }`}>
                    {step.icon}
                  </div>
                  <h4 className={`font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {step.title}
                  </h4>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>             
        </div>
      </section>

      {/* Section À propos */}
      <section id="about" className={`py-16 px-4 transition-colors duration-300 overflow-hidden${
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Ninsemouh <span className="text-blue-500">GbéO</span>
              </h2>
              <p className={`mb-6 leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Copywriter passionné et stratège digital, je transforme vos idées en messages 
                percutants qui résonnent avec votre audience. Avec plus de 3 ans d'expérience, 
                j'ai accompagné des entreprises comme <span className="font-semibold">AG Expert Consulting International</span> 
                et d'autres structures dans leur développement digital.
              </p>
              <p className={`mb-8 leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Mon expertise ? Trouver l'angle parfait, les mots justes et la stratégie 
                optimale pour maximiser votre visibilité et vos conversions.
              </p>
              
              <div className="space-y-4">
                {[
                  "Expert en communication digitale",
                  "Spécialiste Facebook/Instagram Ads",
                  "Storyteller & brand strategist",
                  "Community Manager expérimenté"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-green-500" size={20} />
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-8 transition-colors duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 text-white'
                  : 'bg-gradient-to-br from-blue-500 to-blue-600 text-white'
              }`}
            >
              <h3 className="text-2xl font-bold mb-6">Mes collaborations</h3>
              <div className="space-y-6">
                <div className={`rounded-xl p-6 ${
                  theme === 'dark' ? 'bg-white/10' : 'bg-white/20'
                }`}>
                  <h4 className="font-bold text-lg mb-2">AG Expert Consulting International</h4>
                  <p className="opacity-90">Community Management & Stratégie digitale</p>
                  <div className="flex gap-2 mt-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      theme === 'dark' ? 'bg-white/20' : 'bg-white/30'
                    }`}>
                      Facebook Ads
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      theme === 'dark' ? 'bg-white/20' : 'bg-white/30'
                    }`}>
                      Content Strategy
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      theme === 'dark' ? 'bg-white/20' : 'bg-white/30'
                    }`}>
                      Branding
                    </span>
                  </div>
                </div>
                
                <div className={`rounded-xl p-6 ${
                  theme === 'dark' ? 'bg-white/10' : 'bg-white/20'
                }`}>
                  <h4 className="font-bold text-lg mb-2">Entreprises diverses</h4>
                  <p className="opacity-90">Consultant en visibilité digitale</p>
                  <div className="flex gap-2 mt-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      theme === 'dark' ? 'bg-white/20' : 'bg-white/30'
                    }`}>
                      Copywriting
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      theme === 'dark' ? 'bg-white/20' : 'bg-white/30'
                    }`}>
                      Campagnes
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      theme === 'dark' ? 'bg-white/20' : 'bg-white/30'
                    }`}>
                      Design
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section id="temoignages" className={`py-16 px-4 transition-colors duration-300 overflow-hidden${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Ce que disent mes <span className="text-blue-500">clients</span>
            </h2>
            <p className={`max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Des résultats concrets et des relations durables
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Testimonial
              name="Alexandre K."
              role="Directeur Marketing"
              company="AG Expert Consulting"
              content="Ninsemouh a transformé notre présence digitale. Ses campagnes ont augmenté nos leads de 150% en 3 mois. Un professionnel exceptionnel."
              rating={5}
            />
            
            <Testimonial
              name="Sarah M."
              role="CEO"
              company="Startup Tech"
              content="Le storytelling créé pour notre marque a complètement changé la perception de nos produits. Les ventes ont augmenté de 40%."
              rating={5}
            />
            
            <Testimonial
              name="Thomas L."
              role="Responsable Commercial"
              company="Entreprise B2B"
              content="Professionalisme, créativité et résultats. Les vidéos et visuels créés ont considérablement boosté notre engagement sur les réseaux."
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Section Contact - MODIFIÉE POUR NE PAS ÊTRE NOIRE PAR DÉFAUT */}
      <section id="contact" className={`py-16 px-4 transition-colors duration-300 overflow-hidden${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-800 to-gray-900' 
          : 'bg-gradient-to-br from-gray-50 to-blue-50'
      }`}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={theme === 'dark' ? 'text-white' : 'text-gray-900'}
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Prêt à <span className="text-blue-500">transformer</span> votre communication ?
              </h2>
              <p className={`mb-8 text-lg ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Discutons de votre projet et créons ensemble une stratégie sur mesure.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${
                    theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-100'
                  }`}>
                    <Mail className="text-blue-500" />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Email
                    </h4>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      contact@gbeo-copywriting.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${
                    theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-100'
                  }`}>
                    <Phone className="text-blue-500" />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Téléphone
                    </h4>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      +XX X XX XX XX XX
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 mt-8">
                  <a href="#" className={`p-3 rounded-lg transition-colors ${
                    theme === 'dark' 
                      ? 'bg-white/10 hover:bg-white/20' 
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}>
                    <Instagram size={20} className={theme === 'dark' ? 'text-white' : 'text-gray-700'} />
                  </a>
                  <a href="#" className={`p-3 rounded-lg transition-colors ${
                    theme === 'dark' 
                      ? 'bg-white/10 hover:bg-white/20' 
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}>
                    <Facebook size={20} className={theme === 'dark' ? 'text-white' : 'text-gray-700'} />
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className={`rounded-2xl p-8 shadow-xl transition-colors duration-300 ${
                theme === 'dark' 
                  ? 'bg-gray-800 text-white' 
                  : 'bg-white text-gray-900'
              }`}>
                <h3 className={`text-2xl font-bold mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Parlez-moi de votre projet
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Nom complet
                    </label>
                    <input
                      type="text"
                      required
                      className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                        theme === 'dark'
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                          : 'border border-gray-300 text-gray-900'
                      }`}
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                        theme === 'dark'
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                          : 'border border-gray-300 text-gray-900'
                      }`}
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Service intéressé
                    </label>
                    <select
                      title="services"
                      className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                        theme === 'dark'
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'border border-gray-300 text-gray-900'
                      }`}
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="">Sélectionnez un service</option>
                      <option value="copywriting">Copywriting & Stratégie</option>
                      <option value="design">Conception graphique</option>
                      <option value="campagnes">Gestion de campagnes</option>
                      <option value="community">Community Management</option>
                      <option value="full">Pack complet</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Votre message
                    </label>
                    <textarea
                      rows={4}
                      className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                        theme === 'dark'
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                          : 'border border-gray-300 text-gray-900'
                      }`}
                      placeholder="Décrivez votre projet..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Envoyer ma demande
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-900 text-white'
      }`}>
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">GbéO Copywriting</h3>
              <p className="text-gray-400">Transformez vos mots en résultats</p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} Ninsemouh GbéO. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}