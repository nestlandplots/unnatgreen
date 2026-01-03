import { useState, FormEvent } from 'react';
import { Phone, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  projectId: string;
}

export default function ContactForm({ projectId }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    plot_preference: '',
    visit_date_preference: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    await new Promise(resolve => setTimeout(resolve, 1000));

    setSubmitStatus('success');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      plot_preference: '',
      visit_date_preference: '',
    });
    setIsSubmitting(false);

    setTimeout(() => {
      setSubmitStatus('idle');
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-amber-200">
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Schedule Your Site Visit
        </h3>
        <p className="text-lg text-gray-600">
          Fill out the form below and we'll get back to you within 24 hours
        </p>
      </div>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-center space-x-3">
          <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
          <p className="text-green-800 font-medium">
            Thank you! Your inquiry has been submitted successfully. We'll contact you soon.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-center space-x-3">
          <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
          <p className="text-red-800 font-medium">
            Sorry, there was an error submitting your inquiry. Please try again or call us directly.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-colors outline-none"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-colors outline-none"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-colors outline-none"
              placeholder="Your phone number"
            />
          </div>

          <div>
            <label htmlFor="plot_preference" className="block text-sm font-semibold text-gray-900 mb-2">
              Plot Size Preference
            </label>
            <select
              id="plot_preference"
              name="plot_preference"
              value={formData.plot_preference}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-colors outline-none"
            >
              <option value="">Select plot size</option>
              <option value="11000-15000">11,000 - 15,000 sq ft</option>
              <option value="15000-20000">15,000 - 20,000 sq ft</option>
              <option value="20000+">20,000+ sq ft</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="visit_date_preference" className="block text-sm font-semibold text-gray-900 mb-2">
            Preferred Visit Date
          </label>
          <input
            type="date"
            id="visit_date_preference"
            name="visit_date_preference"
            value={formData.visit_date_preference}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-colors outline-none"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-colors outline-none resize-none"
            placeholder="Tell us about your requirements..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-5 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
        >
          <Send className="w-6 h-6" />
          <span>{isSubmitting ? 'Submitting...' : 'Submit Inquiry'}</span>
        </button>
      </form>

      <div className="mt-8 pt-8 border-t-2 border-gray-200">
        <p className="text-center text-gray-600 mb-4 font-medium">Or contact us directly</p>
        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="tel:7020875371"
            className="flex items-center justify-center space-x-3 px-6 py-4 bg-emerald-50 border-2 border-emerald-300 rounded-xl hover:bg-emerald-100 transition-colors"
          >
            <Phone className="w-5 h-5 text-emerald-600" />
            <span className="font-semibold text-emerald-900">7020875371</span>
          </a>
          <a
            href="mailto:info@unnatgreen.com"
            className="flex items-center justify-center space-x-3 px-6 py-4 bg-amber-50 border-2 border-amber-300 rounded-xl hover:bg-amber-100 transition-colors"
          >
            <Mail className="w-5 h-5 text-amber-600" />
            <span className="font-semibold text-amber-900">Email Us</span>
          </a>
        </div>
      </div>
    </div>
  );
}
