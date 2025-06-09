import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle, Shield, Zap, Award, Wrench, Settings, Target } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi | Professional Services',
  description: 'Expert Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi. Comprehensive solutions for aluminum composite panels, metal cladding systems, and architectural facades.',
  keywords: 'Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi, ACP fabrication Dubai, metal cladding installation Abu Dhabi, aluminum composite panel fabrication UAE, metal cladding works Dubai, ACP installation Abu Dhabi',
  openGraph: {
    title: 'Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi',
    description: 'Expert Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi with comprehensive architectural facade solutions.',
    images: ['/images/acp-metal-cladding-dubai.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi',
    description: 'Expert Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi.',
    images: ['/images/acp-metal-cladding-dubai.jpg'],
  },
  alternates: {
    canonical: 'https://bondmetal.com/services/fabrication-installation-acp-metal-cladding-dubai-abu-dhabi'
  }
}

export default function ACPMetalCladdingPage() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi",
    "description": "Professional Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi including aluminum composite panels, metal cladding, and architectural facade solutions.",
    "provider": {
      "@type": "Organization",
      "name": "Bond Metal Solutions",
      "telephone": "+971 50 413 2803",
      "email": "info@bondmetal.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AE",
        "addressRegion": "Dubai"
      }
    },
    "serviceType": "Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi",
    "areaServed": [
      {
        "@type": "City",
        "name": "Dubai"
      },
      {
        "@type": "City", 
        "name": "Abu Dhabi"
      }
    ],
    "offers": {
      "@type": "Offer",
      "description": "Complete Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi services"
    }
  }

  const features = [
    "Custom ACP panel fabrication for Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi",
    "Metal cladding system design through Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi",
    "Professional installation services via Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi",
    "Quality control and testing in Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi",
    "Weather-resistant solutions for Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi",
    "Fire-rated panel options available in Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi"
  ]

  const applications = [
    { title: "Commercial Towers Dubai & Abu Dhabi", desc: "High-rise office buildings, corporate headquarters, and modern commercial facades through Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi" },
    { title: "Residential Projects Dubai & Abu Dhabi", desc: "Luxury apartments, villa complexes, residential towers, and housing developments using Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi" },
    { title: "Industrial Buildings Dubai & Abu Dhabi", desc: "Warehouses, factories, manufacturing facilities, and industrial complex cladding solutions via Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi" },
    { title: "Retail Centers Dubai & Abu Dhabi", desc: "Shopping malls, showrooms, retail outlets, and commercial storefronts with modern cladding featuring Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi" },
    { title: "Hospitality Venues Dubai & Abu Dhabi", desc: "Hotels, resorts, restaurants, and hospitality facilities with premium facade solutions utilizing Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi" },
    { title: "Government Buildings Dubai & Abu Dhabi", desc: "Public buildings, government facilities, and institutional projects with compliant cladding systems through Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi" }
  ]

  const claddingTypes = [
    {
      icon: Shield,
      title: "ACP Fabrication Dubai & Abu Dhabi",
      desc: "Custom aluminum composite panel fabrication and processing for Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi",
      details: ["Precision cutting for Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi", "Bending and forming techniques", "Edge finishing perfection", "Quality inspection protocols"]
    },
    {
      icon: Zap,
      title: "Metal Cladding Systems Dubai & Abu Dhabi",
      desc: "Comprehensive metal cladding fabrication and installation through Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi",
      details: ["Aluminum cladding solutions", "Steel panel systems installation", "Composite materials expertise", "Custom profiles manufacturing"]
    },
    {
      icon: Award,
      title: "Facade Engineering Dubai & Abu Dhabi",
      desc: "Complete facade system design and engineering via Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi",
      details: ["Structural analysis expertise", "Thermal calculations precision", "Wind load assessment standards", "Code compliance assurance"]
    },
    {
      icon: Wrench,
      title: "Installation Services Dubai & Abu Dhabi",
      desc: "Professional installation with certified technicians for Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi",
      details: ["Mounting systems installation", "Weatherproofing excellence", "Safety compliance standards", "Quality assurance protocols"]
    },
    {
      icon: Settings,
      title: "Custom Solutions Dubai & Abu Dhabi",
      desc: "Tailored cladding solutions for unique requirements using Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi",
      details: ["Complex geometries handling", "Special finishes application", "Architectural features integration", "Design integration solutions"]
    },
    {
      icon: Target,
      title: "Maintenance Support Dubai & Abu Dhabi",
      desc: "Ongoing maintenance and support services for Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi",
      details: ["Regular inspections scheduling", "Cleaning services provision", "Repair works execution", "Performance monitoring systems"]
    }
  ]

  const benefits = [
    {
      title: "Local Expertise for Dubai & Abu Dhabi",
      desc: "Specialized knowledge of Dubai and Abu Dhabi building codes, climate conditions, and architectural requirements through Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi."
    },
    {
      title: "Integrated Services for Dubai & Abu Dhabi",
      desc: "Complete fabrication and installation services under one roof ensuring quality control and project coordination via Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi."
    },
    {
      title: "Advanced Technology for Dubai & Abu Dhabi",
      desc: "State-of-the-art fabrication equipment and installation techniques for superior quality and precision in Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi."
    },
    {
      title: "Project Management for Dubai & Abu Dhabi",
      desc: "Comprehensive project management from design to completion with timely delivery and quality assurance through Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi."
    }
  ]

  const process = [
    { 
      step: "Design & Engineering for Dubai & Abu Dhabi", 
      desc: "Comprehensive design development and engineering analysis for Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi",
      details: "Our team develops detailed designs, conducts structural analysis, and ensures compliance with Dubai and Abu Dhabi building codes and standards through expert Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi."
    },
    { 
      step: "Fabrication Planning for Dubai & Abu Dhabi", 
      desc: "Detailed fabrication planning and material procurement for Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi",
      details: "Professional planning of fabrication processes, material specifications, quality requirements, and production scheduling for optimal results in Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi."
    },
    { 
      step: "Manufacturing & QC for Dubai & Abu Dhabi", 
      desc: "Precision fabrication with comprehensive quality control for Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi",
      details: "Advanced fabrication using state-of-the-art equipment with continuous quality monitoring and testing to ensure superior products through Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi."
    },
    { 
      step: "Installation & Handover for Dubai & Abu Dhabi", 
      desc: "Professional installation and project completion for Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi",
      details: "Expert installation by certified technicians with comprehensive testing, quality verification, and complete project handover with documentation for Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi."
    }
  ]

  const specifications = [
    { property: "Service Areas for Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi", value: "Dubai & Abu Dhabi" },
    { property: "ACP Thickness for Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi", value: "3mm - 6mm options" },
    { property: "Metal Cladding for Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi", value: "Aluminum, Steel, Composite" },
    { property: "Panel Sizes for Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi", value: "Standard & custom sizes" },
    { property: "Fire Ratings for Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi", value: "A1, A2, B1 certified" },
    { property: "Installation Height for Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi", value: "Up to 200+ meters" },
    { property: "Weather Resistance for Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi", value: "25+ year performance" },
    { property: "Project Capacity for Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi", value: "Large scale projects" }
  ]

  const serviceAreas = [
    "Dubai Marina for Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi",
    "Downtown Dubai for Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi", 
    "Business Bay for Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi",
    "DIFC for Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi",
    "Abu Dhabi City for Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi",
    "Al Reem Island for Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi",
    "Yas Island for Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi",
    "Masdar City for Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi"
  ]

  const qualityFeatures = [
    "International standard compliance for Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi",
    "Dubai Municipality approvals in Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi",
    "Abu Dhabi building code compliance for Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi",
    "Fire safety certifications in Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi",
    "Weather resistance testing for Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi",
    "Professional installation teams in Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi",
    "Quality assurance procedures for Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi",
    "Comprehensive warranty coverage in Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi"
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
        <main>
          <section className="relative py-20 bg-gradient-to-br from-slate-800 to-slate-900">
            <div className="max-w-7xl mx-auto px-4">
              {/* Back Navigation */}
              <nav aria-label="Breadcrumb">
                <Link 
                  href="/services" 
                  className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 mb-8 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Services
                </Link>
              </nav>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <header>
                 <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-white">Fabrication and</span>{' '}
                  <span className="text-orange-500">Installation of ACP</span>{' '}
                  <span className="text-white">and Metal Cladding</span>{' '}
                  <span className="text-orange-500">- Dubai and Abu Dhabi</span>
                </h1>


                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Professional Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi systems. 
                    We specialize in comprehensive cladding solutions including aluminum composite panels, metal facade systems, 
                    and architectural cladding designed for UAE climate and building standards through expert Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/contact"
                      className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
                    >
                      Get Quote
                    </Link>
                  
                  </div>
                </header>

                {/* Replace stats section with image */}
                <div className="relative">
                  <Image 
                    src="/images/metalcladding.jpg"
                    alt="Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi" 
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
          <section className="py-20" aria-labelledby="features-heading">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 id="features-heading" className="text-4xl font-bold mb-6">
                  Why Choose Our <span className="text-orange-500">Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive fabrication and installation services with local expertise and advanced technology through Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi.
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

          {/* Service Types Section */}
          <section className="py-20 bg-slate-800">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  Complete <span className="text-orange-500">Cladding Solutions</span>
                </h2>
                <p className="text-xl text-gray-300">
                  Comprehensive Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi services for all building types
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {claddingTypes.map((type, index) => {
                  const IconComponent = type.icon
                  return (
                    <div key={index} className="bg-slate-700 p-8 rounded-xl border border-slate-600 hover:border-orange-500 transition-all duration-300 group">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-orange-500">{type.title}</h3>
                      </div>
                      <p className="text-gray-300 mb-6">{type.desc}</p>
                      <ul className="space-y-2">
                        {type.details.map((detail, idx) => (
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

          {/* Quality Features Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  Quality <span className="text-orange-500">Assurance</span>
                </h2>
                <p className="text-xl text-gray-300">
                  Comprehensive quality standards ensuring superior Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {qualityFeatures.map((feature, index) => (
                  <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-300 text-center">
                    <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-4" />
                    <h3 className="font-semibold text-white">{feature}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Technical Specifications */}
          <section className="py-20 bg-slate-800">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  Technical <span className="text-orange-500">Specifications</span>
                </h2>
                <p className="text-xl text-gray-300">
                  Detailed specifications for our Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi services
                </p>
              </div>

              <div className="bg-slate-700 rounded-xl border border-slate-600 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  {specifications.map((spec, index) => (
                    <div key={index} className={`p-6 border-b border-slate-600 ${index % 2 === 1 ? 'md:border-l' : ''} last:border-b-0 md:last:border-b hover:bg-slate-600 transition-colors`}>
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
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  Project <span className="text-orange-500">Applications</span>
                </h2>
                <p className="text-xl text-gray-300">
                  Comprehensive Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi for diverse building types
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {applications.map((app, index) => (
                  <div key={index} className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-300 group">
                    <h3 className="text-xl font-bold text-orange-500 mb-4 group-hover:text-orange-400 transition-colors">
                      {app.title}
                    </h3>
                    <p className="text-gray-300">{app.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Service Areas */}
          <section className="py-20 bg-slate-800">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  Service <span className="text-orange-500">Areas</span>
                </h2>
                <p className="text-xl text-gray-300">
                  Professional Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi across key locations
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="bg-slate-700 p-6 rounded-xl text-center hover:bg-slate-600 transition-colors border border-slate-600 hover:border-orange-500">
                    <h3 className="font-semibold text-white">{area}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  Our <span className="text-orange-500">Process</span>
                </h2>
                <p className="text-xl text-gray-300">
                  Systematic approach ensuring optimal quality and performance in Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi
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
                    <div className="lg:w-2/3 bg-slate-800 p-8 rounded-xl border border-slate-700">
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
                Ready for Professional Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi?
              </h2>
              <p className="text-xl text-orange-100 mb-8">
                Get expert Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi services. 
                Contact us for comprehensive consultation and competitive quotes for your Fabrication and Installation of ACP and Metal Cladding - Dubai and Abu Dhabi project.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                  <Phone className="w-8 h-8 text-white mx-auto mb-4" />
                  <h3 className="font-semibold text-white mb-2">Call for Cladding Services</h3>
                  <p className="text-orange-100">+971 50 413 2803</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                  <Mail className="w-8 h-8 text-white mx-auto mb-4" />
                  <h3 className="font-semibold text-white mb-2">Email for Cladding Services</h3>
                  <p className="text-orange-100">info@bondmetal.com</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                  <MessageCircle className="w-8 h-8 text-white mx-auto mb-4" />
                  <h3 className="font-semibold text-white mb-2">WhatsApp Cladding Services</h3>
                  <p className="text-orange-100">Quick Response</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Get Quote
                </Link>
               
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}