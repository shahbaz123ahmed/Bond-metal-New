'use client'

import { BlogPost } from './page'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowLeft, Tag, Eye, Heart, MessageCircle } from 'lucide-react'

interface BlogPostClientProps {
  post: BlogPost
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  return (
    <main className="bg-slate-900 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900 z-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl mx-auto">
            {/* Back to Blog */}
            <div className="mb-8">
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </div>
            
            {/* Article Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                <Tag className="w-4 h-4 text-orange-500" />
                <span className="text-orange-500 font-medium text-sm">
                  {post.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-orange-500" />
                  <span>{new Date(post.publishDate).toLocaleDateString('en-US', { 
                    year: 'numeric', month: 'long', day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-orange-500" />
                  <span>{post.author}</span>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {post.excerpt}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div 
                  className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-orange-500 prose-strong:text-white prose-ul:text-gray-300 prose-ol:text-gray-300"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-slate-700">
                  <h3 className="text-xl font-bold text-white mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Link
                        key={index}
                        href={`/blog?tag=${tag.toLowerCase().replace(/\s+/g, '-')}`}
                        className="px-3 py-1 bg-slate-800 text-gray-300 rounded-md text-sm hover:bg-orange-500/20 hover:text-orange-400 transition-colors border border-slate-600 hover:border-orange-500/40"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  {/* Author Info */}
                  <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white">{post.author}</h3>
                        <p className="text-sm text-orange-500">{post.authorRole}</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">{post.authorBio}</p>
                  </div>

                  {/* Project Details */}
                  {post.projectDetails && (
                    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                      <h3 className="text-xl font-bold text-white mb-4">Project Details</h3>
                      <div className="space-y-3">
                        <div>
                          <span className="text-sm text-gray-400">Client:</span>
                          <p className="text-white font-medium">{post.client}</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-400">Duration:</span>
                          <p className="text-white font-medium">{post.projectDetails.duration}</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-400">Location:</span>
                          <p className="text-white font-medium">{post.projectDetails.location}</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-400">Team:</span>
                          <p className="text-white font-medium">{post.projectDetails.team}</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-400">Project Value:</span>
                          <p className="text-white font-medium">{post.projectDetails.value}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Key Highlights */}
                  {post.highlights && (
                    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                      <h3 className="text-xl font-bold text-white mb-4">Key Highlights</h3>
                      <ul className="space-y-2">
                        {post.highlights.map((highlight, index) => (
                          <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Article Stats */}
                  <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h3 className="text-xl font-bold text-white mb-4">Article Stats</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-400">Views</span>
                        </div>
                        <span className="text-white font-medium">{post.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Heart className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-400">Likes</span>
                        </div>
                        <span className="text-white font-medium">{post.likes}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <MessageCircle className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-400">Comments</span>
                        </div>
                        <span className="text-white font-medium">{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Related Articles
            </h2>
            <div className="text-center">
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                View All Articles
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}