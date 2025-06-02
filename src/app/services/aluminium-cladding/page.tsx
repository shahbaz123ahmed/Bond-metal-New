import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle, Shield, Zap, Award, Wrench } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function AluminiumCladdingPage() {
  const features = [
    "100% pure aluminum construction",
    "Superior corrosion resistance",
    "Lightweight yet extremely durable",
    "Excellent thermal conductivity",
    "Fire-resistant properties",
    "Wide range of finishes available",
    "Low maintenance requirements",
    "Sustainable and recyclable material"
  ]

  const applications = [
    { title: "High-Rise Buildings", desc: "Skyscrapers, office towers, and residential complexes requiring premium aesthetics" },
    { title: "Commercial Facades", desc: "Shopping malls, hotels, and corporate headquarters with modern design requirements" },
    { title: "Industrial Facilities", desc: "Manufacturing plants, warehouses, and logistics centers needing durable protection" },
    { title: "Educational Buildings", desc: "Universities, schools, and research facilities with architectural significance" },
    { title: "Healthcare Facilities", desc: "Hospitals and medical centers requiring hygienic and easy-to-clean surfaces" },
    { title: "Transportation Hubs", desc: "Airports, metro stations, and terminals with high traffic requirements" }
  ]

  const finishOptions = [
    {
      icon: Shield,
      title: "Anodized Finish",
      desc: "Enhanced corrosion resistance with superior durability",
      details: ["Multiple color options", "Enhanced surface hardness", "Improved weather resistance", "Long-lasting appearance"]
    },
    {
      icon: Zap,
      title: "Powder Coated",
      desc: "Vibrant colors with excellent UV protection",
      details: ["Extensive color palette", "Superior adhesion", "Scratch resistance", "Environmental protection"]
    },
    {
      icon: Award,
      title: "Brushed Aluminum",
      desc: "Premium brushed texture for sophisticated aesthetics",
      details: ["Contemporary appearance", "Fingerprint resistance", "Easy maintenance", "Professional finish"]
    },
    {
      icon: Wrench,
      title: "Natural Mill Finish",
      desc: "Raw aluminum appearance for industrial applications",
      details: ["Cost-effective option", "Natural aluminum look", "Easy fabrication", "Versatile application"]
    }
  ]

  const benefits = [
    {
      title: "Superior Weather Resistance",
      desc: "Aluminum naturally forms a protective oxide layer that prevents corrosion and withstands harsh weather conditions."
    },
    {
      title: "Energy Efficiency",
      desc: "Excellent thermal properties help regulate building temperature, contributing to energy savings and comfort."
    },
    {
      title: "Design Flexibility",
      desc: "Can be formed into complex shapes and profiles, allowing for creative architectural expressions."
    },
    {
      title: "Long-Term Value",
      desc: "Minimal maintenance requirements and long lifespan provide excellent return on investment."
    }
  ]

  const process = [
    { 
      step: "Material Selection", 
      desc: "Choosing the optimal aluminum grade and finish for your specific requirements",
      details: "We analyze your project requirements including environmental conditions, aesthetic preferences, and budget considerations to select the most suitable aluminum alloy and finish option."
    },
    { 
      step: "Precision Fabrication", 
      desc: "Advanced manufacturing techniques for perfect fit and finish",
      details: "Using state-of-the-art equipment including CNC machines and precision cutting tools, we fabricate aluminum panels to exact specifications with tight tolerances."
    },
    { 
      step: "Quality Testing", 
      desc: "Comprehensive quality control to ensure performance standards",
      details: "Every panel undergoes rigorous testing including dimensional verification, finish quality inspection, and performance testing to meet international standards."
    },
    { 
      step: "Professional Installation", 
      desc: "Expert installation by certified technicians with warranty coverage",
      details: "Our experienced installation team ensures proper mounting, sealing, and finishing with attention to structural integrity and aesthetic perfection."
    }
  ]

  const specifications = [
    { property: "Material Grade", value: "6061-T6, 6063-T5, 3003-H14" },
    { property: "Thickness Range", value: "1.0mm - 6.0mm" },
    { property: "Panel Width", value: "Up to 1500mm" },
    { property: "Panel Length", value: "Up to 6000mm" },
    { property: "Thermal Expansion", value: "23.1 × 10⁻⁶ /°C" },
    { property: "Melting Point", value: "660°C" },
    { property: "Density", value: "2.70 g/cm³" },
    { property: "Fire Rating", value: "Non-combustible Class A" }
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
                Aluminium <span className="text-orange-500">Cladding</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Premium aluminum cladding solutions combining exceptional durability, 
                aesthetic appeal, and energy efficiency. Our high-grade aluminum panels 
                provide long-lasting protection and modern elegance for any architectural project.
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
              <Image 
                src="/images/alluminium-cladding.jpeg" 
                alt="Aluminium Cladding - Premium Aluminum Panel Solutions" 
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
              Why Choose Aluminium <span className="text-orange-500">Cladding</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advantages of premium aluminum cladding for your building projects.
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

      {/* Finish Options Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Finish <span className="text-orange-500">Options</span>
            </h2>
            <p className="text-xl text-gray-300">
              Choose from our range of premium aluminum finishes to match your design requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {finishOptions.map((finish, index) => {
              const IconComponent = finish.icon
              return (
                <div key={index} className="bg-slate-700 p-8 rounded-xl border border-slate-600 hover:border-orange-500 transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-orange-500">{finish.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{finish.desc}</p>
                  <ul className="space-y-2">
                    {finish.details.map((detail, idx) => (
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
              Detailed specifications for our premium aluminum cladding systems
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
              Perfect for <span className="text-orange-500">Any Project</span>
            </h2>
            <p className="text-xl text-gray-300">
              Versatile aluminum cladding solutions for diverse architectural applications
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
              Our Installation <span className="text-orange-500">Process</span>
            </h2>
            <p className="text-xl text-gray-300">
              Professional approach ensuring quality results from start to finish
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
            Ready for Premium Aluminium Cladding?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Transform your building with our premium aluminum cladding solutions. 
            Get expert consultation and detailed quotes for your project requirements.
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