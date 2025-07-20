import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const links = [
    { name: 'RBI Financial Literacy', url: '#', icon: ExternalLink },
    { name: 'SEBI Investor Education', url: '#', icon: ExternalLink },
    { name: 'NCFE Resources', url: '#', icon: ExternalLink },
    { name: 'Financial Inclusion Data', url: '#', icon: ExternalLink }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: '#' },
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'Email', icon: Mail, url: 'mailto:contact@example.com' }
  ];

  return (
    <motion.footer 
      className="bg-gray-900 text-white py-12 mt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4">Financial Literacy Dashboard</h3>
            <p className="text-gray-300 mb-4">
              Comprehensive analysis of financial literacy trends across India, providing insights 
              for policymakers, educators, and financial institutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Resources Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <motion.a
                      href={link.url}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                      whileHover={{ x: 5 }}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{link.name}</span>
                    </motion.a>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Data Sources Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Data Sources</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Reserve Bank of India (RBI)</li>
              <li>• National Centre for Financial Education (NCFE)</li>
              <li>• Securities and Exchange Board of India (SEBI)</li>
              <li>• Ministry of Finance, Government of India</li>
              <li>• National Sample Survey Office (NSSO)</li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400 text-sm">
            © 2024 Financial Literacy Dashboard. Built for educational and research purposes.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Data updated as of December 2023
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;