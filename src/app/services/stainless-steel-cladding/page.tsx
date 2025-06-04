import React from 'react'
import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle, Shield, Star, Zap, Wrench } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stainless Steel Cladding in Dubai | Premium SS Panel Installation UAE',
  description: 'Professional stainless steel cladding in Dubai with expert installation services. Leading provider of stainless steel panel cladding, facade solutions, and premium stainless steel cladding systems across Dubai and UAE.',
  keywords: 'stainless steel cladding Dubai, SS cladding Dubai, stainless steel panels Dubai, facade cladding Dubai, building cladding Dubai, stainless steel installation Dubai',
  openGraph: {
    title: 'Stainless Steel Cladding in Dubai | Premium SS Panel Installation',
    description: 'Professional stainless steel cladding in Dubai with expert installation services and premium stainless steel panels.',
    images: ['/images/stailnesclad.jpeg'],
    type: 'website',
    url: 'https://bondmetal.com/services/stainless-steel-cladding'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stainless Steel Cladding in Dubai | Premium SS Panel Installation',
    description: 'Professional stainless steel cladding in Dubai with expert installation services.',
    images: ['/images/stailnesclad.jpeg'],
  },
  alternates: {
    canonical: 'https://bondmetal.com/services/stainless-steel-cladding'
  }
}

export default function StainlessSteelCladdingPage() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Stainless Steel Cladding in Dubai",
    "description": "Professional stainless steel cladding in Dubai with expert installation services. Premium stainless steel panel cladding and facade solutions across Dubai and UAE.",
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
    "serviceType": "Stainless Steel Cladding",
    "areaServed": {
      "@type": "City",
      "name": "Dubai"
    }
  }

  const features = [
    "Premium stainless steel cladding in Dubai with 316L marine-grade stainless steel",
    "Exceptional corrosion resistance for Dubai's harsh climate conditions",
    "High strength-to-weight ratio for Dubai construction projects",
    "Hygienic and easy to clean stainless steel cladding solutions",
    "Temperature resistant up to 800°C for Dubai industrial applications",
    "Antimicrobial surface properties for Dubai healthcare facilities",
    "Recyclable and environmentally friendly stainless steel cladding",
    "Minimal maintenance requirements for Dubai building owners"
  ]

  const applications = [
    { title: "Healthcare Facilities Dubai", desc: "Hospitals, clinics, and laboratories requiring sterile stainless steel cladding in Dubai environments" },
    { title: "Food Processing Plants Dubai", desc: "Commercial kitchens and food manufacturing facilities with stainless steel cladding in Dubai" },
    { title: "Marine Environments Dubai", desc: "Coastal buildings and offshore structures requiring stainless steel cladding in Dubai exposed to saltwater" },
    { title: "Chemical Plants Dubai", desc: "Industrial facilities with stainless steel cladding in Dubai handling corrosive chemicals and acids" },
    { title: "High-End Architecture Dubai", desc: "Luxury buildings and modern architectural designs featuring stainless steel cladding in Dubai" },
    { title: "Transportation Infrastructure Dubai", desc: "Airports, metro stations, and terminals with stainless steel cladding in Dubai for high traffic requirements" }
  ]

  const finishOptions = [
    {
      icon: Shield,
      title: "Mirror Finish Dubai",
      desc: "Highly reflective surface for premium stainless steel cladding in Dubai aesthetic appeal",
      details: ["#8 mirror polish for Dubai projects", "Scratch-resistant coating", "Easy maintenance for Dubai climate", "Luxury appearance"]
    },
    {
      icon: Star,
      title: "Brushed Finish Dubai",
      desc: "Directional grain finish hiding fingerprints for stainless steel cladding in Dubai",
      details: ["Various grain patterns for Dubai architecture", "Fingerprint resistant", "Industrial aesthetic", "Cost-effective Dubai option"]
    },
    {
      icon: Zap,
      title: "Satin Finish Dubai",
      desc: "Smooth, low-gloss surface with subtle texture for stainless steel cladding in Dubai",
      details: ["Balanced appearance for Dubai buildings", "Moderate reflectivity", "Versatile Dubai application", "Easy cleaning"]
    },
    {
      icon: Wrench,
      title: "Bead Blasted Dubai",
      desc: "Uniform matte finish for contemporary stainless steel cladding in Dubai applications",
      details: ["Anti-glare properties for Dubai sun", "Uniform texture", "Modern Dubai appearance", "Durability focus"]
    }
  ]

  const benefits = [
    {
      title: "Superior Corrosion Resistance Dubai",
      desc: "Stainless steel cladding in Dubai with chromium content creates a protective oxide layer that prevents rust and corrosion in Dubai's harsh environments."
    },
    {
      title: "Hygienic Properties Dubai",
      desc: "Non-porous surface of stainless steel cladding in Dubai prevents bacteria growth, making it ideal for Dubai healthcare and food applications."
    },
    {
      title: "Fire Resistance Dubai",
      desc: "Excellent fire resistance properties of stainless steel cladding in Dubai with high melting point and non-combustible characteristics for Dubai buildings."
    },
    {
      title: "Structural Integrity Dubai",
      desc: "Stainless steel cladding in Dubai maintains strength and appearance over decades with minimal degradation in Dubai's climate conditions."
    }
  ]

  const process = [
    { 
      step: "Grade Selection for Dubai", 
      desc: "Selecting the appropriate stainless steel grade for your stainless steel cladding in Dubai environment",
      details: "We evaluate Dubai environmental conditions, chemical exposure, and aesthetic requirements to choose between 304, 316L, 321, or duplex stainless steel grades for optimal stainless steel cladding in Dubai performance."
    },
    { 
      step: "Precision Fabrication Dubai", 
      desc: "Advanced forming and welding techniques for perfect stainless steel cladding in Dubai results",
      details: "Using specialized equipment including laser cutting, precision bending, and TIG welding to maintain the integrity of the stainless steel cladding in Dubai while achieving complex geometries."
    },
    { 
      step: "Surface Treatment Dubai", 
      desc: "Professional finishing to achieve desired appearance and properties for stainless steel cladding in Dubai",
      details: "Application of various surface treatments including passivation, polishing, and protective coatings to enhance corrosion resistance and aesthetic appeal of stainless steel cladding in Dubai."
    },
    { 
      step: "Quality Installation Dubai", 
      desc: "Expert installation with proper handling and fastening systems for stainless steel cladding in Dubai",
      details: "Our certified Dubai installers use appropriate fasteners and techniques to prevent galvanic corrosion while ensuring structural integrity and long-term performance of stainless steel cladding in Dubai."
    }
  ]

  const specifications = [
    { property: "Material Grades Dubai", value: "304, 316L, 321, 2205 Duplex" },
    { property: "Thickness Range Dubai", value: "0.5mm - 8.0mm" },
    { property: "Panel Width Dubai", value: "Up to 2000mm" },
    { property: "Panel Length Dubai", value: "Up to 8000mm" },
    { property: "Tensile Strength Dubai", value: "515-620 MPa" },
    { property: "Melting Point Dubai", value: "1400-1450°C" },
    { property: "Density Dubai", value: "8.0 g/cm³" },
    { property: "Fire Rating Dubai", value: "Non-combustible A1" }
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
                  Stainless Steel <span className="text-orange-500">Cladding in Dubai</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Premium stainless steel cladding in Dubai offering unmatched durability, 
                  hygienic properties, and elegant aesthetics. Perfect for demanding environments 
                  requiring superior corrosion resistance and long-term performance with our expert stainless steel cladding in Dubai solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    Get Custom Quote
                  </Link>
                  <Link 
                    href="/portfolio"
                    className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-center"
                  >
                    View Portfolio
                  </Link>
                </div>
              </header>

              <div className="relative">
                <Image 
                  src="/images/stailnesclad.jpeg"
                  alt="Stainless Steel Cladding in Dubai - Premium SS Panel Solutions" 
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20" aria-labelledby="benefits-heading">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="benefits-heading" className="text-4xl font-bold mb-6">
                Why Choose Stainless Steel Cladding <span className="text-orange-500">in Dubai</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the superior benefits of premium stainless steel cladding in Dubai systems designed for Dubai&apos;s demanding climate.
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

        {/* Finish Options Section */}
        <section className="py-20 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Surface <span className="text-orange-500">Finishes</span>
              </h2>
              <p className="text-xl text-gray-300">
                Choose from our range of professional stainless steel surface finishes for stainless steel cladding in Dubai projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {finishOptions.map((finish, index) => {
                const IconComponent = finish.icon
                return (
                  <div key={index} className="bg-slate-700 p-8 rounded-xl border border-slate-600 hover:border-orange-500 transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-orange-500">{finish.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6">{finish.desc}</p>
                    <ul className="space-y-2">
                      {finish.details.map((detail, idx) => (
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

        {/* Specifications Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Technical <span className="text-orange-500">Specifications</span>
              </h2>
              <p className="text-xl text-gray-300">
                Detailed specifications for our premium stainless steel cladding in Dubai systems optimized for Dubai conditions
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {specifications.map((spec, index) => (
                  <div key={index} className={`p-6 border-b border-slate-700 ${index % 2 === 1 ? 'md:border-l' : ''} last:border-b-0 md:last:border-b hover:bg-slate-700 transition-colors`}>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 font-medium">{spec.property}</span>
                      <span className="text-orange-500 font-semibold">{spec.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 bg-slate-800" aria-labelledby="applications-heading">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="applications-heading" className="text-4xl font-bold mb-6">
                Ideal <span className="text-orange-500">Applications</span>
              </h2>
              <p className="text-xl text-gray-300">
                Stainless steel cladding solutions for demanding environments
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

        {/* Process Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Our Installation <span className="text-orange-500">Process</span>
              </h2>
              <p className="text-xl text-gray-300">
                Specialized approach for premium stainless steel installations
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
              Need Premium Stainless Steel Cladding?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Transform your project with our premium stainless steel cladding solutions. 
              Get expert consultation for demanding environments and applications.
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
                className="bg-white text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-center"
              >
                Get Started Now
              </Link>
              <Link 
                href="/portfolio"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 rounded-full font-semibold transition-all duration-300 text-center"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}