import React from 'react';
import { motion } from 'framer-motion';

const filters = [
  'SHOW ALL',
  'LOGO DESIGN',
  'BRANDING',
  'PRINT DESIGN',
  'PACKAGING DESIGN',
  'SOCIAL MEDIA DESIGN',
  'POSTER DESIGN',
  '2D ANIMATION',
];

interface FilterButtonsProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
  activeFilter,
  setActiveFilter,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {filters.map((filter) => (
        <motion.button
          key={filter}
          className={`px-4 py-2 text-sm border rounded-md ${
            activeFilter === filter
              ? 'border-yellow-400 text-yellow-400'
              : 'border-gray-600 text-gray-300'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveFilter(filter)}
        >
          {filter}
        </motion.button>
      ))}
    </div>
  );
};

export default FilterButtons;
