'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FileText, 
  Calendar, 
  Users, 
  CheckCircle, 
  Download, 
  Phone,
  Mail,
  MapPin,
  Clock
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Admissions = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const admissionSteps = [
    {
      step: 1,
      title: 'Application Form',
      description: 'Fill out the online application form with required details.',
      icon: FileText,
    },
    {
      step: 2,
      title: 'Document Submission',
      description: 'Submit all required documents and certificates.',
      icon: CheckCircle,
    },
    {
      step: 3,
      title: 'Entrance Test',
      description: 'Appear for the entrance examination (for applicable classes).',
      icon: Users,
    },
    {
      step: 4,
      title: 'Interview',
      description: 'Attend the personal interview with parents.',
      icon: Calendar,
    },
  ];

  const requirements = [
    'Birth Certificate',
    'Previous School Transfer Certificate',
    'Academic Records/Report Cards',
    'Passport Size Photographs',
    'Address Proof',
    'Medical Certificate',
    'Caste Certificate (if applicable)',
    'Income Certificate (for fee concession)',
  ];

  const feeStructure = [
    { class: 'Classes I - V', admission: '₹15,000', tuition: '₹8,000/month', total: '₹1,11,000/year' },
    { class: 'Classes VI - VIII', admission: '₹20,000', tuition: '₹10,000/month', total: '₹1,40,000/year' },
    { class: 'Classes IX - X', admission: '₹25,000', tuition: '₹12,000/month', total: '₹1,69,000/year' },
    { class: 'Classes XI - XII', admission: '₹30,000', tuition: '₹15,000/month', total: '₹2,10,000/year' },
  ];

  const importantDates = [
    { event: 'Application Form Release', date: 'January 15, 2024' },
    { event: 'Last Date for Application', date: 'March 31, 2024' },
    { event: 'Entrance Test', date: 'April 15, 2024' },
    { event: 'Interview Dates', date: 'April 20-25, 2024' },
    { event: 'Result Declaration', date: 'May 1, 2024' },
    { event: 'Admission Confirmation', date: 'May 15, 2024' },
  ];

  return (
    <section id="admissions" className="py-20 section-bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-vibrant-blue mb-6">
            Admissions Open
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join our vibrant community of learners. We welcome students who are eager to 
            explore, learn, and grow in a nurturing educational environment.
          </p>
        </motion.div>

        {/* Admission Process */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-center text-vibrant-blue mb-12">
            Admission Process
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-vibrant-blue to-vibrant-orange"></div>
                  <CardContent className="p-6">
                    <motion.div
                      className="bg-gradient-to-br from-vibrant-blue to-vibrant-orange text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {step.step}
                    </motion.div>
                    <step.icon className="w-8 h-8 text-vibrant-orange mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-vibrant-blue mb-3">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Required Documents */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-vibrant-blue flex items-center">
                  <FileText className="w-6 h-6 mr-3" />
                  Required Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <motion.li
                      key={requirement}
                      className="flex items-center text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {requirement}
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t">
                  <Button className="w-full bg-vibrant-orange hover:bg-vibrant-orange/90">
                    <Download className="w-4 h-4 mr-2" />
                    Download Application Form
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Important Dates */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-vibrant-blue flex items-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Important Dates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {importantDates.map((item, index) => (
                    <motion.div
                      key={item.event}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    >
                      <span className="text-gray-700 font-medium">{item.event}</span>
                      <span className="text-vibrant-blue font-semibold">{item.date}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Fee Structure */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center text-vibrant-blue mb-12">
            Fee Structure
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-vibrant-blue to-vibrant-orange text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Class</th>
                  <th className="px-6 py-4 text-left">Admission Fee</th>
                  <th className="px-6 py-4 text-left">Monthly Tuition</th>
                  <th className="px-6 py-4 text-left">Annual Total</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((fee, index) => (
                  <motion.tr
                    key={fee.class}
                    className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  >
                    <td className="px-6 py-4 font-medium text-vibrant-blue">{fee.class}</td>
                    <td className="px-6 py-4 text-gray-700">{fee.admission}</td>
                    <td className="px-6 py-4 text-gray-700">{fee.tuition}</td>
                    <td className="px-6 py-4 font-semibold text-vibrant-orange">{fee.total}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            * Fees are subject to revision. Additional charges may apply for transportation, meals, and extracurricular activities.
          </p>
        </motion.div>

        {/* Contact for Admissions */}
        <motion.div
          className="bg-gradient-to-r from-vibrant-blue to-vibrant-orange rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-6">Need Help with Admissions?</h3>
          <p className="text-lg mb-8 opacity-90">
            Our admissions team is here to guide you through the process. Contact us for any queries.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              className="flex items-center justify-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-6 h-6" />
              <span>+91 98765 43210</span>
            </motion.div>
            <motion.div
              className="flex items-center justify-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-6 h-6" />
              <span>admissions@vvhs.edu</span>
            </motion.div>
            <motion.div
              className="flex items-center justify-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <Clock className="w-6 h-6" />
              <span>Mon-Fri: 9AM-5PM</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Admissions;