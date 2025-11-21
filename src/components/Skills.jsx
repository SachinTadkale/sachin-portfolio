import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiAngular,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiAmazon,
  SiDocker,
  SiGit,
  SiTailwindcss,
  SiExpress,
  SiGraphql,
  SiBootstrap,
  SiFlutter,
  SiSpringboot,
  SiCplusplus,
  SiMysql,
  SiPostman,
  SiReact,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'Angular', icon: SiAngular, level: 95, color: 'from-red-500 to-red-900' },
        { name: 'Flutter', icon: SiFlutter, level: 93, color: 'from-blue-400 to-blue-900' },
        { name: 'BootStrap', icon: SiBootstrap, level: 92, color: 'from-purple-500 to-purple-900' },
        { name: 'JavaScript', icon: SiJavascript, level: 90, color: 'from-yellow-400 to-yellow-600' },
        { name: 'ReactJS', icon: SiReact, level: 89, color: 'from-cyan-400 to-blue-600' },
        { name: 'TypeScript', icon: SiTypescript, level: 88, color: 'from-blue-600 to-blue-800' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 83, color: 'from-cyan-400 to-blue-500' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, level: 92, color: 'from-green-500 to-green-700' },
        { name: 'Express', icon: SiExpress, level: 90, color: 'from-gray-600 to-gray-800' },
        { name: 'Python', icon: SiPython, level: 88, color: 'from-blue-500 to-yellow-500' },
        { name: 'C++', icon: SiCplusplus, level: 85, color: 'from-blue-500 to-blue-900' },
        { name: 'Java', icon: FaJava, level: 80, color: 'from-orange-500 to-red-600' },
        { name: 'SpringBoot', icon: SiSpringboot, level: 79, color: 'from-green-500 to-green-800' },
      ],
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql, level: 92, color: 'from-blue-600 to-blue-800' },
        { name: 'MongoDB', icon: SiMongodb, level: 90, color: 'from-green-500 to-green-700' },
        { name: 'MySQL', icon: SiMysql, level: 89, color: 'from-cyan-500 to-orange-600' },
        { name: 'Git', icon: SiGit, level: 88, color: 'from-orange-600 to-red-600' },
        { name: 'Postman', icon: SiPostman, level: 80, color: 'from-orange-400 to-orange-700' },
        { name: 'AWS', icon: SiAmazon, level: 70, color: 'from-orange-500 to-yellow-500' },
      ],
    },
  ];

  return (
    <section id="skills" ref={ref} className="section-padding bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-900 dark:to-gray-800">
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
            Skills & Expertise
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display">
            <span className="text-gray-900 dark:text-white">My Technical </span>
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="group relative p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all overflow-hidden"
                    onHoverStart={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    whileHover={{ y: -5, scale: 1.02 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1), duration: 0.5 }}
                  >
                    {/* Gradient Background on Hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <skill.icon className="text-4xl text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform" />
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                          {skill.level}%
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        {skill.name}
                      </h4>

                      {/* Progress Bar */}
                      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1,
                            delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3,
                            ease: 'easeOut',
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Also Familiar With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Vite', 'Kubernetes', 'CI/CD', 'Agile', 'Scrum', 'Jenkins', 'GCP', 'Linux', 'SDLC', 'STLC', 'OOP', 'Data Structures & Algorthms', 'Data Analysis', 'Pandas', 'NumPy',
            ].map((skill, index) => (
              <motion.span
                key={index}
                className="px-6 py-3 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 font-medium hover:border-primary-500 dark:hover:border-primary-500 hover:text-primary-500 dark:hover:text-primary-400 transition-all cursor-default"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.9 + index * 0.05, duration: 0.4 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

