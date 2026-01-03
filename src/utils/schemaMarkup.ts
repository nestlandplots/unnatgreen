export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'UnnatGreen',
  alternateName: 'Unnat Green Farmland Projects',
  url: 'https://unnatgreen.com',
  logo: 'https://unnatgreen.com/US Logo - Golden.png',
  description: 'Premium farmhouse land projects in Bhor and Velhe near Pune. Eco-friendly farmland with clear titles, modern amenities, perfect for sustainable living.',
  foundingDate: '2023',
  founders: [
    {
      '@type': 'Person',
      name: 'UnnatGreen Founders',
      description: 'IT professionals passionate about sustainable living',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bhor, Velhe',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-7020875371',
    contactType: 'Customer Service',
    email: 'info@unnatgreen.com',
    availableLanguage: ['English', 'Hindi', 'Marathi'],
    areaServed: 'IN',
  },
  sameAs: [
    'https://facebook.com/unnatgreen',
    'https://instagram.com/unnatgreen',
    'https://linkedin.com/company/unnatgreen',
  ],
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'UnnatGreen',
  image: 'https://unnatgreen.com/US Logo - Golden.png',
  '@id': 'https://unnatgreen.com',
  url: 'https://unnatgreen.com',
  telephone: '+91-7020875371',
  email: 'info@unnatgreen.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bhor and Velhe',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    postalCode: '412205',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 18.1488,
    longitude: 73.8455,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '09:00',
    closes: '19:00',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '45',
  },
};

export const bhorProjectSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Nestland Bhor Farmhouse Plots',
  image: 'https://unnatgreen.com/bhor_plot_layout.jpg',
  description: 'Premium farmhouse plots in Bhor with panoramic views, modern amenities, and clear titles. Perfect for weekend homes, organic farming, and sustainable living.',
  brand: {
    '@type': 'Brand',
    name: 'UnnatGreen',
  },
  offers: {
    '@type': 'AggregateOffer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'INR',
    lowPrice: '500000',
    highPrice: '5000000',
    offerCount: '50',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '28',
  },
};

export const velheProjectSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Nestland Velhe Farmhouse Plots',
  image: 'https://unnatgreen.com/assets/velhe_plot_layout.jpg',
  description: 'Breathtaking farmhouse plots in Velhe with sunset views, tar road access, electricity, water connection, and gated community. Ideal for nature enthusiasts and smart investors.',
  brand: {
    '@type': 'Brand',
    name: 'UnnatGreen',
  },
  offers: {
    '@type': 'AggregateOffer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'INR',
    lowPrice: '600000',
    highPrice: '6000000',
    offerCount: '40',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '22',
  },
};

export const placeSchema = (name: string, lat: number, lng: number) => ({
  '@context': 'https://schema.org',
  '@type': 'Place',
  name: name,
  geo: {
    '@type': 'GeoCoordinates',
    latitude: lat,
    longitude: lng,
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: name,
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});
