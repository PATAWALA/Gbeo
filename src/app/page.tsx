
// app/page.tsx
"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { 
  Send, 
  BarChart3, 
  Award,
  Facebook,
  Handshake,
  PenTool, 
  Video, 
  Instagram,
  X,  
  Users ,
  ChevronRight,
  CheckCircle,
  Mail,
  ArrowRight,
  TrendingUp,Maximize,
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
 const [isImageModalOpen, setIsImageModalOpen] = useState(false); 

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
<section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-32 overflow-hidden">
  {/* Background décoratif */}
  <div className="absolute inset-0 z-0">
    <div className={`absolute inset-0 ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950' 
        : 'bg-gradient-to-b from-white via-blue-50/30 to-gray-50'
    }`} />
    
    {/* Éléments décoratifs */}
    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center max-w-5xl mx-auto"
    >
      {/* Badge d'introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 mb-8"
      >
        <Sparkles className="w-4 h-4 text-orange-500" />
        <span className={`text-sm font-medium ${
          theme === 'dark' ? 'text-orange-300' : 'text-orange-600'
        }`}>
          Agence de Création Digitale d'Excellence
        </span>
      </motion.div>

      {/* Titre principal - IMPACTANT */}
      <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        <span className="block">Transformez Votre</span>
        <span className="text-gradient-orange">Visibilité Digitale</span>
        <span className="block mt-2">en Réussite Concrète</span>
      </h1>

      {/* Description PERCUTANTE */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className={`text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`}
      >
        Nous propulsons votre activité vers de nouveaux sommets grâce à des stratégies digitales 
        <span className={`font-semibold ${
          theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
        }`}> sur-mesure </span>
        qui génèrent des résultats 
        <span className={`font-semibold ${
          theme === 'dark' ? 'text-orange-400' : 'text-orange-600'
        }`}> mesurables</span> et durables.
      </motion.p>

      {/* Boutons d'action - PROFESSIONNELS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
      >
        {/* Bouton principal - Call to Action fort */}
        <motion.button
          whileHover={{ 
            scale: 1.05, 
            y: -2,
            boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)"
          }}
          whileTap={{ scale: 0.98 }}
          onClick={() => document.getElementById("contact")?.scrollIntoView({ 
            behavior: "smooth",
            block: "start"
          })}
          className="group relative px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-xl transition-all duration-300 shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 focus:outline-none focus:ring-4 focus:ring-orange-500/40"
          aria-label="Discuter de votre projet avec Média Créa Plus - Prendre rendez-vous"
        >
          <span className="relative z-10 flex items-center gap-2">
            Discutons de votre projet
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>

        {/* Bouton secondaire - Élégant et professionnel */}
        <motion.button
          whileHover={{ 
            scale: 1.05, 
            y: -2,
            boxShadow: "0 20px 40px rgba(37, 99, 235, 0.15)"
          }}
          whileTap={{ scale: 0.98 }}
          onClick={() => document.getElementById("services")?.scrollIntoView({ 
            behavior: "smooth",
            block: "start"
          })}
          className={`group relative px-8 py-4 md:px-10 md:py-5 font-bold rounded-xl transition-all duration-300 shadow-xl focus:outline-none focus:ring-4 ${
            theme === 'dark'
              ? 'bg-gray-800/80 border border-gray-700 text-gray-200 hover:bg-gray-700/80 hover:border-gray-600 focus:ring-blue-500/40'
              : 'bg-white border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 focus:ring-blue-500/30'
          }`}
          aria-label="Découvrir nos services et offres"
        >
          <span className="relative z-10 flex items-center gap-2">
            Découvrir nos solutions
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </motion.button>
      </motion.div>

      {/* Témoignage rapide pour confiance */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className={`max-w-2xl mx-auto p-6 rounded-2xl backdrop-blur-sm border ${
          theme === 'dark'
            ? 'bg-gray-800/30 border-gray-700/50'
            : 'bg-white/50 border-gray-200/50'
        }`}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
            theme === 'dark' ? 'bg-orange-500/20' : 'bg-orange-100'
          }`}>
            <MessageCircle className={`w-6 h-6 ${
              theme === 'dark' ? 'text-orange-400' : 'text-orange-600'
            }`} />
          </div>
          <div className="text-left">
            <p className={`font-medium ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              "Une transformation totale de notre communication"
            </p>
            <p className={`text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Alexandre K., Directeur Marketing
            </p>
          </div>
        </div>
        <p className={`text-sm italic ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`}>
          "Média Créa Plus a multiplié notre visibilité par 3 en seulement 2 mois."
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="mt-16 flex flex-col items-center"
      >
        <span className={`text-sm font-medium mb-3 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Découvrez nos solutions
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className={`w-6 h-10 rounded-full border-2 flex items-start justify-center p-1 ${
            theme === 'dark' 
              ? 'border-gray-600' 
              : 'border-gray-300'
          }`}
        >
          <div className={`w-1 h-2 rounded-full ${
            theme === 'dark' ? 'bg-gray-400' : 'bg-gray-400'
          }`} />
        </motion.div>
      </motion.div>
    </motion.div>
  </div>
</section>

{/* Section Problèmes */}
<section id="services" className="py-16 md:py-24 px-4">
  <div className="container mx-auto max-w-6xl">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        Vous reconnaissez-vous dans <span className="text-gradient-orange">ces situations</span> ?
      </h2>
      <p className={`text-xl max-w-3xl mx-auto ${
        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
      }`}>
        Les défis les plus courants que rencontrent nos clients avant de nous contacter
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Invisibilité Digitale",
          description: "Votre activité existe mais personne ne la trouve en ligne",
          symptomes: ["Pas de trafic sur votre site", "Aucune visibilité sur les réseaux", "Prospects qui ne vous connaissent pas"],
          icon: <Eye className="w-6 h-6" />
        },
        {
          title: "Stratégie Floue",
          description: "Vous postez sans plan ni objectifs clairs",
          symptomes: ["Contenu qui n'engage pas", "Pas de leads qualifiés", "Temps perdu sans résultats"],
          icon: <Target className="w-6 h-6" />
        },
        {
          title: "Ressources Limitées",
          description: "Vous gérez tout seul et vous êtes débordé",
          symptomes: ["Pas le temps de créer du contenu", "Budget publicitaire inefficace", "Fatigue et découragement"],
          icon: <TrendingUp className="w-6 h-6" />
        },
        {
          title: "Pas de Conversion",
          description: "Du trafic mais aucune vente",
          symptomes: ["Visiteurs qui ne deviennent pas clients", "Taux de conversion faible", "ROI indéfini"],
          icon: <BarChart3 className="w-6 h-6" />
        },
        {
          title: "Image Incohérente",
          description: "Identité visuelle qui ne reflète pas votre valeur",
          symptomes: ["Design amateur", "Message confus", "Marque qui ne marque pas"],
          icon: <Sparkles className="w-6 h-6" />
        },
        {
          title: "Concurrence Agressive",
          description: "Vos concurrents dominent le marché",
          symptomes: ["Ils sont partout, vous nulle part", "Ils innovent, vous stagnez", "Perte de parts de marché"],
          icon: <Video className="w-6 h-6" />
        }
      ].map((probleme, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.02] ${
            theme === 'dark'
              ? 'bg-gray-800/50 border-gray-700 hover:border-orange-500'
              : 'bg-white border-gray-200 hover:border-orange-400'
          }`}
        >
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 ${
            theme === 'dark' ? 'bg-orange-500/20' : 'bg-orange-100'
          }`}>
            <div className="text-orange-500">{probleme.icon}</div>
          </div>
          
          <h3 className={`text-xl font-bold mb-3 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {probleme.title}
          </h3>
          
          <p className={`mb-4 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {probleme.description}
          </p>
          
          <div className="space-y-2">
            {probleme.symptomes.map((symptome, i) => (
              <div key={i} className="flex items-start gap-2">
                <X className={`w-4 h-4 mt-1 flex-shrink-0 ${
                  theme === 'dark' ? 'text-red-400' : 'text-red-500'
                }`} />
                <span className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {symptome}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>

    {/* Transition vers la solution - MODIFIÉE */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mt-16 p-8 rounded-2xl text-center ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-gray-800 to-gray-900'
          : 'bg-gradient-to-r from-blue-50 to-orange-50'
      }`}
    >
      <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        <span className="text-gradient-orange">Média Créa Plus</span> peut sûrement répondre à votre problème
      </h3>
      <p className={`text-lg mb-6 max-w-2xl mx-auto ${
        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
      }`}>
        Nous avons accompagné de nombreux entrepreneurs et dirigeants à surmonter ces défis. Et si votre tour était le prochain ?
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })}
        className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-full shadow-lg shadow-orange-500/30"
      >
        Découvrir nos solutions <ArrowRight className="w-5 h-5" />
      </motion.button>
    </motion.div>
  </div>
</section>

{/* Section Solutions */}
<section id="solutions" className="py-16 md:py-24 px-4">
  <div className="container mx-auto max-w-6xl">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        <span className="text-gradient-orange">Média Créa Plus</span> vous propose ces solutions sur mesure
      </h2>
      <p className={`text-xl max-w-3xl mx-auto ${
        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
      }`}>
        Des packages exclusifs conçus pour résoudre vos défis digitaux et maximiser vos résultats
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Pack Visibilité Premium",
          description: "Identité visuelle complète + Stratégie réseaux sociaux + Campagnes publicitaires optimisées",
          benefices: [
            "Triple votre visibilité en 90 jours maximum",
            "Design professionnel qui reflète votre excellence",
            "Flux constant de leads qualifiés"
          ],
          cta: "Obtenir ce pack Premium",
          icon: <Eye className="w-8 h-8" />,
          whatsappMessage: "Bonjour Média Créa Plus ! 👋\n\nJe suis intéressé(e) par votre Pack Visibilité Premium.\n\nPourriez-vous me contacter pour en discuter ?",
          recommandation: "Idéal pour les entreprises qui souhaitent une présence digitale complète et cohérente"
        },
        {
          title: "Transformation Digitale Excellence",
          description: "Audit stratégique complet + Refonte totale + Accompagnement sur 6 mois",
          benefices: [
            "Diagnostic approfondi avec plan d'action détaillé",
            "Stratégie personnalisée pour dominer votre marché",
            "Résultats garantis avec suivi hebdomadaire"
          ],
          cta: "Transformer mon activité",
          icon: <TrendingUp className="w-8 h-8" />,
          whatsappMessage: "Bonjour Média Créa Plus ! 👋\n\nJe souhaite une Transformation Digitale Excellence pour mon activité.\n\nPouvons-nous en parler ?",
          recommandation: "Parfait pour les entreprises en phase de croissance ou de repositionnement"
        },
        {
          title: "Content Factory Elite",
          description: "Création de contenu mensuel illimité + Community Management premium + Growth hacking",
          benefices: [
            "30+ posts stratégiques optimisés mensuellement",
            "Reels professionnels et vidéos engageantes",
            "Growth hacking avancé pour exploser votre audience"
          ],
          cta: "Boost mon contenu",
          icon: <Video className="w-8 h-8" />,
          whatsappMessage: "Bonjour Média Créa Plus ! 👋\n\nLe Content Factory Elite m'intéresse pour développer ma présence digitale.\n\nPouvez-vous me donner plus d'informations ?",
          recommandation: "Recommandé pour maintenir une présence régulière et engageante"
        }
      ].map((solution, index) => {
        const handleSolutionClick = () => {
          const phoneNumber = "+22501809886";
          const message = encodeURIComponent(solution.whatsappMessage);
          const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
          window.open(whatsappUrl, '_blank');
        };

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl ${
              theme === 'dark'
                ? 'bg-gradient-to-b from-gray-800 to-gray-900 border-gray-700 hover:border-orange-500'
                : 'bg-gradient-to-b from-white to-gray-50 border-gray-200 hover:border-orange-400'
            }`}
          >
            <div className="p-8">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                theme === 'dark' ? 'bg-gradient-to-br from-orange-500/20 to-amber-500/20' : 'bg-gradient-to-br from-orange-100 to-amber-100'
              }`}>
                <div className="text-orange-500">{solution.icon}</div>
              </div>
              
              <h3 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {solution.title}
              </h3>
              
              <p className={`mb-6 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {solution.description}
              </p>
              
              <div className="space-y-3 mb-8">
                {solution.benefices.map((benefice, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                      {benefice}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Zone de recommandation remplaçant le prix */}
              <div className={`text-center p-4 rounded-xl mb-6 ${
                theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-100/50'
              }`}>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MessageCircle className="w-5 h-5 text-blue-500" />
                  <span className={`font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Recommandation
                  </span>
                </div>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {solution.recommandation}
                </p>
              </div>
            </div>
            
            <div className={`px-8 pb-8`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSolutionClick}
                className={`w-full py-4 font-bold rounded-xl transition-all duration-300 ${
                  index === 1
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50'
                    : theme === 'dark'
                      ? 'bg-gray-700 text-white hover:bg-gray-600'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {solution.cta}
              </motion.button>
            </div>
          </motion.div>
        );
      })}
    </div>

    {/* Section Processus améliorée */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={`mt-20 rounded-2xl p-8 md:p-12 ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-gray-800 to-gray-900'
          : 'bg-gradient-to-r from-blue-50 to-orange-50'
      }`}
    >
      <div className="text-center mb-12">
        <h3 className={`text-3xl font-bold mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Comment nous <span className="text-gradient-orange">travaillons</span> ?
        </h3>
        <p className={`text-xl max-w-2xl mx-auto ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Un processus éprouvé pour garantir votre succès
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {[
          { number: "01", title: "Diagnostic Gratuit", desc: "Analyse approfondie de vos besoins", icon: <Target className="w-6 h-6" /> },
          { number: "02", title: "Stratégie Sur-Mesure", desc: "Plan d'action personnalisé", icon: <PenTool className="w-6 h-6" /> },
          { number: "03", title: "Exécution Précise", desc: "Création et optimisation", icon: <Sparkles className="w-6 h-6" /> },
          { number: "04", title: "Suivi & Résultats", desc: "Analyse et ajustements", icon: <BarChart3 className="w-6 h-6" /> }
        ].map((step, index) => (
          <div key={index} className="relative">
            <div className={`text-center p-6 rounded-2xl ${
              theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'
            }`}>
              <div className={`text-5xl font-bold mb-4 ${
                theme === 'dark' ? 'text-gray-600' : 'text-gray-300'
              }`}>
                {step.number}
              </div>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                theme === 'dark' ? 'bg-orange-500/20' : 'bg-orange-100'
              }`}>
                <div className="text-orange-500">{step.icon}</div>
              </div>
              <h4 className={`font-bold text-lg mb-2 ${
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
            {index < 3 && (
              <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <ChevronRight className={`w-8 h-8 ${
                  theme === 'dark' ? 'text-gray-600' : 'text-gray-300'
                }`} />
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  </div>
</section>
{/* Section À propos - PHOTO VISIBLE DIRECTEMENT */}
<section id="about" className={`py-20 md:py-28 px-4 overflow-hidden ${
  theme === 'dark' ? 'bg-gradient-to-b from-gray-900 to-gray-950' : 'bg-gradient-to-b from-white to-gray-50'
}`}>
  <div className="container mx-auto max-w-6xl">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
        theme === 'dark' ? 'bg-orange-500/20 border border-orange-500/30' : 'bg-orange-100 border border-orange-200'
      }`}>
        <Sparkles className="w-4 h-4 text-orange-500" />
        <span className={`text-sm font-medium ${
          theme === 'dark' ? 'text-orange-300' : 'text-orange-600'
        }`}>
          L'homme derrière Média Créa Plus
        </span>
      </div>
      
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        Je transforme vos défis en <span className="text-gradient-orange">opportunités digitales</span>
      </h2>
      
      <p className={`text-xl max-w-3xl mx-auto ${
        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
      }`}>
        Fondateur de Média Créa Plus • Expert en stratégie digitale • Accompagnement professionnel
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Photo VISIBLE PAR DÉFAUT - AVEC MODAL D'AGRANDISSEMENT */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Conteneur de la photo - CLICKABLE POUR MODAL */}
        <div 
          className="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer group"
          onClick={() => setIsImageModalOpen(true)}
        >
          {/* Image de profil - VISIBLE DIRECTEMENT */}
          <div className="relative h-[500px] w-full">
            <Image
              src="/images/profil1.jpeg"
              alt="Ninsemouh César GbéO - Fondateur de Média Créa Plus"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            
            {/* Overlay subtil pour améliorer la lisibilité */}
            <div className={`absolute inset-0 bg-gradient-to-t ${
              theme === 'dark' 
                ? 'from-black/20 via-transparent to-transparent' 
                : 'from-white/10 via-transparent to-transparent'
            }`} />
          </div>
          
          {/* Badge professionnel en bas */}
          <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t ${
            theme === 'dark' 
              ? 'from-black/80 to-transparent' 
              : 'from-white/80 to-transparent'
          } backdrop-blur-sm`}>
            <div className="text-center">
              <h3 className={`text-2xl font-bold mb-1 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Ninsemouh César GbéO
              </h3>
              <p className={`text-sm font-medium ${
                theme === 'dark' ? 'text-orange-400' : 'text-orange-600'
              }`}>
                Fondateur & Stratège Digital
              </p>
            </div>
          </div>
          
          {/* Option pour agrandir - DISCRET */}
          <div className="absolute top-4 right-4 z-10">
            <div className={`p-2 rounded-full backdrop-blur-md transition-all duration-300 group-hover:bg-orange-500/20 ${
              theme === 'dark' ? 'bg-black/40' : 'bg-white/40'
            }`}>
              <Maximize className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`} />
            </div>
          </div>
          
          {/* Texte indicateur overlay (apparaît au hover) */}
          <div className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
            theme === 'dark' ? 'bg-black/40' : 'bg-white/40'
          } backdrop-blur-sm`}>
            <div className={`text-center px-4 py-2 rounded-lg ${
              theme === 'dark' ? 'bg-black/60' : 'bg-white/60'
            }`}>
              <p className={`font-medium ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Cliquez pour agrandir
              </p>
            </div>
          </div>
        </div>
        
        {/* Badges d'information sous la photo */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {[
            { text: "Stratège Digital", icon: <Target className="w-4 h-4" />, color: "orange" },
            { text: "Accompagnateur", icon: <Users className="w-4 h-4" />, color: "blue" },
            { text: "Fondateur", icon: <Award className="w-4 h-4" />, color: "emerald" }
          ].map((badge, index) => (
            <div
              key={index}
              className={`px-3 py-1.5 rounded-full flex items-center gap-2 ${
                theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-100'
              }`}
            >
              <div className={`text-${badge.color}-500`}>
                {badge.icon}
              </div>
              <span className={`text-sm font-medium ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {badge.text}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* Texte de présentation MODÉRÉ */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div>
          <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Mon parcours, votre <span className="text-gradient-orange">accompagnement</span>
          </h3>
          <p className={`text-lg mb-4 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            De la stratégie d'entreprise à la création digitale
          </p>
        </div>
        
        <div className="space-y-4">
          <p className={`leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Fort d'une expérience dans l'accompagnement d'entreprises, j'ai constaté que de nombreux entrepreneurs faisaient face aux mêmes défis digitaux. Ces obstacles freinaient leur croissance, non par manque de compétences, mais par besoin d'un accompagnement adapté.
          </p>
          
          <p className={`leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            C'est pour répondre à ce besoin que j'ai créé <span className="font-semibold text-gradient-orange">Média Créa Plus</span>. Une approche qui combine expertise digitale et accompagnement personnalisé, dans une dynamique de communauté et d'entraide.
          </p>
          
          <p className={`leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Mon objectif est simple : vous fournir les outils et stratégies dont vous avez réellement besoin pour développer votre présence en ligne, sans jargon inutile ni promesses vides.
          </p>
        </div>
        
        {/* Mes valeurs - SANS EMOJIS */}
        <div className="pt-6">
          <h4 className={`text-xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Ce qui guide mon approche
          </h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Approche Humaine",
                description: "Je prends le temps de comprendre vos besoins réels pour un accompagnement adapté.",
                icon: <Users className="w-5 h-5" />
              },
              {
                title: "Solutions Concrètes",
                description: "Je propose des stratégies applicables avec des résultats mesurables.",
                icon: <Target className="w-5 h-5" />
              },
              {
                title: "Transparence",
                description: "Pas de surprises. Vous savez exactement ce que vous obtenez.",
                icon: <Eye className="w-5 h-5" />
              },
              {
                title: "Engagement",
                description: "Je m'implique dans votre projet comme si c'était le mien.",
                icon: <Handshake className="w-5 h-5" />
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 p-4 rounded-xl ${
                  theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'
                }`}
              >
                <div className={`flex-shrink-0 p-2 rounded-lg ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-white'
                }`}>
                  <div className="text-orange-500">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h5 className={`font-semibold mb-1 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {item.title}
                  </h5>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA personnel */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            const phoneNumber = "+22501809886";
            const message = encodeURIComponent(
              "Bonjour Ninsemouh ! Je viens de découvrir votre site et je suis intéressé par votre accompagnement. Pourrions-nous en discuter ?"
            );
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
            window.open(whatsappUrl, '_blank');
          }}
          className={`w-full md:w-auto px-8 py-3 font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 mt-8 ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50'
              : 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50'
          }`}
        >
          <MessageCircle className="w-5 h-5" />
          Échanger sur votre projet
        </motion.button>
      </motion.div>
    </div>
  </div>
  
  {/* MODAL POUR AGRANDIR L'IMAGE */}
  {isImageModalOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
      onClick={() => setIsImageModalOpen(false)}
    >
      {/* Bouton fermer */}
      <button
        className="absolute top-4 right-4 z-60 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-300"
        onClick={(e) => {
          e.stopPropagation();
          setIsImageModalOpen(false);
        }}
        aria-label="Fermer"
      >
        <X className="w-6 h-6 text-white" />
      </button>
      
      {/* Conteneur image modal */}
      <div className="relative w-full max-w-4xl h-[80vh] max-h-[90vh]">
        <Image
          src="/images/profil1.jpeg"
          alt="Ninsemouh César GbéO - Fondateur de Média Créa Plus (vue agrandie)"
          fill
          className="object-contain rounded-lg"
          sizes="100vw"
          onClick={(e) => e.stopPropagation()}
        />
        
        {/* Texte info en bas */}
        <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t ${
          theme === 'dark' 
            ? 'from-black/90 to-transparent' 
            : 'from-black/70 to-transparent'
        }`}>
          <div className="text-center">
            <h3 className={`text-2xl font-bold mb-1 ${
              theme === 'dark' ? 'text-white' : 'text-white'
            }`}>
              Ninsemouh César GbéO
            </h3>
            <p className={`text-sm font-medium ${
              theme === 'dark' ? 'text-orange-300' : 'text-orange-300'
            }`}>
              Fondateur & Stratège Digital - Média Créa Plus
            </p>
            <p className={`text-xs mt-2 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-300'
            }`}>
              Cliquez en dehors de l'image pour fermer
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )}
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
      {/* Section FAQ - Inspirante et Colorée */}
{/* Section FAQ - Pour Tous */}
<section id="faq" className={`py-20 px-4 ${
  theme === 'dark' ? 'bg-gradient-to-b from-gray-900 to-gray-950' : 'bg-gradient-to-b from-white to-gray-50'
}`}>
  <div className="container mx-auto max-w-4xl">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
        theme === 'dark' ? 'bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30' : 'bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200'
      }`}>
        <MessageCircle className="w-4 h-4 text-orange-500" />
        <span className={`text-sm font-medium ${
          theme === 'dark' ? 'text-orange-300' : 'text-orange-600'
        }`}>
          Réponses à vos questions
        </span>
      </div>
      
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        Les questions qui <span className="text-gradient-orange">reviennent le plus</span>
      </h2>
      
      <p className={`text-xl max-w-2xl mx-auto ${
        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
      }`}>
        Ce que les entrepreneurs, particuliers et professionnels me demandent avant de débuter leur transformation digitale
      </p>
    </motion.div>

    <div className="space-y-6">
      {[
        {
          question: "Je ne suis pas entrepreneur mais particulier. Vos services sont-ils adaptés pour moi ?",
          answer: "Absolument ! J'accompagne autant les particuliers que les professionnels. Que vous souhaitiez créer une présence en ligne pour une passion, développer une activité personnelle, ou simplement mieux maîtriser votre communication digitale, j'adapte mon accompagnement à vos besoins spécifiques.",
          color: "orange",
          category: "Particulier"
        },
        {
          question: "Combien de temps faut-il pour voir les premiers résultats concrets ?",
          answer: "Les premiers signes d'amélioration apparaissent souvent dans les 30 premiers jours. Pour des résultats significatifs (augmentation du trafic, engagement accru, génération de contacts), nous visons généralement 60 à 90 jours. Chaque projet étant unique, je vous propose un calendrier personnalisé dès notre premier échange.",
          color: "emerald",
          category: "Tous"
        },
        {
          question: "Comment s'adapte votre tarification à mon budget ?",
          answer: "Je propose plusieurs formats d'accompagnement pour convenir à différents budgets. Que vous soyez particulier avec un projet personnel ou entrepreneur avec une enveloppe dédiée, je vous présenterai des options adaptées. L'important est l'adéquation entre votre investissement et les résultats attendus.",
          color: "blue",
          category: "Tous"
        },
        {
          question: "Je débute complètement en digital. Est-ce un problème ?",
          answer: "Au contraire ! J'adore accompagner les débutants. Je prends le temps d'expliquer chaque étape en termes simples, sans jargon technique. Nous avançons à votre rythme pour que vous compreniez et maitrisiez chaque aspect de votre présence digitale.",
          color: "purple",
          category: "Débutant"
        },
        {
          question: "Puis-je travailler avec vous si j'ai déjà une agence ou un community manager ?",
          answer: "Bien sûr ! Je peux intervenir en complément pour apporter une vision stratégique, auditer votre situation actuelle, ou former votre équipe. Mon rôle est de vous faire gagner en efficacité, quel que soit votre niveau d'accompagnement actuel.",
          color: "rose",
          category: "Professionnel"
        },
        {
          question: "Proposez-vous des formations ou seulement de l'accompagnement ?",
          answer: "Les deux ! Selon vos besoins, je peux vous former à maîtriser les outils vous-même (formations personnalisées) OU prendre en charge la gestion complète de votre digital. Nous déterminons ensemble l'approche qui correspond le mieux à vos objectifs et à votre temps disponible.",
          color: "amber",
          category: "Tous"
        },
        {
          question: "Quelle est votre disponibilité pour les suivis et ajustements ?",
          answer: "Je suis très disponible pour mes clients. Nous avons des points réguliers (hebdomadaires ou bi-mensuels selon la formule) et vous pouvez me contacter entre les sessions pour des questions urgentes. Votre réussite est ma priorité, donc je m'assure d'être réactif à vos besoins.",
          color: "cyan",
          category: "Tous"
        },
        {
          question: "En quoi votre approche diffère-t-elle des autres professionnels du digital ?",
          answer: "Je combine expertise technique et approche humaine. Mon objectif n'est pas juste de faire du contenu, mais de créer une présence digitale qui vous ressemble et qui atteint vos objectifs personnels ou professionnels. Je m'implique personnellement dans chaque projet comme s'il était le mien.",
          color: "indigo",
          category: "Tous"
        }
      ].map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className={`group rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:shadow-xl ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-orange-500/50' 
              : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-orange-400/50'
          }`}
        >
          <details className="cursor-pointer">
            <summary className={`list-none px-8 py-6 flex justify-between items-start ${
              theme === 'dark' ? 'hover:bg-gray-800/50' : 'hover:bg-gray-50/50'
            } transition-colors duration-300`}>
              <div className="flex items-start gap-4 flex-1">
                <div className="text-left flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className={`font-bold text-lg ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {faq.question}
                    </span>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      theme === 'dark' 
                        ? 'bg-gray-700 text-gray-300' 
                        : 'bg-gray-200 text-gray-700'
                    }`}>
                      {faq.category}
                    </span>
                  </div>
                  <div className={`h-1 w-16 rounded-full bg-${faq.color}-500 opacity-80`}></div>
                </div>
              </div>
              <ChevronRight className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 group-open:rotate-90 mt-2 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`} />
            </summary>
            <div className="px-8 pb-6">
              <div className={`ml-12 pl-4 border-l-2 border-${faq.color}-500/30`}>
                <p className={`text-lg leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {faq.answer}
                </p>
                
                {/* Contenu supplémentaire selon la question */}
                {faq.category === "Particulier" && (
                  <div className={`mt-4 p-4 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-100'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-blue-500" />
                      <span className={`font-medium ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Exemples de projets pour particuliers :
                      </span>
                    </div>
                    <ul className={`space-y-2 text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span>Développer une passion ou un hobby en ligne</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                        <span>Créer une activité complémentaire</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <span>Améliorer sa présence professionnelle personnelle</span>
                      </li>
                    </ul>
                  </div>
                )}
                
                {faq.category === "Débutant" && (
                  <div className={`mt-4 p-4 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-100'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-5 h-5 text-purple-500" />
                      <span className={`font-medium ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Ce que vous apprendrez :
                      </span>
                    </div>
                    <ul className={`space-y-2 text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                        <span>Les bases du marketing digital adaptées à votre niveau</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                        <span>Comment créer du contenu efficace sans être expert</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                        <span>Les outils simples pour gérer votre présence en ligne</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </details>
        </motion.div>
      ))}
    </div>

    {/* CTA pour Tous */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mt-16 p-8 md:p-12 rounded-2xl text-center relative overflow-hidden ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-blue-50 to-orange-50'
      }`}
    >
      {/* Éléments décoratifs */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full -translate-y-16 translate-x-16 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full translate-y-16 -translate-x-16 blur-3xl"></div>
      
      <div className="relative z-10">
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
          theme === 'dark' ? 'bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30' : 'bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200'
        }`}>
          <Sparkles className="w-4 h-4 text-orange-500" />
          <span className={`text-sm font-medium ${
            theme === 'dark' ? 'text-orange-300' : 'text-orange-600'
          }`}>
            Votre situation est unique
          </span>
        </div>
        
        <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Que vous soyez particulier, entrepreneur ou entreprise
        </h3>
        
        <p className={`text-lg mb-8 max-w-2xl mx-auto ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Votre projet mérite une attention personnalisée. Prenons 15 minutes pour discuter de vos objectifs spécifiques et voir comment je peux vous accompagner vers le succès digital.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className={`p-6 rounded-xl text-center ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80'
                : 'bg-gradient-to-br from-white to-gray-50'
            }`}
          >
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
              theme === 'dark' ? 'bg-green-500/20' : 'bg-green-100'
            }`}>
              <MessageCircle className="w-6 h-6 text-green-500" />
            </div>
            <h4 className={`font-bold text-lg mb-2 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Pour les projets rapides
            </h4>
            <p className={`text-sm mb-4 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Questions simples ou projets courts
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const phoneNumber = "+22501809886";
                const message = encodeURIComponent(
                  `Bonjour Ninsemouh ! 👋\n\nJ'ai une question rapide concernant [votre projet].\n\nPouvons-nous en discuter brièvement ?`
                );
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-shadow duration-300"
            >
              Échanger sur WhatsApp
            </motion.button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.03 }}
            className={`p-6 rounded-xl text-center ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80'
                : 'bg-gradient-to-br from-white to-gray-50'
            }`}
          >
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
              theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-100'
            }`}>
              <Phone className="w-6 h-6 text-blue-500" />
            </div>
            <h4 className={`font-bold text-lg mb-2 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Pour les projets structurés
            </h4>
            <p className={`text-sm mb-4 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Accompagnement complet ou formation
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className={`w-full py-3 font-bold rounded-lg border-2 transition-colors duration-300 ${
                theme === 'dark'
                  ? 'border-blue-500 text-white hover:bg-blue-500/10'
                  : 'border-blue-500 text-blue-600 hover:bg-blue-50'
              }`}
            >
              Voir les options détaillées
            </motion.button>
          </motion.div>
        </div>
        
        <p className={`text-sm mt-8 ${
          theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
        }`}>
          ⚡ Réponse garantie en moins de 2 heures • Pas d'engagement pour le premier échange
        </p>
      </div>
    </motion.div>
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