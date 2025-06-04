import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle, Shield, Zap, Award, Wrench, Settings, Target } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function GlassInstallationPage() {
  const features = [
    "Professional glazing installation services for Glass Installation Dubai and Abu Dhabi",
    "Curtain wall and facade systems specialized in Glass Installation Dubai and Abu Dhabi",
    "Structural glazing applications optimized for Glass Installation Dubai and Abu Dhabi",
    "Tempered and laminated glass options available through Glass Installation Dubai and Abu Dhabi",
    "Double glazing and insulated units provided via Glass Installation Dubai and Abu Dhabi",
    "Waterproofing and weather sealing expertise in Glass Installation Dubai and Abu Dhabi",
    "Safety glass compliance standards met by Glass Installation Dubai and Abu Dhabi",
    "Precision measurement and fitting guaranteed for Glass Installation Dubai and Abu Dhabi"
  ]

  const applications = [
    { title: "Commercial Buildings UAE", desc: "Office towers, retail centers, corporate headquarters, and commercial facade installations through Glass Installation Dubai and Abu Dhabi" },
    { title: "Residential Projects UAE", desc: "Luxury villas, apartments, penthouses, and residential window and door installations via Glass Installation Dubai and Abu Dhabi" },
    { title: "Healthcare Facilities UAE", desc: "Hospitals, clinics, medical centers, and specialized healthcare glazing requirements using Glass Installation Dubai and Abu Dhabi" },
    { title: "Educational Buildings UAE", desc: "Schools, universities, training centers, and campus glazing installations featuring Glass Installation Dubai and Abu Dhabi" },
    { title: "Industrial Facilities UAE", desc: "Manufacturing plants, warehouses, clean rooms, and industrial glazing applications with Glass Installation Dubai and Abu Dhabi" },
    { title: "Hospitality Venues UAE", desc: "Hotels, resorts, restaurants, and hospitality sector glazing solutions through Glass Installation Dubai and Abu Dhabi" }
  ]

  const glassTypes = [
    {
      icon: Shield,
      title: "Curtain Wall Systems for UAE",
      desc: "Advanced curtain wall installation for modern building facades using Glass Installation Dubai and Abu Dhabi",
      details: ["Structural glazing for Glass Installation Dubai and Abu Dhabi", "Weather resistance in UAE climate", "Thermal performance optimization", "Aesthetic integration solutions"]
    },
    {
      icon: Zap,
      title: "Window Installation for UAE",
      desc: "Professional window glazing for residential and commercial buildings via Glass Installation Dubai and Abu Dhabi",
      details: ["Energy efficiency for UAE buildings", "Sound insulation technology", "Security features integration", "UV protection systems"]
    },
    {
      icon: Award,
      title: "Structural Glazing for UAE",
      desc: "High-performance structural glass systems for modern architecture through Glass Installation Dubai and Abu Dhabi",
      details: ["Load-bearing design for UAE", "Seamless appearance achievement", "Weather sealing excellence", "Safety compliance assurance"]
    },
    {
      icon: Wrench,
      title: "Shopfront Glazing for UAE",
      desc: "Commercial storefront and retail glazing installations using Glass Installation Dubai and Abu Dhabi",
      details: ["Security glass options for UAE", "Display optimization solutions", "Easy maintenance systems", "Brand integration features"]
    },
    {
      icon: Settings,
      title: "Skylight Installation for UAE",
      desc: "Natural lighting solutions with skylight and roof glazing via Glass Installation Dubai and Abu Dhabi",
      details: ["Natural light optimization for UAE", "Weather protection systems", "Thermal control technology", "Ventilation options available"]
    },
    {
      icon: Target,
      title: "Partition Glazing for UAE",
      desc: "Interior glass partition and office glazing systems through Glass Installation Dubai and Abu Dhabi",
      details: ["Space optimization for UAE offices", "Sound control solutions", "Privacy options available", "Modern aesthetic designs"]
    }
  ]

  const benefits = [
    {
      title: "UAE Climate Expertise",
      desc: "Specialized knowledge of UAE weather conditions ensuring optimal glass performance in extreme heat and sandstorms through Glass Installation Dubai and Abu Dhabi."
    },
    {
      title: "Superior Energy Efficiency",
      desc: "Advanced glazing solutions reducing cooling costs and improving building energy performance significantly via Glass Installation Dubai and Abu Dhabi."
    },
    {
      title: "Complete Safety Compliance",
      desc: "Full compliance with UAE building codes and international safety standards for all installations in Glass Installation Dubai and Abu Dhabi."
    },
    {
      title: "Professional Installation Teams",
      desc: "Certified installation teams with expertise in precision fitting and weather sealing techniques for Glass Installation Dubai and Abu Dhabi."
    }
  ]

  const process = [
    { 
      step: "Site Assessment for UAE", 
      desc: "Comprehensive measurement and structural evaluation for Glass Installation Dubai and Abu Dhabi",
      details: "Our specialists conduct detailed site surveys including structural assessments, opening measurements, weather exposure analysis, and building integration requirements for optimal glazing solutions in Glass Installation Dubai and Abu Dhabi."
    },
    { 
      step: "Design & Specification for UAE", 
      desc: "Custom glazing design with performance specifications for Glass Installation Dubai and Abu Dhabi",
      details: "Professional design development including glazing specifications, thermal calculations, structural requirements, and safety compliance verification optimized for UAE climate conditions through Glass Installation Dubai and Abu Dhabi."
    },
    { 
      step: "Fabrication & Preparation for UAE", 
      desc: "Precision glass cutting and frame preparation for Glass Installation Dubai and Abu Dhabi",
      details: "Expert fabrication including glass cutting, edge finishing, frame preparation, and quality control ensuring perfect fit and compliance with safety and performance standards for Glass Installation Dubai and Abu Dhabi."
    },
    { 
      step: "Installation & Sealing for UAE", 
      desc: "Professional installation with weatherproofing for Glass Installation Dubai and Abu Dhabi",
      details: "Complete installation including structural mounting, glazing insertion, weather sealing, and comprehensive testing to ensure optimal performance and safety compliance in Glass Installation Dubai and Abu Dhabi."
    }
  ]

  const specifications = [
    { property: "Glass Types for Glass Installation Dubai and Abu Dhabi", value: "Tempered, Laminated, Insulated" },
    { property: "Thickness Range for Glass Installation Dubai and Abu Dhabi", value: "6mm - 25mm" },
    { property: "Maximum Size for Glass Installation Dubai and Abu Dhabi", value: "3m x 6m panels" },
    { property: "U-Value Performance for Glass Installation Dubai and Abu Dhabi", value: "1.2 - 2.8 W/m²K" },
    { property: "Safety Standards for Glass Installation Dubai and Abu Dhabi", value: "EN 12150, ASTM C1048" },
    { property: "Wind Load Capacity for Glass Installation Dubai and Abu Dhabi", value: "Up to 2.5 kPa" },
    { property: "Thermal Performance for Glass Installation Dubai and Abu Dhabi", value: "Low-E coatings available" },
    { property: "Installation Areas for Glass Installation Dubai and Abu Dhabi", value: "UAE Wide Coverage" }
  ]

  const glassOptions = [
    { 
      type: "Tempered Safety Glass for UAE", 
      benefits: "5x stronger than regular glass, safety compliance, thermal resistance, impact protection for Glass Installation Dubai and Abu Dhabi",
      applications: "Curtain walls, shopfronts, high-traffic areas, safety-critical installations via Glass Installation Dubai and Abu Dhabi"
    },
    { 
      type: "Laminated Glass for UAE", 
      benefits: "Security features, sound insulation, UV protection, impact resistance through Glass Installation Dubai and Abu Dhabi",
      applications: "Security installations, sound barriers, overhead glazing, hurricane protection using Glass Installation Dubai and Abu Dhabi"
    },
    { 
      type: "Insulated Glass Units for UAE", 
      benefits: "Energy efficiency, thermal insulation, condensation control, noise reduction via Glass Installation Dubai and Abu Dhabi",
      applications: "Commercial buildings, residential windows, climate-controlled environments with Glass Installation Dubai and Abu Dhabi"
    },
    { 
      type: "Low-E Coated Glass for UAE", 
      benefits: "Solar heat rejection, UV protection, energy savings, glare reduction through Glass Installation Dubai and Abu Dhabi",
      applications: "UAE climate applications, energy-efficient buildings, solar control systems using Glass Installation Dubai and Abu Dhabi"
    }
  ]

  const industries = [
    "Commercial Real Estate requiring Glass Installation Dubai and Abu Dhabi",
    "Residential Construction using Glass Installation Dubai and Abu Dhabi", 
    "Healthcare Facilities utilizing Glass Installation Dubai and Abu Dhabi",
    "Educational Institutions featuring Glass Installation Dubai and Abu Dhabi",
    "Retail & Shopping with Glass Installation Dubai and Abu Dhabi",
    "Industrial Buildings employing Glass Installation Dubai and Abu Dhabi",
    "Government Projects implementing Glass Installation Dubai and Abu Dhabi",
    "Hospitality Sector using Glass Installation Dubai and Abu Dhabi"
  ]

  const safetyFeatures = [
    "Impact resistance testing for Glass Installation Dubai and Abu Dhabi",
    "Thermal stress analysis in Glass Installation Dubai and Abu Dhabi",
    "Structural load verification for Glass Installation Dubai and Abu Dhabi",
    "Weather seal integrity in Glass Installation Dubai and Abu Dhabi",
    "Safety glass compliance for Glass Installation Dubai and Abu Dhabi",
    "Emergency egress requirements in Glass Installation Dubai and Abu Dhabi",
    "Fall protection standards for Glass Installation Dubai and Abu Dhabi",
    "Seismic resistance design in Glass Installation Dubai and Abu Dhabi"
  ]

  const performanceFeatures = [
    "Solar heat gain control for Glass Installation Dubai and Abu Dhabi",
    "Thermal insulation properties in Glass Installation Dubai and Abu Dhabi",
    "Sound transmission reduction via Glass Installation Dubai and Abu Dhabi",
    "UV radiation protection through Glass Installation Dubai and Abu Dhabi",
    "Condensation prevention in Glass Installation Dubai and Abu Dhabi",
    "Air infiltration control for Glass Installation Dubai and Abu Dhabi",
    "Structural integrity maintenance in Glass Installation Dubai and Abu Dhabi",
    "Long-term durability assurance for Glass Installation Dubai and Abu Dhabi"
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
                Glass Installation <span className="text-orange-500">Dubai and Abu Dhabi</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Professional Glass Installation Dubai and Abu Dhabi services across UAE. We specialize in curtain wall systems, 
                structural glazing, window installations, and commercial facade solutions engineered for UAE climate 
                conditions with safety compliance and energy efficiency through expert Glass Installation Dubai and Abu Dhabi.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Get Glass Installation Quote
                </Link>
                <Link
                  href="/portfolio"
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-center"
                >
                  View Glass Projects
                </Link>
              </div>
            </div>

            {/* Replace stats section with image */}
            <div className="relative">
              <Image 
                src="/images/glassinst.jpg"
                alt="Professional Glass Installation Dubai and Abu Dhabi Services in UAE" 
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Our <span className="text-orange-500">Glass Installation Dubai and Abu Dhabi</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert glazing services with UAE climate optimization and safety excellence through Glass Installation Dubai and Abu Dhabi.
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
              Glass Installation Types & <span className="text-orange-500">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive range of glazing solutions for diverse architectural requirements through Glass Installation Dubai and Abu Dhabi
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

      {/* Glass Options Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Glass <span className="text-orange-500">Options</span>
            </h2>
            <p className="text-xl text-gray-300">
              Premium glass types selected for optimal performance in UAE climate conditions via Glass Installation Dubai and Abu Dhabi
            </p>
          </div>

          <div className="space-y-6">
            {glassOptions.map((glass, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-orange-500 mb-2">{glass.type}</h3>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Benefits</h4>
                    <p className="text-gray-300 text-sm">{glass.benefits}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Applications</h4>
                    <p className="text-gray-300 text-sm">{glass.applications}</p>
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
              Advanced glazing features ensuring optimal performance in UAE conditions through Glass Installation Dubai and Abu Dhabi
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

      {/* Safety Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Safety <span className="text-orange-500">Features</span>
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive safety measures and compliance standards for all installations in Glass Installation Dubai and Abu Dhabi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-300 text-center">
                <Shield className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                <h3 className="font-semibold text-white">{feature}</h3>
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
              Detailed specifications for our Glass Installation Dubai and Abu Dhabi capabilities
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
              Professional Glass Installation Dubai and Abu Dhabi for diverse architectural applications
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
              Trusted Glass Installation Dubai and Abu Dhabi services across multiple industry sectors
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
              Systematic approach ensuring perfect Glass Installation Dubai and Abu Dhabi and superior performance
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
            Ready for Professional Glass Installation Dubai and Abu Dhabi?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get expert Glass Installation Dubai and Abu Dhabi services with UAE climate optimization and safety compliance. 
            Contact us for site assessment and competitive quotes for your Glass Installation Dubai and Abu Dhabi requirements.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
              <Phone className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Call for Glass Installation</h3>
              <p className="text-orange-100">+971 50 413 2803</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
              <Mail className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Email for Glass Installation</h3>
              <p className="text-orange-100">info@bondmetal.com</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
              <MessageCircle className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">WhatsApp Glass Installation</h3>
              <p className="text-orange-100">Quick Response</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-center"
            >
              Get Glass Installation Quote
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-block text-center"
            >
              Request Glass Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}