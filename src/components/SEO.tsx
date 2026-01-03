import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  schemaMarkup?: object;
}

export default function SEO({
  title = 'UnnatGreen - Premium Farmhouse Land Projects in Bhor & Velhe | Eco-Living Near Pune',
  description = 'Discover premium farmhouse land plots in Bhor and Velhe, just 40 km from Pune. Eco-friendly farmland with clear titles, modern amenities, and breathtaking views. Perfect for sustainable living, weekend homes, and organic farming.',
  keywords = 'farmhouse land projects, eco-living India, green real estate, farm plots near Pune, sustainable living communities, farmland near cities, weekend farmhouse, organic farming plots, retirement living, agricultural land investment, Bhor farmland, Velhe farm plots',
  canonical = 'https://unnatgreen.com/',
  ogType = 'website',
  ogImage = 'https://unnatgreen.com/US Logo - Golden copy.png',
  ogUrl = 'https://unnatgreen.com/',
  twitterCard = 'summary_large_image',
  schemaMarkup,
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="UnnatGreen" />

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
}
