'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { 
  ArrowLeft, 
  ArrowRight,
  Calendar, 
  Clock, 
  User, 
  Heart, 
  Share2, 
  MessageCircle, 
  Eye, 
  Tag,
  CheckCircle,
  MapPin,
  Users,
  DollarSign,
  Mail,
  BookOpen,
  Building2
} from 'lucide-react'

// Define post type
type BlogPost = {
  id: number
  title: string
  slug: string
  excerpt: string
  category: string
  author: string
  authorRole: string
  authorBio: string
  publishDate: string
  readTime: string
  image: string
  client: string
  projectDetails: {
    duration: string
    location: string
    team: string
    year: string
    value: string
  }
  tags: string[]
  highlights: string[]
  content: string
  featured?: boolean
  views: number
  likes: number
  comments: number
  relatedPosts?: string[]
}

export default function BlogPostClient({ post }: { post: BlogPost }) {
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(post.likes)

  const handleLikeToggle = () => {
    setIsLiked(!isLiked)
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href
      })
    } else {
      // Fallback - copy URL to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <article className="pt-32 pb-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto mb-12">
          {/* Category Tag */}
          <div className="flex items-center gap-4 mb-6">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 backdrop-blur-sm">
              <Tag className="w-4 h-4 text-orange-500" />
              <span className="text-orange-500 font-medium text-sm capitalize">
                {post.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </span>
            </div>
            {post.featured && (
              <div className="inline-flex items-center gap-2 bg-white/10 border border-slate-700 rounded-full px-4 py-2 backdrop-blur-sm">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-300 font-medium text-sm">Featured Article</span>
              </div>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-medium text-white">{post.author}</div>
                <div className="text-sm text-gray-400">{post.authorRole}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-orange-500" />
                {new Date(post.publishDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-500" />
                {post.readTime}
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-orange-500" />
                {post.views.toLocaleString()} views
              </div>
            </div>
          </div>

          {/* Project Details Card */}
          <div className="mb-8 p-6 bg-slate-800/50 rounded-lg border border-slate-700">
            <h2 className="text-lg font-semibold text-white mb-4">Project Details</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-400">Location</p>
                  <p className="font-medium text-white">{post.projectDetails.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-400">Team</p>
                  <p className="font-medium text-white">{post.projectDetails.team}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-400">Duration</p>
                  <p className="font-medium text-white">{post.projectDetails.duration}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-400">Year</p>
                  <p className="font-medium text-white">{post.projectDetails.year}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-400">Client</p>
                  <p className="font-medium text-white">{post.client}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-400">Project Value</p>
                  <p className="font-medium text-white">{post.projectDetails.value}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Actions */}
          <div className="flex items-center gap-4 pb-8 border-b border-slate-800">
            <button 
              onClick={handleLikeToggle}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                isLiked 
                  ? "bg-orange-500 text-white" 
                  : "bg-white/10 text-gray-400 hover:bg-orange-500/20 hover:text-orange-400 border border-slate-700"
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? "fill-white" : ""}`} />
              {likeCount}
            </button>
            
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg border border-slate-700">
              <MessageCircle className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400">{post.comments} comments</span>
            </div>

            <button 
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 text-gray-400 hover:bg-orange-500/20 hover:text-orange-400 rounded-lg font-medium transition-all duration-300 border border-slate-700 hover:border-orange-500"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative h-64 sm:h-96 md:h-[500px] rounded-lg overflow-hidden border border-slate-700">
            <Image 
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Main Content Container */}
        <div className="max-w-4xl mx-auto">
          {/* Project Highlights */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-orange-500" />
              Project Highlights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {post.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-4 bg-slate-800 p-4 rounded-lg border border-slate-700">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                  </div>
                  <span className="text-white">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-orange max-w-none mb-12">
            <div 
              className="text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Tags */}
          <div className="mb-12">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Tag className="w-5 h-5 text-orange-500" />
              Related Topics
            </h3>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag, index) => (
                <Link
                  key={index}
                  href={`/blog?tag=${encodeURIComponent(tag.toLowerCase().replace(/\s+/g, '-'))}`}
                  className="px-4 py-2 bg-orange-500/20 text-orange-400 rounded-lg text-sm font-medium hover:bg-orange-500/30 transition-colors cursor-pointer border border-orange-500/30 hover:border-orange-500"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mb-12 bg-white/10 rounded-lg border border-slate-700 p-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold text-lg mb-2">About {post.author}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{post.authorBio}</p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Contact Author
                </Link>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-orange-500" />
                Related Articles
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Show related posts placeholders */}
                {[1, 2].map((_, index) => (
                  <div key={index} className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-orange-500 transition-all duration-300 hover:-translate-y-1">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                      <div className="absolute inset-0 bg-slate-800/20 group-hover:bg-slate-800/40 transition-colors"></div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors line-clamp-2 leading-tight">
                        Related Article {index + 1}
                      </h4>
                      <p className="text-gray-400 text-sm mb-3 line-clamp-2 leading-relaxed">
                        Related content description would go here.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-orange-500 group-hover:text-orange-400 transition-colors text-sm font-medium">
                          Read Article
                        </div>
                        <ArrowRight className="w-4 h-4 text-orange-500 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-8 text-center text-white">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Building className="w-6 h-6" />
              <h3 className="text-2xl font-bold">Need Similar Solutions for Your Project?</h3>
            </div>
            <p className="mb-6 opacity-90 max-w-2xl mx-auto">
              Contact Bond Metal for professional {post.category.replace(/-/g, ' ')} services. 
              Our expert team is ready to deliver the same quality results for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Get Free Quote
              </Link>
              <Link 
                href="/portfolio"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                View More Projects
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .prose h2 {
          color: white;
          font-size: 1.75rem;
          font-weight: bold;
          margin: 2.5rem 0 1.25rem 0;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #f97316;
        }
        
        .prose h3 {
          color: #fb923c;
          font-size: 1.375rem;
          font-weight: bold;
          margin: 2rem 0 1rem 0;
        }
        
        .prose p {
          margin: 1.25rem 0;
          line-height: 1.8;
        }
        
        .prose ul, .prose ol {
          margin: 1.5rem 0;
          padding-left: 1.5rem;
        }
        
        .prose li {
          margin: 0.75rem 0;
          line-height: 1.6;
        }
        
        .prose strong {
          color: #fb923c;
          font-weight: 600;
        }
        
        .prose ul li::marker {
          color: #f97316;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </article>
  )
}

// Additional icon components
function Star(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function Building(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  )
}