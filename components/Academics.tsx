'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Calculator, Globe, Microscope, Palette, Music, Trophy, Computer } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Academics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const subjects = [
    {
      icon: BookOpen,
      title: 'Languages',
      description: 'English, Hindi, and regional languages with focus on communication skills.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Calculator,
      title: 'Mathematics',
      description: 'Comprehensive math curriculum from basic arithmetic to advanced calculus.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Microscope,
      title: 'Sciences',
      description: 'Physics, Chemistry, and Biology with hands-on laboratory experience.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Globe,
      title: 'Social Studies',
      description: 'History, Geography, and Civics to understand our world and society.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Computer,
      title: 'Technology',
      description: 'Computer Science and IT skills for the digital age.',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Palette,
      title: 'Arts',
      description: 'Visual arts, crafts, and creative expression programs.',
      color: 'from-pink-500 to-pink-600',
    },
  ];

  const programs = [
    {
      title: 'Primary Education',
      grades: 'Classes I - V',
      description: 'Foundation building with focus on basic literacy, numeracy, and social skills.',
      features: ['Play-based learning', 'Activity-based curriculum', 'Individual attention'],
    },
    {
      title: 'Middle School',
      grades: 'Classes VI - VIII',
      description: 'Comprehensive curriculum with introduction to specialized subjects.',
      features: ['Subject specialization', 'Project-based learning', 'Skill development'],
    },
    {
      title: 'Secondary Education',
      grades: 'Classes IX - X',
      description: 'CBSE board preparation with focus on academic excellence.',
      features: ['Board exam preparation', 'Career guidance', 'Competitive exam coaching'],
    },
    {
      title: 'Senior Secondary',
      grades: 'Classes XI - XII',
      description: 'Stream selection with Science, Commerce, and Humanities options.',
      features: ['Stream specialization', 'University preparation', 'Research projects'],
    },
  ];

  const achievements = [
    { icon: Trophy, title: 'Academic Excellence', description: '98% board exam pass rate' },
    { icon: BookOpen, title: 'Curriculum Innovation', description: 'Award-winning teaching methods' },
    { icon: Globe, title: 'Global Recognition', description: 'International school partnerships' },
    { icon: Music, title: 'Holistic Development', description: 'Excellence in arts and sports' },
  ];

  return (
    <section id="academics" className="py-20 section-bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-vibrant-blue mb-6">
            Academic Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive CBSE curriculum is designed to nurture critical thinking, 
            creativity, and academic excellence in every student.
          </p>
        </motion.div>

        {/* Subjects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subjects.map((subject, index) => (
            <motion.div
              key={subject.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
                <CardContent className="p-6">
                  <motion.div
                    className={`bg-gradient-to-r ${subject.color} p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <subject.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-vibrant-blue mb-3 text-center">
                    {subject.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {subject.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Academic Programs */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-center text-vibrant-blue mb-12">
            Academic Programs
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-vibrant-orange">
                  <CardHeader>
                    <CardTitle className="text-vibrant-blue text-xl">
                      {program.title}
                    </CardTitle>
                    <p className="text-vibrant-orange font-semibold">{program.grades}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {program.description}
                    </p>
                    <ul className="space-y-2">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-vibrant-orange rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center text-vibrant-blue mb-12">
            Our Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-br from-vibrant-blue to-vibrant-orange p-6 rounded-full w-20 h-20 mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-vibrant-blue mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Academics;