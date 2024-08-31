'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    category: 'Logo Design',
    title: 'Project 1',
    description: 'This is a logo design project.',
  },
  {
    id: 2,
    category: 'Branding',
    title: 'Project 2',
    description: 'This is a branding project.',
  },
  {
    id: 3,
    category: 'Print Design',
    title: 'Project 3',
    description: 'This is a print design project.',
  },
  {
    id: 4,
    category: 'Logo Design',
    title: 'Project 4',
    description: 'Another logo design project.',
  },
  {
    id: 5,
    category: 'Branding',
    title: 'Project 5',
    description: 'Another branding project.',
  },
  {
    id: 6,
    category: 'Print Design',
    title: 'Project 6',
    description: 'Another print design project.',
  },
];

const categories = ['Show All', 'Logo Design', 'Branding', 'Print Design'];

const FilterablePortfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Show All');

  const filteredProjects =
    activeCategory === 'Show All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="container mx-auto px-4">
      <div className="flex space-x-4 mb-6 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full border ${
              activeCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 0.5 }}
      >
        {filteredProjects.map((project) => (
          <AnimatePresence>
            <motion.div
              key={project.id}
              className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </motion.div>
          </AnimatePresence>
        ))}
      </motion.div>
    </div>
  );
};

export default FilterablePortfolio;
