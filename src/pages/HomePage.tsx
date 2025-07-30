import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Star, TrendingUp, Users, Zap, BarChart3, Target, MessageCircle } from 'lucide-react';

const HomePage = () => {
  const [email, setEmail] = useState('');

  const features = [
    {
      icon: <MessageCircle className="w-8 h-8 text-orange-500" />,
      title: 'Message Optimization',
      description: 'AI-powered messaging analysis that increases conversion rates by up to 300%'
    },
    {
      icon: <Target className="w-8 h-8 text-orange-500" />,
      title: 'Conversion Strategy',
      description: 'Data-driven strategies tailored to your audience and sales process'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      title: 'Performance Analytics',
      description: 'Real-time tracking and optimization of your messaging performance'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Team Collaboration',
      description: 'Seamless collaboration tools for sales teams and agencies'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'VP Sales, TechCorp',
      content: 'Digitalglim transformed our sales messaging. We saw a 250% increase in qualified leads within 60 days.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthCo',
      content: 'The messaging strategy audit revealed gaps we never knew existed. ROI improved by 180% in one quarter.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'CEO, StartupXYZ',
      content: 'Professional, data-driven approach. Their team helped us craft messages that actually convert.',
      rating: 5
    }
  ];

  const stats = [
    { number: '300%', label: 'Average Conversion Increase' },
    { number: '500+', label: 'Successful Campaigns' },
    { number: '95%', label: 'Client Satisfaction Rate' },
    { number: '24/7', label: 'Expert Support' }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open('https://salescentri.com/get-started/free-trial', '_blank');
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Transform Your
                  <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                    Messaging Strategy
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  Craft high-converting messaging strategies that turn prospects into customers. Data-driven approach, proven results.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://salescentri.com/get-started/book-demo"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 transform hover:scale-105"
                >
                  Book Free Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="https://salescentri.com/get-started/free-trial"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-orange-500 text-orange-400 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-200"
                >
                  Start Free Trial
                </a>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Setup in 5 minutes</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Conversion Rate</span>
                    <span className="text-green-400 font-semibold">+250%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-orange-400">500+</div>
                      <div className="text-sm text-gray-400">Campaigns</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-400">95%</div>
                      <div className="text-sm text-gray-400">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-navy-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              Why Choose Our Messaging Strategy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology combines data science, psychology, and industry expertise to create messages that convert.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              Calculate Your Potential ROI
            </h2>
            <p className="text-xl text-gray-600">
              See how much revenue you could generate with optimized messaging
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Website Visitors</label>
                  <input type="number" placeholder="10,000" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Conversion Rate (%)</label>
                  <input type="number" placeholder="2.5" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Average Deal Value ($)</label>
                  <input type="number" placeholder="5,000" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-navy-900 to-navy-800 text-white p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Projected Results</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Current Monthly Revenue:</span>
                    <span className="font-bold">$1,250,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Optimized Revenue:</span>
                    <span className="font-bold text-orange-400">$4,375,000</span>
                  </div>
                  <div className="border-t border-navy-700 pt-3 mt-3">
                    <div className="flex justify-between text-lg">
                      <span>Monthly Increase:</span>
                      <span className="font-bold text-green-400">+$3,125,000</span>
                    </div>
                  </div>
                </div>
                <a
                  href="https://salescentri.com/get-started/book-demo"
                  className="block w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-600 text-center py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200"
                >
                  Get Your Custom Strategy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Join hundreds of companies that have transformed their messaging
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div>
                  <div className="font-semibold text-navy-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-900 to-navy-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Messaging?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join over 500 companies that have increased their conversions by up to 300% with our proven messaging strategies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://salescentri.com/get-started/book-demo"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 transform hover:scale-105"
            >
              Book Your Free Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="https://salescentri.com/get-started/free-trial"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-orange-500 text-orange-400 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-200"
            >
              Start Free Trial
            </a>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email for messaging tips"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-0 focus:ring-2 focus:ring-orange-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-colors duration-200"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;