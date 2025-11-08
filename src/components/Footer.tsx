
import { Link } from 'react-router-dom';
import { Coffee, Twitter, Instagram, Linkedin, Github, Heart, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <footer className="bg-white dark:bg-slate-950 pt-16 pb-8 relative border-t border-orange-200/30 dark:border-orange-500/10">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-bg opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          <motion.div className="space-y-4" variants={fadeInUpVariants}>
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 overflow-hidden rounded-xl bg-white dark:bg-white transition-all duration-300 group-hover:shadow-lg border border-slate-200/50 dark:border-slate-300/50 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/5c9e8331-194f-4d58-8b01-bb4dbb6018a7.png" 
                  alt="Fireium company logo" 
                  className="w-full h-full object-cover"
                  width="48" height="48" loading="lazy"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                <span className="text-orange-600 dark:text-orange-500">Fireium</span>
              </span>
            </Link>
            
            <p className="text-slate-600 dark:text-slate-400">
              Fueling innovation, one line of code at a time. We blend technology expertise with creative thinking to deliver exceptional digital solutions.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-orange-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-orange-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-orange-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-orange-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUpVariants}>
            <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { text: "Home", link: "/" },
                { text: "About Us", link: "/about" },
                { text: "Services", link: "/services" },
                { text: "Portfolio", link: "/portfolio" },
                { text: "Contact", link: "/contact" },
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.link}
                    className="text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-500 transition-colors flex items-center group"
                  >
                    <span className="w-0 h-[1px] bg-orange-600 dark:bg-orange-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={fadeInUpVariants}>
            <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Services</h3>
            <ul className="space-y-3">
              {[
                { text: "Custom Software", link: "/services#software" },
                { text: "Mobile Apps", link: "/services#mobile" },
                { text: "Web Development", link: "/services#web" },
                { text: "Cloud Solutions", link: "/services#cloud" },
                { text: "Data Analytics", link: "/services#data" },
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.link}
                    className="text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-500 transition-colors flex items-center group"
                  >
                    <span className="w-0 h-[1px] bg-orange-600 dark:bg-orange-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={fadeInUpVariants}>
            <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:hello@caffeinecoders.com"
                  className="flex items-center text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-500 transition-colors"
                >
                  <Mail className="mr-2 h-5 w-5 text-orange-600 dark:text-orange-500" />
                 caffeinecoders.sl@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+94767319134"
                  className="flex items-center text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-500 transition-colors"
                >
                  <Phone className="mr-2 h-5 w-5 text-orange-600 dark:text-orange-500" />
                  +94 76 731 9134
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        
        <div className="pt-8 border-t border-orange-200/30 dark:border-orange-500/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 dark:text-slate-500 text-sm">
              &copy; {currentYear} Fireium. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
