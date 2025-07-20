import React from 'react';
import { motion } from 'framer-motion';
import { 
  AlertCircle, CheckCircle, TrendingUp, TrendingDown, 
  Users, MapPin, Smartphone, CreditCard 
} from 'lucide-react';

const InsightsSection = () => {
  const insights = [
    {
      type: 'positive',
      icon: CheckCircle,
      title: 'Digital Payment Adoption Surge',
      description: 'Digital payment usage has increased by 45.8% in the last year, indicating growing comfort with financial technology.',
      impact: 'High',
      category: 'Technology'
    },
    {
      type: 'concern',
      icon: AlertCircle,
      title: 'Rural-Urban Literacy Gap',
      description: 'A significant 13% gap exists between urban (34%) and rural (21%) financial literacy rates.',
      impact: 'High',
      category: 'Demographics'
    },
    {
      type: 'positive',
      icon: TrendingUp,
      title: 'Banking Penetration Success',
      description: 'Bank account ownership has reached 80%, showing successful financial inclusion initiatives.',
      impact: 'Medium',
      category: 'Banking'
    },
    {
      type: 'concern',
      icon: TrendingDown,
      title: 'Investment Awareness Decline',
      description: 'Investment awareness has slightly decreased by 1.2%, suggesting need for better investment education.',
      impact: 'Medium',
      category: 'Investment'
    },
    {
      type: 'neutral',
      icon: Users,
      title: 'Gender Disparity Persists',
      description: 'Male financial literacy (31%) continues to exceed female literacy (23%) by 8 percentage points.',
      impact: 'High',
      category: 'Gender'
    },
    {
      type: 'positive',
      icon: Smartphone,
      title: 'Youth Leading Digital Adoption',
      description: 'The 18-25 age group shows highest financial literacy (31%) and digital payment adoption.',
      impact: 'Medium',
      category: 'Demographics'
    }
  ];

  const keyFindings = [
    {
      icon: MapPin,
      title: 'Regional Variations',
      points: [
        'Kerala leads with 42% financial literacy rate',
        'Southern states generally outperform northern states',
        'Urban centers show 60% higher literacy than rural areas'
      ]
    },
    {
      icon: CreditCard,
      title: 'Financial Behavior',
      points: [
        '72% prefer digital payments over cash',
        'Only 23% actively invest in financial markets',
        'Savings account usage is universal at 95%'
      ]
    },
    {
      icon: Users,
      title: 'Demographic Patterns',
      points: [
        'Education level strongly correlates with financial literacy',
        'Income level is the strongest predictor of financial knowledge',
        'Age shows inverse correlation with digital adoption'
      ]
    }
  ];

  const getInsightStyles = (type) => {
    switch (type) {
      case 'positive':
        return {
          border: 'border-success-200',
          bg: 'bg-success-50',
          icon: 'text-success-600',
          badge: 'bg-success-100 text-success-800'
        };
      case 'concern':
        return {
          border: 'border-error-200',
          bg: 'bg-error-50',
          icon: 'text-error-600',
          badge: 'bg-error-100 text-error-800'
        };
      default:
        return {
          border: 'border-warning-200',
          bg: 'bg-warning-50',
          icon: 'text-warning-600',
          badge: 'bg-warning-100 text-warning-800'
        };
    }
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
    <section className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Key Insights</h2>
        <p className="text-gray-600">Critical findings from financial literacy analysis</p>
      </motion.div>

      {/* Main Insights Grid */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          const styles = getInsightStyles(insight.type);
          
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`p-6 rounded-xl border-2 ${styles.border} ${styles.bg} hover:shadow-lg transition-all duration-200`}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-2 rounded-lg bg-white ${styles.icon}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{insight.title}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${styles.badge}`}>
                      {insight.impact} Impact
                    </span>
                  </div>
                  <p className="text-gray-700 mb-3">{insight.description}</p>
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-white text-gray-600 rounded-full">
                    {insight.category}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Key Findings */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {keyFindings.map((finding, index) => {
          const Icon = finding.icon;
          
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="card"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{finding.title}</h3>
              </div>
              <ul className="space-y-2">
                {finding.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default InsightsSection;