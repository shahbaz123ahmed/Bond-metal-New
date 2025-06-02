

import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle, Shield, Zap, Award, Wrench, Settings, Target } from 'lucide-react'
import Link from 'next/link'

export default function AluminiumFabricationPage() {
  const features = [
    "Precision fabrication to ±0.1mm tolerance",
    "Advanced CNC machining capabilities",
    "Lightweight yet durable constructions",
    "Corrosion-resistant aluminum alloys",
    "Custom design and engineering support",
    "Anodizing and powder coating options",
    "Welding and joining expertise",
    "Rapid prototyping capabilities"
  ]

  const applications = [
    { title: "Architectural Elements", desc: "Window frames, curtain walls, facades, and modern architectural features for buildings" },
    { title: "Industrial Equipment", desc: "Machine frames, conveyor systems, equipment enclosures, and manufacturing components" },
    { title: "Transportation", desc: "Vehicle components, trailers, marine applications, and automotive parts fabrication" },
    { title: "Furniture & Fixtures", desc: "Commercial furniture, display systems, retail fixtures, and custom interior elements" },
    { title: "Structural Components", desc: "Building frames, support structures, walkways, and lightweight construction elements" },
    { title: "HVAC Systems", desc: "Ductwork, air handling units, equipment housings, and ventilation system components" }
  ]

  const fabricationCapabilities = [
    {
      icon: Shield,
      title: "Precision Cutting",
      desc: "Advanced cutting technologies for accurate aluminum processing",
      details: ["Laser cutting precision", "Water jet cutting", "CNC routing", "Plasma cutting options"]
    },
    {
      icon: Zap,
      title: "CNC Machining",
      desc: "High-precision machining for complex aluminum components",
      details: ["Multi-axis CNC capability", "Tight tolerance machining", "Complex geometries", "Surface finish control"]
    },
    {
      icon: Award,
      title: "Welding Services",
      desc: "Expert aluminum welding with superior joint strength",
      details: ["TIG welding expertise", "MIG welding capability", "Certified welders", "Clean weld appearance"]
    },
    {
      icon: Wrench,
      title: "Forming & Bending",
      desc: "Custom forming solutions for aluminum profiles and sheets",
      details: ["Press brake operations", "Roll forming", "Stretch forming", "Custom profile bending"]
    },
    {
      icon: Settings,
      title: "Assembly Services",
      desc: "Complete assembly and sub-assembly fabrication",
      details: ["Mechanical fastening", "Welded assemblies", "Modular construction", "Quality testing"]
    },
    {
      icon: Target,
      title: "Surface Finishing",
      desc: "Professional finishing options for enhanced performance",
      details: ["Anodizing treatments", "Powder coating", "Polishing services", "Protective coatings"]
    }
  ]

  const benefits = [
    {
      title: "Material Expertise",
      desc: "Comprehensive knowledge of aluminum alloys including 6061, 6063, 5052, and specialty grades for optimal performance."
    },
    {
      title: "Lightweight Solutions",
      desc: "Expert design optimization to reduce weight while maintaining structural integrity and performance requirements."
    },
    {
      title: "Corrosion Resistance",
      desc: "Natural corrosion resistance of aluminum combined with protective finishes for long-lasting performance."
    },
    {
      title: "Design Flexibility",
      desc: "Exceptional formability and machining characteristics enable complex designs and custom solutions."
    }
  ]

  const process = [
    { 
      step: "Design Consultation", 
      desc: "Engineering review of requirements and aluminum grade selection",
      details: "Our engineers analyze your application requirements including strength, weight, corrosion resistance, and appearance needs to recommend optimal aluminum alloys and fabrication methods."
    },
    { 
      step: "CAD Development", 
      desc: "Detailed 3D modeling and manufacturing optimization",
      details: "Professional CAD design with DFM (Design for Manufacturing) analysis to optimize designs for aluminum fabrication processes and cost-effectiveness."
    },
    { 
      step: "Precision Fabrication", 
      desc: "Expert fabrication using specialized aluminum techniques",
      details: "Skilled craftsmen use equipment and techniques specifically designed for aluminum to maintain material properties and achieve superior surface finishes."
    },
    { 
      step: "Finishing & Assembly", 
      desc: "Professional finishing and comprehensive quality control",
      details: "Complete surface finishing including anodizing or coating when required, followed by precise assembly and thorough quality inspection."
    }
  ]

  const specifications = [
    { property: "Aluminum Alloys", value: "6061, 6063, 5052, 7075, Custom" },
    { property: "Thickness Range", value: "0.5mm - 100mm" },
    { property: "Fabrication Tolerance", value: "±0.1mm precision" },
    { property: "Maximum Sheet Size", value: "3000mm x 1500mm" },
    { property: "Welding Standards", value: "AWS D1.2, ASME certified" },
    { property: "Surface Finishes", value: "Mill, Anodized, Powder Coat" },
    { property: "Machining Capability", value: "5-axis CNC available" },
    { property: "Production Capacity", value: "High volume and prototype" }
  ]

  const industries = [
    "Architecture & Construction",
    "Aerospace & Defense", 
    "Automotive Industry",
    "Marine Applications",
    "Electronics & Technology",
    "Food & Beverage",
    "Renewable Energy",
    "Manufacturing Equipment"
  ]

  const aluminumAlloys = [
    { 
      alloy: "6061-T6", 
      properties: "High strength, excellent weldability, corrosion resistant", 
      applications: "Structural components, machine parts, architectural" 
    },
    { 
      alloy: "6063-T5", 
      properties: "Good formability, excellent surface finish, architectural grade", 
      applications: "Window frames, curtain walls, decorative elements" 
    },
    { 
      alloy: "5052-H32", 
      properties: "Excellent corrosion resistance, good formability", 
      applications: "Marine applications, fuel tanks, chemical equipment" 
    },
    { 
      alloy: "7075-T6", 
      properties: "Ultra-high strength, aerospace grade", 
      applications: "Aircraft parts, high-stress components" 
    }
  ]

  const qualityFeatures = [
    "AWS certified welders",
    "Material traceability",
    "Dimensional inspection",
    "Surface quality control", 
    "Strength testing",
    "Corrosion resistance testing",
    "Weld quality inspection",
    "Final assembly verification"
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
                Aluminium Fabrication <span className="text-orange-500">Works in UAE</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Expert aluminium fabrication services with precision engineering and advanced manufacturing. 
                We specialize in lightweight, corrosion-resistant solutions for architectural, industrial, 
                and commercial applications across Dubai and the UAE with superior quality and performance.
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
                    <div className="text-3xl font-bold text-orange-500 mb-2">±0.1mm</div>
                    <div className="text-gray-300">Precision</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">100mm</div>
                    <div className="text-gray-300">Max Thickness</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">4</div>
                    <div className="text-gray-300">Alloy Types</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">2500+</div>
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
              Why Choose Our Aluminium <span className="text-orange-500">Fabrication Works</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced manufacturing capabilities and material expertise for superior aluminium solutions.
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

      {/* Fabrication Capabilities Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Fabrication <span className="text-orange-500">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive aluminium fabrication services for diverse industrial applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fabricationCapabilities.map((capability, index) => {
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

      {/* Aluminum Alloys Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Aluminum <span className="text-orange-500">Alloys</span>
            </h2>
            <p className="text-xl text-gray-300">
              Expert selection of aluminum alloys for optimal performance in your application
            </p>
          </div>

          <div className="space-y-6">
            {aluminumAlloys.map((alloy, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-orange-500 mb-2">{alloy.alloy}</h3>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Properties</h4>
                    <p className="text-gray-300">{alloy.properties}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Applications</h4>
                    <p className="text-gray-300">{alloy.applications}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Quality <span className="text-orange-500">Assurance</span>
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive quality control ensuring reliable, high-performance aluminum components
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityFeatures.map((feature, index) => (
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
              Detailed specifications for our aluminium fabrication capabilities
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
              Applications Across <span className="text-orange-500">Industries</span>
            </h2>
            <p className="text-xl text-gray-300">
              Versatile aluminium fabrication solutions for diverse manufacturing and construction needs
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
              Trusted aluminium fabrication services across multiple industry sectors
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
              Systematic approach ensuring optimal material selection and superior fabrication
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
            Ready for Expert Aluminium Fabrication?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get professional aluminium fabrication services with guaranteed quality and precision. 
            Contact us for material consultation and competitive quotes for your specific requirements.
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