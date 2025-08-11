import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';

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
        title: "E-Commerce Platform",
        description: "A modern e-commerce solution built with React and Node.js",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
        tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
        liveUrl: "#"
      },
      {
        id: 2,
        title: "SaaS Dashboard",
        description: "Analytics dashboard with real-time data visualization",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        tech: ["Vue.js", "D3.js", "Express", "MongoDB"],
        liveUrl: "#"
      },
      {
        id: 3,
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
        title: "Brand Identity - TechStart",
        description: "Complete brand identity design for a technology startup",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
        type: "Branding"
      },
      {
        id: 2,
        title: "Mobile App UI",
        description: "Clean and intuitive user interface for a fitness tracking app",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
        type: "UI/UX Design"
      },
      {
        id: 3,
        title: "Website Redesign",
        description: "Modern redesign for a local restaurant's online presence",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        type: "Web Design"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-cream-50/80 backdrop-blur-sm border-b border-cream-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="font-heading font-semibold text-slate-800 text-lg"
            >
              Alex Chen
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden md:flex space-x-8"
            >
              <a href="#about" className="font-heading text-slate-600 hover:text-primary transition-colors">About</a>
              <a href="#projects" className="font-heading text-slate-600 hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="font-heading text-slate-600 hover:text-primary transition-colors">Contact</a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-5xl md:text-7xl font-light text-slate-800 mb-6 leading-tight"
            >
              I Design &amp; Build<br />
              <span className="text-primary">Digital Experiences</span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="font-body text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Creating thoughtful interfaces and robust web applications that bring ideas to life.
              I blend design thinking with technical expertise to craft digital solutions that matter.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/websites"
                className="group bg-primary text-primary-foreground px-8 py-4 rounded-xl font-heading font-medium transition-all duration-300 hover:bg-primary/90 hover:scale-105 flex items-center justify-center gap-2"
              >
                View My Websites
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/designs"
                className="group bg-sage-100 text-slate-700 px-8 py-4 rounded-xl font-heading font-medium transition-all duration-300 hover:bg-sage-200 hover:scale-105 flex items-center justify-center gap-2"
              >
                View My Designs
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-cream-100/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-slate-800 mb-6 font-light">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            <div className="space-y-6">
              <h3 className="font-heading text-2xl text-slate-800 mb-4">Design</h3>
              <p className="font-body text-lg text-slate-600 leading-relaxed">
                I believe great design is invisible—it seamlessly guides users toward their goals while 
                creating memorable experiences. My design process is rooted in empathy, research, and 
                iterative refinement.
              </p>
              <p className="font-body text-lg text-slate-600 leading-relaxed">
                From brand identity to user interfaces, I craft visual stories that resonate with 
                audiences and drive meaningful engagement.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="font-heading text-2xl text-slate-800 mb-4">Development</h3>
              <p className="font-body text-lg text-slate-600 leading-relaxed">
                Code is my medium for bringing designs to life. I specialize in modern web technologies, 
                creating performant, accessible, and maintainable applications that scale with business needs.
              </p>
              <p className="font-body text-lg text-slate-600 leading-relaxed">
                I'm passionate about clean code, user-centered development, and staying current with 
                emerging technologies and best practices.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Preview */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-slate-800 mb-6 font-light">
              Featured Work
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          </motion.div>

          {/* Websites Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center justify-between mb-12">
              <h3 className="font-heading text-3xl text-slate-800">Websites</h3>
              <Link
                to="/websites"
                className="font-heading text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.websites.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <div className="aspect-[4/3] bg-sage-100 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-heading text-xl text-slate-800 mb-2">{project.title}</h4>
                    <p className="font-body text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-sage-100 text-slate-700 rounded-lg text-sm font-heading"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.liveUrl}
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-heading text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors font-heading text-sm"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Designs Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-12">
              <h3 className="font-heading text-3xl text-slate-800">Designs</h3>
              <Link
                to="/designs"
                className="font-heading text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
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
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <div className="aspect-[4/3] bg-sage-100 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-cream-200 text-slate-700 rounded-lg text-xs font-heading mb-3">
                      {project.type}
                    </span>
                    <h4 className="font-heading text-xl text-slate-800 mb-2">{project.title}</h4>
                    <p className="font-body text-slate-600 leading-relaxed">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-cream-100/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl text-slate-800 mb-6 font-light">
              Let's Work Together
            </h2>
            <p className="font-body text-xl text-slate-600 mb-8 leading-relaxed">
              I'm always interested in new opportunities and collaborations.
              Whether you have a project in mind or just want to say hello, I'd love to hear from you.
            </p>
            <a
              href="mailto:hello@alexchen.dev"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-xl font-heading font-medium transition-all duration-300 hover:bg-primary/90 hover:scale-105"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-cream-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-body text-slate-600">
            © 2024 Alex Chen. Designed &amp; built with care.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
