'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  BookOpen,
  Microscope,
  Monitor,
  Dumbbell,
  Music,
  Bus,
  Utensils,
  Shield,
  Wifi,
  Camera,
  Heart,
  TreePine
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
const Facilities = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const facilities = [
    {
      icon: BookOpen,
      title: 'Modern Library',
      description: 'Extensive collection of books, digital resources, and quiet study spaces.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    },
    {
      icon: Microscope,
      title: 'Science Laboratories',
      description: 'Well-equipped labs for Physics, Chemistry, and Biology experiments.',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    },
    {
      icon: Monitor,
      title: 'Computer Lab',
      description: 'State-of-the-art computers with high-speed internet connectivity.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    },
    {
      icon: Dumbbell,
      title: 'Sports Complex',
      description: 'Indoor and outdoor sports facilities including gymnasium and playground.',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    },
    {
      icon: Music,
      title: 'Arts & Music Room',
      description: 'Dedicated spaces for music, dance, and visual arts activities.',
      image: 'https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    },
    {
      icon: Utensils,
      title: 'Cafeteria',
      description: 'Hygienic dining facility serving nutritious and delicious meals.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    },
  ];

  const amenities = [
    { icon: Bus, title: 'Transportation', description: 'Safe and reliable school bus service' },
    { icon: Shield, title: 'Security', description: '24/7 security with CCTV monitoring' },
    { icon: Wifi, title: 'Wi-Fi Campus', description: 'High-speed internet throughout campus' },
    { icon: Camera, title: 'Smart Classrooms', description: 'Interactive digital learning environment' },
    { icon: Heart, title: 'Medical Room', description: 'On-campus healthcare facility' },
    { icon: TreePine, title: 'Green Campus', description: 'Eco-friendly environment with gardens' },
  ];

  return (
    <section id="facilities" className="py-20 section-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-vibrant-blue mb-6">
            World-Class Facilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our state-of-the-art facilities provide students with the perfect environment
            for learning, growth, and exploration.
          </p>
        </motion.div>

        {/* Main Facilities Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    // width={500}
                    // height={500}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <motion.div
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <facility.icon className="w-6 h-6 text-vibrant-blue" />
                  </motion.div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-vibrant-blue mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {facility.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Amenities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-center text-vibrant-blue mb-12">
            Additional Amenities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.title}
                className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-vibrant-blue to-vibrant-orange p-3 rounded-full flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <amenity.icon className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h4 className="text-lg font-semibold text-vibrant-blue mb-2">
                    {amenity.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Virtual Tour CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-vibrant-blue to-vibrant-orange p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              Experience Our Campus Virtually
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Take a virtual tour of our beautiful campus and explore all our facilities from the comfort of your home.
            </p>
            <motion.button
              className="bg-white text-vibrant-blue px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Virtual Tour
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Facilities;