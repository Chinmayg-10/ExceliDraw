'use client';
import Link from 'next/link';
import {
  Pencil,
  Users,
  Download,
  Shapes,
  Zap,
  Cloud,
  Github,
  Menu,
  X,
  ChevronRight,
  Check,
  Quote,
} from 'lucide-react';
import { useState } from 'react';
import Signup from './signup/page';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: Pencil,
      title: 'Freehand Drawing',
      description: 'Draw naturally with smooth strokes and unlimited canvas space.'
    },
    {
      icon: Users,
      title: 'Real-time Collaboration',
      description: 'Work together with your team in real-time, no matter where they are.'
    },
    {
      icon: Shapes,
      title: 'Shapes & Diagrams',
      description: 'Create professional diagrams with pre-built shapes and connectors.'
    },
    {
      icon: Download,
      title: 'Export as PNG/SVG',
      description: 'Download your creations in high quality formats for any use case.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance for smooth drawing experience on any device.'
    },
    {
      icon: Cloud,
      title: 'Cloud Sync',
      description: 'Your drawings are automatically saved and synced across all devices.'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Open Canvas',
      description: 'Start with a blank canvas or choose from templates. No sign-up required.'
    },
    {
      number: '02',
      title: 'Draw & Collaborate',
      description: 'Use our intuitive tools to sketch, diagram, and collaborate in real-time.'
    },
    {
      number: '03',
      title: 'Share & Export',
      description: 'Share your work with a link or export in multiple formats instantly.'
    }
  ];

  const testimonials = [
    {
      quote: 'This is hands down the best drawing tool for remote teams. The real-time collaboration is seamless!',
      author: 'Sarah Chen',
      role: 'Product Designer at TechCorp',
      avatar: 'SC'
    },
    {
      quote: 'I use it daily for brainstorming sessions. The simplicity and power combined make it perfect.',
      author: 'Michael Rodriguez',
      role: 'Engineering Manager',
      avatar: 'MR'
    },
    {
      quote: 'Finally, a drawing app that just works. Clean interface, powerful features, no bloat.',
      author: 'Emma Thompson',
      role: 'UX Researcher',
      avatar: 'ET'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Pencil className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                DrawFlow
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
                Features
              </a>
              <a href="#how-it-works" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
                How it Works
              </a>
              <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
                Pricing
              </a>
              <a href="https://github.com" className="text-slate-600 hover:text-slate-900 transition-colors font-medium flex items-center space-x-1">
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <Link href={"signup"}>
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all shadow-md hover:shadow-lg font-medium">
                Try Now
              </button>
              </Link>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-3">
              <a href="#features" className="block text-slate-600 hover:text-slate-900 transition-colors font-medium">
                Features
              </a>
              <a href="#how-it-works" className="block text-slate-600 hover:text-slate-900 transition-colors font-medium">
                How it Works
              </a>
              <a href="#pricing" className="block text-slate-600 hover:text-slate-900 transition-colors font-medium">
                Pricing
              </a>
              <a href="https://github.com" className="block text-slate-600 hover:text-slate-900 transition-colors font-medium">
                GitHub
              </a>
              <Link href={"signup"}>
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all shadow-md font-medium">
                Try Now
              </button>
              </Link>
              
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-cyan-50/50 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 text-sm font-medium">
              <Zap className="w-4 h-4" />
              <span>New: Real-time collaboration now live!</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Draw, Collaborate, and{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Share Ideas
              </span>{' '}
              Instantly
            </h1>

            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              A powerful, minimalist whiteboard and drawing tool for teams who want to visualize ideas,
              create diagrams, and collaborate in real-time without the complexity.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href={"signup"}>
                  <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl font-semibold text-lg flex items-center space-x-2 cursor-pointer">
                    <span>Start Drawing</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              <button className="bg-white text-slate-700 px-8 py-4 rounded-xl hover:bg-slate-50 transition-all shadow-md hover:shadow-lg font-semibold text-lg border border-slate-200">
                View Demo
              </button>
            </div>

            <p className="text-sm text-slate-500 mt-6">
              No credit card required • Free forever • No installation needed
            </p>
          </div>

          {/* Mock Canvas Preview */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
              {/* Toolbar */}
              <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Pencil className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center">
                    <Shapes className="w-5 h-5 text-slate-600" />
                  </div>
                  <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-slate-600" />
                  </div>
                </div>
                <div className="h-8 w-px bg-slate-300" />
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-red-500 rounded-full" />
                  <div className="w-8 h-8 bg-blue-500 rounded-full" />
                  <div className="w-8 h-8 bg-green-500 rounded-full" />
                </div>
              </div>

              {/* Canvas Area */}
              <div className="relative h-96 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
                {/* Mock Drawing Elements */}
                <div className="relative w-full h-full flex items-center justify-center p-8">
                  <svg className="w-full h-full" viewBox="0 0 600 400">
                    {/* Rectangle */}
                    <rect x="50" y="80" width="150" height="100" fill="none" stroke="#3B82F6" strokeWidth="3" rx="8" />
                    <text x="125" y="135" textAnchor="middle" fill="#1E293B" fontSize="16" fontWeight="600">Ideas</text>

                    {/* Circle */}
                    <circle cx="450" cy="130" r="60" fill="none" stroke="#06B6D4" strokeWidth="3" />
                    <text x="450" y="135" textAnchor="middle" fill="#1E293B" fontSize="16" fontWeight="600">Goals</text>

                    {/* Arrow */}
                    <path d="M 200 130 L 390 130" stroke="#64748B" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    <defs>
                      <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="#64748B" />
                      </marker>
                    </defs>

                    {/* Text */}
                    <text x="295" y="115" textAnchor="middle" fill="#64748B" fontSize="14">Collaborate</text>

                    {/* Diamond */}
                    <path d="M 125 280 L 180 240 L 125 200 L 70 240 Z" fill="none" stroke="#10B981" strokeWidth="3" />
                    <text x="125" y="245" textAnchor="middle" fill="#1E293B" fontSize="14" fontWeight="600">Start</text>

                    {/* Freehand */}
                    <path d="M 350 250 Q 380 220, 420 240 T 480 250" fill="none" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {/* Bottom toolbar */}
              <div className="bg-slate-50 border-t border-slate-200 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <Users className="w-4 h-4" />
                  <span>3 collaborators</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 bg-slate-200 rounded text-slate-700 text-sm font-medium">100%</button>
                  <button className="px-3 py-1 bg-slate-200 rounded text-slate-700 text-sm font-medium">−</button>
                  <button className="px-3 py-1 bg-slate-200 rounded text-slate-700 text-sm font-medium">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Everything you need to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                create and collaborate
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Simple yet powerful features designed for teams who value clarity and speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Get started in{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                three simple steps
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From idea to execution in seconds. No learning curve, just start creating.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200" />

            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <ChevronRight className="hidden md:block absolute -right-10 top-5 text-slate-300 w-8 h-8" />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href={"signup"}>
                <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl font-semibold text-lg inline-flex items-center space-x-2 cursor-pointer">
              <span>Try it yourself</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            </Link>
            
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              A workspace that{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                feels natural
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Clean interface. Powerful tools. Zero distractions.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
              <div className="grid md:grid-cols-3">
                <div className="bg-slate-50 p-8 border-r border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center space-x-2">
                    <Pencil className="w-5 h-5 text-blue-600" />
                    <span>Drawing Tools</span>
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2 text-slate-600">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Pen, highlighter, eraser</span>
                    </li>
                    <li className="flex items-start space-x-2 text-slate-600">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Shapes and connectors</span>
                    </li>
                    <li className="flex items-start space-x-2 text-slate-600">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Text and arrows</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-8 border-r border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center space-x-2">
                    <Users className="w-5 h-5 text-cyan-600" />
                    <span>Collaboration</span>
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2 text-slate-600">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Real-time cursors</span>
                    </li>
                    <li className="flex items-start space-x-2 text-slate-600">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Comments and feedback</span>
                    </li>
                    <li className="flex items-start space-x-2 text-slate-600">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Share via link</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-8">
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center space-x-2">
                    <Download className="w-5 h-5 text-blue-600" />
                    <span>Export & Sync</span>
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2 text-slate-600">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>PNG, SVG, PDF export</span>
                    </li>
                    <li className="flex items-start space-x-2 text-slate-600">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Auto-save to cloud</span>
                    </li>
                    <li className="flex items-start space-x-2 text-slate-600">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Version history</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Loved by{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                creative teams
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See what our users have to say about DrawFlow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all"
              >
                <Quote className="w-10 h-10 text-blue-500 mb-4" />
                <p className="text-slate-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.author}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20" />
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to bring your ideas to life?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of teams already using DrawFlow to collaborate and create amazing work.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href={"signin"}>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl font-semibold text-lg">
              Get Started Free
            </button>
            </Link>
            
            <button className="bg-blue-800/50 text-white px-8 py-4 rounded-xl hover:bg-blue-800/70 transition-all shadow-lg font-semibold text-lg border border-blue-400/30">
              Contact Sales
            </button>
          </div>
          <p className="text-sm text-blue-200 mt-6">
            No credit card required • Free plan available forever
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Pencil className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">DrawFlow</span>
              </div>
              <p className="text-slate-400 text-sm">
                The simple, powerful drawing and collaboration tool for modern teams.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://github.com" className="hover:text-white transition-colors flex items-center space-x-2">
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-400">
              © 2026 DrawFlow. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
