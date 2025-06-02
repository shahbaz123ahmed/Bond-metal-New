

import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle, Shield, Zap, Award, Wrench, Settings, Target } from 'lucide-react'
import Link from 'next/link'

export default function HandrailFabricationPage() {
  const features = [
    "Custom handrail design and fabrication",
    "Stainless steel and aluminum construction",
    "ADA and UAE building code compliance",
    "Glass panel integration available",
    "LED lighting integration options",
    "Curved and straight handrail systems",
    "Powder coating and finishing services",
    "Professional installation and testing"
  ]

  const applications = [
    { title: "Commercial Buildings", desc: "Office complexes, shopping centers, hotels, and corporate facility staircases and walkways" },
    { title: "Residential Projects", desc: "Luxury villas, apartment buildings, townhouses, and residential staircase systems" },
    { title: "Healthcare Facilities", desc: "Hospitals, clinics, rehabilitation centers, and accessible pathway handrails" },
    { title: "Educational Institutions", desc: "Schools, universities, libraries, and campus accessibility handrail systems" },
    { title: "Industrial Facilities", desc: "Manufacturing plants, warehouses, platforms, and industrial safety handrails" },
    { title: "Public Infrastructure", desc: "Metro stations, airports, government buildings, and public accessibility systems" }
  ]

  const handrailTypes = [
    {
      icon: Shield,
      title: "Safety Handrails",
      desc: "Code-compliant safety handrails for stairs and ramps",
      details: ["Building code compliance", "Slip-resistant grips", "Proper height standards", "Safety testing certified"]
    },
    {
      icon: Zap,
      title: "Glass Handrails",
      desc: "Modern glass panel handrail systems with metal frames",
      details: ["Tempered safety glass", "Stainless steel frames", "Modern aesthetics", "Easy maintenance"]
    },
    {
      icon: Award,
      title: "Architectural Handrails",
      desc: "Designer handrails enhancing building aesthetics",
      details: ["Custom design patterns", "Premium finishes", "Architectural integration", "Unique styling"]
    },
    {
      icon: Wrench,
      title: "Industrial Handrails",
      desc: "Heavy-duty handrails for industrial environments",
      details: ["Heavy load capacity", "Corrosion resistance", "Chemical compatibility", "OSHA compliance"]
    },
    {
      icon: Settings,
      title: "Curved Handrails",
      desc: "Custom curved handrails for spiral and curved staircases",
      details: ["Precision bending", "Seamless curves", "Custom radius", "Expert fabrication"]
    },
    {
      icon: Target,
      title: "Balustrade Systems",
      desc: "Complete handrail and balustrade combinations",
      details: ["Integrated systems", "Multiple materials", "Custom heights", "Wind load rated"]
    }
  ]

  const benefits = [
    {
      title: "Local Code Expertise",
      desc: "Complete understanding of UAE building codes, accessibility standards, and safety regulations for compliant installations."
    },
    {
      title: "Quality Materials",
      desc: "Premium stainless steel grades and aluminum alloys selected for UAE climate resistance and long-term durability."
    },
    {
      title: "Custom Fabrication",
      desc: "In-house fabrication capabilities allowing complete customization for unique architectural requirements and designs."
    },
    {
      title: "Professional Installation",
      desc: "Certified installation teams ensuring proper mounting, safety compliance, and quality workmanship."
    }
  ]

  const process = [
    { 
      step: "Site Measurement", 
      desc: "Precise measurement and assessment of handrail requirements",
      details: "Our technicians visit your site to take accurate measurements, assess structural requirements, evaluate code compliance needs, and understand aesthetic preferences for optimal handrail design."
    },
    { 
      step: "Design & Engineering", 
      desc: "Custom design development with structural calculations",
      details: "Professional CAD design services including load calculations, material selection, mounting specifications, and compliance verification with UAE building codes and accessibility standards."
    },
    { 
      step: "Fabrication", 
      desc: "Precision manufacturing using advanced equipment",
      details: "Expert fabrication using premium materials and specialized techniques including welding, bending, finishing, and quality control to ensure perfect fit and superior performance."
    },
    { 
      step: "Installation & Testing", 
      desc: "Professional installation with safety verification",
      details: "Complete installation including mounting, alignment, safety testing, and final inspection to ensure compliance with safety standards and optimal performance."
    }
  ]

  const specifications = [
    { property: "Material Options", value: "SS 304/316, Aluminum 6061" },
    { property: "Handrail Heights", value: "900mm - 1100mm" },
    { property: "Pipe Diameters", value: "32mm - 50mm" },
    { property: "Wall Thickness", value: "2mm - 4mm" },
    { property: "Load Capacity", value: "1.5 kN/m (Code Requirement)" },
    { property: "Surface Finishes", value: "Satin, Mirror, Powder Coat" },
    { property: "Glass Thickness", value: "10mm - 12mm Tempered" },
    { property: "Installation Areas", value: "Dubai, Abu Dhabi, UAE" }
  ]

  const codeCompliance = [
    "UAE Building Code compliance",
    "ADA accessibility standards",
    "OSHA safety requirements",
    "International Building Code (IBC)",
    "BS 6180 safety standards",
    "EN 1991 load requirements",
    "Local municipality approvals",
    "Safety testing certification"
  ]

  const finishOptions = [
    { 
      finish: "Satin Stainless Steel", 
      benefits: "Professional appearance, easy maintenance, fingerprint resistant, UAE climate ideal",
      applications: "Commercial buildings, healthcare facilities, modern interiors"
    },
    { 
      finish: "Mirror Polished", 
      benefits: "Premium aesthetics, reflective surface, luxury appeal, easy cleaning",
      applications: "Luxury hotels, high-end residential, premium commercial spaces"
    },
    { 
      finish: "Powder Coated", 
      benefits: "Color customization, enhanced durability, weather resistance, cost-effective",
      applications: "Industrial facilities, outdoor installations, colored design schemes"
    },
    { 
      finish: "Anodized Aluminum", 
      benefits: "Corrosion protection, lightweight, color options, maintenance-free",
      applications: "Coastal areas, outdoor applications, modern architectural features"
    }
  ]

  const industries = [
    "Commercial Real Estate",
    "Healthcare Sector", 
    "Educational Institutions",
    "Hospitality Industry",
    "Industrial Facilities",
    "Residential Developments",
    "Government Buildings",
    "Transportation Hubs"
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
                Handrail Fabrication <span className="text-orange-500">in UAE</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Professional handrail fabrication and installation services across Dubai and UAE. 
                We specialize in custom safety handrails, architectural railing systems, and ADA-compliant 
                solutions engineered for UAE building codes and safety standards with premium materials and finishes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Get Site Measurement
                </button>
                <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
                  View Portfolio
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
                    <div className="text-gray-300">Handrail Types</div>
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
              Why Choose Our <span className="text-orange-500">Handrail Fabrication</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert craftsmanship with UAE building code compliance and safety excellence.
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

      {/* Handrail Types Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Handrail Types & <span className="text-orange-500">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive range of handrail systems for diverse safety and architectural requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {handrailTypes.map((handrail, index) => {
              const IconComponent = handrail.icon
              return (
                <div key={index} className="bg-slate-700 p-8 rounded-xl border border-slate-600 hover:border-orange-500 transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-orange-500">{handrail.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{handrail.desc}</p>
                  <ul className="space-y-2">
                    {handrail.details.map((detail, idx) => (
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

      {/* Finish Options Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Finish <span className="text-orange-500">Options</span>
            </h2>
            <p className="text-xl text-gray-300">
              Premium finish options for durability and aesthetic appeal in UAE climate
            </p>
          </div>

          <div className="space-y-6">
            {finishOptions.map((finish, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-orange-500 mb-2">{finish.finish}</h3>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Benefits</h4>
                    <p className="text-gray-300 text-sm">{finish.benefits}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Best Applications</h4>
                    <p className="text-gray-300 text-sm">{finish.applications}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Compliance Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Safety & Code <span className="text-orange-500">Compliance</span>
            </h2>
            <p className="text-xl text-gray-300">
              Full compliance with UAE building codes and international safety standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {codeCompliance.map((compliance, index) => (
              <div key={index} className="bg-slate-700 p-6 rounded-xl border border-slate-600 hover:border-orange-500 transition-all duration-300 text-center">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold text-white">{compliance}</h3>
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
              Detailed specifications for our handrail fabrication capabilities
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
              Professional handrail solutions for diverse architectural and safety applications
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
              Trusted handrail fabrication services across multiple industry sectors
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
              Systematic approach ensuring perfect handrail fabrication and installation
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
            Ready for Professional Handrail Solutions?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get expert handrail fabrication services with UAE building code compliance and safety excellence. 
            Contact us for site measurement and competitive quotes for your handrail requirements.
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
              Get Site Measurement
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