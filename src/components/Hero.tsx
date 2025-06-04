'use client'

import { useState, useEffect } from 'react'
import { Users, ChevronDown, Play, Award, Clock } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    // Trigger slide animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16 md:pt-24 lg:pt-32">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40 animate-pulse"></div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-transparent to-blue-500/20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-slate-900/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12 md:py-16 lg:py-20">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          
          {/* Company Badge */}
          <div className={`inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8 backdrop-blur-sm transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
            <span className="text-orange-400 font-medium text-xs sm:text-sm">Dubai&apos;s Premier Metal Fabrication</span>
          </div>

          {/* Main Heading with Slide Animations */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            {/* PREMIUM - Slide from Left */}
            <div className="overflow-hidden">
              <span className={`block font-light transition-all duration-1000 ease-out ${
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
              }`}>
                PREMIUM
              </span>
            </div>
            
            {/* METAL FABRICATION - Slide from Right */}
            <div className="overflow-hidden">
              <span className={`gradient-text font-black transition-all duration-1000 ease-out delay-300 ${
                isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}>
                METAL FABRICATION
              </span>
            </div>
            
            {/* IN DUBAI - Slide from Left */}
            <div className="overflow-hidden">
              <span className={`block text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl mt-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 ease-out delay-600 ${
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
              }`}>
                IN DUBAI
              </span>
            </div>
          </h1>

          {/* Subtitle - Fade in */}
          <div className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto font-light leading-relaxed transition-all duration-1000 delay-900 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="mb-2 sm:mb-4">
              Precision craftsmanship meets cutting-edge technology.
              <span className="text-orange-400 font-medium"> Excellence in every cut, weld, and finish.</span>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-400">
              Specialized in Laser Cutting • Bending • Sheering • Custom Metal Works
            </p>
          </div>

          {/* CTA Buttons - Scale in */}
          <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 delay-1200 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 shadow-lg w-full sm:w-auto justify-center">
              Explore Our Services
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform" />
            </button>
            <button className="group bg-transparent border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 flex items-center gap-3 backdrop-blur-sm w-full sm:w-auto justify-center">
              <Play className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              Watch Our Work
            </button>
          </div>

          {/* Stats Grid - Stagger animation */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className={`group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 hover:scale-105 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '1400ms' }}>
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-orange-500/20 rounded-full">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 group-hover:text-orange-400 transition-colors">500+</h3>
              <p className="text-gray-300 font-medium text-sm sm:text-base">Projects Completed</p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">Across UAE & GCC</p>
            </div>
            
            <div className={`group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '1600ms' }}>
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-blue-500/20 rounded-full">
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 group-hover:text-blue-400 transition-colors">15+</h3>
              <p className="text-gray-300 font-medium text-sm sm:text-base">Years Experience</p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">Industry Expertise</p>
            </div>
            
            <div className={`group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white/10 hover:border-green-500/30 transition-all duration-300 hover:scale-105 sm:col-span-1 col-span-1 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '1800ms' }}>
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-green-500/20 rounded-full">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 group-hover:text-green-400 transition-colors">100%</h3>
              <p className="text-gray-300 font-medium text-sm sm:text-base">Client Satisfaction</p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">Quality Guaranteed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-2000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}>
        <div className="animate-bounce">
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-white/60" />
        </div>
        <div className="text-white/40 text-xs mt-1 sm:mt-2">Scroll Down</div>
      </div>
    </section>
  )
}