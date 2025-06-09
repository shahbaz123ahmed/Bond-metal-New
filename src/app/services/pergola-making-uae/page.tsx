import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle, Shield, Zap, Award, Wrench, Settings, Target } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pergola Making Dubai and Abu Dhabi | Professional Outdoor Living Solutions UAE',
  description: 'Expert pergola making Dubai and Abu Dhabi with custom design and climate-optimized construction. Leading provider of aluminum, steel, and motorized pergolas across UAE premium locations.',
  keywords: 'pergola making Dubai, pergola construction Abu Dhabi, outdoor living UAE, aluminum pergolas Dubai, motorized pergolas Abu Dhabi',
  openGraph: {
    title: 'Pergola Making Dubai and Abu Dhabi | Professional Outdoor Living Solutions',
    description: 'Expert pergola making Dubai and Abu Dhabi with custom design solutions.',
    images: ['/images/pergola.jpeg'],
    type: 'website',
    url: 'https://bondmetal.com/services/pergola-making-uae'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pergola Making Dubai and Abu Dhabi | Professional Outdoor Living Solutions',
    description: 'Expert pergola making Dubai and Abu Dhabi with custom design solutions.',
    images: ['/images/pergola.jpeg'],
  },
  alternates: {
    canonical: 'https://bondmetal.com/services/pergola-making-uae'
  }
}

export default function PergolaMakingPage() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Pergola Making Dubai and Abu Dhabi",
    "description": "Professional pergola making Dubai and Abu Dhabi with custom design, climate-optimized construction, and expert installation for outdoor living enhancement.",
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
    "serviceType": "Pergola Making",
    "areaServed": [
      {
        "@type": "City",
        "name": "Dubai"
      },
      {
        "@type": "City", 
        "name": "Abu Dhabi"
      }
    ]
  }

  const features = [
    "Custom pergola making Dubai and Abu Dhabi with specialized design and fabrication solutions",
    "Aluminum and steel frame construction optimized for pergola making Dubai and Abu Dhabi projects",
    "Weather-resistant material selection ensuring superior pergola making Dubai and Abu Dhabi performance",
    "Motorized louvered systems available for advanced pergola making Dubai and Abu Dhabi",
    "Integrated lighting and electrical systems in pergola making Dubai and Abu Dhabi",
    "UV protection and climate control features for pergola making Dubai and Abu Dhabi",
    "Modular and expandable designs offered in pergola making Dubai and Abu Dhabi services",
    "Professional installation services covering pergola making Dubai and Abu Dhabi locations"
  ]

  const applications = [
    { title: "Residential Gardens Dubai Abu Dhabi", desc: "Villa gardens, backyard spaces, rooftop terraces, and private outdoor living areas requiring specialized pergola making Dubai and Abu Dhabi" },
    { title: "Commercial Spaces Dubai Abu Dhabi", desc: "Restaurant patios, hotel terraces, office outdoor areas, and retail outdoor spaces using pergola making Dubai and Abu Dhabi" },
    { title: "Hospitality Venues Dubai Abu Dhabi", desc: "Resort poolsides, spa gardens, outdoor dining areas, and entertainment spaces via pergola making Dubai and Abu Dhabi" },
    { title: "Educational Facilities Dubai Abu Dhabi", desc: "School courtyards, campus outdoor areas, playground shade, and recreational spaces through pergola making Dubai and Abu Dhabi" },
    { title: "Healthcare Gardens Dubai Abu Dhabi", desc: "Hospital healing gardens, therapy spaces, patient outdoor areas, and wellness centers using pergola making Dubai and Abu Dhabi" },
    { title: "Public Spaces Dubai Abu Dhabi", desc: "Park pavilions, community gardens, recreational areas, and public gathering spaces requiring pergola making Dubai and Abu Dhabi" }
  ]

  const pergolaTypes = [
    {
      icon: Shield,
      title: "Traditional Pergolas",
      desc: "Classic wooden and metal pergolas with timeless design appeal for pergola making Dubai and Abu Dhabi",
      details: ["Natural wood finishes for Dubai Abu Dhabi", "Classic beam structure", "Climbing plant support", "Timeless aesthetics"]
    },
    {
      icon: Zap,
      title: "Motorized Louvered",
      desc: "Modern automated pergolas with adjustable roof slats through pergola making Dubai and Abu Dhabi",
      details: ["Remote control operation for Dubai Abu Dhabi", "Weather-responsive automation", "Variable shade control", "Integrated sensors"]
    },
    {
      icon: Award,
      title: "Bioclimatic Pergolas",
      desc: "Advanced climate-control pergolas for year-round comfort via pergola making Dubai and Abu Dhabi",
      details: ["Temperature regulation for Dubai Abu Dhabi", "Rain protection", "Wind resistance", "Energy efficiency"]
    },
    {
      icon: Wrench,
      title: "Aluminum Pergolas",
      desc: "Lightweight, durable aluminum structures with modern appeal using pergola making Dubai and Abu Dhabi",
      details: ["Corrosion resistance for Dubai Abu Dhabi", "Low maintenance", "Modern aesthetics", "Powder coat finishes"]
    },
    {
      icon: Settings,
      title: "Steel Frame Pergolas",
      desc: "Heavy-duty steel structures for large spans and durability through pergola making Dubai and Abu Dhabi",
      details: ["Maximum strength for Dubai Abu Dhabi", "Large span capability", "Structural integrity", "Industrial aesthetics"]
    },
    {
      icon: Target,
      title: "Retractable Canopy",
      desc: "Flexible pergolas with retractable fabric roof systems for pergola making Dubai and Abu Dhabi",
      details: ["Seasonal adaptability for Dubai Abu Dhabi", "Manual or motorized", "Fabric variety", "Space optimization"]
    }
  ]

  const benefits = [
    {
      title: "UAE Climate Optimized",
      desc: "Designed specifically for UAE's extreme heat, occasional rainfall, and high UV exposure with proven durability for pergola making Dubai and Abu Dhabi."
    },
    {
      title: "Outdoor Living Enhancement",
      desc: "Transform outdoor spaces into comfortable, usable areas for entertaining, dining, and relaxation year-round through pergola making Dubai and Abu Dhabi."
    },
    {
      title: "Property Value Addition",
      desc: "Increase property value with beautiful, functional outdoor structures that enhance architectural appeal via pergola making Dubai and Abu Dhabi."
    },
    {
      title: "Energy Efficiency",
      desc: "Reduce building cooling costs by providing natural shade and creating comfortable microclimates using pergola making Dubai and Abu Dhabi."
    }
  ]

  const process = [
    { 
      step: "Design Consultation for Dubai Abu Dhabi", 
      desc: "Comprehensive site assessment and design development for pergola making Dubai and Abu Dhabi",
      details: "Our designers visit your location to understand space requirements, architectural style, usage patterns, and aesthetic preferences to create the perfect pergola solution for your outdoor space through pergola making Dubai and Abu Dhabi."
    },
    { 
      step: "Engineering & Planning for Dubai Abu Dhabi", 
      desc: "Structural engineering and detailed project planning for pergola making Dubai and Abu Dhabi",
      details: "Professional engineering including structural calculations, wind load analysis, foundation requirements, and material selection optimized for UAE climate and building regulations in pergola making Dubai and Abu Dhabi."
    },
    { 
      step: "Custom Fabrication for Dubai Abu Dhabi", 
      desc: "Precision manufacturing using premium materials and techniques for pergola making Dubai and Abu Dhabi",
      details: "Expert fabrication using weather-resistant materials and advanced manufacturing processes, ensuring quality control and precision in every component for perfect fit and finish in pergola making Dubai and Abu Dhabi."
    },
    { 
      step: "Installation & Finishing for Dubai Abu Dhabi", 
      desc: "Professional installation with complete project handover for pergola making Dubai and Abu Dhabi",
      details: "Complete installation including foundation work, structural assembly, electrical integration, finishing touches, and comprehensive testing to ensure optimal performance and aesthetics in pergola making Dubai and Abu Dhabi."
    }
  ]

  const specifications = [
    { property: "Material Options Dubai Abu Dhabi", value: "Aluminum, Steel, Wood, Composite" },
    { property: "Span Capability Dubai Abu Dhabi", value: "Up to 12 meters" },
    { property: "Height Range Dubai Abu Dhabi", value: "2.5m - 4.5m" },
    { property: "Wind Resistance Dubai Abu Dhabi", value: "Up to 180 km/h" },
    { property: "UV Protection Dubai Abu Dhabi", value: "Up to 95%" },
    { property: "Louvre Options Dubai Abu Dhabi", value: "Fixed, Adjustable, Motorized" },
    { property: "Electrical Integration Dubai Abu Dhabi", value: "Lighting, Fans, Heating" },
    { property: "Warranty Period Dubai Abu Dhabi", value: "5-15 years" }
  ]

  const industries = [
    "Residential Developments Dubai Abu Dhabi",
    "Hospitality & Tourism Dubai Abu Dhabi", 
    "Commercial Real Estate Dubai Abu Dhabi",
    "Healthcare Facilities Dubai Abu Dhabi",
    "Educational Institutions Dubai Abu Dhabi",
    "Retail & Shopping Dubai Abu Dhabi",
    "Government Buildings Dubai Abu Dhabi",
    "Recreation Centers Dubai Abu Dhabi"
  ]

  const materialComparison = [
    { 
      material: "Aluminum Structure for Dubai Abu Dhabi", 
      benefits: "Lightweight, corrosion-resistant, modern aesthetics, low maintenance, UAE climate ideal for pergola making Dubai and Abu Dhabi",
      applications: "Modern homes, commercial spaces, coastal areas using pergola making Dubai and Abu Dhabi",
      maintenance: "Minimal - periodic cleaning for pergola making Dubai and Abu Dhabi"
    },
    { 
      material: "Steel Frame for Dubai Abu Dhabi", 
      benefits: "Maximum strength, large spans, cost-effective, durable, industrial appeal for pergola making Dubai and Abu Dhabi",
      applications: "Large installations, commercial projects, heavy-duty applications via pergola making Dubai and Abu Dhabi",
      maintenance: "Moderate - annual inspection for pergola making Dubai and Abu Dhabi"
    },
    { 
      material: "Composite Materials for Dubai Abu Dhabi", 
      benefits: "Wood appearance, weather resistance, no maintenance, color retention in pergola making Dubai and Abu Dhabi",
      applications: "Residential gardens, traditional designs, eco-friendly projects through pergola making Dubai and Abu Dhabi",
      maintenance: "Minimal - occasional cleaning for pergola making Dubai and Abu Dhabi"
    },
    { 
      material: "Treated Timber for Dubai Abu Dhabi", 
      benefits: "Natural aesthetics, traditional appeal, renewable, customizable for pergola making Dubai and Abu Dhabi",
      applications: "Garden pergolas, rustic designs, eco-conscious projects using pergola making Dubai and Abu Dhabi",
      maintenance: "Regular - annual treatment for pergola making Dubai and Abu Dhabi"
    }
  ]

  const designFeatures = [
    "Integrated LED lighting systems for pergola making Dubai and Abu Dhabi",
    "Motorized louvre control in pergola making Dubai and Abu Dhabi",
    "Built-in sound systems for pergola making Dubai and Abu Dhabi",
    "Retractable side screens in pergola making Dubai and Abu Dhabi",
    "Heating element integration for pergola making Dubai and Abu Dhabi",
    "Drainage and gutter systems for pergola making Dubai and Abu Dhabi",
    "Climbing plant supports in pergola making Dubai and Abu Dhabi",
    "Custom color matching for pergola making Dubai and Abu Dhabi"
  ]

  const projectLocations = [
    "Dubai Marina",
    "Downtown Dubai", 
    "Palm Jumeirah",
    "Emirates Hills",
    "Dubai Hills",
    "Arabian Ranches",
    "Abu Dhabi CBD",
    "Yas Island",
    "Al Reem Island",
    "Saadiyat Island",
    "Jumeirah",
    "Business Bay"
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
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Pergola Making <span className="text-orange-500">Dubai and Abu Dhabi</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Professional pergola making Dubai and Abu Dhabi design and construction services creating beautiful outdoor living spaces. 
                  We specialize in custom pergolas engineered for UAE climate conditions, offering complete 
                  solutions from design consultation to installation across Dubai and Abu Dhabi through expert pergola making Dubai and Abu Dhabi.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    Get Quote
                  </Link>
                
                </div>
              </div>

              {/* Replace stats section with image */}
              <div className="relative">
                <Image 
                  src="/images/pergola2.jpeg"
                  alt="Professional Pergola Making Dubai and Abu Dhabi - Outdoor Living Construction" 
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
                Why Choose Our <span className="text-orange-500">Pergola Making Dubai and Abu Dhabi Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Expert craftsmanship and design excellence for outdoor living enhancement through pergola making Dubai and Abu Dhabi.
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

        {/* Pergola Types Section */}
        <section className="py-20 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Pergola Types & <span className="text-orange-500">Solutions</span>
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive range of pergola systems for diverse outdoor living requirements in pergola making Dubai and Abu Dhabi
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pergolaTypes.map((pergola, index) => {
                const IconComponent = pergola.icon
                return (
                  <div key={index} className="bg-slate-700 p-8 rounded-xl border border-slate-600 hover:border-orange-500 transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-orange-500">{pergola.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6">{pergola.desc}</p>
                    <ul className="space-y-2">
                      {pergola.details.map((detail, idx) => (
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

        {/* Material Comparison Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Material <span className="text-orange-500">Selection</span>
              </h2>
              <p className="text-xl text-gray-300">
                Choose the optimal material based on your aesthetic preferences and functional requirements for pergola making Dubai and Abu Dhabi
              </p>
            </div>

            <div className="space-y-6">
              {materialComparison.map((material, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-orange-500 mb-2">{material.material}</h3>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Benefits</h4>
                      <p className="text-gray-300 text-sm">{material.benefits}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Best For</h4>
                      <p className="text-gray-300 text-sm">{material.applications}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Maintenance</h4>
                      <p className="text-gray-300 text-sm">{material.maintenance}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Features Section */}
        <section className="py-20 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Design <span className="text-orange-500">Features</span>
              </h2>
              <p className="text-xl text-gray-300">
                Advanced features and customization options for enhanced outdoor living experience in pergola making Dubai and Abu Dhabi
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {designFeatures.map((feature, index) => (
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
                Detailed specifications for our pergola making Dubai and Abu Dhabi design and fabrication capabilities
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
                Applications Across <span className="text-orange-500">Spaces</span>
              </h2>
              <p className="text-xl text-gray-300">
                Professional pergola solutions for diverse outdoor living and commercial applications through pergola making Dubai and Abu Dhabi
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

        {/* Project Locations */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Project <span className="text-orange-500">Locations</span>
              </h2>
              <p className="text-xl text-gray-300">
                Professional pergola making Dubai and Abu Dhabi installation services across premium areas
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {projectLocations.map((location, index) => (
                <div key={index} className="bg-slate-800 p-4 rounded-xl text-center hover:bg-slate-700 transition-colors border border-slate-700 hover:border-orange-500">
                  <h3 className="font-semibold text-white text-sm">{location}</h3>
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
                Trusted pergola making Dubai and Abu Dhabi solutions across multiple sectors
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
                Our Design & Installation <span className="text-orange-500">Process</span>
              </h2>
              <p className="text-xl text-gray-300">
                Systematic approach ensuring perfect pergola design and superior installation quality for pergola making Dubai and Abu Dhabi
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
              Ready for Your Dream Pergola Making Dubai and Abu Dhabi?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Get expert pergola making Dubai and Abu Dhabi design and fabrication services with UAE climate optimization and 
              architectural excellence. Contact us for design consultation and competitive quotes for your pergola making Dubai and Abu Dhabi project.
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