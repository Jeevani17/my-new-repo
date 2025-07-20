import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Users, DollarSign, BookOpen, AlertTriangle } from 'lucide-react';

const MetricsOverview = () => {
  const metrics = [
    {
      title: 'Financial Literacy Rate',
      value: '27%',
      change: '+2.3%',
      trend: 'up',
      icon: BookOpen,
      description: 'Adults with basic financial knowledge',
      color: 'primary'
    },
    {
      title: 'Banking Penetration',
      value: '80%',
      change: '+15.2%',
      trend: 'up',
      icon: DollarSign,
      description: 'Population with bank accounts',
      color: 'success'
    },
    {
      title: 'Digital Payment Users',
      value: '350M',
      change: '+45.8%',
      trend: 'up',
      icon: TrendingUp,
      description: 'Active digital payment users',
      color: 'primary'
    },
    {
      title: 'Investment Awareness',
      value: '23%',
      change: '-1.2%',
      trend: 'down',
      icon: AlertTriangle,
      description: 'Adults aware of investment options',
      color: 'warning'
    },
    {
      title: 'Rural Literacy',
      value: '21%',
      change: '+3.1%',
      trend: 'up',
      icon: Users,
      description: 'Financial literacy in rural areas',
      color: 'error'
    },
    {
      title: 'Urban Literacy',
      value: '34%',
      change: '+1.8%',
      trend: 'up',
      icon: Users,
      description: 'Financial literacy in urban areas',
      color: 'success'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: 'from-primary-500 to-primary-600 text-white',
      success: 'from-success-500 to-success-600 text-white',
      warning: 'from-warning-500 to-warning-600 text-white',
      error: 'from-error-500 to-error-600 text-white'
    };
    return colors[color] || colors.primary;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
    <section className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Key Metrics</h2>
        <p className="text-gray-600">Overview of financial literacy indicators across India</p>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          const TrendIcon = metric.trend === 'up' ? TrendingUp : TrendingDown;
          
          return (
            <motion.div
              key={metric.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 400 }
              }}
              className="metric-card group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getColorClasses(metric.color)} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className={`flex items-center space-x-1 text-sm font-medium ${
                  metric.trend === 'up' ? 'text-success-600' : 'text-error-600'
                }`}>
                  <TrendIcon className="w-4 h-4" />
                  <span>{metric.change}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-600">{metric.title}</h3>
                <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
                <p className="text-sm text-gray-500">{metric.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default MetricsOverview;