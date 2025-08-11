import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Eye, Mail } from 'lucide-react';

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
      type: "Figma Design",
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
      type: "Figma Design",
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
      type: "Figma Design",
      year: "2024",
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2F7946648302634a1d808c7d73bb137994%2F2ba678aed90a4452be7c1bc64cdc3496?format=webp&width=800"
      ],
      featured: false
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
              <Link to="/websites" className="font-body text-neutral-500 hover:text-neutral-900 transition-colors">Websites</Link>
              <Link to="/designs" className="font-body text-neutral-900 font-medium">Designs</Link>
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
              <Eye className="w-5 h-5" />
              <span className="font-body font-medium">Figma Specialist</span>
            </div>
            
            <h1 className="font-heading text-6xl md:text-7xl font-bold mb-6 text-neutral-900 text-balance">
              Design Portfolio
            </h1>
            <p className="font-body text-xl text-neutral-500 max-w-4xl mx-auto leading-relaxed text-balance">
              A showcase of visual design work specializing in Figma designs, spanning branding, user interfaces, and digital experiences.
              Each project tells a unique story through thoughtful design decisions and modern visual aesthetics.
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
                    <div className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full border border-blue-200">
                      <span className="font-body font-medium">Featured Project</span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-center gap-4 text-sm font-body text-neutral-500">
                    <span className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      {project.type}
                    </span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                  
                  <h2 className="font-heading text-4xl md:text-5xl font-bold text-neutral-900 text-balance">
                    {project.title}
                  </h2>
                  
                  <p className="font-body text-lg text-neutral-500 leading-relaxed max-w-3xl mx-auto text-balance">
                    {project.description}
                  </p>
                </div>

                {/* Design Display */}
                <div className="card-subtle rounded-2xl p-8 card-hover">
                  <div className="bg-neutral-50 rounded-xl p-4">
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
      <section className="section-spacing px-6 bg-white">
        <div className="content-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-neutral-900 text-balance">
              Let's Create Something Amazing
            </h2>
            <p className="font-body text-xl text-neutral-500 mb-8 leading-relaxed text-balance">
              Ready to bring your design ideas to life? I specialize in creating stunning Figma designs
              that captivate audiences and deliver results.
            </p>
            <a
              href="mailto:ujjwalt616@gmail.com"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:bg-blue-700 hover:scale-105 card-hover"
            >
              <Eye className="w-5 h-5" />
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

export default Designs;
