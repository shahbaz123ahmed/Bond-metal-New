import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle, Shield, Zap, Award, Wrench, Settings, Target } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Car Park & Tensile Shade Dubai and Abu Dhabi | Professional Installation UAE',
  description: 'Expert Car Park & Tensile Shade Dubai and Abu Dhabi installation services. Leading provider of UV-protective shade structures and tensile systems across Dubai and Abu Dhabi.',
  keywords: 'Car Park & Tensile Shade Dubai and Abu Dhabi, car park shade Dubai Abu Dhabi, tensile shade structures UAE, parking shade Dubai, car shade Abu Dhabi, shade installation Dubai',
  openGraph: {
    title: 'Car Park & Tensile Shade Dubai and Abu Dhabi | Professional Installation',
    description: 'Expert Car Park & Tensile Shade Dubai and Abu Dhabi with UV protection and weather resistance.',
    images: ['/images/car.jpeg'],
    type: 'website',
    url: 'https://bondmetal.com/services/car-park-shade-tensile-uae'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Park & Tensile Shade Dubai and Abu Dhabi | Professional Installation',
    description: 'Expert Car Park & Tensile Shade Dubai and Abu Dhabi installation services.',
    images: ['/images/car.jpeg'],
  },
  alternates: {
    canonical: 'https://bondmetal.com/services/car-park-shade-tensile-uae'
  }
}

export default function CarParkShadePage() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Car Park & Tensile Shade Dubai and Abu Dhabi",
    "description": "Professional Car Park & Tensile Shade Dubai and Abu Dhabi installation services with UV protection and weather-resistant structures.",
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
    "serviceType": "Car Park & Tensile Shade Dubai and Abu Dhabi",
    "areaServed": ["Dubai", "Abu Dhabi"]
  }

  const features = [
    "Custom Car Park & Tensile Shade Dubai and Abu Dhabi design and installation",
    "Advanced tensile fabric membrane structures for Car Park & Tensile Shade Dubai and Abu Dhabi",
    "HDPE and PVC shade cloth options for Car Park & Tensile Shade Dubai and Abu Dhabi",
    "Steel and aluminum frame structures for Car Park & Tensile Shade Dubai and Abu Dhabi",
    "UV protection up to 98% with Car Park & Tensile Shade Dubai and Abu Dhabi",
    "Wind resistant engineering design for Car Park & Tensile Shade Dubai and Abu Dhabi",
    "Drainage and water management systems for Car Park & Tensile Shade Dubai and Abu Dhabi",
    "Modular and expandable installations for Car Park & Tensile Shade Dubai and Abu Dhabi"
  ]

  const applications = [
    { title: "Commercial Car Parks Dubai", desc: "Shopping malls, office buildings, retail centers requiring Car Park & Tensile Shade Dubai and Abu Dhabi solutions" },
    { title: "Residential Complexes Abu Dhabi", desc: "Apartment buildings, villa communities with custom Car Park & Tensile Shade Dubai and Abu Dhabi" },
    { title: "Educational Institutions Dubai", desc: "Schools, universities, training centers using Car Park & Tensile Shade Dubai and Abu Dhabi systems" },
    { title: "Healthcare Facilities Abu Dhabi", desc: "Hospitals, clinics, medical centers with Car Park & Tensile Shade Dubai and Abu Dhabi installations" },
    { title: "Industrial Facilities Dubai", desc: "Manufacturing plants, warehouses requiring Car Park & Tensile Shade Dubai and Abu Dhabi" },
    { title: "Public Spaces Abu Dhabi", desc: "Parks, recreational areas with Car Park & Tensile Shade Dubai and Abu Dhabi structures" }
  ]

  const shadeTypes = [
    {
      icon: Shield,
      title: "Car Park Shade Structures Dubai",
      desc: "Robust shade systems designed for vehicle protection using Car Park & Tensile Shade Dubai and Abu Dhabi",
      details: ["Multi-vehicle coverage for Dubai", "Heavy-duty steel frames", "Weather-resistant materials for UAE", "Long-term durability in Abu Dhabi"]
    },
    {
      icon: Zap,
      title: "Tensile Shade Structures Abu Dhabi",
      desc: "Modern architectural shade solutions with fabric membranes for Car Park & Tensile Shade Dubai and Abu Dhabi",
      details: ["Architectural aesthetics for Abu Dhabi", "Large span capability", "Minimal support columns for Dubai", "Dynamic designs"]
    },
    {
      icon: Award,
      title: "HDPE Shade Cloth Dubai",
      desc: "High-density polyethylene shade systems for Car Park & Tensile Shade Dubai and Abu Dhabi",
      details: ["98% UV protection for Dubai", "Breathable fabric", "Color retention in UAE climate", "Cost-effective solution for Abu Dhabi"]
    },
    {
      icon: Wrench,
      title: "Steel Frame Systems Abu Dhabi",
      desc: "Heavy-duty steel structures for permanent Car Park & Tensile Shade Dubai and Abu Dhabi installations",
      details: ["High load capacity for Abu Dhabi", "Galvanized protection", "Structural integrity for Dubai", "Long-term investment"]
    },
    {
      icon: Settings,
      title: "Cantilever Structures Dubai",
      desc: "Single-sided support systems maximizing parking space with Car Park & Tensile Shade Dubai and Abu Dhabi",
      details: ["Space optimization for Dubai", "Unobstructed parking", "Modern appearance in Abu Dhabi", "Engineering excellence"]
    },
    {
      icon: Target,
      title: "Membrane Structures Abu Dhabi",
      desc: "Advanced PVC and PTFE membrane solutions for Car Park & Tensile Shade Dubai and Abu Dhabi",
      details: ["Self-cleaning properties for Abu Dhabi", "Translucent options", "Fire resistance for Dubai", "Weather durability"]
    }
  ]

  const benefits = [
    {
      title: "UAE Climate Expertise Dubai",
      desc: "Engineered specifically for extreme UAE heat with proven performance for Car Park & Tensile Shade Dubai and Abu Dhabi solutions."
    },
    {
      title: "Vehicle Protection Abu Dhabi",
      desc: "Complete protection from UV damage and weather elements extending vehicle life with Car Park & Tensile Shade Dubai and Abu Dhabi."
    },
    {
      title: "Energy Efficiency Dubai",
      desc: "Significant reduction in vehicle interior temperatures with Car Park & Tensile Shade Dubai and Abu Dhabi installations."
    },
    {
      title: "Architectural Integration Abu Dhabi",
      desc: "Modern designs enhancing property aesthetics while providing functional Car Park & Tensile Shade Dubai and Abu Dhabi."
    }
  ]

  const process = [
    { 
      step: "Site Survey & Analysis Dubai", 
      desc: "Comprehensive site evaluation for Car Park & Tensile Shade Dubai and Abu Dhabi requirements",
      details: "Our engineers conduct detailed site surveys for optimal Car Park & Tensile Shade Dubai and Abu Dhabi coverage and efficiency."
    },
    { 
      step: "Custom Design Development Abu Dhabi", 
      desc: "Architectural and structural design for Car Park & Tensile Shade Dubai and Abu Dhabi",
      details: "Professional design development optimized for UAE climate and Car Park & Tensile Shade Dubai and Abu Dhabi requirements."
    },
    { 
      step: "Fabrication & Manufacturing Dubai", 
      desc: "Precision fabrication using premium materials for Car Park & Tensile Shade Dubai and Abu Dhabi",
      details: "Expert fabrication ensuring quality control for Car Park & Tensile Shade Dubai and Abu Dhabi projects."
    },
    { 
      step: "Installation & Commissioning Abu Dhabi", 
      desc: "Professional installation with performance testing for Car Park & Tensile Shade Dubai and Abu Dhabi",
      details: "Complete installation ensuring optimal performance for Car Park & Tensile Shade Dubai and Abu Dhabi systems."
    }
  ]

  const specifications = [
    { property: "Shade Coverage for Car Park & Tensile Shade Dubai and Abu Dhabi", value: "Up to 95% UV protection" },
    { property: "Material Options for Car Park & Tensile Shade Dubai and Abu Dhabi", value: "HDPE, PVC, PTFE Membrane" },
    { property: "Frame Materials for Car Park & Tensile Shade Dubai and Abu Dhabi", value: "Galvanized Steel, Aluminum" },
    { property: "Span Capability for Car Park & Tensile Shade Dubai and Abu Dhabi", value: "Up to 40 meters" },
    { property: "Wind Resistance for Car Park & Tensile Shade Dubai and Abu Dhabi", value: "Up to 200 km/h" },
    { property: "Temperature Range for Car Park & Tensile Shade Dubai and Abu Dhabi", value: "-20°C to +80°C" },
    { property: "Fabric Lifespan for Car Park & Tensile Shade Dubai and Abu Dhabi", value: "10-15 years warranty" },
    { property: "Service Locations for Car Park & Tensile Shade Dubai and Abu Dhabi", value: "Dubai, Abu Dhabi, UAE" }
  ]

  const industries = [
    "Commercial Real Estate requiring Car Park & Tensile Shade Dubai and Abu Dhabi",
    "Residential Developments using Car Park & Tensile Shade Dubai and Abu Dhabi", 
    "Educational Sector with Car Park & Tensile Shade Dubai and Abu Dhabi",
    "Healthcare Facilities featuring Car Park & Tensile Shade Dubai and Abu Dhabi",
    "Retail & Shopping implementing Car Park & Tensile Shade Dubai and Abu Dhabi",
    "Industrial Complexes utilizing Car Park & Tensile Shade Dubai and Abu Dhabi",
    "Government Buildings employing Car Park & Tensile Shade Dubai and Abu Dhabi",
    "Hospitality Industry with Car Park & Tensile Shade Dubai and Abu Dhabi"
  ]

  const materialComparison = [
    { 
      material: "HDPE Shade Cloth for Dubai", 
      benefits: "Cost-effective, breathable, excellent UV protection for Car Park & Tensile Shade Dubai and Abu Dhabi",
      applications: "Residential car parks, budget projects using Car Park & Tensile Shade Dubai and Abu Dhabi",
      lifespan: "8-12 years"
    },
    { 
      material: "PVC Membrane for Abu Dhabi", 
      benefits: "Waterproof, translucent options ideal for Car Park & Tensile Shade Dubai and Abu Dhabi",
      applications: "Commercial projects, premium installations with Car Park & Tensile Shade Dubai and Abu Dhabi",
      lifespan: "12-15 years"
    },
    { 
      material: "PTFE Membrane for Dubai", 
      benefits: "Premium durability, chemical resistance perfect for Car Park & Tensile Shade Dubai and Abu Dhabi",
      applications: "High-end projects, harsh environments requiring Car Park & Tensile Shade Dubai and Abu Dhabi",
      lifespan: "15-25 years"
    },
    { 
      material: "Steel Frame for Abu Dhabi", 
      benefits: "Maximum strength, large spans for heavy-duty Car Park & Tensile Shade Dubai and Abu Dhabi",
      applications: "Large car parks, industrial applications using Car Park & Tensile Shade Dubai and Abu Dhabi",
      lifespan: "25+ years"
    }
  ]

  const performanceFeatures = [
    "Wind load certified design for Car Park & Tensile Shade Dubai and Abu Dhabi",
    "UV degradation resistance for Car Park & Tensile Shade Dubai and Abu Dhabi",
    "Thermal expansion accommodation for Car Park & Tensile Shade Dubai and Abu Dhabi",
    "Integrated drainage systems for Car Park & Tensile Shade Dubai and Abu Dhabi",
    "Anti-fungal treatments for Car Park & Tensile Shade Dubai and Abu Dhabi",
    "Fire retardant properties for Car Park & Tensile Shade Dubai and Abu Dhabi",
    "Color fastness guarantee for Car Park & Tensile Shade Dubai and Abu Dhabi",
    "Structural safety compliance for Car Park & Tensile Shade Dubai and Abu Dhabi"
  ]

  const projectLocations = [
    "Dubai Marina with Car Park & Tensile Shade Dubai and Abu Dhabi",
    "Downtown Dubai featuring Car Park & Tensile Shade Dubai and Abu Dhabi", 
    "Business Bay using Car Park & Tensile Shade Dubai and Abu Dhabi",
    "DIFC with Car Park & Tensile Shade Dubai and Abu Dhabi",
    "Abu Dhabi CBD implementing Car Park & Tensile Shade Dubai and Abu Dhabi",
    "Yas Island utilizing Car Park & Tensile Shade Dubai and Abu Dhabi",
    "Al Reem Island employing Car Park & Tensile Shade Dubai and Abu Dhabi",
    "Dubai Hills featuring Car Park & Tensile Shade Dubai and Abu Dhabi",
    "Palm Jumeirah with Car Park & Tensile Shade Dubai and Abu Dhabi",
    "JLT using Car Park & Tensile Shade Dubai and Abu Dhabi",
    "Motor City implementing Car Park & Tensile Shade Dubai and Abu Dhabi",
    "Arabian Ranches utilizing Car Park & Tensile Shade Dubai and Abu Dhabi"
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
              <header>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-white">Car Park </span>
                  <span className="text-orange-500">and Tensile</span>
                  <span className="text-white"> Shade Dubai</span>
                  <span className="text-orange-500"> and Abu Dhabi</span>
                </h1>

                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Professional fabrication and installation of Car Park & Tensile Shade Dubai and Abu Dhabi. 
                  We specialize in UV-protective, weather-resistant shade solutions engineered for UAE climate conditions, 
                  providing complete vehicle protection and energy efficiency through advanced Car Park & Tensile Shade Dubai and Abu Dhabi systems.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">

                  <Link 
                    href="/portfolio"
                    className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-center"
                  >
                    View Projects
                  </Link>
                </div>
              </header>

              {/* Replace stats section with image */}
              <div className="relative">
                <Image 
                  src="/images/car.jpeg"
                  alt="Car Park & Tensile Shade Dubai and Abu Dhabi Professional Installation Services" 
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
                Why Choose Our <span className="text-orange-500">Car Park & Tensile Shade Dubai and Abu Dhabi</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Expert engineering and installation designed specifically for UAE climate and vehicle protection with Car Park & Tensile Shade Dubai and Abu Dhabi.
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

        {/* Shade Types Section */}
        <section className="py-20 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Shade Structure Types & <span className="text-orange-500">Solutions</span>
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive range of Car Park & Tensile Shade Dubai and Abu Dhabi systems for diverse requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {shadeTypes.map((shade, index) => {
                const IconComponent = shade.icon
                return (
                  <div key={index} className="bg-slate-700 p-8 rounded-xl border border-slate-600 hover:border-orange-500 transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-orange-500">{shade.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6">{shade.desc}</p>
                    <ul className="space-y-2">
                      {shade.details.map((detail, idx) => (
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

        {/* Material Comparison Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Material <span className="text-orange-500">Comparison</span>
              </h2>
              <p className="text-xl text-gray-300">
                Choose the optimal material solution for your Car Park & Tensile Shade Dubai and Abu Dhabi project
              </p>
            </div>

            <div className="space-y-6">
              {materialComparison.map((material, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-orange-500 mb-2">{material.material}</h3>
                      <div className="text-sm text-gray-400">Lifespan: {material.lifespan}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Benefits</h4>
                      <p className="text-gray-300 text-sm">{material.benefits}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Best For</h4>
                      <p className="text-gray-300 text-sm">{material.applications}</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {material.lifespan}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Features Section */}
        <section className="py-20 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Performance <span className="text-orange-500">Features</span>
              </h2>
              <p className="text-xl text-gray-300">
                Advanced engineering features ensuring reliable performance for Car Park & Tensile Shade Dubai and Abu Dhabi
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {performanceFeatures.map((feature, index) => (
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
                Detailed specifications for our Car Park & Tensile Shade Dubai and Abu Dhabi capabilities
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
                Professional Car Park & Tensile Shade Dubai and Abu Dhabi solutions for diverse applications
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

        {/* Service Locations */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Project <span className="text-orange-500">Locations</span>
              </h2>
              <p className="text-xl text-gray-300">
                Professional Car Park & Tensile Shade Dubai and Abu Dhabi installation services across key areas
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {projectLocations.map((location, index) => (
                <div key={index} className="bg-slate-800 p-4 rounded-xl text-center hover:bg-slate-700 transition-colors border border-slate-700 hover:border-orange-500">
                  <h3 className="font-semibold text-white text-sm">{location}</h3>
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
                Trusted Car Park & Tensile Shade Dubai and Abu Dhabi solutions across multiple industry sectors
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
                Our Installation <span className="text-orange-500">Process</span>
              </h2>
              <p className="text-xl text-gray-300">
                Systematic approach ensuring optimal Car Park & Tensile Shade Dubai and Abu Dhabi performance and quality
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
              Ready for Professional Car Park & Tensile Shade Dubai and Abu Dhabi?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Get expert Car Park & Tensile Shade Dubai and Abu Dhabi fabrication and installation with proven 
              UV protection and engineering excellence. Contact us for site survey and competitive quotes for your Car Park & Tensile Shade Dubai and Abu Dhabi project.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                <Phone className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Call for Shade Solutions</h3>
                <p className="text-orange-100">+971 50 413 2803</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                <Mail className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Email for Shade Solutions</h3>
                <p className="text-orange-100">info@bondmetal.com</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                <MessageCircle className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">WhatsApp Shade Solutions</h3>
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