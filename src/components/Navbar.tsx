import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavLink = ({ to, children, className = '' }: { to: string; children: React.ReactNode; className?: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to || (location.pathname === '/' && to === '/');
  
  return (
    <Link 
      to={to} 
      className={`relative px-3 py-2 rounded-md transition-all duration-300 hover:text-secondary
        ${isActive ? 'text-secondary font-medium' : 'text-gray-800'} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {isActive && (
        <span className="absolute inset-0 bg-secondary/10 rounded-md -z-0"></span>
      )}
    </Link>
  );
};

interface NavbarProps {
  isDarkBackground?: boolean;
  isScrolled?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkBackground = false, isScrolled = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Premium orange and black theme
  const textColor = (isDarkBackground && !isScrolled) ? 'text-white' : 'text-slate-900';
  const logoColor = (isDarkBackground && !isScrolled) 
    ? 'text-white dark:text-white' 
    : 'text-orange-600 dark:text-orange-500 font-bold';
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-lg border-b border-orange-200/30 dark:border-orange-500/10 py-3' 
        : 'bg-white dark:bg-slate-950 py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - with premium styling */}
          <Link to="/" className="flex items-center space-x-3 group hover:opacity-80 transition-opacity">
            <div className="w-16 h-16 overflow-hidden rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg border border-orange-400/50 flex items-center justify-center flex-shrink-0">
              <img 
                src="/lovable-uploads/5c9e8331-194f-4d58-8b01-bb4dbb6018a7.png" 
                alt="Fireium AI company logo" 
                className="w-full h-full object-cover"
                width="96" height="96" loading="eager"
              />
            </div>
            <span className={`text-2xl font-bold tracking-tight ${textColor} ${logoColor}`}>
              Fireium
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                  location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) 
                    ? 'text-orange-600 dark:text-orange-500 bg-orange-50 dark:bg-orange-500/10' 
                    : isDarkBackground && !isScrolled
                    ? 'text-white hover:text-orange-300' 
                    : 'text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-500'
                }`}
              >
                {item}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="ml-4 px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-orange-500/30 bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700"
            >
              Let's Talk
            </Link>
          </nav>
          
          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 rounded-lg transition-all duration-300 focus:outline-none ${
              isDarkBackground && !isScrolled 
                ? 'text-white hover:bg-white/10' 
                : 'text-slate-900 dark:text-white hover:bg-orange-100 dark:hover:bg-orange-500/10'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-lg border-t border-orange-200/30 dark:border-orange-500/10 animate-fade-in">
          <nav className="flex flex-col space-y-2 p-4 max-w-7xl mx-auto w-full">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="px-4 py-3 rounded-lg text-slate-900 dark:text-white hover:bg-orange-100 dark:hover:bg-orange-500/10 hover:text-orange-600 dark:hover:text-orange-500 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="mt-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg flex justify-center items-center space-x-2 font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Let's Talk</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
