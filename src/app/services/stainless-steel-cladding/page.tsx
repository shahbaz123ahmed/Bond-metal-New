

import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle, Shield, Star, Zap, Wrench } from 'lucide-react'
import Link from 'next/link'

export default function StainlessSteelCladdingPage() {
  const features = [
    "316L marine-grade stainless steel",
    "Exceptional corrosion resistance",
    "High strength-to-weight ratio",
    "Hygienic and easy to clean",
    "Temperature resistant up to 800°C",
    "Antimicrobial surface properties",
    "Recyclable and environmentally friendly",
    "Minimal maintenance requirements"
  ]

  const applications = [
    { title: "Healthcare Facilities", desc: "Hospitals, clinics, and laboratories requiring sterile environments" },
    { title: "Food Processing Plants", desc: "Commercial kitchens and food manufacturing facilities" },
    { title: "Marine Environments", desc: "Coastal buildings and offshore structures exposed to saltwater" },
    { title: "Chemical Plants", desc: "Industrial facilities handling corrosive chemicals and acids" },
    { title: "High-End Architecture", desc: "Luxury buildings and modern architectural designs" },
    { title: "Transportation Infrastructure", desc: "Airports, railway stations, and metro systems" }
  ]

  const finishOptions = [
    {
      icon: Shield,
      title: "Mirror Finish",
      desc: "Highly reflective surface for premium aesthetic appeal",
      details: ["#8 mirror polish", "Scratch-resistant coating", "Easy maintenance", "Luxury appearance"]
    },
    {
      icon: Star,
      title: "Brushed Finish",
      desc: "Directional grain finish hiding fingerprints and scratches",
      details: ["Various grain patterns", "Fingerprint resistant", "Industrial aesthetic", "Cost-effective"]
    },
    {
      icon: Zap,
      title: "Satin Finish",
      desc: "Smooth, low-gloss surface with subtle texture",
      details: ["Balanced appearance", "Moderate reflectivity", "Versatile application", "Easy cleaning"]
    },
    {
      icon: Wrench,
      title: "Bead Blasted",
      desc: "Uniform matte finish for contemporary applications",
      details: ["Anti-glare properties", "Uniform texture", "Modern appearance", "Durability focus"]
    }
  ]

  const benefits = [
    {
      title: "Superior Corrosion Resistance",
      desc: "Chromium content creates a protective oxide layer that prevents rust and corrosion in harsh environments."
    },
    {
      title: "Hygienic Properties",
      desc: "Non-porous surface prevents bacteria growth, making it ideal for healthcare and food applications."
    },
    {
      title: "Fire Resistance",
      desc: "Excellent fire resistance properties with high melting point and non-combustible characteristics."
    },
    {
      title: "Structural Integrity",
      desc: "Maintains strength and appearance over decades with minimal degradation or maintenance."
    }
  ]

  const process = [
    { 
      step: "Grade Selection", 
      desc: "Selecting the appropriate stainless steel grade for your environment",
      details: "We evaluate environmental conditions, chemical exposure, and aesthetic requirements to choose between 304, 316L, 321, or duplex stainless steel grades for optimal performance."
    },
    { 
      step: "Precision Fabrication", 
      desc: "Advanced forming and welding techniques for perfect results",
      details: "Using specialized equipment including laser cutting, precision bending, and TIG welding to maintain the integrity of the stainless steel while achieving complex geometries."
    },
    { 
      step: "Surface Treatment", 
      desc: "Professional finishing to achieve desired appearance and properties",
      details: "Application of various surface treatments including passivation, polishing, and protective coatings to enhance corrosion resistance and aesthetic appeal."
    },
    { 
      step: "Quality Installation", 
      desc: "Expert installation with proper handling and fastening systems",
      details: "Our certified installers use appropriate fasteners and techniques to prevent galvanic corrosion while ensuring structural integrity and long-term performance."
    }
  ]

  const specifications = [
    { property: "Material Grades", value: "304, 316L, 321, 2205 Duplex" },
    { property: "Thickness Range", value: "0.5mm - 8.0mm" },
    { property: "Panel Width", value: "Up to 2000mm" },
    { property: "Panel Length", value: "Up to 8000mm" },
    { property: "Tensile Strength", value: "515-620 MPa" },
    { property: "Melting Point", value: "1400-1450°C" },
    { property: "Density", value: "8.0 g/cm³" },
    { property: "Fire Rating", value: "Non-combustible A1" }
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
                Stainless Steel <span className="text-orange-500">Cladding</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Premium stainless steel cladding solutions offering unmatched durability, 
                hygienic properties, and elegant aesthetics. Perfect for demanding environments 
                requiring superior corrosion resistance and long-term performance.
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
                    <div className="text-3xl font-bold text-orange-500 mb-2">100+</div>
                    <div className="text-gray-300">Years Lifespan</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">316L</div>
                    <div className="text-gray-300">Marine Grade</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">800°C</div>
                    <div className="text-gray-300">Heat Resistant</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">450+</div>
                    <div className="text-gray-300">Projects Done</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Stainless Steel <span className="text-orange-500">Cladding</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the superior benefits of premium stainless steel cladding systems.
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
              Surface <span className="text-orange-500">Finishes</span>
            </h2>
            <p className="text-xl text-gray-300">
              Choose from our range of professional stainless steel surface finishes
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
              Detailed specifications for our premium stainless steel cladding systems
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
              Ideal <span className="text-orange-500">Applications</span>
            </h2>
            <p className="text-xl text-gray-300">
              Stainless steel cladding solutions for demanding environments
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
              Specialized approach for premium stainless steel installations
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
            Need Premium Stainless Steel Cladding?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Transform your project with our premium stainless steel cladding solutions. 
            Get expert consultation for demanding environments and applications.
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