import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Phone, Mail, MapPin, Shield, Award, Lock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Digitalglim</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Crafting high-converting messaging strategies for sales teams and agencies. Transform your communication and boost conversions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>Raleigh, NC</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4 text-orange-500" />
                <span>(919) 555-0123</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4 text-orange-500" />
                <span>hello@digitalglim.com</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="https://salescentri.com/solutions/psa-suite" className="text-gray-300 hover:text-orange-400 transition-colors">PSA Suite</a></li>
              <li><a href="https://salescentri.com/solutions/by-industry/it" className="text-gray-300 hover:text-orange-400 transition-colors">IT Industry</a></li>
              <li><a href="https://salescentri.com/solutions/by-industry/healthcare" className="text-gray-300 hover:text-orange-400 transition-colors">Healthcare</a></li>
              <li><a href="https://salescentri.com/solutions/by-use-case/sdr-teams" className="text-gray-300 hover:text-orange-400 transition-colors">SDR Teams</a></li>
              <li><a href="https://salescentri.com/solutions/use-case-navigator" className="text-gray-300 hover:text-orange-400 transition-colors">Use Case Navigator</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://salescentri.com/resources/case-studies" className="text-gray-300 hover:text-orange-400 transition-colors">Case Studies</a></li>
              <li><a href="https://salescentri.com/resources/whitepapers-ebooks" className="text-gray-300 hover:text-orange-400 transition-colors">Whitepapers</a></li>
              <li><a href="https://salescentri.com/resources/tutorials-webinars" className="text-gray-300 hover:text-orange-400 transition-colors">Tutorials</a></li>
              <li><a href="https://salescentri.com/docs/user-guide" className="text-gray-300 hover:text-orange-400 transition-colors">User Guide</a></li>
              <li><a href="https://salescentri.com/docs/api-reference" className="text-gray-300 hover:text-orange-400 transition-colors">API Reference</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-orange-400 transition-colors">About Us</Link></li>
              <li><a href="https://salescentri.com/company/careers" className="text-gray-300 hover:text-orange-400 transition-colors">Careers</a></li>
              <li><a href="https://salescentri.com/company/partners-affiliates" className="text-gray-300 hover:text-orange-400 transition-colors">Partners</a></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">Contact</Link></li>
              <li><a href="https://salescentri.com/contact/support-request" className="text-gray-300 hover:text-orange-400 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-navy-800">
          <div className="flex flex-wrap items-center justify-center space-x-8 mb-8">
            <div className="flex items-center space-x-2 text-gray-300">
              <Shield className="w-6 h-6 text-orange-500" />
              <span className="text-sm">SOC 2 Compliant</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Lock className="w-6 h-6 text-orange-500" />
              <span className="text-sm">GDPR Ready</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Award className="w-6 h-6 text-orange-500" />
              <span className="text-sm">ISO 27001</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
              <span>&copy; 2025 Digitalglim Solutions. All rights reserved.</span>
              <a href="https://salescentri.com/trust/security-privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="https://salescentri.com/trust/compliance-certifications" className="hover:text-orange-400 transition-colors">Terms of Service</a>
            </div>
            <div className="text-sm text-gray-400">
              <a 
                href="https://salescentri.com?utm_source=DigitalGlim.com&utm_medium=footer&utm_campaign=partner_network" 
                className="hover:text-orange-400 transition-colors"
              >
                Powered by Sales Intelligence Platform
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;