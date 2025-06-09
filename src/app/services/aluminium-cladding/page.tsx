import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle, Shield, Zap, Award, Wrench } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aluminium Cladding in Dubai | Premium Aluminum Panel Installation UAE',
  description: 'Professional aluminium cladding in Dubai with expert installation services. Leading provider of aluminum panel cladding, facade solutions, and premium aluminium cladding systems across Dubai and UAE.',
  keywords: 'aluminium cladding Dubai, aluminum cladding Dubai, aluminum panels Dubai, facade cladding Dubai, building cladding Dubai, aluminium installation Dubai',
  openGraph: {
    title: 'Aluminium Cladding in Dubai | Premium Aluminum Panel Installation',
    description: 'Professional aluminium cladding in Dubai with expert installation services and premium aluminum panels.',
    images: ['/images/almclad.jpg'],
    type: 'website',
    url: 'https://bondmetal.com/services/aluminium-cladding'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aluminium Cladding in Dubai | Premium Aluminum Panel Installation',
    description: 'Professional aluminium cladding in Dubai with expert installation services.',
    images: ['/images/almclad.jpg'],
  },
  alternates: {
    canonical: 'https://bondmetal.com/services/aluminium-cladding'
  }
}

export default function AluminiumCladdingPage() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aluminium Cladding in Dubai",
    "description": "Professional aluminium cladding in Dubai with expert installation services. Premium aluminum panel cladding and facade solutions across Dubai and UAE.",
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
    "serviceType": "Aluminium Cladding",
    "areaServed": {
      "@type": "City",
      "name": "Dubai"
    }
  }

  const features = [
    "Premium aluminium cladding in Dubai with 100% pure aluminum construction",
    "Superior corrosion resistance for Dubai climate conditions",
    "Lightweight yet extremely durable aluminium cladding solutions",
    "Excellent thermal conductivity for Dubai's hot climate",
    "Fire-resistant properties meeting Dubai building codes",
    "Wide range of finishes available for Dubai projects",
  ]

  const applications = [
    { title: "High-Rise Buildings in Dubai", desc: "Skyscrapers, office towers, and residential complexes requiring premium aluminium cladding in Dubai aesthetics" },
    { title: "Commercial Facades Dubai", desc: "Shopping malls, hotels, and corporate headquarters with modern aluminium cladding in Dubai design requirements" },
    { title: "Industrial Facilities Dubai", desc: "Manufacturing plants, warehouses, and logistics centers needing durable aluminium cladding in Dubai protection" },
    { title: "Educational Buildings Dubai", desc: "Universities, schools, and research facilities with aluminium cladding in Dubai architectural significance" },
    { title: "Healthcare Facilities Dubai", desc: "Hospitals and medical centers requiring hygienic aluminium cladding in Dubai easy-to-clean surfaces" },
    { title: "Transportation Hubs Dubai", desc: "Airports, metro stations, and terminals with high traffic aluminium cladding in Dubai requirements" }
  ]

  const finishOptions = [
    {
      icon: Shield,
      title: "Anodized Finish for Dubai Projects",
      desc: "Enhanced corrosion resistance with superior durability for aluminium cladding in Dubai",
      details: ["Multiple color options for Dubai architecture", "Enhanced surface hardness", "Improved weather resistance for Dubai climate", "Long-lasting appearance"]
    },
    {
      icon: Zap,
      title: "Powder Coated Dubai Cladding",
      desc: "Vibrant colors with excellent UV protection for aluminium cladding in Dubai",
      details: ["Extensive color palette for Dubai projects", "Superior adhesion", "Scratch resistance", "Environmental protection"]
    },
    {
      icon: Award,
      title: "Brushed Aluminum Dubai",
      desc: "Premium brushed texture for sophisticated aluminium cladding in Dubai aesthetics",
      details: ["Contemporary appearance", "Fingerprint resistance", "Easy maintenance", "Professional finish for Dubai buildings"]
    },
    {
      icon: Wrench,
      title: "Natural Mill Finish Dubai",
      desc: "Raw aluminum appearance for industrial aluminium cladding in Dubai applications",
      details: ["Cost-effective Dubai option", "Natural aluminum look", "Easy fabrication", "Versatile Dubai application"]
    }
  ]

  const benefits = [
    {
      title: "Superior Weather Resistance Dubai",
      desc: "Aluminium cladding in Dubai naturally forms a protective oxide layer that prevents corrosion and withstands harsh Dubai weather conditions."
    },
    {
      title: "Energy Efficiency Dubai",
      desc: "Excellent thermal properties of aluminium cladding in Dubai help regulate building temperature, contributing to energy savings and comfort in Dubai's hot climate."
    },
    {
      title: "Design Flexibility Dubai",
      desc: "Aluminium cladding in Dubai can be formed into complex shapes and profiles, allowing for creative architectural expressions in Dubai projects."
    },
    {
      title: "Long-Term Value Dubai",
      desc: "Minimal maintenance requirements and long lifespan of aluminium cladding in Dubai provide excellent return on investment for Dubai properties."
    }
  ]

  const process = [
    { 
      step: "Material Selection for Dubai", 
      desc: "Choosing the optimal aluminum grade and finish for your specific aluminium cladding in Dubai requirements",
      details: "We analyze your Dubai project requirements including environmental conditions, aesthetic preferences, and budget considerations to select the most suitable aluminum alloy and finish option for aluminium cladding in Dubai."
    },
    { 
      step: "Precision Fabrication Dubai", 
      desc: "Advanced manufacturing techniques for perfect fit and finish of aluminium cladding in Dubai",
      details: "Using state-of-the-art equipment including CNC machines and precision cutting tools, we fabricate aluminum panels for aluminium cladding in Dubai to exact specifications with tight tolerances."
    },
    { 
      step: "Quality Testing Dubai", 
      desc: "Comprehensive quality control to ensure aluminium cladding in Dubai performance standards",
      details: "Every panel for aluminium cladding in Dubai undergoes rigorous testing including dimensional verification, finish quality inspection, and performance testing to meet international and Dubai standards."
    },
    { 
      step: "Professional Installation Dubai", 
      desc: "Expert installation by certified technicians with warranty coverage for aluminium cladding in Dubai",
      details: "Our experienced Dubai installation team ensures proper mounting, sealing, and finishing of aluminium cladding in Dubai with attention to structural integrity and aesthetic perfection."
    }
  ]

  const specifications = [
    { property: "Material Grade Dubai", value: "6061-T6, 6063-T5, 3003-H14" },
    { property: "Thickness Range Dubai", value: "1.0mm - 6.0mm" },
    { property: "Panel Width Dubai", value: "Up to 1500mm" },
    { property: "Panel Length Dubai", value: "Up to 6000mm" },
    { property: "Thermal Expansion Dubai", value: "23.1 × 10⁻⁶ /°C" },
    { property: "Melting Point Dubai", value: "660°C" },
    { property: "Density Dubai", value: "2.70 g/cm³" },
    { property: "Fire Rating Dubai", value: "Non-combustible Class A" }
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
                  Aluminium Cladding <span className="text-orange-500">in Dubai</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Premium aluminium cladding in Dubai combining exceptional durability, 
                  aesthetic appeal, and energy efficiency. Our high-grade aluminium cladding in Dubai 
                  provides long-lasting protection and modern elegance for any architectural project across Dubai.
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

              <div className="relative">
                <Image 
                  src="/images/almclad.jpg" 
                  alt="Aluminium Cladding in Dubai - Premium Aluminum Panel Solutions" 
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
                Why Choose Aluminium Cladding <span className="text-orange-500">in Dubai</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the advantages of premium aluminium cladding in Dubai for your building projects with superior quality and Dubai climate resistance.
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
                Finish <span className="text-orange-500">Options</span>
              </h2>
              <p className="text-xl text-gray-300">
                Choose from our range of premium aluminum finishes for aluminium cladding in Dubai to match your design requirements
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
                Detailed specifications for our premium aluminium cladding in Dubai systems optimized for Dubai conditions
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
                Perfect for <span className="text-orange-500">Any Project</span>
              </h2>
              <p className="text-xl text-gray-300">
                Versatile aluminium cladding in Dubai solutions for diverse architectural applications across Dubai
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
                Professional approach ensuring quality results for aluminium cladding in Dubai from start to finish
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
              Ready for Premium Aluminium Cladding in Dubai?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Transform your building with our premium aluminium cladding in Dubai solutions. 
              Get expert consultation and detailed quotes for your aluminium cladding in Dubai project requirements.
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
                Get Quote
              </Link>
              
            </div>
          </div>
        </section>
      </div>
    </>
  )
}