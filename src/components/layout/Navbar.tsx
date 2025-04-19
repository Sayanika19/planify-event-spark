
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 shadow-sm w-full z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-heading font-bold bg-clip-text text-transparent bg-purple-gradient">
              Planify
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-gray-700 hover:text-planify-500 transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-planify-500 transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-planify-500 transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-planify-500 transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" className="border-planify-400 text-planify-600 hover:bg-planify-50">
              Log In
            </Button>
            <Button className="bg-planify-500 hover:bg-planify-600 text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} className="p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 md:hidden animate-fade-in">
            <div className="flex flex-col space-y-4 py-3">
              <Link 
                to="/features" 
                className="text-gray-700 hover:text-planify-500 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="/pricing" 
                className="text-gray-700 hover:text-planify-500 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-planify-500 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-planify-500 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <hr className="my-2" />
              <div className="flex flex-col space-y-3 px-4">
                <Button variant="outline" className="border-planify-400 text-planify-600 w-full">
                  Log In
                </Button>
                <Button className="bg-planify-500 hover:bg-planify-600 text-white w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
