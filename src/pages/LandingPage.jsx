import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  MessageSquare, 
  Stethoscope, 
  Activity, 
  Sparkles, 
  Shield, 
  Droplet, 
  Moon, 
  Plus 
} from 'lucide-react';
import GlassCard from '../components/GlassCard.jsx';

const LandingPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <div className="relative overflow-hidden pt-10 pb-20">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 md:pt-16 md:pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content */}
          <motion.div 
            className="lg:col-span-7 space-y-6 text-left"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 text-xs font-bold border border-primary-500/20"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Powered by Groq Llama 3 AI
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold leading-tight tracking-tight"
            >
              Your Personalized <br className="hidden sm:inline" />
              <span className="text-gradient">AI Health Companion</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed"
            >
              MediMind AI is a state-of-the-art wellness platform designed to guide your daily hydration, sleep hygiene, and BMI analytics, offering instantaneous AI insights and safe symptom evaluations.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link to="/dashboard" className="glass-button-primary">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/chat" className="glass-button-secondary">
                Chat with AI
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Graphic / Interactive Card Mockups */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Visual Glassmorphic Widget Mockups Stacked */}
            <div className="relative w-full aspect-square max-w-[450px] mx-auto flex items-center justify-center">
              
              {/* Circular Health Score Mockup Card */}
              <GlassCard className="absolute top-4 left-4 w-52 rotate-[-4deg] scale-95 select-none" hover={false}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-slate-500">Wellness Score</span>
                  <Activity className="h-4 w-4 text-primary-500" />
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-extrabold text-slate-800 dark:text-slate-100">84</span>
                  <span className="text-xs font-medium text-success-500 font-display">+12%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-primary-500 to-accent-500 h-full rounded-full w-[84%]"></div>
                </div>
              </GlassCard>

              {/* Water Intake Mockup Card */}
              <GlassCard className="absolute bottom-6 left-12 w-48 rotate-[6deg] z-20 select-none shadow-2xl" hover={false}>
                <div className="flex items-center gap-2 mb-2 text-primary-500">
                  <Droplet className="h-4 w-4 fill-primary-500" />
                  <span className="text-xs font-bold uppercase tracking-wide">Hydration</span>
                </div>
                <div className="flex items-baseline gap-1 text-slate-800 dark:text-slate-100">
                  <span className="text-2xl font-extrabold">1,750</span>
                  <span className="text-xs text-slate-500">/ 2,500 ml</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-1">70% Daily Goal Achieved</div>
              </GlassCard>

              {/* AI Diagnostic Report Mockup Card */}
              <GlassCard className="absolute right-0 top-16 w-56 rotate-[2deg] z-10 select-none shadow-xl border-primary-500/20" hover={false}>
                <div className="flex items-center gap-2 mb-2.5">
                  <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                  <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400">SYMPTOM ASSESSMENT</span>
                </div>
                <h4 className="text-xs font-bold mb-1">Fatigue & Mild Headache</h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-normal line-clamp-3">
                  Likely causes include dehydration or sleep debt. Hydrate and ensure at least 7.5 hours of sleep.
                </p>
                <div className="mt-2.5 pt-2 border-t border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between text-[9px] font-semibold text-slate-400">
                  <span>Urgency: Low</span>
                  <span className="text-primary-500">View Full report</span>
                </div>
              </GlassCard>

              {/* Decorative Circle Elements */}
              <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-primary-400/20 to-accent-500/20 blur-3xl z-[-1] animate-float"></div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Feature Bento Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold">
            Explore Our <span className="text-gradient">Wellness Suite</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
            A comprehensive set of AI-driven tools and calculators to help you understand your wellness footprint.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: AI Chat */}
          <GlassCard className="flex flex-col justify-between min-h-[260px] border border-transparent" delay={0.1}>
            <div className="space-y-4">
              <div className="p-3 bg-primary-500/10 text-primary-500 rounded-2xl w-fit">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">AI Wellness Chat</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Connect with our advanced healthcare chatbot model for nutritional guidance, stress remedies, fitness suggestions, and general health queries.
              </p>
            </div>
            <Link to="/chat" className="flex items-center gap-1.5 text-sm font-semibold text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors mt-6 w-fit">
              Open AI Chat
              <ArrowRight className="h-4 w-4" />
            </Link>
          </GlassCard>

          {/* Card 2: Symptom Checker */}
          <GlassCard className="flex flex-col justify-between min-h-[260px] border border-transparent" delay={0.2}>
            <div className="space-y-4">
              <div className="p-3 bg-accent-500/10 text-accent-500 rounded-2xl w-fit">
                <Stethoscope className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Symptom Checker</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Interactively select physical discomforts, specify duration and severity, and get clean, non-alarmist potential triggers, precautions, and dietary recommendations.
              </p>
            </div>
            <Link to="/symptoms" className="flex items-center gap-1.5 text-sm font-semibold text-accent-500 hover:text-accent-600 dark:hover:text-accent-400 transition-colors mt-6 w-fit">
              Analyze Symptoms
              <ArrowRight className="h-4 w-4" />
            </Link>
          </GlassCard>

          {/* Card 3: Dashboard */}
          <GlassCard className="flex flex-col justify-between min-h-[260px] border border-transparent" delay={0.3}>
            <div className="space-y-4">
              <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-2xl w-fit">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Health Dashboard</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Log water cup progress, track sleep cycles, calculate BMI indices dynamically, and view your calculated comprehensive daily health score.
              </p>
            </div>
            <Link to="/dashboard" className="flex items-center gap-1.5 text-sm font-semibold text-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors mt-6 w-fit">
              Go to Dashboard
              <ArrowRight className="h-4 w-4" />
            </Link>
          </GlassCard>
        </div>
      </section>

      {/* AI Benefits & Safety Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 bg-slate-100/30 dark:bg-slate-900/10 rounded-3xl border border-slate-200/20 dark:border-slate-800/20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8">
          
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold">
              Safety First. <br />
              <span className="text-gradient">Intelligent Assistance.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
              MediMind AI is built with rigid clinical boundaries and guardrails. It is designed to assist you in monitoring healthy routines, not to alarm you or replace critical medical diagnoses.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex gap-4">
                <div className="p-2 bg-success-500/10 text-success-500 rounded-xl h-fit">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Strict Medical Guardrails</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Every analysis report contains immediate reminders to seek clinician care when symptoms indicate urgent attention.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-2 bg-primary-500/10 text-primary-500 rounded-xl h-fit">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Empathetic Context Awareness</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Groq AI structures suggestions clearly, avoiding alarmist language, explaining possible causes scientifically.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white/40 dark:bg-slate-900/20 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 space-y-2">
              <span className="text-3xl font-extrabold text-primary-500">100%</span>
              <h5 className="font-bold text-xs uppercase text-slate-500 tracking-wider">Local Storage Storage</h5>
              <p className="text-[10px] text-slate-400">All data and API keys remain securely inside your local browser memory.</p>
            </div>

            <div className="p-6 bg-white/40 dark:bg-slate-900/20 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 space-y-2">
              <span className="text-3xl font-extrabold text-accent-500">24/7</span>
              <h5 className="font-bold text-xs uppercase text-slate-500 tracking-wider">AI Availability</h5>
              <p className="text-[10px] text-slate-400">Instantaneous guidance for nutrition, sleep quality, and physical movement.</p>
            </div>

            <div className="p-6 bg-white/40 dark:bg-slate-900/20 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 space-y-2 col-span-2">
              <span className="text-2xl font-extrabold text-emerald-500">Llama 3.3 70B</span>
              <h5 className="font-bold text-xs uppercase text-slate-500 tracking-wider">Advanced AI Foundation</h5>
              <p className="text-[10px] text-slate-400">Powered by Groq for structured, reasoning-backed wellness advice.</p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center z-10 relative">
        <GlassCard className="py-12 px-6 border-transparent" hover={false}>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold mb-4">
            Ready to Take Control of Your Wellness?
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto mb-8">
            Create your local health profile, calculate your BMI indicator, track daily habits, and get customized AI diagnostics.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/dashboard" className="glass-button-primary">
              Launch Dashboard
            </Link>
            <Link to="/chat" className="glass-button-secondary">
              Speak to AI
            </Link>
          </div>
        </GlassCard>
      </section>

    </div>
  );
};

export default LandingPage;
