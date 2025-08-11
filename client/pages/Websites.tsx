import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

const Websites = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A comprehensive e-commerce solution built with modern web technologies. Features include user authentication, payment processing, inventory management, and a responsive admin dashboard. The platform handles thousands of transactions daily and provides real-time analytics.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "SaaS Dashboard",
      description: "Analytics dashboard with real-time data visualization for business intelligence. Includes customizable charts, automated reporting, and team collaboration features. Built with performance in mind to handle large datasets efficiently.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tech: ["Vue.js", "D3.js", "Express", "MongoDB", "Socket.io", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Personal portfolio showcasing creative work and development projects. Features smooth animations, responsive design, and optimized performance. Built with modern React patterns and styled with Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, file sharing, and team communication. Includes kanban boards, gantt charts, and time tracking features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      tech: ["React", "Firebase", "Material-UI", "PWA"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Weather Forecast App",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and severe weather alerts. Features clean UI design and smooth animations.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
      tech: ["React Native", "OpenWeather API", "Expo", "AsyncStorage"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Blog Platform",
      description: "Full-featured blogging platform with markdown support, SEO optimization, and content management. Includes user profiles, comments system, and social sharing.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      tech: ["Next.js", "Prisma", "PostgreSQL", "NextAuth.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-cream-50/80 backdrop-blur-sm border-b border-cream-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="font-heading font-semibold text-slate-800 text-lg hover:text-primary transition-colors"
            >
              Alex Chen
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="font-heading text-slate-600 hover:text-primary transition-colors">Home</Link>
              <Link to="/websites" className="font-heading text-primary">Websites</Link>
              <Link to="/designs" className="font-heading text-slate-600 hover:text-primary transition-colors">Designs</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-primary transition-colors font-heading"
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
            <h1 className="font-heading text-5xl md:text-6xl font-light text-slate-800 mb-6">
              Web Development
              <span className="block text-primary">Projects</span>
            </h1>
            <p className="font-body text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A collection of websites and web applications I've built, showcasing various technologies 
              and approaches to solving real-world problems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-[4/3] bg-sage-100 rounded-2xl overflow-hidden shadow-lg group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  {project.featured && (
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-heading">
                      Featured Project
                    </span>
                  )}
                  
                  <h2 className="font-heading text-3xl md:text-4xl text-slate-800 font-light">
                    {project.title}
                  </h2>
                  
                  <p className="font-body text-lg text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-sage-100 text-slate-700 rounded-lg text-sm font-heading"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-heading font-medium transition-all duration-300 hover:bg-primary/90 hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center gap-2 bg-sage-100 text-slate-700 px-6 py-3 rounded-xl font-heading font-medium transition-all duration-300 hover:bg-sage-200 hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-cream-200 bg-cream-100/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-body text-slate-600">
            © 2024 Alex Chen. Designed &amp; built with care.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Websites;
