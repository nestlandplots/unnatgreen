import { Phone, Mail, MapPin, Trees, Home, Sprout, Heart, Shield, TrendingUp, Leaf, Mountain, Sun, Cloud } from 'lucide-react';
import SEO from '../components/SEO';
import { organizationSchema, localBusinessSchema, breadcrumbSchema, faqSchema } from '../utils/schemaMarkup';

export default function HomePage() {
  const reasons = [
    {
      icon: Shield,
      title: 'Clear Titles & Documentation',
      description: 'Verified documents and transparent purchase process with professional legal support'
    },
    {
      icon: MapPin,
      title: 'Prime Locations',
      description: 'Scenic plots in Bhor and Velhe, just 40 km from Katraj with year-round greenery'
    },
    {
      icon: TrendingUp,
      title: 'Strong Investment',
      description: 'Appreciating land asset with strong growth potential and property tax benefits'
    },
    {
      icon: Home,
      title: 'Flexible Usage',
      description: 'Perfect for weekend homes, retirement living, organic farming, or eco-stays'
    },
    {
      icon: Heart,
      title: 'Professional Support',
      description: 'Founded by IT professionals with commitment to quality and customer service'
    },
    {
      icon: Leaf,
      title: 'Natural Beauty',
      description: 'Surrounded by lush greenery with fresh air and peaceful environment'
    }
  ];

  const perfectFor = [
    { title: 'Nature Enthusiasts', description: 'Escape the city chaos and embrace tranquility' },
    { title: 'Smart Investors', description: 'Build long-term wealth with land ownership' },
    { title: 'Retirees', description: 'Your peaceful retirement haven awaits' },
    { title: 'Weekend Travelers', description: 'Your personal getaway close to home' },
    { title: 'Eco-Conscious Individuals', description: 'Live sustainably, farm organically' }
  ];

  const homeBreadcrumbs = breadcrumbSchema([
    { name: 'Home', url: 'https://unnatgreen.com/' },
  ]);

  const homeFAQs = faqSchema([
    {
      question: 'Where are the farmhouse plots located?',
      answer: 'Our premium farmhouse plots are located in Bhor and Velhe, approximately 40 km from Katraj, Pune. Both locations offer scenic beauty, fresh air, and year-round greenery.',
    },
    {
      question: 'What is the plot size available?',
      answer: 'We offer farmhouse plots starting from 10,000 square feet with multiple size options to accommodate your weekend home, farmhouse, or organic farming requirements.',
    },
    {
      question: 'Are the property documents clear?',
      answer: 'Yes, all our plots come with verified documentation, clear titles, and individual 7/12 extracts. We provide complete legal clarity with professional support throughout the purchase process.',
    },
    {
      question: 'What amenities are provided?',
      answer: 'Our farmland plots include tar road access, electricity connection, water supply provision, gated community security, and natural drainage. Each plot has defined boundaries and comes with modern infrastructure.',
    },
    {
      question: 'Can I use the plot for organic farming?',
      answer: 'Absolutely! Our plots are perfect for organic farming, weekend homes, retirement living, or eco-stays. The fertile soil and natural water sources make them ideal for agricultural activities.',
    },
  ]);

  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, localBusinessSchema, homeBreadcrumbs, homeFAQs],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-yellow-50 to-green-50">
      <SEO
        title="UnnatGreen - Premium Farmhouse Land Projects in Bhor & Velhe | Eco-Living Near Pune"
        description="Discover premium farmhouse land plots in Bhor and Velhe, just 40 km from Pune. Eco-friendly farmland with clear titles, modern amenities, and breathtaking views. Perfect for sustainable living, weekend homes, and organic farming."
        keywords="farmhouse land projects, eco-living India, green real estate, farm plots near Pune, sustainable living communities, farmland near cities, weekend farmhouse, organic farming plots, retirement living, agricultural land investment, Bhor farmland, Velhe farm plots, eco-stays India, nature-friendly development, find farm plots near me"
        canonical="https://unnatgreen.com/"
        ogImage="https://unnatgreen.com/US Logo - Golden.png"
        ogUrl="https://unnatgreen.com/"
        schemaMarkup={combinedSchema}
      />
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 via-yellow-50/30 to-transparent" />
        <div className="absolute top-20 right-10 opacity-10">
          <Trees className="w-96 h-96 text-emerald-600" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10">
          <Mountain className="w-80 h-80 text-green-600" />
        </div>
        <Sun className="absolute top-32 right-32 w-16 h-16 text-amber-400 opacity-30 animate-pulse" />
        <Cloud className="absolute top-40 left-20 w-24 h-24 text-slate-300 opacity-40" />

        <div className="container mx-auto max-w-7xl relative">
          <div className="text-center space-y-8 mb-16">
            <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-amber-100 border-2 border-amber-300 rounded-full text-amber-900 font-medium shadow-sm">
              <Sprout className="w-5 h-5" />
              <span>Your Gateway to Nature's Embrace</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900">
              Escape to Nature.
              <span className="block bg-gradient-to-r from-amber-600 via-yellow-600 to-green-700 bg-clip-text text-transparent mt-2">
                Invest in Peace.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Discover your own slice of paradise in the scenic hills of Bhor and Velhe.
              Just 40 km from Pune, where dreams of farmhouse living become reality.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6">
              <a href="#contact" className="group px-10 py-5 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300 hover:scale-105 flex items-center space-x-3 text-lg">
                <Phone className="w-6 h-6" />
                <span>Call Now: 7020875371</span>
              </a>
              <a href="#reasons" className="px-10 py-5 bg-white border-2 border-amber-600 text-amber-900 rounded-full font-semibold hover:bg-amber-50 transition-all duration-300 hover:scale-105 text-lg shadow-md">
                Learn More
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-300 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <img src="https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Premium farmland plots with fertile soil and natural greenery" className="w-full h-full object-cover rounded-2xl" loading="lazy" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Farmland</h3>
              <p className="text-gray-600">Fertile soil, natural water sources, and year-round greenery</p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-yellow-100 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <img src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Strategic location in Bhor and Velhe 40 km from Pune" className="w-full h-full object-cover rounded-2xl" loading="lazy" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Strategic Location</h3>
              <p className="text-gray-600">Easy access from Pune, perfect for weekend getaways</p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-emerald-300 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-green-700 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <img src="https://images.pexels.com/photos/1459503/pexels-photo-1459503.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Smart farmland investment with clear titles" className="w-full h-full object-cover rounded-2xl" loading="lazy" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Smart Investment</h3>
              <p className="text-gray-600">Appreciating asset with clear titles and legal documentation</p>
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="py-24 px-6 bg-gradient-to-b from-white to-amber-50/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-amber-100 rounded-full text-amber-900 font-semibold text-sm mb-6">
              ABOUT UNNAT GREEN
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Dream
              <span className="block text-amber-600">Farmhouse Awaits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded by IT professionals with a passion for nature, we bring you meticulously selected farmland plots
              in the serene landscapes of Bhor and Velhe. Each plot comes with verified documentation, clear titles,
              and the promise of a transparent purchase process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-lg border border-amber-200">
              <div className="w-12 h-12 bg-amber-500 rounded-full mb-4 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Verified Documentation</h4>
              <p className="text-gray-600 text-sm">Complete legal clarity with clear titles</p>
            </div>
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-lg border border-yellow-100">
              <div className="w-12 h-12 bg-yellow-500 rounded-full mb-4 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Professional Guidance</h4>
              <p className="text-gray-600 text-sm">Expert support throughout your journey</p>
            </div>
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-lg border border-green-100">
              <div className="w-12 h-12 bg-emerald-600 rounded-full mb-4 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Transparent Process</h4>
              <p className="text-gray-600 text-sm">No hidden costs or surprises</p>
            </div>
          </div>
        </div>
      </section>

      <section id="reasons" className="py-24 px-6 bg-gradient-to-b from-amber-50/30 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-amber-100 rounded-full text-amber-900 font-semibold text-sm mb-6">
              WHY CHOOSE US
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              6 Reasons to Choose
              <span className="block text-amber-600">Unnat Green Plots</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes our farmland plots the perfect choice for your investment and lifestyle dreams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-amber-500 transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="perfect-for" className="py-24 px-6 bg-gradient-to-b from-white to-amber-50/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-amber-100 rounded-full text-amber-900 font-semibold text-sm mb-6">
              WHO IS THIS FOR
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Perfect For Every
              <span className="block text-amber-600">Nature Lover</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you seek tranquility, investment, or a sustainable lifestyle, we have the perfect plot for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {perfectFor.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-amber-50 rounded-2xl p-6 shadow-md border-2 border-amber-200 hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-gradient-to-r from-amber-500 via-yellow-500 to-emerald-600 rounded-3xl p-12 text-center shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Multiple Investment Opportunities
            </h3>
            <div className="grid md:grid-cols-4 gap-6 mt-10">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                <Home className="w-10 h-10 text-white mx-auto mb-3" />
                <h4 className="font-bold text-white text-lg mb-2">Weekend Homes</h4>
                <p className="text-amber-50 text-sm">Your personal retreat</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                <Sprout className="w-10 h-10 text-white mx-auto mb-3" />
                <h4 className="font-bold text-white text-lg mb-2">Organic Farming</h4>
                <p className="text-amber-50 text-sm">Grow your own food</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                <Heart className="w-10 h-10 text-white mx-auto mb-3" />
                <h4 className="font-bold text-white text-lg mb-2">Retirement Living</h4>
                <p className="text-amber-50 text-sm">Peaceful golden years</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                <TrendingUp className="w-10 h-10 text-white mx-auto mb-3" />
                <h4 className="font-bold text-white text-lg mb-2">Rental Income</h4>
                <p className="text-amber-50 text-sm">Eco-stays & resorts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-gradient-to-b from-amber-50/30 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-amber-100 rounded-full text-amber-900 font-semibold text-sm mb-6">
              GET IN TOUCH
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Let's Start Your Journey to
              <span className="block bg-gradient-to-r from-amber-600 via-yellow-600 to-green-700 bg-clip-text text-transparent mt-2">
                Your Dream Farmland
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fill out the form below and our team will get back to you within 24 hours to discuss your requirements and schedule a site visit.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <a href="tel:7020875371" className="group bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-300 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-3">Mon - Sun, 9 AM - 7 PM</p>
              <p className="text-2xl font-bold text-emerald-600">7020875371</p>
            </a>

            <a href="mailto:info@unnatgreen.com" className="group bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-300 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-3">Get response in 24 hours</p>
              <p className="text-lg font-semibold text-amber-600 break-all">info@unnatgreen.com</p>
            </a>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-yellow-100">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-3">Our Projects</p>
              <p className="text-base font-semibold text-gray-700">Bhor & Velhe, 40 km from Katraj, Pune</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
