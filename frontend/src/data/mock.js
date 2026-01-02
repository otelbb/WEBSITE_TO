// MOCK DATA - À REMPLACER PLUS TARD

// Menu items - AJOUTEZ VOS PHOTOS ET PRIX ICI
export const menuItems = {
  tacos: [
    {
      id: 1,
      name: "Tacos Poulet",
      description: "Viande de poulet marinée, sauce fromagère, légumes frais",
      price: 35,
      image: "/api/placeholder/400/300", // REMPLACEZ PAR VOTRE IMAGE
      popular: true
    },
    {
      id: 2,
      name: "Tacos Viande Hachée",
      description: "Viande hachée épicée, sauce samourai, cheddar fondu",
      price: 40,
      image: "/api/placeholder/400/300", // REMPLACEZ PAR VOTRE IMAGE
      popular: true
    },
    {
      id: 3,
      name: "Tacos Mixte",
      description: "Poulet + viande hachée, double sauce, fromage",
      price: 45,
      image: "/api/placeholder/400/300" // REMPLACEZ PAR VOTRE IMAGE
    },
    {
      id: 4,
      name: "Tacos Cordon Bleu",
      description: "Cordon bleu croustillant, sauce blanche, emmental",
      price: 42,
      image: "/api/placeholder/400/300" // REMPLACEZ PAR VOTRE IMAGE
    }
  ],
  burgers: [
    {
      id: 5,
      name: "Classic Burger",
      description: "Steak de bœuf, cheddar, laitue, tomate, oignons",
      price: 35,
      image: "/api/placeholder/400/300", // REMPLACEZ PAR VOTRE IMAGE
      popular: false
    },
    {
      id: 6,
      name: "Cheese Burger",
      description: "Double steak, double cheddar, sauce burger maison",
      price: 42,
      image: "/api/placeholder/400/300", // REMPLACEZ PAR VOTRE IMAGE
      popular: true
    },
    {
      id: 7,
      name: "Chicken Burger",
      description: "Poulet croustillant, sauce andalouse, salade fraîche",
      price: 38,
      image: "/api/placeholder/400/300" // REMPLACEZ PAR VOTRE IMAGE
    },
    {
      id: 8,
      name: "Burger BBQ",
      description: "Viande fumée, bacon, oignons caramélisés, sauce BBQ",
      price: 45,
      image: "/api/placeholder/400/300" // REMPLACEZ PAR VOTRE IMAGE
    }
  ],
  supplements: [
    {
      id: 9,
      name: "Frites Maison",
      description: "Frites croustillantes servies avec sauce au choix",
      price: 15,
      image: "/api/placeholder/400/300" // REMPLACEZ PAR VOTRE IMAGE
    },
    {
      id: 10,
      name: "Nuggets (6 pièces)",
      description: "Nuggets de poulet croustillants",
      price: 20,
      image: "/api/placeholder/400/300" // REMPLACEZ PAR VOTRE IMAGE
    },
    {
      id: 11,
      name: "Onion Rings",
      description: "Rondelles d'oignons panées",
      price: 18,
      image: "/api/placeholder/400/300" // REMPLACEZ PAR VOTRE IMAGE
    },
    {
      id: 12,
      name: "Salade César",
      description: "Salade fraîche, poulet grillé, parmesan, croûtons",
      price: 25,
      image: "/api/placeholder/400/300" // REMPLACEZ PAR VOTRE IMAGE
    }
  ],
  boissons: [
    {
      id: 13,
      name: "Coca-Cola",
      description: "33cl",
      price: 8,
      image: "/api/placeholder/400/300" // REMPLACEZ PAR VOTRE IMAGE
    },
    {
      id: 14,
      name: "Jus d'Orange Frais",
      description: "Pressé du jour",
      price: 12,
      image: "/api/placeholder/400/300" // REMPLACEZ PAR VOTRE IMAGE
    },
    {
      id: 15,
      name: "Milkshake Vanille",
      description: "Onctueux et crémeux",
      price: 20,
      image: "/api/placeholder/400/300" // REMPLACEZ PAR VOTRE IMAGE
    },
    {
      id: 16,
      name: "Eau Minérale",
      description: "50cl",
      price: 5,
      image: "/api/placeholder/400/300" // REMPLACEZ PAR VOTRE IMAGE
    }
  ]
};

// Offres promotionnelles
export const promotions = [
  {
    id: 1,
    title: "Menu Duo",
    description: "2 Tacos + 2 Frites + 2 Boissons",
    originalPrice: 120,
    discountPrice: 99,
    image: "/api/placeholder/400/300" // REMPLACEZ PAR VOTRE IMAGE
  },
  {
    id: 2,
    title: "Mercredi Tacos",
    description: "Tous les tacos à -20%",
    discount: "20%",
    image: "/api/placeholder/400/300" // REMPLACEZ PAR VOTRE IMAGE
  },
  {
    id: 3,
    title: "Menu Famille",
    description: "4 Burgers + 4 Frites + 4 Boissons",
    originalPrice: 200,
    discountPrice: 169,
    image: "/api/placeholder/400/300" // REMPLACEZ PAR VOTRE IMAGE
  }
];

// Avis clients
export const testimonials = [
  {
    id: 1,
    name: "Karim B.",
    rating: 5,
    comment: "Les meilleurs tacos de Mohammédia ! La sauce fromagère est incroyable. Je commande au moins 2 fois par semaine.",
    date: "Il y a 2 jours"
  },
  {
    id: 2,
    name: "Sarah M.",
    rating: 5,
    comment: "Burgers de qualité, viande fraîche et généreuse. Le service est rapide et l'équipe très accueillante. Je recommande à 100% !",
    date: "Il y a 5 jours"
  },
  {
    id: 3,
    name: "Youssef A.",
    rating: 4,
    comment: "Très bon rapport qualité-prix. Les portions sont copieuses et toujours bien préparées. Mon spot préféré pour la pause déjeuner.",
    date: "Il y a 1 semaine"
  },
  {
    id: 4,
    name: "Fatima Z.",
    rating: 5,
    comment: "Enfin un vrai bon tacos à Mohammédia ! Le concept burger + tacos est génial. Tout est délicieux et le Click & Collect est très pratique.",
    date: "Il y a 1 semaine"
  },
  {
    id: 5,
    name: "Mohammed K.",
    rating: 5,
    comment: "Livraison rapide, produits chauds et de qualité. L'application de commande est simple à utiliser. Continuez comme ça !",
    date: "Il y a 2 semaines"
  }
];

// Plateformes de livraison - AJOUTEZ VOS LIENS ICI
export const deliveryPlatforms = [
  {
    id: 1,
    name: "Glovo",
    logo: "https://images.ctfassets.net/gw9s4zvjd6lg/4u8BkFWS0XzNUEEF6dQsXE/0828b9b67affd2eb7d3f56e8e1b5d30b/glovo-logo.svg",
    url: "#", // REMPLACEZ PAR VOTRE LIEN GLOVO
    color: "#FFC244"
  },
  {
    id: 2,
    name: "Uber Eats",
    logo: "https://d3i4yxtzktqr9n.cloudfront.net/uber-sites/f452c7aefd72a6f52b36705c8015464e.svg",
    url: "#", // REMPLACEZ PAR VOTRE LIEN UBER EATS
    color: "#06C167"
  },
  {
    id: 3,
    name: "Deliveroo",
    logo: "https://cdn.worldvectorlogo.com/logos/deliveroo.svg",
    url: "#", // REMPLACEZ PAR VOTRE LIEN DELIVEROO
    color: "#00CCBC"
  },
  {
    id: 4,
    name: "Click & Collect",
    logo: null,
    url: "tel:+212XXXXXXXXX", // REMPLACEZ PAR VOTRE NUMÉRO
    color: "#E31837",
    isPhone: true
  }
];

// Informations du restaurant
export const restaurantInfo = {
  name: "Tacos Only",
  slogan: "Quand le Tacos Rencontre le Burger",
  description: "Découvrez l'alliance parfaite entre la gourmandise du French Tacos et l'authenticité du Burger gourmet. Chez Tacos Only, nous utilisons uniquement des ingrédients frais et de qualité pour vous offrir une expérience gustative unique. Notre sauce fromagère légendaire et nos viandes marinées maison font toute la différence.",
  phone: "+212 5XX-XXXXXX", // REMPLACEZ PAR VOTRE NUMÉRO
  email: "contact@tacosonly.ma", // REMPLACEZ PAR VOTRE EMAIL
  address: "Rue Tripoli, Mohammédia, Maroc",
  coordinates: {
    lat: 33.704722,
    lng: -7.397222
  },
  hours: [
    { day: "Lundi - Jeudi", hours: "11h00 - 23h00" },
    { day: "Vendredi - Samedi", hours: "11h00 - 01h00" },
    { day: "Dimanche", hours: "12h00 - 23h00" }
  ],
  socialMedia: {
    instagram: "https://instagram.com/tacosonly", // REMPLACEZ PAR VOTRE LIEN
    facebook: "https://facebook.com/tacosonly", // REMPLACEZ PAR VOTRE LIEN
    tiktok: "https://tiktok.com/@tacosonly" // REMPLACEZ PAR VOTRE LIEN
  }
};
