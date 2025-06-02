import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle, Shield, Zap, Award, Wrench, Settings, Target } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Aluminium Installation Services in UAE | Bond Metal Solutions',
  description: 'Expert aluminium installation services across Dubai and UAE. Specializing in curtain wall systems, structural frameworks, windows, doors, and facade solutions with precision fitting.',
  keywords: 'aluminium installation UAE, curtain wall installation Dubai, aluminium facade Dubai, window installation UAE, door installation Dubai, structural aluminium UAE, aluminium contractor Dubai',
  openGraph: {
    title: 'Professional Aluminium Installation Services in UAE',
    description: 'Expert aluminium installation services across Dubai and UAE. Specializing in curtain wall systems, structural frameworks, windows, doors, and facade solutions.',
    images: ['/images/uae.webp'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Aluminium Installation Services in UAE',
    description: 'Expert aluminium installation services across Dubai and UAE.',
    images: ['/images/uae.webp'],
  },
  alternates: {
    canonical: 'https://bondmetal.com/services/aluminium-installation'
  }
}

export default function AluminiumInstallationPage() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aluminium Installation Services",
    "description": "Professional aluminium installation services across Dubai and UAE including curtain wall systems, structural frameworks, windows and doors.",
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
    "serviceType": "Aluminium Installation",
    "areaServed": {
      "@type": "Country",
      "name": "United Arab Emirates"
    },
    "offers": {
      "@type": "Offer",
      "description": "Professional aluminium installation services"
    }
  }

  const features = [
    "Curtain wall and facade installation",
    "Window and door installation services",
    "Structural aluminium framework",
  ]

  const applications = [
    { title: "Commercial Buildings", desc: "Office complexes, retail centers, corporate towers, and commercial facade installations" },
    { title: "Residential Projects", desc: "Luxury villas, apartment buildings, residential windows, doors, and balcony systems" },
    { title: "Industrial Facilities", desc: "Manufacturing plants, warehouses, industrial structures, and factory installations" },
    { title: "Educational Buildings", desc: "Schools, universities, training centers, and educational facility installations" },
    { title: "Healthcare Facilities", desc: "Hospitals, clinics, medical centers, and specialized healthcare installations" },
    { title: "Hospitality Venues", desc: "Hotels, resorts, restaurants, and hospitality sector aluminium installations" }
  ]

  const installationTypes = [
    {
      icon: Shield,
      title: "Curtain Wall Installation",
      desc: "Advanced curtain wall systems for modern building facades",
      details: ["Structural glazing", "Weather resistance", "Thermal efficiency", "Seismic compliance"]
    },
    {
      icon: Zap,
      title: "Window & Door Installation",
      desc: "Professional installation of aluminium windows and doors",
      details: ["Energy efficiency", "Security features", "Sound insulation", "Weather sealing"]
    },
    {
      icon: Award,
      title: "Structural Framework",
      desc: "Heavy-duty aluminium structural framework installation",
      details: ["Load-bearing capacity", "Corrosion resistance", "Precision assembly", "Code compliance"]
    },
    {
      icon: Wrench,
      title: "Facade Systems",
      desc: "Complete aluminium facade installation and cladding",
      details: ["Architectural aesthetics", "Weather protection", "Insulation systems", "Maintenance access"]
    },
    {
      icon: Settings,
      title: "Balcony & Railing",
      desc: "Aluminium balcony systems and railing installations",
      details: ["Safety compliance", "Structural integrity", "Design flexibility", "Corrosion protection"]
    },
    {
      icon: Target,
      title: "Canopy & Awning",
      desc: "Aluminium canopy and awning installation services",
      details: ["Weather protection", "UV resistance", "Motorized options", "Custom designs"]
    }
  ]

  const benefits = [
    {
      title: "UAE Climate Expertise",
      desc: "Specialized installation techniques optimized for UAE's extreme heat, humidity, and sandstorm conditions."
    },
    {
      title: "Precision Installation",
      desc: "Advanced measurement and fitting techniques ensuring perfect alignment and optimal performance."
    },
    {
      title: "Quality Assurance",
      desc: "Comprehensive testing and quality control ensuring installations meet international standards."
    },
    {
      title: "Professional Team",
      desc: "Certified installation specialists with extensive experience in aluminium structure installation."
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

        {/* Hero Section with proper semantic HTML */}
        <main>
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
                    Aluminium Installation <span className="text-orange-500">in UAE</span>
                  </h1>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Professional aluminium installation services across Dubai and UAE. We specialize in curtain wall systems, 
                    structural frameworks, window and door installations, and facade solutions engineered for UAE climate 
                    conditions with precision fitting and quality assurance.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/contact"
                      className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
                    >
                      Get Site Survey
                    </Link>
                    <Link 
                      href="/portfolio"
                      className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-center"
                    >
                      View Installations
                    </Link>
                  </div>
                </header>

                <div className="relative">
                  <div className="bg-gradient-to-br from-orange-100 to-slate-200 rounded-2xl overflow-hidden border border-slate-600">
                    <div className="relative w-full h-80">
                      <Image 
                        src="/images/uae.webp" 
                        alt="Professional Aluminium Installation Services in UAE - Curtain Wall and Facade Systems" 
                        fill
                        className="object-cover brightness-150 contrast-125 saturate-110"
                        priority
                      />
                      {/* Light gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 to-blue-900/10"></div>
                      {/* Light overlay for brightness */}
                      <div className="absolute inset-0 bg-white/10"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="text-lg text-white font-bold drop-shadow-xl">Professional Aluminium Installation</div>
                        <div className="text-sm text-gray-100 drop-shadow-lg">Expert structural solutions for UAE buildings</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section with semantic HTML */}
          <section className="py-20" aria-labelledby="features-heading">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 id="features-heading" className="text-4xl font-bold mb-6">
                  Why Choose Our <span className="text-orange-500">Aluminium Installation</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Expert installation services with precision fitting and quality assurance for UAE conditions.
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

          {/* Installation Types Section */}
          <section className="py-20 bg-slate-800">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  Installation Types & <span className="text-orange-500">Solutions</span>
                </h2>
                <p className="text-xl text-gray-300">
                  Comprehensive range of aluminium installation services for diverse construction requirements
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {installationTypes.map((installation, index) => {
                  const IconComponent = installation.icon
                  return (
                    <div key={index} className="bg-slate-700 p-8 rounded-xl border border-slate-600 hover:border-orange-500 transition-all duration-300 group">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-orange-500">{installation.title}</h3>
                      </div>
                      <p className="text-gray-300 mb-6">{installation.desc}</p>
                      <ul className="space-y-2">
                        {installation.details.map((detail, idx) => (
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

          {/* Applications Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  Applications Across <span className="text-orange-500">Projects</span>
                </h2>
                <p className="text-xl text-gray-300">
                  Professional aluminium installation for diverse construction applications
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

          {/* Contact CTA */}
          <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready for Professional Aluminium Installation?
              </h2>
              <p className="text-xl text-orange-100 mb-8">
                Get expert aluminium installation services with precision fitting and quality assurance. 
                Contact us for site survey and competitive quotes for your installation requirements.
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
                  className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Get Site Survey
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
        </main>
      </div>
    </>
  )
}