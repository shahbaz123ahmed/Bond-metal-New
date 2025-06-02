

import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle, Shield, Zap, Award, Wrench, Settings, Target } from 'lucide-react'
import Link from 'next/link'

export default function CanopyFabricationPage() {
  const features = [
    "Custom canopy design and engineering",
    "Weather-resistant material selection",
    "Structural load calculations",
    "Wind and seismic resistance design",
    "UV protection and thermal comfort",
    "Drainage and gutter integration",
    "LED lighting integration options",
    "Modular and expandable designs"
  ]

  const applications = [
    { title: "Commercial Buildings", desc: "Office entrances, retail storefronts, shopping centers, and commercial facility coverage" },
    { title: "Hospitality Venues", desc: "Hotel entrances, restaurant patios, resort areas, and outdoor dining spaces" },
    { title: "Transportation Hubs", desc: "Airport walkways, metro station coverage, bus stops, and transit facility shelters" },
    { title: "Residential Projects", desc: "Villa entrances, apartment complexes, parking areas, and residential outdoor spaces" },
    { title: "Industrial Facilities", desc: "Loading docks, equipment protection, warehouse entrances, and industrial shelters" },
    { title: "Public Spaces", desc: "Park pavilions, community centers, sports facilities, and public gathering areas" }
  ]

  const canopyTypes = [
    {
      icon: Shield,
      title: "Entrance Canopies",
      desc: "Welcoming entrance solutions providing weather protection and aesthetic appeal",
      details: ["Grand entrance designs", "Corporate branding integration", "Visitor comfort enhancement", "Professional appearance"]
    },
    {
      icon: Zap,
      title: "Walkway Canopies",
      desc: "Covered walkway systems connecting buildings and areas",
      details: ["Multi-span coverage", "Seamless connectivity", "Weather protection", "ADA compliant designs"]
    },
    {
      icon: Award,
      title: "Parking Canopies",
      desc: "Vehicle protection systems for parking areas and garages",
      details: ["Vehicle protection", "Solar panel integration", "Drainage systems", "Cost-effective coverage"]
    },
    {
      icon: Wrench,
      title: "Industrial Canopies",
      desc: "Heavy-duty canopies for industrial and manufacturing applications",
      details: ["Heavy load capacity", "Chemical resistance", "Equipment protection", "Maintenance access"]
    },
    {
      icon: Settings,
      title: "Retractable Canopies",
      desc: "Flexible canopy systems with motorized operation",
      details: ["Weather-responsive operation", "Remote control systems", "Variable coverage", "Energy efficiency"]
    },
    {
      icon: Target,
      title: "Tensioned Structures",
      desc: "Modern tensioned fabric and cable canopy systems",
      details: ["Architectural aesthetics", "Large span capability", "Lightweight construction", "Dynamic designs"]
    }
  ]

  const benefits = [
    {
      title: "Climate Adaptation",
      desc: "Engineered specifically for UAE climate conditions including extreme heat, sandstorms, and occasional rainfall."
    },
    {
      title: "Structural Excellence",
      desc: "Advanced engineering ensuring wind resistance up to 200 km/h and compliance with UAE building codes."
    },
    {
      title: "Material Innovation",
      desc: "Premium materials selected for UV resistance, thermal performance, and long-term durability in desert conditions."
    },
    {
      title: "Design Integration",
      desc: "Seamless architectural integration enhancing building aesthetics while providing functional protection."
    }
  ]

  const process = [
    { 
      step: "Site Analysis", 
      desc: "Comprehensive site evaluation and environmental assessment",
      details: "Our engineers conduct detailed site surveys including wind analysis, structural assessments, and environmental factors specific to UAE conditions for optimal canopy design and placement."
    },
    { 
      step: "Custom Design", 
      desc: "Architectural design with structural engineering calculations",
      details: "Professional design development including 3D modeling, wind load analysis, thermal calculations, and material selection optimized for UAE climate and aesthetic requirements."
    },
    { 
      step: "Fabrication", 
      desc: "Precision manufacturing using advanced techniques and materials",
      details: "Expert fabrication using weather-resistant materials and specialized techniques, ensuring quality control and compliance with international standards for canopy construction."
    },
    { 
      step: "Installation & Testing", 
      desc: "Professional installation with performance verification",
      details: "Complete installation including foundation work, structural assembly, weatherproofing, and comprehensive testing to ensure safety and performance standards are met."
    }
  ]

  const specifications = [
    { property: "Material Options", value: "Aluminum, Steel, Fabric, Glass" },
    { property: "Span Capability", value: "Up to 30 meters" },
    { property: "Wind Resistance", value: "Up to 200 km/h" },
    { property: "UV Protection", value: "99% UV blockage" },
    { property: "Temperature Range", value: "-20°C to +70°C" },
    { property: "Snow Load Capacity", value: "As per local codes" },
    { property: "Drainage Design", value: "Integrated gutter systems" },
    { property: "Finish Options", value: "Powder Coat, Anodized, PVDF" }
  ]

  const industries = [
    "Commercial Real Estate",
    "Hospitality & Tourism", 
    "Transportation",
    "Healthcare Facilities",
    "Educational Institutions",
    "Industrial Complexes",
    "Retail & Shopping",
    "Government Buildings"
  ]

  const materialOptions = [
    { 
      material: "Aluminum Frame", 
      benefits: "Lightweight, corrosion-resistant, low maintenance, excellent for UAE climate",
      applications: "Commercial canopies, walkways, entrance covers"
    },
    { 
      material: "Steel Structure", 
      benefits: "High strength, large spans, cost-effective for heavy-duty applications",
      applications: "Industrial canopies, parking structures, large installations"
    },
    { 
      material: "Fabric Membrane", 
      benefits: "Lightweight, translucent options, design flexibility, UV protection",
      applications: "Tensioned structures, temporary covers, architectural features"
    },
    { 
      material: "Polycarbonate Panels", 
      benefits: "Impact resistant, thermal insulation, natural light transmission",
      applications: "Walkway covers, greenhouse structures, skylights"
    }
  ]

  const performanceFeatures = [
    "Wind load resistance certification",
    "Thermal expansion accommodation",
    "Integrated drainage systems",
    "UV-resistant materials",
    "Corrosion protection coatings",
    "Seismic resistance design",
    "Snow load calculations",
    "Fire resistance compliance"
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
                Canopy Fabrication <span className="text-orange-500">in UAE</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Professional canopy fabrication and installation services providing weather protection and 
                architectural enhancement. We specialize in custom-designed canopies engineered for UAE 
                climate conditions, delivering complete solutions from concept design to installation across 
                Dubai and the Emirates.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Get Site Analysis
                </button>
                <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
                  View Gallery
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-700 rounded-2xl p-8 border border-slate-600">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">30m</div>
                    <div className="text-gray-300">Max Span</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">200km/h</div>
                    <div className="text-gray-300">Wind Resistance</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">99%</div>
                    <div className="text-gray-300">UV Protection</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
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
              Why Choose Our Canopy <span className="text-orange-500">Fabrication Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert engineering and fabrication designed specifically for UAE environmental conditions.
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

      {/* Canopy Types Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Canopy Types & <span className="text-orange-500">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive range of canopy systems for diverse architectural and functional requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {canopyTypes.map((canopy, index) => {
              const IconComponent = canopy.icon
              return (
                <div key={index} className="bg-slate-700 p-8 rounded-xl border border-slate-600 hover:border-orange-500 transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-orange-500">{canopy.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{canopy.desc}</p>
                  <ul className="space-y-2">
                    {canopy.details.map((detail, idx) => (
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

      {/* Material Options Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Material <span className="text-orange-500">Options</span>
            </h2>
            <p className="text-xl text-gray-300">
              Premium materials selected for optimal performance in UAE climate conditions
            </p>
          </div>

          <div className="space-y-6">
            {materialOptions.map((material, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-orange-500 mb-2">{material.material}</h3>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Benefits</h4>
                    <p className="text-gray-300">{material.benefits}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Applications</h4>
                    <p className="text-gray-300">{material.applications}</p>
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
              Advanced engineering features ensuring reliable performance and safety
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
              Detailed specifications for our canopy fabrication capabilities
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
              Professional canopy solutions for diverse architectural and commercial applications
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
              Trusted canopy fabrication services across multiple industry sectors
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
              Systematic approach ensuring optimal design and superior installation performance
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
            Ready for Professional Canopy Solutions?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get expert canopy fabrication services with climate-optimized design and engineering excellence. 
            Contact us for site analysis and competitive quotes for your weather protection requirements.
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
              Get Site Analysis
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