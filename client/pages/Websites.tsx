import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Code2, Mail } from 'lucide-react';

const Websites = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "Personal portfolio showcasing creative work and development projects. Features smooth animations, responsive design, and optimized performance. Built with modern React patterns and styled with Tailwind CSS for a clean, minimal aesthetic that focuses on user experience and accessibility.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    }
  ];

  const technologies = [
    {
      category: "Frontend",
      icon: "💻",
      items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vite"]
    },
    {
      category: "Backend",
      icon: "⚙️",
      items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "API Design"]
    },
    {
      category: "Tools",
      icon: "🛠️",
      items: ["Git", "Figma", "VS Code", "Framer Motion", "Vercel"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-neutral-100 z-50">
        <div className="content-center px-6 py-4">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="font-heading font-bold text-xl text-neutral-900 hover:scale-105 transition-transform"
            >
              Ujjwal Tiwari
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="font-body text-neutral-500 hover:text-neutral-900 transition-colors">Home</Link>
              <Link to="/websites" className="font-body text-neutral-900 font-medium">Websites</Link>
              <Link to="/designs" className="font-body text-neutral-500 hover:text-neutral-900 transition-colors">Designs</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="section-spacing pt-32 px-6">
        <div className="content-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors font-body card-subtle px-4 py-2 rounded-xl"
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
            <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-600 px-6 py-3 rounded-full mb-8 border border-blue-200">
              <Code2 className="w-5 h-5" />
              <span className="font-body font-medium">Web Developer</span>
            </div>
            
            <h1 className="font-heading text-6xl md:text-7xl font-bold mb-6 text-neutral-900 text-balance">
              Web Development
            </h1>
            <p className="font-body text-xl text-neutral-500 max-w-4xl mx-auto leading-relaxed text-balance">
              A collection of websites and web applications I've built, showcasing modern technologies 
              and approaches to solving real-world problems with clean, efficient code.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Display */}
      <section className="pb-24 px-6">
        <div className="content-center">
          <div className="max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="text-center">
                    <div className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full border border-blue-200">
                      <span className="font-body font-medium">Featured Project</span>
                    </div>
                  </div>
                )}

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  {/* Project Image */}
                  <div className="card-subtle rounded-2xl p-6 card-hover">
                    <div className="aspect-[4/3] bg-neutral-50 rounded-xl overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-8">
                    <div>
                      <h2 className="font-heading text-4xl md:text-5xl font-bold text-neutral-900 mb-6 text-balance">
                        {project.title}
                      </h2>
                      
                      <p className="font-body text-lg text-neutral-500 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-neutral-900 mb-4">Technologies Used</h3>
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="card-subtle px-4 py-2 rounded-xl text-neutral-600 font-body text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href={project.liveUrl}
                        className="inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-blue-700 hover:scale-105 card-hover"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="inline-flex items-center justify-center gap-3 bg-white text-neutral-900 px-6 py-3 rounded-xl font-medium border border-neutral-200 transition-all duration-300 hover:border-neutral-300 hover:scale-105 card-hover"
                      >
                        <Github className="w-5 h-5" />
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-spacing px-6 bg-white">
        <div className="content-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-neutral-900 text-balance">
              Technologies I Work With
            </h2>
            <p className="font-body text-lg text-neutral-500 max-w-3xl mx-auto leading-relaxed text-balance">
              I stay current with modern web technologies to deliver cutting-edge solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {technologies.map((tech, index) => (
              <div
                key={tech.category}
                className="card-subtle rounded-2xl p-8 text-center card-hover"
              >
                <div className="text-4xl mb-6">{tech.icon}</div>
                <h3 className="font-heading text-xl font-semibold text-neutral-900 mb-4">{tech.category}</h3>
                <div className="space-y-2">
                  {tech.items.map((item) => (
                    <div key={item} className="font-body text-neutral-500">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing px-6">
        <div className="content-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-neutral-900 text-balance">
              Ready to Build Something Great?
            </h2>
            <p className="font-body text-xl text-neutral-500 mb-8 leading-relaxed text-balance">
              Let's discuss your next web project and bring your ideas to life with modern, 
              performant, and beautiful web applications.
            </p>
            <a
              href="mailto:ujjwalt616@gmail.com"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:bg-blue-700 hover:scale-105 card-hover"
            >
              <Code2 className="w-5 h-5" />
              Start a Project
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

export default Websites;
