import React from 'react';
import { Users, Award, Target, TrendingUp, Linkedin, Twitter, Mail } from 'lucide-react';

const AboutPage = () => {
  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO & Founder',
      bio: 'Former VP of Sales at Fortune 500 companies with 15+ years of experience in messaging strategy and conversion optimization.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@digitalglim.com'
      }
    },
    {
      name: 'Marcus Chen',
      role: 'CTO & Co-Founder',
      bio: 'AI and machine learning expert with a PhD in Computer Science. Previously led data science teams at Google and Microsoft.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'marcus@digitalglim.com'
      }
    },
    {
      name: 'Jennifer Rodriguez',
      role: 'Head of Strategy',
      bio: 'Marketing psychology expert with 12+ years helping B2B companies optimize their messaging for higher conversions.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'jennifer@digitalglim.com'
      }
    },
    {
      name: 'David Thompson',
      role: 'VP of Customer Success',
      bio: 'Customer experience specialist focused on helping teams implement and scale their messaging strategies successfully.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'david@digitalglim.com'
      }
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-orange-500" />,
      title: 'Results-Driven',
      description: 'We measure success by the tangible results our clients achieve - increased conversions, higher revenue, and better ROI.'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Client-Centric',
      description: 'Every strategy is tailored to our client\'s unique needs, industry, and target audience. No one-size-fits-all solutions.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      title: 'Innovation First',
      description: 'We leverage the latest in AI, behavioral psychology, and data science to stay ahead of messaging trends.'
    },
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from strategy development to client support.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Successful Campaigns' },
    { number: '300%', label: 'Average Conversion Increase' },
    { number: '95%', label: 'Client Satisfaction Rate' },
    { number: '5 Years', label: 'Industry Experience' }
  ];

  const milestones = [
    { year: '2020', title: 'Company Founded', description: 'Started with a vision to transform B2B messaging' },
    { year: '2021', title: 'First 100 Clients', description: 'Reached our first major milestone with proven results' },
    { year: '2022', title: 'AI Platform Launch', description: 'Launched our proprietary AI-powered optimization platform' },
    { year: '2023', title: 'Series A Funding', description: 'Secured $5M in Series A funding to accelerate growth' },
    { year: '2024', title: 'Enterprise Expansion', description: 'Expanded to serve Fortune 500 companies' },
    { year: '2025', title: 'Global Reach', description: 'Serving clients across 15 countries worldwide' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            About
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Digitalglim
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to transform how businesses communicate with their prospects and customers. Through data-driven messaging strategies and cutting-edge AI, we help companies achieve unprecedented conversion rates.
          </p>
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

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that effective communication is the foundation of business success. Our mission is to empower companies with the tools, strategies, and insights they need to craft messages that truly resonate with their audience.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Through our proprietary AI platform and expert team, we've helped over 500 companies increase their conversion rates by an average of 300%, generating millions in additional revenue.
              </p>
              <a
                href="https://salescentri.com/get-started/book-demo"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200"
              >
                Schedule a Consultation
              </a>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900">Vision</h3>
                    <p className="text-gray-600">To be the global leader in AI-powered messaging optimization</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900">Values</h3>
                    <p className="text-gray-600">Results-driven, client-centric, innovative, and committed to excellence</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900">Impact</h3>
                    <p className="text-gray-600">Over $100M in additional revenue generated for our clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              From startup to industry leader - here's our story
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-orange-500 to-orange-600"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className="flex-1 px-8">
                    <div className={`bg-white p-6 rounded-lg shadow-lg border border-gray-100 ${index % 2 === 0 ? 'text-right' : ''}`}>
                      <div className="text-orange-500 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-navy-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expert team combines decades of experience in sales, marketing, psychology, and technology to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-navy-900 mb-1">{member.name}</h3>
                  <div className="text-orange-500 font-medium mb-3">{member.role}</div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-orange-500 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={member.social.twitter} className="text-gray-400 hover:text-orange-500 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-orange-500 transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
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
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that trust Digitalglim to transform their messaging and drive results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://salescentri.com/get-started/book-demo"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 transform hover:scale-105"
            >
              Schedule a Consultation
            </a>
            <a
              href="https://salescentri.com/company/careers"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-orange-500 text-orange-400 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-200"
            >
              Join Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;