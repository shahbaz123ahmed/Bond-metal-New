'use client'

import { useState } from 'react'
import { Calendar, MapPin, Users, ExternalLink, Grid, List } from 'lucide-react'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')

  const categories = [
    { id: 'all', name: 'All Projects', count: 12 },
    { id: 'industrial', name: 'Industrial', count: 5 },
    { id: 'architectural', name: 'Architectural', count: 4 },
    { id: 'automotive', name: 'Automotive', count: 2 },
    { id: 'marine', name: 'Marine', count: 1 }
  ]

  const projects = [
    {
      id: 1,
      title: "Dubai Metro Station Framework",
      category: 'industrial',
      description: "Custom steel framework for Dubai Metro expansion project featuring precision-cut structural components and architectural elements.",
      image: "/api/placeholder/800/600",
      client: "Dubai Metro Authority",
      duration: "6 months",
      location: "Dubai, UAE",
      team: "15 specialists",
      year: "2024",
      value: "AED 2.5M",
      status: "Completed",
      tags: ["Steel Framework", "Large Scale", "Public Transport", "Structural"],
      highlights: ["Custom structural design", "Precision welding", "On-time delivery", "Safety compliance"]
    },
    {
      id: 2,
      title: "Luxury Hotel Facade Elements",
      category: 'architectural',
      description: "Decorative metal panels and structural elements for 5-star hotel facade renovation in Dubai Marina.",
      image: "/api/placeholder/800/600",
      client: "Marina Hotels Group",
      duration: "4 months",
      location: "Dubai Marina",
      team: "12 specialists",
      year: "2024",
      value: "AED 1.8M",
      status: "Completed",
      tags: ["Decorative Panels", "Luxury", "Facade", "Architectural"],
      highlights: ["Premium finish", "Complex geometries", "Weather resistance", "Aesthetic excellence"]
    },
    {
      id: 3,
      title: "Racing Car Chassis Components",
      category: 'automotive',
      description: "High-precision aluminum chassis components for Formula racing vehicles with aerospace-grade specifications.",
      image: "/api/placeholder/800/600",
      client: "UAE Racing Team",
      duration: "3 months",
      location: "Dubai Autodrome",
      team: "8 specialists",
      year: "2023",
      value: "AED 800K",
      status: "Completed",
      tags: ["Racing", "Precision", "Aluminum", "Performance"],
      highlights: ["Ultra-lightweight", "Precision tolerances", "Performance testing", "Race-proven"]
    },
    {
      id: 4,
      title: "Industrial Equipment Housing",
      category: 'industrial',
      description: "Heavy-duty equipment enclosures for oil and gas processing facility with corrosion-resistant coating.",
      image: "/api/placeholder/800/600",
      client: "Petrotech Industries",
      duration: "5 months",
      location: "Abu Dhabi",
      team: "18 specialists",
      year: "2023",
      value: "AED 3.2M",
      status: "Completed",
      tags: ["Oil & Gas", "Heavy Duty", "Corrosion Resistant", "Industrial"],
      highlights: ["Hazardous environment", "Corrosion protection", "Safety standards", "Robust design"]
    }
  ]

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section className="min-h-screen py-20 bg-slate-900 text-white pt-32">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-orange-500">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of completed projects showcasing precision engineering, 
            innovative solutions, and excellence in metal fabrication across diverse industries.
          </p>
        </div>

        {/* Filters and View Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-6">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-orange-400'
                }`}
              >
                {category.name}
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* View Controls */}
          <div className="flex items-center gap-4">
            <div className="flex bg-slate-800 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-orange-500 text-white' : 'text-gray-400'}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-orange-500 text-white' : 'text-gray-400'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid/List */}
        <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 lg:grid-cols-2 gap-8' : 'space-y-8'} mb-16`}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-orange-500 transition-all duration-300 group ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`relative ${viewMode === 'list' ? 'w-1/3' : 'h-64'} overflow-hidden`}>
                <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center">
                  <span className="text-gray-400 font-semibold">Project Image</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Completed' ? 'bg-green-500 text-white' : 'bg-orange-500 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className={`p-8 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <div>
                      <p className="text-xs text-gray-400">Duration</p>
                      <p className="font-semibold text-sm">{project.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <div>
                      <p className="text-xs text-gray-400">Location</p>
                      <p className="font-semibold text-sm">{project.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-orange-500" />
                    <div>
                      <p className="text-xs text-gray-400">Team</p>
                      <p className="font-semibold text-sm">{project.team}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-orange-500" />
                    <div>
                      <p className="text-xs text-gray-400">Value</p>
                      <p className="font-semibold text-sm">{project.value}</p>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Highlights</h4>
                  <ul className="space-y-1">
                    {project.highlights.slice(0, 3).map((highlight, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="flex items-center gap-3 text-orange-500 font-semibold hover:gap-4 transition-all group-hover:text-orange-400">
                  View Case Study
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mb-16">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold border border-slate-600 hover:border-orange-500 transition-all">
            Load More Projects
          </button>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Have a Project in Mind?
          </h3>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can bring your vision to life with our expertise 
            and commitment to excellence.
          </p>
          <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  )
}