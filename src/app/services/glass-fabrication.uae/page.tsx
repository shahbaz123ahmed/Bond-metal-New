import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle, Shield, Zap, Award, Wrench, Settings, Target } from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'

// Add metadata first
export const metadata: Metadata = {
  title: 'Glass Fabrication in UAE | Professional Glass Services Dubai',
  description: 'Expert glass fabrication in UAE with advanced processing capabilities. Specializing in architectural glazing, safety glass, and custom glass fabrication across Dubai and UAE.',
  keywords: 'glass fabrication UAE, glass fabrication Dubai, architectural glazing UAE, safety glass UAE, custom glass fabrication Dubai',
  // ...rest of metadata
}

export default function GlassFabricationPage() {
  const features = [
    "Precision cutting to ±0.5mm tolerance",
    "Tempered and laminated glass options",
    "Custom shapes and complex geometries",
    "Safety glass compliance standards",
    "UV protection and thermal control",
    "Structural glazing capabilities",
    "Insulated glass unit (IGU) assembly",
    "Edge polishing and finishing services"
  ]

  const applications = [
    { title: "Commercial Buildings", desc: "Curtain walls, storefronts, office partitions, and commercial entrance systems" },
    { title: "Residential Projects", desc: "Windows, doors, balustrades, shower enclosures, and architectural glass features" },
    { title: "Industrial Facilities", desc: "Safety barriers, machine guards, observation windows, and industrial glazing" },
    { title: "Hospitality & Retail", desc: "Display cases, decorative panels, hotel facades, and retail storefront systems" },
    { title: "Healthcare Facilities", desc: "Cleanroom windows, laboratory partitions, and hygienic glazing solutions" },
    { title: "Educational Buildings", desc: "School windows, safety glass installations, and educational facility glazing" }
  ]

  const glassTypes = [
    {
      icon: Shield,
      title: "Tempered Glass",
      desc: "Heat-strengthened safety glass with enhanced impact resistance",
      details: ["4-5x stronger than regular glass", "Safety breakage pattern", "Thermal shock resistance", "Various thickness options"]
    },
    {
      icon: Zap,
      title: "Laminated Glass",
      desc: "Multi-layer safety glass with PVB interlayer protection",
      details: ["Security and safety benefits", "Sound reduction properties", "UV protection", "Holds together when broken"]
    },
    {
      icon: Award,
      title: "Insulated Glass",
      desc: "Double or triple glazed units for thermal efficiency",
      details: ["Energy efficiency", "Condensation control", "Noise reduction", "Various gas fills available"]
    },
    {
      icon: Wrench,
      title: "Low-E Glass",
      desc: "Energy-efficient glass with specialized coatings",
      details: ["Solar heat gain control", "UV protection", "Thermal insulation", "Visible light transmission"]
    },
    {
      icon: Settings,
      title: "Structural Glazing",
      desc: "High-performance glazing for structural applications",
      details: ["Structural adhesive bonding", "Weather seal integrity", "Load-bearing capability", "Curtain wall systems"]
    },
    {
      icon: Target,
      title: "Decorative Glass",
      desc: "Custom decorative and artistic glass solutions",
      details: ["Frosted and etched glass", "Colored glass options", "Pattern and texture work", "Custom designs"]
    }
  ]

  const benefits = [
    {
      title: "Advanced Processing",
      desc: "State-of-the-art glass cutting, tempering, and laminating equipment ensuring precision and quality in every project."
    },
    {
      title: "Safety Compliance",
      desc: "Full compliance with international safety standards including ANSI Z97.1, CPSC 16 CFR 1201, and local building codes."
    },
    {
      title: "Energy Efficiency",
      desc: "Specialized low-E coatings and insulated glass units to meet energy code requirements and reduce operational costs."
    },
    {
      title: "Custom Solutions",
      desc: "Complete design-to-installation service for unique glazing requirements and architectural specifications."
    }
  ]

  const process = [
    { 
      step: "Design Consultation", 
      desc: "Comprehensive analysis of glazing requirements and specifications",
      details: "Our glazing experts work with architects and contractors to understand structural requirements, thermal performance needs, and aesthetic goals for optimal glass selection."
    },
    { 
      step: "Engineering & Testing", 
      desc: "Structural calculations and performance testing for compliance",
      details: "Complete engineering analysis including wind load calculations, thermal stress analysis, and safety testing to ensure code compliance and optimal performance."
    },
    { 
      step: "Precision Fabrication", 
      desc: "Advanced glass processing using specialized equipment",
      details: "Expert cutting, tempering, laminating, and edge finishing using state-of-the-art equipment designed specifically for architectural glass fabrication."
    },
    { 
      step: "Quality & Installation", 
      desc: "Comprehensive inspection and professional installation services",
      details: "Thorough quality control inspection followed by expert installation with proper sealing, structural bonding, and weatherproofing for long-term performance."
    }
  ]

  const specifications = [
    { property: "Glass Types", value: "Float, Tempered, Laminated, IGU" },
    { property: "Thickness Range", value: "3mm - 25mm" },
    { property: "Maximum Size", value: "3200mm x 2500mm" },
    { property: "Cutting Tolerance", value: "±0.5mm precision" },
    { property: "Safety Standards", value: "ANSI Z97.1, CPSC certified" },
    { property: "Thermal Performance", value: "U-values from 0.2 W/m²K" },
    { property: "Edge Finishes", value: "Polished, Ground, Beveled" },
    { property: "Processing Time", value: "5-10 working days" }
  ]

  const industries = [
    "Commercial Architecture",
    "Residential Construction", 
    "Industrial Facilities",
    "Hospitality & Hotels",
    "Healthcare Buildings",
    "Educational Institutions",
    "Retail & Shopping",
    "Government Buildings"
  ]

  const glassPerformance = [
    { property: "Solar Heat Gain", desc: "Control solar energy transmission for comfort and efficiency" },
    { property: "Visible Light Transmission", desc: "Optimize natural light while controlling glare" },
    { property: "U-Value Performance", desc: "Thermal insulation properties for energy efficiency" },
    { property: "Sound Transmission", desc: "Acoustic performance for noise control" },
    { property: "Impact Resistance", desc: "Safety performance under impact conditions" },
    { property: "Wind Load Capacity", desc: "Structural performance under wind pressure" }
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
                Glass Fabrication <span className="text-orange-500">in UAE</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Professional glass fabrication in UAE with advanced processing capabilities and safety compliance. 
                Our glass fabrication services in Dubai specialize in architectural glazing, safety glass, energy-efficient solutions, and custom glass 
                fabrication for commercial, residential, and industrial applications across Dubai and the UAE.
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
                    <div className="text-3xl font-bold text-orange-500 mb-2">±0.5mm</div>
                    <div className="text-gray-300">Precision</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">25mm</div>
                    <div className="text-gray-300">Max Thickness</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">3.2m</div>
                    <div className="text-gray-300">Max Length</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">1500+</div>
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
              Why Choose Our <span className="text-orange-500">Glass Fabrication in UAE</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced glass fabrication in UAE with processing technology and safety compliance for superior glass solutions.
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

      {/* Glass Types Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Glass Types & <span className="text-orange-500">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive range of glass products for diverse architectural and safety requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {glassTypes.map((glass, index) => {
              const IconComponent = glass.icon
              return (
                <div key={index} className="bg-slate-700 p-8 rounded-xl border border-slate-600 hover:border-orange-500 transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-orange-500">{glass.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{glass.desc}</p>
                  <ul className="space-y-2">
                    {glass.details.map((detail, idx) => (
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

      {/* Glass Performance Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Glass <span className="text-orange-500">Performance</span>
            </h2>
            <p className="text-xl text-gray-300">
              Optimized performance characteristics for comfort, safety, and energy efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {glassPerformance.map((performance, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-orange-500 mb-3">{performance.property}</h3>
                <p className="text-gray-300">{performance.desc}</p>
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
              Detailed specifications for our glass fabrication capabilities
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
              Applications Across <span className="text-orange-500">Projects</span>
            </h2>
            <p className="text-xl text-gray-300">
              Professional glass fabrication in UAE solutions for diverse architectural and construction needs across Dubai
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
              Trusted glass fabrication services across multiple construction and architectural sectors
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
              Our Fabrication <span className="text-orange-500">Process</span>
            </h2>
            <p className="text-xl text-gray-300">
              Systematic approach ensuring optimal performance and safety compliance
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
            Ready for Professional Glass Fabrication in UAE?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get expert glass fabrication in UAE with safety compliance and energy efficiency. 
            Contact us for detailed consultation and competitive quotes for your glass fabrication requirements in Dubai.
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