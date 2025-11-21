import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCode, FiLayers, FiTarget, FiZap } from 'react-icons/fi';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const stats = [
    { icon: FiCode, number: '10+', label: 'Projects Completed' },
    { icon: FiLayers, number: '5', label: 'Years Learning' },
    { icon: FiTarget, number: '100%', label: 'Dedication' },
    { icon: FiZap, number: 'Eager', label: 'To Learn' },
  ];

  const timeline = [
    {
      year: ' Sept 2021',
      title: 'Started Bachelor of Computer Application',
      description: 'Started my journey with the Bachelors of Computer Application.',
    },
    {
      year: 'Jan 2023',
      title: 'Started Learning Web Development',
      description: 'Started Learning Web Development & Data Structures & Algorithms.',
    },
    {
      year: 'Nov 2023',
      title: 'Built First Academic Project',
      description: 'Built First Academic Project called "Social Networking Website" using HTML, CSS, JavaScript, PHP & MySQL.',
    },
    {
      year: 'March 2024',
      title: 'Completed Bachelor of Computer Application',
      description: 'Completed Bachelor of Computer Application with First Class with Distinction with CGPA 9.12.',
    },
    {
      year: 'July 2024',
      title: 'Started Masters in Computer Application',
      description: 'Started my Masters in Computer Application in 2024 and Also Started Learning new Technologies.',
    },
    {
      year: 'Feb 2025',
      title: 'Started Working as a Web Developer Intern',
      description: 'Started Working as a Web Developer Intern for 6 Months at MicroGemini Technologies Pvt Ltd. ',
    },
    {
      year: ' March 2025',
      title: 'Built  Academic Project',
      description: 'Built Academic Project called "Point of Sale System" using Django Framework and SQLite Database.',
    },
    {
      year: 'November 2025',
      title: 'Built WorkLyn App',
      description: 'Built WorkLyn App using Flutter Framework, Node.js, MongoDB, Express & RESTful APIs.',
    },
    {
      year: 'Present',
      title: 'Continous Learning and Building Projects',
      description: 'Actively learning new technologies like DevOps & Cloud, and seeking opportunities to grow as a developer.',
    },
  ];


  return (
    <section id="about" ref={ref} className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <motion.span
              className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-4"
            >
              About Me
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display">
              <span className="text-gray-900 dark:text-white">A Little About </span>
              <span className="gradient-text">Myself</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Passionate Web Developer exploring DevOps to build smarter, scalable digital experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Who I Am
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a dedicated Web Developer with solid hands-on experience in building responsive, optimized, and user-friendly web applications. 
                I specialize in modern frontend development using Angular,ReactJS, Bootstrap, and REST APIs, crafting clean interfaces with smooth functionality. 
                Completing my Web Developer Internship helped me strengthen my understanding of UI best practices,
                component-based architecture, and structured problem-solving backed by my knowledge of Java and C/C++.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Alongside frontend development, I’m actively expanding my capabilities into DevOps and Cloud technologies to become a versatile,
                industry-ready developer. I'm learning tools and platforms like CI/CD pipelines, containerization,
                and cloud services to build scalable, production-focused solutions. I stay curious, continuously improving my skills,
                and aim to contribute to impactful projects that help me grow both technically and professionally.
              </p>


              <div className="flex flex-wrap gap-4 mt-8">
                {['Angular', 'ReactJS', 'HTML5', 'CSS3','JavaScript','Node.js','DevOps','Cloud Computing', 'Git'].map((tech, i) => (
                  <motion.span
                    key={i}
                    className="px-4 py-2 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-medium"
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-800 border border-primary-100 dark:border-gray-700"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.1, duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                >
                  <stat.icon className="text-4xl text-primary-500 dark:text-primary-400 mb-4" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              My Journey
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500 transform md:-translate-x-1/2" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                  >
                    <div className="flex-1 md:w-1/2 md:pr-8 md:pl-0 pl-16">
                      <div
                        className={`p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                          }`}
                      >
                        <div className="text-primary-500 dark:text-primary-400 font-bold text-lg mb-2">
                          {item.year}
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900 transform md:-translate-x-1/2 z-10" />

                    <div className="flex-1 md:w-1/2 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
