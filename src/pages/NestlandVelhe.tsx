import { useEffect } from 'react';
import { Ruler, Car, Zap, Droplet, Lock, Waves, Mountain, Home, Shield, Trees, Leaf, CheckCircle, Sun, Phone, Mail } from 'lucide-react';
import SEO from '../components/SEO';
import { velheProjectSchema, breadcrumbSchema, placeSchema } from '../utils/schemaMarkup';

export default function NestlandVelhe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const velheBreadcrumbs = breadcrumbSchema([
    { name: 'Home', url: 'https://unnatgreen.com/' },
    { name: 'Nestland Velhe', url: 'https://unnatgreen.com/nestland-velhe' },
  ]);

  const velhePlace = placeSchema('Velhe, Pune', 18.1488, 73.8455);

  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [velheProjectSchema, velheBreadcrumbs, velhePlace],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-yellow-50 to-green-50 pt-24">
      <SEO
        title="Nestland Velhe - Premium Farmhouse Plots with Panoramic Views | UnnatGreen"
        description="Breathtaking farmhouse plots in Velhe with panoramic sunset views, tar road access, electricity, water connection, and gated community. Perfect for nature enthusiasts and smart investors looking for eco-living near Pune."
        keywords="Velhe farmhouse plots, farmland Velhe, farm plots near Pune, eco-living Velhe, weekend farmhouse Velhe, sustainable living communities, organic farming land, retirement plots Velhe, agricultural land investment, panoramic view plots"
        canonical="https://unnatgreen.com/nestland-velhe"
        ogImage="https://unnatgreen.com/assets/velhe_plot_layout.jpg"
        ogUrl="https://unnatgreen.com/nestland-velhe"
        schemaMarkup={combinedSchema}
      />
      <section className="py-24 px-6 bg-gradient-to-b from-white to-amber-50/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-amber-100 rounded-full text-amber-900 font-semibold text-sm mb-6">
              FEATURED PROJECT
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Nestland Farmhouse Plots
              <span className="block text-amber-600">Velhe</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Breathtaking panoramic views and mesmerizing sunset vistas that soothe the soul. Wake up to the music of birds, spend your day in nature's calm, and watch the sky turn golden from your own piece of paradise.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-600 via-yellow-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white mb-16 relative overflow-hidden shadow-2xl">
            <Trees className="absolute top-10 right-10 w-32 h-32 text-white/10" />
            <Leaf className="absolute bottom-10 left-10 w-24 h-24 text-white/10" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About the Project</h2>
              <p className="text-lg leading-relaxed text-amber-50">
                With tar road access, provincial electricity, and water connection, you enjoy modern conveniences in a serene natural setting. The gated community ensures safety, privacy, and like-minded neighbors who value peace and quality living. Here, the climate stays pleasant year-round - mornings greet you with crisp, fresh air, and evenings wrap you in cool, gentle breezes. Limited plots mean an exclusive neighborhood, perfect for those who seek both peace of mind and a sound investment.
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
                <div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-xl">
                  <Ruler className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Plot Sizes</h4>
                    <p className="text-gray-600 text-sm">10,000 Sq ft+, multiple size options to fit your farmhouse, weekend home, or hobby farm plans</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-xl">
                  <Shield className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Ownership</h4>
                    <p className="text-gray-600 text-sm">Clear title with individual 7/12 extract for each plot</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-xl">
                  <Car className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Road Access</h4>
                    <p className="text-gray-600 text-sm">Tar road touch / well-planned internal roads for easy access</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-xl">
                  <Zap className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Electricity</h4>
                    <p className="text-gray-600 text-sm">Provincial electricity connection up to the project boundary</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-xl">
                  <Droplet className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Water Supply</h4>
                    <p className="text-gray-600 text-sm">Provision for individual water connection to each plot</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-xl">
                  <Waves className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Drainage & Rainwater Flow</h4>
                    <p className="text-gray-600 text-sm">Natural slope and basic planning for smooth rainwater runoff</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-xl">
                  <Lock className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Gated Community</h4>
                    <p className="text-gray-600 text-sm">Secure entry gate and defined boundary for privacy</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-xl">
                  <Mountain className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Topography</h4>
                    <p className="text-gray-600 text-sm">Scenic plots with level and mild slopes for panoramic views</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-xl">
                  <Home className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Flexible Use</h4>
                    <p className="text-gray-600 text-sm">Ideal for farmhouse, weekend retreat, plantation, or long-term land investment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-emerald-300">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <CheckCircle className="w-8 h-8 mr-3 text-emerald-600" />
                Amenities
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl">
                  <Lock className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="font-medium text-gray-900">Secure Entry Gate</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl">
                  <Sun className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="font-medium text-gray-900">Panoramic & Sunset View Points</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl">
                  <Car className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="font-medium text-gray-900">Tar Road Touch Access</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl">
                  <Zap className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="font-medium text-gray-900">Electricity Connection</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl">
                  <Droplet className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="font-medium text-gray-900">Water Connection</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl">
                  <Home className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="font-medium text-gray-900">Gated Community Planning</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl">
                  <Trees className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="font-medium text-gray-900">Tree Plantation Drive</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl">
                  <Ruler className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="font-medium text-gray-900">Defined Plot Boundaries</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl">
                  <Waves className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="font-medium text-gray-900">Rainwater Flow Management</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Plot Layout</h3>
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-amber-300">
              <img
                src="https://unnatgreen.com/assets/velhe_plot_layout.jpg"
                alt="Nestland Velhe farmhouse plot layout map showing gated community with tar road access and modern amenities"
                className="w-full h-auto rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Gallery</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-4 shadow-xl border-2 border-amber-200 hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="https://unnatgreen.com/assets/velhe_image1.jpg"
                  alt="Panoramic sunset view from Nestland Velhe farmhouse plots with lush greenery"
                  className="w-full h-80 object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-xl border-2 border-amber-200 hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="https://unnatgreen.com/assets/velhe_image2.jpg"
                  alt="Scenic landscape and natural environment at Nestland Velhe farmland project"
                  className="w-full h-80 object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-xl border-2 border-amber-200 hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="https://unnatgreen.com/assets/velhe_image3.jpg"
                  alt="Mountain views and peaceful surroundings at Nestland Velhe eco-living community"
                  className="w-full h-80 object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-xl border-2 border-amber-200 hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="https://unnatgreen.com/assets/velhe_image4.jpg"
                  alt="Tar road access and infrastructure at Nestland Velhe gated farmhouse community"
                  className="w-full h-80 object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Video Tour</h3>
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-emerald-300">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100">
                <video
                  controls
                  className="w-full h-full object-contain rounded-2xl"
                  poster="https://unnatgreen.com/assets/velhe_image1.jpg"
                >
                  <source src="https://unnatgreen.com/assets/velhe_video.mp4" type="video/mp4" />
                  Your browser doesn't support the video tag.
                </video>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-500 via-yellow-500 to-emerald-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Interested in Nestland Velhe?
            </h3>
            <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto">
              Schedule a site visit and experience the breathtaking views yourself. Our team is ready to help you find your perfect plot.
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
