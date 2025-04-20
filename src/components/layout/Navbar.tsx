
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white py-4 shadow-sm w-full z-50 sticky top-0">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-heading font-bold bg-clip-text text-transparent bg-purple-gradient">
              Planify
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-planify-500 transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-planify-500 transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-planify-500 transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-planify-500 transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <Link to="/cart">
              <Button variant="outline" className="border-planify-400 text-planify-600 hover:bg-planify-50 flex items-center gap-2">
                <ShoppingCart className="h-4 w-4" />
                Cart
              </Button>
            </Link>
            <Button 
              onClick={() => scrollToSection('features')}
              className="bg-planify-500 hover:bg-planify-600 text-white"
            >
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
              <button 
                onClick={() => {
                  scrollToSection('features');
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-planify-500 transition-colors px-4 py-2"
              >
                Features
              </button>
              <button 
                onClick={() => {
                  scrollToSection('pricing');
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-planify-500 transition-colors px-4 py-2"
              >
                Pricing
              </button>
              <button 
                onClick={() => {
                  scrollToSection('about');
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-planify-500 transition-colors px-4 py-2"
              >
                About Us
              </button>
              <button 
                onClick={() => {
                  scrollToSection('contact');
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-planify-500 transition-colors px-4 py-2"
              >
                Contact
              </button>
              <hr className="my-2" />
              <div className="flex flex-col space-y-3 px-4">
                <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="border-planify-400 text-planify-600 w-full flex items-center gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Cart
                  </Button>
                </Link>
                <Button 
                  className="bg-planify-500 hover:bg-planify-600 text-white w-full"
                  onClick={() => {
                    scrollToSection('features');
                    setIsMenuOpen(false);
                  }}
                >
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
