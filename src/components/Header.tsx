import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

export default function Header({ scrolled }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4 group">
            <img
              src="/US Logo - Golden.png"
              alt="Unnat Green Logo"
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-2xl"
            />
            <div>
              <span className={`text-2xl md:text-3xl lg:text-4xl font-bold transition-colors duration-300 ${scrolled ? 'text-amber-900' : 'text-amber-900'}`}>
                Unnat Green
              </span>
              <p className={`text-xs md:text-sm -mt-1 transition-colors duration-300 ${scrolled ? 'text-amber-700' : 'text-amber-700'}`}>
                Farmland Paradise
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/#overview" className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium">Overview</a>

            <div
              className="relative group"
              onMouseEnter={() => setIsProjectsOpen(true)}
              onMouseLeave={() => setIsProjectsOpen(false)}
            >
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium py-2"
              >
                <span>Our Projects</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isProjectsOpen && (
                <div className="absolute top-full left-0 pt-2 w-56 z-50">
                  <div className="bg-white rounded-2xl shadow-2xl border-2 border-amber-200 py-2">
                    <Link
                      to="/nestland-velhe"
                      className="block px-6 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200 font-medium"
                      onClick={() => setIsProjectsOpen(false)}
                    >
                      Nestland Velhe
                    </Link>
                    <Link
                      to="/nestland-bhor"
                      className="block px-6 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200 font-medium"
                      onClick={() => setIsProjectsOpen(false)}
                    >
                      Nestland Bhor
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <a href="/#reasons" className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium">Why Choose Us</a>
            <a href="/#contact" className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium">Contact</a>
            <a href="tel:7020875371" className="px-6 py-3 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-full font-medium hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105">
              Call Now
            </a>
          </div>

          <button
            className="md:hidden text-amber-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 space-y-4">
            <a href="/#overview" className="block text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium py-2">Overview</a>

            <div>
              <button
                className="flex items-center justify-between w-full text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsProjectsOpen(!isProjectsOpen)}
              >
                <span>Our Projects</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProjectsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isProjectsOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    to="/nestland-velhe"
                    className="block text-gray-600 hover:text-amber-600 transition-colors duration-200 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Nestland Velhe
                  </Link>
                  <Link
                    to="/nestland-bhor"
                    className="block text-gray-600 hover:text-amber-600 transition-colors duration-200 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Nestland Bhor
                  </Link>
                </div>
              )}
            </div>

            <a href="/#reasons" className="block text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium py-2">Why Choose Us</a>
            <a href="/#contact" className="block text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <a href="tel:7020875371" className="block w-full text-center px-6 py-3 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-full font-medium" onClick={() => setIsMenuOpen(false)}>
              Call Now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
