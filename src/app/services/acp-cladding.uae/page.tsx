import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

// Add metadata first
export const metadata: Metadata = {
  title: 'ACP Cladding in UAE | Professional Aluminum Composite Panel Services Dubai',
  description: 'Expert ACP cladding in UAE with advanced installation capabilities. Specializing in aluminum composite panel cladding, facade solutions, and weather-resistant ACP cladding across Dubai and UAE.',
  keywords: 'ACP cladding UAE, ACP cladding Dubai, aluminum composite panel UAE, facade cladding Dubai, ACP installation UAE, building cladding Dubai',
  openGraph: {
    title: 'ACP Cladding in UAE | Professional Aluminum Composite Panel Services',
    description: 'Expert ACP cladding in UAE with advanced installation capabilities. Specializing in aluminum composite panel cladding and facade solutions.',
    images: ['/images/acp-cladding-uae.webp'],
    type: 'website',
    url: 'https://bondmetal.com/services/acp-cladding'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ACP Cladding in UAE | Professional Aluminum Composite Panel Services',
    description: 'Expert ACP cladding in UAE with advanced installation capabilities.',
    images: ['/images/acp-cladding-uae.webp'],
  },
  alternates: {
    canonical: 'https://bondmetal.com/services/acp-cladding'
  }
}

export default function ACPCladdingPage() {
  const features = [
    "ACP cladding in UAE with weather-resistant aluminum composite panels",
    "Fire-resistant core materials for enhanced safety compliance",
    "Lightweight yet durable ACP cladding construction systems",
    "Superior thermal insulation properties for energy efficiency",
    "Professional ACP cladding installation with precision mounting",
    "Weather-sealed facade cladding for UAE climate conditions",
    "Custom ACP cladding designs for architectural requirements",
    "Low-maintenance aluminum composite panel solutions"
  ]

  const applications = [
    { title: "Commercial ACP Cladding", desc: "Office complexes, retail centers, corporate headquarters, and commercial facade cladding projects in Dubai" },
    { title: "Residential ACP Projects", desc: "High-rise apartments, luxury villas, housing developments, and residential building cladding across UAE" },
    { title: "Industrial ACP Cladding", desc: "Warehouses, factories, manufacturing plants, and industrial facility cladding solutions" },
    { title: "Healthcare ACP Solutions", desc: "Hospitals, clinics, medical centers, and healthcare facility cladding with hygienic properties" },
    { title: "Educational ACP Cladding", desc: "Schools, universities, training centers, and educational building facade solutions" },
    { title: "Hospitality ACP Projects", desc: "Hotels, restaurants, entertainment venues, and hospitality sector cladding installations" }
  ]

  // ... existing arrays (process, benefits) remain the same

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "ACP Cladding in UAE",
            "description": "Professional ACP cladding in UAE with advanced installation capabilities including aluminum composite panel cladding, facade solutions, and weather-resistant cladding across Dubai and UAE.",
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
            "serviceType": "ACP Cladding",
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
                ACP Cladding <span className="text-orange-500">in UAE</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Professional ACP cladding in UAE with advanced installation capabilities and weather resistance. 
                Our expert ACP cladding services in Dubai specialize in aluminum composite panel cladding, facade solutions, and custom ACP 
                cladding for commercial, residential, and industrial applications across Dubai and the UAE.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Get Free Quote
                </Link>
                <Link 
                  href="/portfolio"
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-center"
                >
                  View Portfolio
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
              Advanced ACP cladding in UAE with superior installation technology and complete weather resistance for exceptional facade solutions across Dubai.
            </p>
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

      {/* Applications Section */}
      <section className="py-20 bg-slate-800" aria-labelledby="applications-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="applications-heading" className="text-4xl font-bold mb-6">
              ACP Cladding <span className="text-orange-500">Applications UAE</span>
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive ACP cladding in UAE solutions for diverse architectural and building facade requirements across Dubai
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

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for Professional ACP Cladding in UAE?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get expert ACP cladding in UAE with weather resistance and superior installation quality. 
            Contact us for detailed consultation and competitive quotes for your ACP cladding requirements in Dubai.
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
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 text-center inline-block"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}