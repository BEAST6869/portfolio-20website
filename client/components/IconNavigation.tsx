import { motion } from "framer-motion";
import { User, Star, Palette, Code } from "lucide-react";
import { Link } from "react-router-dom";

interface NavItem {
  icon: React.ComponentType<any>;
  label: string;
  href?: string;
  to?: string;
  onClick?: () => void;
}

const IconNavigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems: NavItem[] = [
    {
      icon: User,
      label: "About Me",
      onClick: () => scrollToSection("about"),
    },
    {
      icon: Star,
      label: "Services",
      onClick: () => scrollToSection("services"),
    },
    {
      icon: Palette,
      label: "Design",
      to: "/designs",
    },
    {
      icon: Code,
      label: "Web Development",
      to: "/websites",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.5 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col gap-6"
    >
      {navItems.map((item, index) => {
        const IconComponent = item.icon;
        
        const iconButton = (
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              scale: 1.2, 
              rotate: 10,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.9 }}
            className="group relative"
          >
            <motion.div
              className="w-16 h-16 glass-dark rounded-full flex items-center justify-center cursor-pointer 
                         border border-white/20 backdrop-blur-md
                         hover:bg-white/10 transition-all duration-300
                         pulse-glow"
              whileHover={{
                boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)",
              }}
            >
              <IconComponent className="w-7 h-7 text-white group-hover:text-white transition-colors duration-300" />
            </motion.div>
            
            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: -10, scale: 0.8 }}
              whileHover={{ opacity: 1, x: 0, scale: 1 }}
              className="absolute left-20 top-1/2 transform -translate-y-1/2 
                         bg-black/90 backdrop-blur-md text-white px-4 py-2 rounded-lg
                         border border-white/20 font-medium text-sm whitespace-nowrap
                         pointer-events-none z-10"
            >
              {item.label}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 
                              w-2 h-2 bg-black/90 rotate-45 border-l border-b border-white/20"></div>
            </motion.div>
          </motion.div>
        );

        if (item.to) {
          return (
            <Link key={index} to={item.to}>
              {iconButton}
            </Link>
          );
        }

        return (
          <div key={index} onClick={item.onClick}>
            {iconButton}
          </div>
        );
      })}
    </motion.nav>
  );
};

export default IconNavigation;
