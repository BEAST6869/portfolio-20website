import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Eye } from 'lucide-react';
import { useState } from 'react';

const Designs = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const projects = [
    {
      id: 1,
      title: "Brand Identity - TechStart",
      description: "Complete brand identity design for a technology startup, including logo design, color palette, typography system, and brand guidelines. The identity reflects innovation while maintaining approachability.",
      type: "Branding",
      year: "2024",
      images: [
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=600&fit=crop"
      ],
      featured: true
    },
    {
      id: 2,
      title: "Mobile App UI - FitTrack",
      description: "Clean and intuitive user interface design for a fitness tracking application. Focused on creating a motivating experience that encourages daily use through gamification and clear progress visualization.",
      type: "UI/UX Design",
      year: "2024",
      images: [
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=600&fit=crop"
      ],
      featured: true
    },
    {
      id: 3,
      title: "Website Redesign - Bella Vista",
      description: "Modern redesign for a local restaurant's online presence, focusing on showcasing their cuisine and creating an appetizing digital experience that drives reservations.",
      type: "Web Design",
      year: "2023",
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop"
      ],
      featured: false
    },
    {
      id: 4,
      title: "E-learning Platform Design",
      description: "User experience design for an online learning platform, emphasizing accessibility, clear navigation, and engaging course presentation to improve learning outcomes.",
      type: "UI/UX Design",
      year: "2023",
      images: [
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop"
      ],
      featured: false
    },
    {
      id: 5,
      title: "Packaging Design - Artisan Coffee",
      description: "Sustainable packaging design for an artisan coffee roastery, combining environmental consciousness with premium brand positioning through thoughtful material selection and typography.",
      type: "Packaging",
      year: "2023",
      images: [
        "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop"
      ],
      featured: false
    },
    {
      id: 6,
      title: "Dashboard Interface - Analytics Pro",
      description: "Data visualization dashboard interface design focusing on clarity, hierarchy, and actionable insights. Designed for power users who need to process complex information quickly.",
      type: "UI/UX Design",
      year: "2023",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop"
      ],
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
              <Link to="/websites" className="font-heading text-slate-600 hover:text-primary transition-colors">Websites</Link>
              <Link to="/designs" className="font-heading text-primary">Designs</Link>
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
              Design
              <span className="block text-primary">Portfolio</span>
            </h1>
            <p className="font-body text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A showcase of visual design work spanning branding, user interfaces, and digital experiences.
              Each project tells a unique story through thoughtful design decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Project Info */}
                <div className="text-center space-y-4">
                  {project.featured && (
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-heading">
                      Featured Project
                    </span>
                  )}
                  
                  <div className="flex items-center justify-center gap-4 text-sm font-heading text-slate-500">
                    <span>{project.type}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                  
                  <h2 className="font-heading text-3xl md:text-4xl text-slate-800 font-light">
                    {project.title}
                  </h2>
                  
                  <p className="font-body text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                    {project.description}
                  </p>
                </div>

                {/* Image Gallery */}
                <div className="grid md:grid-cols-3 gap-6">
                  {project.images.map((image, imageIndex) => (
                    <motion.div
                      key={imageIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: imageIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="group relative aspect-[4/3] bg-sage-100 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image}
                        alt={`${project.title} - Image ${imageIndex + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="max-w-4xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Project detail"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}

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

export default Designs;
