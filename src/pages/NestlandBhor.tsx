import { useEffect } from 'react';
import { Ruler, Car, Zap, Droplet, Lock, Waves, Mountain, Home, Shield, Trees, Leaf, CheckCircle, Sun, Phone, Mail } from 'lucide-react';
import { bhorProject, bhorAmenities, bhorSpecifications, bhorGalleryImages, bhorVideos } from '../data/projectData';
import SEO from '../components/SEO';
import { bhorProjectSchema, breadcrumbSchema, placeSchema } from '../utils/schemaMarkup';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Ruler,
  Car,
  Zap,
  Droplet,
  Lock,
  Waves,
  Mountain,
  Home,
  Shield,
  Trees,
  Leaf,
  Sun,
  CheckCircle,
};

export default function NestlandBhor() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bhorBreadcrumbs = breadcrumbSchema([
    { name: 'Home', url: 'https://unnatgreen.com/' },
    { name: 'Nestland Bhor', url: 'https://unnatgreen.com/nestland-bhor' },
  ]);

  const bhorPlace = placeSchema('Bhor, Pune', 18.1488, 73.7455);

  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [bhorProjectSchema, bhorBreadcrumbs, bhorPlace],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-yellow-50 to-green-50 pt-24">
      <SEO
        title="Nestland Bhor - Premium Farmhouse Plots Near Pune | UnnatGreen"
        description="Discover premium farmhouse plots in Bhor with clear titles, modern amenities, and scenic beauty. Perfect for weekend homes, organic farming, and sustainable living. Just 40 km from Pune with easy access and year-round greenery."
        keywords="Bhor farmhouse plots, farmland Bhor, farm plots near Pune, eco-living Bhor, weekend farmhouse, sustainable living communities, organic farming land, retirement plots, agricultural land investment, green real estate Maharashtra"
        canonical="https://unnatgreen.com/nestland-bhor"
        ogImage="https://unnatgreen.com/bhor_plot_layout.jpg"
        ogUrl="https://unnatgreen.com/nestland-bhor"
        schemaMarkup={combinedSchema}
      />
      <section className="py-24 px-6 bg-gradient-to-b from-white to-amber-50/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-amber-100 rounded-full text-amber-900 font-semibold text-sm mb-6">
              FEATURED PROJECT
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {bhorProject.project_name}
              <span className="block text-amber-600">{bhorProject.location}</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {bhorProject.tagline}
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-600 via-yellow-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white mb-16 relative overflow-hidden shadow-2xl">
            <Trees className="absolute top-10 right-10 w-32 h-32 text-white/10" />
            <Leaf className="absolute bottom-10 left-10 w-24 h-24 text-white/10" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About the Project</h2>
              <p className="text-lg leading-relaxed text-amber-50">
                {bhorProject.description}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-amber-300">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Ruler className="w-8 h-8 mr-3 text-amber-600" />
                Plot Details
              </h3>
              <div className="space-y-4">
                {bhorSpecifications.map((spec) => {
                  const Icon = iconMap[spec.icon_name] || CheckCircle;
                  return (
                    <div key={spec.id} className="flex items-start space-x-4 p-4 bg-amber-50 rounded-xl">
                      <Icon className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{spec.title}</h4>
                        <p className="text-gray-600 text-sm">{spec.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-emerald-300">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <CheckCircle className="w-8 h-8 mr-3 text-emerald-600" />
                Amenities
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {bhorAmenities.map((amenity) => {
                  const Icon = iconMap[amenity.icon_name] || CheckCircle;
                  return (
                    <div key={amenity.id} className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl">
                      <Icon className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                      <span className="font-medium text-gray-900">{amenity.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Plot Layout</h3>
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-amber-300">
              <img
                src="/bhor_plot_layout.jpg"
                alt="Nestland Bhor farmhouse plot layout map with clear plot divisions and infrastructure details"
                className="w-full h-auto rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>

          {bhorGalleryImages.length > 0 && (
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Gallery</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {bhorGalleryImages.map((image) => (
                  <div key={image.id} className="bg-white rounded-2xl p-4 shadow-xl border-2 border-amber-200 hover:shadow-2xl transition-shadow duration-300">
                    <img
                      src={image.image_url}
                      alt={image.title}
                      className="w-full h-80 object-cover rounded-xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {bhorVideos.length > 0 && (
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Video Tour</h3>
              <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-emerald-300">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100">
                  <video
                    controls
                    className="w-full h-full object-contain rounded-2xl"
                    poster={bhorVideos[0].thumbnail_url}
                  >
                    <source src={bhorVideos[0].video_url} type="video/mp4" />
                    Your browser doesn't support the video tag.
                  </video>
                </div>
              </div>
            </div>
          )}

          <div className="bg-gradient-to-r from-amber-500 via-yellow-500 to-emerald-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Interested in Nestland Bhor?
            </h3>
            <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto">
              Schedule a site visit and discover your ideal farmland plot. Let us help you turn your farmhouse dreams into reality.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:7020875371"
                className="inline-flex items-center space-x-3 px-10 py-5 bg-white text-amber-900 rounded-full font-bold text-lg hover:bg-amber-50 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <Phone className="w-6 h-6" />
                <span>Call: 7020875371</span>
              </a>
              <a
                href="mailto:info@unnatgreen.com"
                className="inline-flex items-center space-x-3 px-10 py-5 bg-white text-amber-900 rounded-full font-bold text-lg hover:bg-amber-50 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <Mail className="w-6 h-6" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
