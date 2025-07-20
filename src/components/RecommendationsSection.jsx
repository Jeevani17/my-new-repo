import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Users, Smartphone, BookOpen, 
  TrendingUp, MapPin, Lightbulb, ArrowRight 
} from 'lucide-react';

const RecommendationsSection = () => {
  const recommendations = [
    {
      priority: 'High',
      icon: Users,
      title: 'Bridge the Rural-Urban Gap',
      description: 'Implement targeted financial education programs in rural areas to reduce the 13% literacy gap.',
      actions: [
        'Deploy mobile financial literacy units to remote villages',
        'Partner with local community leaders and NGOs',
        'Create vernacular language educational content',
        'Establish rural financial service centers'
      ],
      timeline: '6-12 months',
      impact: 'High',
      stakeholders: ['Government', 'Banks', 'NGOs']
    },
    {
      priority: 'High',
      icon: Target,
      title: 'Address Gender Disparity',
      description: 'Develop women-focused financial literacy programs to close the 8% gender gap.',
      actions: [
        'Create women-only financial education workshops',
        'Develop female-centric financial products',
        'Train female financial advisors and educators',
        'Partner with women\'s self-help groups'
      ],
      timeline: '3-6 months',
      impact: 'High',
      stakeholders: ['Government', 'Financial Institutions', 'Women\'s Organizations']
    },
    {
      priority: 'Medium',
      icon: Smartphone,
      title: 'Enhance Digital Financial Education',
      description: 'Leverage the 72% digital payment adoption to improve overall financial literacy.',
      actions: [
        'Integrate financial education into payment apps',
        'Create gamified learning experiences',
        'Develop AI-powered financial advisors',
        'Launch digital literacy campaigns'
      ],
      timeline: '3-9 months',
      impact: 'Medium',
      stakeholders: ['Fintech Companies', 'Banks', 'Government']
    },
    {
      priority: 'Medium',
      icon: BookOpen,
      title: 'Improve Investment Awareness',
      description: 'Address the declining investment awareness through comprehensive education programs.',
      actions: [
        'Launch investment literacy campaigns',
        'Create simplified investment guides',
        'Offer free investment advisory services',
        'Develop risk assessment tools'
      ],
      timeline: '6-12 months',
      impact: 'Medium',
      stakeholders: ['SEBI', 'Mutual Funds', 'Financial Advisors']
    },
    {
      priority: 'Low',
      icon: MapPin,
      title: 'State-Specific Interventions',
      description: 'Customize programs based on state-wise performance variations.',
      actions: [
        'Analyze state-specific barriers',
        'Develop localized content and programs',
        'Create inter-state knowledge sharing platforms',
        'Establish state-wise monitoring systems'
      ],
      timeline: '12-18 months',
      impact: 'Medium',
      stakeholders: ['State Governments', 'RBI', 'Local Banks']
    },
    {
      priority: 'Low',
      icon: TrendingUp,
      title: 'Youth Financial Empowerment',
      description: 'Build on the strong youth adoption to create financial literacy ambassadors.',
      actions: [
        'Integrate financial education in school curricula',
        'Create youth financial literacy programs',
        'Develop peer-to-peer learning networks',
        'Launch financial literacy competitions'
      ],
      timeline: '6-24 months',
      impact: 'Long-term',
      stakeholders: ['Education Ministry', 'Schools', 'Youth Organizations']
    }
  ];

  const implementationSteps = [
    {
      step: 1,
      title: 'Assessment & Planning',
      description: 'Conduct detailed needs assessment and develop implementation roadmap',
      duration: '2-3 months'
    },
    {
      step: 2,
      title: 'Pilot Programs',
      description: 'Launch pilot programs in select regions to test effectiveness',
      duration: '3-6 months'
    },
    {
      step: 3,
      title: 'Scale & Optimize',
      description: 'Scale successful pilots and optimize based on learnings',
      duration: '6-12 months'
    },
    {
      step: 4,
      title: 'Monitor & Evaluate',
      description: 'Continuous monitoring and evaluation for sustained impact',
      duration: 'Ongoing'
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-error-100 text-error-800 border-error-200';
      case 'Medium':
        return 'bg-warning-100 text-warning-800 border-warning-200';
      case 'Low':
        return 'bg-success-100 text-success-800 border-success-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
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
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Strategic Recommendations</h2>
        <p className="text-gray-600">Actionable strategies to improve financial literacy across India</p>
      </motion.div>

      {/* Recommendations Grid */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {recommendations.map((rec, index) => {
          const Icon = rec.icon;
          
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              className="card hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{rec.title}</h3>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(rec.priority)}`}>
                  {rec.priority} Priority
                </span>
              </div>
              
              <p className="text-gray-700 mb-4">{rec.description}</p>
              
              <div className="space-y-3 mb-4">
                <h4 className="text-sm font-medium text-gray-900">Key Actions:</h4>
                <ul className="space-y-1">
                  {rec.actions.map((action, actionIndex) => (
                    <li key={actionIndex} className="flex items-start space-x-2">
                      <ArrowRight className="w-3 h-3 text-primary-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                <span>Timeline: {rec.timeline}</span>
                <span>Impact: {rec.impact}</span>
              </div>
              
              <div className="mt-3">
                <div className="flex flex-wrap gap-1">
                  {rec.stakeholders.map((stakeholder, stakeholderIndex) => (
                    <span 
                      key={stakeholderIndex}
                      className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded"
                    >
                      {stakeholder}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Implementation Timeline */}
      <motion.div 
        className="card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
            <Lightbulb className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Implementation Roadmap</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {implementationSteps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
                <h4 className="font-medium text-gray-900">{step.title}</h4>
              </div>
              <p className="text-sm text-gray-600 mb-2">{step.description}</p>
              <span className="text-xs text-primary-600 font-medium">{step.duration}</span>
              
              {index < implementationSteps.length - 1 && (
                <div className="hidden md:block absolute top-4 left-full w-full h-0.5 bg-gray-200 transform translate-x-3">
                  <div className="absolute right-0 top-1/2 transform translate-y-[-50%] w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default RecommendationsSection;