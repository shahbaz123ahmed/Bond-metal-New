import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle, Shield, Zap, Award, Wrench, Settings, Target } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Steel Rolling in UAE | Professional Metal Rolling Services Dubai',
  description: 'Expert steel rolling in UAE with precision CNC equipment. Leading provider of curved steel fabrication, cylinder rolling, and custom metal rolling services across UAE and Dubai.',
  keywords: 'steel rolling UAE, metal rolling Dubai, steel bending UAE, cylinder rolling Dubai, curved steel UAE, precision rolling services',
  openGraph: {
    title: 'Steel Rolling in UAE | Professional Metal Rolling Services',
    description: 'Expert steel rolling in UAE with precision CNC equipment and custom fabrication.',
    images: ['/images/rolling.webp'],
    type: 'website',
    url: 'https://bondmetal.com/services/steel-rolling-uae'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Steel Rolling in UAE | Professional Metal Rolling Services',
    description: 'Expert steel rolling in UAE with precision CNC equipment.',
    images: ['/images/rolling.webp'],
  },
  alternates: {
    canonical: 'https://bondmetal.com/services/steel-rolling-uae'
  }
}

export default function SteelRollingPage() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Steel Rolling in UAE",
    "description": "Professional steel rolling in UAE with precision CNC equipment. Expert curved steel fabrication and custom metal rolling services across UAE and Dubai.",
    "provider": {
      "@type": "Organization",
      "name": "Bond Metal",
      "url": "https://bondmetal.com",
      "telephone": "+971 50 413 2803",
      "email": "info@bondmetal.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AE",
        "addressRegion": "Dubai",
        "addressLocality": "Dubai Industrial Area"
      }
    },
    "serviceType": "Steel Rolling",
    "areaServed": {
      "@type": "Country",
      "name": "United Arab Emirates"
    }
  }

  const features = [
    "Precision steel rolling in UAE up to ±1mm accuracy tolerance",
    "Advanced 3-roll and 4-roll bending machines for steel rolling in UAE",
    "Wide range of material compatibility for steel rolling in UAE projects",
    "Complex curve and radius capabilities with steel rolling in UAE expertise",
    "Large diameter rolling capacity for steel rolling in UAE applications",
    "Seamless welding for closed cylinders using steel rolling in UAE techniques",
    "Custom radius requirements fulfilled through steel rolling in UAE services",
    "Quality surface finish guarantee for all steel rolling in UAE work"
  ]

  const applications = [
    { title: "Architectural Elements UAE", desc: "Curved facades, decorative columns, and architectural features requiring precise radius formation using steel rolling in UAE" },
    { title: "Industrial Vessels UAE", desc: "Pressure vessels, tanks, silos, and storage containers with custom dimensions through steel rolling in UAE" },
    { title: "Structural Components UAE", desc: "Curved beams, arches, and structural elements for construction projects via steel rolling in UAE" },
    { title: "HVAC Ductwork UAE", desc: "Large diameter ducts, ventilation systems, and air handling equipment with steel rolling in UAE" },
    { title: "Marine Applications UAE", desc: "Ship hulls, offshore structures, and marine equipment requiring curved steel using steel rolling in UAE" },
    { title: "Energy Sector UAE", desc: "Wind turbine towers, solar panel supports, and energy infrastructure components through steel rolling in UAE" }
  ]

  const rollingCapabilities = [
    {
      icon: Shield,
      title: "3-Roll Bending UAE",
      desc: "Versatile rolling for various materials and thicknesses with steel rolling in UAE",
      details: ["Suitable for all materials in UAE", "Cost-effective solution", "Quick setup and operation", "Excellent for large radius work"]
    },
    {
      icon: Zap,
      title: "4-Roll Bending UAE",
      desc: "High precision rolling with superior edge control for steel rolling in UAE",
      details: ["Pre-bending capability for UAE", "Better edge control", "Reduced flat ends", "Perfect for critical applications"]
    },
    {
      icon: Award,
      title: "Pyramid Rolling UAE",
      desc: "Specialized rolling for conical and tapered structures using steel rolling in UAE",
      details: ["Conical rolling capability for UAE", "Variable radius control", "Tapered structure formation", "Custom angle solutions"]
    },
    {
      icon: Wrench,
      title: "Profile Rolling UAE",
      desc: "Custom rolling for specialty profiles and shapes with steel rolling in UAE",
      details: ["Angle and channel rolling for UAE", "I-beam curving", "Custom profile bending", "Structural shape forming"]
    },
    {
      icon: Settings,
      title: "Seam Welding UAE",
      desc: "Professional welding for closed cylinder formation in steel rolling in UAE",
      details: ["TIG/MIG welding options for UAE", "Full penetration welds", "Pressure vessel quality", "NDT testing available"]
    },
    {
      icon: Target,
      title: "Finishing Services UAE",
      desc: "Complete finishing and quality control processes for steel rolling in UAE",
      details: ["Surface preparation for UAE", "Machining services", "Dimensional inspection", "Quality certification"]
    }
  ]

  const benefits = [
    {
      title: "Advanced Rolling Equipment UAE",
      desc: "State-of-the-art CNC-controlled rolling machines ensure consistent radius formation and superior quality results for steel rolling in UAE."
    },
    {
      title: "Material Expertise UAE",
      desc: "Expert handling of steel, stainless steel, aluminum, and specialty alloys with optimal rolling parameters for steel rolling in UAE."
    },
    {
      title: "Engineering Support UAE",
      desc: "Technical consultation for optimal design solutions, material selection, and manufacturing efficiency in steel rolling in UAE."
    },
    {
      title: "Quality Assurance UAE",
      desc: "Comprehensive inspection and testing protocols ensure every rolled component meets specifications for steel rolling in UAE."
    }
  ]

  const process = [
    { 
      step: "Design Analysis for UAE", 
      desc: "Comprehensive review of specifications and radius requirements for steel rolling in UAE",
      details: "Our engineers analyze your drawings to determine optimal rolling strategy, material considerations, and welding requirements for the best steel rolling in UAE results."
    },
    { 
      step: "Material Preparation UAE", 
      desc: "Precise cutting and edge preparation for steel rolling in UAE operations",
      details: "Materials are cut to exact dimensions with proper edge preparation, including beveling for welding when required for closed cylinders in steel rolling in UAE."
    },
    { 
      step: "Rolling Operations UAE", 
      desc: "Expert execution using advanced CNC rolling equipment for steel rolling in UAE",
      details: "Skilled operators use programmable rolling machines with precision control to achieve exact radius requirements and consistent quality in steel rolling in UAE."
    },
    { 
      step: "Welding & Finishing UAE", 
      desc: "Professional welding and finishing services as required for steel rolling in UAE",
      details: "When needed, we provide expert welding services to create closed cylinders, followed by finishing operations and quality inspection for steel rolling in UAE."
    }
  ]

  const specifications = [
    { property: "Maximum Rolling Length UAE", value: "6000mm (20 feet)" },
    { property: "Material Thickness Range UAE", value: "3mm - 50mm" },
    { property: "Minimum Rolling Radius UAE", value: "200mm (varies by material)" },
    { property: "Maximum Material Width UAE", value: "3000mm" },
    { property: "Rolling Accuracy UAE", value: "±1mm radius tolerance" },
    { property: "Materials Supported UAE", value: "Steel, Stainless Steel, Aluminum" },
    { property: "Maximum Cylinder Diameter UAE", value: "3000mm" },
    { property: "Welding Capabilities UAE", value: "TIG, MIG, SAW processes" }
  ]

  const industries = [
    "Construction & Architecture UAE",
    "Oil & Gas Industry UAE", 
    "Marine & Offshore UAE",
    "Power Generation UAE",
    "Water Treatment UAE",
    "Manufacturing UAE",
    "Transportation UAE",
    "Mining & Resources UAE"
  ]

  const qualityFeatures = [
    "Material traceability for steel rolling in UAE",
    "Dimensional inspection for steel rolling in UAE", 
    "Surface quality control for steel rolling in UAE",
    "Welding quality assurance for steel rolling in UAE",
    "Load testing capabilities for steel rolling in UAE",
    "Compliance verification for steel rolling in UAE",
    "Documentation control for steel rolling in UAE",
    "Customer approval processes for steel rolling in UAE"
  ]

  const materialTypes = [
    {
      material: "Carbon Steel for UAE",
      properties: "Excellent formability, cost-effective solution for steel rolling in UAE projects",
      applications: "Structural components, general fabrication work using steel rolling in UAE"
    },
    {
      material: "Stainless Steel for UAE", 
      properties: "Corrosion resistance, superior finish ideal for steel rolling in UAE",
      applications: "Marine, chemical, and food industry applications via steel rolling in UAE"
    },
    {
      material: "Aluminum Alloys for UAE",
      properties: "Lightweight, excellent corrosion resistance perfect for steel rolling in UAE",
      applications: "Aerospace, architectural, and lightweight structures through steel rolling in UAE"
    },
    {
      material: "Specialty Alloys for UAE",
      properties: "High-performance materials for demanding steel rolling in UAE applications",
      applications: "High-temperature, high-pressure, and specialized industry steel rolling in UAE"
    }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
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
              <header>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Steel Rolling <span className="text-orange-500">in UAE</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Professional steel rolling in UAE and metal rolling services using advanced CNC rolling equipment. 
                  We specialize in creating precise curved components, cylinders, and complex radius formations for construction, 
                  industrial, and architectural applications across Dubai and UAE with superior steel rolling in UAE expertise.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    Get Quote
                  </Link>
                  
                </div>
              </header>

              {/* Replace stats section with image */}
              <div className="relative">
                <Image 
                  src="/images/rolling.webp"
                  alt="Professional Steel Rolling in UAE Services - Advanced CNC Rolling Equipment" 
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
        <section className="py-20" aria-labelledby="features-heading">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="features-heading" className="text-4xl font-bold mb-6">
                Why Choose Our Steel Rolling <span className="text-orange-500">in UAE Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced technology and expert craftsmanship for superior metal rolling and forming results with steel rolling in UAE.
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
                Comprehensive steel rolling in UAE services for diverse industrial and architectural requirements
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

        {/* Material Types Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Material <span className="text-orange-500">Options</span>
              </h2>
              <p className="text-xl text-gray-300">
                Wide range of materials supported for comprehensive steel rolling in UAE applications
              </p>
            </div>

            <div className="space-y-6">
              {materialTypes.map((material, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-orange-500 mb-2">{material.material}</h3>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Properties</h4>
                      <p className="text-gray-300 text-sm">{material.properties}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Applications</h4>
                      <p className="text-gray-300 text-sm">{material.applications}</p>
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
                Comprehensive quality control ensuring superior steel rolling in UAE results
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
                Detailed specifications for our steel rolling in UAE capabilities
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
        <section className="py-20 bg-slate-800" aria-labelledby="applications-heading">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="applications-heading" className="text-4xl font-bold mb-6">
                Applications Across <span className="text-orange-500">Industries</span>
              </h2>
              <p className="text-xl text-gray-300">
                Professional steel rolling in UAE solutions for diverse manufacturing and construction applications
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
                Trusted steel rolling in UAE services across multiple industry sectors
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
                Systematic approach ensuring quality steel rolling in UAE results from concept to completion
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
              Ready for Expert Steel Rolling in UAE Services?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Get professional steel rolling in UAE services with guaranteed precision and quality. 
              Contact us for detailed consultation and competitive quotes for your steel rolling in UAE project requirements.
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
              <Link 
                href="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-center inline-block"
              >
                Get Quote
              </Link>
             
            </div>
          </div>
        </section>
      </div>
    </>
  )
}