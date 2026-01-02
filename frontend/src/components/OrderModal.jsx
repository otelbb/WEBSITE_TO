import React from 'react';
import { X, ExternalLink, Phone } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';
import { deliveryPlatforms } from '../data/mock';

const OrderModal = ({ open, onClose }) => {
  const handlePlatformClick = (platform) => {
    if (platform.url && platform.url !== '#') {
      window.open(platform.url, '_blank');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-black border border-white/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">Choisissez votre plateforme</DialogTitle>
          <DialogDescription className="text-white/60">
            Commandez via votre application préférée ou appelez-nous directement
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-2 gap-4 mt-6">
          {deliveryPlatforms.map((platform) => (
            <button
              key={platform.id}
              onClick={() => handlePlatformClick(platform)}
              className="group relative overflow-hidden bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                '--platform-color': platform.color
              }}
            >
              <div className="flex flex-col items-center space-y-3">
                {platform.logo ? (
                  <div className="h-12 w-full flex items-center justify-center">
                    <img 
                      src={platform.logo} 
                      alt={platform.name} 
                      className="max-h-12 max-w-full object-contain"
                    />
                  </div>
                ) : (
                  <div 
                    className="h-12 w-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: platform.color }}
                  >
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                )}
                
                <span className="text-white font-semibold text-sm text-center">
                  {platform.name}
                </span>
                
                {platform.isPhone ? (
                  <Phone className="h-4 w-4 text-white/60 group-hover:text-white transition-colors" />
                ) : (
                  <ExternalLink className="h-4 w-4 text-white/60 group-hover:text-white transition-colors" />
                )}
              </div>
              
              {/* Hover effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{ backgroundColor: platform.color }}
              />
            </button>
          ))}
        </div>

        <div className="mt-6 p-4 bg-red-600/10 border border-red-600/20 rounded-lg">
          <p className="text-sm text-white/80 text-center">
            💡 <strong>Astuce :</strong> Utilisez le Click & Collect pour éviter l'attente !
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderModal;
