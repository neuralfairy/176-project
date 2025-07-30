import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageSquare, HelpCircle, Search } from 'lucide-react';

const FAQPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      category: 'Getting Started',
      faqs: [
        {
          question: 'What is messaging strategy and why do I need it?',
          answer: 'Messaging strategy is the art and science of crafting communications that resonate with your target audience and drive them to take action. It combines psychology, data analysis, and proven frameworks to create messages that convert prospects into customers. Without a strategic approach, your messages may fail to connect with your audience, resulting in low conversion rates and missed opportunities.'
        },
        {
          question: 'How quickly can I see results from messaging optimization?',
          answer: 'Most clients see initial improvements within 2-4 weeks of implementation. Significant results, including conversion rate increases of 200-300%, typically occur within 60-90 days. The timeline depends on factors like your current messaging quality, audience size, and implementation consistency.'
        },
        {
          question: 'Do I need technical skills to use your platform?',
          answer: 'Not at all! Our platform is designed for non-technical users. We provide intuitive interfaces, step-by-step guides, and templates that make it easy to implement optimized messaging. Our team also provides onboarding and ongoing support to ensure your success.'
        }
      ]
    },
    {
      category: 'Platform & Features',
      faqs: [
        {
          question: 'How does your AI-powered optimization work?',
          answer: 'Our AI analyzes thousands of high-performing messages across industries, identifying patterns and psychological triggers that drive conversions. It then applies this intelligence to optimize your specific messages, testing variations and learning from performance data to continuously improve results.'
        },
        {
          question: 'What integrations do you support?',
          answer: 'We integrate with all major CRM platforms (Salesforce, HubSpot, Pipedrive), email marketing tools (Mailchimp, Constant Contact), communication platforms (Slack, Microsoft Teams), and many others. Enterprise plans include custom integrations and API access.'
        },
        {
          question: 'Can I A/B test different message variations?',
          answer: 'Yes! Our platform includes advanced A/B testing capabilities. You can test different subject lines, message content, call-to-actions, and timing. The system automatically identifies winning variations and provides detailed analytics on what works best for your audience.'
        }
      ]
    },
    {
      category: 'Pricing & Plans',
      faqs: [
        {
          question: 'What\'s included in the free trial?',
          answer: 'The 14-day free trial includes full access to all Professional plan features: AI-powered optimization, advanced analytics, unlimited A/B testing, CRM integrations, and priority support. No credit card required, and you can upgrade or cancel anytime.'
        },
        {
          question: 'Can I change my plan at any time?',
          answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we handle prorated billing automatically. If you need to pause your subscription temporarily, contact our support team.'
        },
        {
          question: 'Do you offer custom enterprise pricing?',
          answer: 'Yes, we offer custom pricing for organizations with 50+ users or specific compliance requirements. Enterprise plans include dedicated account management, custom integrations, white-label options, and SLA guarantees. Contact our sales team for a personalized quote.'
        }
      ]
    },
    {
      category: 'Results & ROI',
      faqs: [
        {
          question: 'What kind of results can I expect?',
          answer: 'Our clients typically see conversion rate increases of 200-300% within 60-90 days. Individual results vary based on factors like current messaging quality, industry, and implementation consistency. We provide detailed analytics and ROI tracking to measure your specific results.'
        },
        {
          question: 'How do you measure messaging performance?',
          answer: 'We track comprehensive metrics including open rates, click-through rates, conversion rates, revenue attribution, and customer lifetime value. Our analytics dashboard provides real-time insights and predictive analytics to help you understand what\'s working and optimize accordingly.'
        },
        {
          question: 'What industries do you work with?',
          answer: 'We work with B2B companies across all industries, with particular expertise in technology, healthcare, professional services, and manufacturing. Our messaging frameworks are adaptable to any industry, and we customize strategies based on your specific market and audience.'
        }
      ]
    },
    {
      category: 'Support & Training',
      faqs: [
        {
          question: 'What kind of support do you provide?',
          answer: 'All plans include email and chat support. Professional plans get priority support with faster response times. Enterprise plans include a dedicated account manager, phone support, and personalized strategy sessions. We also provide comprehensive documentation and video tutorials.'
        },
        {
          question: 'Do you provide training and onboarding?',
          answer: 'Yes! All new customers receive personalized onboarding, including platform training, strategy session, and best practices guidance. We also offer ongoing training webinars, documentation, and access to our messaging strategy experts.'
        },
        {
          question: 'Can you help implement the messaging across our organization?',
          answer: 'Absolutely! Our Customer Success team works with you to develop implementation plans, train your team, and ensure consistent messaging across all touchpoints. Enterprise clients receive dedicated implementation support and change management guidance.'
        }
      ]
    }
  ];

  const filteredFaqs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Frequently Asked
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Find answers to common questions about our messaging strategy platform, pricing, and how we can help transform your business communications.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 border-0 focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No FAQs found matching your search.</p>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredFaqs.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-2xl font-bold text-navy-900 mb-8 border-b border-gray-200 pb-4">
                    {category.category}
                  </h2>
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 100 + faqIndex; // Unique index
                      return (
                        <div key={faqIndex} className="bg-white rounded-lg shadow-sm border border-gray-200">
                          <button
                            onClick={() => toggleFaq(globalIndex)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                          >
                            <h3 className="text-lg font-semibold text-navy-900 pr-4">
                              {faq.question}
                            </h3>
                            {openFaq === globalIndex ? (
                              <ChevronUp className="w-5 h-5 text-orange-500 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                            )}
                          </button>
                          {openFaq === globalIndex && (
                            <div className="px-6 pb-4">
                              <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex justify-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you get the answers you need.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://salescentri.com/contact/support-request/live-chat"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200"
              >
                Live Chat Support
              </a>
              <a
                href="https://salescentri.com/get-started/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-orange-500 text-orange-600 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-200"
              >
                Contact Us
              </a>
            </div>
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
              Start Free Trial
            </a>
            <a
              href="https://salescentri.com/get-started/book-demo"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-orange-500 text-orange-400 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-200"
            >
              Book Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;