import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Website', 'Apps'];

  const projects = [
    // {
    //   id: 1,
    //   title: 'E-Commerce Platform',
    //   description: 'A full-featured e-commerce platform with payment integration, admin dashboard, and real-time inventory management.',
    //   image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    //   tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    //   category: 'Full Stack',
    //   github: 'https://github.com',
    //   live: 'https://example.com',
    // },
    // {
    //   id: 2,
    //   title: 'Task Management App',
    //   description: 'Collaborative task management application with real-time updates, drag-and-drop, and team collaboration features.',
    //   image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800',
    //   tags: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
    //   category: 'Website',
    //   github: 'https://github.com',
    //   live: 'https://example.com',
    // },
    {
      id: 3,
      title: 'E-commerce Platform',
      description: 'Developed a POS system featuring inventory tracking and purchase workflows',
      image: 'https://media.istockphoto.com/id/1249219777/photo/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-logo-in-a-trolley-on-a.webp?a=1&b=1&s=612x612&w=0&k=20&c=SKHGjU04CDDZfEULQheYGuIgcteXQR8Mf5q3mjG0qos=',
      tags: ['Django','SqLite','HTML','CSS','JS'],
      category: 'Website',
      github: 'https://github.com/SachinTadkale/Point_Of_Sale',
      // live: 'https://example.com',
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'Elegant weather application delivering precise, location-based weather updates.',
      image: 'https://images.unsplash.com/photo-1534068731687-d70176c2e7d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VhdGhlciUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D',
      tags: ['Flutter','Dart','OpenWeatherAPI'],
      category: 'Apps',
      github: 'https://github.com/SachinTadkale/Weather_Flutter_App',
      // live: 'https://example.com',
    },
    {
      id: 6,
      title: 'Currency Converter',
      description: 'Fast and accurate currency conversion app.',
      image: 'https://media.istockphoto.com/id/895577274/photo/currency-converter-mobile-app-in-a-mobile-phone-screen-at-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=9L48apt6ZAy2GKWN3yBJ_-OKnehC1-sxVg4bFflDNYk=',
      tags: ['Flutter','Dart'],
      category: 'Apps',
      github: 'https://github.com/SachinTadkale/currency_converter_app',
      // live: 'https://example.com',
    },
    {
      id: 7,
      title: 'Shop App',
      description: 'Modern shop app with product browsing and seamless add-to-cart functionality.',
      image: 'https://images.unsplash.com/photo-1730817403595-d78d929eb856?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2hvcCUyMEFwcHxlbnwwfHwwfHx8MA%3D%3D',
      tags: ['Flutter','Dart'],
      category: 'Apps',
      github: 'https://github.com/SachinTadkale/Shop_App_Flutter',
      // live: 'https://example.com',
    },
    {
      id: 8,
      title: 'WorkLynApp',
      description: 'Professional workspace app with chat, video meetings, AI assistance, and seamless organization management for teams.',
      image: 'https://images.unsplash.com/photo-1662974770404-468fd9660389?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhdHxlbnwwfHwwfHx8MA%3D%3D',
      tags: ['Flutter','Node.js','Express.js','MongoDB',],
      category: 'Apps',
      github: 'https://github.com/SachinTadkale/worklyn_frontend',
      // live: 'https://example.com',
    },
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="projects" ref={ref} className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-4"
          >
            Portfolio
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display">
            <span className="text-gray-900 dark:text-white">Featured </span>
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A collection of projects showcasing my skills and experience
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${activeFilter === filter
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Overlay Icons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/90 backdrop-blur-sm text-gray-900 hover:bg-primary-500 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiGithub size={20} />
                    </motion.a>
                    {/* <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/90 backdrop-blur-sm text-gray-900 hover:bg-primary-500 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiExternalLink size={20} />
                    </motion.a> */}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <FiCode className="text-primary-500" />
                    <span className="text-sm text-primary-500 dark:text-primary-400 font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

