import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github, Mail, MapPin, Calendar } from 'lucide-react';

const Index = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const glassHover = {
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" }
  };

  const projects = {
    websites: [
      {
        id: 1,
        title: "Portfolio Website",
        description: "Personal portfolio showcasing creative work and development projects",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
        tech: ["React", "Tailwind CSS", "Framer Motion"],
        liveUrl: "#"
      }
    ],
    designs: [
      {
        id: 1,
        title: "Flipkart Startup Story",
        description: "Creative infographic design showcasing Flipkart's journey",
        image: "https://cdn.builder.io/api/v1/image/assets%2F7946648302634a1d808c7d73bb137994%2F093637ccbd3c4c5facdfebe9af660b41?format=webp&width=400",
        type: "Figma Design"
      },
      {
        id: 2,
        title: "Ganesh Chaturthi Greeting",
        description: "Traditional festival greeting with ornate patterns",
        image: "https://cdn.builder.io/api/v1/image/assets%2F7946648302634a1d808c7d73bb137994%2F9cf8a24b705e45b4b83d62fea10d59e1?format=webp&width=400",
        type: "Figma Design"
      },
      {
        id: 3,
        title: "Father's Day Greeting Card",
        description: "Heartwarming Father's Day card with modern illustration",
        image: "https://cdn.builder.io/api/v1/image/assets%2F7946648302634a1d808c7d73bb137994%2F2ba678aed90a4452be7c1bc64cdc3496?format=webp&width=400",
        type: "Figma Design"
      }
    ]
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full glass-nav z-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="font-heading font-bold text-xl text-gradient"
            >
              Ujjwal Tiwari
            </motion.div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="font-heading text-white/80 hover:text-white transition-colors duration-300">About</a>
              <a href="#projects" className="font-heading text-white/80 hover:text-white transition-colors duration-300">Projects</a>
              <a href="#contact" className="font-heading text-white/80 hover:text-white transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="mb-8"
            >
              <div className="inline-block glass-card p-6 rounded-2xl mb-8">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-2xl font-bold">
                  UT
                </div>
                <div className="flex items-center gap-2 justify-center text-white/70 text-sm">
                  <MapPin className="w-4 h-4" />
                  Available for work
                </div>
              </div>
            </motion.div>
            
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-6xl md:text-8xl font-bold mb-8 leading-tight"
            >
              I Design &amp; Build<br />
              <span className="text-gradient">Digital Experiences</span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="font-body text-xl md:text-2xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Specializing in Figma designs and modern web development. 
              I create thoughtful interfaces and robust applications that bring ideas to life.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.div whileHover={glassHover}>
                <Link
                  to="/websites"
                  className="group glass-card px-8 py-4 rounded-2xl font-heading font-semibold transition-all duration-300 hover:glow-purple flex items-center justify-center gap-3 text-white"
                >
                  <ExternalLink className="w-5 h-5" />
                  View My Websites
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div whileHover={glassHover}>
                <Link
                  to="/designs"
                  className="group glass-card px-8 py-4 rounded-2xl font-heading font-semibold transition-all duration-300 hover:glow-blue flex items-center justify-center gap-3 text-white"
                >
                  <Calendar className="w-5 h-5" />
                  View My Designs
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-gradient">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div 
              whileHover={glassHover}
              className="glass-card p-8 rounded-3xl space-y-6 hover:glow-purple transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-400 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-white mb-4">Figma Design</h3>
              <p className="font-body text-lg text-white/70 leading-relaxed">
                I specialize in creating stunning visual designs using Figma. From brand identities to 
                user interfaces, I craft experiences that resonate with audiences and tell compelling stories.
              </p>
              <p className="font-body text-lg text-white/70 leading-relaxed">
                My design process focuses on user-centered thinking, modern aesthetics, and creating 
                memorable digital experiences that drive engagement.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={glassHover}
              className="glass-card p-8 rounded-3xl space-y-6 hover:glow-blue transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-pink-400 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-white mb-4">Development</h3>
              <p className="font-body text-lg text-white/70 leading-relaxed">
                I bring designs to life with modern web technologies. Specializing in React, TypeScript, 
                and cutting-edge frameworks to create performant, scalable applications.
              </p>
              <p className="font-body text-lg text-white/70 leading-relaxed">
                My development approach emphasizes clean code, user experience, and staying current 
                with the latest technologies and best practices.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-gradient">
              Featured Work
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </motion.div>

          {/* Figma Designs Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center justify-between mb-12">
              <h3 className="font-heading text-3xl font-semibold text-white">Figma Designs</h3>
              <Link
                to="/designs"
                className="font-heading text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.designs.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={glassHover}
                  className="glass-card rounded-3xl overflow-hidden hover:glow-purple transition-all duration-500"
                >
                  <div className="bg-white/5 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-sm font-heading mb-3">
                      {project.type}
                    </span>
                    <h4 className="font-heading text-xl font-semibold text-white mb-2">{project.title}</h4>
                    <p className="font-body text-white/70 leading-relaxed">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Website Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-12">
              <h3 className="font-heading text-3xl font-semibold text-white">Web Development</h3>
              <Link
                to="/websites"
                className="font-heading text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <motion.div
              whileHover={glassHover}
              className="glass-card rounded-3xl overflow-hidden hover:glow-blue transition-all duration-500 max-w-md mx-auto"
            >
              <div className="aspect-[4/3] bg-white/5 overflow-hidden">
                <img
                  src={projects.websites[0].image}
                  alt={projects.websites[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="font-heading text-xl font-semibold text-white mb-2">{projects.websites[0].title}</h4>
                <p className="font-body text-white/70 mb-4 leading-relaxed">{projects.websites[0].description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects.websites[0].tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-heading"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={projects.websites[0].liveUrl}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-heading text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-white/60 hover:text-white transition-colors font-heading text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-12 rounded-3xl"
          >
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-gradient">
              Let's Work Together
            </h2>
            <p className="font-body text-xl text-white/70 mb-8 leading-relaxed">
              I'm always interested in new opportunities and collaborations.
              Whether you have a project in mind or just want to say hello, I'd love to hear from you.
            </p>
            <motion.a
              href="mailto:ujjwalt616@gmail.com"
              whileHover={glassHover}
              className="inline-flex items-center gap-3 glass-card px-8 py-4 rounded-2xl font-heading font-semibold transition-all duration-300 hover:glow-pink text-white"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
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

export default Index;
