import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBook, FiCalendar, FiAward, FiMapPin } from 'react-icons/fi';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const education = [
    {
      degree: 'Bachelor of Computer Application',
      institution: 'Modern College of Arts Science And Shivajinagar Pune',
      location: 'Pune, India',
      period: '2021 - 2024',
      description: 'Graduated with First Class with Distinction. Focused on software engineering, algorithms, and web technologies.',
      Grade: '9.12 CGPA',
      courses: ['Data Structures', 'Algorithms', 'Web Development', 'Database Systems', 'Software Engineering'],
    },
    {
      degree: "Master's of Computer Application",
      institution: 'G.H Raisoni College of Engineering And Management Pune',
      location: 'Pune, India',
      period: '2024 - 2026',
      description: "Pursuing Master's Degree in Computer Application. Focusing on App Development, DevOps,Cloud, Pandas & NumPy",
      Grade: '7.86 CGPA',
      courses: ['Pandas','NumPy','Software Testing','Data Structures','Pandas','NumPy','DevOps','Cloud Computing'],
    },
    // {
    //   degree: 'AWS Certified Solutions Architect',
    //   institution: 'Amazon Web Services',
    //   location: 'Online',
    //   period: '2021',
    //   description: 'Professional certification demonstrating expertise in designing distributed systems on AWS.',
    //   achievements: [
    //     'Passed with 95% score',
    //     'Specialized in cloud architecture',
    //   ],
    //   courses: ['Cloud Architecture', 'AWS Services', 'DevOps', 'Security'],
    // },
  ];

  return (
    <section id="education" className="section-padding bg-white dark:bg-gray-900">
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
            Education
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display">
            <span className="text-gray-900 dark:text-white">Educational </span>
            <span className="gradient-text">Background</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My academic journey and continuous learning
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative"
              >
                <motion.div
                  className="p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-800 border border-primary-100 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-2xl bg-primary-500 text-white flex-shrink-0">
                      <FiBook size={32} />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      <div className="text-lg text-primary-600 dark:text-primary-400 font-semibold mb-3">
                        {edu.institution}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <FiCalendar />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <FiMapPin />
                          {edu.location}
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {edu.description}
                      </p>

            
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            {edu.Grade}
                          </h4>  
                        </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Relevant Courses:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs rounded-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

