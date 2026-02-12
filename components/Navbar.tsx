import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { NavItem } from '../types';

const Logo: React.FC<{ filter?: string }> = ({ filter }) => (
  <div className="flex items-center gap-2">
    <img 
        src="https://i.imgur.com/IPLXpTb.png" 
        alt="Chiropractic Unlimited Logo" 
        className="h-12 lg:h-16 w-auto object-contain transition-all duration-300"
        style={{ filter: filter }}
    />
  </div>
);

const NavLink: React.FC<{ item: NavItem; isScrolled: boolean }> = ({ item, isScrolled }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hasDropdown = item.children && item.children.length > 0;

  // Desktop text styling - using font-display (serif) to match reference
  const textClass = "text-white font-display text-base lg:text-lg tracking-wide hover:text-brand-accent transition-colors flex items-center gap-1 cursor-pointer";

  return (
    <div 
      className="relative group py-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a 
        href={item.href || '#'} 
        className={textClass}
        onClick={(e) => hasDropdown && e.preventDefault()} // Prevent click if it's just a dropdown toggle
      >
        {item.label}
        {hasDropdown && (
          <ChevronDown size={14} className={`transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`} />
        )}
      </a>

      {/* Dropdown Menu */}
      {hasDropdown && (
        <div className={`absolute top-full left-0 mt-2 w-56 bg-brand-primary border border-white/10 rounded-lg shadow-xl overflow-hidden transition-all duration-300 transform origin-top-left ${isHovered ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
          <div className="py-2">
            {item.children?.map((child, idx) => (
              <a
                key={idx}
                href={child.href}
                className="block px-6 py-3 text-sm text-white/90 hover:bg-white/10 hover:text-brand-accent transition-colors font-sans"
              >
                {child.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Background is transparent at top, solid brand-primary when scrolled to match the reference bar
  const navBgClass = scrolled 
    ? 'bg-brand-primary shadow-lg py-1' 
    : 'bg-transparent py-4';

  // Logo is always white/light because background is always dark (Hero is dark green)
  const logoFilter = 'brightness-0 invert';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.location.href = '#'}>
            <Logo filter={logoFilter} />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.label} item={item} isScrolled={scrolled} />
            ))}
            
            {/* Schedule Button - Styled to match reference (Light grey box) */}
            <a 
                href="#booking"
                className="bg-white/20 backdrop-blur-sm hover:bg-white hover:text-brand-primary text-white font-display text-base lg:text-lg px-6 py-3 rounded-md transition-all duration-300 shadow-sm border border-white/20 ml-6 xl:ml-8 whitespace-nowrap"
            >
                Schedule Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-brand-accent focus:outline-none transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-brand-primary transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-28 px-6 overflow-y-auto pb-10">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="border-b border-white/10 last:border-0">
               <div 
                  className="flex justify-between items-center py-4 text-xl font-display text-white"
                  onClick={() => {
                      if (item.children) {
                          setExpandedMobileItem(expandedMobileItem === item.label ? null : item.label);
                      } else {
                          window.location.href = item.href || '#';
                          setIsOpen(false);
                      }
                  }}
               >
                   {item.label}
                   {item.children && <ChevronDown size={20} className={`transition-transform ${expandedMobileItem === item.label ? 'rotate-180' : ''}`} />}
               </div>
               
               {/* Mobile Submenu */}
               {item.children && (
                   <div className={`overflow-hidden transition-all duration-300 ${expandedMobileItem === item.label ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                       <div className="pl-4 space-y-3">
                           {item.children.map((child, idx) => (
                               <a 
                                  key={idx} 
                                  href={child.href} 
                                  className="block text-white/70 hover:text-white font-sans text-base"
                                  onClick={() => setIsOpen(false)}
                                >
                                   {child.label}
                               </a>
                           ))}
                       </div>
                   </div>
               )}
            </div>
          ))}
           <a 
                href="#booking"
                className="block w-full text-center mt-8 bg-white text-brand-primary px-6 py-4 rounded-lg font-bold shadow-md uppercase tracking-wider text-sm hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
            >
                Schedule Appointment
            </a>
        </div>
      </div>
    </nav>
  );
};