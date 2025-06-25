'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  CheckCircle,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['02933299101', '+91 9636937172'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['vibrant.sumerpur@gmail.com'],
      color: 'from-green-500 to-green-600',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Vibrant Campus jawai bandh road sumerpur dist pali rajasthan'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 2:00 PM'],
      color: 'from-orange-500 to-orange-600',
    },
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, name: 'Twitter', href: '#', color: 'hover:text-blue-400' },
    { icon: Instagram, name: 'Instagram', href: '#', color: 'hover:text-pink-600' },
    { icon: Youtube, name: 'YouTube', href: '#', color: 'hover:text-red-600' },
  ];

  const departments = [
    'General Inquiry',
    'Admissions',
    'Academic Affairs',
    'Student Services',
    'Transportation',
    'Finance',
    'Principal Office',
    'Other',
  ];

  return (
    <section id="contact" className="py-20 section-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-vibrant-blue mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;re here to help and answer any questions you might have.
            We look forward to hearing from you and welcoming you to our school community.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="h-full shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-vibrant-blue text-2xl flex items-center">
                  <MessageSquare className="w-6 h-6 mr-3" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    className="text-center py-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-vibrant-blue mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for contacting us. We&apos;ll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vibrant-blue focus:border-transparent transition-all duration-200"
                            placeholder="Enter your full name"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vibrant-blue focus:border-transparent transition-all duration-200"
                            placeholder="Enter your phone number"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vibrant-blue focus:border-transparent transition-all duration-200"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vibrant-blue focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select a department</option>
                        {departments.map((dept) => (
                          <option key={dept} value={dept}>
                            {dept}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vibrant-blue focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-vibrant-orange hover:bg-vibrant-orange/90 text-white py-3 text-lg group"
                    >
                      Send Message
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-vibrant-orange">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <motion.div
                        className={`bg-gradient-to-r ${info.color} p-3 rounded-full flex-shrink-0`}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <info.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-semibold text-vibrant-blue mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 mb-1">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Social Media */}
            <motion.div
              className="bg-white rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h3 className="text-lg font-semibold text-vibrant-blue mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className={`p-3 bg-gray-100 rounded-full text-gray-600 transition-colors duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="p-6 bg-gradient-to-r from-vibrant-blue to-vibrant-orange text-white">
            <h3 className="text-2xl font-bold mb-2">Visit Our Campus</h3>
            <p className="opacity-90">
              Come and experience our beautiful campus and world-class facilities in person.
            </p>
          </div>
          <div className="h-96 bg-gray-200 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="w-16 h-16 mx-auto mb-4" />
              <p className="text-lg font-medium">Interactive Map</p>
              <p className="text-sm">
               Vibrant Campus jawai bandh road sumerpur dist pali rajasthan
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
