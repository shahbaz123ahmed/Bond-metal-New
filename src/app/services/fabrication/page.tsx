import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Shield, 
  CheckCircle, 
  Clock, 
  Gauge, 
  Factory, 
  Settings, 
  Layers, 
  Users, 
  Award, 
  ChevronRight,
  Ruler,
  Scissors,
  Box,
  PenTool,
  Wrench,
  Zap
} from 'lucide-react';

export default function FabricationPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-slate-900 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40"></div>
          <Image
            src="/images/services/fabrication-hero.jpg" 
            alt="Metal Fabrication Services"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <Wrench className="w-4 h-4 text-orange-500" />
              <span className="text-orange-500 font-medium text-sm">Our Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Premium Metal <span className="text-orange-500">Fabrication</span> Services
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Precision engineering and expert craftsmanship for all your metal fabrication needs across the UAE. From concept to completion, we deliver excellence.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
              >
                Request Quote
                <ChevronRight className="w-4 h-4" />
              </Link>
              
              <Link 
                href="/portfolio"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 py-3 px-6 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2"
              >
                View Portfolio
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-4">
              <Settings className="w-4 h-4 text-orange-500" />
              <span className="text-orange-500 font-medium text-sm">Our Expertise</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Metal Fabrication Solutions
            </h2>
            
            <p className="text-lg text-gray-600">
              From structural steel to architectural metals, our state-of-the-art facility and skilled team deliver precision fabrication services for projects of any scale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6">
                <Scissors className="w-7 h-7 text-orange-500" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Precision Cutting & Shearing
              </h3>
              
              <p className="text-gray-600 mb-5">
                State-of-the-art CNC cutting and shearing services for accurate, clean cuts across various metal types and thicknesses.
              </p>
              
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700">Laser cutting precision</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700">Plasma cutting capabilities</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700">Water jet services</span>
                </li>
              </ul>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6">
                <PenTool className="w-7 h-7 text-orange-500" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Bending & Forming
              </h3>
              
              <p className="text-gray-600 mb-5">
                Expert metal bending and forming services using hydraulic press brakes and rollers for precise angles and shapes.
              </p>
              
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700">CNC press brake forming</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700">Roll bending capabilities</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700">Custom angle fabrication</span>
                </li>
              </ul>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6">
                <Layers className="w-7 h-7 text-orange-500" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Welding & Assembly
              </h3>
              
              <p className="text-gray-600 mb-5">
                Specialized welding services for various metals, ensuring strong, durable connections and professional finishes.
              </p>
              
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700">MIG, TIG & arc welding</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700">Stainless steel specialists</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700">Certified welders</span>
                </li>
              </ul>
            </div>
            
            {/* Service 4 */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6">
                <Box className="w-7 h-7 text-orange-500" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Structural Steel Fabrication
              </h3>
              
              <p className="text-gray-600 mb-5">
                Complete structural steel fabrication services for commercial and industrial construction projects.
              </p>
              
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700">Beams, columns & trusses</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700">Mezzanine structures</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700">Industrial platforms</span>
                </li>
              </ul>
            </div>
            
            {/* Service 5 */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6">
                <Ruler className="w-7 h-7 text-orange-500" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Architectural Metal Work
              </h3>
              
              <p className="text-gray-600 mb-5">
                Custom architectural metal elements that combine form and function for distinctive building features.
              </p>
              
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700">Decorative railings & guards</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700">Custom staircase elements</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700">Facade components</span>
                </li>
              </ul>
            </div>
            
            {/* Service 6 */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="w-7 h-7 text-orange-500" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Finishing Services
              </h3>
              
              <p className="text-gray-600 mb-5">
                Comprehensive metal finishing services that enhance durability, appearance, and performance.
              </p>
              
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700">Powder coating</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700">Galvanizing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700">Surface polishing & brushing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-4">
              <Zap className="w-4 h-4 text-orange-500" />
              <span className="text-orange-500 font-medium text-sm">Our Process</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Streamlined Fabrication Process
            </h2>
            
            <p className="text-lg text-gray-600">
              Our systematic approach ensures quality, timeliness, and precision at every step of your metal fabrication project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-lg p-8 shadow-sm relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg text-white font-bold text-lg">
                1
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 mt-4">
                Consultation & Design
              </h3>
              
              <p className="text-gray-600">
                We begin by understanding your project requirements, providing engineering input and creating detailed fabrication designs.
              </p>
              
              <div className="mt-5 pt-5 border-t border-gray-100">
                <div className="flex items-center text-orange-500 font-medium">
                  <span>Initial assessment and blueprints</span>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white rounded-lg p-8 shadow-sm relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg text-white font-bold text-lg">
                2
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 mt-4">
                Fabrication & Production
              </h3>
              
              <p className="text-gray-600">
                Our skilled technicians and state-of-the-art equipment transform raw materials into precisely fabricated metal components.
              </p>
              
              <div className="mt-5 pt-5 border-t border-gray-100">
                <div className="flex items-center text-orange-500 font-medium">
                  <span>Manufacturing with precision</span>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white rounded-lg p-8 shadow-sm relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg text-white font-bold text-lg">
                3
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 mt-4">
                Quality Control & Delivery
              </h3>
              
              <p className="text-gray-600">
                Every fabricated component undergoes rigorous quality control before safe delivery to your project site.
              </p>
              
              <div className="mt-5 pt-5 border-t border-gray-100">
                <div className="flex items-center text-orange-500 font-medium">
                  <span>Inspection and installation support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4 text-orange-500" />
              <span className="text-orange-500 font-medium text-sm">Why Choose Us</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Unmatched Expertise & Capability
            </h2>
            
            <p className="text-lg text-gray-300">
              Bond Metal brings decades of experience, cutting-edge technology, and unwavering commitment to quality to every fabrication project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-5">
                <Award className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                Quality Assurance
              </h3>
              
              <p className="text-gray-300">
                ISO 9001:2015 certified processes ensuring consistent quality standards across all fabrication projects.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-5">
                <Users className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                Expert Team
              </h3>
              
              <p className="text-gray-300">
                Highly skilled metalworkers, welders, and engineers with specialized training and years of experience.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-5">
                <Gauge className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                Modern Equipment
              </h3>
              
              <p className="text-gray-300">
                State-of-the-art CNC machines, laser cutters, and welding equipment for precision fabrication.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-5">
                <Clock className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                Timely Delivery
              </h3>
              
              <p className="text-gray-300">
                Proven track record of on-time project completion, even under tight deadlines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-4">
              <Factory className="w-4 h-4 text-orange-500" />
              <span className="text-orange-500 font-medium text-sm">Our Work</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Featured Fabrication Projects
            </h2>
            
            <p className="text-lg text-gray-600">
              Explore some of our most impressive metal fabrication projects across the UAE.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group overflow-hidden rounded-lg shadow-md">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="/images/projects/structural-steel.jpg" 
                  alt="Commercial Building Steel Structure"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-5 left-5 text-white">
                  <div className="text-sm text-orange-300 mb-1">Dubai, UAE</div>
                  <h3 className="text-lg font-bold">Commercial Building Steel Structure</h3>
                </div>
              </div>
              <div className="bg-white p-4 border-t border-gray-100">
                <p className="text-gray-600 text-sm">
                  Complete structural steel fabrication for a 10-story commercial building in Downtown Dubai.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    Structural Steel
                  </div>
                  <Link 
                    href="/portfolio"
                    className="text-orange-500 text-sm font-medium flex items-center gap-1"
                  >
                    View Details
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="group overflow-hidden rounded-lg shadow-md">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="/images/projects/railing-systems.jpg" 
                  alt="Custom Stainless Steel Railings"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-5 left-5 text-white">
                  <div className="text-sm text-orange-300 mb-1">Abu Dhabi, UAE</div>
                  <h3 className="text-lg font-bold">Luxury Hotel Railing Systems</h3>
                </div>
              </div>
              <div className="bg-white p-4 border-t border-gray-100">
                <p className="text-gray-600 text-sm">
                  Custom fabricated stainless steel railing systems for a 5-star hotel on Abu Dhabi Corniche.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    Architectural Metals
                  </div>
                  <Link 
                    href="/portfolio"
                    className="text-orange-500 text-sm font-medium flex items-center gap-1"
                  >
                    View Details
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="group overflow-hidden rounded-lg shadow-md">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="/images/projects/metal-facade.jpg" 
                  alt="Decorative Metal Facade Elements"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-5 left-5 text-white">
                  <div className="text-sm text-orange-300 mb-1">Sharjah, UAE</div>
                  <h3 className="text-lg font-bold">Decorative Metal Facade Elements</h3>
                </div>
              </div>
              <div className="bg-white p-4 border-t border-gray-100">
                <p className="text-gray-600 text-sm">
                  Custom fabricated decorative metal screens and facade elements for a cultural center.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    Decorative Metals
                  </div>
                  <Link 
                    href="/portfolio"
                    className="text-orange-500 text-sm font-medium flex items-center gap-1"
                  >
                    View Details
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300"
            >
              View All Projects
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-orange-500 rounded-xl p-8 md:p-12 overflow-hidden relative">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Fabrication Project?
              </h2>
              
              <p className="text-lg text-white/90 mb-8 max-w-2xl">
                Contact our team today for a consultation and free quote. We&apos;ll help bring your metal fabrication project to life with precision and excellence.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-orange-600 hover:bg-gray-100 py-3 px-6 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2"
                >
                  Request Quote
                  <ChevronRight className="w-4 h-4" />
                </Link>
                
                <Link 
                  href="/services"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 py-3 px-6 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2"
                >
                  Explore More Services
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-orange-400 rounded-full opacity-70"></div>
            <div className="absolute right-20 -bottom-10 w-32 h-32 bg-orange-600 rounded-full opacity-70"></div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export const metadata = {
  title: 'Metal Fabrication Services - Bond Metal | UAE',
  description: 'Premium metal fabrication services across UAE including cutting, welding, structural steel fabrication, and architectural metal work. Professional quality and timely delivery.',
  keywords: 'metal fabrication, steel fabrication, UAE, Dubai, structural steel, architectural metals, welding services, metal cutting, bending, finishing',
};