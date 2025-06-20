import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle, Shield, Zap, Award, Wrench, Settings, Target } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stainless Steel Fabrication | Professional Stainless Steel Services UAE',
  description: 'Expert stainless steel fabrication with precision welding and finishing. Leading provider of corrosion-resistant stainless steel fabrication for food, pharmaceutical, and industrial applications.',
  keywords: 'stainless steel fabrication, steel fabrication UAE, stainless steel welding, corrosion resistant fabrication, food grade steel fabrication',
  openGraph: {
    title: 'Stainless Steel Fabrication | Professional Stainless Steel Services',
    description: 'Expert stainless steel fabrication with precision welding and finishing.',
    images: ['/images/stailnesssteelfabri.jpeg'],
    type: 'website',
    url: 'https://bondmetal.com/services/stainless-steel-fabrication'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stainless Steel Fabrication | Professional Stainless Steel Services',
    description: 'Expert stainless steel fabrication with precision welding.',
    images: ['/images/stailnesssteelfabri.jpeg'],
  },
  alternates: {
    canonical: 'https://bondmetal.com/services/stainless-steel-fabrication'
  }
}

export default function StainlessSteelFabricationPage() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Stainless Steel Fabrication",
    "description": "Professional stainless steel fabrication with expert material selection, precision manufacturing, and superior finishing for industrial applications.",
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
    "serviceType": "Stainless Steel Fabrication"
  }

  const features = [
    "Precision stainless steel fabrication to ±0.05mm tolerance for exacting requirements",
    "Advanced TIG welding capabilities ensuring superior stainless steel fabrication quality",
    "Complete corrosion resistance solutions through expert stainless steel fabrication",
    "Food-grade and medical grade options available in stainless steel fabrication",
    "Custom design and engineering support for all stainless steel fabrication projects",
    "Professional passivation and finishing services for stainless steel fabrication",
    "High-temperature applications expertise in stainless steel fabrication",
    "Sanitary and hygienic stainless steel fabrication for critical industries"
  ]

  const applications = [
    { title: "Food & Beverage Industry", desc: "Sanitary equipment, processing tanks, conveyor systems, and food-grade storage solutions requiring specialized stainless steel fabrication" },
    { title: "Pharmaceutical & Medical", desc: "Clean room equipment, medical devices, laboratory furniture, and sterile processing equipment through stainless steel fabrication" },
    { title: "Chemical Processing", desc: "Corrosion-resistant vessels, piping systems, heat exchangers, and chemical storage tanks using stainless steel fabrication" },
    { title: "Marine & Offshore", desc: "Deck equipment, railings, marine hardware, and saltwater-resistant structures via stainless steel fabrication" },
    { title: "Architectural Features", desc: "Modern facades, decorative panels, handrails, and contemporary design elements through stainless steel fabrication" },
    { title: "Commercial Kitchens", desc: "Work surfaces, sinks, equipment stands, and hygienic food preparation areas using stainless steel fabrication" }
  ]

  const fabricationCapabilities = [
    {
      icon: Shield,
      title: "Precision Welding",
      desc: "Expert TIG welding for superior finish and strength in stainless steel fabrication",
      details: ["Certified welders for stainless steel fabrication", "Orbital welding capability", "No discoloration guarantee", "Full penetration welds"]
    },
    {
      icon: Zap,
      title: "CNC Machining",
      desc: "High-precision cutting and forming operations for stainless steel fabrication",
      details: ["Laser cutting precision for stainless steel fabrication", "CNC bending accuracy", "Complex geometries capability", "Tight tolerances maintained"]
    },
    {
      icon: Award,
      title: "Surface Finishing",
      desc: "Professional finishing for optimal appearance and performance in stainless steel fabrication",
      details: ["Mirror polishing for stainless steel fabrication", "Satin brushing options", "Passivation treatment", "Electropolishing services"]
    },
    {
      icon: Wrench,
      title: "Custom Forming",
      desc: "Specialized forming for complex shapes and profiles in stainless steel fabrication",
      details: ["Roll forming for stainless steel fabrication", "Press brake operations", "Spinning processes", "Hydroforming capabilities"]
    },
    {
      icon: Settings,
      title: "Assembly Services",
      desc: "Complete assembly and sub-assembly stainless steel fabrication solutions",
      details: ["Mechanical fastening for stainless steel fabrication", "Welded assemblies", "Modular construction", "Testing protocols"]
    },
    {
      icon: Target,
      title: "Quality Control",
      desc: "Comprehensive inspection and testing procedures for stainless steel fabrication",
      details: ["Material certification for stainless steel fabrication", "Dimensional inspection", "Surface analysis", "Corrosion testing"]
    }
  ]

  const benefits = [
    {
      title: "Material Expertise",
      desc: "Comprehensive knowledge of stainless steel grades including 304, 316, 316L, 321, and specialty alloys for optimal stainless steel fabrication applications."
    },
    {
      title: "Certified Processes",
      desc: "ISO 9001 certified quality systems with certified welders and documented procedures for critical stainless steel fabrication applications."
    },
    {
      title: "Corrosion Resistance",
      desc: "Expert selection of appropriate grades and finishes to ensure maximum corrosion resistance through proper stainless steel fabrication techniques."
    },
    {
      title: "Hygienic Design",
      desc: "Specialized knowledge in sanitary design principles for food, pharmaceutical, and medical stainless steel fabrication applications."
    }
  ]

  const process = [
    { 
      step: "Material Selection", 
      desc: "Expert consultation on optimal stainless steel grade selection for stainless steel fabrication",
      details: "Our metallurgists analyze your application requirements including corrosion resistance, temperature, strength, and hygiene needs to recommend the ideal stainless steel grade for successful stainless steel fabrication."
    },
    { 
      step: "Design Engineering", 
      desc: "Detailed engineering and design optimization for performance in stainless steel fabrication",
      details: "Professional CAD design with stress analysis, thermal considerations, and manufacturing optimization to ensure optimal performance and cost-effectiveness in stainless steel fabrication."
    },
    { 
      step: "Precision Fabrication", 
      desc: "Expert stainless steel fabrication using advanced specialized techniques",
      details: "Skilled craftsmen use specialized equipment and techniques designed specifically for stainless steel fabrication to maintain material properties and achieve superior finishes."
    },
    { 
      step: "Finishing & Inspection", 
      desc: "Professional finishing and comprehensive quality verification for stainless steel fabrication",
      details: "Complete surface finishing including passivation when required, followed by thorough inspection and testing to ensure compliance with stainless steel fabrication specifications."
    }
  ]

  const specifications = [
    { property: "Material Grades", value: "304, 316, 316L, 321, 904L, Duplex" },
    { property: "Thickness Range", value: "0.5mm - 50mm" },
    { property: "Fabrication Tolerance", value: "±0.05mm precision" },
    { property: "Maximum Sheet Size", value: "3000mm x 1500mm" },
    { property: "Welding Standards", value: "ASME, AWS D1.6 certified" },
    { property: "Surface Finishes", value: "2B, BA, No.4, Mirror, Custom" },
    { property: "Temperature Range", value: "-200°C to +800°C applications" },
    { property: "Corrosion Testing", value: "Salt spray, ASTM standards" }
  ]

  const industries = [
    "Food & Beverage",
    "Pharmaceutical", 
    "Chemical Processing",
    "Marine & Offshore",
    "Architecture & Design",
    "Medical Equipment",
    "Water Treatment",
    "Energy & Power"
  ]

  const gradeSpecifications = [
    { grade: "304", properties: "General purpose, good corrosion resistance ideal for stainless steel fabrication", applications: "Kitchen equipment, architectural applications using stainless steel fabrication" },
    { grade: "316", properties: "Superior corrosion resistance, chloride resistant perfect for stainless steel fabrication", applications: "Marine, chemical processing applications via stainless steel fabrication" },
    { grade: "316L", properties: "Low carbon, excellent weldability for stainless steel fabrication", applications: "Pharmaceutical, food processing using stainless steel fabrication" },
    { grade: "321", properties: "Titanium stabilized, high temperature stainless steel fabrication", applications: "Heat exchangers, furnace parts through stainless steel fabrication" },
    { grade: "904L", properties: "Super austenitic, maximum corrosion resistance in stainless steel fabrication", applications: "Harsh chemical environments requiring stainless steel fabrication" },
    { grade: "Duplex", properties: "High strength, stress corrosion resistant for stainless steel fabrication", applications: "Oil & gas, marine structures using stainless steel fabrication" }
  ]

  const qualityFeatures = [
    "Material traceability for stainless steel fabrication",
    "Weld quality assurance in stainless steel fabrication",
    "Dimensional inspection for stainless steel fabrication",
    "Surface finish verification in stainless steel fabrication",
    "Corrosion testing for stainless steel fabrication",
    "Passivation testing in stainless steel fabrication",
    "Pressure testing for stainless steel fabrication",
    "Documentation control in stainless steel fabrication"
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
                  Stainless Steel <span className="text-orange-500">Fabrication</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Premium stainless steel fabrication services with expert material selection, precision 
                  manufacturing, and superior finishing. We specialize in corrosion-resistant solutions 
                  for food, pharmaceutical, chemical, and architectural applications across Dubai and the UAE through advanced stainless steel fabrication.
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
                  src="/images/stailnesssteelfabri.jpeg"
                  alt="Professional Stainless Steel Fabrication - Premium Steel Manufacturing Services" 
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
                Why Choose Our Stainless Steel <span className="text-orange-500">Fabrication</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Expert knowledge and precision manufacturing for superior stainless steel fabrication solutions.
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
                Comprehensive stainless steel fabrication services for diverse industrial applications
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

        {/* Stainless Steel Grades */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Stainless Steel <span className="text-orange-500">Grades</span>
              </h2>
              <p className="text-xl text-gray-300">
                Expert selection of appropriate grades for your specific stainless steel fabrication requirements
              </p>
            </div>

            <div className="space-y-6">
              {gradeSpecifications.map((grade, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-orange-500 mb-2">Grade {grade.grade}</h3>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Properties</h4>
                      <p className="text-gray-300">{grade.properties}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Applications</h4>
                      <p className="text-gray-300">{grade.applications}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Features Section */}
        <section className="py-20 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Quality <span className="text-orange-500">Assurance</span>
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive quality control ensuring superior stainless steel fabrication results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {qualityFeatures.map((feature, index) => (
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
                Detailed specifications for our stainless steel fabrication capabilities
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
                Applications Across <span className="text-orange-500">Industries</span>
              </h2>
              <p className="text-xl text-gray-300">
                Premium stainless steel fabrication solutions for demanding environments and applications
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
                Trusted stainless steel fabrication across critical industry sectors
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
                Our Fabrication <span className="text-orange-500">Process</span>
              </h2>
              <p className="text-xl text-gray-300">
                Systematic approach ensuring optimal material selection and superior stainless steel fabrication
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
              Ready for Premium Stainless Steel Fabrication?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Get expert stainless steel fabrication services with guaranteed quality and corrosion resistance. 
              Contact us for material consultation and competitive quotes for your specific stainless steel fabrication requirements.
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