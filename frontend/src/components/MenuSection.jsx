import React, { useState } from 'react';
import { UtensilsCrossed, Star, ImageIcon } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { menuItems } from '../data/mock';

const MenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('tacos');

  const categories = [
    { id: 'tacos', name: 'Tacos', icon: UtensilsCrossed, items: menuItems.tacos },
    { id: 'burgers', name: 'Burgers', icon: UtensilsCrossed, items: menuItems.burgers },
    { id: 'supplements', name: 'Suppléments', icon: UtensilsCrossed, items: menuItems.supplements },
    { id: 'boissons', name: 'Boissons', icon: UtensilsCrossed, items: menuItems.boissons }
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-black to-neutral-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-4">
            <UtensilsCrossed className="h-4 w-4 text-red-500" />
            <span className="text-sm font-semibold text-red-500">Notre Sélection</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Découvrez Notre Menu
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Des ingrédients frais, des recettes authentiques et une qualité irréprochable
          </p>
        </div>

        {/* Category Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-2 md:grid-cols-4 gap-2 bg-white/5 p-2 rounded-xl mb-12">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-white/60 font-semibold py-3 rounded-lg transition-all duration-300"
              >
                <category.icon className="h-4 w-4 mr-2" />
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item, index) => (
                  <Card
                    key={item.id}
                    className="group bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-red-600/50 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/20"
                    style={{
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    <CardContent className="p-0">
                      <div className="relative h-48 bg-gradient-to-br from-red-900/20 to-neutral-900/50 overflow-hidden">
                        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 p-4">
                          <ImageIcon className="h-10 w-10 text-white/30" />
                          <p className="text-xs text-white/40 text-center">
                            Ajoutez votre photo ici
                          </p>
                          <p className="text-[10px] text-white/30 text-center">
                            {item.image}
                          </p>
                        </div>
                        
                        {item.popular && (
                          <Badge className="absolute top-3 right-3 bg-red-600 text-white font-bold">
                            <Star className="h-3 w-3 mr-1 fill-white" />
                            Populaire
                          </Badge>
                        )}
                      </div>

                      <div className="p-5">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-sm text-white/60 mb-4 line-clamp-2">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-red-500">
                            {item.price} DH
                          </span>
                          <div className="text-xs text-white/40">
                            ID: {item.id}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default MenuSection;
