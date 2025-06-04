import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle, Shield, Zap, Award, Wrench } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sheet Bending in UAE | Professional Metal Sheet Bending Services Dubai',
  description: 'Expert sheet bending in UAE with precision CNC press brake operations. Leading provider of metal sheet bending, custom forming, and industrial sheet bending services across UAE and Dubai.',
  keywords: 'sheet bending UAE, metal bending UAE, press brake services Dubai, sheet metal forming UAE, custom bending Dubai, industrial bending UAE',
  openGraph: {
    title: 'Sheet Bending in UAE | Professional Metal Sheet Bending Services',
    description: 'Expert sheet bending in UAE with precision CNC press brake operations and custom forming solutions.',
    images: ['/images/bendingsheet.webp'],
    type: 'website',
    url: 'https://bondmetal.com/services/sheet-bending-uae'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sheet Bending in UAE | Professional Metal Sheet Bending Services',
    description: 'Expert sheet bending in UAE with precision CNC press brake operations.',
    images: ['/images/bendingsheet.webp'],
  },
  alternates: {
    canonical: 'https://bondmetal.com/services/sheet-bending-uae'
  }
}

export default function SheetBendingPage() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Sheet Bending in UAE",
    "description": "Professional sheet bending in UAE with precision CNC press brake operations. Expert metal sheet bending and custom forming services across UAE and Dubai.",
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
    "serviceType": "Sheet Bending",
    "areaServed": {
      "@type": "Country",
      "name": "United Arab Emirates"
    }
  }

  const features = [
    "Precision sheet bending in UAE up to ±0.5° accuracy with advanced technology",
    "Advanced press brake technology for superior sheet bending in UAE",
    "Multiple material compatibility for diverse sheet bending in UAE projects",
    "Complex geometry capabilities for custom sheet bending in UAE solutions",
    "High-volume production capacity for industrial sheet bending in UAE",
    "Quick turnaround times for urgent sheet bending in UAE requirements",
    "Consistent quality control throughout sheet bending in UAE operations",
    "Custom tooling solutions for specialized sheet bending in UAE applications"
  ]

  const applications = [
    { title: "Structural Components UAE", desc: "Building frames, support brackets, and architectural elements requiring precise sheet bending in UAE" },
    { title: "Industrial Equipment UAE", desc: "Machine guards, enclosures, and custom chassis for manufacturing with sheet bending in UAE" },
    { title: "HVAC Systems UAE", desc: "Ductwork, air handling units, and ventilation components with precise sheet bending in UAE" },
    { title: "Automotive Parts UAE", desc: "Brackets, mounting systems, and structural components for vehicle applications using sheet bending in UAE" },
    { title: "Electronic Enclosures UAE", desc: "Control panels, junction boxes, and protective housings with exact sheet bending in UAE specifications" },
    { title: "Furniture & Fixtures UAE", desc: "Commercial furniture frames, display units, and architectural fixtures requiring sheet bending in UAE" }
  ]

  const bendingCapabilities = [
    {
      icon: Shield,
      title: "Air Bending UAE",
      desc: "Most versatile sheet bending in UAE method with excellent spring-back control",
      details: ["Suitable for all UAE materials", "Cost-effective for various angles", "Minimal tooling requirements", "Excellent repeatability for UAE projects"]
    },
    {
      icon: Zap,
      title: "Bottom Bending UAE",
      desc: "High precision sheet bending in UAE for critical dimensional requirements",
      details: ["Superior accuracy for UAE standards", "Consistent angle formation", "Minimal spring-back", "Perfect for tight UAE tolerances"]
    },
    {
      icon: Award,
      title: "Coining UAE",
      desc: "Maximum precision for critical sheet bending in UAE applications requiring exact angles",
      details: ["Highest accuracy achievable", "Permanent angle formation", "No spring-back issues", "Premium finish quality for UAE"]
    },
    {
      icon: Wrench,
      title: "Custom Forming UAE",
      desc: "Specialized sheet bending in UAE solutions for unique geometric requirements",
      details: ["Complex multi-bend operations", "Custom die solutions for UAE", "Prototype development", "Engineering support"]
    }
  ]

  const benefits = [
    {
      title: "Advanced Press Brake Technology UAE",
      desc: "State-of-the-art CNC press brakes for sheet bending in UAE ensure consistent, accurate bends with programmable precision control."
    },
    {
      title: "Material Versatility UAE",
      desc: "Expert handling of steel, aluminum, stainless steel, and specialty alloys with optimal sheet bending in UAE parameters."
    },
    {
      title: "Design Support UAE",
      desc: "Engineering consultation for sheet bending in UAE to optimize designs for manufacturing efficiency and cost-effectiveness."
    },
    {
      title: "Quality Assurance UAE",
      desc: "Comprehensive inspection protocols ensure every sheet bending in UAE operation meets specified tolerances and quality standards."
    }
  ]

  const process = [
    { 
      step: "Design Analysis for UAE", 
      desc: "Comprehensive review of drawings and specifications for optimal sheet bending in UAE strategy",
      details: "Our engineers analyze your drawings to determine the best sheet bending in UAE sequence, tooling requirements, and material considerations for optimal results."
    },
    { 
      step: "Material Preparation UAE", 
      desc: "Precise cutting and preparation of sheet metal for sheet bending in UAE operations",
      details: "Materials are cut to exact dimensions using laser or shearing processes, with proper edge preparation and surface cleaning for quality sheet bending in UAE."
    },
    { 
      step: "Precision Sheet Bending UAE", 
      desc: "Expert execution using advanced CNC press brake technology for sheet bending in UAE",
      details: "Skilled operators use programmable press brakes with precision tooling to achieve exact angles and consistent results across sheet bending in UAE production runs."
    },
    { 
      step: "Quality Inspection UAE", 
      desc: "Thorough dimensional and quality verification before delivery of sheet bending in UAE projects",
      details: "Each bent component undergoes comprehensive inspection including angle verification, dimensional checks, and surface quality assessment for sheet bending in UAE."
    }
  ]

  const specifications = [
    { property: "Maximum Bending Length UAE", value: "3000mm (10 feet)" },
    { property: "Material Thickness Range UAE", value: "0.5mm - 20mm" },
    { property: "Bending Accuracy UAE", value: "±0.5° standard, ±0.1° precision" },
    { property: "Maximum Tonnage UAE", value: "200 Ton capacity" },
    { property: "Materials Supported UAE", value: "Steel, Aluminum, Stainless Steel, Brass" },
    { property: "Minimum Bend Radius UAE", value: "0.5x material thickness" },
    { property: "Maximum Flange Height UAE", value: "200mm" },
    { property: "Production Capacity UAE", value: "High-volume and prototype runs" }
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
                  Sheet Bending <span className="text-orange-500">in UAE</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Professional sheet bending in UAE with precision CNC press brake operations. 
                  We specialize in complex forming, custom profiles, and high-precision sheet bending in UAE for steel, 
                  aluminum, and stainless steel applications across Dubai and UAE industrial sectors.
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

              {/* Replace stats section with image */}
              <div className="relative">
                <Image 
                  src="/images/bendingsheet.webp"
                  alt="Professional Sheet Bending in UAE - CNC Press Brake Services" 
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
                Why Choose Our Sheet Bending <span className="text-orange-500">Services in UAE</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced technology and expert craftsmanship for superior sheet bending in UAE results with precision forming.
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

        {/* Bending Capabilities Section */}
        <section className="py-20 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Sheet Bending <span className="text-orange-500">Capabilities</span>
              </h2>
              <p className="text-xl text-gray-300">
                Multiple sheet bending in UAE techniques to meet diverse manufacturing requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {bendingCapabilities.map((capability, index) => {
                const IconComponent = capability.icon
                return (
                  <div key={index} className="bg-slate-700 p-8 rounded-xl border border-slate-600 hover:border-orange-500 transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-orange-500">{capability.title}</h3>
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

        {/* Specifications Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Technical <span className="text-orange-500">Specifications</span>
              </h2>
              <p className="text-xl text-gray-300">
                Detailed specifications for our sheet bending in UAE capabilities and equipment
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
                Perfect for <span className="text-orange-500">Any Industry</span>
              </h2>
              <p className="text-xl text-gray-300">
                Professional sheet bending in UAE solutions for diverse manufacturing applications
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
                Our Sheet Bending <span className="text-orange-500">Process</span>
              </h2>
              <p className="text-xl text-gray-300">
                Systematic approach ensuring quality results for sheet bending in UAE from concept to completion
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
              Ready for Precision Sheet Bending in UAE?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Get expert sheet bending in UAE services with guaranteed precision and quality. 
              Contact us for detailed consultation and competitive quotes for your sheet bending in UAE project.
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
                Get Free Consultation
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-block text-center"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}