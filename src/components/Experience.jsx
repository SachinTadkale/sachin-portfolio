import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'Web Developer Intern',
      company: 'MicroGemini Technologies Pvt Ltd.',
      location: 'Remote',
      period: 'FEB 2025 - AUG 2025',
      description: [
        'Developed a web application using Angular & Springboot enhancing UI/UX and responsiveness for managing 1000+ product records and 300+ monthly invoices.',
        'Collaborated with senior developers to implement new features and fix bugs.',
        'Participated in code reviews and learned best practices in web development.',
        'Integrated backend functionality using Spring Boot and MySQL for authentication and RESTful APIs.',
        'Tested 5+ APIs via Postman and structured 3+ database tables for transactional data.',
        'Collaborated using GitHub for version control with 20+ commits, weekly updates, and peer-reviewed pull requests.',
      ],
      technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3','Springboot','MySQL', 'Git'],
    },
  ];

  return (
    <section 
      id="experience" 
      ref={ref}
      className="section-padding bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-4"
          >
            Experience
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display">
            <span className="text-gray-900 dark:text-white">Work </span>
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey and learning experiences
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500 transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 100 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <div className="flex-1 md:w-1/2 md:pr-8 md:pl-0 pl-16">
                    <motion.div
                      className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow"
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-primary-500 dark:text-primary-400 font-semibold mb-2">
                            <FiBriefcase className="text-lg" />
                            {exp.company}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <FiCalendar />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <FiMapPin />
                          {exp.location}
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <motion.li
                            key={i}
                            className="text-gray-600 dark:text-gray-400 flex items-start gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: index * 0.2 + i * 0.1, duration: 0.5 }}
                          >
                            <span className="text-primary-500 mt-1.5">▹</span>
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            className="px-3 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-medium"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{ delay: index * 0.2 + i * 0.05, duration: 0.4 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900 transform md:-translate-x-1/2 z-10" />
                  <div className="flex-1 md:w-1/2 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
