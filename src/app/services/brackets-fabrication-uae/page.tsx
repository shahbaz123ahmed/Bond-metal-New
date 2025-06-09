import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle, Shield, Zap, Award, Wrench, Settings, Target } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brackets Fabrication and Clamps | Custom Metal Bracket Manufacturing UAE',
  description: 'Professional brackets fabrication and clamps services in UAE. Expert custom bracket manufacturing, heavy-duty clamps, and precision mounting solutions for construction and industrial applications.',
  keywords: 'brackets fabrication UAE, clamps manufacturing UAE, custom brackets Dubai, metal clamps UAE, mounting brackets fabrication, industrial clamps UAE',
  openGraph: {
    title: 'Brackets Fabrication and Clamps | Custom Metal Bracket Manufacturing',
    description: 'Professional brackets fabrication and clamps services with custom manufacturing and precision engineering.',
    images: ['/images/brackets.jpeg'],
    type: 'website',
    url: 'https://bondmetal.com/services/brackets-fabrication-uae'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brackets Fabrication and Clamps | Custom Metal Bracket Manufacturing',
    description: 'Professional brackets fabrication and clamps services in UAE.',
    images: ['/images/brackets.jpeg'],
  },
  alternates: {
    canonical: 'https://bondmetal.com/services/brackets-fabrication-uae'
  }
}

export default function BracketsFabricationPage() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Brackets Fabrication and Clamps",
    "description": "Professional brackets fabrication and clamps services in UAE. Expert custom bracket manufacturing and heavy-duty clamps for construction and industrial applications.",
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
    "serviceType": "Brackets Fabrication and Clamps",
    "areaServed": {
      "@type": "Country",
      "name": "United Arab Emirates"
    }
  }

  const features = [
    "Precision brackets fabrication and clamps up to ±0.1mm tolerance",
    "Advanced CNC machining for brackets fabrication and clamps",
    "Custom design engineering for brackets fabrication and clamps",
    "Wide material compatibility for brackets fabrication and clamps",
    "High-strength welding for brackets fabrication and clamps",
    "Load-bearing calculations for brackets fabrication and clamps",
    "Corrosion-resistant coatings for brackets fabrication and clamps",
    "Fast prototyping for brackets fabrication and clamps production"
  ]

  const applications = [
    { title: "Structural Support UAE", desc: "Heavy-duty brackets fabrication and clamps for building frames, steel structures, and architectural support systems" },
    { title: "HVAC Systems UAE", desc: "Mounting brackets fabrication and clamps for air conditioning units, ductwork, and ventilation equipment" },
    { title: "Industrial Equipment UAE", desc: "Machine mounting brackets fabrication and clamps, equipment supports, and production line fixtures" },
    { title: "Electrical Systems UAE", desc: "Cable tray brackets fabrication and clamps, panel mounts, and electrical equipment support structures" },
    { title: "Solar Panel Mounting UAE", desc: "Specialized brackets fabrication and clamps for solar panel installations and renewable energy systems" },
    { title: "Signage & Display UAE", desc: "Commercial signage brackets fabrication and clamps, billboard supports, and display mounting systems" }
  ]

  const bracketTypes = [
    {
      icon: Shield,
      title: "Angle Brackets and Clamps",
      desc: "L-shaped brackets fabrication and clamps for corner connections and 90-degree mounting",
      details: ["Standard and custom angles", "Various thickness options for UAE", "Galvanized finishes", "Load-tested designs"]
    },
    {
      icon: Zap,
      title: "Channel Brackets and Clamps",
      desc: "U-shaped brackets fabrication and clamps for linear support and mounting applications",
      details: ["Continuous support systems", "Multiple mounting points", "Slotted configurations for UAE", "Custom lengths available"]
    },
    {
      icon: Award,
      title: "Plate Brackets and Clamps",
      desc: "Flat mounting plates for heavy-duty brackets fabrication and clamps applications",
      details: ["High load capacity", "Custom hole patterns", "Reinforced designs", "Multiple material grades for UAE"]
    },
    {
      icon: Wrench,
      title: "Cantilever Brackets and Clamps",
      desc: "Extended support brackets fabrication and clamps for overhanging loads",
      details: ["Engineering calculations", "Moment resistance", "Reinforced construction", "Safety factor compliance"]
    },
    {
      icon: Settings,
      title: "Adjustable Brackets and Clamps",
      desc: "Variable position brackets fabrication and clamps for flexible mounting solutions",
      details: ["Multi-position adjustment", "Locking mechanisms", "Field adjustability", "Maintenance accessibility"]
    },
    {
      icon: Target,
      title: "Custom Brackets and Clamps",
      desc: "Specialized brackets fabrication and clamps designed for unique applications",
      details: ["CAD design services", "Prototype development", "Performance testing", "Volume production"]
    }
  ]

  const benefits = [
    {
      title: "Engineering Excellence UAE",
      desc: "Professional design and calculation services for brackets fabrication and clamps ensure optimal performance and safety compliance for all UAE applications."
    },
    {
      title: "Material Versatility UAE",
      desc: "Expert brackets fabrication and clamps using steel, stainless steel, aluminum, and specialty alloys with appropriate treatments for UAE conditions."
    },
    {
      title: "Quality Certification UAE",
      desc: "ISO-certified welding processes and quality control systems for brackets fabrication and clamps ensure consistent, reliable products."
    },
    {
      title: "Custom Solutions UAE",
      desc: "Complete design-to-delivery service for unique brackets fabrication and clamps requirements and specialized UAE applications."
    }
  ]

  const process = [
    { 
      step: "Design Consultation for UAE", 
      desc: "Engineering review of load requirements and mounting specifications for brackets fabrication and clamps",
      details: "Our engineers work with you to understand load requirements, environmental conditions, and installation constraints to design optimal brackets fabrication and clamps solutions for UAE projects."
    },
    { 
      step: "CAD Development UAE", 
      desc: "Detailed 3D modeling and engineering calculations for brackets fabrication and clamps approval",
      details: "Professional CAD drawings with complete dimensions, material specifications, and structural calculations for your brackets fabrication and clamps review and approval."
    },
    { 
      step: "Prototype & Testing UAE", 
      desc: "Sample brackets fabrication and clamps with load testing for validation",
      details: "We fabricate prototypes for complex brackets fabrication and clamps projects and conduct load testing to verify performance before full production."
    },
    { 
      step: "Production & Delivery UAE", 
      desc: "Precision brackets fabrication and clamps with quality-controlled delivery",
      details: "Full production using certified processes for brackets fabrication and clamps with comprehensive quality control and timely delivery to your specifications."
    }
  ]

  const specifications = [
    { property: "Material Thickness Range UAE", value: "2mm - 25mm" },
    { property: "Maximum Bracket Size UAE", value: "2000mm x 1500mm" },
    { property: "Fabrication Tolerance UAE", value: "±0.1mm precision" },
    { property: "Load Capacity UAE", value: "Up to 10 tons per bracket" },
    { property: "Welding Standards UAE", value: "AWS D1.1, ASME certified" },
    { property: "Material Options UAE", value: "Steel, SS, Aluminum, Alloys" },
    { property: "Finish Options UAE", value: "Galvanized, Powder Coat, Anodized" },
    { property: "Production Capacity UAE", value: "1000+ brackets per month" }
  ]

  const industries = [
    "Construction & Building UAE",
    "Oil & Gas Facilities UAE", 
    "Manufacturing Plants UAE",
    "Power Generation UAE",
    "Water Treatment UAE",
    "HVAC Systems UAE",
    "Solar Energy UAE",
    "Telecommunications UAE"
  ]

  const qualityFeatures = [
    "AWS certified welders for brackets fabrication and clamps",
    "Material traceability for brackets fabrication and clamps",
    "Load testing capabilities for brackets fabrication and clamps",
    "Dimensional inspection for brackets fabrication and clamps",
    "Surface quality control for brackets fabrication and clamps",
    "Corrosion resistance testing for brackets fabrication and clamps",
    "Fatigue life analysis for brackets fabrication and clamps",
    "Safety factor verification for brackets fabrication and clamps"
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
                  Brackets Fabrication <span className="text-orange-500">and Clamps</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Professional custom brackets fabrication and clamps services with precision engineering and manufacturing. 
                  We design and fabricate heavy-duty mounting brackets fabrication and clamps, structural supports, and specialized 
                  bracket solutions for construction, industrial, and commercial applications across Dubai and the UAE.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    Get Custom Quote
                  </Link>
                  
                </div>
              </header>

              <div className="relative">
                <Image 
                  src="/images/brackets.jpeg"
                  alt="Custom Brackets Fabrication and Clamps Services in UAE" 
                  width={700}
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
                Why Choose Our Brackets Fabrication <span className="text-orange-500">and Clamps Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Engineering excellence and precision manufacturing for reliable, high-performance brackets fabrication and clamps solutions.
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

        {/* Bracket Types Section */}
        <section className="py-20 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Brackets Fabrication and Clamps <span className="text-orange-500">Types & Solutions</span>
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive range of brackets fabrication and clamps designs for diverse mounting and support applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bracketTypes.map((bracket, index) => {
                const IconComponent = bracket.icon
                return (
                  <div key={index} className="bg-slate-700 p-8 rounded-xl border border-slate-600 hover:border-orange-500 transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-orange-500">{bracket.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6">{bracket.desc}</p>
                    <ul className="space-y-2">
                      {bracket.details.map((detail, idx) => (
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
                Comprehensive quality control ensuring reliable, high-performance brackets fabrication and clamps solutions
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
                Detailed specifications for our brackets fabrication and clamps capabilities
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
                Custom brackets fabrication and clamps solutions for diverse mounting and support requirements
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
                Trusted brackets fabrication and clamps services across multiple industry sectors
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
                Our Brackets Fabrication and Clamps <span className="text-orange-500">Process</span>
              </h2>
              <p className="text-xl text-gray-300">
                Systematic approach ensuring optimal design and reliable performance for brackets fabrication and clamps
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
              Ready for Custom Brackets Fabrication and Clamps Solutions?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Get expert brackets fabrication and clamps services with engineering support and guaranteed quality. 
              Contact us for detailed consultation and competitive quotes for your brackets fabrication and clamps requirements.
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