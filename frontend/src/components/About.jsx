import React from 'react';
import { Heart, Award, Clock, ChefHat } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { restaurantInfo } from '../data/mock';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Ingrédients Frais",
      description: "Sélectionnés quotidiennement pour garantir la meilleure qualité"
    },
    {
      icon: ChefHat,
      title: "Sauce Légendaire",
      description: "Notre sauce fromagère unique, préparée selon une recette secrète"
    },
    {
      icon: Clock,
      title: "Service Rapide",
      description: "Commande prête en moins de 15 minutes, sans compromis sur la qualité"
    },
    {
      icon: Award,
      title: "Qualité Premium",
      description: "Viandes marinées maison et produits sélectionnés avec soin"
    }
  ];

  return (
    <section id="about" className="py-20 bg-neutral-950">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-4">
              <Heart className="h-4 w-4 text-red-500" />
              <span className="text-sm font-semibold text-red-500">Notre Histoire</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              La Passion du Goût Authentique
            </h2>
          </div>

          {/* Story */}
          <div className="mb-16">
            <Card className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
              <CardContent className="p-8 md:p-12">
                <p className="text-lg text-white/80 leading-relaxed mb-6">
                  {restaurantInfo.description}
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  Que vous soyez fan du <span className="text-red-500 font-bold">French Tacos</span> généreux avec sa texture unique et ses saveurs intenses, ou amateur de <span className="text-red-500 font-bold">Burgers</span> gourmets préparés avec des ingrédients de première qualité, Tacos Only est votre destination fast-food ultime à Mohammédia.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600/20 border border-red-600/30 mb-4 group-hover:bg-red-600/30 transition-colors">
                    <feature.icon className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
