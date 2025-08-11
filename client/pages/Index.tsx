import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github, Mail, Eye, Code2, ChevronDown } from 'lucide-react';

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

  const teamMembers = [
    {
      id: 1,
      name: "Ujjwal",
      role: "Designer & Developer",
      description: "Crafting digital experiences with Figma designs and modern web development. Specializes in creating thoughtful interfaces that bridge creativity and functionality.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      featured: true
    },
    {
      id: 2,
      name: "Portfolio",
      role: "Web Development",
      description: "Modern portfolio showcasing creative work and development projects. Built with React, Tailwind CSS, and smooth animations for optimal user experience.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop",
      featured: false
    },
    {
      id: 3,
      name: "Figma Designs",
      role: "Visual Design",
      description: "Collection of stunning visual designs created in Figma. From brand identities to user interfaces, each project tells a unique story.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&h=200&fit=crop",
      featured: false
    },
    {
      id: 4,
      name: "Projects",
      role: "Full Stack",
      description: "End-to-end digital solutions combining design thinking with technical expertise. Creating scalable applications that make a difference.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Navigation - Exact smoothbot style */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full nav-dark z-50"
      >
        <div className="content-center px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="font-heading font-bold text-2xl text-white tracking-wider"
            >
              UJJWAL
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="font-body text-text-secondary hover:text-white transition-colors duration-300 uppercase text-sm tracking-wide">About</a>
              <a href="#projects" className="font-body text-text-secondary hover:text-white transition-colors duration-300 uppercase text-sm tracking-wide">Projects</a>
              <a href="#contact" className="font-body text-orange-500 font-medium uppercase text-sm tracking-wide">Contact</a>
              <ChevronDown className="w-4 h-4 text-text-secondary" />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section - Smoothbot style */}
      <section className="section-spacing pt-32 px-6">
        <div className="content-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-6xl md:text-7xl font-light mb-6 text-white text-balance leading-tight"
            >
              Creative Collective
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="font-body text-xl md:text-2xl text-text-secondary mb-16 max-w-3xl mx-auto leading-relaxed text-balance"
            >
              Pioneers crafting the future of digital design
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Cards Grid - Exact smoothbot layout */}
      <section className="pb-20 px-6">
        <div className="content-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-dark p-6 card-hover text-center"
              >
                {/* Avatar */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-2 border-dark-border">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="font-heading text-2xl font-light text-white mb-2">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="font-body text-text-secondary mb-6 text-sm">
                  {member.role}
                </p>

                {/* Description */}
                <p className="font-body text-text-muted leading-relaxed text-sm">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Designs Section */}
      <section className="section-spacing px-6">
        <div className="content-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-light mb-6 text-white text-balance">
              Featured Work
            </h2>
            <div className="w-16 h-0.5 bg-orange-500 mx-auto"></div>
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
              <h3 className="font-heading text-2xl font-light text-white">Figma Designs</h3>
              <Link
                to="/designs"
                className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors font-body text-sm uppercase tracking-wide"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Flipkart Startup Story",
                  description: "Creative infographic design showcasing journey",
                  image: "https://cdn.builder.io/api/v1/image/assets%2F7946648302634a1d808c7d73bb137994%2F093637ccbd3c4c5facdfebe9af660b41?format=webp&width=400",
                  type: "Infographic"
                },
                {
                  title: "Ganesh Chaturthi Greeting",
                  description: "Traditional festival greeting with ornate patterns",
                  image: "https://cdn.builder.io/api/v1/image/assets%2F7946648302634a1d808c7d73bb137994%2F9cf8a24b705e45b4b83d62fea10d59e1?format=webp&width=400",
                  type: "Festival Design"
                },
                {
                  title: "Father's Day Greeting Card",
                  description: "Heartwarming card with modern illustration",
                  image: "https://cdn.builder.io/api/v1/image/assets%2F7946648302634a1d808c7d73bb137994%2F2ba678aed90a4452be7c1bc64cdc3496?format=webp&width=400",
                  type: "Greeting Card"
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-dark overflow-hidden card-hover"
                >
                  <div className="aspect-square bg-gray-900 p-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-orange-500/10 text-orange-500 rounded-full text-xs font-body mb-3 uppercase tracking-wide">
                      {project.type}
                    </span>
                    <h4 className="font-heading text-lg font-light text-white mb-2">{project.title}</h4>
                    <p className="font-body text-text-muted text-sm leading-relaxed">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-spacing px-6">
        <div className="content-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-light mb-6 text-white text-balance">
              Let's Collaborate
            </h2>
            <p className="font-body text-xl text-text-secondary mb-8 leading-relaxed text-balance max-w-2xl mx-auto">
              Ready to create something extraordinary? Let's connect and bring your vision to life.
            </p>
            <a
              href="mailto:ujjwalt616@gmail.com"
              className="inline-flex items-center gap-3 bg-orange-500 text-white px-8 py-4 rounded-xl font-body font-medium transition-all duration-300 hover:bg-orange-600 hover:scale-105 card-hover uppercase tracking-wide text-sm"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-dark-border">
        <div className="content-center text-center">
          <p className="font-body text-text-muted text-sm">
            © 2024 Ujjwal Tiwari. Crafted with precision and passion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
