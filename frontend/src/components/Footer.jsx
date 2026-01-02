import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail, Briefcase } from 'lucide-react';
import { restaurantInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: restaurantInfo.socialMedia.instagram,
      color: 'hover:text-pink-500'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: restaurantInfo.socialMedia.facebook,
      color: 'hover:text-blue-500'
    },
    {
      name: 'TikTok',
      icon: () => (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      url: restaurantInfo.socialMedia.tiktok,
      color: 'hover:text-white'
    }
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_french-tacos/artifacts/2huquivv_images.jpg" 
                alt="Tacos Only Logo" 
                className="h-12 w-12 object-contain"
              />
              <span className="text-2xl font-bold text-white">Tacos Only</span>
            </div>
            <p className="text-white/60 text-sm">
              {restaurantInfo.slogan}
            </p>
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/60 ${social.color} transition-all duration-300 hover:scale-110`}
                  aria-label={social.name}
                >
                  {typeof social.icon === 'function' ? <social.icon /> : <social.icon className="h-5 w-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {['Accueil', 'Menu', 'À Propos', 'Localisation', 'Avis'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const id = link === 'Accueil' ? 'hero' : link.toLowerCase().replace('à ', '');
                      const element = document.getElementById(id);
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/60 hover:text-red-500 transition-colors text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-white/60">{restaurantInfo.address}</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-red-500 flex-shrink-0" />
                <a href={`tel:${restaurantInfo.phone}`} className="text-white/60 hover:text-red-500 transition-colors">
                  {restaurantInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-red-500 flex-shrink-0" />
                <a href={`mailto:${restaurantInfo.email}`} className="text-white/60 hover:text-red-500 transition-colors">
                  {restaurantInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Recruitment */}
          <div>
            <h3 className="text-white font-bold mb-4">Rejoignez-nous</h3>
            <p className="text-white/60 text-sm mb-4">
              Nous recherchons des talents passionnés pour rejoindre notre équipe !
            </p>
            <a
              href={`mailto:${restaurantInfo.email}?subject=Candidature - Tacos Only`}
              className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Briefcase className="h-4 w-4" />
              <span>Postuler</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-white/40 text-sm text-center md:text-left">
              © {currentYear} Tacos Only. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-white/40 hover:text-red-500 transition-colors">
                Mentions Légales
              </a>
              <a href="#" className="text-white/40 hover:text-red-500 transition-colors">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-white/40 hover:text-red-500 transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
