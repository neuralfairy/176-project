import React from 'react';
import { MessageCircle, BarChart3, Target, Users, Zap, Brain, CheckCircle, ArrowRight } from 'lucide-react';

const FeaturesPage = () => {
  const features = [
    {
      icon: <MessageCircle className="w-12 h-12 text-orange-500" />,
      title: 'AI-Powered Message Optimization',
      description: 'Our advanced AI analyzes thousands of high-performing messages to optimize your content for maximum conversion.',
      benefits: ['300% average conversion increase', 'Real-time optimization', 'A/B testing automation', 'Performance predictions'],
      demo: 'Interactive Demo Available'
    },
    {
      icon: <Brain className="w-12 h-12 text-orange-500" />,
      title: 'Behavioral Psychology Integration',
      description: 'Leverage psychological triggers and behavioral patterns to craft messages that resonate with your target audience.',
      benefits: ['Emotion-driven messaging', 'Cognitive bias optimization', 'Persuasion frameworks', 'Decision-making triggers'],
      demo: 'Psychology Toolkit'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-orange-500" />,
      title: 'Advanced Analytics & Reporting',
      description: 'Comprehensive analytics dashboard providing deep insights into message performance and audience engagement.',
      benefits: ['Real-time performance tracking', 'ROI measurement', 'Audience segmentation', 'Predictive analytics'],
      demo: 'Live Dashboard Preview'
    },
    {
      icon: <Target className="w-12 h-12 text-orange-500" />,
      title: 'Multi-Channel Strategy',
      description: 'Consistent messaging across all touchpoints - email, social media, sales calls, and marketing campaigns.',
      benefits: ['Omnichannel consistency', 'Platform-specific optimization', 'Brand voice alignment', 'Cross-channel analytics'],
      demo: 'Channel Integration Demo'
    },
    {
      icon: <Users className="w-12 h-12 text-orange-500" />,
      title: 'Team Collaboration Tools',
      description: 'Built-in collaboration features that enable teams to work together on messaging strategies seamlessly.',
      benefits: ['Real-time collaboration', 'Version control', 'Team permissions', 'Feedback workflows'],
      demo: 'Collaboration Workspace'
    },
    {
      icon: <Zap className="w-12 h-12 text-orange-500" />,
      title: 'Rapid Implementation',
      description: 'Quick setup and deployment tools that get your optimized messaging live in minutes, not weeks.',
      benefits: ['5-minute setup', 'Template library', 'One-click deployment', 'Instant integration'],
      demo: 'Setup Walkthrough'
    }
  ];

  const integrations = [
    'Salesforce', 'HubSpot', 'Pipedrive', 'Monday.com', 'Slack', 'Microsoft Teams',
    'Mailchimp', 'Constant Contact', 'Zoom', 'Google Workspace', 'Zapier', 'API Access'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Powerful Features for
              <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Messaging Success
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Everything you need to create, optimize, and deploy high-converting messaging strategies that drive real business results.
            </p>
            <a
              href="https://salescentri.com/solutions/use-case-navigator/demo"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 transform hover:scale-105"
            >
              Try Interactive Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <a
                      href="https://salescentri.com/solutions/use-case-navigator/demo"
                      className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors duration-200"
                    >
                      {feature.demo}
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with your existing tools and workflows. Our platform integrates with all major CRM, marketing, and communication platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow duration-200">
                <span className="font-medium text-gray-800">{integration}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://salescentri.com/solutions/psa-suite/integrations"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200"
            >
              View All Integrations
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Demo CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            See These Features in Action
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo to see how our messaging strategy platform can transform your conversion rates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://salescentri.com/get-started/book-demo"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 transform hover:scale-105"
            >
              Book Personal Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="https://salescentri.com/get-started/free-trial"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-200"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;