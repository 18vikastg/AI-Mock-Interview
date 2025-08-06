"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Head from 'next/head';
import Contact from '@/_components/Contact';
import Link from 'next/link';
import { 
  FaGithub, FaStar, FaCheckCircle, FaArrowRight, FaUsers, FaTrophy, FaBrain, 
  FaPlay, FaRocket, FaShieldAlt, FaClock, FaChartLine, FaMicrophone, FaVideo,
  FaLightbulb, FaGraduationCap, FaHandshake, FaQuoteLeft, FaInfinity,
  FaLinkedin, FaTwitter, FaDiscord
} from "react-icons/fa";

const page = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      text: "This AI interview coach is absolutely game-changing! I went from failing 5 interviews to landing offers from Google, Meta, and Microsoft. The personalized feedback was incredibly detailed and actionable.",
      name: "Sarah Chen",
      role: "Senior Software Engineer",
      company: "Google",
      avatar: "SC",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      text: "As someone with interview anxiety, this platform completely transformed my confidence. The AI felt so natural and the feedback helped me improve my storytelling. Got my dream PM role!",
      name: "Marcus Williams",
      role: "Product Manager",
      company: "Microsoft",
      avatar: "MW",
      gradient: "from-green-500 to-blue-600"
    },
    {
      text: "The technical interview practice was phenomenal. The AI adapted to my responses and asked increasingly complex follow-ups just like real interviews. Worth every penny!",
      name: "Priya Patel",
      role: "ML Engineer",
      company: "OpenAI",
      avatar: "PP",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const features = [
    {
      icon: FaBrain,
      title: "Advanced AI Interviewer",
      subtitle: "GPT-4 Powered Conversations",
      description: "Experience the most realistic interview simulations with our cutting-edge AI that adapts to your responses, asks relevant follow-ups, and maintains natural conversation flow.",
      benefits: ["Dynamic question generation", "Context-aware responses", "Industry-specific scenarios", "Behavioral & technical interviews"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: FaChartLine,
      title: "Real-Time Performance Analytics",
      subtitle: "Data-Driven Improvement",
      description: "Get instant, detailed feedback on every aspect of your performance with comprehensive analytics that track your progress over time.",
      benefits: ["Speech analysis & pacing", "Confidence scoring", "Answer quality assessment", "Improvement tracking"],
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50"
    },
    {
      icon: FaRocket,
      title: "Career Acceleration",
      subtitle: "Land Your Dream Job",
      description: "Join thousands of professionals who've 3x their interview success rate and landed roles at top companies worldwide.",
      benefits: ["95% success rate", "Average 40% salary increase", "30+ industries covered", "Executive coaching available"],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    }
  ];

  const stats = [
    { number: "50K+", label: "Successful Interviews", icon: FaTrophy },
    { number: "95%", label: "Success Rate", icon: FaChartLine },
    { number: "40%", label: "Avg Salary Increase", icon: FaRocket },
    { number: "24/7", label: "Available Practice", icon: FaClock }
  ];

  const companies = [
    "Google", "Microsoft", "Apple", "Meta", "Amazon", "Netflix", "Tesla", "Spotify", "Uber", "Airbnb"
  ];

  return (
    <div className={`bg-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Head>
        <title>InterviewAI - Master Any Interview with AI | Land Your Dream Job</title>
        <meta name="description" content="Revolutionary AI interview coach trusted by 50K+ professionals. Practice with GPT-4, get real-time feedback, and 3x your interview success rate. Start your free trial today!" />
        <meta property="og:title" content="InterviewAI - Master Any Interview with AI" />
        <meta property="og:description" content="Join 50K+ professionals who've transformed their careers with AI-powered interview coaching. 95% success rate guaranteed." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Floating Action Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 text-sm font-medium">
        🚀 Limited Time: Get 50% OFF Premium Plan - Only 48 hours left! 
        <Link href="/dashboard" className="underline ml-2 font-bold">Claim Now →</Link>
      </div>

      {/* Navigation */}
      <header className="sticky top-8 z-40 w-full bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl mx-auto mt-4 max-w-6xl shadow-xl">
        <div className="px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <FaBrain className="text-white text-lg" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  InterviewAI
                </span>
                <div className="text-xs text-purple-600 font-medium">BETA</div>
              </div>
            </div>
            
            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors font-medium relative group">
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-purple-600 transition-colors font-medium relative group">
                How It Works
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
              </a>
              <a href="#success-stories" className="text-gray-700 hover:text-purple-600 transition-colors font-medium relative group">
                Success Stories
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition-colors font-medium relative group">
                Pricing
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
              </a>
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/18vikastg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-3">
              <Link href="/login">
                <Button variant="ghost" className="text-gray-700 hover:text-purple-600 font-medium">
                  Sign In
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold">
                  Start Free Trial
                  <FaRocket className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto">
            {/* Announcement Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-3 border border-purple-200 shadow-lg">
                <FaRocket className="text-purple-600 w-4 h-4 mr-2" />
                <span className="text-sm font-semibold text-purple-800">Just launched: GPT-4 powered interviews</span>
                <span className="ml-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">NEW</span>
              </div>
            </div>

            <div className="text-center max-w-4xl mx-auto">
              {/* Main Headline */}
              <h1 className="text-6xl md:text-7xl font-black text-gray-900 leading-tight mb-8">
                Master Any
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent block">
                  Job Interview
                </span>
                <span className="text-4xl md:text-5xl text-gray-700 font-bold">with AI</span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
                The world's most advanced AI interview coach. Practice with 
                <span className="font-bold text-purple-600"> GPT-4</span>, get real-time feedback, and 
                <span className="font-bold text-pink-600"> 3x your success rate</span>. 
                Join 50,000+ professionals who've transformed their careers.
              </p>

              {/* Social Proof */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1,2,3,4,5].map(i => (
                      <div key={i} className={`w-10 h-10 rounded-full border-2 border-white ${i === 1 ? 'bg-gradient-to-r from-blue-500 to-purple-500' : i === 2 ? 'bg-gradient-to-r from-green-500 to-blue-500' : i === 3 ? 'bg-gradient-to-r from-purple-500 to-pink-500' : i === 4 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' : 'bg-gradient-to-r from-pink-500 to-red-500'} flex items-center justify-center text-white text-sm font-bold`}>
                        {i === 1 ? 'SC' : i === 2 ? 'MW' : i === 3 ? 'PP' : i === 4 ? 'JD' : 'AM'}
                      </div>
                    ))}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center space-x-1">
                      {[1,2,3,4,5].map(i => (
                        <FaStar key={i} className="text-yellow-400 w-4 h-4" />
                      ))}
                      <span className="text-sm font-bold text-gray-900 ml-2">4.9/5</span>
                    </div>
                    <p className="text-sm text-gray-600">from 12,000+ reviews</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-black text-gray-900">50,000+</div>
                  <p className="text-sm text-gray-600">Successful Interviews</p>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-black text-green-600">95%</div>
                  <p className="text-sm text-gray-600">Success Rate</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                <Link href="/dashboard">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                    Start Free Trial
                    <FaArrowRight className="ml-3 w-5 h-5" />
                  </Button>
                </Link>
                <button className="flex items-center text-gray-700 hover:text-purple-600 transition-colors group">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl mr-4 group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                    <FaPlay className="text-purple-600 ml-1" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-lg">Watch Demo</div>
                    <div className="text-sm text-gray-500">2 min overview</div>
                  </div>
                </button>
              </div>

              {/* Trusted by Companies */}
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-6 font-medium">TRUSTED BY PROFESSIONALS AT</p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                  {companies.map((company, index) => (
                    <div key={company} className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors">
                      {company}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${index === 0 ? 'from-yellow-400 to-orange-500' : index === 1 ? 'from-green-500 to-emerald-600' : index === 2 ? 'from-purple-500 to-pink-600' : 'from-blue-500 to-indigo-600'} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <stat.icon className="text-white text-2xl" />
                  </div>
                  <div className="text-4xl font-black text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-purple-100 rounded-full px-4 py-2 mb-6">
                <FaLightbulb className="text-purple-600 w-4 h-4 mr-2" />
                <span className="text-sm font-semibold text-purple-800">REVOLUTIONARY FEATURES</span>
              </div>
              <h2 className="text-5xl font-black text-gray-900 mb-6">
                Why InterviewAI is 
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Game-Changing</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We've rebuilt interview preparation from the ground up using cutting-edge AI technology. 
                Here's what makes us the #1 choice for ambitious professionals.
              </p>
            </div>

            {/* Features Grid */}
            <div className="space-y-24">
              {features.map((feature, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}>
                  {/* Feature Content */}
                  <div className="flex-1">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mr-4 shadow-lg`}>
                        <feature.icon className="text-white text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-black text-gray-900">{feature.title}</h3>
                        <p className="text-lg text-purple-600 font-semibold">{feature.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center">
                          <FaCheckCircle className="text-green-500 w-5 h-5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <Button className={`bg-gradient-to-r ${feature.gradient} hover:opacity-90 text-white px-8 py-3 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}>
                      Try This Feature
                      <FaArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>

                  {/* Feature Visual */}
                  <div className="flex-1">
                    <div className={`bg-gradient-to-br ${feature.bgGradient} rounded-3xl p-8 shadow-2xl border border-gray-200/50`}>
                      <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center`}>
                              <feature.icon className="text-white" />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">AI Interviewer</div>
                              <div className="text-sm text-gray-500">Online</div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <FaMicrophone className="text-green-500" />
                            <FaVideo className="text-blue-500" />
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="bg-gray-100 rounded-lg p-3">
                            <p className="text-sm text-gray-700">Tell me about a challenging project you worked on recently.</p>
                          </div>
                          <div className="bg-purple-100 rounded-lg p-3 ml-8">
                            <p className="text-sm text-gray-700">I led a team of 5 engineers to build a real-time analytics dashboard...</p>
                          </div>
                          <div className="bg-gray-100 rounded-lg p-3">
                            <p className="text-sm text-gray-700">That's impressive! How did you handle the technical challenges?</p>
                          </div>
                        </div>
                        
                        <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-green-800">Performance Score</span>
                            <span className="text-2xl font-bold text-green-600">92%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-32 bg-gradient-to-r from-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl font-black mb-6">
              From Nervous to Confident in
              <span className="block text-yellow-300">3 Simple Steps</span>
            </h2>
            <p className="text-xl mb-16 max-w-3xl mx-auto opacity-90">
              Our proven 3-step methodology has helped 50,000+ professionals land their dream jobs. 
              Here's exactly how it works.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  step: "01",
                  title: "AI Profile Setup",
                  description: "Tell our AI about your target role, experience level, and industry. We'll create a personalized interview strategy just for you.",
                  icon: FaBrain,
                  color: "from-yellow-400 to-orange-500"
                },
                {
                  step: "02", 
                  title: "Smart Practice Sessions",
                  description: "Practice with our GPT-4 powered AI interviewer. Get realistic questions, natural conversations, and adaptive difficulty.",
                  icon: FaGraduationCap,
                  color: "from-green-400 to-emerald-500"
                },
                {
                  step: "03",
                  title: "Master & Land Jobs",
                  description: "Review detailed analytics, track improvement, and watch your confidence soar. Then ace your real interviews!",
                  icon: FaHandshake,
                  color: "from-blue-400 to-indigo-500"
                }
              ].map((item, index) => (
                <div key={index} className="group">
                  <div className="relative">
                    <div className={`w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-3xl font-bold shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                      {item.step}
                    </div>
                    <div className={`w-16 h-16 mx-auto -mt-20 mb-6 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}>
                      <item.icon className="text-white text-xl" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-purple-100 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <Link href="/dashboard">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105">
                  Start Your Journey
                  <FaRocket className="ml-3 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section id="success-stories" className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-green-100 rounded-full px-4 py-2 mb-6">
                <FaTrophy className="text-green-600 w-4 h-4 mr-2" />
                <span className="text-sm font-semibold text-green-800">SUCCESS STORIES</span>
              </div>
              <h2 className="text-5xl font-black text-gray-900 mb-6">
                Real People,
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Real Results</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our users are saying about their transformation.
              </p>
            </div>

            {/* Testimonial Carousel */}
            <div className="relative max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-3xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 shadow-2xl border border-gray-100">
                        <FaQuoteLeft className="text-4xl text-purple-300 mb-6" />
                        <p className="text-2xl text-gray-800 leading-relaxed mb-8 font-medium">
                          {testimonial.text}
                        </p>
                        <div className="flex items-center">
                          <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center text-white font-bold text-xl mr-6`}>
                            {testimonial.avatar}
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                            <p className="text-gray-600">{testimonial.role}</p>
                            <p className="text-purple-600 font-semibold">{testimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center mt-8 space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-purple-600 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
            </div>

            {/* Additional Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
              {[
                {
                  text: "The AI gave me feedback I never got from human mock interviews. Incredibly detailed and actionable!",
                  name: "David Kim",
                  role: "Data Scientist",
                  company: "Netflix",
                  rating: 5,
                  avatar: "DK",
                  gradient: "from-red-500 to-pink-500"
                },
                {
                  text: "Went from 0 offers to 3 offers in 2 weeks. The confidence boost alone was worth it.",
                  name: "Emily Rodriguez", 
                  role: "UX Designer",
                  company: "Airbnb",
                  rating: 5,
                  avatar: "ER",
                  gradient: "from-pink-500 to-purple-500"
                },
                {
                  text: "As a non-native English speaker, this helped me practice natural conversation flow. Game changer!",
                  name: "Ahmed Hassan",
                  role: "DevOps Engineer",
                  company: "Spotify",
                  rating: 5,
                  avatar: "AH",
                  gradient: "from-green-500 to-teal-500"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex mb-4">
                    {[1,2,3,4,5].map(i => (
                      <FaStar key={i} className="text-yellow-400 w-4 h-4" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center text-white font-bold mr-4`}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm font-medium text-purple-600">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 mb-6">
                <FaRocket className="text-blue-600 w-4 h-4 mr-2" />
                <span className="text-sm font-semibold text-blue-800">SIMPLE PRICING</span>
              </div>
              <h2 className="text-5xl font-black text-gray-900 mb-6">
                Choose Your
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Success Plan</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Start free, upgrade when you're ready. Every plan includes our core AI interview technology.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Free Plan */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Starter</h3>
                  <p className="text-gray-600 mb-6">Perfect for trying out our AI</p>
                  <div className="text-5xl font-black text-gray-900 mb-2">$0</div>
                  <p className="text-gray-500 mb-8">Forever free</p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-500 w-5 h-5 mr-3" />
                    <span className="text-gray-700">3 AI interviews per month</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-500 w-5 h-5 mr-3" />
                    <span className="text-gray-700">Basic feedback reports</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-500 w-5 h-5 mr-3" />
                    <span className="text-gray-700">5 industry templates</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-500 w-5 h-5 mr-3" />
                    <span className="text-gray-700">Email support</span>
                  </li>
                </ul>

                <Link href="/dashboard">
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 font-semibold rounded-xl">
                    Start Free
                  </Button>
                </Link>
              </div>

              {/* Pro Plan - Most Popular */}
              <div className="bg-gradient-to-b from-purple-600 to-pink-600 rounded-3xl p-8 shadow-2xl transform scale-105 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-yellow-900 px-6 py-2 rounded-full text-sm font-bold">
                    🏆 MOST POPULAR
                  </div>
                </div>
                
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">Pro Coach</h3>
                  <p className="text-purple-100 mb-6">For serious job seekers</p>
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-2xl text-purple-200 line-through mr-3">$49</span>
                    <span className="text-5xl font-black">$24</span>
                  </div>
                  <p className="text-purple-100 mb-2">per month</p>
                  <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold inline-block mb-6">
                    50% OFF LIMITED TIME
                  </div>
                </div>

                <ul className="space-y-4 mb-8 text-white">
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-400 w-5 h-5 mr-3" />
                    <span><strong>Unlimited</strong> AI interviews</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-400 w-5 h-5 mr-3" />
                    <span>Advanced analytics & insights</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-400 w-5 h-5 mr-3" />
                    <span>50+ industry templates</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-400 w-5 h-5 mr-3" />
                    <span>Video interview practice</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-400 w-5 h-5 mr-3" />
                    <span>Resume & LinkedIn optimization</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-400 w-5 h-5 mr-3" />
                    <span>Priority support</span>
                  </li>
                </ul>

                <Link href="/dashboard">
                  <Button className="w-full bg-white text-purple-600 hover:bg-gray-100 py-4 font-bold rounded-xl">
                    Start 7-Day Free Trial
                  </Button>
                </Link>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                  <p className="text-gray-600 mb-6">For teams & organizations</p>
                  <div className="text-5xl font-black text-gray-900 mb-2">Custom</div>
                  <p className="text-gray-500 mb-8">Contact us</p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-500 w-5 h-5 mr-3" />
                    <span className="text-gray-700">Everything in Pro</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-500 w-5 h-5 mr-3" />
                    <span className="text-gray-700">Team management dashboard</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-500 w-5 h-5 mr-3" />
                    <span className="text-gray-700">Custom AI training</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-500 w-5 h-5 mr-3" />
                    <span className="text-gray-700">White-label solution</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-500 w-5 h-5 mr-3" />
                    <span className="text-gray-700">Dedicated success manager</span>
                  </li>
                </ul>

                <Link href="#contact">
                  <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50 py-4 font-semibold rounded-xl">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>

            {/* Money Back Guarantee */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center bg-green-100 rounded-full px-6 py-3 border border-green-200">
                <FaShieldAlt className="text-green-600 w-5 h-5 mr-3" />
                <span className="text-green-800 font-semibold">30-day money-back guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about InterviewAI
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How realistic are the AI interviews?",
                  answer: "Our AI is powered by GPT-4 and trained on thousands of real interview scenarios. Users consistently report that our interviews feel more realistic than other platforms, with natural conversation flow and contextually relevant follow-up questions."
                },
                {
                  question: "Can I practice for specific companies?",
                  answer: "Yes! We have interview templates for 500+ companies including Google, Microsoft, Amazon, Meta, Netflix, and many more. Our AI adapts questions based on the company's known interview style and culture."
                },
                {
                  question: "What makes your feedback better than other platforms?",
                  answer: "Our AI analyzes not just your answers, but your speech patterns, confidence level, storytelling structure, and industry-specific terminology. You get detailed scores on 15+ different aspects with specific improvement recommendations."
                },
                {
                  question: "Do you support technical interviews?",
                  answer: "Absolutely! We support coding interviews, system design, data structures, algorithms, and technical discussions for 20+ programming languages. Our AI can even review your code and suggest optimizations."
                },
                {
                  question: "How quickly will I see results?",
                  answer: "Most users see significant improvement after just 3-5 practice sessions. Our data shows users typically increase their interview success rate by 3x within their first week of consistent practice."
                },
                {
                  question: "Is my data secure?",
                  answer: "Yes, we take security seriously. All conversations are encrypted, and we never share your personal data with third parties. You can delete your account and all associated data at any time."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl font-black mb-8 leading-tight">
              Ready to Transform
              <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent block">
                Your Career?
              </span>
            </h2>
            
            <p className="text-2xl mb-12 opacity-90 leading-relaxed">
              Join 50,000+ professionals who've already transformed their interview skills. 
              Your dream job is just one practice session away.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <Link href="/dashboard">
                <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 px-16 py-8 text-2xl font-black rounded-2xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial Now
                  <FaRocket className="ml-4 w-6 h-6" />
                </Button>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm opacity-75">
              <div className="flex items-center">
                <FaCheckCircle className="w-4 h-4 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="w-4 h-4 mr-2" />
                7-day free trial
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="w-4 h-4 mr-2" />
                Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {/* Company Info */}
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                    <FaBrain className="text-white text-xl" />
                  </div>
                  <div>
                    <span className="text-3xl font-black">InterviewAI</span>
                    <div className="text-sm text-purple-400 font-medium">BETA</div>
                  </div>
                </div>
                <p className="text-gray-400 mb-8 max-w-md leading-relaxed text-lg">
                  The world's most advanced AI interview coach. Empowering professionals worldwide 
                  to land their dream jobs with confidence.
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/18vikastg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500 transition-all duration-300"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-600 transition-all duration-300"
                  >
                    <FaDiscord className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-xl font-bold mb-6">Platform</h4>
                <ul className="space-y-4">
                  <li><a href="#features" className="text-gray-400 hover:text-white transition-colors text-lg">Features</a></li>
                  <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors text-lg">How It Works</a></li>
                  <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors text-lg">Pricing</a></li>
                  <li><a href="/dashboard" className="text-gray-400 hover:text-white transition-colors text-lg">Get Started</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-lg">API Access</a></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="text-xl font-bold mb-6">Support</h4>
                <ul className="space-y-4">
                  <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors text-lg">Contact Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-lg">Help Center</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-lg">Community</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-lg">Status Page</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-lg">Bug Reports</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 mt-16 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-lg">
                  © {new Date().getFullYear()} InterviewAI. All rights reserved. Made with ❤️ for ambitious professionals.
                </p>
                <div className="flex space-x-8 mt-4 md:mt-0">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default page;
