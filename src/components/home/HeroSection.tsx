import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const HeroSection = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern bg-no-repeat bg-cover opacity-50"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight">
              Plan Your Perfect Event with <span className="bg-clip-text text-transparent bg-purple-gradient">AI-Powered</span> Assistance
            </h1>
            <p className="text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
              Planify simplifies event planning with vendor matching, budget management, and seamless collaboration—all in one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="bg-planify-500 hover:bg-planify-600 text-white px-8 py-6 text-lg h-auto"
                onClick={scrollToFeatures}
              >
                Get Started
              </Button>
              <Link to="/cart">
                <Button 
                  variant="outline" 
                  className="border-planify-400 text-planify-600 hover:bg-planify-50 px-8 py-6 text-lg h-auto flex items-center gap-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  View Cart
                </Button>
              </Link>
            </div>
            <div className="pt-4 text-gray-500">
              <p className="text-sm">Trusted by 10,000+ event planners worldwide</p>
            </div>
          </div>
          <div className="relative animate-float hidden lg:block">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-planify-100 rounded-full filter blur-3xl opacity-30"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-planify-200 rounded-full filter blur-3xl opacity-30"></div>
            <div className="relative z-10 bg-white rounded-xl shadow-xl p-6 transform -rotate-1">
              <div className="relative">
                <div className="absolute -top-6 -right-6 bg-planify-400 text-white text-sm font-medium px-3 py-1 rounded-full shadow-lg">
                  AI-Powered
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-planify-50 p-4 rounded-lg">
                    <h3 className="font-semibold">Budget Tracker</h3>
                    <div className="flex justify-between mt-2">
                      <div className="w-1/2 bg-gray-200 rounded-full h-2.5">
                        <div className="bg-planify-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                      <span className="text-xs text-gray-600">$7,000/$10,000</span>
                    </div>
                  </div>
                  <div className="bg-planify-50 p-4 rounded-lg">
                    <h3 className="font-semibold">Tasks</h3>
                    <div className="flex justify-between mt-2">
                      <div className="w-1/2 bg-gray-200 rounded-full h-2.5">
                        <div className="bg-planify-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                      <span className="text-xs text-gray-600">12/20 done</span>
                    </div>
                  </div>
                  <div className="col-span-2 bg-planify-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Suggested Vendors</h3>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 bg-planify-300 rounded-full"></div>
                      <div className="w-8 h-8 bg-planify-400 rounded-full"></div>
                      <div className="w-8 h-8 bg-planify-500 rounded-full"></div>
                      <div className="w-8 h-8 border border-planify-300 text-xs flex items-center justify-center rounded-full">+5</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-planify-100 rounded-lg border border-planify-200">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-planify-500 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs">AI</div>
                    <div>
                      <p className="text-sm text-gray-700">I've found 3 venues matching your criteria. Would you like to see them?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
