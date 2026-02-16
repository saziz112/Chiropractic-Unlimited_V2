import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { NavItem } from '../types';
import { Link, useLocation, useNavigate } from 'react-router-dom';

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

const NavLink: React.FC<{ item: NavItem; isScrolled: boolean; closeMenu?: () => void }> = ({ item, isScrolled, closeMenu }) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const hasDropdown = item.children && item.children.length > 0;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') || href.startsWith('/#')) {
      e.preventDefault();
      const hash = href.startsWith('/#') ? href.slice(1) : href;
      if (location.pathname !== '/') {
        navigate('/' + hash);
      } else {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      closeMenu?.();
    } else if (hasDropdown) {
      e.preventDefault();
    } else {
      closeMenu?.();
    }
  };

  const textClass = "text-white font-display text-base lg:text-lg font-medium tracking-wide hover:text-brand-accent transition-all duration-200 flex items-center gap-1 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-sm";

  return (
    <div
      className="relative group py-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {item.href?.startsWith('#') || item.href?.startsWith('/#') ? (
        <a
          href={item.href}
          className={textClass}
          onClick={(e) => handleLinkClick(e, item.href!)}
        >
          {item.label}
          {hasDropdown && (
            <ChevronDown size={14} className={`transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`} />
          )}
        </a>
      ) : (
        <Link
          to={item.href || '#'}
          className={textClass}
          onClick={(e: any) => hasDropdown ? e.preventDefault() : closeMenu?.()}
        >
          {item.label}
          {hasDropdown && (
            <ChevronDown size={14} className={`transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`} />
          )}
        </Link>
      )}

      {/* Dropdown Menu */}
      {hasDropdown && (
        <div className={`absolute top-full left-0 mt-2 w-56 bg-brand-primary border border-white/10 rounded-lg shadow-xl overflow-hidden transition-all duration-300 transform origin-top-left ${isHovered ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
          <div className="py-2">
            {item.children?.map((child, idx) => (
              child.href.startsWith('#') || child.href.startsWith('/#') ? (
                <a
                  key={idx}
                  href={child.href}
                  className="block px-6 py-3 text-sm text-white/90 hover:bg-white/10 hover:text-brand-accent transition-all duration-200 font-sans cursor-pointer focus:bg-white/10 focus:text-brand-accent outline-none"
                  onClick={(e) => handleLinkClick(e, child.href)}
                >
                  {child.label}
                </a>
              ) : (
                <Link
                  key={idx}
                  to={child.href}
                  className="block px-6 py-3 text-sm text-white/90 hover:bg-white/10 hover:text-brand-accent transition-all duration-200 font-sans cursor-pointer focus:bg-white/10 focus:text-brand-accent outline-none"
                  onClick={() => closeMenu?.()}
                >
                  {child.label}
                </Link>
              )
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
  const location = useLocation();
  const navigate = useNavigate();

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
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${navBgClass}`}
      aria-label="Main Navigation"
    >
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
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname !== '/') {
                  navigate('/#booking');
                } else {
                  const element = document.getElementById('booking');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
            >
              Schedule Appointment
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-brand-accent focus:outline-none transition-all duration-200 p-2 cursor-pointer"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={isOpen}
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
                  } else if (item.href?.startsWith('#')) {
                    const href = item.href;
                    if (location.pathname !== '/') {
                      navigate('/' + href);
                    } else {
                      const element = document.getElementById(href.replace('#', ''));
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                    setIsOpen(false);
                  } else {
                    navigate(item.href || '/');
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
                      child.href.startsWith('#') ? (
                        <a
                          key={idx}
                          href={child.href}
                          className="block text-white/70 hover:text-white font-sans text-base"
                          onClick={(e) => {
                            e.preventDefault();
                            if (location.pathname !== '/') {
                              navigate('/' + child.href);
                            } else {
                              const element = document.getElementById(child.href.replace('#', ''));
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                              }
                            }
                            setIsOpen(false);
                          }}
                        >
                          {child.label}
                        </a>
                      ) : (
                        <Link
                          key={idx}
                          to={child.href}
                          className="block text-white/70 hover:text-white font-sans text-base"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                      )
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