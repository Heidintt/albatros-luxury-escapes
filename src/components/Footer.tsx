
import { Plane } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Plane className="w-8 h-8 text-orange-500" />
              <span className="text-2xl font-bold">Wanderlust Travel</span>
            </div>
            <p className="text-gray-300 mb-4">
              Creating unforgettable travel experiences for adventurous souls worldwide. Discover the world with confidence and luxury.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-orange-400 transition-colors">Home</Link></li>
              <li><Link to="/destinations" className="hover:text-orange-400 transition-colors">Destinations</Link></li>
              <li><Link to="/services" className="hover:text-orange-400 transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-orange-400 transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Luxury Tours</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Adventure Travel</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Cultural Experiences</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Custom Packages</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <p>📧 info@wanderlusttravel.com</p>
              <p>📱 +1 (555) 123-4567</p>
              <p>📍 123 Adventure Street, Explorer City</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-orange-400 hover:text-orange-300">Facebook</a>
                <a href="#" className="text-orange-400 hover:text-orange-300">Instagram</a>
                <a href="#" className="text-orange-400 hover:text-orange-300">Twitter</a>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-700" />
        
        <div className="text-center text-gray-400">
          <p>&copy; 2024 Wanderlust Travel. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
