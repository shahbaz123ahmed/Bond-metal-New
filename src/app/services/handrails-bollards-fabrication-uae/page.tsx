import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle, Shield, Zap, Award, Wrench, Settings, Target } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Handrails & Bollards Dubai & Abu Dhabi | Professional Installation UAE',
  description: 'Expert handrails & bollards Dubai & Abu Dhabi installation services. Leading provider of safety handrails and security bollards across Dubai and Abu Dhabi with professional fabrication.',
  keywords: 'handrails bollards Dubai Abu Dhabi, safety handrails Dubai, security bollards Abu Dhabi, handrail installation Dubai, bollard fabrication UAE',
  openGraph: {
    title: 'Handrails & Bollards Dubai & Abu Dhabi | Professional Installation',
    description: 'Expert handrails & bollards Dubai & Abu Dhabi installation services with safety compliance.',
    images: ['/images/drills.jpg'],
    type: 'website',
    url: 'https://bondmetal.com/services/handrails-bollards-fabrication-uae'
  }
}

export default function HandrailsBollardsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Handrails & Bollards Dubai & Abu Dhabi",
    "description": "Professional handrails & bollards Dubai & Abu Dhabi installation services with safety compliance and custom fabrication.",
    "provider": {
      "@type": "Organization",
      "name": "Bond Metal",
      "telephone": "+971 50 413 2803",
      "email": "info@bondmetal.com"
    },
    "areaServed": ["Dubai", "Abu Dhabi"]
  }

  const features = [
    "Custom handrails & bollards Dubai & Abu Dhabi design and manufacturing solutions",
    "Premium stainless steel fabrication for handrails & bollards Dubai & Abu Dhabi",
    "Complete safety compliance to UAE building codes for handrails & bollards Dubai & Abu Dhabi",
    "Professional architectural integration solutions for handrails & bollards Dubai & Abu Dhabi",
    "Advanced weather-resistant finishes for handrails & bollards Dubai & Abu Dhabi",
    "Full accessibility (ADA) compliant designs for handrails & bollards Dubai & Abu Dhabi",
    "Combined security and decorative solutions for handrails & bollards Dubai & Abu Dhabi",
    "Expert professional installation services for handrails & bollards Dubai & Abu Dhabi"
  ]

  const applications = [
    { title: "Commercial Buildings Dubai", desc: "Office complexes, shopping malls, hotels requiring professional handrails & bollards Dubai & Abu Dhabi solutions" },
    { title: "Residential Projects Abu Dhabi", desc: "Luxury villas, apartment buildings with custom designed handrails & bollards Dubai & Abu Dhabi" },
    { title: "Public Infrastructure Dubai", desc: "Metro stations, airports, government buildings using safety handrails & bollards Dubai & Abu Dhabi" },
    { title: "Healthcare Facilities Abu Dhabi", desc: "Hospitals, clinics with accessible compliant handrails & bollards Dubai & Abu Dhabi systems" },
    { title: "Educational Institutions Dubai", desc: "Schools, universities requiring safety certified handrails & bollards Dubai & Abu Dhabi" },
    { title: "Industrial Facilities Abu Dhabi", desc: "Manufacturing plants with heavy-duty engineered handrails & bollards Dubai & Abu Dhabi" }
  ]

  const productTypes = [
    {
      icon: Shield,
      title: "Safety Handrails Dubai",
      desc: "ADA compliant safety handrails for comprehensive handrails & bollards Dubai & Abu Dhabi projects",
      details: ["Building code compliance for Dubai", "Ergonomic grip design", "Slip-resistant surfaces", "Multiple mounting options"]
    },
    {
      icon: Zap,
      title: "Security Bollards Abu Dhabi",
      desc: "Vehicle barrier security bollards for enhanced handrails & bollards Dubai & Abu Dhabi security",
      details: ["Crash-rated options for Abu Dhabi", "Removable designs", "LED lighting integration", "Custom heights available"]
    },
    {
      icon: Award,
      title: "Decorative Handrails Dubai",
      desc: "Architectural decorative handrails enhancing handrails & bollards Dubai & Abu Dhabi aesthetics",
      details: ["Custom design patterns for Dubai", "Premium finishes", "Glass panel integration", "Modern styling options"]
    },
    {
      icon: Wrench,
      title: "Balustrade Systems Abu Dhabi",
      desc: "Complete integrated balustrade systems for handrails & bollards Dubai & Abu Dhabi",
      details: ["Glass and metal combinations", "Wind load calculations for Abu Dhabi", "Safety glass compliance", "Weather sealing"]
    },
    {
      icon: Settings,
      title: "Industrial Handrails Dubai",
      desc: "Heavy-duty industrial handrails for commercial handrails & bollards Dubai & Abu Dhabi industrial use",
      details: ["High-strength construction for Dubai", "Corrosion resistance", "Chemical compatibility", "Safety compliance"]
    },
    {
      icon: Target,
      title: "Custom Solutions Abu Dhabi",
      desc: "Bespoke custom engineered handrails & bollards Dubai & Abu Dhabi combinations",
      details: ["Site-specific design for Abu Dhabi", "Architectural integration", "Multi-functional systems", "Branding incorporation"]
    }
  ]

  const benefits = [
    {
      title: "Local Expertise Dubai",
      desc: "Deep understanding of UAE building codes and architectural preferences for handrails & bollards Dubai & Abu Dhabi projects."
    },
    {
      title: "Quality Materials Abu Dhabi",
      desc: "Premium stainless steel materials selected for Gulf climate in handrails & bollards Dubai & Abu Dhabi installations."
    },
    {
      title: "Safety Compliance Dubai",
      desc: "Full compliance with UAE safety requirements for handrails & bollards Dubai & Abu Dhabi applications."
    },
    {
      title: "Complete Service Abu Dhabi",
      desc: "End-to-end service for handrails & bollards Dubai & Abu Dhabi from design through installation."
    }
  ]

  const process = [
    { 
      step: "Site Assessment Dubai", 
      desc: "Comprehensive evaluation for handrails & bollards Dubai & Abu Dhabi requirements",
      details: "Our engineers assess structural requirements and safety needs for optimal handrails & bollards Dubai & Abu Dhabi solutions."
    },
    { 
      step: "Design & Engineering Abu Dhabi", 
      desc: "Custom design development for handrails & bollards Dubai & Abu Dhabi",
      details: "Professional CAD design services optimized for UAE conditions and handrails & bollards Dubai & Abu Dhabi requirements."
    },
    { 
      step: "Fabrication Dubai", 
      desc: "Precision manufacturing for handrails & bollards Dubai & Abu Dhabi",
      details: "Expert fabrication ensuring quality control for handrails & bollards Dubai & Abu Dhabi projects."
    },
    { 
      step: "Installation & Handover Abu Dhabi", 
      desc: "Professional installation for handrails & bollards Dubai & Abu Dhabi",
      details: "Complete installation with warranties for handrails & bollards Dubai & Abu Dhabi systems."
    }
  ]

  const specifications = [
    { property: "Material Options Dubai", value: "SS 304/316, Aluminum 6061/6063" },
    { property: "Handrail Heights Abu Dhabi", value: "900mm - 1100mm (UAE Standard)" },
    { property: "Bollard Heights Dubai", value: "600mm - 1200mm" },
    { property: "Installation Areas", value: "Dubai, Abu Dhabi, UAE" }
  ]

  const qualityFeatures = [
    "Certified welding processes for handrails & bollards Dubai & Abu Dhabi",
    "Material traceability for handrails & bollards Dubai & Abu Dhabi",
    "Load testing capabilities for handrails & bollards Dubai & Abu Dhabi",
    "Dimensional inspection for handrails & bollards Dubai & Abu Dhabi",
    "Surface quality control for handrails & bollards Dubai & Abu Dhabi",
    "Compliance verification for handrails & bollards Dubai & Abu Dhabi",
    "Installation testing for handrails & bollards Dubai & Abu Dhabi",
    "Warranty coverage for handrails & bollards Dubai & Abu Dhabi"
  ]

  const locations = [
    "Dubai Marina", "Downtown Dubai", "Business Bay", "DIFC",
    "Abu Dhabi CBD", "Yas Island", "Al Reem Island", "Dubai Hills"
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="h-24"></div>

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto px-4">
            <Link href="/services" className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Handrails & Bollards <span className="text-orange-500">Dubai & Abu Dhabi</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Professional fabrication and installation of handrails & bollards Dubai & Abu Dhabi. 
                  We specialize in safety-compliant, architecturally integrated solutions for handrails & bollards Dubai & Abu Dhabi 
                  using premium materials designed for UAE climate, delivering complete services from design to installation for handrails & bollards Dubai & Abu Dhabi.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center">
                    Get Site Assessment
                  </Link>
                  <Link href="/portfolio" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-center">
                    View Portfolio
                  </Link>
                </div>
              </div>

              <div className="relative">
                <Image src="/images/drills.jpg" alt="Professional Handrails & Bollards Dubai & Abu Dhabi Installation Services" width={600} height={400} className="rounded-2xl object-cover" priority />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Why Choose Our Handrails & Bollards <span className="text-orange-500">Dubai & Abu Dhabi Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Local expertise with international quality standards for all handrails & bollards Dubai & Abu Dhabi projects.
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

        {/* Product Types Section */}
        <section className="py-20 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Product Types & <span className="text-orange-500">Solutions</span>
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive range of handrails & bollards Dubai & Abu Dhabi solutions for diverse projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productTypes.map((product, index) => {
                const IconComponent = product.icon
                return (
                  <div key={index} className="bg-slate-700 p-8 rounded-xl border border-slate-600 hover:border-orange-500 transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-orange-500">{product.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6">{product.desc}</p>
                    <ul className="space-y-2">
                      {product.details.map((detail, idx) => (
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
                Comprehensive quality control ensuring superior handrails & bollards Dubai & Abu Dhabi performance
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
                Detailed specifications for handrails & bollards Dubai & Abu Dhabi capabilities
              </p>
            </div>

            <div className="bg-slate-700 rounded-xl border border-slate-600 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {specifications.map((spec, index) => (
                  <div key={index} className={`p-6 border-b border-slate-600 ${index % 2 === 1 ? 'md:border-l' : ''} last:border-b-0 hover:bg-slate-600 transition-colors`}>
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
                Applications Across <span className="text-orange-500">UAE Projects</span>
              </h2>
              <p className="text-xl text-gray-300">
                Professional handrails & bollards Dubai & Abu Dhabi solutions for diverse developments
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

        {/* Service Locations */}
        <section className="py-20 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Service <span className="text-orange-500">Locations</span>
              </h2>
              <p className="text-xl text-gray-300">
                Professional handrails & bollards Dubai & Abu Dhabi installation services across key areas
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {locations.map((location, index) => (
                <div key={index} className="bg-slate-700 p-6 rounded-xl text-center hover:bg-slate-600 transition-colors border border-slate-600 hover:border-orange-500">
                  <h3 className="font-semibold text-white">{location}</h3>
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
                Systematic approach ensuring quality handrails & bollards Dubai & Abu Dhabi installation
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
              Ready for Professional Handrails & Bollards Dubai & Abu Dhabi?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Get expert handrails & bollards Dubai & Abu Dhabi services with safety compliance 
              and architectural integration. Contact us for site assessment and competitive quotes for handrails & bollards Dubai & Abu Dhabi.
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
              <Link href="/contact" className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-center inline-block">
                Get Site Assessment
              </Link>
              <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-block text-center">
                Request Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}