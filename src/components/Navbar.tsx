'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X, Phone, Mail } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({
    cladding: false,
    fabrication: false,
    projects: false,
    installation: false
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest('.dropdown-container')) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const claddingServices = [
    { name: 'ACP Cladding In UAE', href: '/services/acp-cladding.uae/', description: 'Aluminum Composite Panel solutions' },
    { name: 'Aluminium Cladding in Dubai', href: '/services/aluminium-cladding', description: 'Premium aluminum cladding systems' },
    { name: 'Stainless Steel Cladding', href: '/services/stainless-steel-cladding', description: 'Durable stainless steel solutions' },
  ]

  const fabricationServices = [
    { name: 'Sheet Bending in U.A.E', href: '/services/sheet-bending-uae', description: 'Custom sheet metal works' },
    { name: 'Steel Rolling', href: '/services/steel-rolling-uae', description: 'Structural steel solutions' },
    { name: 'Brackets Fabrication', href: '/services/brackets-fabrication-uae', description: 'Precision aluminum works' },
    { name: 'Stainless Steel Fabrication', href: '/services/stainless-steel-fabrication', description: 'Premium stainless solutions' },
    { name: 'Glass Fabrication In UAE', href: '/services/glass-fabrication.uae', description: 'Precision CNC services' },
    { name: 'Aluminium Fabrication Works In UAE', href: '/services/aluminium-fabrication-uae', description: 'Professional welding solutions' },
    { name: 'Handrails Fabrication', href: '/services/handrail-fabrication-uae', description: 'Safety and architectural handrails' },
    { name: 'Bollard Design', href: '/services/bollard-design-uae', description: 'provide physical security' },
    { name: 'Fabrication and Installation of Handrails and Bollards. Dubai and Abu Dhabi', href: '/services/handrails-bollards-fabrication-uae', description: 'provide physical security' },
    { name: 'Canopy Fabrication', href: '/services/canopy-fabrication-uae', description: 'Weather protection canopy solutions' },
    { name: 'Car Park Shade & Tensile Structures', href: '/services/car-park-shade-tensile-uae', description: 'UV protection parking solutions' },
    { name: 'Pergola Making', href: '/services/pergola-making-uae', description: 'Custom outdoor living structures' }
  ]

  const projectCategories = [
    { name: 'Alluminium and Glass Works', href: '/services/aluminium-and-glass-works', description: 'Glass Partitions & Facades' },
    { name: 'ACP Cladding Works in Dubai', href: '/services/acp-cladding-works-in-dubai', description: 'Commercial Building Elevation & Decorative ACP Panels' },
  ]

  const installationServices = [
    { name: 'Glass Installation', href: '/services/glass-installation-uae', description: 'Professional glazing installation' },
    { name: 'Aluminium Installation', href: '/services/aluminium-installation-uae', description: 'Metal structure installation' },
    { name: 'Fabrication and Installation of ACP and Metal Cladding-Dubai and Abu Dhabi', href: '/services/acp-and-metal-cladding', description: 'Complete Fabrication & Installation Services' },
  ]

  const handleDropdownClick = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const closeDropdown = () => {
    setActiveDropdown(null)
  }

  const toggleMobileDropdown = (dropdown: 'cladding' | 'fabrication' | 'projects' | 'installation') => {
    setMobileDropdownOpen(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }))
  }

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-slate-800 text-white py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-orange-500" />
              <span>+971 50 413 2803</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-orange-500" />
              <span>info@bondmetal.com</span>
            </div>
          </div>
          <div className="text-orange-500">
            Dubai & Abu Dhabi | Premium Metal Solutions
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-200 ${
        isScrolled ? 'bg-white/95 shadow-lg' : 'bg-white/90'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="text-2xl font-bold transition-all duration-200 group-hover:scale-105">
                <span className="text-slate-900 transition-colors duration-200 group-hover:text-slate-700">Bond</span>
                <span className="text-orange-500 transition-all duration-200 group-hover:text-orange-600">Metal</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Cladding Dropdown */}
              <div className="relative dropdown-container">
                <button 
                  onClick={() => handleDropdownClick('cladding')}
                  className="flex items-center text-slate-700 hover:text-orange-500 font-medium transition-colors duration-200"
                  aria-expanded={activeDropdown === 'cladding'}
                  aria-haspopup="true"
                >
                  Cladding
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                    activeDropdown === 'cladding' ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {activeDropdown === 'cladding' && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-4 z-50">
                    <div className="px-4 pb-3 border-b border-gray-100">
                      <h3 className="font-semibold text-slate-900 mb-1">Cladding Solutions</h3>
                      <p className="text-sm text-gray-600">Premium exterior cladding systems</p>
                    </div>
                    <div className="py-2">
                      {claddingServices.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-4 py-3 hover:bg-orange-50 transition-colors duration-200 group"
                          onClick={closeDropdown}
                        >
                          <div className="font-medium text-slate-900 group-hover:text-orange-600">
                            {service.name}
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            {service.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Fabrication Services Dropdown */}
              <div className="relative dropdown-container">
                <button 
                  onClick={() => handleDropdownClick('fabrication')}
                  className="flex items-center text-slate-700 hover:text-orange-500 font-medium transition-colors duration-200"
                  aria-expanded={activeDropdown === 'fabrication'}
                  aria-haspopup="true"
                >
                  Fabrication Services
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                    activeDropdown === 'fabrication' ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {activeDropdown === 'fabrication' && (
                  <div className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-xl shadow-xl border border-gray-100 py-4 z-50">
                    <div className="px-4 pb-3 border-b border-gray-100">
                      <h3 className="font-semibold text-slate-900 mb-1">Fabrication Services</h3>
                      <p className="text-sm text-gray-600">Custom metal fabrication solutions</p>
                    </div>
                    <div className="py-2 grid grid-cols-2 gap-x-4 max-h-96 overflow-y-auto">
                      {fabricationServices.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-4 py-3 hover:bg-orange-50 transition-colors duration-200 group"
                          onClick={closeDropdown}
                        >
                          <div className="font-medium text-slate-900 group-hover:text-orange-600 text-sm">
                            {service.name}
                          </div>
                          <div className="text-xs text-gray-600 mt-1">
                            {service.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Our Projects Dropdown */}
              <div className="relative dropdown-container">
                <button 
                  onClick={() => handleDropdownClick('projects')}
                  className="flex items-center text-slate-700 hover:text-orange-500 font-medium transition-colors duration-200"
                  aria-expanded={activeDropdown === 'projects'}
                  aria-haspopup="true"
                >
                  Our Projects
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                    activeDropdown === 'projects' ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {activeDropdown === 'projects' && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-4 z-50">
                    <div className="px-4 pb-3 border-b border-gray-100">
                      <h3 className="font-semibold text-slate-900 mb-1">Our Projects</h3>
                      <p className="text-sm text-gray-600">Showcase of completed projects</p>
                    </div>
                    <div className="py-2">
                      {projectCategories.map((category) => (
                        <Link
                          key={category.href}
                          href={category.href}
                          className="block px-4 py-3 hover:bg-orange-50 transition-colors duration-200 group"
                          onClick={closeDropdown}
                        >
                          <div className="font-medium text-slate-900 group-hover:text-orange-600">
                            {category.name}
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            {category.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Installation & Maintenance Dropdown */}
              <div className="relative dropdown-container">
                <button 
                  onClick={() => handleDropdownClick('installation')}
                  className="flex items-center text-slate-700 hover:text-orange-500 font-medium transition-colors duration-200"
                  aria-expanded={activeDropdown === 'installation'}
                  aria-haspopup="true"
                >
                  Installation & Maintenance
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                    activeDropdown === 'installation' ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {activeDropdown === 'installation' && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-4 z-50">
                    <div className="px-4 pb-3 border-b border-gray-100">
                      <h3 className="font-semibold text-slate-900 mb-1">Installation & Maintenance</h3>
                      <p className="text-sm text-gray-600">Professional installation and support</p>
                    </div>
                    <div className="py-2">
                      {installationServices.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-4 py-3 hover:bg-orange-50 transition-colors duration-200 group"
                          onClick={closeDropdown}
                        >
                          <div className="font-medium text-slate-900 group-hover:text-orange-600">
                            {service.name}
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            {service.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link 
                href="/about" 
                className="text-slate-700 hover:text-orange-500 font-medium transition-colors duration-200"
              >
                About Us
              </Link>

              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 focus:outline-none focus:ring-2 focus:ring-orange-400 rounded"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-700" />
              ) : (
                <Menu className="w-6 h-6 text-slate-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              {/* Cladding Mobile Dropdown */}
              <div className="space-y-2">
                <button
                  onClick={() => toggleMobileDropdown('cladding')}
                  className="flex justify-between items-center w-full font-medium text-slate-900 py-2 hover:text-orange-500 transition-colors duration-200"
                >
                  Cladding
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    mobileDropdownOpen.cladding ? 'rotate-180' : ''
                  }`} />
                </button>
                {mobileDropdownOpen.cladding && (
                  <div className="pl-4 space-y-1">
                    {claddingServices.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block text-slate-600 hover:text-orange-500 py-1 transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Fabrication Mobile Dropdown */}
              <div className="space-y-2">
                <button
                  onClick={() => toggleMobileDropdown('fabrication')}
                  className="flex justify-between items-center w-full font-medium text-slate-900 py-2 hover:text-orange-500 transition-colors duration-200"
                >
                  Fabrication Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    mobileDropdownOpen.fabrication ? 'rotate-180' : ''
                  }`} />
                </button>
                {mobileDropdownOpen.fabrication && (
                  <div className="pl-4 space-y-1 max-h-60 overflow-y-auto">
                    {fabricationServices.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block text-slate-600 hover:text-orange-500 py-1 transition-colors duration-200 text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Projects Mobile Dropdown */}
              <div className="space-y-2">
                <button
                  onClick={() => toggleMobileDropdown('projects')}
                  className="flex justify-between items-center w-full font-medium text-slate-900 py-2 hover:text-orange-500 transition-colors duration-200"
                >
                  Our Projects
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    mobileDropdownOpen.projects ? 'rotate-180' : ''
                  }`} />
                </button>
                {mobileDropdownOpen.projects && (
                  <div className="pl-4 space-y-1">
                    {projectCategories.map((category) => (
                      <Link
                        key={category.href}
                        href={category.href}
                        className="block text-slate-600 hover:text-orange-500 py-1 transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Installation Mobile Dropdown */}
              <div className="space-y-2">
                <button
                  onClick={() => toggleMobileDropdown('installation')}
                  className="flex justify-between items-center w-full font-medium text-slate-900 py-2 hover:text-orange-500 transition-colors duration-200"
                >
                  Installation & Maintenance
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    mobileDropdownOpen.installation ? 'rotate-180' : ''
                  }`} />
                </button>
                {mobileDropdownOpen.installation && (
                  <div className="pl-4 space-y-1">
                    {installationServices.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block text-slate-600 hover:text-orange-500 py-1 transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                href="/about" 
                className="block text-slate-700 hover:text-orange-500 font-medium py-2 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>

              <Link 
                href="/contact" 
                className="block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold text-center mt-4 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}