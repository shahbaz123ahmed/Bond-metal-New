import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle, Shield, Zap, Award, Wrench, Settings, Target } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Handrails Fabrication in UAE | Professional Handrail Installation Dubai',
  description: 'Expert handrails fabrication in UAE with code-compliant safety systems. Leading provider of custom handrail manufacturing, stainless steel handrails, and professional handrails fabrication across UAE and Dubai.',
  keywords: 'handrails fabrication UAE, handrail fabrication Dubai, safety handrails UAE, stainless steel handrails Dubai, custom handrails UAE, handrail installation Dubai',
  openGraph: {
    title: 'Handrails Fabrication in UAE | Professional Handrail Installation',
    description: 'Expert handrails fabrication in UAE with code-compliant safety systems and custom manufacturing.',
    images: ['/images/drills.jpg'],
    type: 'website',
    url: 'https://bondmetal.com/services/handrail-fabrication-uae'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Handrails Fabrication in UAE | Professional Handrail Installation',
    description: 'Expert handrails fabrication in UAE with code-compliant safety systems.',
    images: ['/images/drills.jpg'],
  },
  alternates: {
    canonical: 'https://bondmetal.com/services/handrail-fabrication-uae'
  }
}

export default function HandrailFabricationPage() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Handrails Fabrication in UAE",
    "description": "Professional handrails fabrication in UAE with code-compliant safety systems. Expert custom handrail manufacturing and installation services across UAE and Dubai.",
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
    "serviceType": "Handrails Fabrication",
    "areaServed": {
      "@type": "Country",
      "name": "United Arab Emirates"
    }
  }

  const features = [
    "Custom handrails fabrication in UAE design and manufacturing",
    "Stainless steel and aluminum construction for handrails fabrication in UAE",
    "ADA and UAE building code compliance for handrails fabrication in UAE",
    "Glass panel integration available for handrails fabrication in UAE",
    "LED lighting integration options for handrails fabrication in UAE",
    "Curved and straight handrail systems for handrails fabrication in UAE",
    "Powder coating and finishing services for handrails fabrication in UAE",
    "Professional installation and testing for handrails fabrication in UAE"
  ]

  const applications = [
    { title: "Commercial Buildings UAE", desc: "Office complexes, shopping centers, hotels, and corporate facility staircases requiring professional handrails fabrication in UAE" },
    { title: "Residential Projects UAE", desc: "Luxury villas, apartment buildings, townhouses, and residential staircase systems with handrails fabrication in UAE" },
    { title: "Healthcare Facilities UAE", desc: "Hospitals, clinics, rehabilitation centers, and accessible pathway handrails through handrails fabrication in UAE" },
    { title: "Educational Institutions UAE", desc: "Schools, universities, libraries, and campus accessibility handrail systems via handrails fabrication in UAE" },
    { title: "Industrial Facilities UAE", desc: "Manufacturing plants, warehouses, platforms, and industrial safety handrails using handrails fabrication in UAE" },
    { title: "Public Infrastructure UAE", desc: "Metro stations, airports, government buildings, and public accessibility systems with handrails fabrication in UAE" }
  ]

  const handrailTypes = [
    {
      icon: Shield,
      title: "Safety Handrails UAE",
      desc: "Code-compliant safety handrails for stairs and ramps with handrails fabrication in UAE",
      details: ["Building code compliance for UAE", "Slip-resistant grips", "Proper height standards for UAE", "Safety testing certified"]
    },
    {
      icon: Zap,
      title: "Glass Handrails UAE",
      desc: "Modern glass panel handrail systems with metal frames for handrails fabrication in UAE",
      details: ["Tempered safety glass for UAE", "Stainless steel frames", "Modern aesthetics for UAE", "Easy maintenance"]
    },
    {
      icon: Award,
      title: "Architectural Handrails UAE",
      desc: "Designer handrails enhancing building aesthetics through handrails fabrication in UAE",
      details: ["Custom design patterns for UAE", "Premium finishes", "Architectural integration for UAE", "Unique styling"]
    },
    {
      icon: Wrench,
      title: "Industrial Handrails UAE",
      desc: "Heavy-duty handrails for industrial environments using handrails fabrication in UAE",
      details: ["Heavy load capacity for UAE", "Corrosion resistance", "Chemical compatibility for UAE", "OSHA compliance"]
    },
    {
      icon: Settings,
      title: "Curved Handrails UAE",
      desc: "Custom curved handrails for spiral and curved staircases with handrails fabrication in UAE",
      details: ["Precision bending for UAE", "Seamless curves", "Custom radius for UAE", "Expert fabrication"]
    },
    {
      icon: Target,
      title: "Balustrade Systems UAE",
      desc: "Complete handrail and balustrade combinations through handrails fabrication in UAE",
      details: ["Integrated systems for UAE", "Multiple materials", "Custom heights for UAE", "Wind load rated"]
    }
  ]

  const benefits = [
    {
      title: "Local Code Expertise UAE",
      desc: "Complete understanding of UAE building codes, accessibility standards, and safety regulations for compliant handrails fabrication in UAE installations."
    },
    {
      title: "Quality Materials UAE",
      desc: "Premium stainless steel grades and aluminum alloys selected for UAE climate resistance and long-term durability in handrails fabrication in UAE."
    },
    {
      title: "Custom Fabrication UAE",
      desc: "In-house fabrication capabilities allowing complete customization for unique architectural requirements and designs in handrails fabrication in UAE."
    },
    {
      title: "Professional Installation UAE",
      desc: "Certified installation teams ensuring proper mounting, safety compliance, and quality workmanship for handrails fabrication in UAE."
    }
  ]

  const process = [
    { 
      step: "Site Measurement for UAE", 
      desc: "Precise measurement and assessment of handrail requirements for handrails fabrication in UAE",
      details: "Our technicians visit your UAE site to take accurate measurements, assess structural requirements, evaluate code compliance needs, and understand aesthetic preferences for optimal handrails fabrication in UAE design."
    },
    { 
      step: "Design & Engineering UAE", 
      desc: "Custom design development with structural calculations for handrails fabrication in UAE",
      details: "Professional CAD design services for handrails fabrication in UAE including load calculations, material selection, mounting specifications, and compliance verification with UAE building codes and accessibility standards."
    },
    { 
      step: "Fabrication UAE", 
      desc: "Precision manufacturing using advanced equipment for handrails fabrication in UAE",
      details: "Expert fabrication for handrails fabrication in UAE using premium materials and specialized techniques including welding, bending, finishing, and quality control to ensure perfect fit and superior performance."
    },
    { 
      step: "Installation & Testing UAE", 
      desc: "Professional installation with safety verification for handrails fabrication in UAE",
      details: "Complete installation for handrails fabrication in UAE including mounting, alignment, safety testing, and final inspection to ensure compliance with safety standards and optimal performance."
    }
  ]

  const specifications = [
    { property: "Material Options UAE", value: "SS 304/316, Aluminum 6061" },
    { property: "Handrail Heights UAE", value: "900mm - 1100mm" },
    { property: "Pipe Diameters UAE", value: "32mm - 50mm" },
    { property: "Wall Thickness UAE", value: "2mm - 4mm" },
    { property: "Load Capacity UAE", value: "1.5 kN/m (Code Requirement)" },
    { property: "Surface Finishes UAE", value: "Satin, Mirror, Powder Coat" },
    { property: "Glass Thickness UAE", value: "10mm - 12mm Tempered" },
    { property: "Installation Areas UAE", value: "Dubai, Abu Dhabi, UAE" }
  ]

  const codeCompliance = [
    "UAE Building Code compliance for handrails fabrication in UAE",
    "ADA accessibility standards for handrails fabrication in UAE",
    "OSHA safety requirements for handrails fabrication in UAE",
    "International Building Code (IBC) for handrails fabrication in UAE",
    "BS 6180 safety standards for handrails fabrication in UAE",
    "EN 1991 load requirements for handrails fabrication in UAE",
    "Local municipality approvals for handrails fabrication in UAE",
    "Safety testing certification for handrails fabrication in UAE"
  ]

  const finishOptions = [
    { 
      finish: "Satin Stainless Steel for UAE", 
      benefits: "Professional appearance, easy maintenance, fingerprint resistant, UAE climate ideal for handrails fabrication in UAE",
      applications: "Commercial buildings, healthcare facilities, modern interiors requiring handrails fabrication in UAE"
    },
    { 
      finish: "Mirror Polished for UAE", 
      benefits: "Premium aesthetics, reflective surface, luxury appeal, easy cleaning for handrails fabrication in UAE",
      applications: "Luxury hotels, high-end residential, premium commercial spaces with handrails fabrication in UAE"
    },
    { 
      finish: "Powder Coated for UAE", 
      benefits: "Color customization, enhanced durability, weather resistance, cost-effective for handrails fabrication in UAE",
      applications: "Industrial facilities, outdoor installations, colored design schemes using handrails fabrication in UAE"
    },
    { 
      finish: "Anodized Aluminum for UAE", 
      benefits: "Corrosion protection, lightweight, color options, maintenance-free for handrails fabrication in UAE",
      applications: "Coastal areas, outdoor applications, modern architectural features with handrails fabrication in UAE"
    }
  ]

  const industries = [
    "Commercial Real Estate UAE",
    "Healthcare Sector UAE", 
    "Educational Institutions UAE",
    "Hospitality Industry UAE",
    "Industrial Facilities UAE",
    "Residential Developments UAE",
    "Government Buildings UAE",
    "Transportation Hubs UAE"
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
            <nav aria-label="Breadcrumb">
              <Link 
                href="/services" 
                className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Services
              </Link>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <header>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Handrails Fabrication <span className="text-orange-500">in UAE</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Professional handrails fabrication in UAE and installation services across Dubai and UAE. 
                  We specialize in custom safety handrails, architectural railing systems, and ADA-compliant 
                  solutions engineered for UAE building codes and safety standards with premium materials and finishes for superior handrails fabrication in UAE.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    Get Site Measurement
                  </Link>
                  <Link 
                    href="/portfolio"
                    className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-center"
                  >
                    View Portfolio
                  </Link>
                </div>
              </header>

              {/* Replaced stats section with image */}
              <div className="relative">
                <Image 
                  src="/images/drills.jpg"
                  alt="Professional Handrails Fabrication in UAE - Code-Compliant Safety Systems" 
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
                Why Choose Our Handrails Fabrication <span className="text-orange-500">in UAE</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Expert craftsmanship with UAE building code compliance and safety excellence for handrails fabrication in UAE.
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

        {/* Handrail Types Section */}
        <section className="py-20 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Handrail Types & <span className="text-orange-500">Solutions</span>
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive range of handrail systems for diverse safety and architectural requirements using handrails fabrication in UAE
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {handrailTypes.map((handrail, index) => {
                const IconComponent = handrail.icon
                return (
                  <div key={index} className="bg-slate-700 p-8 rounded-xl border border-slate-600 hover:border-orange-500 transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-orange-500">{handrail.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6">{handrail.desc}</p>
                    <ul className="space-y-2">
                      {handrail.details.map((detail, idx) => (
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

        {/* Finish Options Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Finish <span className="text-orange-500">Options</span>
              </h2>
              <p className="text-xl text-gray-300">
                Premium finish options for durability and aesthetic appeal in UAE climate for handrails fabrication in UAE
              </p>
            </div>

            <div className="space-y-6">
              {finishOptions.map((finish, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-orange-500 mb-2">{finish.finish}</h3>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Benefits</h4>
                      <p className="text-gray-300 text-sm">{finish.benefits}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Best Applications</h4>
                      <p className="text-gray-300 text-sm">{finish.applications}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Compliance Section */}
        <section className="py-20 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Safety & Code <span className="text-orange-500">Compliance</span>
              </h2>
              <p className="text-xl text-gray-300">
                Full compliance with UAE building codes and international safety standards for handrails fabrication in UAE
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {codeCompliance.map((compliance, index) => (
                <div key={index} className="bg-slate-700 p-6 rounded-xl border border-slate-600 hover:border-orange-500 transition-all duration-300 text-center">
                  <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-white">{compliance}</h3>
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
                Detailed specifications for our handrails fabrication in UAE capabilities
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
                Applications Across <span className="text-orange-500">Projects</span>
              </h2>
              <p className="text-xl text-gray-300">
                Professional handrail solutions for diverse architectural and safety applications using handrails fabrication in UAE
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
                Trusted handrails fabrication in UAE services across multiple industry sectors
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
                Systematic approach ensuring perfect handrails fabrication in UAE and installation
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
              Ready for Professional Handrails Fabrication in UAE?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Get expert handrails fabrication in UAE services with UAE building code compliance and safety excellence. 
              Contact us for site measurement and competitive quotes for your handrails fabrication in UAE requirements.
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
                Get Free Consultation
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