import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Car, Calendar, User } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const location = useLocation();
  const selectedCar = location.state?.selectedCar;
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    { icon: Mail, label: t('contact.email'), value: 'info@cessarauto.com', href: 'mailto:info@cessarauto.com' },
    { icon: Phone, label: t('contact.phone'), value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, label: t('contact.address'), value: '123 Luxury Lane, Beverly Hills, CA 90210', href: '#' },
    { icon: Clock, label: t('contact.hours'), value: 'Mon-Sun: 8AM - 10PM', href: '#' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t('contact.getInTouch')}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('contact.readyToBook')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('contact.contactInformation')}
                </h2>
                <p className={isDark ? 'text-gray-400 mb-8' : 'text-gray-600 mb-8'}>
                  {t('contact.fillOutForm')}
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-start space-x-4 group"
                    >
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 transition-colors">
                        <info.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{info.label}</div>
                        <div className={isDark ? 'text-white font-semibold' : 'text-gray-900 font-semibold'}>{info.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-2xl shadow-xl p-8 md:p-10`}
              >
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {t('contact.thankYou')}
                    </h3>
                    <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                      {t('contact.messageSent')}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {selectedCar && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-primary-50 border-primary-200'} rounded-lg p-4 flex items-center`}
                      >
                        <Car className="w-6 h-6 text-primary-600 mr-3" />
                        <div>
                          <div className="text-sm text-primary-600 font-medium">{t('contact.selectedVehicle')}</div>
                          <div className={isDark ? 'text-white font-semibold' : 'text-gray-900 font-semibold'}>{selectedCar.name}</div>
                        </div>
                      </motion.div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          <User className="w-4 h-4 inline mr-1" />
                          {t('contact.fullName')}
                        </label>
                        <input
                          type="text"
                          {...register('name', { required: t('contact.nameRequired') })}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${
                            isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'
                          }`}
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          <Mail className="w-4 h-4 inline mr-1" />
                          {t('contact.emailAddress')}
                        </label>
                        <input
                          type="email"
                          {...register('email', {
                            required: t('contact.emailRequired'),
                            pattern: { value: /^\S+@\S+$/i, message: t('contact.invalidEmail') }
                          })}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${
                            isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'
                          }`}
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          <Phone className="w-4 h-4 inline mr-1" />
                          {t('contact.phoneNumber')}
                        </label>
                        <input
                          type="tel"
                          {...register('phone', { required: t('contact.phoneRequired') })}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${
                            isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'
                          }`}
                          placeholder="+1 (555) 123-4567"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                        )}
                      </div>

                      <div>
                        <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          <Calendar className="w-4 h-4 inline mr-1" />
                          {t('contact.preferredDate')}
                        </label>
                        <input
                          type="date"
                          {...register('date', { required: t('contact.dateRequired') })}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${
                            isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'
                          }`}
                        />
                        {errors.date && (
                          <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {t('contact.message')}
                      </label>
                      <textarea
                        {...register('message', { required: t('contact.messageRequired') })}
                        rows={5}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none ${
                          isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'
                        }`}
                        placeholder={t('contact.tellUsRequirements')}
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-primary flex items-center justify-center"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {t('contact.sendMessage')}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7159999999997!2d-118.40035631520316!3d34.07017998060063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0x66c46a8e8e0e5a5e!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-500"
          title="Location Map"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
