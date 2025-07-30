import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Calendar, Users } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    service: 'general'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open('https://salescentri.com/get-started/contact', '_blank');
  };

  const contactMethods = [
    {
      title: 'Sales Inquiry',
      description: 'Ready to transform your messaging? Let\'s discuss your needs.',
      icon: <Phone className="w-8 h-8 text-orange-500" />,
      action: 'Contact Sales',
      link: 'https://salescentri.com/contact/sales-inquiry'
    },
    {
      title: 'Book a Demo',
      description: 'See our platform in action with a personalized demo.',
      icon: <Calendar className="w-8 h-8 text-orange-500" />,
      action: 'Schedule Demo',
      link: 'https://salescentri.com/get-started/book-demo'
    },
    {
      title: 'Live Chat',
      description: 'Get instant answers from our support team.',
      icon: <MessageSquare className="w-8 h-8 text-orange-500" />,
      action: 'Start Chat',
      link: 'https://salescentri.com/contact/support-request/live-chat'
    },
    {
      title: 'Partner with Us',
      description: 'Interested in becoming a partner or affiliate?',
      icon: <Users className="w-8 h-8 text-orange-500" />,
      action: 'Partner Inquiry',
      link: 'https://salescentri.com/contact/partnerships/partner-inquiry'
    }
  ];

  const officeInfo = {
    address: '123 Business District Drive, Suite 400, Raleigh, NC 27601',
    phone: '(919) 555-0123',
    email: 'hello@digitalglim.com',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM EST'
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Get in
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to transform your messaging and boost conversions? Our team of experts is here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              How Can We Help?
            </h2>
            <p className="text-xl text-gray-600">
              Choose the best way to connect with our team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="flex justify-center mb-4">{method.icon}</div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{method.description}</p>
                <a
                  href={method.link}
                  className="inline-flex items-center justify-center w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200"
                >
                  {method.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    How can we help?
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="demo">Request Demo</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tell us about your messaging challenges and goals..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 transform hover:scale-105"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Office Information */}
            <div className="space-y-8">
              {/* Office Details */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Our Raleigh Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600">{officeInfo.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">{officeInfo.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">{officeInfo.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Business Hours</h4>
                      <p className="text-gray-600">{officeInfo.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-navy-900 mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a
                    href="https://salescentri.com/get-started/free-trial"
                    className="block text-orange-600 hover:text-orange-700 font-medium transition-colors"
                  >
                    → Start Free Trial
                  </a>
                  <a
                    href="https://salescentri.com/get-started/book-demo"
                    className="block text-orange-600 hover:text-orange-700 font-medium transition-colors"
                  >
                    → Schedule Demo
                  </a>
                  <a
                    href="https://salescentri.com/pricing"
                    className="block text-orange-600 hover:text-orange-700 font-medium transition-colors"
                  >
                    → View Pricing
                  </a>
                  <a
                    href="https://salescentri.com/resources/case-studies"
                    className="block text-orange-600 hover:text-orange-700 font-medium transition-colors"
                  >
                    → Case Studies
                  </a>
                  <a
                    href="https://salescentri.com/contact/support-request"
                    className="block text-orange-600 hover:text-orange-700 font-medium transition-colors"
                  >
                    → Support Center
                  </a>
                </div>
              </div>

              {/* Support Options */}
              <div className="bg-navy-900 text-white p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
                <p className="text-gray-300 mb-6">
                  Our support team is available to help you get the most out of your messaging strategy.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://salescentri.com/contact/support-request/live-chat"
                    className="block w-full py-3 bg-orange-500 hover:bg-orange-600 text-center rounded-lg font-semibold transition-colors"
                  >
                    Live Chat Support
                  </a>
                  <a
                    href="https://salescentri.com/contact/support-request/submit-ticket"
                    className="block w-full py-3 border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white text-center rounded-lg font-semibold transition-all"
                  >
                    Submit Support Ticket
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;