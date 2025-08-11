import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Figma } from 'lucide-react';

const Designs = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const glassHover = {
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" }
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
      featured: true,
      color: "purple"
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
      featured: true,
      color: "blue"
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
      featured: false,
      color: "pink"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full glass-nav z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="font-heading font-bold text-xl text-gradient hover:scale-105 transition-transform"
            >
              Ujjwal Tiwari
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="font-heading text-white/80 hover:text-white transition-colors">Home</Link>
              <Link to="/websites" className="font-heading text-white/80 hover:text-white transition-colors">Websites</Link>
              <Link to="/designs" className="font-heading text-white">Designs</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors font-heading glass-card px-4 py-2 rounded-xl"
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
            <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-2xl mb-8">
              <Figma className="w-6 h-6 text-purple-400" />
              <span className="font-heading text-white/80">Figma Specialist</span>
            </div>
            
            <h1 className="font-heading text-6xl md:text-7xl font-bold mb-6 text-gradient">
              Design Portfolio
            </h1>
            <p className="font-body text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              A showcase of visual design work specializing in Figma designs, spanning branding, user interfaces, and digital experiences.
              Each project tells a unique story through thoughtful design decisions and modern visual aesthetics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="pb-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Project Info */}
                <div className="text-center mb-12">
                  {project.featured && (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-block glass-card px-4 py-2 rounded-xl mb-6"
                    >
                      <span className="text-gradient font-heading font-semibold">Featured Project</span>
                    </motion.div>
                  )}
                  
                  <div className="flex items-center justify-center gap-4 text-sm font-heading text-white/60 mb-4">
                    <span className="flex items-center gap-2">
                      <Figma className="w-4 h-4" />
                      {project.type}
                    </span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                  
                  <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
                    {project.title}
                  </h2>
                  
                  <p className="font-body text-lg text-white/70 leading-relaxed max-w-4xl mx-auto">
                    {project.description}
                  </p>
                </div>

                {/* Design Display */}
                <motion.div
                  whileHover={glassHover}
                  className={`glass-card rounded-3xl overflow-hidden p-8 hover:glow-${project.color} transition-all duration-500`}
                >
                  <div className="bg-white/5 rounded-2xl overflow-hidden">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-12 rounded-3xl"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Let's Create Something Amazing
            </h2>
            <p className="font-body text-xl text-white/70 mb-8 leading-relaxed">
              Ready to bring your design ideas to life? I specialize in creating stunning Figma designs
              that captivate audiences and deliver results.
            </p>
            <motion.a
              href="mailto:ujjwalt616@gmail.com"
              whileHover={glassHover}
              className="inline-flex items-center gap-3 glass-card px-8 py-4 rounded-2xl font-heading font-semibold transition-all duration-300 hover:glow-purple text-white"
            >
              <Figma className="w-5 h-5" />
              Start a Project
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

export default Designs;
