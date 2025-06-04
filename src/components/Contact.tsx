'use client'

import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const services = [
    'Glass Installation',
    'Aluminium Installation',
    'Metal Cladding',
  ]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null,
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form')
      }
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      })
      
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been received.'
      })
      
      // Refresh the page after showing success message for 2 seconds
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to submit form'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })
}



return (
    <section id="contact" className="min-h-screen py-20 bg-slate-900 text-white pt-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact <span className="text-orange-500">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? Get in touch with our expert team 
            for a free consultation and quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition-colors">
                <div className="flex items-center gap-4 mb-3">
                  <Phone className="w-8 h-8 text-orange-500" />
                  <h3 className="text-xl font-bold">Phone</h3>
                </div>
                <p className="text-gray-300 mb-2">+971 50 413 2803</p>
                <p className="text-sm text-gray-400">24/7 Support Available</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition-colors">
                <div className="flex items-center gap-4 mb-3">
                  <Mail className="w-8 h-8 text-orange-500" />
                  <h3 className="text-xl font-bold">Email</h3>
                </div>
                <p className="text-gray-300 mb-2">shojahanaa@bondmetalsvalue.com</p>
                <p className="text-sm text-gray-400">Quick Response Guaranteed</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition-colors">
                <div className="flex items-center gap-4 mb-3">
                  <MapPin className="w-8 h-8 text-orange-500" />
                  <h3 className="text-xl font-bold">Location</h3>
                </div>
                <p className="text-gray-300 mb-2">Dubai Industrial Area</p>
                <p className="text-sm text-gray-400">United Arab Emirates</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition-colors">
                <div className="flex items-center gap-4 mb-3">
                  <Clock className="w-8 h-8 text-orange-500" />
                  <h3 className="text-xl font-bold">Working Hours</h3>
                </div>
                <p className="text-gray-300 mb-1">Monday - Friday: 7:00 AM - 6:00 PM</p>
                <p className="text-gray-300 mb-2">Saturday: 8:00 AM - 2:00 PM</p>
                <p className="text-sm text-gray-400">Sunday: Closed</p>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Emergency Services</h3>
              <p className="mb-4">24/7 urgent fabrication support available for critical projects</p>
              <a href="tel:+971504132803" className="inline-flex items-center gap-2 bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                <Phone className="w-4 h-4" />
                Call Emergency Line
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                    placeholder="+971 XX XXX XXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Service Required</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-orange-500 focus:outline-none"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none resize-none"
                  placeholder="Please describe your project requirements..."
                />
              </div>

              {submitStatus.type && (
                <div className={`p-4 rounded-lg ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-500/20 text-green-200' 
                    : 'bg-red-500/20 text-red-200'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}