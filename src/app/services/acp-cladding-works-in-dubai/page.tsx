import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle, Shield, Zap, Award, Wrench, Settings, Target } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ACP Cladding Works in UAE | Professional ACP Installation Dubai',
  description: 'Expert ACP Cladding Works in UAE across Dubai and UAE. Specializing in aluminum composite panel installation, commercial building elevation, decorative ACP panels, and architectural cladding solutions.',
  keywords: 'ACP Cladding Works in UAE, ACP installation Dubai, aluminum composite panel UAE, building elevation Dubai, ACP cladding contractor UAE, commercial ACP works Dubai',
  openGraph: {
    title: 'ACP Cladding Works in UAE | Professional Solutions',
    description: 'Expert ACP Cladding Works in UAE across Dubai and UAE. Professional aluminum composite panel installation and building elevation services.',
    images: ['/images/acp-cladding-works.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ACP Cladding Works in UAE | Professional Solutions',
    description: 'Expert ACP Cladding Works in UAE across Dubai and UAE.',
    images: ['/images/acp-cladding-works.jpg'],
  },
  alternates: {
    canonical: 'https://bondmetal.com/services/acp-cladding-works'
  }
}

export default function ACPCladdingWorksPage() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ACP Cladding Works in UAE",
    "description": "Professional ACP Cladding Works in UAE across Dubai and UAE including aluminum composite panel installation, commercial building elevation, and decorative ACP panel solutions.",
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
    "serviceType": "ACP Cladding Works in UAE",
    "areaServed": {
      "@type": "Country",
      "name": "United Arab Emirates"
    },
    "offers": {
      "@type": "Offer",
      "description": "Professional ACP Cladding Works in UAE and installation services"
    }
  }

  const features = [
    "Premium aluminum composite panel installation for ACP Cladding Works in UAE",
    "Commercial building elevation expertise in ACP Cladding Works in UAE",
    "Decorative ACP panel solutions through ACP Cladding Works in UAE",
    "Weather-resistant cladding systems via ACP Cladding Works in UAE",
    "Fire-rated ACP panel options available in ACP Cladding Works in UAE",
    "Custom color and finish selection for ACP Cladding Works in UAE",
    "Professional installation techniques used in ACP Cladding Works in UAE",
    "Long-term warranty coverage provided by ACP Cladding Works in UAE"
  ]

  const applications = [
    { title: "Commercial Buildings UAE", desc: "Office towers, retail centers, corporate headquarters, and commercial facade elevation projects through ACP Cladding Works in UAE" },
    { title: "Residential Complexes UAE", desc: "High-rise apartments, luxury villas, housing developments, and residential building elevation using ACP Cladding Works in UAE" },
    { title: "Industrial Facilities UAE", desc: "Warehouses, factories, manufacturing plants, and industrial building cladding solutions via ACP Cladding Works in UAE" },
    { title: "Healthcare Buildings UAE", desc: "Hospitals, clinics, medical centers, and healthcare facility elevation works featuring ACP Cladding Works in UAE" },
    { title: "Educational Institutions UAE", desc: "Schools, universities, training centers, and educational building facade solutions with ACP Cladding Works in UAE" },
    { title: "Hospitality Venues UAE", desc: "Hotels, resorts, restaurants, and hospitality sector cladding installations through ACP Cladding Works in UAE" }
  ]

  const claddingTypes = [
    {
      icon: Shield,
      title: "Standard ACP Panels for UAE",
      desc: "High-quality aluminum composite panels for general applications in ACP Cladding Works in UAE",
      details: ["PE core options for ACP Cladding Works in UAE", "Multiple thickness variations", "Wide color range selection", "Cost-effective solution"]
    },
    {
      icon: Zap,
      title: "Fire-Rated ACP for UAE",
      desc: "Fire-resistant aluminum composite panels for safety compliance through ACP Cladding Works in UAE",
      details: ["FR core material for ACP Cladding Works in UAE", "Class A fire rating", "Safety compliance standards", "Public building suitable"]
    },
    {
      icon: Award,
      title: "Decorative ACP for UAE",
      desc: "Premium decorative panels for architectural enhancement via ACP Cladding Works in UAE",
      details: ["Wood grain finishes available", "Stone textures options", "Metallic effects finishes", "Custom patterns design"]
    },
    {
      icon: Wrench,
      title: "Perforated ACP for UAE",
      desc: "Ventilated cladding systems with acoustic properties using ACP Cladding Works in UAE",
      details: ["Sound absorption features", "Ventilation features integration", "Modern aesthetics design", "Functional design options"]
    },
    {
      icon: Settings,
      title: "Curved ACP Systems for UAE",
      desc: "Specialized curved panels for complex architectural designs through ACP Cladding Works in UAE",
      details: ["3D forming capability technology", "Complex geometries handling", "Architectural flexibility solutions", "Design innovation features"]
    },
    {
      icon: Target,
      title: "Insulated ACP for UAE",
      desc: "Thermal insulation enhanced composite panels via ACP Cladding Works in UAE",
      details: ["Energy efficiency optimization", "Thermal performance enhancement", "Insulation core integration", "Climate control features"]
    }
  ]

  const benefits = [
    {
      title: "Professional Installation for UAE",
      desc: "Expert installation teams with specialized knowledge of ACP systems ensuring precise fitting and long-term performance through ACP Cladding Works in UAE."
    },
    {
      title: "UAE Climate Expertise",
      desc: "Proven experience with UAE weather conditions ensuring optimal panel selection and installation techniques via ACP Cladding Works in UAE."
    },
    {
      title: "Complete Quality Assurance",
      desc: "Comprehensive quality control from material selection to final installation with performance testing and verification in ACP Cladding Works in UAE."
    },
    {
      title: "Superior Design Flexibility",
      desc: "Complete design support from concept to completion with custom solutions for unique architectural requirements through ACP Cladding Works in UAE."
    }
  ]

  const process = [
    { 
      step: "Site Assessment & Design for UAE", 
      desc: "Comprehensive evaluation and design development for ACP Cladding Works in UAE",
      details: "Our team conducts detailed site surveys, structural assessments, and develops custom ACP cladding designs optimized for your building requirements and aesthetic goals through ACP Cladding Works in UAE."
    },
    { 
      step: "Material Selection for UAE", 
      desc: "Professional panel and system specification for ACP Cladding Works in UAE",
      details: "Expert selection of ACP panels, mounting systems, and accessories based on building codes, fire ratings, weather exposure, and design requirements in ACP Cladding Works in UAE."
    },
    { 
      step: "Fabrication & Preparation for UAE", 
      desc: "Precision panel preparation and system fabrication for ACP Cladding Works in UAE",
      details: "Professional cutting, forming, and preparation of ACP panels with quality control processes ensuring perfect fit and finish for your installation in ACP Cladding Works in UAE."
    },
    { 
      step: "Installation & Completion for UAE", 
      desc: "Expert installation with testing and handover for ACP Cladding Works in UAE",
      details: "Professional installation by certified technicians with comprehensive testing, quality verification, and complete project handover including maintenance guidelines for ACP Cladding Works in UAE."
    }
  ]

  const specifications = [
    { property: "Panel Thickness for ACP Cladding Works in UAE", value: "3mm - 6mm options" },
    { property: "Panel Sizes for ACP Cladding Works in UAE", value: "Standard & custom sizes" },
    { property: "Core Materials for ACP Cladding Works in UAE", value: "PE, FR, Honeycomb" },
    { property: "Finish Options for ACP Cladding Works in UAE", value: "PVDF, Polyester coatings" },
    { property: "Fire Rating for ACP Cladding Works in UAE", value: "Class A1, A2, B1 available" },
    { property: "Weather Resistance for ACP Cladding Works in UAE", value: "25+ year durability" },
    { property: "Color Options for ACP Cladding Works in UAE", value: "RAL, custom colors" },
    { property: "Installation Areas for ACP Cladding Works in UAE", value: "Dubai, Abu Dhabi, UAE" }
  ]

  const industries = [
    "Commercial Real Estate requiring ACP Cladding Works in UAE",
    "Residential Development using ACP Cladding Works in UAE",
    "Industrial Construction employing ACP Cladding Works in UAE",
    "Healthcare Facilities utilizing ACP Cladding Works in UAE",
    "Educational Buildings featuring ACP Cladding Works in UAE",
    "Hospitality Sector implementing ACP Cladding Works in UAE",
    "Government Buildings with ACP Cladding Works in UAE",
    "Mixed-Use Developments using ACP Cladding Works in UAE"
  ]

  const qualityFeatures = [
    "International standard compliance for ACP Cladding Works in UAE",
    "Fire safety certification in ACP Cladding Works in UAE",
    "Weather resistance testing for ACP Cladding Works in UAE",
    "Professional installation teams in ACP Cladding Works in UAE",
    "Quality control procedures for ACP Cladding Works in UAE",
    "Performance verification in ACP Cladding Works in UAE",
    "Warranty documentation for ACP Cladding Works in UAE",
    "Maintenance support services in ACP Cladding Works in UAE"
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
                    ACP Cladding <span className="text-orange-500">Works in UAE</span>
                  </h1>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Professional ACP Cladding Works in UAE across Dubai and UAE specializing in aluminum composite panel 
                    installation, commercial building elevation, and decorative ACP panels. We deliver comprehensive 
                    cladding solutions for modern architecture with superior quality and performance through expert ACP Cladding Works in UAE.
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
                    src="/images/claddinguae.jpg"
                    alt="Professional ACP Cladding Works in UAE - Aluminum Composite Panel Installation" 
                    width={600}
                    height={500}
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
                  Why Choose Our <span className="text-orange-500">ACP Cladding Works in UAE</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Professional ACP installation with superior quality materials and expert craftsmanship through ACP Cladding Works in UAE.
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

          {/* Cladding Types Section */}
          <section className="py-20 bg-slate-800">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  ACP Panel <span className="text-orange-500">Solutions</span>
                </h2>
                <p className="text-xl text-gray-300">
                  Comprehensive range of aluminum composite panels for diverse architectural applications through ACP Cladding Works in UAE
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
                  Quality <span className="text-orange-500">Standards</span>
                </h2>
                <p className="text-xl text-gray-300">
                  Comprehensive quality assurance ensuring superior installations through ACP Cladding Works in UAE
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
                  Detailed specifications for our ACP Cladding Works in UAE systems and materials
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
                  Professional ACP Cladding Works in UAE for diverse building types and architectural requirements
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
                  Trusted ACP Cladding Works in UAE across multiple industry sectors
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
                  Our <span className="text-orange-500">Process</span>
                </h2>
                <p className="text-xl text-gray-300">
                  Systematic approach ensuring optimal design and superior installation quality for ACP Cladding Works in UAE
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
                Ready for Professional ACP Cladding Works in UAE?
              </h2>
              <p className="text-xl text-orange-100 mb-8">
                Get expert ACP Cladding Works in UAE installation with proven quality and architectural excellence. 
                Contact us for detailed consultation and competitive quotes for your ACP Cladding Works in UAE building elevation project.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                  <Phone className="w-8 h-8 text-white mx-auto mb-4" />
                  <h3 className="font-semibold text-white mb-2">Call for ACP Cladding</h3>
                  <p className="text-orange-100">+971 50 413 2803</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                  <Mail className="w-8 h-8 text-white mx-auto mb-4" />
                  <h3 className="font-semibold text-white mb-2">Email for ACP Cladding</h3>
                  <p className="text-orange-100">info@bondmetal.com</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                  <MessageCircle className="w-8 h-8 text-white mx-auto mb-4" />
                  <h3 className="font-semibold text-white mb-2">WhatsApp ACP Cladding</h3>
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