'use client'

import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle, Shield, Zap, Award, Wrench, Settings, Target } from 'lucide-react'
import Link from 'next/link'

export default function SteelRollingPage() {
  const features = [
    "Precision rolling up to ±1mm accuracy",
    "Advanced 3-roll and 4-roll bending machines",
    "Wide range of material compatibility",
    "Complex curve and radius capabilities",
    "Large diameter rolling capacity",
    "Seamless welding for closed cylinders",
    "Custom radius requirements",
    "Quality surface finish guarantee"
  ]

  const applications = [
    { title: "Architectural Elements", desc: "Curved facades, decorative columns, and architectural features requiring precise radius formation" },
    { title: "Industrial Vessels", desc: "Pressure vessels, tanks, silos, and storage containers with custom dimensions" },
    { title: "Structural Components", desc: "Curved beams, arches, and structural elements for construction projects" },
    { title: "HVAC Ductwork", desc: "Large diameter ducts, ventilation systems, and air handling equipment" },
    { title: "Marine Applications", desc: "Ship hulls, offshore structures, and marine equipment requiring curved steel" },
    { title: "Energy Sector", desc: "Wind turbine towers, solar panel supports, and energy infrastructure components" }
  ]

  const rollingCapabilities = [
    {
      icon: Shield,
      title: "3-Roll Bending",
      desc: "Versatile rolling for various materials and thicknesses",
      details: ["Suitable for all materials", "Cost-effective solution", "Quick setup and operation", "Excellent for large radius work"]
    },
    {
      icon: Zap,
      title: "4-Roll Bending",
      desc: "High precision rolling with superior edge control",
      details: ["Pre-bending capability", "Better edge control", "Reduced flat ends", "Perfect for critical applications"]
    },
    {
      icon: Award,
      title: "Pyramid Rolling",
      desc: "Specialized rolling for conical and tapered structures",
      details: ["Conical rolling capability", "Variable radius control", "Tapered structure formation", "Custom angle solutions"]
    },
    {
      icon: Wrench,
      title: "Profile Rolling",
      desc: "Custom rolling for specialty profiles and shapes",
      details: ["Angle and channel rolling", "I-beam curving", "Custom profile bending", "Structural shape forming"]
    },
    {
      icon: Settings,
      title: "Seam Welding",
      desc: "Professional welding for closed cylinder formation",
      details: ["TIG/MIG welding options", "Full penetration welds", "Pressure vessel quality", "NDT testing available"]
    },
    {
      icon: Target,
      title: "Finishing Services",
      desc: "Complete finishing and quality control processes",
      details: ["Surface preparation", "Machining services", "Dimensional inspection", "Quality certification"]
    }
  ]

  const benefits = [
    {
      title: "Advanced Rolling Equipment",
      desc: "State-of-the-art CNC-controlled rolling machines ensure consistent radius formation and superior quality results."
    },
    {
      title: "Material Expertise",
      desc: "Expert handling of steel, stainless steel, aluminum, and specialty alloys with optimal rolling parameters."
    },
    {
      title: "Engineering Support",
      desc: "Technical consultation for optimal design solutions, material selection, and manufacturing efficiency."
    },
    {
      title: "Quality Assurance",
      desc: "Comprehensive inspection and testing protocols ensure every rolled component meets specifications."
    }
  ]

  const process = [
    { 
      step: "Design Analysis", 
      desc: "Comprehensive review of specifications and radius requirements",
      details: "Our engineers analyze your drawings to determine optimal rolling strategy, material considerations, and welding requirements for the best results."
    },
    { 
      step: "Material Preparation", 
      desc: "Precise cutting and edge preparation for rolling operations",
      details: "Materials are cut to exact dimensions with proper edge preparation, including beveling for welding when required for closed cylinders."
    },
    { 
      step: "Rolling Operations", 
      desc: "Expert execution using advanced CNC rolling equipment",
      details: "Skilled operators use programmable rolling machines with precision control to achieve exact radius requirements and consistent quality."
    },
    { 
      step: "Welding & Finishing", 
      desc: "Professional welding and finishing services as required",
      details: "When needed, we provide expert welding services to create closed cylinders, followed by finishing operations and quality inspection."
    }
  ]

  const specifications = [
    { property: "Maximum Rolling Length", value: "6000mm (20 feet)" },
    { property: "Material Thickness Range", value: "3mm - 50mm" },
    { property: "Minimum Rolling Radius", value: "200mm (varies by material)" },
    { property: "Maximum Material Width", value: "3000mm" },
    { property: "Rolling Accuracy", value: "±1mm radius tolerance" },
    { property: "Materials Supported", value: "Steel, Stainless Steel, Aluminum" },
    { property: "Maximum Cylinder Diameter", value: "3000mm" },
    { property: "Welding Capabilities", value: "TIG, MIG, SAW processes" }
  ]

  const industries = [
    "Construction & Architecture",
    "Oil & Gas Industry", 
    "Marine & Offshore",
    "Power Generation",
    "Water Treatment",
    "Manufacturing",
    "Transportation",
    "Mining & Resources"
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
                Steel Rolling <span className="text-orange-500">in UAE</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Professional steel and metal rolling services using advanced CNC rolling equipment. 
                We specialize in creating precise curved components, cylinders, and complex radius 
                formations for construction, industrial, and architectural applications across Dubai and the UAE.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Get Custom Quote
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
                    <div className="text-3xl font-bold text-orange-500 mb-2">±1mm</div>
                    <div className="text-gray-300">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">6000mm</div>
                    <div className="text-gray-300">Max Length</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">50mm</div>
                    <div className="text-gray-300">Max Thickness</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">800+</div>
                    <div className="text-gray-300">Projects Done</div>
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
              Why Choose Our Steel <span className="text-orange-500">Rolling Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced technology and expert craftsmanship for superior metal rolling and forming results.
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

      {/* Rolling Capabilities Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Rolling <span className="text-orange-500">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive rolling services for diverse industrial and architectural requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rollingCapabilities.map((capability, index) => {
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

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Technical <span className="text-orange-500">Specifications</span>
            </h2>
            <p className="text-xl text-gray-300">
              Detailed specifications for our steel rolling capabilities
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
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Applications Across <span className="text-orange-500">Industries</span>
            </h2>
            <p className="text-xl text-gray-300">
              Professional steel rolling solutions for diverse manufacturing and construction applications
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
              Trusted rolling services across multiple industry sectors
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
              Our Rolling <span className="text-orange-500">Process</span>
            </h2>
            <p className="text-xl text-gray-300">
              Systematic approach ensuring quality results from concept to completion
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
            Ready for Expert Steel Rolling Services?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get professional steel rolling services with guaranteed precision and quality. 
            Contact us for detailed consultation and competitive quotes for your project requirements.
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
              Get Free Consultation
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