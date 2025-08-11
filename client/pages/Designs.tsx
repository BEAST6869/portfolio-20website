import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Eye, Mail, Palette, Award } from 'lucide-react';

const Designs = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const projects = [
    {
      id: 1,
      title: "Flipkart Startup Story",
      description: "Creative infographic design showcasing Flipkart's journey as a startup success story. Designed with vibrant yellow theme and engaging visual elements including founders, product categories, and company milestones.",
      type: "Infographic Design",
      year: "2024",
      client: "Personal Project",
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2F7946648302634a1d808c7d73bb137994%2F093637ccbd3c4c5facdfebe9af660b41?format=webp&width=800"
      ],
      featured: true,
      color: "bg-yellow-100"
    },
    {
      id: 2,
      title: "Ganesh Chaturthi Greeting",
      description: "Traditional festival greeting card design celebrating Ganesh Chaturthi with beautiful ornate patterns, warm colors, and cultural elements. Features Lord Ganesha with traditional decorative elements and festive atmosphere.",
      type: "Festival Design",
      year: "2024",
      client: "Cultural Project",
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2F7946648302634a1d808c7d73bb137994%2F9cf8a24b705e45b4b83d62fea10d59e1?format=webp&width=800"
      ],
      featured: true,
      color: "bg-orange-100"
    },
    {
      id: 3,
      title: "Father's Day Greeting Card",
      description: "Heartwarming Father's Day card design with modern illustration style, featuring father-child bonding theme with paper airplanes, hearts, and floral elements on a beautiful gradient background.",
      type: "Greeting Card",
      year: "2024",
      client: "Personal Project",
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2F7946648302634a1d808c7d73bb137994%2F2ba678aed90a4452be7c1bc64cdc3496?format=webp&width=800"
      ],
      featured: false,
      color: "bg-blue-100"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full nav-clean z-50">
        <div className="content-center px-6 py-4">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="font-heading font-bold text-xl text-foreground hover:scale-105 transition-transform"
            >
              Ujjwal Tiwari
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="font-body text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <Link to="/websites" className="font-body text-muted-foreground hover:text-foreground transition-colors">Websites</Link>
              <Link to="/designs" className="font-body text-primary font-semibold">Designs</Link>
              <a href="mailto:ujjwalt616@gmail.com" className="btn-primary">Get In Touch</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="section-spacing pt-32 px-6 bg-gradient-to-br from-surface-2 via-surface-1 to-surface-3 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-black/5 rounded-full blur-3xl float"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl float-delayed"></div>
        </div>

        <div className="content-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300 font-body card-clean px-4 py-2 text-sm hover:scale-105 shimmer"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-3 gradient-purple-blue text-white px-6 py-3 rounded-full mb-8 pulse-glow"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Palette className="w-5 h-5" />
              </motion.div>
              <span className="font-body font-medium">Figma Design Specialist</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-heading text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight text-gradient-primary"
            >
              Design Portfolio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-body text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-balance"
            >
              A showcase of visual design work specializing in Figma designs, spanning branding, user interfaces, and digital experiences.
              Each project tells a unique story through thoughtful design decisions and modern visual aesthetics.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Stats */}
      <section className="py-16 px-6 bg-white border-b">
        <div className="content-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "3", label: "Design Categories" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "2024", label: "Current Year" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="section-spacing px-6">
        <div className="content-center">
          <div className="space-y-24 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-16 items-center"
              >
                {/* Project Image */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="card-clean overflow-hidden card-hover">
                    <div className={`${project.color} p-8`}>
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {project.featured && (
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20">
                      <Award className="w-4 h-4" />
                      <span className="font-body font-medium text-sm">Featured Project</span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-4 text-sm font-body text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      {project.type}
                    </span>
                    <span>•</span>
                    <span>{project.year}</span>
                    <span>•</span>
                    <span>{project.client}</span>
                  </div>
                  
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-balance leading-tight">
                    {project.title}
                  </h2>
                  
                  <p className="font-body text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                      Figma Design
                    </span>
                    <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                      Visual Design
                    </span>
                    <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                      Brand Identity
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-spacing px-6 bg-secondary">
        <div className="content-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-balance">
              Design Expertise
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Specialized skills and tools that bring creative visions to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Figma Mastery",
                description: "Advanced proficiency in Figma for creating stunning designs, prototypes, and design systems.",
                skills: ["UI/UX Design", "Prototyping", "Design Systems", "Component Libraries"]
              },
              {
                title: "Visual Design",
                description: "Creating compelling visual narratives through typography, color theory, and composition.",
                skills: ["Brand Identity", "Logo Design", "Print Design", "Digital Illustrations"]
              },
              {
                title: "User Experience",
                description: "Designing user-centered experiences that are both beautiful and functional.",
                skills: ["User Research", "Wireframing", "User Journey Mapping", "Accessibility"]
              }
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-clean p-6 card-hover"
              >
                <h3 className="font-heading text-xl font-bold mb-3">{skill.title}</h3>
                <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                  {skill.description}
                </p>
                <ul className="space-y-2">
                  {skill.skills.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="font-body text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing px-6 bg-primary text-white">
        <div className="content-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-balance">
              Ready to Bring Your Vision to Life?
            </h2>
            <p className="font-body text-xl text-white/90 mb-12 leading-relaxed text-balance max-w-3xl mx-auto">
              Let's collaborate to create stunning designs that tell your story and engage your audience. 
              From concept to completion, I'll help you achieve your creative goals.
            </p>
            <a
              href="mailto:ujjwalt616@gmail.com"
              className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Start Your Design Project
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white border-t">
        <div className="content-center text-center">
          <p className="font-body text-muted-foreground">
            © 2024 Ujjwal Tiwari. Crafting digital excellence with passion and precision.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Designs;
