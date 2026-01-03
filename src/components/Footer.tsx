import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-4 mb-4 group">
              <img
                src="/US Logo - Golden.png"
                alt="Unnat Green Logo"
                className="w-16 h-16 md:w-20 md:h-20 object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-2xl"
              />
              <div>
                <span className="text-2xl md:text-3xl font-bold text-white">Unnat Green</span>
                <p className="text-xs md:text-sm text-amber-400 -mt-1">Farmland Paradise</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner in finding the perfect farmland plots for your dreams and investments.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-amber-400">Quick Links</h4>
            <div className="space-y-2">
              <a href="/#overview" className="block text-gray-400 hover:text-amber-400 transition-colors duration-200">Overview</a>
              <a href="/#reasons" className="block text-gray-400 hover:text-amber-400 transition-colors duration-200">Why Choose Us</a>
              <a href="/#perfect-for" className="block text-gray-400 hover:text-amber-400 transition-colors duration-200">Perfect For</a>
              <a href="/#contact" className="block text-gray-400 hover:text-amber-400 transition-colors duration-200">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-amber-400">Our Projects</h4>
            <div className="space-y-2">
              <Link to="/nestland-velhe" className="block text-gray-400 hover:text-amber-400 transition-colors duration-200">Nestland Velhe</Link>
              <Link to="/nestland-bhor" className="block text-gray-400 hover:text-amber-400 transition-colors duration-200">Nestland Bhor</Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-amber-400">Contact Information</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <span>7020875371</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <span>info@unnatgreen.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-1" />
                <span>Bhor & Velhe<br />Pune, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm">© 2025 Unnat Green. All rights reserved.</p>
          <div className="flex space-x-6 text-gray-500 text-sm">
            <a href="#" className="hover:text-amber-400 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
