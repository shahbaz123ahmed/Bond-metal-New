

import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle, Shield, Zap, Award, Wrench, Settings, Target } from 'lucide-react'
import Link from 'next/link'

export default function PergolaMakingPage() {
  const features = [
    "Custom pergola design and fabrication",
    "Aluminum and steel frame construction",
    "Weather-resistant material selection",
    "Motorized louvered systems available",
    "Integrated lighting and electrical",
    "UV protection and climate control",
    "Modular and expandable designs",
    "Professional installation services"
  ]

  const applications = [
    { title: "Residential Gardens", desc: "Villa gardens, backyard spaces, rooftop terraces, and private outdoor living areas" },
    { title: "Commercial Spaces", desc: "Restaurant patios, hotel terraces, office outdoor areas, and retail outdoor spaces" },
    { title: "Hospitality Venues", desc: "Resort poolsides, spa gardens, outdoor dining areas, and entertainment spaces" },
    { title: "Educational Facilities", desc: "School courtyards, campus outdoor areas, playground shade, and recreational spaces" },
    { title: "Healthcare Gardens", desc: "Hospital healing gardens, therapy spaces, patient outdoor areas, and wellness centers" },
    { title: "Public Spaces", desc: "Park pavilions, community gardens, recreational areas, and public gathering spaces" }
  ]

  const pergolaTypes = [
    {
      icon: Shield,
      title: "Traditional Pergolas",
      desc: "Classic wooden and metal pergolas with timeless design appeal",
      details: ["Natural wood finishes", "Classic beam structure", "Climbing plant support", "Timeless aesthetics"]
    },
    {
      icon: Zap,
      title: "Motorized Louvered",
      desc: "Modern automated pergolas with adjustable roof slats",
      details: ["Remote control operation", "Weather-responsive automation", "Variable shade control", "Integrated sensors"]
    },
    {
      icon: Award,
      title: "Bioclimatic Pergolas",
      desc: "Advanced climate-control pergolas for year-round comfort",
      details: ["Temperature regulation", "Rain protection", "Wind resistance", "Energy efficiency"]
    },
    {
      icon: Wrench,
      title: "Aluminum Pergolas",
      desc: "Lightweight, durable aluminum structures with modern appeal",
      details: ["Corrosion resistance", "Low maintenance", "Modern aesthetics", "Powder coat finishes"]
    },
    {
      icon: Settings,
      title: "Steel Frame Pergolas",
      desc: "Heavy-duty steel structures for large spans and durability",
      details: ["Maximum strength", "Large span capability", "Structural integrity", "Industrial aesthetics"]
    },
    {
      icon: Target,
      title: "Retractable Canopy",
      desc: "Flexible pergolas with retractable fabric roof systems",
      details: ["Seasonal adaptability", "Manual or motorized", "Fabric variety", "Space optimization"]
    }
  ]

  const benefits = [
    {
      title: "UAE Climate Optimized",
      desc: "Designed specifically for UAE's extreme heat, occasional rainfall, and high UV exposure with proven durability."
    },
    {
      title: "Outdoor Living Enhancement",
      desc: "Transform outdoor spaces into comfortable, usable areas for entertaining, dining, and relaxation year-round."
    },
    {
      title: "Property Value Addition",
      desc: "Increase property value with beautiful, functional outdoor structures that enhance architectural appeal."
    },
    {
      title: "Energy Efficiency",
      desc: "Reduce building cooling costs by providing natural shade and creating comfortable microclimates."
    }
  ]

  const process = [
    { 
      step: "Design Consultation", 
      desc: "Comprehensive site assessment and design development",
      details: "Our designers visit your location to understand space requirements, architectural style, usage patterns, and aesthetic preferences to create the perfect pergola solution for your outdoor space."
    },
    { 
      step: "Engineering & Planning", 
      desc: "Structural engineering and detailed project planning",
      details: "Professional engineering including structural calculations, wind load analysis, foundation requirements, and material selection optimized for UAE climate and building regulations."
    },
    { 
      step: "Custom Fabrication", 
      desc: "Precision manufacturing using premium materials and techniques",
      details: "Expert fabrication using weather-resistant materials and advanced manufacturing processes, ensuring quality control and precision in every component for perfect fit and finish."
    },
    { 
      step: "Installation & Finishing", 
      desc: "Professional installation with complete project handover",
      details: "Complete installation including foundation work, structural assembly, electrical integration, finishing touches, and comprehensive testing to ensure optimal performance and aesthetics."
    }
  ]

  const specifications = [
    { property: "Material Options", value: "Aluminum, Steel, Wood, Composite" },
    { property: "Span Capability", value: "Up to 12 meters" },
    { property: "Height Range", value: "2.5m - 4.5m" },
    { property: "Wind Resistance", value: "Up to 180 km/h" },
    { property: "UV Protection", value: "Up to 95%" },
    { property: "Louvre Options", value: "Fixed, Adjustable, Motorized" },
    { property: "Electrical Integration", value: "Lighting, Fans, Heating" },
    { property: "Warranty Period", value: "5-15 years" }
  ]

  const industries = [
    "Residential Developments",
    "Hospitality & Tourism", 
    "Commercial Real Estate",
    "Healthcare Facilities",
    "Educational Institutions",
    "Retail & Shopping",
    "Government Buildings",
    "Recreation Centers"
  ]

  const materialComparison = [
    { 
      material: "Aluminum Structure", 
      benefits: "Lightweight, corrosion-resistant, modern aesthetics, low maintenance, UAE climate ideal",
      applications: "Modern homes, commercial spaces, coastal areas",
      maintenance: "Minimal - periodic cleaning"
    },
    { 
      material: "Steel Frame", 
      benefits: "Maximum strength, large spans, cost-effective, durable, industrial appeal",
      applications: "Large installations, commercial projects, heavy-duty applications",
      maintenance: "Moderate - annual inspection"
    },
    { 
      material: "Composite Materials", 
      benefits: "Wood appearance, weather resistance, no maintenance, color retention",
      applications: "Residential gardens, traditional designs, eco-friendly projects",
      maintenance: "Minimal - occasional cleaning"
    },
    { 
      material: "Treated Timber", 
      benefits: "Natural aesthetics, traditional appeal, renewable, customizable",
      applications: "Garden pergolas, rustic designs, eco-conscious projects",
      maintenance: "Regular - annual treatment"
    }
  ]

  const designFeatures = [
    "Integrated LED lighting systems",
    "Motorized louvre control",
    "Built-in sound systems",
    "Retractable side screens",
    "Heating element integration",
    "Drainage and gutter systems",
    "Climbing plant supports",
    "Custom color matching"
  ]

  const projectLocations = [
    "Dubai Marina",
    "Downtown Dubai", 
    "Palm Jumeirah",
    "Emirates Hills",
    "Dubai Hills",
    "Arabian Ranches",
    "Abu Dhabi CBD",
    "Yas Island",
    "Al Reem Island",
    "Saadiyat Island",
    "Jumeirah",
    "Business Bay"
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
                Pergola Making <span className="text-orange-500">in UAE</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Professional pergola design, fabrication, and installation services across Dubai and UAE. 
                We specialize in custom outdoor structures that enhance your living spaces with style, 
                comfort, and functionality, engineered for UAE climate conditions and modern lifestyle needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Get Design Consultation
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
                    <div className="text-3xl font-bold text-orange-500 mb-2">12m</div>
                    <div className="text-gray-300">Max Span</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">95%</div>
                    <div className="text-gray-300">UV Protection</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">6</div>
                    <div className="text-gray-300">Pergola Types</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">300+</div>
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
              Why Choose Our <span className="text-orange-500">Pergola Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert craftsmanship and design excellence for outdoor living enhancement in UAE.
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

      {/* Pergola Types Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Pergola Types & <span className="text-orange-500">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive range of pergola systems for diverse outdoor living requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pergolaTypes.map((pergola, index) => {
              const IconComponent = pergola.icon
              return (
                <div key={index} className="bg-slate-700 p-8 rounded-xl border border-slate-600 hover:border-orange-500 transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-orange-500">{pergola.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{pergola.desc}</p>
                  <ul className="space-y-2">
                    {pergola.details.map((detail, idx) => (
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
              Material <span className="text-orange-500">Selection</span>
            </h2>
            <p className="text-xl text-gray-300">
              Choose the optimal material based on your aesthetic preferences and functional requirements
            </p>
          </div>

          <div className="space-y-6">
            {materialComparison.map((material, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-orange-500 mb-2">{material.material}</h3>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Benefits</h4>
                    <p className="text-gray-300 text-sm">{material.benefits}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Best For</h4>
                    <p className="text-gray-300 text-sm">{material.applications}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Maintenance</h4>
                    <p className="text-gray-300 text-sm">{material.maintenance}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Design <span className="text-orange-500">Features</span>
            </h2>
            <p className="text-xl text-gray-300">
              Advanced features and customization options for enhanced outdoor living experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designFeatures.map((feature, index) => (
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
              Detailed specifications for our pergola design and fabrication capabilities
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
              Applications Across <span className="text-orange-500">Spaces</span>
            </h2>
            <p className="text-xl text-gray-300">
              Professional pergola solutions for diverse outdoor living and commercial applications
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

      {/* Project Locations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Project <span className="text-orange-500">Locations</span>
            </h2>
            <p className="text-xl text-gray-300">
              Professional pergola installation services across Dubai and Abu Dhabi premium areas
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
              Trusted pergola solutions across multiple sectors in UAE
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
              Our Design & Installation <span className="text-orange-500">Process</span>
            </h2>
            <p className="text-xl text-gray-300">
              Systematic approach ensuring perfect pergola design and superior installation quality
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
            Ready for Your Dream Pergola?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get expert pergola design and fabrication services with UAE climate optimization and 
            architectural excellence. Contact us for design consultation and competitive quotes.
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
              Get Design Consultation
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