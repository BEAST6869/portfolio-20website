import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Eye, Mail, ChevronDown } from 'lucide-react';

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
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2F7946648302634a1d808c7d73bb137994%2F093637ccbd3c4c5facdfebe9af660b41?format=webp&width=800"
      ],
      featured: true
    },
    {
      id: 2,
      title: "Ganesh Chaturthi Greeting",
      description: "Traditional festival greeting card design celebrating Ganesh Chaturthi with beautiful ornate patterns, warm colors, and cultural elements. Features Lord Ganesha with traditional decorative elements and festive atmosphere.",
      type: "Festival Design",
      year: "2024",
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2F7946648302634a1d808c7d73bb137994%2F9cf8a24b705e45b4b83d62fea10d59e1?format=webp&width=800"
      ],
      featured: true
    },
    {
      id: 3,
      title: "Father's Day Greeting Card",
      description: "Heartwarming Father's Day card design with modern illustration style, featuring father-child bonding theme with paper airplanes, hearts, and floral elements on a beautiful gradient background.",
      type: "Greeting Card",
      year: "2024",
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2F7946648302634a1d808c7d73bb137994%2F2ba678aed90a4452be7c1bc64cdc3496?format=webp&width=800"
      ],
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Navigation - Smoothbot style */}
      <nav className="fixed top-0 w-full nav-dark z-50">
        <div className="content-center px-6 py-4">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="font-heading font-bold text-2xl text-white tracking-wider hover:scale-105 transition-transform"
            >
              UJJWAL
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="font-body text-text-secondary hover:text-white transition-colors uppercase text-sm tracking-wide">Home</Link>
              <Link to="/websites" className="font-body text-text-secondary hover:text-white transition-colors uppercase text-sm tracking-wide">Websites</Link>
              <Link to="/designs" className="font-body text-orange-500 font-medium uppercase text-sm tracking-wide">Designs</Link>
              <ChevronDown className="w-4 h-4 text-text-secondary" />
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
              className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors font-body card-dark px-4 py-2 rounded-xl text-sm uppercase tracking-wide"
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
            <div className="inline-flex items-center gap-3 bg-orange-500/10 text-orange-500 px-6 py-3 rounded-full mb-8 border border-orange-500/20">
              <Eye className="w-5 h-5" />
              <span className="font-body font-medium uppercase text-sm tracking-wide">Figma Specialist</span>
            </div>
            
            <h1 className="font-heading text-6xl md:text-7xl font-light mb-6 text-white text-balance leading-tight">
              Design Portfolio
            </h1>
            <p className="font-body text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed text-balance">
              A showcase of visual design work specializing in Figma designs, spanning branding, user interfaces, and digital experiences.
              Each project tells a unique story through thoughtful design decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="pb-24 px-6">
        <div className="content-center">
          <div className="space-y-24 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Project Info */}
                <div className="text-center space-y-6">
                  {project.featured && (
                    <div className="inline-block bg-orange-500/10 text-orange-500 px-4 py-2 rounded-full border border-orange-500/20">
                      <span className="font-body font-medium uppercase text-sm tracking-wide">Featured Project</span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-center gap-4 text-sm font-body text-text-muted uppercase tracking-wide">
                    <span className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      {project.type}
                    </span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                  
                  <h2 className="font-heading text-4xl md:text-5xl font-light text-white text-balance leading-tight">
                    {project.title}
                  </h2>
                  
                  <p className="font-body text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto text-balance">
                    {project.description}
                  </p>
                </div>

                {/* Design Display */}
                <div className="card-dark p-8 card-hover">
                  <div className="bg-gray-900/50 rounded-xl p-4">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="font-heading text-4xl md:text-5xl font-light mb-6 text-white text-balance">
              Let's Create Something Amazing
            </h2>
            <p className="font-body text-xl text-text-secondary mb-8 leading-relaxed text-balance">
              Ready to bring your design ideas to life? I specialize in creating stunning Figma designs
              that captivate audiences and deliver results.
            </p>
            <a
              href="mailto:ujjwalt616@gmail.com"
              className="inline-flex items-center gap-3 bg-orange-500 text-white px-8 py-4 rounded-xl font-body font-medium transition-all duration-300 hover:bg-orange-600 hover:scale-105 card-hover uppercase tracking-wide text-sm"
            >
              <Eye className="w-5 h-5" />
              Start a Project
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

export default Designs;
