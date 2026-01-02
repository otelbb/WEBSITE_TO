import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Button } from './ui/button';
import OrderModal from './OrderModal';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <img 
                src="https://customer-assets.emergentagent.com/job_french-tacos/artifacts/2huquivv_images.jpg" 
                alt="Tacos Only Logo" 
                className="h-14 w-14 object-contain"
              />
              <span className="text-2xl font-bold text-white">Tacos Only</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('promotions')} className="text-white/80 hover:text-white transition-colors font-medium">
                Offres
              </button>
              <button onClick={() => scrollToSection('menu')} className="text-white/80 hover:text-white transition-colors font-medium">
                Menu
              </button>
              <button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-white transition-colors font-medium">
                À Propos
              </button>
              <button onClick={() => scrollToSection('location')} className="text-white/80 hover:text-white transition-colors font-medium">
                Localisation
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-white/80 hover:text-white transition-colors font-medium">
                Avis
              </button>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                onClick={() => setOrderModalOpen(true)}
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-red-600/50"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Commander
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4 border-t border-white/10">
              <button onClick={() => scrollToSection('promotions')} className="block w-full text-left text-white/80 hover:text-white py-2 font-medium">
                Offres
              </button>
              <button onClick={() => scrollToSection('menu')} className="block w-full text-left text-white/80 hover:text-white py-2 font-medium">
                Menu
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-white/80 hover:text-white py-2 font-medium">
                À Propos
              </button>
              <button onClick={() => scrollToSection('location')} className="block w-full text-left text-white/80 hover:text-white py-2 font-medium">
                Localisation
              </button>
              <button onClick={() => scrollToSection('reviews')} className="block w-full text-left text-white/80 hover:text-white py-2 font-medium">
                Avis
              </button>
              <Button 
                onClick={() => {
                  setOrderModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Commander
              </Button>
            </div>
          )}
        </div>
      </header>

      <OrderModal open={orderModalOpen} onClose={() => setOrderModalOpen(false)} />
    </>
  );
};

export default Header;
