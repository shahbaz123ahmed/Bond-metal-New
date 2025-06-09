import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle, Shield, Zap, Award, Wrench } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

// Add metadata first
export const metadata: Metadata = {
  title: 'ACP Cladding in UAE | Professional Aluminum Composite Panel Services Dubai',
  description: 'Expert ACP Cladding in UAE with advanced installation capabilities. Specializing in aluminum composite panel cladding, facade solutions, and weather-resistant ACP Cladding in UAE across Dubai and UAE.',
  keywords: 'ACP Cladding in UAE, ACP cladding Dubai, aluminum composite panel UAE, facade cladding Dubai, ACP installation UAE, building cladding Dubai',
  openGraph: {
    title: 'ACP Cladding in UAE | Professional Aluminum Composite Panel Services',
    description: 'Expert ACP Cladding in UAE with advanced installation capabilities. Specializing in aluminum composite panel cladding and facade solutions.',
    images: ['/images/acp-cladding-uae.webp'],
    type: 'website',
    url: 'https://bondmetal.com/services/acp-cladding'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ACP Cladding in UAE | Professional Aluminum Composite Panel Services',
    description: 'Expert ACP Cladding in UAE with advanced installation capabilities.',
    images: ['/images/acp-cladding-uae.webp'],
  },
  alternates: {
    canonical: 'https://bondmetal.com/services/acp-cladding'
  }
}

export default function ACPCladdingPage() {
  const features = [
    "ACP Cladding in UAE with weather-resistant aluminum composite panels",
    "Fire-resistant core materials for enhanced safety compliance in ACP Cladding in UAE",
    "Lightweight yet durable ACP Cladding in UAE construction systems",
    "Superior thermal insulation properties for energy efficiency with ACP Cladding in UAE",
    "Professional ACP Cladding in UAE installation with precision mounting",
    "Weather-sealed facade cladding for UAE climate conditions using ACP Cladding in UAE",
    "Custom ACP Cladding in UAE designs for architectural requirements",
    "Low-maintenance aluminum composite panel solutions for ACP Cladding in UAE"
  ]

  const applications = [
    { title: "Commercial ACP Cladding in UAE", desc: "Office complexes, retail centers, corporate headquarters, and commercial facade cladding projects using ACP Cladding in UAE" },
    { title: "Residential ACP Cladding in UAE", desc: "High-rise apartments, luxury villas, housing developments, and residential building cladding with ACP Cladding in UAE" },
    { title: "Industrial ACP Cladding in UAE", desc: "Warehouses, factories, manufacturing plants, and industrial facility cladding solutions featuring ACP Cladding in UAE" },
    { title: "Healthcare ACP Cladding in UAE", desc: "Hospitals, clinics, medical centers, and healthcare facility cladding with hygienic properties through ACP Cladding in UAE" },
    { title: "Educational ACP Cladding in UAE", desc: "Schools, universities, training centers, and educational building facade solutions using ACP Cladding in UAE" },
    { title: "Hospitality ACP Cladding in UAE", desc: "Hotels, restaurants, entertainment venues, and hospitality sector cladding installations with ACP Cladding in UAE" }
  ]

  // NEW: Finish Options Section
  const finishOptions = [
    {
      icon: Shield,
      title: "PVDF Coating for ACP Cladding in UAE",
      desc: "Premium fluoropolymer coating for superior weather resistance in ACP Cladding in UAE",
      details: ["25+ year warranty for ACP Cladding in UAE", "Excellent UV resistance", "Color retention in UAE climate", "Chemical resistance for ACP Cladding in UAE"]
    },
    {
      icon: Zap,
      title: "Polyester Coating for ACP Cladding in UAE",
      desc: "Cost-effective coating with good durability and color options for ACP Cladding in UAE",
      details: ["Wide color range for ACP Cladding in UAE", "Good adhesion properties", "Indoor applications for ACP Cladding in UAE", "Value for money solutions"]
    },
    {
      icon: Award,
      title: "Anodized Finish for ACP Cladding in UAE",
      desc: "Electrochemical surface treatment for enhanced durability in ACP Cladding in UAE",
      details: ["Natural metallic look for ACP Cladding in UAE", "Corrosion resistance", "Scratch resistance for ACP Cladding in UAE", "Environmentally friendly"]
    },
    {
      icon: Wrench,
      title: "Wood Grain Finish for ACP Cladding in UAE",
      desc: "Realistic wood texture for natural aesthetic appeal in ACP Cladding in UAE",
      details: ["Natural appearance for ACP Cladding in UAE", "No maintenance required", "Fire resistance for ACP Cladding in UAE", "Weather durability in UAE"]
    }
  ]

  // NEW: Technical Specifications
  const specifications = [
    { property: "Panel Thickness for ACP Cladding in UAE", value: "3mm, 4mm, 5mm, 6mm" },
    { property: "Panel Width for ACP Cladding in UAE", value: "1220mm, 1500mm standard" },
    { property: "Panel Length for ACP Cladding in UAE", value: "2440mm, 3050mm, custom" },
    { property: "Core Material for ACP Cladding in UAE", value: "PE, FR (Fire Retardant)" },
    { property: "Aluminum Thickness for ACP Cladding in UAE", value: "0.3mm - 0.5mm each side" },
    { property: "Fire Rating for ACP Cladding in UAE", value: "A2, B1 certified options" },
    { property: "Thermal Expansion for ACP Cladding in UAE", value: "2.4 × 10⁻⁵ /°C" },
    { property: "Service Temperature for ACP Cladding in UAE", value: "-50°C to +80°C" }
  ]

  // NEW: Installation Process
  const process = [
    { 
      step: "Site Survey & Design for ACP Cladding in UAE", 
      desc: "Comprehensive site assessment and custom design development for ACP Cladding in UAE",
      details: "Our expert team conducts detailed site measurements, structural analysis, and develops customized ACP Cladding in UAE designs that meet UAE building codes and architectural requirements."
    },
    { 
      step: "Material Preparation for ACP Cladding in UAE", 
      desc: "Precision cutting and fabrication of ACP panels for ACP Cladding in UAE",
      details: "Using advanced CNC machinery, we precisely cut and fabricate ACP panels to exact specifications, ensuring perfect fit and optimal performance for ACP Cladding in UAE climate conditions."
    },
    { 
      step: "Framework Installation for ACP Cladding in UAE", 
      desc: "Professional mounting system installation and alignment for ACP Cladding in UAE",
      details: "Installation of structural framework and mounting systems with precision alignment, ensuring proper load distribution and weather sealing for long-term durability in ACP Cladding in UAE."
    },
    { 
      step: "Panel Installation & Finishing for ACP Cladding in UAE", 
      desc: "Expert panel mounting and quality finishing work for ACP Cladding in UAE",
      details: "Professional installation of ACP panels with weather sealing, final inspections, and quality assurance to ensure superior performance and aesthetic excellence in ACP Cladding in UAE."
    }
  ]

  const benefits = [
    {
      title: "UAE Climate Expertise",
      desc: "Specialized knowledge of UAE weather conditions and building standards ensuring optimal performance for ACP Cladding in UAE."
    },
    {
      title: "Advanced Technology",
      desc: "State-of-the-art fabrication and installation technology delivering superior quality in ACP Cladding in UAE."
    },
    {
      title: "Complete Solutions",
      desc: "Comprehensive services from design to installation providing turnkey solutions for ACP Cladding in UAE."
    },
    {
      title: "Quality Assurance",
      desc: "Rigorous quality control and testing procedures ensuring excellence in every ACP Cladding in UAE project."
    }
  ]

  const serviceAreas = [
    "Dubai for ACP Cladding in UAE",
    "Abu Dhabi for ACP Cladding in UAE",
    "Sharjah for ACP Cladding in UAE", 
    "Ajman for ACP Cladding in UAE",
    "Fujairah for ACP Cladding in UAE",
    "Ras Al Khaimah for ACP Cladding in UAE",
    "Umm Al Quwain for ACP Cladding in UAE",
    "Al Ain for ACP Cladding in UAE"
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "ACP Cladding in UAE",
            "description": "Professional ACP Cladding in UAE with advanced installation capabilities including aluminum composite panel cladding, facade solutions, and weather-resistant cladding across Dubai and UAE.",
            "provider": {
              "@type": "Organization",
              "name": "Bond Metal Solutions",
              "telephone": "+971 50 413 2803",
              "email": "info@bondmetal.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "AE",
                "addressRegion": "Dubai"
              }
            },
            "serviceType": "ACP Cladding in UAE",
            "areaServed": {
              "@type": "Country",
              "name": "United Arab Emirates"
            }
          })
        }}
      />

      {/* Navigation Bar Space */}
      <div className="h-24"></div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4">
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
                <span className="text-white">ACP Cladding </span>
                <span className="text-orange-500"> in UAE</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Professional ACP Cladding in UAE with advanced installation capabilities and weather resistance. 
                Our expert ACP Cladding in UAE services specialize in aluminum composite panel cladding, facade solutions, and custom ACP 
                Cladding in UAE for commercial, residential, and industrial applications across Dubai and the UAE.
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

            <div className="relative">
              <Image 
                src="/images/acp-cladding.webp" 
                alt="ACP Cladding in UAE - Professional Aluminum Composite Panel Installation Dubai" 
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
              Why Choose Our <span className="text-orange-500">ACP Cladding in UAE</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced ACP Cladding in UAE with superior installation technology and complete weather resistance for exceptional facade solutions across Dubai.
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

      {/* NEW: Finish Options Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Finish <span className="text-orange-500">Options</span>
            </h2>
            <p className="text-xl text-gray-300">
              Premium ACP panel finishes designed for UAE climate conditions and architectural requirements through ACP Cladding in UAE
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

      {/* NEW: Technical Specifications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Technical <span className="text-orange-500">Specifications</span>
            </h2>
            <p className="text-xl text-gray-300">
              Detailed specifications for our ACP Cladding in UAE systems optimized for UAE conditions
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

      {/* Service Areas Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Service <span className="text-orange-500">Areas</span>
            </h2>
            <p className="text-xl text-gray-300">
              Professional ACP Cladding in UAE services across all emirates
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-slate-700 p-6 rounded-xl text-center hover:bg-slate-600 transition-colors border border-slate-600 hover:border-orange-500">
                <h3 className="font-semibold text-white">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Perfect for Any Project Section */}
      <section className="py-20" aria-labelledby="applications-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="applications-heading" className="text-4xl font-bold mb-6">
              Perfect for <span className="text-orange-500">Any Project</span>
            </h2>
            <p className="text-xl text-gray-300">
              Versatile ACP Cladding in UAE solutions for diverse architectural applications across UAE
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

      {/* NEW: Our Installation Process Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Our Installation <span className="text-orange-500">Process</span>
            </h2>
            <p className="text-xl text-gray-300">
              Professional ACP Cladding in UAE installation process ensuring quality results and UAE compliance
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
            Ready for Professional ACP Cladding in UAE?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get expert ACP Cladding in UAE with weather resistance and superior installation quality. 
            Contact us for detailed consultation and competitive quotes for your ACP Cladding in UAE requirements.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
              <Phone className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Call for ACP Cladding in UAE</h3>
              <p className="text-orange-100">+971 50 413 2803</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
              <Mail className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Email for ACP Cladding in UAE</h3>
              <p className="text-orange-100">info@bondmetal.com</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
              <MessageCircle className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">WhatsApp ACP Cladding in UAE</h3>
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
  )
}