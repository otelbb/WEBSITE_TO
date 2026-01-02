# 📖 Guide de Modification - Tacos Only

## 🎯 Vue d'ensemble

Votre site web est **100% fonctionnel** avec toutes les sections demandées. Voici comment personnaliser facilement le contenu.

---

## 📝 Fichier Principal: `/app/frontend/src/data/mock.js`

C'est LE fichier à modifier pour changer tout le contenu du site.

### 1️⃣ Modifier le Menu (Produits & Prix)

#### Structure d'un produit:
```javascript
{
  id: 1,                                    // ID unique (ne pas modifier)
  name: "Tacos Poulet",                     // NOM DU PRODUIT
  description: "Viande de poulet...",       // DESCRIPTION
  price: 35,                                // PRIX EN DH
  image: "/api/placeholder/400/300",        // CHEMIN DE L'IMAGE
  popular: true                             // Badge "Populaire" (true/false)
}
```

#### Pour ajouter vos photos:
1. **Option A**: Placez vos images dans `/app/frontend/public/images/`
2. Puis modifiez le chemin:
   ```javascript
   image: "/images/mon-tacos.jpg"
   ```

3. **Option B**: Envoyez-moi vos photos et je les intègre pour vous !

#### Catégories disponibles:
- `menuItems.tacos` - Les tacos
- `menuItems.burgers` - Les burgers
- `menuItems.supplements` - Accompagnements
- `menuItems.boissons` - Boissons

---

### 2️⃣ Modifier les Promotions

```javascript
export const promotions = [
  {
    id: 1,
    title: "Menu Duo",                      // TITRE DE L'OFFRE
    description: "2 Tacos + 2 Frites...",   // DESCRIPTION
    originalPrice: 120,                      // PRIX NORMAL
    discountPrice: 99,                       // PRIX RÉDUIT
    image: "/api/placeholder/400/300"        // IMAGE
  }
]
```

---

### 3️⃣ Modifier les Plateformes de Livraison

```javascript
export const deliveryPlatforms = [
  {
    id: 1,
    name: "Glovo",
    url: "METTEZ_VOTRE_LIEN_GLOVO_ICI",    // ⚠️ LIEN IMPORTANT
    ...
  }
]
```

**Important**: Remplacez les `#` par vos vrais liens de commande !

---

### 4️⃣ Modifier les Informations du Restaurant

```javascript
export const restaurantInfo = {
  name: "Tacos Only",
  phone: "+212 5XX-XXXXXX",                 // VOTRE TÉLÉPHONE
  email: "contact@tacosonly.ma",            // VOTRE EMAIL
  address: "Rue Tripoli, Mohammmédia...",   // ADRESSE
  socialMedia: {
    instagram: "https://...",                // VOS RÉSEAUX SOCIAUX
    facebook: "https://...",
    tiktok: "https://..."
  }
}
```

---

### 5️⃣ Modifier les Avis Clients

```javascript
export const testimonials = [
  {
    id: 1,
    name: "Karim B.",                       // NOM DU CLIENT
    rating: 5,                              // NOTE (1 à 5)
    comment: "Les meilleurs tacos...",      // COMMENTAIRE
    date: "Il y a 2 jours"                  // DATE
  }
]
```

---

## 🗺️ Carte Google Maps

La carte est déjà configurée avec votre adresse:
**PJ33+R52, Rue Tripoli, Mohammmédia, Maroc**

Pour modifier, allez dans `/app/frontend/src/components/Location.jsx` ligne 6-7.

---

## 🎨 Personnalisation des Couleurs

### Fichier: `/app/frontend/src/index.css`

```css
--primary: 0 78% 55%;     /* Rouge actuel */
```

Pour changer la couleur principale:
- Bleu: `217 91% 60%`
- Vert: `142 76% 36%`
- Orange: `25 95% 53%`

---

## 🚀 Commandes Utiles

### Redémarrer le site après modifications:
```bash
sudo supervisorctl restart frontend
```

### Voir les logs en cas de problème:
```bash
tail -f /var/log/supervisor/frontend.out.log
```

---

## 📞 Besoin d'aide ?

### Envoyez-moi:
1. **Pour modifier le menu**: Liste des produits avec noms, descriptions, prix
2. **Pour ajouter des photos**: Envoyez vos images et je les intègre
3. **Pour les liens**: Vos URLs de plateformes de livraison
4. **Pour les infos**: Téléphone, email, réseaux sociaux

---

## ✅ Checklist Avant Mise en Ligne

- [ ] Remplacer tous les placeholders d'images
- [ ] Ajouter les vrais liens de plateformes de livraison
- [ ] Mettre à jour téléphone et email
- [ ] Configurer les liens réseaux sociaux
- [ ] Vérifier les prix du menu
- [ ] Tester tous les boutons "Commander"

---

## 🎯 Structure du Site

1. **Header** (Navigation + Logo + Bouton Commander)
2. **Hero** (Section d'accueil avec slogan)
3. **Offres du Moment** (3 promotions)
4. **Menu** (4 catégories: Tacos, Burgers, Suppléments, Boissons)
5. **À Propos** (Histoire et valeurs)
6. **Localisation** (Google Maps + Horaires)
7. **Avis Clients** (Témoignages)
8. **Footer** (Contact + Réseaux sociaux + Recrutement)

---

**Tout est prêt ! Modifiez `/app/frontend/src/data/mock.js` et le site s'actualise automatiquement !** 🚀
