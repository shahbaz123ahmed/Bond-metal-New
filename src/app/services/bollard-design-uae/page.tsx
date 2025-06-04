import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle, Shield, Zap, Award, Wrench, Settings, Target } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bollard Design in UAE | Professional Security Bollard Solutions Dubai',
  description: 'Expert bollard design in UAE with crash-rated security and decorative solutions. Leading provider of vehicle barriers, access control bollards, and perimeter security across Dubai and UAE.',
  keywords: 'bollard design UAE, security bollards Dubai, vehicle barriers UAE, crash rated bollards Dubai, perimeter security UAE',
  openGraph: {
    title: 'Bollard Design in UAE | Professional Security Bollard Solutions',
    description: 'Expert bollard design in UAE with crash-rated security solutions.',
    images: ['/images/bollard.jpeg'],
    type: 'website',
    url: 'https://bondmetal.com/services/bollard-design-uae'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bollard Design in UAE | Professional Security Bollard Solutions',
    description: 'Expert bollard design in UAE with crash-rated security solutions.',
    images: ['/images/bollard.jpeg'],
  },
  alternates: {
    canonical: 'https://bondmetal.com/services/bollard-design-uae'
  }
}

export default function BollardDesignPage() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Bollard Design in UAE",
    "description": "Professional bollard design in UAE with expert security assessment, custom manufacturing, and crash-rated protection for commercial and government applications.",
    "provider": {
      "@type": "Organization",
      "name": "Bond Metal",
      "url": "https://bondmetal.com",
      "telephone": "+971 50 413 2803",
      "email": "info@bondmetal.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AE",
        "addressRegion": "Dubai",
        "addressLocality": "Dubai Industrial Area"
      }
    },
    "serviceType": "Bollard Design",
    "areaServed": {
      "@type": "Country",
      "name": "United Arab Emirates"
    }
  }

  const features = [
    "Custom bollard design in UAE and specialized fabrication solutions",
    "High-impact resistance specifications ensuring superior bollard design in UAE performance",
    "Anti-vehicle terrorism (AVT) solutions through expert bollard design in UAE",
    "Decorative and functional combinations in bollard design in UAE projects",
    "Stainless steel and aluminum options for bollard design in UAE applications",
    "Removable and fixed installation types available in bollard design in UAE",
    "LED lighting integration available for enhanced bollard design in UAE",
    "Crash-rated security bollards meeting international bollard design in UAE standards"
  ]

  const applications = [
    { title: "Commercial Security UAE", desc: "Office buildings, shopping centers, banks, and commercial facility perimeter protection requiring specialized bollard design in UAE" },
    { title: "Government & Public UAE", desc: "Government buildings, embassies, courthouses, and critical infrastructure security using bollard design in UAE" },
    { title: "Transportation Hubs UAE", desc: "Airports, metro stations, bus terminals, and transportation facility protection via bollard design in UAE" },
    { title: "Urban Planning UAE", desc: "Pedestrian areas, city centers, plazas, and urban landscape security integration through bollard design in UAE" },
    { title: "Industrial Facilities UAE", desc: "Manufacturing plants, warehouses, ports, and industrial perimeter security using bollard design in UAE" },
    { title: "Educational Institutions UAE", desc: "Schools, universities, campuses, and educational facility safety measures requiring bollard design in UAE" }
  ]

  const bollardTypes = [
    {
      icon: Shield,
      title: "Security Bollards UAE",
      desc: "High-security anti-vehicle barriers for critical protection in bollard design in UAE",
      details: ["Crash-rated performance for UAE", "Anti-terrorism standards", "Vehicle impact resistance", "Perimeter security solutions"]
    },
    {
      icon: Zap,
      title: "Removable Bollards UAE",
      desc: "Flexible access control with removable security posts for bollard design in UAE",
      details: ["Quick installation/removal for UAE", "Key-operated systems", "Emergency access provision", "Temporary restrictions"]
    },
    {
      icon: Award,
      title: "Decorative Bollards UAE",
      desc: "Aesthetic security solutions that enhance urban design in bollard design in UAE",
      details: ["Architectural integration for UAE", "Custom finishes", "Design versatility", "Visual appeal"]
    },
    {
      icon: Wrench,
      title: "LED Illuminated UAE",
      desc: "Safety bollards with integrated lighting systems for bollard design in UAE",
      details: ["Energy-efficient LED for UAE", "Enhanced visibility", "Night-time safety", "Solar options available"]
    },
    {
      icon: Settings,
      title: "Retractable Bollards UAE",
      desc: "Automated access control with hydraulic systems in bollard design in UAE",
      details: ["Hydraulic operation for UAE", "Remote control access", "Traffic management", "High security rating"]
    },
    {
      icon: Target,
      title: "Fixed Bollards UAE",
      desc: "Permanent security installations for constant protection via bollard design in UAE",
      details: ["Concrete foundation for UAE", "Maximum security", "Weather resistant", "Long-term solution"]
    }
  ]

  const benefits = [
    {
      title: "Security Excellence UAE",
      desc: "Engineered to meet international security standards including ASTM F2656 and PAS 68 for vehicle impact resistance in bollard design in UAE."
    },
    {
      title: "Custom Design UAE",
      desc: "Tailored bollard solutions that integrate seamlessly with architectural requirements and security needs for bollard design in UAE."
    },
    {
      title: "Quality Materials UAE",
      desc: "Premium stainless steel, aluminum, and steel construction with corrosion-resistant finishes for longevity in bollard design in UAE."
    },
    {
      title: "Professional Installation UAE",
      desc: "Expert installation with proper foundation design and compliance with local building codes and regulations for bollard design in UAE."
    }
  ]

  const process = [
    { 
      step: "Security Assessment for UAE", 
      desc: "Comprehensive site evaluation and threat analysis for bollard design in UAE",
      details: "Our security experts conduct detailed site assessments to understand vehicular traffic patterns, security threats, and protection requirements for optimal bollard placement and specifications in bollard design in UAE."
    },
    { 
      step: "Custom Design for UAE", 
      desc: "Engineered bollard solutions tailored to your requirements for bollard design in UAE",
      details: "Professional design services including structural calculations, material selection, and aesthetic integration to meet both security objectives and architectural requirements in bollard design in UAE."
    },
    { 
      step: "Manufacturing for UAE", 
      desc: "Precision fabrication using premium materials and techniques for bollard design in UAE",
      details: "Expert manufacturing using high-grade materials with quality control processes ensuring every bollard meets specified impact resistance and durability standards for bollard design in UAE."
    },
    { 
      step: "Installation & Testing UAE", 
      desc: "Professional installation with performance verification for bollard design in UAE",
      details: "Complete installation including foundation work, electrical connections for illuminated units, and final testing to ensure all bollards meet operational and security specifications in bollard design in UAE."
    }
  ]

  const specifications = [
    { property: "Impact Ratings UAE", value: "K4, K8, K12 (ASTM F2656)" },
    { property: "Material Options UAE", value: "Stainless Steel, Aluminum, Steel" },
    { property: "Height Range UAE", value: "600mm - 1200mm" },
    { property: "Diameter Range UAE", value: "100mm - 300mm" },
    { property: "Foundation Depth UAE", value: "600mm - 1500mm" },
    { property: "Surface Finishes UAE", value: "Powder Coat, Anodized, Polished" },
    { property: "LED Integration UAE", value: "Available with solar options" },
    { property: "Operating Temperature UAE", value: "-20°C to +60°C" }
  ]

  const industries = [
    "Government & Defense UAE",
    "Commercial Buildings UAE", 
    "Transportation Hubs UAE",
    "Educational Institutions UAE",
    "Healthcare Facilities UAE",
    "Financial Institutions UAE",
    "Retail & Shopping UAE",
    "Industrial Complexes UAE"
  ]

  const securityStandards = [
    { 
      standard: "ASTM F2656 for UAE", 
      desc: "Standard test method for vehicle crash testing of perimeter barriers used in bollard design in UAE",
      rating: "K4, K8, K12 ratings available for bollard design in UAE"
    },
    { 
      standard: "PAS 68 for UAE", 
      desc: "UK standard for impact test specifications for vehicle security barriers in bollard design in UAE",
      rating: "Various speed and weight classifications for bollard design in UAE"
    },
    { 
      standard: "IWA 14-1 for UAE", 
      desc: "International workshop agreement on vehicle security barriers for bollard design in UAE",
      rating: "Global security compliance for bollard design in UAE"
    },
    { 
      standard: "DOS SD-STD-02.01 for UAE", 
      desc: "US Department of State standard for vehicle barriers in bollard design in UAE",
      rating: "Embassy and government facility compliance for bollard design in UAE"
    }
  ]

  const designFeatures = [
    "Anti-climb surface design for bollard design in UAE",
    "Corrosion-resistant coatings in bollard design in UAE",
    "Tamper-resistant hardware for bollard design in UAE",
    "Reflective strip options in bollard design in UAE",
    "Custom color matching for bollard design in UAE",
    "Architectural integration in bollard design in UAE",
    "Weather-resistant electronics for bollard design in UAE",
    "Low maintenance requirements in bollard design in UAE"
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Navigation Bar Space */}
        <div className="h-24"></div>

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto px-4">
            {/* Back Navigation */}
            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Bollard Design <span className="text-orange-500">in UAE</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Professional bollard design in UAE and manufacturing services providing physical security and 
                  access control solutions. We specialize in crash-rated, decorative, and functional 
                  bollards for commercial, government, and public applications across Dubai and the UAE through expert bollard design in UAE.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    Get Security Assessment
                  </Link>
                  <Link 
                    href="/portfolio"
                    className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-center"
                  >
                    View Projects
                  </Link>
                </div>
              </div>

              {/* Replace stats section with image */}
              <div className="relative">
                <Image 
                  src="/images/bollard.jpeg"
                  alt="Professional Bollard Design in UAE - Security Solutions and Vehicle Barriers" 
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Why Choose Our Bollard <span className="text-orange-500">Design in UAE Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Expert security solutions combining functionality, aesthetics, and proven protection standards for bollard design in UAE.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-300">
                  <h3 className="text-xl font-bold text-orange-500 mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.desc}</p>
                </div>
              ))}
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 bg-slate-800 p-6 rounded-xl border border-slate-700">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bollard Types Section */}
        <section className="py-20 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Bollard Types & <span className="text-orange-500">Solutions</span>
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive range of security bollards for diverse protection and access control requirements in bollard design in UAE
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bollardTypes.map((bollard, index) => {
                const IconComponent = bollard.icon
                return (
                  <div key={index} className="bg-slate-700 p-8 rounded-xl border border-slate-600 hover:border-orange-500 transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-orange-500">{bollard.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6">{bollard.desc}</p>
                    <ul className="space-y-2">
                      {bollard.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Security Standards Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Security <span className="text-orange-500">Standards</span>
              </h2>
              <p className="text-xl text-gray-300">
                Compliance with international security standards for proven protection performance in bollard design in UAE
              </p>
            </div>

            <div className="space-y-6">
              {securityStandards.map((standard, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-orange-500 mb-2">{standard.standard}</h3>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Description</h4>
                      <p className="text-gray-300">{standard.desc}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Ratings</h4>
                      <p className="text-gray-300">{standard.rating}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Features Section */}
        <section className="py-20 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Design <span className="text-orange-500">Features</span>
              </h2>
              <p className="text-xl text-gray-300">
                Advanced design features ensuring optimal performance and longevity in bollard design in UAE
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {designFeatures.map((feature, index) => (
                <div key={index} className="bg-slate-700 p-6 rounded-xl border border-slate-600 hover:border-orange-500 transition-all duration-300 text-center">
                  <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-white">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Technical <span className="text-orange-500">Specifications</span>
              </h2>
              <p className="text-xl text-gray-300">
                Detailed specifications for our bollard design in UAE capabilities and manufacturing
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {specifications.map((spec, index) => (
                  <div key={index} className={`p-6 border-b border-slate-700 ${index % 2 === 1 ? 'md:border-l' : ''} last:border-b-0 md:last:border-b hover:bg-slate-700 transition-colors`}>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{spec.property}</span>
                      <span className="text-orange-500 font-semibold">{spec.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Applications Across <span className="text-orange-500">Sectors</span>
              </h2>
              <p className="text-xl text-gray-300">
                Professional bollard solutions for comprehensive security and access control needs in bollard design in UAE
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applications.map((app, index) => (
                <div key={index} className="bg-slate-700 p-8 rounded-xl border border-slate-600 hover:border-orange-500 transition-all duration-300 group">
                  <h3 className="text-xl font-bold text-orange-500 mb-4 group-hover:text-orange-400 transition-colors">
                    {app.title}
                  </h3>
                  <p className="text-gray-300">{app.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Industries We <span className="text-orange-500">Protect</span>
              </h2>
              <p className="text-xl text-gray-300">
                Trusted security bollard solutions across critical infrastructure and commercial sectors for bollard design in UAE
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-xl text-center hover:bg-slate-700 transition-colors border border-slate-700 hover:border-orange-500">
                  <h3 className="font-semibold text-white">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Our Design & Installation <span className="text-orange-500">Process</span>
              </h2>
              <p className="text-xl text-gray-300">
                Systematic approach ensuring optimal security performance and seamless integration for bollard design in UAE
              </p>
            </div>

            <div className="space-y-12">
              {process.map((step, index) => (
                <div key={index} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/3">
                    <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold text-white mb-4 mx-auto lg:mx-0">
                      {index + 1}
                    </div>
                  </div>
                  <div className="lg:w-2/3 bg-slate-700 p-8 rounded-xl border border-slate-600">
                    <h3 className="text-2xl font-bold text-orange-500 mb-4">{step.step}</h3>
                    <p className="text-lg text-gray-300 mb-4">{step.desc}</p>
                    <p className="text-gray-400">{step.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready for Professional Bollard Design in UAE?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Get expert bollard design in UAE services with security assessment and proven protection standards. 
              Contact us for site evaluation and competitive quotes for your bollard design in UAE security requirements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                <Phone className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Call Us</h3>
                <p className="text-orange-100">+971 50 413 2803</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                <Mail className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Email Us</h3>
                <p className="text-orange-100">info@bondmetal.com</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                <MessageCircle className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">WhatsApp</h3>
                <p className="text-orange-100">Quick Response</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-center inline-block"
              >
                Get Security Assessment
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-block text-center"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}