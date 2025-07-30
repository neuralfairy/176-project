import React from 'react';
import { Check, X, Star, ArrowRight, Zap } from 'lucide-react';

const PricingPage = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small teams getting started with messaging optimization',
      features: [
        'Up to 3 team members',
        'Basic message optimization',
        'Email & chat support',
        'Standard analytics',
        '5 campaign templates',
        'Basic A/B testing',
        'CRM integration (1)',
        'Monthly strategy call'
      ],
      notIncluded: [
        'Advanced AI optimization',
        'Custom integrations',
        'White-label options',
        'Priority support'
      ],
      popular: false,
      cta: 'Start Free Trial',
      link: 'https://salescentri.com/get-started/free-trial'
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Advanced features for growing teams and agencies',
      features: [
        'Up to 15 team members',
        'Advanced AI optimization',
        'Priority support',
        'Advanced analytics & reporting',
        'Unlimited campaign templates',
        'Advanced A/B testing',
        'All CRM integrations',
        'Weekly strategy calls',
        'Custom message frameworks',
        'Multi-channel optimization',
        'Performance predictions',
        'Team collaboration tools'
      ],
      notIncluded: [
        'White-label options',
        'Custom AI training',
        'Dedicated account manager'
      ],
      popular: true,
      cta: 'Start Free Trial',
      link: 'https://salescentri.com/get-started/free-trial'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Tailored solutions for large organizations with custom needs',
      features: [
        'Unlimited team members',
        'Custom AI training',
        'Dedicated account manager',
        'Enterprise analytics',
        'Custom integrations',
        'White-label options',
        'SLA guarantees',
        'Daily strategy support',
        'Custom frameworks',
        'API access',
        'Advanced security',
        'Training & onboarding',
        'Custom reporting',
        'Priority feature requests'
      ],
      notIncluded: [],
      popular: false,
      cta: 'Contact Sales',
      link: 'https://salescentri.com/contact/sales-inquiry'
    }
  ];

  const faqs = [
    {
      question: 'What is included in the free trial?',
      answer: 'The 14-day free trial includes full access to all Professional plan features, unlimited message optimization, and dedicated onboarding support. No credit card required.'
    },
    {
      question: 'Can I change plans at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we prorate billing accordingly.'
    },
    {
      question: 'Do you offer custom pricing for large teams?',
      answer: 'Yes, we offer custom Enterprise pricing for organizations with 50+ users or specific compliance requirements. Contact our sales team for a quote.'
    },
    {
      question: 'What integrations are available?',
      answer: 'We integrate with all major CRM platforms (Salesforce, HubSpot, Pipedrive), email marketing tools, and communication platforms. Enterprise plans include custom integrations.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for Starter and Professional plans. Enterprise plans may include implementation services as part of the custom pricing.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'All plans include email and chat support. Professional plans get priority support, and Enterprise plans include a dedicated account manager.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Simple, Transparent
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose the perfect plan for your team. All plans include our core messaging optimization features with a 14-day free trial.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <Check className="w-4 h-4 text-green-400" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center space-x-1">
              <Check className="w-4 h-4 text-green-400" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-1">
              <Check className="w-4 h-4 text-green-400" />
              <span>No setup fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-200 hover:shadow-xl ${
                plan.popular ? 'border-orange-500 transform scale-105' : 'border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-navy-900">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3 opacity-50">
                        <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-500 line-through">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={plan.link}
                    className={`block w-full py-4 px-6 rounded-lg font-semibold text-center transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transform hover:scale-105'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-6">
                Calculate Your ROI
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our clients typically see a 300% increase in conversion rates within 60 days. See what that means for your business.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <span className="text-gray-700">Average conversion increase:</span>
                  <span className="font-bold text-orange-600">+300%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <span className="text-gray-700">Time to see results:</span>
                  <span className="font-bold text-orange-600">30-60 days</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <span className="text-gray-700">Average ROI:</span>
                  <span className="font-bold text-orange-600">1,200%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold text-navy-900 mb-6">ROI Calculator</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Plan Cost</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500">
                    <option>Starter - $99/month</option>
                    <option>Professional - $299/month</option>
                    <option>Enterprise - Custom</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Monthly Revenue</label>
                  <input type="number" placeholder="$50,000" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500" />
                </div>
                <div className="bg-gradient-to-r from-navy-900 to-navy-800 text-white p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">Projected Results:</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>New Monthly Revenue:</span>
                      <span className="font-bold text-orange-400">$200,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly ROI:</span>
                      <span className="font-bold text-green-400">50,237%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Got questions? We have answers.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-navy-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-900 to-navy-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that have transformed their messaging and increased conversions by up to 300%.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://salescentri.com/get-started/free-trial"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 transform hover:scale-105"
            >
              <Zap className="mr-2 w-5 h-5" />
              Start Free Trial
            </a>
            <a
              href="https://salescentri.com/get-started/book-demo"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-orange-500 text-orange-400 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-200"
            >
              Book Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;