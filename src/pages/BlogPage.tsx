import React from 'react';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';

const BlogPage = () => {
  const featuredPost = {
    title: 'The Psychology Behind High-Converting Sales Messages',
    excerpt: 'Discover the cognitive triggers and behavioral patterns that make prospects take action. Learn how to craft messages that tap into decision-making psychology.',
    author: 'Sarah Mitchell',
    date: 'March 15, 2025',
    readTime: '8 min read',
    category: 'Psychology',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: 'https://salescentri.com/resources/whitepapers-ebooks'
  };

  const blogPosts = [
    {
      title: 'AI-Powered Message Optimization: A Complete Guide',
      excerpt: 'Learn how artificial intelligence is revolutionizing messaging strategies and how you can leverage AI to boost your conversion rates.',
      author: 'Marcus Chen',
      date: 'March 12, 2025',
      readTime: '6 min read',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: 'https://salescentri.com/resources/tutorials-webinars'
    },
    {
      title: '10 Messaging Mistakes That Kill B2B Conversions',
      excerpt: 'Avoid these common pitfalls that prevent your messages from converting prospects into customers.',
      author: 'Jennifer Rodriguez',
      date: 'March 10, 2025',
      readTime: '5 min read',
      category: 'Strategy',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: 'https://salescentri.com/resources/case-studies'
    },
    {
      title: 'Case Study: How TechCorp Increased Leads by 300%',
      excerpt: 'A detailed breakdown of how we helped TechCorp transform their messaging strategy and achieve remarkable results.',
      author: 'David Thompson',
      date: 'March 8, 2025',
      readTime: '7 min read',
      category: 'Case Study',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: 'https://salescentri.com/resources/case-studies'
    },
    {
      title: 'The Future of B2B Sales Communication',
      excerpt: 'Explore emerging trends in sales messaging and what the future holds for B2B communication strategies.',
      author: 'Sarah Mitchell',
      date: 'March 5, 2025',
      readTime: '9 min read',
      category: 'Trends',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: 'https://salescentri.com/resources/whitepapers-ebooks'
    },
    {
      title: 'Multi-Channel Messaging: Consistency Across Touchpoints',
      excerpt: 'Learn how to maintain consistent messaging across email, social media, sales calls, and marketing campaigns.',
      author: 'Jennifer Rodriguez',
      date: 'March 3, 2025',
      readTime: '6 min read',
      category: 'Strategy',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: 'https://salescentri.com/resources/tutorials-webinars'
    },
    {
      title: 'Building Trust Through Authentic Messaging',
      excerpt: 'Discover how authentic, transparent communication builds stronger relationships with prospects and customers.',
      author: 'David Thompson',
      date: 'March 1, 2025',
      readTime: '5 min read',
      category: 'Trust Building',
      image: 'https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: 'https://salescentri.com/resources/case-studies'
    }
  ];

  const categories = [
    'All Posts', 'Strategy', 'Psychology', 'Technology', 'Case Studies', 'Trends', 'Trust Building'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Messaging Strategy
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Insights
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Expert insights, proven strategies, and actionable tips to help you craft messages that convert prospects into customers.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  index === 0
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-500'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-8">Featured Article</h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-6 space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <a
                    href={featuredPost.link}
                    className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors duration-200"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 mb-12">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Tag className="w-3 h-3 mr-1" />
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <a
                      href={post.link}
                      className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors duration-200"
                    >
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Stay Updated with Messaging Insights
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Get the latest messaging strategies, psychology insights, and conversion optimization tips delivered to your inbox.
          </p>
          
          <form className="max-w-md mx-auto mb-8">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-0 focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-orange-600 hover:bg-gray-50 rounded-lg font-semibold transition-colors duration-200"
              >
                Subscribe
              </button>
            </div>
          </form>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://salescentri.com/resources/whitepapers-ebooks"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              Download Free Guide
            </a>
            <a
              href="https://salescentri.com/get-started/book-demo"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-200"
            >
              Book Strategy Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;