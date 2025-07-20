import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import MetricsOverview from './components/MetricsOverview';
import ChartsSection from './components/ChartsSection';
import InsightsSection from './components/InsightsSection';
import RecommendationsSection from './components/RecommendationsSection';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('overview');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="container mx-auto px-4 py-8 space-y-12">
        <motion.div variants={itemVariants}>
          <MetricsOverview />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <ChartsSection />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <InsightsSection />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <RecommendationsSection />
        </motion.div>
      </main>
      
      <Footer />
    </motion.div>
  );
}

export default App;