import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Eye, Mail, Palette, Award } from "lucide-react";

const Designs = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const projects = [
    {
      id: 1,
      title: "Flipkart Startup Story",
      description:
        "Creative infographic design showcasing Flipkart's journey as a startup success story. Designed with clean modern theme and engaging visual elements including founders, product categories, and company milestones.",
      type: "Infographic Design",
      year: "2024",
      client: "Personal Project",
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2F7946648302634a1d808c7d73bb137994%2F093637ccbd3c4c5facdfebe9af660b41?format=webp&width=800",
      ],
      featured: true,
      color: "bg-gray-100",
    },
    {
      id: 2,
      title: "Genesys EP.01 - Prompt Engineering",
      description:
        "Instagram story and reel cover design for Genesys series featuring prompt engineering. Modern isometric design with purple color scheme, showcasing AI and programming concepts with floating computer screens and tech elements.",
      type: "Instagram Story Cover",
      year: "2024",
      client: "Genesys Series",
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2Fcf85a687a8f6493290063b48dba7288c%2Faa3bf730f0e9437288b14684744cd151?format=webp&width=800",
      ],
      featured: true,
      color: "bg-purple-100",
    },
    {
      id: 3,
      title: "Genesys EP.02 - OpenCV",
      description:
        "Instagram story and reel cover design for Genesys series focusing on OpenCV. Features teal/green color palette with AI brain illustration, computer vision elements, and modern geometric patterns representing machine learning and visual processing.",
      type: "Instagram Story Cover",
      year: "2024",
      client: "Genesys Series",
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2Fcf85a687a8f6493290063b48dba7288c%2F305acab3e90c4feaa864245ef7cc50a3?format=webp&width=800",
      ],
      featured: true,
      color: "bg-teal-100",
    },
    {
      id: 4,
      title: "Genesys EP.03 - Image and Video Generation",
      description:
        "Instagram story and reel cover design for Genesys series about image and video generation. Brown/orange aesthetic with retro-futuristic illustration showing a person surrounded by floating media screens and creative elements.",
      type: "Instagram Story Cover",
      year: "2024",
      client: "Genesys Series",
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2Fcf85a687a8f6493290063b48dba7288c%2Ff16a542ad06f47a091522f747bf9c1fb?format=webp&width=800",
      ],
      featured: true,
      color: "bg-orange-100",
    },
    {
      id: 5,
      title: "Eid al Adha Mubarak",
      description:
        "Traditional Islamic festival greeting design celebrating Eid al Adha. Features beautiful green gradient background with ornate Islamic lanterns, decorative crescent moon, mosque silhouettes, and elegant Arabic calligraphy in white.",
      type: "Festival Design",
      year: "2024",
      client: "Cultural Project",
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2Fcf85a687a8f6493290063b48dba7288c%2Fb86ed69a3cf24edda74a8af76ceafd3f?format=webp&width=800",
      ],
      featured: true,
      color: "bg-green-100",
    },
    {
      id: 6,
      title: "CASA - Drugs Aren't The Answer",
      description:
        "Event design for CASA awareness campaign with modern purple aesthetic. Clean layout featuring speaker information, event details, and professional presentation design for Dr. Ambedkar Auditorium event on August 13th, 2025.",
      type: "Event Design",
      year: "2024",
      client: "CASA Campaign",
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2Fcf85a687a8f6493290063b48dba7288c%2F9039d4ed14954fc2b882cbc50da2a68b?format=webp&width=800",
      ],
      featured: false,
      color: "bg-purple-200",
    },
    {
      id: 7,
      title: "Happy Krishna Janmashtami",
      description:
        "Traditional Hindu festival greeting celebrating Krishna Janmashtami. Features beautiful blue gradient background with intricate mandala patterns, colorful marigold garlands, and traditional elements including pot, peacock feathers, and ornate decorations.",
      type: "Festival Design",
      year: "2024",
      client: "Cultural Project",
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2Fcf85a687a8f6493290063b48dba7288c%2F9757deb6ec264dcc96b21fc08e01882a?format=webp&width=800",
      ],
      featured: true,
      color: "bg-blue-100",
    },
    {
      id: 8,
      title: "Ganesh Chaturthi Greeting",
      description:
        "Traditional festival greeting card design celebrating Ganesh Chaturthi with beautiful ornate patterns, warm colors, and cultural elements. Features Lord Ganesha with traditional decorative elements and festive atmosphere.",
      type: "Festival Design",
      year: "2024",
      client: "Cultural Project",
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2F7946648302634a1d808c7d73bb137994%2F9cf8a24b705e45b4b83d62fea10d59e1?format=webp&width=800",
      ],
      featured: true,
      color: "bg-gray-200",
    },
    {
      id: 9,
      title: "Father's Day Greeting Card",
      description:
        "Heartwarming Father's Day card design with modern illustration style, featuring father-child bonding theme with paper airplanes, hearts, and floral elements on a beautiful gradient background.",
      type: "Greeting Card",
      year: "2024",
      client: "Personal Project",
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2F7946648302634a1d808c7d73bb137994%2F2ba678aed90a4452be7c1bc64cdc3496?format=webp&width=800",
      ],
      featured: false,
      color: "bg-gray-300",
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
                className="font-body text-white/80 hover:text-white transition-colors"
              >
                Websites
              </Link>
              <Link
                to="/designs"
                className="font-body text-white font-semibold"
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
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300 font-body glass-white px-4 py-2 text-sm hover:scale-105 shimmer rounded-full"
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
              className="inline-flex items-center gap-3 glass-dark text-white px-6 py-3 rounded-full mb-8 pulse-glow"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Palette className="w-5 h-5" />
              </motion.div>
              <span className="font-body font-medium">
                Figma Design Specialist
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-heading text-6xl md:text-8xl font-bold text-hero mb-8 text-balance leading-tight"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-white/90 block text-glow"
              >
                Design Portfolio
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-body text-xl text-white/90 max-w-4xl mx-auto leading-relaxed text-balance"
            >
              A showcase of visual design work specializing in Figma designs,
              spanning branding, user interfaces, and digital experiences. Each
              project tells a unique story through thoughtful design decisions
              and modern visual aesthetics.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Stats */}
      <section className="py-16 px-6 hero-bg border-b border-white/10">
        <div className="content-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "60+", label: "Projects Completed" },
              { number: "5", label: "Design Categories" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "2024", label: "Current Year" },
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

      {/* Projects Gallery */}
      <section className="section-spacing px-6 hero-bg">
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
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
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
                <div
                  className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  {project.featured && (
                    <div className="inline-flex items-center gap-2 glass-white text-white px-4 py-2 rounded-full border border-white/20">
                      <Award className="w-4 h-4" />
                      <span className="font-body font-medium text-sm">
                        Featured Project
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-4 text-sm font-body text-white/80">
                    <span className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      {project.type}
                    </span>
                    <span>•</span>
                    <span>{project.year}</span>
                    <span>•</span>
                    <span>{project.client}</span>
                  </div>

                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-balance leading-tight text-white">
                    {project.title}
                  </h2>

                  <p className="font-body text-lg text-white/90 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 glass-white text-white rounded-full text-sm font-medium border border-white/20">
                      Figma Design
                    </span>
                    <span className="px-4 py-2 glass-white text-white rounded-full text-sm font-medium border border-white/20">
                      Visual Design
                    </span>
                    <span className="px-4 py-2 glass-white text-white rounded-full text-sm font-medium border border-white/20">
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
              Design Expertise
            </h2>
            <p className="font-body text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              Specialized skills and tools that bring creative visions to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Figma Mastery",
                description:
                  "Advanced proficiency in Figma for creating stunning designs, prototypes, and design systems.",
                skills: [
                  "UI/UX Design",
                  "Prototyping",
                  "Design Systems",
                  "Component Libraries",
                ],
              },
              {
                title: "Visual Design",
                description:
                  "Creating compelling visual narratives through typography, color theory, and composition.",
                skills: [
                  "Brand Identity",
                  "Logo Design",
                  "Print Design",
                  "Digital Illustrations",
                ],
              },
              {
                title: "User Experience",
                description:
                  "Designing user-centered experiences that are both beautiful and functional.",
                skills: [
                  "User Research",
                  "Wireframing",
                  "User Journey Mapping",
                  "Accessibility",
                ],
              },
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-clean p-6 card-hover"
              >
                <h3 className="font-heading text-xl font-bold mb-3 text-white">
                  {skill.title}
                </h3>
                <p className="font-body text-white/80 mb-4 leading-relaxed">
                  {skill.description}
                </p>
                <ul className="space-y-2">
                  {skill.skills.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
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
              Ready to Bring Your Vision to Life?
            </h2>
            <p className="font-body text-xl text-white/90 mb-12 leading-relaxed text-balance max-w-3xl mx-auto">
              Let's collaborate to create stunning designs that tell your story
              and engage your audience. From concept to completion, I'll help
              you achieve your creative goals.
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

export default Designs;
