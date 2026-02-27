import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import { cars, categories } from '../data/data';
import CarCard from '../components/CarCard';

const Fleet = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCars = selectedCategory === 'All'
    ? cars
    : cars.filter(car => car.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Premium Fleet
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our collection of luxury, sports, and electric vehicles. 
              Each car is meticulously maintained for your ultimate driving experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center flex-wrap gap-4">
            <div className="flex items-center text-gray-600 mr-4">
              <Filter className="w-5 h-5 mr-2" />
              <span className="font-medium">Filter:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <p className="text-gray-600">
              Showing <span className="font-semibold text-gray-900">{filteredCars.length}</span> vehicles
              {selectedCategory !== 'All' && (
                <span> in <span className="font-semibold text-primary-600">{selectedCategory}</span></span>
              )}
            </p>
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredCars.map((car) => (
              <motion.div
                key={car.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <CarCard car={car} />
              </motion.div>
            ))}
          </motion.div>

          {filteredCars.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-gray-600">No vehicles found in this category.</p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
              >
                View all vehicles
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Fleet;
