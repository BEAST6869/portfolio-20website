import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github, Mail, Eye, Code2 } from 'lucide-react';

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
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-neutral-100 z-50"
      >
        <div className="content-center px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="font-heading font-bold text-xl text-neutral-900"
            >
              Ujjwal Tiwari
            </motion.div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="font-body text-neutral-500 hover:text-neutral-900 transition-colors duration-300">About</a>
              <a href="#projects" className="font-body text-neutral-500 hover:text-neutral-900 transition-colors duration-300">Projects</a>
              <a href="#contact" className="font-body text-neutral-500 hover:text-neutral-900 transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="section-spacing pt-32 px-6">
        <div className="content-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="mb-12"
            >
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 flex items-center justify-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  UT
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium border border-blue-200">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for work
              </div>
            </motion.div>
            
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-6xl md:text-7xl font-bold mb-8 text-neutral-900 text-balance"
            >
              I Design &amp; Build
              <br />
              <span className="text-blue-600">Digital Experiences</span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="font-body text-xl md:text-2xl text-neutral-500 mb-12 max-w-4xl mx-auto leading-relaxed text-balance"
            >
              Specializing in Figma designs and modern web development. 
              I create thoughtful interfaces and robust applications that bring ideas to life.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/websites"
                className="group inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:bg-blue-700 hover:scale-105 card-hover"
              >
                <Code2 className="w-5 h-5" />
                View My Websites
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/designs"
                className="group inline-flex items-center justify-center gap-3 bg-white text-neutral-900 px-8 py-4 rounded-xl font-medium border border-neutral-200 transition-all duration-300 hover:border-neutral-300 hover:scale-105 card-hover"
              >
                <Eye className="w-5 h-5" />
                View My Designs
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-spacing px-6 bg-white">
        <div className="content-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-neutral-900 text-balance">
              About Me
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto"
          >
            <div className="card-subtle rounded-2xl p-8 card-hover">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-neutral-900 mb-6">Figma Design</h3>
              <p className="font-body text-lg text-neutral-500 leading-relaxed mb-4">
                I specialize in creating stunning visual designs using Figma. From brand identities to 
                user interfaces, I craft experiences that resonate with audiences and tell compelling stories.
              </p>
              <p className="font-body text-lg text-neutral-500 leading-relaxed">
                My design process focuses on user-centered thinking, modern aesthetics, and creating 
                memorable digital experiences that drive engagement.
              </p>
            </div>
            
            <div className="card-subtle rounded-2xl p-8 card-hover">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-neutral-900 mb-6">Development</h3>
              <p className="font-body text-lg text-neutral-500 leading-relaxed mb-4">
                I bring designs to life with modern web technologies. Specializing in React, TypeScript, 
                and cutting-edge frameworks to create performant, scalable applications.
              </p>
              <p className="font-body text-lg text-neutral-500 leading-relaxed">
                My development approach emphasizes clean code, user experience, and staying current 
                with the latest technologies and best practices.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="section-spacing px-6">
        <div className="content-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-neutral-900 text-balance">
              Featured Work
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          {/* Figma Designs Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="flex items-center justify-between mb-12 max-w-5xl mx-auto">
              <h3 className="font-heading text-3xl font-semibold text-neutral-900">Figma Designs</h3>
              <Link
                to="/designs"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {projects.designs.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-subtle rounded-2xl overflow-hidden card-hover group"
                >
                  <div className="bg-neutral-50 p-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-3 border border-blue-200">
                      {project.type}
                    </span>
                    <h4 className="font-heading text-xl font-semibold text-neutral-900 mb-2">{project.title}</h4>
                    <p className="font-body text-neutral-500 leading-relaxed">{project.description}</p>
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
            className="max-w-5xl mx-auto"
          >
            <div className="flex items-center justify-between mb-12">
              <h3 className="font-heading text-3xl font-semibold text-neutral-900">Web Development</h3>
              <Link
                to="/websites"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="card-subtle rounded-2xl overflow-hidden card-hover max-w-lg mx-auto">
              <div className="aspect-[4/3] bg-neutral-50 overflow-hidden">
                <img
                  src={projects.websites[0].image}
                  alt={projects.websites[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="font-heading text-xl font-semibold text-neutral-900 mb-2">{projects.websites[0].title}</h4>
                <p className="font-body text-neutral-500 mb-4 leading-relaxed">{projects.websites[0].description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects.websites[0].tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={projects.websites[0].liveUrl}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-700 transition-colors font-medium text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-spacing px-6 bg-white">
        <div className="content-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-neutral-900 text-balance">
              Let's Work Together
            </h2>
            <p className="font-body text-xl text-neutral-500 mb-8 leading-relaxed text-balance">
              I'm always interested in new opportunities and collaborations.
              Whether you have a project in mind or just want to say hello, I'd love to hear from you.
            </p>
            <a
              href="mailto:ujjwalt616@gmail.com"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:bg-blue-700 hover:scale-105 card-hover"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-neutral-100 border-t border-neutral-200">
        <div className="content-center text-center">
          <p className="font-body text-neutral-500">
            © 2024 Ujjwal Tiwari. Designed &amp; built with minimalist aesthetics.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
