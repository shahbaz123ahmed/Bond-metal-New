import Link from 'next/link'
import { ArrowRight, Settings, Award } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Metal Fabrication Services in UAE | Bond Metal Solutions',
  description: 'Expert metal fabrication services in Dubai and UAE including laser cutting, metal bending, shearing, welding, and aluminium installation. Quality craftsmanship for industrial and commercial projects.',
  keywords: 'metal fabrication UAE, laser cutting Dubai, metal bending UAE, welding services Dubai, aluminium installation UAE, sheet metal Dubai, custom fabrication UAE',
  openGraph: {
    title: 'Professional Metal Fabrication Services in UAE',
    description: 'Expert metal fabrication services in Dubai and UAE including laser cutting, metal bending, shearing, welding, and aluminium installation.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bondmetal.com/services'
  }
}

export default function ServicesPage() {
  const services = [
  
   
  
    {
      id: 'aluminium-installation',
      title: 'Aluminium Installation',
      description: 'Professional aluminium installation services for curtain walls, facades, and structural systems.',
      icon: Settings,
      features: ['Curtain wall systems', 'Facade installation', 'Structural frameworks', 'UAE climate optimized'],
      href: '/services/aluminium-installation'
    },
    {
      id: 'custom-fabrication',
      title: 'Custom Fabrication',
      description: 'Bespoke metal fabrication solutions tailored to your specific project requirements.',
      icon: Award,
      features: ['Custom design', 'Prototype development', 'Quality assurance', 'On-time delivery'],
      href: '/services/custom-fabrication'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Bond Metal Solutions",
            "description": "Professional metal fabrication services in UAE",
            "url": "https://bondmetal.com/services",
            "telephone": "+971 50 413 2803",
            "email": "info@bondmetal.com",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "AE",
              "addressRegion": "Dubai"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Metal Fabrication Services",
              "itemListElement": services.map(service => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.description
                }
              }))
            }
          })
        }}
      />

      {/* Navigation Space */}
      <div className="h-24"></div>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professional <span className="text-orange-500">Metal Fabrication</span> Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Expert metal fabrication services in Dubai and UAE. From precision laser cutting to 
              complex aluminium installations, we deliver quality craftsmanship for industrial and commercial projects.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const IconComponent = service.icon
                return (
                  <Link
                    key={service.id}
                    href={service.href}
                    className="group bg-slate-800 rounded-2xl p-8 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-slate-600"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-orange-500 p-3 rounded-xl group-hover:bg-orange-400 transition-colors">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-400">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center gap-2 text-orange-500 group-hover:text-orange-400 transition-colors">
                      <span className="font-semibold">Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Custom Metal Fabrication?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Get professional metal fabrication services with quality craftsmanship and timely delivery.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Quote Now
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}