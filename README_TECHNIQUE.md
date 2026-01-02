# 🏪 Tacos Only - Restaurant Website

## 📊 Vue d'ensemble du projet

Site web professionnel pour un restaurant fast-food spécialisé dans les French Tacos et Burgers gourmets, situé à Mohammmédia, Maroc.

---

## 🎨 Stack Technique

- **Frontend**: React 19 + Tailwind CSS
- **UI Components**: Shadcn/UI
- **Icons**: Lucide React
- **Backend**: FastAPI + MongoDB (prêt pour intégration future)
- **Fonts**: Inter (Google Fonts)

---

## 🎯 Fonctionnalités Implémentées

### ✅ Frontend Complet (Mock Data)

1. **Header Sticky**
   - Logo du restaurant intégré
   - Navigation smooth scroll
   - Bouton "Commander" avec effet hover
   - Menu mobile responsive

2. **Hero Section**
   - Slogan accrocheur
   - 2 CTA buttons (Commander + Voir le Menu)
   - Animations d'entrée
   - Badge "Meilleurs Tacos & Burgers"

3. **Offres du Moment**
   - 3 promotions avec badges de réduction
   - Prix barrés et prix réduits
   - Boutons de commande par offre

4. **Menu Interactif**
   - 4 catégories avec tabs (Tacos, Burgers, Suppléments, Boissons)
   - 16 produits au total
   - Placeholders pour images avec instructions claires
   - Badge "Populaire" sur certains produits
   - Card explicatif pour modification du menu

5. **Section À Propos**
   - Histoire du concept
   - 4 cartes de valeurs (Ingrédients Frais, Sauce Légendaire, etc.)
   - Design avec glassmorphism

6. **Localisation**
   - Google Maps intégré (Rue Tripoli, Mohammmédia)
   - Horaires d'ouverture
   - Téléphone et email cliquables
   - Lien vers Google Maps

7. **Avis Clients**
   - 5 témoignages
   - Système de notation (étoiles)
   - Note moyenne calculée automatiquement
   - Avatars avec initiales

8. **Footer**
   - Navigation rapide
   - Contact complet
   - Réseaux sociaux (Instagram, Facebook, TikTok)
   - Section recrutement avec bouton "Postuler"
   - Mentions légales

9. **Modal de Commande**
   - 4 plateformes: Glovo, Uber Eats, Deliveroo, Click & Collect
   - Logos officiels des plateformes
   - Liens externes cliquables
   - Tip pour Click & Collect

---

## 📁 Structure des Fichiers

```
/app/frontend/src/
├── components/
│   ├── Header.jsx              # Navigation + Logo
│   ├── Hero.jsx                # Section d'accueil
│   ├── Promotions.jsx          # Offres du moment
│   ├── MenuSection.jsx         # Menu avec tabs
│   ├── About.jsx               # À propos
│   ├── Location.jsx            # Google Maps + Contact
│   ├── Reviews.jsx             # Avis clients
│   ├── Footer.jsx              # Footer complet
│   ├── OrderModal.jsx          # Modal plateformes
│   └── ui/                     # Shadcn components
├── data/
│   └── mock.js                 # ⚠️ TOUTES LES DONNÉES ICI
├── App.js                      # Component principal
├── App.css                     # Animations
└── index.css                   # Theme + Colors
```

---

## 🎨 Design System

### Couleurs
- **Rouge Principal**: `#E31837` (HSL: 0 78% 55%)
- **Noir**: `#000000` / `#1a1a1a`
- **Blanc**: `#FFFFFF`
- **Accents**: Rouge sur fond noir

### Typography
- **Font**: Inter (400, 500, 600, 700, 800, 900)
- **Headings**: Font-weight 800-900
- **Body**: Font-weight 400-600

### Animations
- Fade in
- Fade in up (avec delays)
- Hover scales (105%)
- Smooth scroll
- Bounce (CTA icons)

---

## 📝 Données Mock (Modifiables)

### Localisation: `/app/frontend/src/data/mock.js`

**Contenu:**
- 16 produits menu (4 tacos, 4 burgers, 4 suppléments, 4 boissons)
- 3 offres promotionnelles
- 5 avis clients
- 4 plateformes de livraison
- Informations restaurant (téléphone, email, adresse, horaires)
- Liens réseaux sociaux

**À personnaliser:**
1. Remplacer tous les placeholders d'images
2. Ajouter les vrais liens de plateformes
3. Mettre à jour les coordonnées
4. Configurer les réseaux sociaux

---

## 🚀 Développement

### Démarrer le serveur
```bash
cd /app/frontend
yarn start
```

### Redémarrer après modifications
```bash
sudo supervisorctl restart frontend
```

### Logs
```bash
tail -f /var/log/supervisor/frontend.out.log
```

---

## 📱 Responsive Design

- **Mobile**: < 768px (Menu hamburger, stack layout)
- **Tablet**: 768px - 1024px (2 colonnes)
- **Desktop**: > 1024px (4 colonnes pour menu)

---

## 🔗 URLs et Liens

### Backend
- URL: Configuré via `.env` (REACT_APP_BACKEND_URL)
- API: Non utilisé actuellement (données mock uniquement)

### External Assets
- Logo: `https://customer-assets.emergentagent.com/job_french-tacos/artifacts/2huquivv_images.jpg`
- Glovo, Uber Eats, Deliveroo logos: CDN officiels

---

## ⚡ Performance

- **Lazy Loading**: Non nécessaire (site léger)
- **Images**: Utiliser format WebP recommandé
- **Animations**: CSS uniquement (performant)
- **Bundle**: Optimisé avec Create React App

---

## 🎯 Prochaines Étapes (Optionnel)

### Phase Backend
1. Créer API pour le menu
2. Système de commandes
3. Gestion des avis clients
4. Dashboard admin

### Features Avancées
1. Panier d'achat
2. Paiement en ligne
3. Système de fidélité
4. Programme de parrainage

---

## 📞 Support

Pour toute modification ou question:
- Modifier `/app/frontend/src/data/mock.js`
- Consulter `/app/GUIDE_MODIFICATION.md`
- Ou demander de l'aide

---

**Statut**: ✅ Frontend complet et fonctionnel avec mock data
**Prêt pour**: Personnalisation des contenus et intégration backend
