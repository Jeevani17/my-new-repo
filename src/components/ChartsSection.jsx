import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, Area, AreaChart
} from 'recharts';

const ChartsSection = () => {
  const [activeChart, setActiveChart] = useState('demographics');

  // Sample data based on financial literacy research
  const demographicsData = [
    { age: '18-25', literacy: 31, population: 23 },
    { age: '26-35', literacy: 29, population: 28 },
    { age: '36-45', literacy: 26, population: 22 },
    { age: '46-55', literacy: 24, population: 15 },
    { age: '56-65', literacy: 22, population: 8 },
    { age: '65+', literacy: 18, population: 4 }
  ];

  const stateData = [
    { state: 'Kerala', literacy: 42 },
    { state: 'Goa', literacy: 38 },
    { state: 'Delhi', literacy: 36 },
    { state: 'Maharashtra', literacy: 34 },
    { state: 'Karnataka', literacy: 32 },
    { state: 'Tamil Nadu', literacy: 30 },
    { state: 'Gujarat', literacy: 28 },
    { state: 'West Bengal', literacy: 26 },
    { state: 'Rajasthan', literacy: 22 },
    { state: 'Bihar', literacy: 18 }
  ];

  const genderData = [
    { name: 'Male', value: 31, color: '#0ea5e9' },
    { name: 'Female', value: 23, color: '#ec4899' },
    { name: 'Non-binary', value: 2, color: '#8b5cf6' }
  ];

  const trendsData = [
    { year: '2017', literacy: 24, digital: 15, investment: 18 },
    { year: '2018', literacy: 25, digital: 22, investment: 19 },
    { year: '2019', literacy: 26, digital: 31, investment: 20 },
    { year: '2020', literacy: 27, digital: 45, investment: 21 },
    { year: '2021', literacy: 27, digital: 58, investment: 22 },
    { year: '2022', literacy: 28, digital: 67, investment: 23 },
    { year: '2023', literacy: 27, digital: 72, investment: 23 }
  ];

  const charts = [
    { id: 'demographics', label: 'Age Demographics', icon: '👥' },
    { id: 'states', label: 'State-wise Data', icon: '🗺️' },
    { id: 'gender', label: 'Gender Distribution', icon: '⚖️' },
    { id: 'trends', label: 'Trends Over Time', icon: '📈' }
  ];

  const renderChart = () => {
    switch (activeChart) {
      case 'demographics':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={demographicsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="age" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Bar dataKey="literacy" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
      
      case 'states':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={stateData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis type="number" stroke="#64748b" fontSize={12} />
              <YAxis dataKey="state" type="category" stroke="#64748b" fontSize={12} width={80} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Bar dataKey="literacy" fill="#22c55e" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
      
      case 'gender':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={genderData}
                cx="50%"
                cy="50%"
                outerRadius={120}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {genderData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        );
      
      case 'trends':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={trendsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="year" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="literacy" 
                stroke="#0ea5e9" 
                strokeWidth={3}
                dot={{ fill: '#0ea5e9', strokeWidth: 2, r: 4 }}
                name="Financial Literacy"
              />
              <Line 
                type="monotone" 
                dataKey="digital" 
                stroke="#22c55e" 
                strokeWidth={3}
                dot={{ fill: '#22c55e', strokeWidth: 2, r: 4 }}
                name="Digital Adoption"
              />
              <Line 
                type="monotone" 
                dataKey="investment" 
                stroke="#f59e0b" 
                strokeWidth={3}
                dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
                name="Investment Awareness"
              />
            </LineChart>
          </ResponsiveContainer>
        );
      
      default:
        return null;
    }
  };

  return (
    <section className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Data Visualization</h2>
        <p className="text-gray-600">Interactive charts showing financial literacy patterns</p>
      </motion.div>

      <div className="flex flex-wrap gap-2 mb-6">
        {charts.map((chart) => (
          <motion.button
            key={chart.id}
            onClick={() => setActiveChart(chart.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              activeChart === chart.id
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{chart.icon}</span>
            <span>{chart.label}</span>
          </motion.button>
        ))}
      </div>

      <motion.div 
        className="chart-container"
        key={activeChart}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          {charts.find(c => c.id === activeChart)?.label}
        </h3>
        {renderChart()}
      </motion.div>
    </section>
  );
};

export default ChartsSection;