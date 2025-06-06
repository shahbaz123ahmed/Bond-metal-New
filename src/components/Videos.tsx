'use client'

import { useState, useRef, useEffect } from 'react'
import { Volume2, VolumeX, Maximize2, Clock, Eye } from 'lucide-react'

export default function Videos() {
  const [activeVideo, setActiveVideo] = useState(0)
  const [isMuted, setIsMuted] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const videos = [
    {
      id: 1,
      title: "Working with Metals",
      description: "Advanced metalworking techniques and precision craftsmanship in our state-of-the-art facility.",
      thumbnail: "/videos/video1.mp4",
      videoUrl: "/videos/video1.mp4",
      duration: "2:45",
      category: "Manufacturing",
      highlights: ["Precision Cutting", "Expert Welding", "Quality Control"]
    },
    {
      id: 2,
      title: "Overview Cladding",
      description: "Comprehensive ACP cladding solutions from design to installation for modern architectural projects.",
      thumbnail: "/videos/video2.mp4",
      videoUrl: "/videos/video2.mp4",
      duration: "3:20",
      category: "Cladding",
      highlights: ["ACP Installation", "Weather Resistance", "Premium Finish"]
    },
    {
      id: 3,
      title: "Fabrication and Cladding Works",
      description: "Complete fabrication process showcasing our end-to-end capabilities and project execution.",
      thumbnail: "/videos/video3.mp4",
      videoUrl: "/videos/video3.mp4",
      duration: "4:15",
      category: "Complete Solutions",
      highlights: ["Full Process", "Project Management", "Quality Delivery"]
    },
     {
      id: 4,
      title: "Fabrication and Cladding Works",
      description: "Complete fabrication process showcasing our end-to-end capabilities and project execution.",
      thumbnail: "/videos/video4.mp4",
      videoUrl: "/videos/video4.mp4",
      duration: "4:15",
      category: "Complete Solutions",
      highlights: ["Full", " Management", " Delivery"]
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Auto-play when video comes into view
          if (videoRef.current) {
            videoRef.current.play().catch(error => {
              console.log("Autoplay prevented:", error)
            })
          }
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Auto-play when video changes
  useEffect(() => {
    if (videoRef.current && isVisible) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error)
      })
    }
  }, [activeVideo, isVisible])

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleVideoChange = (index: number) => {
    setActiveVideo(index)
  }

  return (
    <section id="videos" className="py-10 sm:py-16 md:py-20 bg-slate-900 text-white overflow-hidden" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <span className="text-orange-400 font-medium text-xs sm:text-sm">Watch Our Work</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            See Our <span className="text-orange-500">Expertise</span> in Action
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Experience the precision, quality, and innovation that defines Bond Metal through 
            our exclusive behind-the-scenes footage and project showcases.
          </p>
        </div>

        {/* Main Video Player - Made Smaller */}
        <div className={`mb-8 sm:mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700 shadow-2xl max-w-4xl mx-auto">
            
            {/* Video Container - Reduced size */}
            <div className="relative aspect-video bg-black">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src={videos[activeVideo].videoUrl}
                muted={isMuted}
                autoPlay
                playsInline
                loop
                poster={videos[activeVideo].thumbnail}
              />
              
              {/* Simplified Video Overlay - Only mute and fullscreen */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Top Controls - Only Volume and Fullscreen */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex gap-2">
                  <button
                    onClick={toggleMute}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    ) : (
                      <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    )}
                  </button>
                  <button className="w-8 h-8 sm:w-10 sm:h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors">
                    <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Video Info Panel */}
            <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-r from-slate-800 to-slate-700">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 sm:gap-6">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                    <span className="inline-block px-3 py-1 bg-orange-500 text-white rounded-full text-xs sm:text-sm font-semibold">
                      {videos[activeVideo].category}
                    </span>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm">{videos[activeVideo].duration}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
                    {videos[activeVideo].title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3 sm:mb-4">
                    {videos[activeVideo].description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {videos[activeVideo].highlights.map((highlight, index) => (
                      <span key={index} className="px-2 sm:px-3 py-1 bg-slate-600 text-gray-300 rounded-full text-xs sm:text-sm">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">Professional Quality</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Thumbnails */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {videos.map((video, index) => (
            <div
              key={video.id}
              onClick={() => handleVideoChange(index)}
              className={`relative group cursor-pointer transition-all duration-300 ${
                activeVideo === index 
                  ? 'ring-2 sm:ring-4 ring-orange-500 scale-105' 
                  : 'hover:scale-102 hover:ring-2 hover:ring-orange-500/50'
              }`}
            >
              <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-slate-800">
                <video
                  className="w-full h-full object-cover"
                  src={video.videoUrl}
                  muted
                  autoPlay
                  playsInline
                  loop
                  poster={video.thumbnail}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  {/* Video Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-orange-500 text-white rounded text-xs font-semibold">
                        {video.category}
                      </span>
                      <span className="text-white text-xs">{video.duration}</span>
                    </div>
                    <h4 className="text-white font-bold text-sm mb-1">{video.title}</h4>
                    <p className="text-gray-300 text-xs line-clamp-2 hidden sm:block">{video.description}</p>
                  </div>
                </div>
                
                {/* Active Indicator */}
                {activeVideo === index && (
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-500 rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { number: "3", label: "Video Showcases", icon: "🎬" },
            { number: "10+", label: "Minutes of Content", icon: "⏱️" },
            { number: "HD", label: "Quality Production", icon: "📹" },
            { number: "100%", label: "Real Projects", icon: "✅" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-3 sm:p-4 md:p-6 bg-slate-800 rounded-xl sm:rounded-2xl border border-slate-700 hover:border-orange-500 transition-colors">
              <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{stat.icon}</div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-500 mb-1 sm:mb-2">{stat.number}</div>
              <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  )
}