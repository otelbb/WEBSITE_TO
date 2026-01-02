import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { testimonials } from '../data/mock';

const Reviews = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating
            ? 'text-yellow-500 fill-yellow-500'
            : 'text-white/20'
        }`}
      />
    ));
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const averageRating = (
    testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length
  ).toFixed(1);

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-neutral-950 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-4">
              <Star className="h-4 w-4 text-red-500 fill-red-500" />
              <span className="text-sm font-semibold text-red-500">Avis Clients</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Ce Que Disent Nos Clients
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                {renderStars(5)}
              </div>
              <span className="text-2xl font-bold text-white">{averageRating}</span>
              <span className="text-white/60">sur 5</span>
            </div>
            <p className="text-lg text-white/60">
              Plus de {testimonials.length} avis vérifiés
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className="group bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <div className="w-10 h-10 rounded-full bg-red-600/20 border border-red-600/30 flex items-center justify-center">
                      <Quote className="h-5 w-5 text-red-500" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-3">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Comment */}
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {testimonial.comment}
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-white/10">
                    <Avatar className="h-10 w-10 border-2 border-red-600/30">
                      <AvatarFallback className="bg-red-600/20 text-red-500 font-bold">
                        {getInitials(testimonial.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-xs text-white/50">{testimonial.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Card className="inline-block bg-red-600/10 border border-red-600/30">
              <CardContent className="p-6">
                <p className="text-white/80">
                  🌟 Vous avez testé nos produits ? <span className="text-red-500 font-bold">Laissez votre avis !</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
