import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ExternalLink,
  Github,
  Mail,
  Award,
  Star,
  Users,
  Code,
  Palette,
} from "lucide-react";

const Index = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
  };

  const slideInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const rotateIn = {
    initial: { opacity: 0, rotate: -10, scale: 0.8 },
    animate: { opacity: 1, rotate: 0, scale: 1 },
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
  };

  const awards = [
    { icon: Award, text: "Top Rated Designer" },
    { icon: Star, text: "5.0 Rating" },
    { icon: Users, text: "50+ Projects" },
    { icon: Code, text: "Modern Stack" },
  ];

  const services = [
    {
      icon: Palette,
      title: "Figma Design",
      description:
        "Creating stunning visual designs that tell compelling stories and drive engagement through thoughtful user experience.",
      features: [
        "Brand Identity",
        "UI/UX Design",
        "Prototyping",
        "Design Systems",
      ],
    },
    {
      icon: Code,
      title: "Web Development",
      description:
        "Building modern, performant websites and applications using cutting-edge technologies and best practices.",
      features: [
        "React Development",
        "TypeScript",
        "Responsive Design",
        "Performance Optimization",
      ],
    },
  ];

  const featuredWork = [
    {
      title: "Flipkart Startup Story",
      category: "Infographic Design",
      description:
        "Creative visual storytelling showcasing the journey of India's largest e-commerce platform.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F7946648302634a1d808c7d73bb137994%2F093637ccbd3c4c5facdfebe9af660b41?format=webp&width=600",
      link: "/designs",
    },
    {
      title: "Festival Greeting Cards",
      category: "Visual Design",
      description:
        "Traditional and modern greeting card designs for various cultural celebrations.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F7946648302634a1d808c7d73bb137994%2F9cf8a24b705e45b4b83d62fea10d59e1?format=webp&width=600",
      link: "/designs",
    },
    {
      title: "Portfolio Website",
      category: "Web Development",
      description:
        "Modern, responsive portfolio showcasing creative work with smooth animations.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      link: "/websites",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full nav-transparent z-50"
      >
        <div className="content-center px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="font-heading font-bold text-xl text-white shimmer"
            >
              Ujjwal Tiwari
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="font-body text-white/80 hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="font-body text-white/80 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#work"
                className="font-body text-white/80 hover:text-white transition-colors"
              >
                Work
              </a>
              <a href="#contact" className="btn-primary">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center justify-center px-6 relative">
        <div className="content-center text-center">
          {/* Awards Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-12"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-white/90 text-sm font-medium mb-6 tracking-wider uppercase shimmer"
            >
              #1 Most Recommended Designer & Developer
            </motion.p>
            <div className="flex justify-center items-center gap-8 mb-8">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.3, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.6 + index * 0.15,
                    ease: [0.6, -0.05, 0.01, 0.99],
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                    transition: { duration: 0.2 },
                  }}
                  className="awards-badge rounded-full p-3 float pulse-glow"
                  style={{
                    animationDelay: `${index * 0.5}s`,
                  }}
                >
                  <award.icon className="w-6 h-6 text-white" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-6xl md:text-8xl font-bold text-hero mb-8 text-balance leading-tight"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="block"
              >
                We Create
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-gradient-rainbow block text-glow"
              >
                Digital Leaders
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="font-body text-xl md:text-2xl text-white/90 mb-16 max-w-2xl mx-auto leading-relaxed"
            >
              on every creative platform
            </motion.p>
          </motion.div>

          {/* Bottom Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-12 left-6 right-6"
          >
            <div className="content-center flex justify-between items-end text-white/80 text-sm">
              <div>
                <p className="font-medium">Creative design & development</p>
                <p>crafting digital experiences for modern brands</p>
              </div>
              <div className="text-right">
                <p className="font-medium">2 Global Services</p>
                <p>Design & Development</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="section-spacing px-6 hero-bg relative"
      >
        <div className="content-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="font-heading text-4xl md:text-6xl font-bold mb-6 text-balance text-gradient-primary"
            >
              What We Do
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Combining creative design with technical expertise to deliver
              exceptional digital experiences
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{
                  opacity: 0,
                  y: 50,
                  rotate: index % 2 === 0 ? -5 : 5,
                }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="card-clean p-8 card-hover relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-gray-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <motion.div
                  className={`w-16 h-16 ${index === 0 ? "glass-dark" : "glass-medium"} rounded-2xl flex items-center justify-center mb-6 relative z-10 float`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="font-heading text-2xl font-bold mb-4 relative z-10">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6 relative z-10">
                  {service.description}
                </p>
                <ul className="space-y-3 relative z-10">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.2 + featureIndex * 0.1,
                      }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <motion.div
                        className="w-2 h-2 bg-glass-medium rounded-full"
                        whileHover={{ scale: 2 }}
                        transition={{ duration: 0.2 }}
                      ></motion.div>
                      <span className="font-body text-foreground">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section
        id="work"
        className="section-spacing px-6 work-bg relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-black/5 rounded-full blur-3xl float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl float-delayed"></div>
        </div>

        <div className="content-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="font-heading text-4xl md:text-6xl font-bold mb-6 text-balance text-gradient-primary"
            >
              Featured Work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              A selection of our best projects showcasing creativity and
              technical excellence
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredWork.map((work, index) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, y: 60, rotate: (index - 1) * 5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -15,
                  scale: 1.03,
                  rotate: (index - 1) * 2,
                  transition: { duration: 0.4 },
                }}
                className="card-clean overflow-hidden card-hover group relative"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-black/20 to-gray-600/20 overflow-hidden relative">
                  <motion.img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6 relative">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                    className={`inline-block px-3 py-1 ${
                      index === 0
                        ? "bg-yellow-500 text-white"
                        : index === 1
                          ? "bg-orange-500 text-white"
                          : "bg-blue-500 text-white"
                    } rounded-full text-sm font-medium mb-3`}
                  >
                    {work.category}
                  </motion.span>
                  <h3 className="font-heading text-xl font-bold mb-3">
                    {work.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed mb-4">
                    {work.description}
                  </p>
                  <Link
                    to={work.link}
                    className="inline-flex items-center gap-2 text-black font-medium hover:gap-4 transition-all duration-300 group/link"
                  >
                    View Project
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-spacing px-6 bg-surface-2">
        <div className="content-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-balance">
                Creating Digital Excellence
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                I specialize in bridging the gap between design and development,
                creating digital experiences that are both visually stunning and
                technically robust. With expertise in Figma design and modern
                web technologies, I help brands tell their stories through
                thoughtful digital solutions.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                From initial concept to final deployment, I ensure every project
                is crafted with attention to detail, user experience, and
                performance optimization.
              </p>
              <a
                href="mailto:ujjwalt616@gmail.com"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Let's Work Together
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card-clean p-8"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold">
                      Design Expertise
                    </h3>
                    <p className="text-muted-foreground">
                      Figma specialist with 50+ projects
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold">
                      Development Skills
                    </h3>
                    <p className="text-muted-foreground">
                      Modern React & TypeScript
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold">
                      Quality Focused
                    </h3>
                    <p className="text-muted-foreground">
                      Pixel-perfect execution
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="section-spacing px-6 glass-dark text-white relative overflow-hidden"
      >
        {/* Animated background patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent rotate-12 transform -translate-x-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl float"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl bounce-subtle"></div>
        </div>

        <div className="content-center text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="font-heading text-4xl md:text-6xl font-bold mb-6 text-balance shimmer"
            >
              Ready to Create Something Amazing?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="font-body text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Let's discuss your project and bring your vision to life with
              exceptional design and development.
            </motion.p>
            <motion.a
              href="mailto:ujjwalt616@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 glass-white text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 pulse-glow"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Mail className="w-5 h-5" />
              </motion.div>
              Start Your Project
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-surface-3 border-t border-border">
        <div className="content-center text-center">
          <p className="font-body text-muted-foreground">
            © 2024 Ujjwal Tiwari. Crafting digital excellence with passion and
            precision.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
