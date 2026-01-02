import React from 'react';
import { ChevronDown, Flame } from 'lucide-react';
import { Button } from './ui/button';
import { restaurantInfo } from '../data/mock';

const Hero = ({ onOrderClick }) => {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-red-600/20 border border-red-600/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Flame className="h-4 w-4 text-red-500" />
            <span className="text-sm font-semibold text-red-500">Les Meilleurs Tacos & Burgers de Mohammédia</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight animate-fade-in-up">
            {restaurantInfo.slogan}
          </h1>

          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Savourez l'alliance parfaite entre la <span className="text-red-500 font-bold">gourmandise</span> du French Tacos et l'<span className="text-red-500 font-bold">authenticité</span> du Burger gourmet.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up delay-300">
            <Button 
              onClick={onOrderClick}
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-7 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl shadow-red-600/50 group"
            >
              Commander Maintenant
              <Flame className="ml-2 h-5 w-5 group-hover:animate-bounce" />
            </Button>
            <Button 
              onClick={scrollToMenu}
              variant="outline"
              className="bg-transparent border-2 border-white/20 hover:bg-white/10 text-white font-bold text-lg px-8 py-7 rounded-xl transition-all duration-300 hover:scale-105"
            >
              Voir le Menu
            </Button>
          </div>

          {/* Scroll indicator */}
          <button 
            onClick={scrollToMenu}
            className="inline-flex flex-col items-center space-y-2 text-white/50 hover:text-white/80 transition-colors animate-bounce"
          >
            <span className="text-sm font-medium">Découvrez nos offres</span>
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Hero;
