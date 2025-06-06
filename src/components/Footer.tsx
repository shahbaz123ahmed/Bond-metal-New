'use client'

import { Phone, Mail, Clock, Facebook, Instagram, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' }, // Add this line
    { name: 'Contact', href: '/contact/' },
  ]

  const services = [
    { name: 'ACP Cladding in UAE', href: '/services/acp-cladding.uae/'},
    { name: 'Brackets of Fabrications and Clamps', href: '/services/brackets-fabrication-uae'},
    { name: 'Stainless Steel Fabrication', href: '/services/stainless-steel-fabrication' },
    { name: 'Glass Installation in Dubai and Abu Dhabi', href: '/services/glass-installation-uae' },
  ]

  const industries = [
     { name: 'Glass Installation', href: '/services/glass-installation-uae'},
     { name: 'Aluminium Installation', href: '/services/aluminium-installation-uae'},
     { name: 'Fabrication and Installation of ACP and Metal Cladding-Dubai and Abu Dhabi', href: '/services/acp-and-metal-cladding'},
  ]

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="text-3xl font-bold">
                <span className="text-white font-black">BOND</span>
                <span className="text-orange-500"> METAL</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading metal fabrication company in UAE, specializing in precision cutting, 
              bending, and custom metalwork with over 15 years of excellence.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="tel:+971504132803"
                className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors cursor-pointer"
                aria-label="Call us at +971 50 413 2803"
              >
                <Phone className="w-4 h-4 text-orange-500" />
                <span>+971 50 413 2803</span>
              </a>
              <a 
                href="mailto:shajahan@bondmetaluae.com"
                className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors cursor-pointer"
                aria-label="Email us at shajahan@bondmetaluae.com"
              >
                <Mail className="w-4 h-4 text-orange-500" />
                <span>shajahan@bondmetaluae.com</span>
              </a>
              <a 
                href="https://maps.app.goo.gl/uF63eECniBz9bYTQ7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors cursor-pointer group"
                aria-label="View our location on Google Maps"
              >
                
                
              
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <Clock className="w-4 h-4 text-orange-500" />
                <span>Mon-Fri: 7AM-6PM, Sat: 8AM-2PM</span>
              </div>
            </div>

           
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries & Social */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Installation & Maintenance</h3>
            <ul className="space-y-3 mb-8">
              {industries.map((industry, index) => (
                <li key={index}>
                  <a 
                    href={industry.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {industry.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/bondmetalfabricationllc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/bond.metal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-pink-600 transition-all duration-300"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Bond Metal. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  )
}