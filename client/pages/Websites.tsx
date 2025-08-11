import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Code } from 'lucide-react';

const Websites = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const glassHover = {
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" }
  };

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "Personal portfolio showcasing creative work and development projects. Features smooth animations, responsive design, and optimized performance. Built with modern React patterns and styled with Tailwind CSS for a clean, minimal aesthetic.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full glass-nav z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="font-heading font-bold text-xl text-gradient hover:scale-105 transition-transform"
            >
              Ujjwal Tiwari
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="font-heading text-white/80 hover:text-white transition-colors">Home</Link>
              <Link to="/websites" className="font-heading text-white">Websites</Link>
              <Link to="/designs" className="font-heading text-white/80 hover:text-white transition-colors">Designs</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors font-heading glass-card px-4 py-2 rounded-xl"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-2xl mb-8">
              <Code className="w-6 h-6 text-blue-400" />
              <span className="font-heading text-white/80">Web Developer</span>
            </div>
            
            <h1 className="font-heading text-6xl md:text-7xl font-bold mb-6 text-gradient">
              Web Development
            </h1>
            <p className="font-body text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              A collection of websites and web applications I've built, showcasing modern technologies 
              and approaches to solving real-world problems with clean, efficient code.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Display */}
      <section className="pb-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="text-center mb-12">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-block glass-card px-4 py-2 rounded-xl"
                  >
                    <span className="text-gradient font-heading font-semibold">Featured Project</span>
                  </motion.div>
                </div>
              )}

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Project Image */}
                <motion.div
                  whileHover={glassHover}
                  className="glass-card rounded-3xl overflow-hidden p-6 hover:glow-blue transition-all duration-500"
                >
                  <div className="aspect-[4/3] bg-white/5 rounded-2xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Project Info */}
                <div className="space-y-8">
                  <div>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
                      {project.title}
                    </h2>
                    
                    <p className="font-body text-lg text-white/70 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-white mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="glass-card px-4 py-2 rounded-xl text-blue-300 font-heading text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={glassHover}
                      className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-2xl font-heading font-semibold transition-all duration-300 hover:glow-blue text-white"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={glassHover}
                      className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-2xl font-heading font-semibold transition-all duration-300 hover:glow-purple text-white"
                    >
                      <Github className="w-5 h-5" />
                      View Code
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Technologies I Work With
            </h2>
            <p className="font-body text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              I stay current with modern web technologies to deliver cutting-edge solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div
              whileHover={glassHover}
              className="glass-card p-8 rounded-3xl text-center hover:glow-purple transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-4">Frontend</h3>
              <p className="text-white/70 mb-4">React, TypeScript, Tailwind CSS</p>
            </motion.div>

            <motion.div
              whileHover={glassHover}
              className="glass-card p-8 rounded-3xl text-center hover:glow-blue transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-4">Backend</h3>
              <p className="text-white/70 mb-4">Node.js, Express, PostgreSQL</p>
            </motion.div>

            <motion.div
              whileHover={glassHover}
              className="glass-card p-8 rounded-3xl text-center hover:glow-pink transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-4">Tools</h3>
              <p className="text-white/70 mb-4">Vite, Framer Motion, Git</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-12 rounded-3xl"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Ready to Build Something Great?
            </h2>
            <p className="font-body text-xl text-white/70 mb-8 leading-relaxed">
              Let's discuss your next web project and bring your ideas to life with modern, 
              performant, and beautiful web applications.
            </p>
            <motion.a
              href="mailto:ujjwalt616@gmail.com"
              whileHover={glassHover}
              className="inline-flex items-center gap-3 glass-card px-8 py-4 rounded-2xl font-heading font-semibold transition-all duration-300 hover:glow-blue text-white"
            >
              <Code className="w-5 h-5" />
              Start a Project
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="glass border-t border-white/10 pt-8">
            <p className="font-body text-white/60">
              © 2024 Ujjwal Tiwari. Designed &amp; built with liquid glass aesthetics.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Websites;
