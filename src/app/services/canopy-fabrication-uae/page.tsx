import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle, Shield, Zap, Award, Wrench, Settings, Target } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Canopy Fabrication in Dubai | Professional Weather Protection Solutions UAE',
  description: 'Expert canopy fabrication in Dubai with custom design and weather-resistant materials. Leading provider of entrance canopies, walkway covers, and architectural shading solutions across UAE.',
  keywords: 'canopy fabrication Dubai, weather protection UAE, entrance canopies Dubai, walkway covers UAE, architectural shading Dubai',
  openGraph: {
    title: 'Canopy Fabrication in Dubai | Professional Weather Protection Solutions',
    description: 'Expert canopy fabrication in Dubai with custom design solutions.',
    images: ['/images/canopy.jpeg'],
    type: 'website',
    url: 'https://bondmetal.com/services/canopy-fabrication-uae'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Canopy Fabrication in Dubai | Professional Weather Protection Solutions',
    description: 'Expert canopy fabrication in Dubai with custom design solutions.',
    images: ['/images/canopy.jpeg'],
  },
  alternates: {
    canonical: 'https://bondmetal.com/services/canopy-fabrication-uae'
  }
}

export default function CanopyFabricationPage() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Canopy Fabrication in Dubai",
    "description": "Professional canopy fabrication in Dubai with custom design, weather-resistant materials, and expert installation for commercial and residential applications.",
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
    "serviceType": "Canopy Fabrication",
    "areaServed": {
      "@type": "City",
      "name": "Dubai"
    }
  }

  const features = [
    "Custom canopy fabrication in Dubai with specialized design and engineering solutions",
    "Weather-resistant material selection optimized for canopy fabrication in Dubai projects",
    "Structural load calculations ensuring superior canopy fabrication in Dubai performance",
    "Wind and seismic resistance design expertise in canopy fabrication in Dubai",
    "UV protection and thermal comfort features for canopy fabrication in Dubai",
    "Drainage and gutter integration systems in canopy fabrication in Dubai",
   
  ]

  const applications = [
    { title: "Commercial Buildings Dubai", desc: "Office entrances, retail storefronts, shopping centers, and commercial facility coverage requiring specialized canopy fabrication in Dubai" },
    { title: "Hospitality Venues Dubai", desc: "Hotel entrances, restaurant patios, resort areas, and outdoor dining spaces using canopy fabrication in Dubai" },
    { title: "Transportation Hubs Dubai", desc: "Airport walkways, metro station coverage, bus stops, and transit facility shelters via canopy fabrication in Dubai" },
    { title: "Residential Projects Dubai", desc: "Villa entrances, apartment complexes, parking areas, and residential outdoor spaces through canopy fabrication in Dubai" },
    { title: "Industrial Facilities Dubai", desc: "Loading docks, equipment protection, warehouse entrances, and industrial shelters using canopy fabrication in Dubai" },
    { title: "Public Spaces Dubai", desc: "Park pavilions, community centers, sports facilities, and public gathering areas requiring canopy fabrication in Dubai" }
  ]

  const canopyTypes = [
    {
      icon: Shield,
      title: "Entrance Canopies Dubai",
      desc: "Welcoming entrance solutions providing weather protection and aesthetic appeal for canopy fabrication in Dubai",
      details: ["Grand entrance designs for Dubai", "Corporate branding integration", "Visitor comfort enhancement", "Professional appearance"]
    },
    {
      icon: Zap,
      title: "Walkway Canopies Dubai",
      desc: "Covered walkway systems connecting buildings and areas through canopy fabrication in Dubai",
      details: ["Multi-span coverage for Dubai", "Seamless connectivity", "Weather protection", "ADA compliant designs"]
    },
    {
      icon: Award,
      title: "Parking Canopies Dubai",
      desc: "Vehicle protection systems for parking areas and garages via canopy fabrication in Dubai",
      details: ["Vehicle protection for Dubai", "Solar panel integration", "Drainage systems", "Cost-effective coverage"]
    },
    {
      icon: Wrench,
      title: "Industrial Canopies Dubai",
      desc: "Heavy-duty canopies for industrial and manufacturing applications using canopy fabrication in Dubai",
      details: ["Heavy load capacity for Dubai", "Chemical resistance", "Equipment protection", "Maintenance access"]
    },
    {
      icon: Settings,
      title: "Retractable Canopies Dubai",
      desc: "Flexible canopy systems with motorized operation through canopy fabrication in Dubai",
      details: ["Weather-responsive operation for Dubai", "Remote control systems", "Variable coverage", "Energy efficiency"]
    },
    {
      icon: Target,
      title: "Tensioned Structures Dubai",
      desc: "Modern tensioned fabric and cable canopy systems for canopy fabrication in Dubai",
      details: ["Architectural aesthetics for Dubai", "Large span capability", "Lightweight construction", "Dynamic designs"]
    }
  ]

  const benefits = [
    {
      title: "Climate Adaptation Dubai",
      desc: "Engineered specifically for Dubai climate conditions including extreme heat, sandstorms, and occasional rainfall through expert canopy fabrication in Dubai."
    },
    {
      title: "Structural Excellence Dubai",
      desc: "Advanced engineering ensuring wind resistance up to 200 km/h and compliance with Dubai building codes for canopy fabrication in Dubai."
    },
    {
      title: "Material Innovation Dubai",
      desc: "Premium materials selected for UV resistance, thermal performance, and long-term durability in desert conditions for canopy fabrication in Dubai."
    },
    {
      title: "Design Integration Dubai",
      desc: "Seamless architectural integration enhancing building aesthetics while providing functional protection through canopy fabrication in Dubai."
    }
  ]

  const process = [
    { 
      step: "Site Analysis for Dubai", 
      desc: "Comprehensive site evaluation and environmental assessment for canopy fabrication in Dubai",
      details: "Our engineers conduct detailed site surveys including wind analysis, structural assessments, and environmental factors specific to Dubai conditions for optimal canopy design and placement in canopy fabrication in Dubai."
    },
    { 
      step: "Custom Design for Dubai", 
      desc: "Architectural design with structural engineering calculations for canopy fabrication in Dubai",
      details: "Professional design development including 3D modeling, wind load analysis, thermal calculations, and material selection optimized for Dubai climate and aesthetic requirements in canopy fabrication in Dubai."
    },
    { 
      step: "Fabrication for Dubai", 
      desc: "Precision manufacturing using advanced techniques and materials for canopy fabrication in Dubai",
      details: "Expert fabrication using weather-resistant materials and specialized techniques, ensuring quality control and compliance with international standards for canopy construction in canopy fabrication in Dubai."
    },
    { 
      step: "Installation & Testing Dubai", 
      desc: "Professional installation with performance verification for canopy fabrication in Dubai",
      details: "Complete installation including foundation work, structural assembly, weatherproofing, and comprehensive testing to ensure safety and performance standards are met for canopy fabrication in Dubai."
    }
  ]

  const specifications = [
    { property: "Material Options Dubai", value: "Aluminum, Steel, Fabric, Glass" },
    { property: "Span Capability Dubai", value: "Up to 30 meters" },
    { property: "Wind Resistance Dubai", value: "Up to 200 km/h" },
    { property: "UV Protection Dubai", value: "99% UV blockage" },
    { property: "Temperature Range Dubai", value: "-20°C to +70°C" },
    { property: "Snow Load Capacity Dubai", value: "As per local codes" },
    { property: "Drainage Design Dubai", value: "Integrated gutter systems" },
    { property: "Finish Options Dubai", value: "Powder Coat, Anodized, PVDF" }
  ]

  const industries = [
    "Commercial Real Estate Dubai",
    "Hospitality & Tourism Dubai", 
    "Transportation Dubai",
    "Healthcare Facilities Dubai",
    "Educational Institutions Dubai",
    "Industrial Complexes Dubai",
    "Retail & Shopping Dubai",
    "Government Buildings Dubai"
  ]

  const materialOptions = [
    { 
      material: "Aluminum Frame for Dubai", 
      benefits: "Lightweight, corrosion-resistant, low maintenance, excellent for Dubai climate in canopy fabrication in Dubai",
      applications: "Commercial canopies, walkways, entrance covers using canopy fabrication in Dubai"
    },
    { 
      material: "Steel Structure for Dubai", 
      benefits: "High strength, large spans, cost-effective for heavy-duty applications in canopy fabrication in Dubai",
      applications: "Industrial canopies, parking structures, large installations via canopy fabrication in Dubai"
    },
    { 
      material: "Fabric Membrane for Dubai", 
      benefits: "Lightweight, translucent options, design flexibility, UV protection for canopy fabrication in Dubai",
      applications: "Tensioned structures, temporary covers, architectural features through canopy fabrication in Dubai"
    },
    { 
      material: "Polycarbonate Panels for Dubai", 
      benefits: "Impact resistant, thermal insulation, natural light transmission in canopy fabrication in Dubai",
      applications: "Walkway covers, greenhouse structures, skylights using canopy fabrication in Dubai"
    }
  ]

  const performanceFeatures = [
    "Wind load resistance certification for canopy fabrication in Dubai",
    "Thermal expansion accommodation in canopy fabrication in Dubai",
    "Integrated drainage systems for canopy fabrication in Dubai",
    "UV-resistant materials used in canopy fabrication in Dubai",
    "Corrosion protection coatings for canopy fabrication in Dubai",
    "Seismic resistance design in canopy fabrication in Dubai",
    "Snow load calculations for canopy fabrication in Dubai",
    "Fire resistance compliance in canopy fabrication in Dubai"
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
                  Canopy Fabrication <span className="text-orange-500">in Dubai</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Professional canopy fabrication in Dubai and installation services providing weather protection and 
                  architectural enhancement. We specialize in custom-designed canopies engineered for Dubai 
                  climate conditions, delivering complete solutions from concept design to installation across 
                  Dubai and the Emirates through expert canopy fabrication in Dubai.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    Get Custom Design
                  </Link>
                  <Link 
                    href="/portfolio"
                    className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-center"
                  >
                    View Projects
                  </Link>
                </div>
              </div>

              {/* Replace stats section with image */}
              <div className="relative">
                <Image 
                  src="/images/canopie.jpg"
                  alt="Professional Canopy Fabrication in Dubai - Weather Protection Solutions" 
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
                Why Choose Our Canopy <span className="text-orange-500">Fabrication in Dubai Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Expert engineering and fabrication designed specifically for Dubai environmental conditions through canopy fabrication in Dubai.
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

        {/* Canopy Types Section */}
        <section className="py-20 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Canopy Types & <span className="text-orange-500">Solutions</span>
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive range of canopy systems for diverse architectural and functional requirements in canopy fabrication in Dubai
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {canopyTypes.map((canopy, index) => {
                const IconComponent = canopy.icon
                return (
                  <div key={index} className="bg-slate-700 p-8 rounded-xl border border-slate-600 hover:border-orange-500 transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-orange-500">{canopy.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6">{canopy.desc}</p>
                    <ul className="space-y-2">
                      {canopy.details.map((detail, idx) => (
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

        {/* Material Options Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Material <span className="text-orange-500">Options</span>
              </h2>
              <p className="text-xl text-gray-300">
                Premium materials selected for optimal performance in Dubai climate conditions for canopy fabrication in Dubai
              </p>
            </div>

            <div className="space-y-6">
              {materialOptions.map((material, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-orange-500 mb-2">{material.material}</h3>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Benefits</h4>
                      <p className="text-gray-300">{material.benefits}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Applications</h4>
                      <p className="text-gray-300">{material.applications}</p>
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
                Advanced engineering features ensuring optimal performance and safety in canopy fabrication in Dubai
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

        {/* Technical Specifications */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Technical <span className="text-orange-500">Specifications</span>
              </h2>
              <p className="text-xl text-gray-300">
                Detailed specifications for our canopy fabrication in Dubai capabilities
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
                Applications Across <span className="text-orange-500">Sectors</span>
              </h2>
              <p className="text-xl text-gray-300">
                Professional canopy solutions for diverse architectural and commercial needs in canopy fabrication in Dubai
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
                Trusted canopy fabrication in Dubai services across multiple industry sectors
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
                Our Design & Installation <span className="text-orange-500">Process</span>
              </h2>
              <p className="text-xl text-gray-300">
                Systematic approach ensuring optimal weather protection and architectural integration for canopy fabrication in Dubai
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
              Ready for Professional Canopy Fabrication in Dubai?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Get expert canopy fabrication in Dubai services with climate-optimized design and engineering excellence. 
              Contact us for site analysis and competitive quotes for your weather protection requirements in canopy fabrication in Dubai.
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
                Get Site Analysis
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-block text-center"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}