import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle, Shield, Zap, Award, Wrench, Settings, Target } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aluminium Fabrication Works in UAE | Professional Aluminum Manufacturing',
  description: 'Expert aluminium fabrication works in UAE with precision cutting, welding, and finishing. Leading provider of lightweight, corrosion-resistant aluminum solutions for construction and industrial applications.',
  keywords: 'aluminium fabrication works UAE, aluminum fabrication Dubai, lightweight metal fabrication, aluminum welding UAE, architectural aluminum works',
  openGraph: {
    title: 'Aluminium Fabrication Works in UAE | Professional Aluminum Manufacturing',
    description: 'Expert aluminium fabrication works in UAE with precision manufacturing.',
    images: ['/images/aluminumfabri.jpeg'],
    type: 'website',
    url: 'https://bondmetal.com/services/aluminium-fabrication-works-uae'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aluminium Fabrication Works in UAE | Professional Aluminum Manufacturing',
    description: 'Expert aluminium fabrication works in UAE with precision manufacturing.',
    images: ['/images/aluminumfabri.jpeg'],
  },
  alternates: {
    canonical: 'https://bondmetal.com/services/aluminium-fabrication-works-uae'
  }
}

export default function AluminiumFabricationPage() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aluminium Fabrication Works in UAE",
    "description": "Professional aluminium fabrication works in UAE with expert material selection, precision manufacturing, and superior finishing for lightweight applications.",
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
    "serviceType": "Aluminium Fabrication Works",
    "areaServed": {
      "@type": "Country",
      "name": "United Arab Emirates"
    }
  }

  const features = [
    "Precision aluminium fabrication works in UAE to ±0.1mm tolerance for exacting requirements",
    "Advanced TIG and MIG welding capabilities ensuring superior aluminium fabrication works in UAE quality",
    "Complete corrosion resistance solutions through expert aluminium fabrication works in UAE",
    "Lightweight structural solutions available in all aluminium fabrication works in UAE",
    "Custom design and engineering support for all aluminium fabrication works in UAE projects",
    "Professional anodizing and powder coating services for aluminium fabrication works in UAE",
    
  ]

  const applications = [
    { title: "Architectural Elements UAE", desc: "Curtain walls, facades, window frames, and decorative panels requiring specialized aluminium fabrication works in UAE" },
    { title: "Construction Industry UAE", desc: "Structural components, cladding systems, roofing solutions, and building elements through aluminium fabrication works in UAE" },
    { title: "Marine Applications UAE", desc: "Boat hulls, deck equipment, marine hardware, and saltwater-resistant structures via aluminium fabrication works in UAE" },
    { title: "Transportation UAE", desc: "Vehicle bodies, trailer components, automotive parts, and transport equipment using aluminium fabrication works in UAE" },
    { title: "Industrial Equipment UAE", desc: "Processing equipment, machinery frames, conveyor systems, and industrial components through aluminium fabrication works in UAE" },
    { title: "Signage & Display UAE", desc: "Commercial signs, display systems, exhibition stands, and advertising structures using aluminium fabrication works in UAE" }
  ]

  const fabricationCapabilities = [
    {
      icon: Shield,
      title: "Precision Welding",
      desc: "Expert TIG and MIG welding for superior finish and strength in aluminium fabrication works in UAE",
      details: ["Certified welders for aluminium fabrication works in UAE", "Heliarc welding capability", "No discoloration guarantee", "Full penetration welds"]
    },
    {
      icon: Zap,
      title: "CNC Machining",
      desc: "High-precision cutting and forming operations for aluminium fabrication works in UAE",
      details: ["Laser cutting precision for aluminium fabrication works in UAE", "CNC bending accuracy", "Complex geometries capability", "Tight tolerances maintained"]
    },
    {
      icon: Award,
      title: "Surface Finishing",
      desc: "Professional finishing for optimal appearance and performance in aluminium fabrication works in UAE",
      details: ["Anodizing treatments for aluminium fabrication works in UAE", "Powder coating options", "Brushing and polishing", "Custom color matching"]
    },
    {
      icon: Wrench,
      title: "Custom Forming",
      desc: "Specialized forming for complex shapes and profiles in aluminium fabrication works in UAE",
      details: ["Extrusion forming for aluminium fabrication works in UAE", "Press brake operations", "Roll forming processes", "Stretch forming capabilities"]
    },
    {
      icon: Settings,
      title: "Assembly Services",
      desc: "Complete assembly and sub-assembly aluminium fabrication works in UAE solutions",
      details: ["Mechanical fastening for aluminium fabrication works in UAE", "Welded assemblies", "Modular construction", "Testing protocols"]
    },
    {
      icon: Target,
      title: "Quality Control",
      desc: "Comprehensive inspection and testing procedures for aluminium fabrication works in UAE",
      details: ["Material certification for aluminium fabrication works in UAE", "Dimensional inspection", "Surface analysis", "Strength testing"]
    }
  ]

  const benefits = [
    {
      title: "Material Expertise UAE",
      desc: "Comprehensive knowledge of aluminum alloys including 6061, 6063, 5083, and specialty grades for optimal aluminium fabrication works in UAE applications."
    },
    {
      title: "Lightweight Solutions UAE",
      desc: "Expert design for weight reduction without compromising strength, ideal for transportation and aerospace aluminium fabrication works in UAE applications."
    },
    {
      title: "Corrosion Resistance UAE",
      desc: "Expert selection of appropriate alloys and finishes to ensure maximum corrosion resistance through proper aluminium fabrication works in UAE techniques."
    },
    {
      title: "Energy Efficiency UAE",
      desc: "Specialized knowledge in thermal conductivity and energy-efficient designs for building and industrial aluminium fabrication works in UAE applications."
    }
  ]

  const process = [
    { 
      step: "Material Selection for UAE", 
      desc: "Expert consultation on optimal aluminum alloy selection for aluminium fabrication works in UAE",
      details: "Our metallurgists analyze your application requirements including strength, corrosion resistance, weight, and thermal properties to recommend the ideal aluminum alloy for successful aluminium fabrication works in UAE."
    },
    { 
      step: "Design Engineering UAE", 
      desc: "Detailed engineering and design optimization for performance in aluminium fabrication works in UAE",
      details: "Professional CAD design with stress analysis, thermal considerations, and manufacturing optimization to ensure optimal performance and cost-effectiveness in aluminium fabrication works in UAE."
    },
    { 
      step: "Precision Fabrication UAE", 
      desc: "Expert aluminium fabrication works in UAE using advanced specialized techniques",
      details: "Skilled craftsmen use specialized equipment and techniques designed specifically for aluminium fabrication works in UAE to maintain material properties and achieve superior finishes."
    },
    { 
      step: "Finishing & Inspection UAE", 
      desc: "Professional finishing and comprehensive quality verification for aluminium fabrication works in UAE",
      details: "Complete surface finishing including anodizing or coating when required, followed by thorough inspection and testing to ensure compliance with aluminium fabrication works in UAE specifications."
    }
  ]

  const specifications = [
    { property: "Alloy Grades UAE", value: "6061, 6063, 5083, 7075, 2024" },
    { property: "Thickness Range UAE", value: "0.5mm - 100mm" },
    { property: "Fabrication Tolerance UAE", value: "±0.1mm precision" },
    { property: "Maximum Sheet Size UAE", value: "4000mm x 2000mm" },
    { property: "Welding Standards UAE", value: "AWS D1.2 certified" },
    { property: "Surface Finishes UAE", value: "Mill, Anodized, Powder Coated" },
    { property: "Temperature Range UAE", value: "-50°C to +200°C applications" },
    { property: "Strength Testing UAE", value: "Tensile, yield, fatigue testing" }
  ]

  const industries = [
    "Construction & Architecture UAE",
    "Marine & Offshore UAE", 
    "Transportation UAE",
    "Aerospace UAE",
    "Industrial Equipment UAE",
    "Signage & Display UAE",
    "Energy & Solar UAE",
    "Food & Beverage UAE"
  ]

  const alloySpecifications = [
    { 
      alloy: "6061-T6 for UAE", 
      properties: "General purpose, excellent strength-to-weight ratio ideal for aluminium fabrication works in UAE", 
      applications: "Structural components, machinery parts using aluminium fabrication works in UAE" 
    },
    { 
      alloy: "6063-T5 for UAE", 
      properties: "Excellent extrudability, good surface finish perfect for aluminium fabrication works in UAE", 
      applications: "Architectural extrusions, window frames via aluminium fabrication works in UAE" 
    },
    { 
      alloy: "5083-H116 for UAE", 
      properties: "Superior corrosion resistance, marine grade for aluminium fabrication works in UAE", 
      applications: "Marine applications, chemical equipment using aluminium fabrication works in UAE" 
    },
    { 
      alloy: "7075-T6 for UAE", 
      properties: "High strength, aerospace grade aluminum for aluminium fabrication works in UAE", 
      applications: "High-stress components, aerospace parts through aluminium fabrication works in UAE" 
    },
    { 
      alloy: "2024-T3 for UAE", 
      properties: "Excellent fatigue resistance, aircraft grade for aluminium fabrication works in UAE", 
      applications: "Aircraft structures, high-performance parts requiring aluminium fabrication works in UAE" 
    },
    { 
      alloy: "1100-H14 for UAE", 
      properties: "Pure aluminum, excellent corrosion resistance in aluminium fabrication works in UAE", 
      applications: "Chemical equipment, decorative applications using aluminium fabrication works in UAE" 
    }
  ]

  const qualityFeatures = [
    "Material traceability for aluminium fabrication works in UAE",
    "Weld quality assurance in aluminium fabrication works in UAE",
    "Dimensional inspection for aluminium fabrication works in UAE",
    "Surface finish verification in aluminium fabrication works in UAE",
    "Strength testing for aluminium fabrication works in UAE",
    "Anodizing quality control in aluminium fabrication works in UAE",
    "Assembly testing for aluminium fabrication works in UAE",
    "Documentation control in aluminium fabrication works in UAE"
  ]

  const finishingOptions = [
    {
      finish: "Anodizing for UAE",
      description: "Electrochemical process creating protective oxide layer for aluminium fabrication works in UAE",
      benefits: "Enhanced corrosion resistance, decorative appearance for aluminium fabrication works in UAE"
    },
    {
      finish: "Powder Coating for UAE",
      description: "Electrostatic application of colored polymer coating for aluminium fabrication works in UAE",
      benefits: "Durable finish, wide color range available in aluminium fabrication works in UAE"
    },
    {
      finish: "Brushed Finish for UAE",
      description: "Mechanical brushing creating uniform directional texture for aluminium fabrication works in UAE",
      benefits: "Attractive appearance, hides minor scratches in aluminium fabrication works in UAE"
    },
    {
      finish: "Polished Finish for UAE",
      description: "Mechanical polishing to achieve mirror-like surface for aluminium fabrication works in UAE",
      benefits: "High reflectivity, premium appearance in aluminium fabrication works in UAE"
    }
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
                  Aluminium Fabrication<span className="text-orange-500">Works in UAE</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Premium aluminium fabrication works in UAE services with expert material selection, precision 
                  manufacturing, and superior finishing. We specialize in lightweight, corrosion-resistant solutions 
                  for construction, marine, transportation, and architectural applications across Dubai and the UAE through advanced aluminium fabrication works in UAE.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    Get Quote
                  </Link>
                 
                </div>
              </div>

              <div className="relative">
                <Image 
                  src="/images/almfab.jpg"
                  alt="Professional Aluminium Fabrication Works in UAE - Lightweight Metal Manufacturing Services" 
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
                Why Choose Our Aluminium Fabrication <span className="text-orange-500">Works in UAE</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Expert knowledge and precision manufacturing for superior aluminium fabrication works in UAE solutions.
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

        {/* Fabrication Capabilities Section */}
        <section className="py-20 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Fabrication <span className="text-orange-500">Capabilities</span>
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive aluminium fabrication works in UAE services for diverse industrial applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fabricationCapabilities.map((capability, index) => {
                const IconComponent = capability.icon
                return (
                  <div key={index} className="bg-slate-700 p-8 rounded-xl border border-slate-600 hover:border-orange-500 transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-orange-500">{capability.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6">{capability.desc}</p>
                    <ul className="space-y-2">
                      {capability.details.map((detail, idx) => (
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

        {/* Aluminum Alloys */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Aluminum <span className="text-orange-500">Alloys</span>
              </h2>
              <p className="text-xl text-gray-300">
                Expert selection of appropriate alloys for your specific aluminium fabrication works in UAE requirements
              </p>
            </div>

            <div className="space-y-6">
              {alloySpecifications.map((alloy, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-orange-500 mb-2">{alloy.alloy}</h3>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Properties</h4>
                      <p className="text-gray-300">{alloy.properties}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Applications</h4>
                      <p className="text-gray-300">{alloy.applications}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Finishing Options */}
        <section className="py-20 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Finishing <span className="text-orange-500">Options</span>
              </h2>
              <p className="text-xl text-gray-300">
                Professional finishing services for optimal appearance and performance in aluminium fabrication works in UAE
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {finishingOptions.map((option, index) => (
                <div key={index} className="bg-slate-700 p-8 rounded-xl border border-slate-600 hover:border-orange-500 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-orange-500 mb-4">{option.finish}</h3>
                  <p className="text-gray-300 mb-4">{option.description}</p>
                  <p className="text-gray-400">{option.benefits}</p>
                </div>
              ))}
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
                Comprehensive quality control ensuring superior aluminium fabrication works in UAE results
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
                Detailed specifications for our aluminium fabrication works in UAE capabilities
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
                Premium aluminium fabrication works in UAE solutions for demanding environments and applications
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
                Trusted aluminium fabrication works in UAE across critical industry sectors
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
                Our Fabrication <span className="text-orange-500">Process</span>
              </h2>
              <p className="text-xl text-gray-300">
                Systematic approach ensuring optimal material selection and superior aluminium fabrication works in UAE
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
              Ready for Premium Aluminium Fabrication Works in UAE?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Get expert aluminium fabrication works in UAE services with guaranteed quality and lightweight solutions. 
              Contact us for material consultation and competitive quotes for your specific aluminium fabrication works in UAE requirements.
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