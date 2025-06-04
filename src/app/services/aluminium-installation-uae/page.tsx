import React from 'react'
import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle, Shield, Zap, Award, Wrench, Settings, Target } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aluminum Installation in Dubai and Abu Dhabi | Professional Installation Services',
  description: 'Expert Aluminum Installation in Dubai and Abu Dhabi across UAE. Specializing in curtain walls, facades, cladding, windows, doors, and structural aluminium installations with precision and quality.',
  keywords: 'Aluminum Installation in Dubai and Abu Dhabi, aluminum installation UAE, curtain wall installation Dubai, facade installation Abu Dhabi, aluminum cladding installation UAE, professional aluminum installer Dubai Abu Dhabi',
  openGraph: {
    title: 'Aluminum Installation in Dubai and Abu Dhabi | Professional Services',
    description: 'Expert Aluminum Installation in Dubai and Abu Dhabi across UAE. Professional installation of curtain walls, facades, cladding, and structural systems.',
    images: ['/images/aluminium-installation.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aluminum Installation in Dubai and Abu Dhabi | Professional Services',
    description: 'Expert Aluminum Installation in Dubai and Abu Dhabi across UAE.',
    images: ['/images/aluminium-installation.jpg'],
  },
  alternates: {
    canonical: 'https://bondmetal.com/services/aluminum-installation-dubai-abu-dhabi'
  }
}

export default function AluminumInstallationPage() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aluminum Installation in Dubai and Abu Dhabi",
    "description": "Professional Aluminum Installation in Dubai and Abu Dhabi across UAE including curtain walls, facades, cladding, windows, doors, and structural installations.",
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
    "serviceType": "Aluminum Installation in Dubai and Abu Dhabi",
    "areaServed": {
      "@type": "Place",
      "name": "Dubai and Abu Dhabi, UAE"
    },
    "offers": {
      "@type": "Offer",
      "description": "Professional Aluminum Installation in Dubai and Abu Dhabi services"
    }
  }

  const features = [
    "Certified installation technicians for Aluminum Installation in Dubai and Abu Dhabi",
    "Precision measurement and fitting in Aluminum Installation in Dubai and Abu Dhabi",
    "Quality assurance and testing for Aluminum Installation in Dubai and Abu Dhabi",
    "Structural integrity verification through Aluminum Installation in Dubai and Abu Dhabi",
    "Weather sealing and waterproofing via Aluminum Installation in Dubai and Abu Dhabi",
    "Safety compliance and certification in Aluminum Installation in Dubai and Abu Dhabi"
  ]

  const applications = [
    { title: "Commercial Buildings Dubai & Abu Dhabi", desc: "Office towers, corporate headquarters, commercial complexes, and business centers through Aluminum Installation in Dubai and Abu Dhabi" },
    { title: "Residential Projects Dubai & Abu Dhabi", desc: "Luxury apartments, villas, residential towers, and housing developments using Aluminum Installation in Dubai and Abu Dhabi" },
    { title: "Retail Facilities Dubai & Abu Dhabi", desc: "Shopping malls, showrooms, retail stores, and commercial storefronts via Aluminum Installation in Dubai and Abu Dhabi" },
    { title: "Industrial Buildings Dubai & Abu Dhabi", desc: "Warehouses, factories, industrial complexes, and manufacturing facilities featuring Aluminum Installation in Dubai and Abu Dhabi" },
    { title: "Educational Institutions Dubai & Abu Dhabi", desc: "Universities, schools, training centers, and educational facilities with Aluminum Installation in Dubai and Abu Dhabi" },
    { title: "Healthcare Facilities Dubai & Abu Dhabi", desc: "Hospitals, clinics, medical centers, and healthcare buildings using Aluminum Installation in Dubai and Abu Dhabi" }
  ]

  const installationTypes = [
    {
      icon: Shield,
      title: "Curtain Wall Installation Dubai & Abu Dhabi",
      desc: "Professional installation of aluminum curtain wall systems for Aluminum Installation in Dubai and Abu Dhabi",
      details: ["Structural glazing for Aluminum Installation in Dubai and Abu Dhabi", "Weather sealing systems", "Thermal performance optimization", "Safety compliance standards"]
    },
    {
      icon: Zap,
      title: "Facade Installation Dubai & Abu Dhabi",
      desc: "Complete aluminum facade system installation through Aluminum Installation in Dubai and Abu Dhabi",
      details: ["Architectural aesthetics enhancement", "Energy efficiency optimization", "Wind resistance engineering", "Maintenance access provisions"]
    },
    {
      icon: Award,
      title: "Cladding Installation Dubai & Abu Dhabi",
      desc: "Precision aluminum cladding installation services via Aluminum Installation in Dubai and Abu Dhabi",
      details: ["Panel alignment precision", "Joint sealing technology", "Fixing systems installation", "Quality control procedures"]
    },
    {
      icon: Wrench,
      title: "Window & Door Installation Dubai & Abu Dhabi",
      desc: "Professional aluminum window and door fitting using Aluminum Installation in Dubai and Abu Dhabi",
      details: ["Accurate measurement techniques", "Secure fixing methods", "Weather sealing applications", "Operation testing procedures"]
    },
    {
      icon: Settings,
      title: "Structural Installation Dubai & Abu Dhabi",
      desc: "Heavy-duty aluminum structural component installation for Aluminum Installation in Dubai and Abu Dhabi",
      details: ["Load calculations engineering", "Connection details design", "Safety factors implementation", "Code compliance assurance"]
    },
    {
      icon: Target,
      title: "Specialty Systems Dubai & Abu Dhabi",
      desc: "Custom aluminum system installation services through Aluminum Installation in Dubai and Abu Dhabi",
      details: ["Unique designs implementation", "Complex geometries handling", "Special requirements fulfillment", "Technical support provision"]
    }
  ]

  const benefits = [
    {
      title: "Expert Installation Team for Dubai & Abu Dhabi",
      desc: "Certified technicians with extensive experience in aluminum system installation ensuring precise and reliable results through Aluminum Installation in Dubai and Abu Dhabi."
    },
    {
      title: "UAE Climate Expertise for Dubai & Abu Dhabi",
      desc: "Specialized knowledge of UAE environmental conditions ensuring optimal installation techniques and materials via Aluminum Installation in Dubai and Abu Dhabi."
    },
    {
      title: "Quality Assurance for Dubai & Abu Dhabi",
      desc: "Comprehensive testing and inspection procedures ensuring every installation meets or exceeds industry standards in Aluminum Installation in Dubai and Abu Dhabi."
    },
    {
      title: "Project Management for Dubai & Abu Dhabi",
      desc: "Complete project coordination from planning to completion with timely delivery and minimal disruption through Aluminum Installation in Dubai and Abu Dhabi."
    }
  ]

  const process = [
    { 
      step: "Site Survey & Planning for Dubai & Abu Dhabi", 
      desc: "Detailed site assessment and installation planning for Aluminum Installation in Dubai and Abu Dhabi",
      details: "Our team conducts comprehensive site surveys, structural assessments, and develops detailed installation plans ensuring optimal execution and safety for Aluminum Installation in Dubai and Abu Dhabi."
    },
    { 
      step: "Pre-Installation Preparation for Dubai & Abu Dhabi", 
      desc: "Material verification and site preparation for Aluminum Installation in Dubai and Abu Dhabi",
      details: "Complete material inspection, site preparation, safety setup, and coordination with other trades to ensure smooth installation process in Aluminum Installation in Dubai and Abu Dhabi."
    },
    { 
      step: "Professional Installation for Dubai & Abu Dhabi", 
      desc: "Precision installation by certified technicians for Aluminum Installation in Dubai and Abu Dhabi",
      details: "Expert installation using specialized equipment and techniques with continuous quality monitoring and safety compliance throughout the process of Aluminum Installation in Dubai and Abu Dhabi."
    },
    { 
      step: "Testing & Handover for Dubai & Abu Dhabi", 
      desc: "Comprehensive testing and project completion for Aluminum Installation in Dubai and Abu Dhabi",
      details: "Complete system testing including weather sealing, structural integrity, and performance verification with detailed handover documentation for Aluminum Installation in Dubai and Abu Dhabi."
    }
  ]

  const specifications = [
    { property: "Installation Height for Aluminum Installation in Dubai and Abu Dhabi", value: "Up to 200 meters" },
    { property: "Panel Size Range for Aluminum Installation in Dubai and Abu Dhabi", value: "Up to 6m x 3m" },
    { property: "Tolerance Accuracy for Aluminum Installation in Dubai and Abu Dhabi", value: "±2mm precision" },
    { property: "Installation Rate for Aluminum Installation in Dubai and Abu Dhabi", value: "500+ m²/day" },
    { property: "Weather Conditions for Aluminum Installation in Dubai and Abu Dhabi", value: "All-weather capable" },
    { property: "Safety Standards for Aluminum Installation in Dubai and Abu Dhabi", value: "OSHA & UAE compliant" },
    { property: "Testing Standards for Aluminum Installation in Dubai and Abu Dhabi", value: "ASTM, EN certified" },
    { property: "Warranty Period for Aluminum Installation in Dubai and Abu Dhabi", value: "5-10 years coverage" }
  ]

  const industries = [
    "Commercial Construction requiring Aluminum Installation in Dubai and Abu Dhabi",
    "Residential Development using Aluminum Installation in Dubai and Abu Dhabi",
    "Industrial Buildings employing Aluminum Installation in Dubai and Abu Dhabi",
    "Healthcare Facilities utilizing Aluminum Installation in Dubai and Abu Dhabi",
    "Educational Institutions featuring Aluminum Installation in Dubai and Abu Dhabi",
    "Hospitality Sector implementing Aluminum Installation in Dubai and Abu Dhabi",
    "Government Buildings with Aluminum Installation in Dubai and Abu Dhabi",
    "Mixed-Use Developments using Aluminum Installation in Dubai and Abu Dhabi"
  ]

  const qualityFeatures = [
    "Certified installation teams for Aluminum Installation in Dubai and Abu Dhabi",
    "Quality control checkpoints in Aluminum Installation in Dubai and Abu Dhabi",
    "Safety compliance protocols for Aluminum Installation in Dubai and Abu Dhabi",
    "Performance testing procedures in Aluminum Installation in Dubai and Abu Dhabi",
    "Weather resistance validation for Aluminum Installation in Dubai and Abu Dhabi",
    "Structural integrity verification in Aluminum Installation in Dubai and Abu Dhabi",
    "Documentation and reporting for Aluminum Installation in Dubai and Abu Dhabi",
    "Warranty and maintenance support for Aluminum Installation in Dubai and Abu Dhabi"
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
                  <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    <span className="text-white">Aluminum </span>
                    <span className="text-orange-500">Installation</span>
                    <span className="text-white"> in Dubai and</span>
                    <span className="text-orange-500"> Abu Dhabi</span>
                  </h1>

                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Professional Aluminum Installation in Dubai and Abu Dhabi across UAE. We specialize in precision 
                    installation of curtain walls, facades, cladding systems, windows, and doors with certified 
                    technicians ensuring quality, safety, and performance compliance for all Aluminum Installation in Dubai and Abu Dhabi projects.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/contact"
                      className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
                    >
                      Get Installation Assessment
                    </Link>
                    <Link 
                      href="/portfolio"
                      className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-center"
                    >
                      View Installation Projects
                    </Link>
                  </div>
                </header>

                {/* Replace stats section with image */}
                <div className="relative">
                  <Image 
                    src="/images/allumiinsta.jpg"
                    alt="Professional Aluminum Installation in Dubai and Abu Dhabi - Curtain Wall and Facade Installation" 
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
                  Why Choose Our <span className="text-orange-500">Aluminum Installation in Dubai and Abu Dhabi</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Professional installation services ensuring precision, quality, and long-term performance through Aluminum Installation in Dubai and Abu Dhabi.
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

          {/* Installation Types Section */}
          <section className="py-20 bg-slate-800">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  Installation <span className="text-orange-500">Services</span>
                </h2>
                <p className="text-xl text-gray-300">
                  Comprehensive aluminium installation solutions for diverse architectural requirements through Aluminum Installation in Dubai and Abu Dhabi
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {installationTypes.map((type, index) => {
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
                  Comprehensive quality control ensuring superior installation standards through Aluminum Installation in Dubai and Abu Dhabi
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
                  Installation <span className="text-orange-500">Specifications</span>
                </h2>
                <p className="text-xl text-gray-300">
                  Technical capabilities and performance standards for our Aluminum Installation in Dubai and Abu Dhabi services
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
                  Applications Across <span className="text-orange-500">Industries</span>
                </h2>
                <p className="text-xl text-gray-300">
                  Professional Aluminum Installation in Dubai and Abu Dhabi services for diverse building types
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

          {/* Industries Served */}
          <section className="py-20 bg-slate-800">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  Industries We <span className="text-orange-500">Serve</span>
                </h2>
                <p className="text-xl text-gray-300">
                  Trusted Aluminum Installation in Dubai and Abu Dhabi services across multiple industry sectors
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {industries.map((industry, index) => (
                  <div key={index} className="bg-slate-700 p-6 rounded-xl text-center hover:bg-slate-600 transition-colors border border-slate-600 hover:border-orange-500">
                    <h3 className="font-semibold text-white">{industry}</h3>
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
                  Installation <span className="text-orange-500">Process</span>
                </h2>
                <p className="text-xl text-gray-300">
                  Systematic approach ensuring optimal planning and precise installation execution for Aluminum Installation in Dubai and Abu Dhabi
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
                Ready for Professional Aluminum Installation in Dubai and Abu Dhabi?
              </h2>
              <p className="text-xl text-orange-100 mb-8">
                Get expert Aluminum Installation in Dubai and Abu Dhabi services with certified technicians and quality assurance. 
                Contact us for detailed site assessment and competitive quotes for your Aluminum Installation in Dubai and Abu Dhabi requirements.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                  <Phone className="w-8 h-8 text-white mx-auto mb-4" />
                  <h3 className="font-semibold text-white mb-2">Call for Installation</h3>
                  <p className="text-orange-100">+971 50 413 2803</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                  <Mail className="w-8 h-8 text-white mx-auto mb-4" />
                  <h3 className="font-semibold text-white mb-2">Email for Installation</h3>
                  <p className="text-orange-100">info@bondmetal.com</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                  <MessageCircle className="w-8 h-8 text-white mx-auto mb-4" />
                  <h3 className="font-semibold text-white mb-2">WhatsApp Installation</h3>
                  <p className="text-orange-100">Quick Response</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Get Installation Assessment
                </Link>
                <Link 
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-block text-center"
                >
                  Request Installation Quote
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}