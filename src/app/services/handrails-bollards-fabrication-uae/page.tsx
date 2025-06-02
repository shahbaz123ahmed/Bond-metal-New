

import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle, Shield, Zap, Award, Wrench, Settings, Target } from 'lucide-react'
import Link from 'next/link'

export default function HandrailsBollardsPage() {
  const features = [
    "Custom handrail and bollard design",
    "Stainless steel and aluminum fabrication",
    "Safety compliance to UAE building codes",
    "Architectural integration solutions",
    "Weather-resistant finishes",
    "Accessibility (ADA) compliant designs",
    "Security and decorative combinations",
    "Professional installation services"
  ]

  const applications = [
    { title: "Commercial Buildings", desc: "Office complexes, shopping malls, hotels, and corporate facilities in Dubai and Abu Dhabi" },
    { title: "Residential Projects", desc: "Luxury villas, apartment buildings, gated communities, and residential complexes" },
    { title: "Public Infrastructure", desc: "Metro stations, airports, government buildings, and public walkways" },
    { title: "Healthcare Facilities", desc: "Hospitals, clinics, rehabilitation centers, and medical complexes" },
    { title: "Educational Institutions", desc: "Schools, universities, training centers, and educational campuses" },
    { title: "Industrial Facilities", desc: "Manufacturing plants, warehouses, ports, and industrial complexes" }
  ]

  const productTypes = [
    {
      icon: Shield,
      title: "Safety Handrails",
      desc: "ADA compliant handrails for stairs, ramps, and walkways",
      details: ["Building code compliance", "Ergonomic grip design", "Slip-resistant surfaces", "Multiple mounting options"]
    },
    {
      icon: Zap,
      title: "Security Bollards",
      desc: "Vehicle barrier bollards for perimeter protection",
      details: ["Crash-rated options", "Removable designs", "LED lighting integration", "Custom heights available"]
    },
    {
      icon: Award,
      title: "Decorative Handrails",
      desc: "Architectural handrails enhancing aesthetic appeal",
      details: ["Custom design patterns", "Premium finishes", "Glass panel integration", "Modern styling options"]
    },
    {
      icon: Wrench,
      title: "Balustrade Systems",
      desc: "Complete railing systems for balconies and terraces",
      details: ["Glass and metal combinations", "Wind load calculations", "Safety glass compliance", "Weather sealing"]
    },
    {
      icon: Settings,
      title: "Industrial Handrails",
      desc: "Heavy-duty handrails for industrial applications",
      details: ["High-strength construction", "Corrosion resistance", "Chemical compatibility", "Safety compliance"]
    },
    {
      icon: Target,
      title: "Custom Solutions",
      desc: "Bespoke handrail and bollard combinations",
      details: ["Site-specific design", "Architectural integration", "Multi-functional systems", "Branding incorporation"]
    }
  ]

  const benefits = [
    {
      title: "Local Expertise",
      desc: "Deep understanding of UAE building codes, climate considerations, and architectural preferences in Dubai and Abu Dhabi."
    },
    {
      title: "Quality Materials",
      desc: "Premium stainless steel and aluminum materials specifically selected for Gulf climate and corrosion resistance."
    },
    {
      title: "Safety Compliance",
      desc: "Full compliance with UAE building codes, accessibility standards, and international safety requirements."
    },
    {
      title: "Complete Service",
      desc: "End-to-end service from design consultation through fabrication, delivery, and professional installation."
    }
  ]

  const process = [
    { 
      step: "Site Assessment", 
      desc: "Comprehensive evaluation of installation requirements and constraints",
      details: "Our engineers visit your site in Dubai or Abu Dhabi to assess structural requirements, safety needs, accessibility compliance, and aesthetic preferences for optimal handrail and bollard solutions."
    },
    { 
      step: "Design & Engineering", 
      desc: "Custom design development with structural calculations",
      details: "Professional CAD design services including wind load calculations, structural analysis, and material selection optimized for UAE climate conditions and building code requirements."
    },
    { 
      step: "Fabrication", 
      desc: "Precision manufacturing using advanced equipment and techniques",
      details: "Expert fabrication in our UAE facility using premium materials and specialized techniques for handrails and bollards, ensuring quality control and timely production."
    },
    { 
      step: "Installation & Handover", 
      desc: "Professional installation with quality verification and testing",
      details: "Complete installation by certified technicians including structural mounting, electrical connections for illuminated bollards, safety testing, and project handover with warranties."
    }
  ]

  const specifications = [
    { property: "Material Options", value: "SS 304/316, Aluminum 6061/6063" },
    { property: "Handrail Heights", value: "900mm - 1100mm (UAE Standard)" },
    { property: "Bollard Heights", value: "600mm - 1200mm" },
    { property: "Pipe Diameters", value: "25mm - 76mm (Handrails)" },
    { property: "Wall Thickness", value: "2mm - 6mm" },
    { property: "Surface Finishes", value: "Satin, Mirror, Powder Coat" },
    { property: "Wind Load Rating", value: "Up to 200 km/h" },
    { property: "Installation Areas", value: "Dubai, Abu Dhabi, UAE" }
  ]

  const locations = [
    "Dubai Marina",
    "Downtown Dubai", 
    "Business Bay",
    "DIFC",
    "Abu Dhabi CBD",
    "Yas Island",
    "Al Reem Island",
    "Dubai Hills"
  ]

  const materialBenefits = [
    { 
      material: "Stainless Steel 316", 
      benefits: "Superior corrosion resistance, ideal for coastal areas in Dubai and Abu Dhabi",
      applications: "Marine environments, high-humidity areas"
    },
    { 
      material: "Stainless Steel 304", 
      benefits: "Excellent durability and cost-effectiveness for general applications",
      applications: "Indoor and covered outdoor installations"
    },
    { 
      material: "Aluminum 6061", 
      benefits: "Lightweight, corrosion-resistant, excellent for large installations",
      applications: "Architectural features, decorative applications"
    },
    { 
      material: "Powder Coated Steel", 
      benefits: "Cost-effective solution with customizable colors and finishes",
      applications: "Industrial applications, budget-conscious projects"
    }
  ]

  const safetyFeatures = [
    "UAE Building Code compliance",
    "Accessibility (ADA) standards",
    "Anti-slip surface treatments",
    "Rounded edge design",
    "Proper grip dimensions",
    "Structural load calculations",
    "Weather resistance testing",
    "Impact resistance verification"
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
                Handrails & Bollards <span className="text-orange-500">Dubai & Abu Dhabi</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Professional fabrication and installation of handrails and bollards across Dubai and Abu Dhabi. 
                We specialize in safety-compliant, architecturally integrated solutions using premium materials 
                designed for the UAE climate, delivering complete services from design to installation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Get Site Assessment
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
                    <div className="text-3xl font-bold text-orange-500 mb-2">1100mm</div>
                    <div className="text-gray-300">Max Height</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">316</div>
                    <div className="text-gray-300">SS Grade</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">6</div>
                    <div className="text-gray-300">Product Types</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">1200+</div>
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
              Why Choose Our <span className="text-orange-500">UAE Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Local expertise with international quality standards for Dubai and Abu Dhabi projects.
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

      {/* Product Types Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Product Types & <span className="text-orange-500">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive range of handrail and bollard solutions for Dubai and Abu Dhabi projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productTypes.map((product, index) => {
              const IconComponent = product.icon
              return (
                <div key={index} className="bg-slate-700 p-8 rounded-xl border border-slate-600 hover:border-orange-500 transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-orange-500">{product.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{product.desc}</p>
                  <ul className="space-y-2">
                    {product.details.map((detail, idx) => (
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

      {/* Material Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Material <span className="text-orange-500">Selection</span>
            </h2>
            <p className="text-xl text-gray-300">
              Optimal material selection for UAE climate and application requirements
            </p>
          </div>

          <div className="space-y-6">
            {materialBenefits.map((material, index) => (
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

      {/* Safety Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Safety <span className="text-orange-500">Features</span>
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive safety compliance ensuring user protection and regulatory adherence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyFeatures.map((feature, index) => (
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
              Detailed specifications for our fabrication and installation capabilities
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
              Applications Across <span className="text-orange-500">UAE Projects</span>
            </h2>
            <p className="text-xl text-gray-300">
              Professional handrail and bollard solutions for diverse Dubai and Abu Dhabi developments
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
              Service <span className="text-orange-500">Locations</span>
            </h2>
            <p className="text-xl text-gray-300">
              Professional installation services across key areas in Dubai and Abu Dhabi
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-xl text-center hover:bg-slate-700 transition-colors border border-slate-700 hover:border-orange-500">
                <h3 className="font-semibold text-white">{location}</h3>
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
              Our Installation <span className="text-orange-500">Process</span>
            </h2>
            <p className="text-xl text-gray-300">
              Systematic approach ensuring quality installation and long-term performance
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
            Ready for Professional Handrails & Bollards?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get expert fabrication and installation services in Dubai and Abu Dhabi with safety compliance 
            and architectural integration. Contact us for site assessment and competitive quotes.
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
              Get Site Assessment
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