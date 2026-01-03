import { Trees, Leaf, Home, TrendingUp } from 'lucide-react';

function ThemePreview() {
  const themes = [
    {
      name: 'Luxury Earth Tones',
      colors: {
        primary: 'from-amber-800 to-orange-900',
        secondary: 'from-yellow-700 to-amber-800',
        bg: 'bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50',
        text: 'text-amber-900',
        accent: 'border-amber-600',
        card: 'bg-white/90 border-amber-200',
        button: 'bg-gradient-to-r from-amber-700 to-orange-800 text-white'
      }
    },
    {
      name: 'Clean Minimalist White',
      colors: {
        primary: 'from-gray-800 to-gray-900',
        secondary: 'from-gray-600 to-gray-700',
        bg: 'bg-white',
        text: 'text-gray-900',
        accent: 'border-gray-300',
        card: 'bg-white border-gray-200 shadow-xl',
        button: 'bg-gray-900 text-white'
      }
    },
    {
      name: 'Sunset Orange & Yellow',
      colors: {
        primary: 'from-orange-500 to-red-600',
        secondary: 'from-yellow-500 to-orange-600',
        bg: 'bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50',
        text: 'text-orange-900',
        accent: 'border-orange-500',
        card: 'bg-white/90 border-orange-200',
        button: 'bg-gradient-to-r from-orange-600 to-red-600 text-white'
      }
    },
    {
      name: 'Deep Forest Green & Navy',
      colors: {
        primary: 'from-green-800 to-green-900',
        secondary: 'from-blue-900 to-slate-900',
        bg: 'bg-gradient-to-br from-green-900 via-slate-800 to-blue-900',
        text: 'text-white',
        accent: 'border-green-500',
        card: 'bg-slate-800/50 border-green-700/30',
        button: 'bg-gradient-to-r from-green-700 to-blue-800 text-white'
      }
    },
    {
      name: 'Modern Teal & Coral',
      colors: {
        primary: 'from-teal-500 to-cyan-600',
        secondary: 'from-coral-500 to-pink-500',
        bg: 'bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50',
        text: 'text-teal-900',
        accent: 'border-teal-500',
        card: 'bg-white/90 border-teal-200',
        button: 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white'
      }
    },
    {
      name: 'Rustic Farm Style',
      colors: {
        primary: 'from-red-700 to-red-800',
        secondary: 'from-amber-600 to-yellow-700',
        bg: 'bg-gradient-to-br from-red-50 via-amber-50 to-yellow-50',
        text: 'text-red-900',
        accent: 'border-red-600',
        card: 'bg-amber-50/90 border-red-300',
        button: 'bg-gradient-to-r from-red-700 to-red-800 text-white'
      }
    },
    {
      name: 'Sage Green & Beige',
      colors: {
        primary: 'from-green-400 to-teal-400',
        secondary: 'from-lime-400 to-green-500',
        bg: 'bg-gradient-to-br from-green-50 via-teal-50 to-lime-50',
        text: 'text-green-800',
        accent: 'border-green-300',
        card: 'bg-white/80 border-green-200',
        button: 'bg-gradient-to-r from-green-500 to-teal-500 text-white'
      }
    },
    {
      name: 'Bold Blue Sky Theme',
      colors: {
        primary: 'from-sky-500 to-blue-600',
        secondary: 'from-blue-400 to-indigo-500',
        bg: 'bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50',
        text: 'text-sky-900',
        accent: 'border-sky-500',
        card: 'bg-white/90 border-sky-200',
        button: 'bg-gradient-to-r from-sky-600 to-blue-600 text-white'
      }
    },
    {
      name: 'Modern Illustrative Blue',
      colors: {
        primary: 'from-blue-600 to-blue-700',
        secondary: 'from-cyan-500 to-blue-600',
        bg: 'bg-gradient-to-br from-blue-50 via-white to-cyan-50',
        text: 'text-blue-900',
        accent: 'border-blue-400',
        card: 'bg-white border-blue-100 shadow-2xl',
        button: 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
      }
    },
    {
      name: 'Golden Green Paradise',
      colors: {
        primary: 'from-amber-500 to-yellow-600',
        secondary: 'from-emerald-600 to-green-700',
        bg: 'bg-gradient-to-br from-amber-50 via-yellow-50 to-green-50',
        text: 'text-amber-900',
        accent: 'border-amber-500',
        card: 'bg-white/95 border-amber-300',
        button: 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Unnat Green - Theme Options
        </h1>
        <p className="text-xl text-gray-600 text-center mb-8">
          Preview all 10 design themes for your farmland website
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {themes.map((theme, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-200">
            <div className="bg-gray-900 text-white px-6 py-4">
              <h2 className="text-2xl font-bold">{theme.name}</h2>
            </div>

            <div className={`${theme.colors.bg} p-8 min-h-[600px]`}>
              <div className={`${theme.colors.card} rounded-2xl p-6 border-2 ${theme.colors.accent} mb-6`}>
                <div className="flex items-center space-x-3 mb-4">
                  <Trees className={`w-10 h-10 ${theme.colors.text}`} />
                  <div>
                    <h3 className={`text-2xl font-bold ${theme.colors.text}`}>Unnat Green</h3>
                    <p className={`text-sm ${theme.colors.text} opacity-70`}>Farmland Paradise</p>
                  </div>
                </div>
              </div>

              <div className={`${theme.colors.card} rounded-2xl p-8 border-2 ${theme.colors.accent} mb-6`}>
                <h3 className={`text-3xl font-bold mb-4 ${theme.colors.text}`}>
                  Escape to Nature.
                  <span className={`block bg-gradient-to-r ${theme.colors.primary} bg-clip-text text-transparent mt-2`}>
                    Invest in Peace.
                  </span>
                </h3>
                <p className={`${theme.colors.text} opacity-80 mb-6`}>
                  Discover your own slice of paradise in the scenic hills of Bhor and Velhe.
                </p>
                <button className={`${theme.colors.button} px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-200`}>
                  Call Now: 7020875371
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className={`${theme.colors.card} rounded-xl p-6 border-2 ${theme.colors.accent}`}>
                  <div className={`w-12 h-12 bg-gradient-to-br ${theme.colors.primary} rounded-lg flex items-center justify-center mb-3`}>
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <h4 className={`font-bold ${theme.colors.text} mb-2`}>Premium Land</h4>
                  <p className={`text-sm ${theme.colors.text} opacity-70`}>Year-round greenery</p>
                </div>

                <div className={`${theme.colors.card} rounded-xl p-6 border-2 ${theme.colors.accent}`}>
                  <div className={`w-12 h-12 bg-gradient-to-br ${theme.colors.secondary} rounded-lg flex items-center justify-center mb-3`}>
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h4 className={`font-bold ${theme.colors.text} mb-2`}>Investment</h4>
                  <p className={`text-sm ${theme.colors.text} opacity-70`}>Strong growth</p>
                </div>
              </div>

              <div className={`${theme.colors.card} rounded-2xl p-6 border-2 ${theme.colors.accent} mt-4`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`text-3xl font-bold bg-gradient-to-r ${theme.colors.primary} bg-clip-text text-transparent`}>40 km</p>
                    <p className={`text-sm ${theme.colors.text} opacity-70`}>from Katraj</p>
                  </div>
                  <Leaf className={`w-16 h-16 ${theme.colors.text} opacity-20`} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-12 bg-white rounded-2xl p-8 shadow-xl">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          Which theme do you prefer?
        </h3>
        <p className="text-gray-600 text-center">
          Let me know which design resonates with you, and I'll rebuild your website with that theme!
        </p>
      </div>
    </div>
  );
}

export default ThemePreview;
