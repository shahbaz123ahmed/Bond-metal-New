'use client'

import { Zap, Wrench, Scissors, Hammer, Shield, Award, CheckCircle, ArrowRight } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Zap,
      title: "ACP Cladding",
      description: "Precision laser cutting with state-of-the-art fiber laser technology for complex designs and tight tolerances.",
      features: ["High precision cutting ±0.1mm", "Complex geometries", "Minimal material waste", "Fast turnaround times"],
      applications: ["Architectural panels", "Industrial components", "Decorative elements"],
      href: "/services/acp-cladding"
    },
    {
      icon: Wrench,
      title: "Fabrication Services",
      description: "Expert metal bending services using advanced press brake technology for accurate angle formations.",
      features: ["Custom angle bending", "Multiple material types", "Consistent quality", "Large format capability"],
      applications: ["Structural frames", "Custom brackets", "Architectural features"],
      href: "/services/sheet-bending-uae"
    },
    {
      icon: Scissors,
      description: "Professional metal shearing services for straight cuts with exceptional edge quality and precision.",
      features: ["Clean straight cuts", "Various thicknesses", "Burr-free edges", "High-volume processing"],
      applications: ["Sheet metal preparation", "Blanking operations", "Custom sizing"],
      href: "/services/installation"
    },
    {
      icon: Hammer,
      title: "Custom Fabrication",
      description: "Complete custom metal fabrication solutions from concept design to finished product installation.",
      features: ["Design consultation", "Prototype development", "Full manufacturing", "Installation support"],
      applications: ["Industrial equipment", "Architectural elements", "Custom machinery"],
      href: "/services/custom-fabrication"
    },
    {
      icon: Shield,
      title: "Welding Services",
      description: "Professional welding services including TIG, MIG, and specialized welding techniques by certified welders.",
      features: ["Certified welders", "Multiple techniques", "Structural welding", "Repair services"],
      applications: ["Structural work", "Equipment repair", "Custom assemblies"],
      href: "/services/welding-services"
    },
    {
      icon: Award,
      title: "Quality Control",
      description: "Comprehensive quality control and inspection services ensuring the highest standards in every project.",
      features: ["Dimensional inspection", "Material testing", "Surface analysis", "Compliance verification"],
      applications: ["Project validation", "Standards compliance", "Quality assurance"],
      href: "/services/quality-control"
    }
  ]

  return (
    <section className="min-h-screen py-20 bg-slate-900 text-white pt-32">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-orange-500">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive metal fabrication services delivered with precision, quality, 
            and expertise that sets industry standards across Dubai and the UAE.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={index} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-orange-500 transition-all duration-300 group">
                <div className="flex items-center justify-center w-16 h-16 bg-orange-500 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-orange-500">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Applications</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.applications.map((app, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-xs">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <a href={service.href} className="flex items-center gap-2 text-orange-500 font-semibold hover:gap-4 transition-all group-hover:text-orange-400">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            )
          })}
        </div>

        

        {/* Process Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our <span className="text-orange-500">Process</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your requirements and project scope" },
              { step: "02", title: "Design", desc: "Creating detailed plans and technical drawings" },
              { step: "03", title: "Fabrication", desc: "Precision manufacturing using advanced equipment" },
              { step: "04", title: "Delivery", desc: "Quality inspection and timely project delivery" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-gray-400">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12">
         
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full font-semibold transition-all duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}