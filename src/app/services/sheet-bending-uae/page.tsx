

import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle, Shield, Zap, Award, Wrench } from 'lucide-react'
import Link from 'next/link'

export default function SheetBendingPage() {
  const features = [
    "Precision bending up to ±0.5° accuracy",
    "Advanced press brake technology",
    "Multiple material compatibility",
    "Complex geometry capabilities",
    "High-volume production capacity",
    "Quick turnaround times",
    "Consistent quality control",
    "Custom tooling solutions"
  ]

  const applications = [
    { title: "Structural Components", desc: "Building frames, support brackets, and architectural elements requiring precise angles" },
    { title: "Industrial Equipment", desc: "Machine guards, enclosures, and custom chassis for manufacturing equipment" },
    { title: "HVAC Systems", desc: "Ductwork, air handling units, and ventilation components with precise bends" },
    { title: "Automotive Parts", desc: "Brackets, mounting systems, and structural components for vehicle applications" },
    { title: "Electronic Enclosures", desc: "Control panels, junction boxes, and protective housings with exact specifications" },
    { title: "Furniture & Fixtures", desc: "Commercial furniture frames, display units, and architectural fixtures" }
  ]

  const bendingCapabilities = [
    {
      icon: Shield,
      title: "Air Bending",
      desc: "Most versatile bending method with excellent spring-back control",
      details: ["Suitable for all materials", "Cost-effective for various angles", "Minimal tooling requirements", "Excellent repeatability"]
    },
    {
      icon: Zap,
      title: "Bottom Bending",
      desc: "High precision bending for critical dimensional requirements",
      details: ["Superior accuracy", "Consistent angle formation", "Minimal spring-back", "Perfect for tight tolerances"]
    },
    {
      icon: Award,
      title: "Coining",
      desc: "Maximum precision for critical applications requiring exact angles",
      details: ["Highest accuracy achievable", "Permanent angle formation", "No spring-back issues", "Premium finish quality"]
    },
    {
      icon: Wrench,
      title: "Custom Forming",
      desc: "Specialized bending solutions for unique geometric requirements",
      details: ["Complex multi-bend operations", "Custom die solutions", "Prototype development", "Engineering support"]
    }
  ]

  const benefits = [
    {
      title: "Advanced Press Brake Technology",
      desc: "State-of-the-art CNC press brakes ensure consistent, accurate bends with programmable precision control."
    },
    {
      title: "Material Versatility",
      desc: "Expert handling of steel, aluminum, stainless steel, and specialty alloys with optimal bend parameters."
    },
    {
      title: "Design Support",
      desc: "Engineering consultation to optimize designs for manufacturing efficiency and cost-effectiveness."
    },
    {
      title: "Quality Assurance",
      desc: "Comprehensive inspection protocols ensure every bend meets specified tolerances and quality standards."
    }
  ]

  const process = [
    { 
      step: "Design Analysis", 
      desc: "Comprehensive review of drawings and specifications for optimal bending strategy",
      details: "Our engineers analyze your drawings to determine the best bending sequence, tooling requirements, and material considerations for optimal results."
    },
    { 
      step: "Material Preparation", 
      desc: "Precise cutting and preparation of sheet metal for bending operations",
      details: "Materials are cut to exact dimensions using laser or shearing processes, with proper edge preparation and surface cleaning for quality bends."
    },
    { 
      step: "Precision Bending", 
      desc: "Expert execution using advanced CNC press brake technology",
      details: "Skilled operators use programmable press brakes with precision tooling to achieve exact angles and consistent results across production runs."
    },
    { 
      step: "Quality Inspection", 
      desc: "Thorough dimensional and quality verification before delivery",
      details: "Each bent component undergoes comprehensive inspection including angle verification, dimensional checks, and surface quality assessment."
    }
  ]

  const specifications = [
    { property: "Maximum Bending Length", value: "3000mm (10 feet)" },
    { property: "Material Thickness Range", value: "0.5mm - 20mm" },
    { property: "Bending Accuracy", value: "±0.5° standard, ±0.1° precision" },
    { property: "Maximum Tonnage", value: "200 Ton capacity" },
    { property: "Materials Supported", value: "Steel, Aluminum, Stainless Steel, Brass" },
    { property: "Minimum Bend Radius", value: "0.5x material thickness" },
    { property: "Maximum Flange Height", value: "200mm" },
    { property: "Production Capacity", value: "High-volume and prototype runs" }
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
                Sheet Bending <span className="text-orange-500">in UAE</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Professional sheet metal bending services using advanced CNC press brake technology. 
                We deliver precision-formed components with exceptional accuracy and consistency 
                for all your manufacturing and construction needs across Dubai and the UAE.
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
                    <div className="text-3xl font-bold text-orange-500 mb-2">±0.5°</div>
                    <div className="text-gray-300">Bend Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">3000mm</div>
                    <div className="text-gray-300">Max Length</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">200T</div>
                    <div className="text-gray-300">Press Capacity</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
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
              Why Choose Our Sheet <span className="text-orange-500">Bending Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced technology and expert craftsmanship for superior sheet metal forming results.
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
              Bending <span className="text-orange-500">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300">
              Multiple bending techniques to meet diverse manufacturing requirements
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
              Detailed specifications for our sheet bending capabilities
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
              Perfect for <span className="text-orange-500">Any Industry</span>
            </h2>
            <p className="text-xl text-gray-300">
              Professional sheet bending solutions for diverse manufacturing applications
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
              Our Bending <span className="text-orange-500">Process</span>
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
            Ready for Precision Sheet Bending?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get expert sheet bending services with guaranteed precision and quality. 
            Contact us for detailed consultation and competitive quotes for your project.
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