import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { restaurantInfo } from '../data/mock';

const Location = () => {
  // Google Maps embed URL avec l'adresse fournie
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.5!2d${restaurantInfo.coordinates.lng}!3d${restaurantInfo.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQyJzE3LjAiTiA3wrAyMyc1MC4wIlc!5e0!3m2!1sfr!2sma!4v1234567890`;

  return (
    <section id="location" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-4">
              <MapPin className="h-4 w-4 text-red-500" />
              <span className="text-sm font-semibold text-red-500">Trouvez-nous</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Notre Emplacement
            </h2>
            <p className="text-lg text-white/60">
              Venez nous rendre visite ou commandez en ligne
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <Card className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video w-full">
                  <iframe
                    src={mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                    title="Tacos Only Location"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-red-600/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-red-600/20 border border-red-600/30 flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-red-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Adresse</h3>
                      <p className="text-white/70">{restaurantInfo.address}</p>
                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=PJ33+R52+Rue+Tripoli+Mohammedia+Morocco`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-500 hover:text-red-400 text-sm mt-2 inline-block transition-colors"
                      >
                        Ouvrir dans Google Maps →
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-red-600/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-red-600/20 border border-red-600/30 flex items-center justify-center">
                        <Clock className="h-6 w-6 text-red-500" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-3">Horaires d'ouverture</h3>
                      <div className="space-y-2">
                        {restaurantInfo.hours.map((schedule, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-white/70">{schedule.day}</span>
                            <span className="text-white font-semibold">{schedule.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-red-600/50 transition-colors">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-red-600/20 border border-red-600/30 flex items-center justify-center">
                        <Phone className="h-6 w-6 text-red-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">Téléphone</h3>
                        <a href={`tel:${restaurantInfo.phone}`} className="text-white/70 hover:text-red-500 transition-colors">
                          {restaurantInfo.phone}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-red-600/20 border border-red-600/30 flex items-center justify-center">
                        <Mail className="h-6 w-6 text-red-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">Email</h3>
                        <a href={`mailto:${restaurantInfo.email}`} className="text-white/70 hover:text-red-500 transition-colors">
                          {restaurantInfo.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
