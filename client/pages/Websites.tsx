import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Code2,
  Mail,
  Zap,
  Globe,
  Smartphone,
} from "lucide-react";

const Websites = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "Personal portfolio showcasing creative work and development projects. Features smooth animations, responsive design, and optimized performance. Built with modern React patterns and styled with Tailwind CSS for a clean, minimal aesthetic that focuses on user experience and accessibility.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      category: "Personal Project",
      year: "2024",
    },
  ];

  const technologies = [
    {
      category: "Frontend Development",
      icon: Globe,
      description:
        "Modern frontend technologies for exceptional user experiences",
      items: [
        "React & Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Responsive Design",
      ],
    },
    {
      category: "Performance & SEO",
      icon: Zap,
      description: "Optimized for speed, search engines, and user engagement",
      items: [
        "Core Web Vitals",
        "SEO Optimization",
        "Lighthouse Scores",
        "Bundle Optimization",
        "CDN Integration",
      ],
    },
    {
      category: "Development Tools",
      icon: Code2,
      description: "Professional development workflow and best practices",
      items: [
        "Git Version Control",
        "CI/CD Pipelines",
        "Testing Frameworks",
        "Code Quality Tools",
        "Documentation",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full nav-transparent z-50">
        <div className="content-center px-6 py-4">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="font-heading font-bold text-xl text-white hover:scale-105 transition-transform shimmer"
            >
              Ujjwal Tiwari
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="font-body text-white/80 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                to="/websites"
                className="font-body text-white font-semibold"
              >
                Websites
              </Link>
              <Link
                to="/designs"
                className="font-body text-white/80 hover:text-white transition-colors"
              >
                Designs
              </Link>
              <a href="mailto:ujjwalt616@gmail.com" className="btn-primary">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="section-spacing pt-32 px-6 hero-bg relative overflow-hidden">
        <div className="content-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors font-body glass-white px-4 py-2 text-sm hover:scale-105 shimmer rounded-full"
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
            <div className="inline-flex items-center gap-3 glass-dark text-white px-6 py-3 rounded-full mb-8 pulse-glow">
              <Code2 className="w-5 h-5" />
              <span className="font-body font-medium">
                Full-Stack Developer
              </span>
            </div>

            <h1 className="font-heading text-6xl md:text-8xl font-bold text-hero mb-8 text-balance leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-white/90 block text-glow"
              >
                Web Development
              </motion.span>
            </h1>
            <p className="font-body text-xl text-white/90 max-w-4xl mx-auto leading-relaxed text-balance">
              Creating modern, performant websites and web applications using
              cutting-edge technologies. Every project is built with
              scalability, accessibility, and user experience in mind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Stats */}
      <section className="py-16 px-6 hero-bg border-b border-white/10">
        <div className="content-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "100%", label: "Mobile Responsive" },
              { number: "A+", label: "Lighthouse Score" },
              { number: "99%", label: "Uptime Guarantee" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Display */}
      <section className="section-spacing px-6 hero-bg">
        <div className="content-center">
          <div className="max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 glass-white text-white px-6 py-3 rounded-full border border-white/20">
                      <Zap className="w-5 h-5" />
                      <span className="font-body font-medium">
                        Featured Project
                      </span>
                    </div>
                  </div>
                )}

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  {/* Project Image */}
                  <div className="card-clean overflow-hidden card-hover">
                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-8">
                    <div className="flex items-center gap-4 text-sm font-body text-white/80">
                      <span>{project.category}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                      <span>•</span>
                      <span>React Application</span>
                    </div>

                    <div>
                      <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-balance leading-tight text-white">
                        {project.title}
                      </h2>

                      <p className="font-body text-lg text-white/90 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h3 className="font-heading text-lg font-semibold mb-4 text-white">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 glass-white text-white rounded-full text-sm font-medium border border-white/20"
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
                        className="btn-primary inline-flex items-center justify-center gap-3"
                      >
                        <ExternalLink className="w-5 h-5" />
                        View Live Site
                      </a>
                      <a
                        href={project.githubUrl}
                        className="inline-flex items-center justify-center gap-3 glass-white text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 border border-white/20"
                      >
                        <Github className="w-5 h-5" />
                        View Source Code
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
      <section className="section-spacing px-6 hero-bg">
        <div className="content-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-balance text-white">
              Development Expertise
            </h2>
            <p className="font-body text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              Leveraging modern technologies and best practices to deliver
              exceptional web experiences
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-clean p-8 card-hover text-center"
              >
                <div className="w-16 h-16 glass-dark rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-white">
                  {tech.category}
                </h3>
                <p className="font-body text-white/80 mb-6 leading-relaxed">
                  {tech.description}
                </p>
                <ul className="space-y-2 text-left">
                  {tech.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                      <span className="font-body text-sm text-white">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="section-spacing px-6 hero-bg">
        <div className="content-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-balance text-white">
              Development Process
            </h2>
            <p className="font-body text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              A systematic approach to delivering high-quality web solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Understanding your goals, target audience, and technical requirements",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Creating detailed project roadmap, wireframes, and technical architecture",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "Building with modern technologies, testing, and optimization",
              },
              {
                step: "04",
                title: "Launch",
                description:
                  "Deployment, performance monitoring, and ongoing support",
              },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 glass-dark text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {phase.step}
                </div>
                <h3 className="font-heading text-lg font-bold mb-3 text-white">
                  {phase.title}
                </h3>
                <p className="font-body text-white/80 leading-relaxed text-sm">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing px-6 hero-bg text-white relative overflow-hidden">
        <div className="content-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-balance">
              Ready to Build Your Next Project?
            </h2>
            <p className="font-body text-xl text-white/90 mb-12 leading-relaxed text-balance max-w-3xl mx-auto">
              Let's create a modern, performant website that drives results.
              From concept to deployment, I'll handle every aspect of your web
              development needs.
            </p>
            <a
              href="mailto:ujjwalt616@gmail.com"
              className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Code2 className="w-5 h-5" />
              Start Your Web Project
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 hero-bg border-t border-white/10">
        <div className="content-center text-center">
          <p className="font-body text-white/80">
            © 2024 Ujjwal Tiwari. Crafting digital excellence with passion and
            precision.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Websites;
