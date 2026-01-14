
// app/page.tsx
"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { 
  BarChart3, 
  Award, 
  Instagram,
  Facebook, 
  Linkedin,
  Handshake,
  Zap,
  Search,
  MapPin,
  Clock,
  Headphones,
  Video, 
  X,  
  Users,
  ChevronRight,
  CheckCircle,
  Mail,
  ArrowRight,
  TrendingUp,
  Maximize,
  Eye,
  Sparkles,
  Target,
  MessageCircle,
  Phone
} from "lucide-react";
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

  const handleSubmit = (e:any) => {
  e.preventDefault();
  
  // Construire le message pour WhatsApp
  const phoneNumber = "+2250544752377";
  const message = encodeURIComponent(
    `Nouvelle demande de contact depuis le site Média Créa Plus !\n\n` +
    `Nom: ${formData.name}\n` +
    `Email: ${formData.email}\n` +
    `Service intéressé: ${formData.service}\n` +
    `Message: ${formData.message}\n\n` +
    `Je souhaite discuter de ce projet.`
  );
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  
  // Ouvrir WhatsApp
  window.open(whatsappUrl, '_blank');
  
  // Réinitialiser le formulaire
  setFormData({
    name: "",
    email: "",
    service: "",
    message: ""
  });
  
  // Optionnel : Afficher un message de confirmation
  alert("Merci ! Vous allez être redirigé vers WhatsApp pour finaliser votre demande.");
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

      {/* Témoignage rapide pour confiance - CENTRÉ ET SANS ICÔNE */}
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
        <div className="text-center mb-4">
          <p className={`font-medium ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            "Une expertise qui propulse votre visibilité à l'international"
          </p>
          <p className={`text-sm mt-1 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Abdoulaye Patawala • Expert en Développement Web & Applications Modernes
          </p>
          <p className={`text-xs mt-1 ${
            theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
          }`}>
            Spécialiste Digital - Bénin
          </p>
        </div>
        <p className={`text-sm italic text-center ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`}>
          "Média Plus Créa a su donner un coup de fouet à ma visibilité digitale. Notre partenariat, marqué par une écoute et une réactivité constantes, a été une expérience très positive. Je les recommande vivement"
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

    {/* Transition vers la solution - SANS FOND DISTINCTIF */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16 text-center"
    >
      <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        <span className="text-gradient-orange">Média Plus Créa</span> peut sûrement répondre à votre problème
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
        <span className="text-gradient-orange">Média Plus Créa</span> vous propose ces solutions sur mesure
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
          whatsappMessage: "Bonjour Média Plus Créa ! 👋\n\nJe suis intéressé(e) par votre Pack Visibilité Premium.\n\nPourriez-vous me contacter pour en discuter ?",
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
          whatsappMessage: "Bonjour Média Plus Créa! 👋\n\nJe souhaite une Transformation Digitale Excellence pour mon activité.\n\nPouvons-nous en parler ?",
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
          whatsappMessage: "Bonjour Média Plus Créa ! 👋\n\nLe Content Factory Elite m'intéresse pour développer ma présence digitale.\n\nPouvez-vous me donner plus d'informations ?",
          recommandation: "Recommandé pour maintenir une présence régulière et engageante"
        }
      ].map((solution, index) => {
        const handleSolutionClick = () => {
          const phoneNumber = "+2250544752377";
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
          Ninsemouh Cesar Gbeo,l'homme derrière Média Plus Créa
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
        Fondateur de Média Plus Créa• Expert en stratégie digitale • Accompagnement professionnel
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
              alt="Ninsemouh Cesar Gbeo - Fondateur de Média Plus Créa"
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
                Ninsemouh Cesar Gbeo
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
            C'est pour répondre à ce besoin que j'ai créé <span className="font-semibold text-gradient-orange">Média Plus Créa</span>. Une approche qui combine expertise digitale et accompagnement personnalisé, dans une dynamique de communauté et d'entraide.
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
            const phoneNumber = "+2250544752377";
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
          alt="Ninsemouh Cesar Gbeo - Fondateur de Média Plus Créa (vue agrandie)"
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
              Ninsemouh Cesar Gbeo
            </h3>
            <p className={`text-sm font-medium ${
              theme === 'dark' ? 'text-orange-300' : 'text-orange-300'
            }`}>
              Fondateur & Stratège Digital - Média Plus Créa
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
{/* Section FAQ - Réponses Directes */}
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
          Questions fréquentes
        </span>
      </div>
      
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        Questions que l'on <span className="text-gradient-orange">me pose souvent</span>
      </h2>
      
      <p className={`text-xl max-w-2xl mx-auto ${
        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
      }`}>
        Voici les réponses directes aux questions les plus courantes
      </p>
    </motion.div>

    <div className="space-y-6">
      {[
        {
          question: "Vous travaillez avec des particuliers aussi ?",
          answer: "Oui, absolument ! Jeunes entrepreneurs, indépendants, créateurs de contenu - tous sont les bienvenus.",
          color: "orange"
        },
        {
          question: "Délai pour voir des résultats ?",
          answer: "Premières améliorations en 30 jours, résultats significatifs en 60-90 jours.",
          color: "emerald"
        },
        {
          question: "Tarifs adaptés aux petits budgets ?",
          answer: "Oui, plusieurs formats pour tous les budgets. On trouve toujours une solution.",
          color: "blue"
        },
        {
          question: "Je débute complètement, c'est possible ?",
          answer: "Parfaitement ! Je simplifie tout. Pas besoin d'être expert.",
          color: "purple"
        },
        {
          question: "Déjà une équipe digitale ?",
          answer: "Oui, je peux compléter, auditer ou former votre équipe existante.",
          color: "rose"
        },
        {
          question: "Formations ou accompagnement ?",
          answer: "Les deux ! Selon vos besoins : je forme ou j'exécute.",
          color: "amber"
        },
        {
          question: "Votre disponibilité ?",
          answer: "Très disponible. Points réguliers + accès direct entre les sessions.",
          color: "cyan"
        },
        {
          question: "Votre différence ?",
          answer: "Approche humaine + expertise technique. Je m'implique personnellement.",
          color: "indigo"
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
            <summary className={`list-none px-6 py-4 flex justify-between items-center ${
              theme === 'dark' ? 'hover:bg-gray-800/50' : 'hover:bg-gray-50/50'
            } transition-colors duration-300`}>
              <div className="flex items-center gap-4">
                <div>
                  <span className={`font-bold text-lg ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {faq.question}
                  </span>
                </div>
              </div>
              <ChevronRight className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 group-open:rotate-90 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`} />
            </summary>
            <div className="px-6 pb-4">
              <div className={`ml-12 pl-4 border-l-2 border-${faq.color}-500/30`}>
                <p className={`text-lg font-medium leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {faq.answer}
                </p>
              </div>
            </div>
          </details>
        </motion.div>
      ))}
    </div>

    {/* CTA Direct - SANS FOND DISTINCTIF */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16 text-center"
    >
      <h3 className={`text-2xl font-bold mb-4 ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        Votre question n'est pas là ?
      </h3>
      
      <p className={`mb-6 ${
        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
      }`}>
        Posez-la directement, je réponds sous 30 minutes
      </p>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          const phoneNumber = "+2250544752377";
          const message = encodeURIComponent(
            "Bonjour Ninsemouh ! J'ai une question :"
          );
          const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
          window.open(whatsappUrl, '_blank');
        }}
        className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full shadow-lg shadow-green-500/30"
      >
        <MessageCircle className="w-5 h-5" />
        Poser ma question sur WhatsApp
      </motion.button>
    </motion.div>
  </div>
</section>
{/* Section Garanties - Après la FAQ */}
<section id="garanties" className={`py-20 px-4 ${
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
        theme === 'dark' ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30' : 'bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200'
      }`}>
        <CheckCircle className="w-4 h-4 text-green-500" />
        <span className={`text-sm font-medium ${
          theme === 'dark' ? 'text-green-300' : 'text-green-600'
        }`}>
          Nos engagements
        </span>
      </div>
      
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        Ce que je vous <span className="text-gradient-green">garantis</span>
      </h2>
      
      <p className={`text-xl max-w-3xl mx-auto ${
        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
      }`}>
        Des promesses concrètes pour votre tranquillité d'esprit
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Réponse ultra-rapide",
          description: "Je réponds à vos messages en moins de 2 heures en journée.",
          icon: <Zap className="w-8 h-8" />,
          color: "yellow"
        },
        {
          title: "Premier diagnostic gratuit",
          description: "Analyse complète de votre situation sans engagement.",
          icon: <Search className="w-8 h-8" />,
          color: "blue"
        },
        {
          title: "Transparence totale",
          description: "Pas de coûts cachés, pas de surprises.",
          icon: <Eye className="w-8 h-8" />,
          color: "orange"
        },
        {
          title: "Adaptation à votre rythme",
          description: "On avance à votre vitesse, selon vos disponibilités.",
          icon: <Clock className="w-8 h-8" />,
          color: "purple"
        },
        {
          title: "Support continu",
          description: "Disponible même après la fin de l'accompagnement.",
          icon: <Headphones className="w-8 h-8" />,
          color: "green"
        },
        {
          title: "Résultats mesurables",
          description: "Des indicateurs clairs pour suivre vos progrès.",
          icon: <BarChart3 className="w-8 h-8" />,
          color: "red"
        }
      ].map((garantie, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.02] ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-green-500'
              : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-green-400'
          }`}
        >
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
            theme === 'dark' ? `bg-${garantie.color}-500/20` : `bg-${garantie.color}-100`
          }`}>
            <div className={`text-${garantie.color}-500`}>{garantie.icon}</div>
          </div>
          
          <h3 className={`text-xl font-bold mb-3 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {garantie.title}
          </h3>
          
          <p className={`leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {garantie.description}
          </p>
        </motion.div>
      ))}
    </div>

    {/* CTA - SANS FOND DISTINCTIF */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16 text-center"
    >
      <h3 className={`text-2xl font-bold mb-4 ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        Encore des doutes ?
      </h3>
      
      <p className={`text-lg mb-6 max-w-2xl mx-auto ${
        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
      }`}>
        Discutons-en directement. Pas de pression, juste des conseils honnêtes.
      </p>
      
      <div className="flex items-center justify-center gap-2 mb-6">
        <CheckCircle className="w-5 h-5 text-green-500" />
        <span className={`text-sm ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
        }`}>
          Premier échange gratuit et sans engagement
        </span>
      </div>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          const phoneNumber = "+2250544752377";
          const message = encodeURIComponent(
            "Bonjour Ninsemouh ! Je viens de voir vos garanties et je souhaite en discuter avec vous."
          );
          const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
          window.open(whatsappUrl, '_blank');
        }}
        className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full shadow-lg shadow-green-500/30"
      >
        <MessageCircle className="w-5 h-5" />
        Poser mes dernières questions
      </motion.button>
    </motion.div>
  </div>
</section>
{/* Section Contact - MODIFIÉE */}
<section id="contact" className={`py-20 px-4 transition-colors duration-300 ${
  theme === 'dark' 
    ? 'bg-gradient-to-br from-gray-800 to-gray-900' 
    : 'bg-gradient-to-br from-gray-50 to-blue-50'
}`}>
  <div className="container mx-auto max-w-6xl">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
        theme === 'dark' ? 'bg-blue-500/20 border border-blue-500/30' : 'bg-blue-100 border border-blue-200'
      }`}>
        <MessageCircle className="w-4 h-4 text-blue-500" />
        <span className={`text-sm font-medium ${
          theme === 'dark' ? 'text-blue-300' : 'text-blue-600'
        }`}>
          Contactez-moi
        </span>
      </div>
      
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        Prêt à <span className="text-gradient-blue">transformer</span> votre communication ?
      </h2>
      
      <p className={`text-xl max-w-3xl mx-auto ${
        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
      }`}>
        Discutons de votre projet et créons ensemble une stratégie sur mesure
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-12">
      {/* Colonne gauche - Coordonnées */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-xl ${
              theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-100'
            }`}>
              <Mail className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h4 className={`font-bold text-lg mb-1 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Email
              </h4>
              <p className={`${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                médiapluscréa.com
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-xl ${
              theme === 'dark' ? 'bg-green-500/20' : 'bg-green-100'
            }`}>
              <Phone className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <h4 className={`font-bold text-lg mb-1 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Téléphone / WhatsApp
              </h4>
              <p className={`${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                +225 01 80 98 86
              </p>
              <p className={`text-sm mt-1 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Réponse rapide garantie
              </p>
            </div>
          </div>
        </div>
        
        {/* Réseaux sociaux avec DynamicIcon */}
        <div>
          <h4 className={`font-bold text-lg mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Suivez-moi sur les réseaux
          </h4>
          <div className="flex gap-3">
  <a 
    title="instagram"
    href="https://www.instagram.com/votre-compte" 
    target="_blank" 
    rel="noopener noreferrer"
    className={`p-3 rounded-xl transition-all duration-300 ${
      theme === 'dark' 
        ? 'bg-white/10 hover:bg-white/20 hover:scale-105' 
        : 'bg-gray-200 hover:bg-gray-300 hover:scale-105'
    }`}
  >
    <Instagram 
      size={20} 
      className={theme === 'dark' ? 'text-white' : 'text-gray-700'} 
    />
  </a>
  <a 
    title="facebook"
    href="https://web.facebook.com/photo/?fbid=3027973700747048&set=a.100559063488541" 
    target="_blank" 
    rel="noopener noreferrer"
    className={`p-3 rounded-xl transition-all duration-300 ${
      theme === 'dark' 
        ? 'bg-white/10 hover:bg-white/20 hover:scale-105' 
        : 'bg-gray-200 hover:bg-gray-300 hover:scale-105'
    }`}
  >
    <Facebook 
      size={20} 
      className={theme === 'dark' ? 'text-white' : 'text-gray-700'} 
    />
  </a>
  <a 
    title="linkedin"
    href="https://www.linkedin.com/in/votre-profil" 
    target="_blank" 
    rel="noopener noreferrer"
    className={`p-3 rounded-xl transition-all duration-300 ${
      theme === 'dark' 
        ? 'bg-white/10 hover:bg-white/20 hover:scale-105' 
        : 'bg-gray-200 hover:bg-gray-300 hover:scale-105'
    }`}
  >
    <Linkedin 
      size={20} 
      className={theme === 'dark' ? 'text-white' : 'text-gray-700'} 
    />
  </a>
</div>
        </div>
        
        {/* Garantie */}
        <div className={`p-4 rounded-xl ${
          theme === 'dark' ? 'bg-gray-800/50' : 'bg-blue-50'
        }`}>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className={`font-medium ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Premier diagnostic gratuit
            </span>
          </div>
          <p className={`text-sm mt-2 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Sans engagement, pour voir si nous sommes faits pour travailler ensemble
          </p>
        </div>
      </motion.div>
      
      {/* Colonne droite - Formulaire */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className={`rounded-2xl p-8 shadow-xl ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-gray-800 to-gray-900 text-white' 
            : 'bg-white text-gray-900'
        }`}>
          <h3 className={`text-2xl font-bold mb-2 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Parlez-moi de votre projet
          </h3>
          <p className={`mb-6 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Remplissez ce formulaire et je vous réponds dans les plus brefs délais
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Nom complet *
              </label>
              <input
                type="text"
                required
                className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                    : 'border border-gray-300 text-gray-900'
                }`}
                placeholder="Votre nom et prénom"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Email *
              </label>
              <input
                type="email"
                required
                className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
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
                Service intéressé *
              </label>
              <select
                title="selection"
                required
                className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-700 text-white'
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
                Votre message *
              </label>
              <textarea
                rows={4}
                required
                className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                    : 'border border-gray-300 text-gray-900'
                }`}
                placeholder="Décrivez votre projet, vos objectifs, votre budget..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/30"
            >
              Envoyer ma demande
            </motion.button>
            
            <p className={`text-center text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Vous préférez WhatsApp ?{' '}
              <button
                type="button"
                onClick={() => {
                  const phoneNumber = "+22501809886";
                  const message = encodeURIComponent(
                    "Bonjour Ninsemouh ! Je souhaite discuter de mon projet avec vous."
                  );
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="font-medium text-green-500 hover:text-green-600 transition-colors"
              >
                Cliquez ici pour discuter directement
              </button>
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  </div>
</section>
{/* Footer moderne */}
<footer className={`py-12 px-4 transition-colors duration-300 ${
  theme === 'dark' 
    ? 'bg-gradient-to-t from-gray-900 to-gray-950' 
    : 'bg-gradient-to-t from-gray-50 to-white'
}`}>
  <div className="container mx-auto max-w-6xl">
    {/* Section principale du footer */}
    <div className="grid md:grid-cols-3 gap-8 mb-8">
      {/* Colonne 1 - Logo et description */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2 rounded-lg ${
            theme === 'dark' ? 'bg-orange-500/20' : 'bg-orange-100'
          }`}>
            <Sparkles className="w-6 h-6 text-orange-500" />
          </div>
          <h3 className={`text-2xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Média Plus Créa
          </h3>
        </div>
        <p className={`mb-6 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Je transforme vos défis digitaux en opportunités de croissance.
        </p>
        
        {/* CTA WhatsApp dans le footer */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const phoneNumber = "+22501809886";
            const message = encodeURIComponent(
              "Bonjour Ninsemouh ! 👋\n\nJe viens de voir votre site et je souhaite discuter de mon projet avec vous."
            );
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
            window.open(whatsappUrl, '_blank');
          }}
          className={`flex items-center justify-center gap-3 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-lg shadow-green-500/30 hover:shadow-green-500/50'
              : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/30 hover:shadow-green-500/50'
          }`}
        >
          <MessageCircle className="w-5 h-5" />
          Discuter sur WhatsApp
        </motion.button>
      </div>
      
      {/* Colonne 2 - Liens rapides */}
      <div>
        <h4 className={`text-lg font-bold mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Navigation
        </h4>
        <ul className="space-y-3">
          {['Accueil', 'Services', 'À propos', 'Témoignages', 'FAQ', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`hover:text-orange-500 transition-colors ${
                  theme === 'dark' ? 'text-gray-400 hover:text-orange-400' : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Colonne 3 - Contact rapide */}
      <div>
        <h4 className={`text-lg font-bold mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Contact rapide
        </h4>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail className={`w-5 h-5 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`} />
            <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
              médiapluscréa.com
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className={`w-5 h-5 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`} />
            <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
              +225 01 80 98 86
            </span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className={`w-5 h-5 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`} />
            <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
              Abidjan, Côte d'Ivoire
            </span>
          </div>
        </div>
      </div>
    </div>
    
    {/* Séparateur */}
    <div className={`h-px w-full my-8 ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
    }`} />
    
    {/* Bas du footer */}
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div>
        <p className={`text-sm ${
          theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
        }`}>
          &copy; {new Date().getFullYear()} Média Plus Créa. Tous droits réservés.
        </p>
        <p className={`text-xs mt-1 ${
          theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
        }`}>
          Conçu avec ❤️ pour vos succès digitaux
        </p>
      </div>
      
      {/* Réseaux sociaux dans le footer */}
      {/* Réseaux sociaux dans le footer */}
<div className="flex gap-4 mt-4 md:mt-0">
  <a 
    href="https://web.facebook.com/photo/?fbid=3027973700747048&set=a.100559063488541" 
    target="_blank" 
    rel="noopener noreferrer"
    className={`p-2 rounded-lg transition-all duration-300 ${
      theme === 'dark' 
        ? 'bg-gray-800 hover:bg-gray-700 hover:scale-110' 
        : 'bg-gray-200 hover:bg-gray-300 hover:scale-110'
    }`}
    aria-label="Facebook"
  >
    <Facebook 
      size={18} 
      className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} 
    />
  </a>
  <a 
    href="https://wa.me/2250544752377" 
    target="_blank" 
    rel="noopener noreferrer"
    className={`p-2 rounded-lg transition-all duration-300 ${
      theme === 'dark' 
        ? 'bg-gray-800 hover:bg-gray-700 hover:scale-110' 
        : 'bg-gray-200 hover:bg-gray-300 hover:scale-110'
    }`}
    aria-label="WhatsApp"
  >
    <MessageCircle 
      size={18} 
      className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} 
    />
  </a>
  <a 
    href="https://www.instagram.com/votre-compte" 
    target="_blank" 
    rel="noopener noreferrer"
    className={`p-2 rounded-lg transition-all duration-300 ${
      theme === 'dark' 
        ? 'bg-gray-800 hover:bg-gray-700 hover:scale-110' 
        : 'bg-gray-200 hover:bg-gray-300 hover:scale-110'
    }`}
    aria-label="Instagram"
  >
    <Instagram 
      size={18} 
      className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} 
    />
  </a>
</div>
    </div>
    {/* Mentions légales */}
    <div className="mt-8 text-center">
      <p className={`text-xs ${
        theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
      }`}>
        Site réalisé par Ninsemouh Cesar Gbeo • Média Plus Créa
      </p>
    </div>
  </div>
</footer>
    </div>
  );
}