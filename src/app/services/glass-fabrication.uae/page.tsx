import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle, Shield, Zap, Award, Wrench, Settings, Target } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Glass Fabrication in UAE | Professional Glass Services Dubai & Abu Dhabi',
  description: 'Expert glass fabrication in UAE with advanced processing capabilities. Leading provider of architectural glazing, safety glass, and custom glass fabrication across UAE and Dubai.',
  keywords: 'glass fabrication UAE, glass fabrication Dubai, architectural glazing UAE, safety glass UAE, custom glass fabrication Dubai, tempered glass UAE',
  openGraph: {
    title: 'Glass Fabrication in UAE | Professional Glass Services Dubai',
    description: 'Expert glass fabrication in UAE with advanced processing capabilities and custom glass solutions.',
    images: ['/images/fabrglass.jpeg'],
    type: 'website',
    url: 'https://bondmetal.com/services/glass-fabrication-uae'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glass Fabrication in UAE | Professional Glass Services',
    description: 'Expert glass fabrication in UAE with advanced processing capabilities.',
    images: ['/images/fabrglass.jpeg'],
  },
  alternates: {
    canonical: 'https://bondmetal.com/services/glass-fabrication-uae'
  }
}

export default function GlassFabricationPage() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Glass Fabrication in UAE",
    "description": "Professional glass fabrication in UAE with advanced processing capabilities. Expert architectural glazing and safety glass services across UAE and Dubai.",
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
    "serviceType": "Glass Fabrication",
    "areaServed": {
      "@type": "Country",
      "name": "United Arab Emirates"
    }
  }

  const features = [
    "Precision glass fabrication in UAE with cutting to ±0.5mm tolerance",
    "Advanced tempered and laminated glass fabrication in UAE options",
    "Custom shapes and complex geometries for glass fabrication in UAE",
    "Safety glass compliance standards for glass fabrication in UAE",
    "UV protection and thermal control in glass fabrication in UAE",
    "Structural glazing capabilities for glass fabrication in UAE projects",
    "Insulated glass unit (IGU) assembly for glass fabrication in UAE",
    "Edge polishing and finishing services for glass fabrication in UAE"
  ]

  const applications = [
    { title: "Commercial Buildings UAE", desc: "Curtain walls, storefronts, office partitions, and commercial entrance systems with professional glass fabrication in UAE" },
    { title: "Residential Projects UAE", desc: "Windows, doors, balustrades, shower enclosures, and architectural glass features using glass fabrication in UAE" },
    { title: "Industrial Facilities UAE", desc: "Safety barriers, machine guards, observation windows, and industrial glazing with glass fabrication in UAE" },
    { title: "Hospitality & Retail UAE", desc: "Display cases, decorative panels, hotel facades, and retail storefront systems via glass fabrication in UAE" },
    { title: "Healthcare Facilities UAE", desc: "Cleanroom windows, laboratory partitions, and hygienic glazing solutions through glass fabrication in UAE" },
    { title: "Educational Buildings UAE", desc: "School windows, safety glass installations, and educational facility glazing with glass fabrication in UAE" }
  ]

  const glassTypes = [
    {
      icon: Shield,
      title: "Tempered Glass UAE",
      desc: "Heat-strengthened safety glass with enhanced impact resistance for glass fabrication in UAE",
      details: ["4-5x stronger than regular glass", "Safety breakage pattern for UAE", "Thermal shock resistance", "Various thickness options for UAE"]
    },
    {
      icon: Zap,
      title: "Laminated Glass UAE",
      desc: "Multi-layer safety glass with PVB interlayer protection for glass fabrication in UAE",
      details: ["Security and safety benefits for UAE", "Sound reduction properties", "UV protection for UAE climate", "Holds together when broken"]
    },
    {
      icon: Award,
      title: "Insulated Glass UAE",
      desc: "Double or triple glazed units for thermal efficiency in glass fabrication in UAE",
      details: ["Energy efficiency for UAE", "Condensation control", "Noise reduction for UAE", "Various gas fills available"]
    },
    {
      icon: Wrench,
      title: "Low-E Glass UAE",
      desc: "Energy-efficient glass with specialized coatings for glass fabrication in UAE",
      details: ["Solar heat gain control for UAE", "UV protection", "Thermal insulation", "Visible light transmission for UAE"]
    },
    {
      icon: Settings,
      title: "Structural Glazing UAE",
      desc: "High-performance glazing for structural applications in glass fabrication in UAE",
      details: ["Structural adhesive bonding", "Weather seal integrity for UAE", "Load-bearing capability", "Curtain wall systems for UAE"]
    },
    {
      icon: Target,
      title: "Decorative Glass UAE",
      desc: "Custom decorative and artistic glass solutions for glass fabrication in UAE",
      details: ["Frosted and etched glass for UAE", "Colored glass options", "Pattern and texture work", "Custom designs for UAE projects"]
    }
  ]

  const benefits = [
    {
      title: "Advanced Processing UAE",
      desc: "State-of-the-art glass fabrication in UAE with cutting, tempering, and laminating equipment ensuring precision and quality in every UAE project."
    },
    {
      title: "Safety Compliance UAE",
      desc: "Full compliance with international safety standards for glass fabrication in UAE including ANSI Z97.1, CPSC 16 CFR 1201, and local UAE building codes."
    },
    {
      title: "Energy Efficiency UAE",
      desc: "Specialized low-E coatings and insulated glass units for glass fabrication in UAE to meet energy code requirements and reduce operational costs."
    },
    {
      title: "Custom Solutions UAE",
      desc: "Complete design-to-installation service for unique glazing requirements and architectural specifications in glass fabrication in UAE."
    }
  ]

  const process = [
    { 
      step: "Design Consultation for UAE", 
      desc: "Comprehensive analysis of glazing requirements and specifications for glass fabrication in UAE",
      details: "Our glazing experts work with architects and contractors for glass fabrication in UAE to understand structural requirements, thermal performance needs, and aesthetic goals for optimal glass selection."
    },
    { 
      step: "Engineering & Testing UAE", 
      desc: "Structural calculations and performance testing for compliance in glass fabrication in UAE",
      details: "Complete engineering analysis for glass fabrication in UAE including wind load calculations, thermal stress analysis, and safety testing to ensure code compliance and optimal performance."
    },
    { 
      step: "Precision Fabrication UAE", 
      desc: "Advanced glass processing using specialized equipment for glass fabrication in UAE",
      details: "Expert cutting, tempering, laminating, and edge finishing for glass fabrication in UAE using state-of-the-art equipment designed specifically for architectural glass fabrication."
    },
    { 
      step: "Quality & Installation UAE", 
      desc: "Comprehensive inspection and professional installation services for glass fabrication in UAE",
      details: "Thorough quality control inspection for glass fabrication in UAE followed by expert installation with proper sealing, structural bonding, and weatherproofing for long-term performance."
    }
  ]

  const specifications = [
    { property: "Glass Types UAE", value: "Float, Tempered, Laminated, IGU" },
    { property: "Thickness Range UAE", value: "3mm - 25mm" },
    { property: "Maximum Size UAE", value: "3200mm x 2500mm" },
    { property: "Cutting Tolerance UAE", value: "±0.5mm precision" },
    { property: "Safety Standards UAE", value: "ANSI Z97.1, CPSC certified" },
    { property: "Thermal Performance UAE", value: "U-values from 0.2 W/m²K" },
    { property: "Edge Finishes UAE", value: "Polished, Ground, Beveled" },
    { property: "Processing Time UAE", value: "5-10 working days" }
  ]

  const industries = [
    "Commercial Architecture UAE",
    "Residential Construction UAE", 
    "Industrial Facilities UAE",
    "Hospitality & Hotels UAE",
    "Healthcare Buildings UAE",
    "Educational Institutions UAE",
    "Retail & Shopping UAE",
    "Government Buildings UAE"
  ]

  const glassPerformance = [
    { property: "Solar Heat Gain UAE", desc: "Control solar energy transmission for comfort and efficiency in glass fabrication in UAE" },
    { property: "Visible Light Transmission UAE", desc: "Optimize natural light while controlling glare for glass fabrication in UAE" },
    { property: "U-Value Performance UAE", desc: "Thermal insulation properties for energy efficiency in glass fabrication in UAE" },
    { property: "Sound Transmission UAE", desc: "Acoustic performance for noise control with glass fabrication in UAE" },
    { property: "Impact Resistance UAE", desc: "Safety performance under impact conditions for glass fabrication in UAE" },
    { property: "Wind Load Capacity UAE", desc: "Structural performance under wind pressure for glass fabrication in UAE" }
  ]

  const qualityFeatures = [
    "Precision cutting for glass fabrication in UAE",
    "Advanced tempering for glass fabrication in UAE",
    "Quality laminating for glass fabrication in UAE", 
    "Edge finishing for glass fabrication in UAE",
    "Safety testing for glass fabrication in UAE",
    "Performance verification for glass fabrication in UAE",
    "Installation support for glass fabrication in UAE",
    "Warranty coverage for glass fabrication in UAE"
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
                  Glass Fabrication <span className="text-orange-500">in UAE</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Expert glass fabrication in UAE with advanced processing capabilities. Specializing in 
                  architectural glazing, safety glass, and custom glass fabrication in UAE across Dubai and UAE 
                  with precision cutting, tempering, and laminating services for commercial and residential projects requiring superior glass fabrication in UAE.
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
                  src="/images/fabrglass.jpeg"
                  alt="Professional Glass Fabrication in UAE - Advanced Glass Processing Services" 
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
                Why Choose Our Glass Fabrication <span className="text-orange-500">in UAE</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced glass fabrication in UAE with processing technology and safety compliance for superior glass solutions.
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

        {/* Glass Types Section */}
        <section className="py-20 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Glass Types & <span className="text-orange-500">Solutions</span>
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive range of glass products for diverse architectural and safety requirements in glass fabrication in UAE
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {glassTypes.map((glass, index) => {
                const IconComponent = glass.icon
                return (
                  <div key={index} className="bg-slate-700 p-8 rounded-xl border border-slate-600 hover:border-orange-500 transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-orange-500">{glass.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6">{glass.desc}</p>
                    <ul className="space-y-2">
                      {glass.details.map((detail, idx) => (
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
                Comprehensive quality control ensuring superior glass fabrication in UAE results
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

        {/* Glass Performance Section */}
        <section className="py-20 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Glass <span className="text-orange-500">Performance</span>
              </h2>
              <p className="text-xl text-gray-300">
                Optimized performance characteristics for comfort, safety, and energy efficiency in glass fabrication in UAE
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {glassPerformance.map((performance, index) => (
                <div key={index} className="bg-slate-700 p-6 rounded-xl border border-slate-600 hover:border-orange-500 transition-all duration-300">
                  <h3 className="text-lg font-bold text-orange-500 mb-3">{performance.property}</h3>
                  <p className="text-gray-300">{performance.desc}</p>
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
                Detailed specifications for our glass fabrication in UAE capabilities and equipment
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
        <section className="py-20 bg-slate-800" aria-labelledby="applications-heading">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="applications-heading" className="text-4xl font-bold mb-6">
                Applications Across <span className="text-orange-500">Projects</span>
              </h2>
              <p className="text-xl text-gray-300">
                Professional glass fabrication in UAE solutions for diverse architectural and construction needs across Dubai
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
                Industries We <span className="text-orange-500">Serve</span>
              </h2>
              <p className="text-xl text-gray-300">
                Trusted glass fabrication in UAE services across multiple construction and architectural sectors
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
                Our Glass Fabrication <span className="text-orange-500">Process</span>
              </h2>
              <p className="text-xl text-gray-300">
                Systematic approach ensuring optimal performance and safety compliance for glass fabrication in UAE
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
              Ready for Professional Glass Fabrication in UAE?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Get expert glass fabrication in UAE with safety compliance and energy efficiency. 
              Contact us for detailed consultation and competitive quotes for your glass fabrication in UAE requirements across Dubai and all Emirates.
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