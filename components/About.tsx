'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Eye, Heart, Star, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Striving for the highest standards in education and character development.',
    },
    {
      icon: Heart,
      title: 'Compassion',
      description: 'Fostering empathy, kindness, and understanding in our school community.',
    },
    {
      icon: Star,
      title: 'Innovation',
      description: 'Embracing modern teaching methods and technology for enhanced learning.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Building strong partnerships between students, teachers, and parents.',
    },
  ];

  const achievements = [
    { number: '98%', label: 'Board Exam Success Rate' },
    { number: '15+', label: 'National Awards' },
    { number: '500+', label: 'University Admissions' },
    { number: '25', label: 'Years of Excellence' },
  ];

  return (
    <section id="about" className="py-20 section-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-vibrant-blue mb-6">
            About Our School
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over 25 years, Vibrant Valley High School has been a beacon of educational excellence,
            nurturing young minds and preparing them for a successful future.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Eye className="w-8 h-8 text-vibrant-orange mr-3" />
                <h3 className="text-2xl font-bold text-vibrant-blue">Our Vision</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be a world-class educational institution that empowers students to become
                confident, creative, and compassionate global citizens who contribute positively
                to society.
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-vibrant-orange mr-3" />
                <h3 className="text-2xl font-bold text-vibrant-blue">Our Mission</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide holistic education that nurtures intellectual curiosity, moral values,
                and life skills, preparing students for academic excellence and meaningful
                contributions to the global community.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  className="text-center p-4 bg-white rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-bold text-vibrant-blue mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-gray-600">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/8471831/pexels-photo-8471831.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="School building"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vibrant-blue/20 to-transparent rounded-2xl"></div>

              {/* Floating Award Badge */}
              <motion.div
                className="absolute -top-6 -right-6 bg-vibrant-orange text-white p-4 rounded-full shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Award className="w-8 h-8" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center text-vibrant-blue mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="bg-gradient-to-br from-vibrant-blue to-vibrant-orange p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <value.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h4 className="text-xl font-semibold text-vibrant-blue mb-3">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;