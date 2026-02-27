import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { portfolioProjects } from '../data/data';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const Portfolio = () => {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t('portfolio.ourPortfolio')}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('portfolio.showcasingExpertise')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: '150+', label: t('portfolio.projectsCompleted') },
              { value: '50+', label: t('portfolio.enterpriseClients') },
              { value: '15+', label: t('portfolio.yearsExperience') },
              { value: '99%', label: t('portfolio.clientSatisfaction') }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className={isDark ? 'text-gray-400 font-medium' : 'text-gray-600 font-medium'}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">{t('portfolio.featuredProjects')}</h2>
            <p className="section-subtitle">{t('portfolio.innovativeSolutions')}</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {portfolioProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                className="card overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.client}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <p className={isDark ? 'text-gray-400 mb-6' : 'text-gray-600 mb-6'}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`flex items-center px-3 py-1 rounded-full text-sm ${
                          isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        <Layers className="w-3 h-3 mr-1" />
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button className="flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t('portfolio.liveDemo')}
                    </button>
                    <button className={`flex items-center font-medium transition-colors ${
                      isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'
                    }`}>
                      <Github className="w-4 h-4 mr-2" />
                      {t('portfolio.sourceCode')}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">{t('portfolio.technologiesWeUse')}</h2>
            <p className="section-subtitle">{t('portfolio.cuttingEdgeTech')}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
          >
            {[
              'React', 'Next.js', 'Node.js', 'TypeScript',
              'PostgreSQL', 'MongoDB', 'AWS', 'Docker',
              'Kubernetes', 'Redis', 'GraphQL', 'Python'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 ${
                  isDark ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-50 text-gray-900 hover:bg-primary-50'
                }`}
              >
                <div className="text-lg font-semibold">{tech}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              {t('portfolio.readyToStart')}
            </h2>
            <p className="text-xl text-white/80 mb-10">
              {t('portfolio.letsBuild')}
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary-600 font-semibold py-4 px-10 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              {t('portfolio.contactUs')}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
