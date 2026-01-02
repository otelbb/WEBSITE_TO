import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { promotions } from '../data/mock';

const Promotions = ({ onOrderClick }) => {
  return (
    <section id="promotions" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-4">
            <Sparkles className="h-4 w-4 text-red-500" />
            <span className="text-sm font-semibold text-red-500">Économisez Maintenant</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Offres du Moment
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Profitez de nos promotions exclusives et économisez sur vos plats préférés
          </p>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {promotions.map((promo, index) => (
            <Card 
              key={promo.id}
              className="group bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-red-600/50 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/20"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <CardContent className="p-0">
                {/* Image placeholder - REMPLACEZ PAR VOS IMAGES */}
                <div className="relative h-48 bg-gradient-to-br from-red-600/20 to-red-900/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Sparkles className="h-12 w-12 text-red-500/50 mx-auto mb-2" />
                      <p className="text-xs text-white/40">Image à ajouter</p>
                    </div>
                  </div>
                  {promo.discount && (
                    <Badge className="absolute top-4 right-4 bg-red-600 text-white font-bold text-lg px-3 py-1">
                      -{promo.discount}
                    </Badge>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                    {promo.title}
                  </h3>
                  <p className="text-white/60 mb-4">{promo.description}</p>
                  
                  {promo.originalPrice && promo.discountPrice && (
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-2xl font-bold text-red-500">{promo.discountPrice} DH</span>
                      <span className="text-lg text-white/40 line-through">{promo.originalPrice} DH</span>
                    </div>
                  )}

                  <Button 
                    onClick={onOrderClick}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold group-hover:scale-105 transition-transform"
                  >
                    Commander
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
