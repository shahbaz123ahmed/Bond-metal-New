

import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle, Shield, Zap, Award, Wrench, Settings, Target } from 'lucide-react'
import Link from 'next/link'

export default function CarParkShadePage() {
  const features = [
    "Custom car park shade design and installation",
    "Tensile fabric membrane structures",
    "HDPE and PVC shade cloth options",
    "Steel and aluminum frame structures",
    "UV protection up to 98%",
    "Wind resistant engineering design",
    "Drainage and water management systems",
    "Modular and expandable installations"
  ]

  const applications = [
    { title: "Commercial Car Parks", desc: "Shopping malls, office buildings, retail centers, and commercial facility parking areas" },
    { title: "Residential Complexes", desc: "Apartment buildings, villa communities, gated societies, and residential parking areas" },
    { title: "Educational Institutions", desc: "Schools, universities, training centers, and campus parking facilities" },
    { title: "Healthcare Facilities", desc: "Hospitals, clinics, medical centers, and healthcare facility parking areas" },
    { title: "Industrial Facilities", desc: "Manufacturing plants, warehouses, logistics centers, and industrial parking zones" },
    { title: "Public Spaces", desc: "Parks, recreational areas, sports facilities, and public parking installations" }
  ]

  const shadeTypes = [
    {
      icon: Shield,
      title: "Car Park Shade Structures",
      desc: "Robust shade systems designed specifically for vehicle protection",
      details: ["Multi-vehicle coverage", "Heavy-duty steel frames", "Weather-resistant materials", "Long-term durability"]
    },
    {
      icon: Zap,
      title: "Tensile Shade Structures",
      desc: "Modern architectural shade solutions with fabric membranes",
      details: ["Architectural aesthetics", "Large span capability", "Minimal support columns", "Dynamic designs"]
    },
    {
      icon: Award,
      title: "HDPE Shade Cloth",
      desc: "High-density polyethylene shade systems for maximum UV protection",
      details: ["98% UV protection", "Breathable fabric", "Color retention", "Cost-effective solution"]
    },
    {
      icon: Wrench,
      title: "Steel Frame Systems",
      desc: "Heavy-duty steel structures for permanent installations",
      details: ["High load capacity", "Galvanized protection", "Structural integrity", "Long-term investment"]
    },
    {
      icon: Settings,
      title: "Cantilever Structures",
      desc: "Single-sided support systems maximizing parking space",
      details: ["Space optimization", "Unobstructed parking", "Modern appearance", "Engineering excellence"]
    },
    {
      icon: Target,
      title: "Membrane Structures",
      desc: "Advanced PVC and PTFE membrane shade solutions",
      details: ["Self-cleaning properties", "Translucent options", "Fire resistance", "Weather durability"]
    }
  ]

  const benefits = [
    {
      title: "UAE Climate Expertise",
      desc: "Engineered specifically for extreme UAE heat, sandstorms, and occasional rainfall with proven performance."
    },
    {
      title: "Vehicle Protection",
      desc: "Complete protection from UV damage, heat buildup, bird droppings, and weather elements extending vehicle life."
    },
    {
      title: "Energy Efficiency",
      desc: "Significant reduction in vehicle interior temperatures, reducing air conditioning load and fuel consumption."
    },
    {
      title: "Architectural Integration",
      desc: "Modern designs that enhance property aesthetics while providing functional shade and weather protection."
    }
  ]

  const process = [
    { 
      step: "Site Survey & Analysis", 
      desc: "Comprehensive site evaluation and shade requirement assessment",
      details: "Our engineers conduct detailed site surveys including sun path analysis, wind load assessment, structural requirements, and parking layout optimization for maximum shade coverage and efficiency."
    },
    { 
      step: "Custom Design Development", 
      desc: "Architectural and structural design tailored to site requirements",
      details: "Professional design development including 3D modeling, structural calculations, material selection, and aesthetic integration optimized for UAE climate and local building codes."
    },
    { 
      step: "Fabrication & Manufacturing", 
      desc: "Precision fabrication using premium materials and techniques",
      details: "Expert fabrication using weather-resistant materials and specialized manufacturing processes, ensuring quality control and compliance with international standards for shade structures."
    },
    { 
      step: "Installation & Commissioning", 
      desc: "Professional installation with performance testing and handover",
      details: "Complete installation including foundation work, structural assembly, membrane tensioning, and comprehensive testing to ensure optimal performance and safety compliance."
    }
  ]

  const specifications = [
    { property: "Shade Coverage", value: "Up to 95% UV protection" },
    { property: "Material Options", value: "HDPE, PVC, PTFE Membrane" },
    { property: "Frame Materials", value: "Galvanized Steel, Aluminum" },
    { property: "Span Capability", value: "Up to 40 meters" },
    { property: "Wind Resistance", value: "Up to 200 km/h" },
    { property: "Temperature Range", value: "-20°C to +80°C" },
    { property: "Fabric Lifespan", value: "10-15 years warranty" },
    { property: "Service Locations", value: "Dubai, Abu Dhabi, UAE" }
  ]

  const industries = [
    "Commercial Real Estate",
    "Residential Developments", 
    "Educational Sector",
    "Healthcare Facilities",
    "Retail & Shopping",
    "Industrial Complexes",
    "Government Buildings",
    "Hospitality Industry"
  ]

  const materialComparison = [
    { 
      material: "HDPE Shade Cloth", 
      benefits: "Cost-effective, breathable, excellent UV protection, easy maintenance",
      applications: "Residential car parks, budget projects, temporary installations",
      lifespan: "8-12 years"
    },
    { 
      material: "PVC Membrane", 
      benefits: "Waterproof, translucent options, self-cleaning, fire resistant",
      applications: "Commercial projects, premium installations, architectural features",
      lifespan: "12-15 years"
    },
    { 
      material: "PTFE Membrane", 
      benefits: "Premium durability, non-stick surface, chemical resistance, clarity",
      applications: "High-end projects, harsh environments, long-term installations",
      lifespan: "15-25 years"
    },
    { 
      material: "Steel Frame", 
      benefits: "Maximum strength, large spans, permanent solution, cost-effective",
      applications: "Heavy-duty installations, large car parks, industrial applications",
      lifespan: "25+ years"
    }
  ]

  const performanceFeatures = [
    "Wind load certified design",
    "UV degradation resistance",
    "Thermal expansion accommodation",
    "Integrated drainage systems",
    "Anti-fungal treatments",
    "Fire retardant properties",
    "Color fastness guarantee",
    "Structural safety compliance"
  ]

  const projectLocations = [
    "Dubai Marina",
    "Downtown Dubai", 
    "Business Bay",
    "DIFC",
    "Abu Dhabi CBD",
    "Yas Island",
    "Al Reem Island",
    "Dubai Hills",
    "Palm Jumeirah",
    "JLT",
    "Motor City",
    "Arabian Ranches"
  ]

  return (
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
                Car Park & Tensile Shade <span className="text-orange-500">Dubai & Abu Dhabi</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Professional fabrication and installation of car park shade structures and tensile shade systems 
                across Dubai and Abu Dhabi. We specialize in UV-protective, weather-resistant shade solutions 
                engineered for UAE climate conditions, providing complete vehicle protection and energy efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Get Site Survey
                </button>
                <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
                  View Projects
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-700 rounded-2xl p-8 border border-slate-600">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">98%</div>
                    <div className="text-gray-300">UV Protection</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">40m</div>
                    <div className="text-gray-300">Max Span</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">15</div>
                    <div className="text-gray-300">Years Warranty</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">800+</div>
                    <div className="text-gray-300">Installations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Our <span className="text-orange-500">Shade Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert engineering and installation designed specifically for UAE climate and vehicle protection needs.
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
              Comprehensive range of shade systems for diverse parking and architectural requirements
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
              Choose the optimal material solution based on your project requirements and budget
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
              Advanced engineering features ensuring reliable performance and safety in UAE conditions
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
              Detailed specifications for our shade structure capabilities
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
              Applications Across <span className="text-orange-500">Projects</span>
            </h2>
            <p className="text-xl text-gray-300">
              Professional shade solutions for diverse parking and architectural applications
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
              Professional shade installation services across Dubai and Abu Dhabi key areas
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
              Trusted shade solutions across multiple industry sectors in UAE
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
              Systematic approach ensuring optimal shade performance and superior installation quality
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
            Ready for Professional Car Park Shade Solutions?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get expert shade structure fabrication and installation in Dubai and Abu Dhabi with proven 
            UV protection and engineering excellence. Contact us for site survey and competitive quotes.
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
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Get Site Survey
            </button>
            <Link 
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-block"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}