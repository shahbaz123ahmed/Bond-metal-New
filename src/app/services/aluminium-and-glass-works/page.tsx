import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle, Shield, Zap, Award, Wrench, Settings, Target } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aluminum and Glass Works in UAE | Professional Curtain Wall & Facade Solutions',
  description: 'Expert Aluminum and Glass Works in UAE services across Dubai and UAE. Specializing in curtain walls, facades, windows, doors, and architectural glazing solutions with precision installation.',
  keywords: 'Aluminum and Glass Works in UAE, curtain wall Dubai, facade installation UAE, aluminum glazing Dubai, glass facade UAE, architectural glazing Dubai, aluminum glass contractor UAE',
  openGraph: {
    title: 'Aluminum and Glass Works in UAE | Professional Solutions',
    description: 'Expert Aluminum and Glass Works in UAE services across Dubai and UAE. Specializing in curtain walls, facades, windows, doors, and architectural glazing solutions.',
    images: ['/images/aluminum-glass-works.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aluminum and Glass Works in UAE | Professional Solutions',
    description: 'Expert Aluminum and Glass Works in UAE services across Dubai and UAE.',
    images: ['/images/aluminum-glass-works.jpg'],
  },
  alternates: {
    canonical: 'https://bondmetal.com/services/aluminum-glass-works'
  }
}

export default function AluminumGlassWorksPage() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aluminum and Glass Works in UAE",
    "description": "Professional Aluminum and Glass Works in UAE services across Dubai and UAE including curtain walls, facades, architectural glazing, and structural installations.",
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
    "serviceType": "Aluminum and Glass Works in UAE",
    "areaServed": {
      "@type": "Country",
      "name": "United Arab Emirates"
    },
    "offers": {
      "@type": "Offer",
      "description": "Professional Aluminum and Glass Works in UAE services"
    }
  }

  const features = [
    "Curtain wall systems and installation for Aluminum and Glass Works in UAE",
    "Structural glazing solutions specialized in Aluminum and Glass Works in UAE",
    "Aluminum facade systems optimized for Aluminum and Glass Works in UAE",
    "Commercial window installation through Aluminum and Glass Works in UAE",
    "Glass door and entrance systems via Aluminum and Glass Works in UAE",
    "Skylight and atrium glazing provided by Aluminum and Glass Works in UAE",
    "Weather sealing and thermal performance for Aluminum and Glass Works in UAE",
    "Safety compliance standards met by Aluminum and Glass Works in UAE"
  ]

  const applications = [
    { title: "Commercial Towers UAE", desc: "High-rise office buildings, corporate headquarters, and modern commercial facades through Aluminum and Glass Works in UAE" },
    { title: "Retail Centers UAE", desc: "Shopping malls, showrooms, retail facades, and commercial storefronts using Aluminum and Glass Works in UAE" },
    { title: "Residential Buildings UAE", desc: "Luxury apartments, villas, residential towers, and modern housing projects via Aluminum and Glass Works in UAE" },
    { title: "Hotels & Hospitality UAE", desc: "Hotel facades, resort glazing, restaurant frontages, and hospitality structures featuring Aluminum and Glass Works in UAE" },
    { title: "Educational Facilities UAE", desc: "Universities, schools, training centers, and educational building facades with Aluminum and Glass Works in UAE" },
    { title: "Healthcare Buildings UAE", desc: "Hospitals, clinics, medical centers, and specialized healthcare facilities using Aluminum and Glass Works in UAE" }
  ]

  const workTypes = [
    {
      icon: Shield,
      title: "Curtain Wall Systems for UAE",
      desc: "Advanced curtain wall design and installation for modern buildings through Aluminum and Glass Works in UAE",
      details: ["Structural glazing for Aluminum and Glass Works in UAE", "Thermal performance optimization", "Weather resistance in UAE climate", "Seismic compliance standards"]
    },
    {
      icon: Zap,
      title: "Facade Solutions for UAE",
      desc: "Complete aluminum and glass facade systems via Aluminum and Glass Works in UAE",
      details: ["Architectural aesthetics enhancement", "Energy efficiency optimization", "Solar control integration", "Maintenance access provisions"]
    },
    {
      icon: Award,
      title: "Window & Door Systems for UAE",
      desc: "High-performance aluminum windows and glass doors through Aluminum and Glass Works in UAE",
      details: ["Security features integration", "Sound insulation technology", "Energy ratings compliance", "Custom designs available"]
    },
    {
      icon: Wrench,
      title: "Structural Glazing for UAE",
      desc: "Advanced structural glazing for seamless glass facades using Aluminum and Glass Works in UAE",
      details: ["Load bearing capacity design", "Wind resistance engineering", "Waterproofing excellence", "Safety compliance assurance"]
    },
    {
      icon: Settings,
      title: "Skylights & Atriums for UAE",
      desc: "Natural lighting solutions with aluminum framing via Aluminum and Glass Works in UAE",
      details: ["Daylighting optimization systems", "UV protection technology", "Ventilation systems integration", "Safety glazing standards"]
    },
    {
      icon: Target,
      title: "Entrance Systems for UAE",
      desc: "Impressive aluminum and glass entrance solutions through Aluminum and Glass Works in UAE",
      details: ["Automatic doors installation", "Revolving doors systems", "Security systems integration", "Accessibility features compliance"]
    }
  ]

  const benefits = [
    {
      title: "Integrated Solutions for UAE",
      desc: "Complete aluminum and glass solutions combining structural integrity with aesthetic excellence for modern architecture through Aluminum and Glass Works in UAE."
    },
    {
      title: "UAE Climate Expertise",
      desc: "Specialized knowledge of UAE conditions ensuring optimal performance in extreme heat, humidity, and sandstorms via Aluminum and Glass Works in UAE."
    },
    {
      title: "Superior Energy Efficiency",
      desc: "Advanced glazing technologies and thermal breaks providing superior energy performance and reduced cooling costs through Aluminum and Glass Works in UAE."
    },
    {
      title: "Complete Quality Assurance",
      desc: "Comprehensive testing and quality control ensuring installations meet international standards and local regulations in Aluminum and Glass Works in UAE."
    }
  ]

  const process = [
    { 
      step: "Design Consultation for UAE", 
      desc: "Architectural review and system selection for optimal performance in Aluminum and Glass Works in UAE",
      details: "Our design team works with architects and engineers to develop optimal aluminum and glass solutions meeting aesthetic, performance, and budget requirements for Aluminum and Glass Works in UAE projects."
    },
    { 
      step: "Engineering & CAD for UAE", 
      desc: "Detailed engineering drawings and structural calculations for Aluminum and Glass Works in UAE",
      details: "Professional CAD modeling with complete structural analysis, thermal calculations, and wind load assessments for regulatory approval in Aluminum and Glass Works in UAE applications."
    },
    { 
      step: "Fabrication & Testing for UAE", 
      desc: "Precision manufacturing and performance testing for Aluminum and Glass Works in UAE",
      details: "State-of-the-art fabrication with comprehensive quality testing including water penetration, air infiltration, and structural performance for Aluminum and Glass Works in UAE standards."
    },
    { 
      step: "Installation & Commissioning for UAE", 
      desc: "Professional installation and system commissioning for Aluminum and Glass Works in UAE",
      details: "Expert installation by certified technicians with complete testing, adjustment, and handover including maintenance guidelines for Aluminum and Glass Works in UAE projects."
    }
  ]

  const specifications = [
    { property: "Maximum Height for Aluminum and Glass Works in UAE", value: "200+ meters" },
    { property: "Glass Thickness for Aluminum and Glass Works in UAE", value: "6mm - 25mm" },
    { property: "Aluminum Profiles for Aluminum and Glass Works in UAE", value: "Custom extrusions" },
    { property: "Wind Load Resistance for Aluminum and Glass Works in UAE", value: "Up to 3.0 kPa" },
    { property: "Thermal Performance for Aluminum and Glass Works in UAE", value: "U-value < 1.5 W/m²K" },
    { property: "Air Infiltration for Aluminum and Glass Works in UAE", value: "Class A4 (EN 12207)" },
    { property: "Water Tightness for Aluminum and Glass Works in UAE", value: "Class E1200 (EN 12208)" },
    { property: "Structural Performance for Aluminum and Glass Works in UAE", value: "Class C5 (EN 12210)" }
  ]

  const industries = [
    "Commercial Architecture requiring Aluminum and Glass Works in UAE",
    "Residential Development using Aluminum and Glass Works in UAE",
    "Hospitality Sector utilizing Aluminum and Glass Works in UAE",
    "Educational Buildings featuring Aluminum and Glass Works in UAE",
    "Healthcare Facilities employing Aluminum and Glass Works in UAE",
    "Retail & Shopping with Aluminum and Glass Works in UAE",
    "Government Buildings implementing Aluminum and Glass Works in UAE",
    "Mixed-Use Developments using Aluminum and Glass Works in UAE"
  ]

  const qualityFeatures = [
    "International standards compliance for Aluminum and Glass Works in UAE",
    "Certified installation teams in Aluminum and Glass Works in UAE",
    "Advanced glazing technologies for Aluminum and Glass Works in UAE",
    "Structural engineering support in Aluminum and Glass Works in UAE",
    "Thermal performance testing for Aluminum and Glass Works in UAE",
    "Weather resistance validation in Aluminum and Glass Works in UAE",
    "Safety glass compliance for Aluminum and Glass Works in UAE",
    "Maintenance documentation for Aluminum and Glass Works in UAE"
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
                    Aluminum and Glass <span className="text-orange-500">Works in UAE</span>
                  </h1>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Expert Aluminum and Glass Works in UAE services across Dubai and UAE. We specialize in curtain wall systems, 
                    structural glazing, facade solutions, and architectural installations combining aluminum frameworks 
                    with high-performance glazing for modern buildings designed for UAE climate conditions through professional Aluminum and Glass Works in UAE.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/contact"
                      className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
                    >
                      Get Aluminum Glass Consultation
                    </Link>
                    <Link 
                      href="/portfolio"
                      className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-center"
                    >
                      View Aluminum Glass Projects
                    </Link>
                  </div>
                </header>

                {/* Replace stats section with image */}
                <div className="relative">
                  <Image 
                    src="/images/allumiinsta.jpg"
                    alt="Professional Aluminum and Glass Works in UAE - Curtain Wall and Facade Solutions" 
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
                  Why Choose Our <span className="text-orange-500">Aluminum and Glass Works in UAE</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Integrated solutions combining structural aluminum with high-performance glazing for exceptional results through Aluminum and Glass Works in UAE.
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

          {/* Work Types Section */}
          <section className="py-20 bg-slate-800">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  Aluminum and Glass <span className="text-orange-500">Solutions</span>
                </h2>
                <p className="text-xl text-gray-300">
                  Comprehensive range of Aluminum and Glass Works in UAE for modern architectural requirements
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {workTypes.map((work, index) => {
                  const IconComponent = work.icon
                  return (
                    <div key={index} className="bg-slate-700 p-8 rounded-xl border border-slate-600 hover:border-orange-500 transition-all duration-300 group">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-orange-500">{work.title}</h3>
                      </div>
                      <p className="text-gray-300 mb-6">{work.desc}</p>
                      <ul className="space-y-2">
                        {work.details.map((detail, idx) => (
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
                  Quality <span className="text-orange-500">Excellence</span>
                </h2>
                <p className="text-xl text-gray-300">
                  Comprehensive quality assurance ensuring superior installations through Aluminum and Glass Works in UAE
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
                  Detailed performance specifications for our Aluminum and Glass Works in UAE systems
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
                  Professional Aluminum and Glass Works in UAE solutions for diverse architectural applications
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
                  Trusted Aluminum and Glass Works in UAE across multiple industry sectors
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
                  Systematic approach ensuring optimal design and superior installation quality for Aluminum and Glass Works in UAE
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
                Ready for Premium Aluminum and Glass Works in UAE?
              </h2>
              <p className="text-xl text-orange-100 mb-8">
                Get expert Aluminum and Glass Works in UAE with integrated design and installation services. 
                Contact us for detailed consultation and competitive quotes for your Aluminum and Glass Works in UAE requirements.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                  <Phone className="w-8 h-8 text-white mx-auto mb-4" />
                  <h3 className="font-semibold text-white mb-2">Call for Aluminum Glass Works</h3>
                  <p className="text-orange-100">+971 50 413 2803</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                  <Mail className="w-8 h-8 text-white mx-auto mb-4" />
                  <h3 className="font-semibold text-white mb-2">Email for Aluminum Glass Works</h3>
                  <p className="text-orange-100">info@bondmetal.com</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                  <MessageCircle className="w-8 h-8 text-white mx-auto mb-4" />
                  <h3 className="font-semibold text-white mb-2">WhatsApp Aluminum Glass Works</h3>
                  <p className="text-orange-100">Quick Response</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Get Aluminum Glass Consultation
                </Link>
                <Link 
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-block text-center"
                >
                  Request Aluminum Glass Quote
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}