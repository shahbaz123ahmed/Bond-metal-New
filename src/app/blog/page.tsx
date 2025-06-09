'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  Tag, 
  Eye, 
  Heart, 
  MessageCircle,
  ChevronRight,
  User
} from 'lucide-react'

// Define the blog post type
type BlogPost = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  publishDate: string;
  readTime: string;
  image: string;
  tags: string[];
  views: number;
  likes: number;
  comments: number;
}

// All your blog posts data - moved outside component to avoid dependency issues
const allBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Premium Aluminum Facade Solutions for Modern Architecture',
    slug: 'premium-aluminum-facade-solutions',
    excerpt: 'Discover how our aluminum facade systems are transforming commercial buildings across Dubai and Abu Dhabi with cutting-edge design and energy efficiency.',
    category: 'aluminum-works',
    author: 'Ahmed Hassan',
    publishDate: '2023-09-15',
    readTime: '6 min read',
    image: '/images/bond4.webp',
    tags: ['Aluminum Facade', 'Energy Efficiency', 'Commercial Buildings'],
    views: 2450,
    likes: 78,
    comments: 23
  },
  {
    id: 2,
    title: 'The Evolution of ACP Cladding in UAE Construction',
    slug: 'evolution-acp-cladding-uae',
    excerpt: 'How aluminum composite panel cladding has evolved to meet the unique demands of UAE climate conditions and architectural preferences.',
    category: 'acp-cladding',
    author: 'Sarah Al Mansoori',
    publishDate: '2023-10-02',
    readTime: '8 min read',
    image: '/images/cladding-acp.jpg',
    tags: ['ACP', 'UAE Construction', 'Material Innovation'],
    views: 1870,
    likes: 64,
    comments: 19
  },
  {
    id: 3,
    title: 'Sustainable Metal Solutions for Eco-Friendly Buildings',
    slug: 'sustainable-metal-solutions',
    category: 'metal-fabrication',
    author: 'Mohammed Al Kaabi',
    publishDate: '2023-11-05',
    readTime: '7 min read',
    image: '/images/bond7.webp',
    excerpt: 'How innovative metal fabrication techniques are revolutionizing sustainable construction.',
    tags: ['Metal Fabrication', 'Sustainability', 'Green Building'],
    views: 1954,
    likes: 83,
    comments: 27
  },
  {
    id: 4,
    title: 'Benefits of Custom Metal Fabrication for UAE Projects',
    slug: 'benefits-custom-metal-fabrication',
    excerpt: 'Explore the advantages of choosing custom metal fabrication for your construction and architectural projects in the UAE.',
    category: 'metal-fabrication',
    author: 'Mohammed Ali',
    publishDate: '2023-09-25',
    readTime: '5 min read',
    image: '/images/bond6.webp',
    tags: ['Custom Fabrication', 'Construction', 'UAE Projects'],
    views: 1180,
    likes: 42,
    comments: 11
  },
  {
    id: 5,
    title: 'Fire Safety Standards for Modern ACP Cladding in UAE',
    slug: 'fire-safety-acp-cladding',
    excerpt: 'Understanding the latest fire safety regulations for aluminum composite panel cladding in UAE construction and how to ensure compliance.',
    category: 'acp-cladding',
    author: 'Sarah Al Mansoori',
    publishDate: '2023-12-10',
    readTime: '6 min read',
    image: '/images/acp-cladding.webp',
    tags: ['Fire Safety', 'ACP', 'Building Regulations', 'UAE Standards'],
    views: 1650,
    likes: 58,
    comments: 15
  }
]

// Separate component that uses useSearchParams
function BlogContent() {
  const searchParams = useSearchParams()
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([])
  const [activeCategory, setActiveCategory] = useState<string>('All Posts')
  const [activeTag, setActiveTag] = useState<string>('')

  // Filter posts based on URL parameters
  useEffect(() => {
    const category = searchParams.get('category')
    const tag = searchParams.get('tag')

    let filtered = [...allBlogPosts]

    if (category && category !== '') {
      const categoryKey = category.toLowerCase().replace(/\s+/g, '-')
      filtered = filtered.filter(post => post.category === categoryKey)
      setActiveCategory(category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '))
    } else {
      setActiveCategory('All Posts')
    }

    if (tag && tag !== '') {
      // Convert URL tag back to the format used in posts
      const tagName = tag.replace(/-/g, ' ')
      
      // Filter posts that have this exact tag (case-insensitive)
      filtered = filtered.filter(post => 
        post.tags.some(postTag => 
          postTag.toLowerCase().replace(/\s+/g, '-') === tag.toLowerCase()
        )
      )
      
      // Set active tag for display (capitalize first letter of each word)
      setActiveTag(tagName.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' '))
    } else {
      setActiveTag('')
    }

    setFilteredPosts(filtered)
  }, [searchParams])

  // Initialize with all posts
  useEffect(() => {
    if (filteredPosts.length === 0 && !searchParams.get('category') && !searchParams.get('tag')) {
      setFilteredPosts(allBlogPosts)
    }
  }, [filteredPosts, searchParams])

  const featuredPosts = allBlogPosts.filter((post, index) => index < 2)
  const displayPosts = filteredPosts.length > 0 ? filteredPosts : allBlogPosts

  const categories = [
    { name: 'All Posts', count: allBlogPosts.length, slug: '' },
    { name: 'Metal Fabrication', count: allBlogPosts.filter(p => p.category === 'metal-fabrication').length, slug: 'metal-fabrication' },
    { name: 'ACP Cladding', count: allBlogPosts.filter(p => p.category === 'acp-cladding').length, slug: 'acp-cladding' },
    { name: 'Aluminum Works', count: allBlogPosts.filter(p => p.category === 'aluminum-works').length, slug: 'aluminum-works' }
  ]

  const recentPosts = allBlogPosts.slice(0, 3)

  return (
    <>
      {/* Hero Section - Show filter status */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900 z-10"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/blog/blog-pattern-bg.jpg"
            alt="Background Pattern"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <Tag className="w-4 h-4 text-orange-500" />
              <span className="text-orange-500 font-medium text-sm">
                {activeTag ? `Tag: ${activeTag}` : activeCategory !== 'All Posts' ? `Category: ${activeCategory}` : 'Industry Insights'}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="text-white">BOND</span>
              <span className="text-orange-500"> METAL</span> Blog
            </h1>
            
            {(activeCategory !== 'All Posts' || activeTag) && (
              <div className="mb-6">
                <p className="text-xl text-gray-300 mb-4">
                  {activeTag ? `Posts tagged with "${activeTag}"` : `Posts in ${activeCategory}`}
                </p>
                <Link 
                  href="/blog"
                  className="text-orange-500 hover:text-orange-400 transition-colors"
                >
                  ← Back to all posts
                </Link>
              </div>
            )}
            
            <p className="text-xl text-gray-300 mb-10">
              Expert insights, project showcases, and industry trends in metal fabrication,
              ACP cladding, and architectural solutions across the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* Show Featured Posts only when not filtering */}
      {activeCategory === 'All Posts' && !activeTag && (
        <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
              <h2 className="text-3xl font-bold text-white">Featured <span className="text-orange-500">Articles</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <div key={post.id} className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10">
                  <div className="relative h-64 overflow-hidden">
                    <Image 
                      src={post.image} 
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-500/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
                        {post.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </span>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                        {post.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-300 space-x-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-orange-500" />
                          <span>{new Date(post.publishDate).toLocaleDateString('en-US', { 
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-orange-500" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-400 mb-6">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm text-white">{post.author}</span>
                      </div>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-orange-500 font-medium hover:text-orange-400 transition-colors"
                      >
                        Read Article
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar: Categories */}
            <div className="lg:w-1/4">
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-6">Categories</h3>
                
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <Link
                        href={category.slug ? `/blog?category=${category.slug}` : '/blog'}
                        className={`text-gray-300 hover:text-orange-500 transition-colors ${
                          activeCategory === category.name ? 'text-orange-500 font-medium' : ''
                        }`}
                      >
                        {category.name}
                      </Link>
                      <span className="bg-slate-700 text-gray-400 text-xs rounded-full px-2 py-1">
                        {category.count}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-700">
                  <h3 className="text-xl font-bold text-white mb-6">Recent Posts</h3>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <div key={post.id} className="group flex gap-3 items-start">
                        <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden relative">
                          <Image src={post.image} alt={post.title} fill className="object-cover" />
                        </div>
                        <div>
                          <Link 
                            href={`/blog/${post.slug}`}
                            className="text-sm font-medium text-white hover:text-orange-500 transition-colors line-clamp-2"
                          >
                            {post.title}
                          </Link>
                          <div className="text-xs text-gray-400 mt-1">
                            {new Date(post.publishDate).toLocaleDateString('en-US', {
                              year: 'numeric', month: 'short', day: 'numeric'
                            })}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-700">
                  <h3 className="text-xl font-bold text-white mb-6">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                   
                    <Link 
                      href="/blog?tag=acp" 
                      className={`bg-slate-700 hover:bg-orange-500/20 text-gray-300 hover:text-orange-500 px-3 py-1 rounded-md text-sm transition-colors border border-transparent hover:border-orange-500/40 ${
                        activeTag === 'acp' ? 'bg-orange-500/20 text-orange-500 border-orange-500/40' : ''
                      }`}
                    >
                      ACP
                    </Link>
                    <Link 
                      href="/blog?tag=aluminum-facade" 
                      className={`bg-slate-700 hover:bg-orange-500/20 text-gray-300 hover:text-orange-500 px-3 py-1 rounded-md text-sm transition-colors border border-transparent hover:border-orange-500/40 ${
                        activeTag === 'aluminum facade' ? 'bg-orange-500/20 text-orange-500 border-orange-500/40' : ''
                      }`}
                    >
                      Aluminum Facade
                    </Link>
                    
                    <Link 
                      href="/blog?tag=uae-construction" 
                      className={`bg-slate-700 hover:bg-orange-500/20 text-gray-300 hover:text-orange-500 px-3 py-1 rounded-md text-sm transition-colors border border-transparent hover:border-orange-500/40 ${
                        activeTag === 'uae construction' ? 'bg-orange-500/20 text-orange-500 border-orange-500/40' : ''
                      }`}
                    >
                      UAE Construction
                    </Link>
                    <Link 
                      href="/blog?tag=sustainability" 
                      className={`bg-slate-700 hover:bg-orange-500/20 text-gray-300 hover:text-orange-500 px-3 py-1 rounded-md text-sm transition-colors border border-transparent hover:border-orange-500/40 ${
                        activeTag === 'sustainability' ? 'bg-orange-500/20 text-orange-500 border-orange-500/40' : ''
                      }`}
                    >
                      Sustainability
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content: Blog Posts */}
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-white">
                  {activeTag ? `Posts tagged "${activeTag}"` : 
                   activeCategory !== 'All Posts' ? `${activeCategory} Articles` : 
                   'Latest Articles'}
                </h2>
              </div>
              
              {displayPosts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-400 text-lg">No posts found for the selected filter.</p>
                  <Link 
                    href="/blog"
                    className="text-orange-500 hover:text-orange-400 transition-colors mt-4 inline-block"
                  >
                    View all posts
                  </Link>
                </div>
              ) : (
                <div className="space-y-8">
                  {displayPosts.map((post) => (
                    <div key={post.id} className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
                      <div className="md:flex">
                        <div className="md:w-1/3 relative h-64 md:h-auto overflow-hidden">
                          <Image 
                            src={post.image} 
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent md:bg-gradient-to-t md:from-slate-900 md:via-slate-900/50 md:to-transparent"></div>
                          <div className="absolute top-4 left-4">
                            <span className="bg-orange-500/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
                              {post.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                            </span>
                          </div>
                        </div>
                        
                        <div className="md:w-2/3 p-6">
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                            {post.title}
                          </h3>
                          
                          <div className="flex items-center text-sm text-gray-400 space-x-4 mb-4">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-4 h-4 text-orange-500" />
                              <span>{new Date(post.publishDate).toLocaleDateString('en-US', { 
                                year: 'numeric', month: 'short', day: 'numeric'
                              })}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-4 h-4 text-orange-500" />
                              <span>{post.readTime}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <User className="w-4 h-4 text-orange-500" />
                              <span>{post.author}</span>
                            </div>
                          </div>
                          
                          <p className="text-gray-400 mb-6">{post.excerpt}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags.map((tag, tagIndex) => (
                              <Link
                                key={tagIndex}
                                href={`/blog?tag=${tag.toLowerCase().replace(/\s+/g, '-')}`}
                                className="px-3 py-1 bg-slate-700 text-gray-300 rounded-md text-xs hover:bg-orange-500/20 hover:text-orange-400 transition-colors hover:border-orange-500/40 border border-transparent"
                              >
                                #{tag}
                              </Link>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1 text-gray-400">
                                <Eye className="w-4 h-4" />
                                <span className="text-sm">{post.views}</span>
                              </div>
                              <div className="flex items-center gap-1 text-gray-400">
                                <Heart className="w-4 h-4" />
                                <span className="text-sm">{post.likes}</span>
                              </div>
                              <div className="flex items-center gap-1 text-gray-400">
                                <MessageCircle className="w-4 h-4" />
                                <span className="text-sm">{post.comments}</span>
                              </div>
                            </div>
                            
                            <Link 
                              href={`/blog/${post.slug}`}
                              className="inline-flex items-center gap-2 text-orange-500 font-medium hover:text-orange-400 transition-colors"
                            >
                              Read More
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 md:p-12 overflow-hidden relative">
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-orange-400 rounded-full opacity-30"></div>
            <div className="absolute right-20 -bottom-10 w-32 h-32 bg-orange-600 rounded-full opacity-30"></div>
            
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Subscribe to Our Newsletter
              </h2>
              
              <p className="text-lg text-white/90 mb-8">
                Get the latest articles, case studies, and industry insights delivered right to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 bg-white text-slate-900 placeholder-slate-500 rounded-lg px-4 py-3 focus:outline-none"
                />
                
                <button className="bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
                  Subscribe
                </button>
              </div>
              
              <p className="text-sm text-white/70 mt-4">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need Expert Metal Fabrication Services?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              From concept to completion, our team delivers exceptional quality and craftsmanship on every project.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2"
              >
                Get a Free Quote
                <ChevronRight className="w-4 h-4" />
              </Link>
              
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// Loading component for Suspense fallback
function BlogLoading() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-slate-700 rounded-lg mb-6 w-64 mx-auto"></div>
              <div className="h-16 bg-slate-700 rounded-lg mb-6"></div>
              <div className="h-6 bg-slate-700 rounded-lg w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BlogPage() {
  return (
    <main className="bg-slate-900 min-h-screen">
      <Navbar />
      <Suspense fallback={<BlogLoading />}>
        <BlogContent />
      </Suspense>
    </main>
  )
}