import React from 'react';
import { Button } from '@/components/ui/button';
import Head from 'next/head';
import Contact from '@/_components/Contact';
import Link from 'next/link';
import { FaGithub, FaStar, FaCheckCircle, FaArrowRight, FaUsers, FaTrophy, FaBrain } from "react-icons/fa";

const page = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>AI Mock Interview - Master Your Next Interview with AI</title>
        <meta name="description" content="Transform your interview skills with AI-powered practice sessions. Get real-time feedback, personalized coaching, and land your dream job." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Navigation Header */}
        <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <FaBrain className="text-white text-sm" />
                </div>
                <span className="text-xl font-bold text-gray-900">InterviewAI</span>
              </div>
              
              <nav className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Features</a>
                <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">How It Works</a>
                <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Success Stories</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
                <a
                  href="https://github.com/18vikastg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              </nav>

              <div className="flex items-center space-x-4">
                <Link href="/dashboard" className="hidden sm:inline-flex">
                  <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                    Sign In
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6">
                    Start Free Trial
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-16 pb-24">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              {/* Trust Badge */}
              <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-sm border border-blue-100 mb-8">
                <FaStar className="text-yellow-400 w-4 h-4 mr-2" />
                <span className="text-sm font-medium text-gray-700">Trusted by 10,000+ job seekers</span>
                <div className="flex ml-3 -space-x-1">
                  {[1,2,3,4,5].map(i => (
                    <FaStar key={i} className="text-yellow-400 w-3 h-3" />
                  ))}
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Master Your Next
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                  Job Interview
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Practice with AI-powered mock interviews, get instant feedback, and boost your confidence. 
                Land your dream job with personalized coaching that adapts to your industry.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link href="/dashboard">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Start Free Practice
                    <FaArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md mr-3 hover:shadow-lg transition-shadow">
                    ▶
                  </div>
                  Watch 2-min Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">95%</div>
                  <div className="text-sm text-gray-600 mt-1">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">50K+</div>
                  <div className="text-sm text-gray-600 mt-1">Practice Sessions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">4.9/5</div>
                  <div className="text-sm text-gray-600 mt-1">User Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our AI Interview Coach?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Advanced AI technology meets proven interview strategies to give you the edge you need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 border border-blue-100">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <FaBrain className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Practice</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Experience realistic interview scenarios with our advanced AI that adapts to your responses and provides dynamic follow-up questions.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-700">
                      <FaCheckCircle className="text-green-500 w-4 h-4 mr-3" />
                      Industry-specific questions
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <FaCheckCircle className="text-green-500 w-4 h-4 mr-3" />
                      Behavioral & technical interviews
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <FaCheckCircle className="text-green-500 w-4 h-4 mr-3" />
                      Real-time conversation flow
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group">
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 border border-green-100">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <FaTrophy className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Instant Expert Feedback</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Get detailed, actionable feedback on your answers, body language, pace, and confidence level immediately after each session.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-700">
                      <FaCheckCircle className="text-green-500 w-4 h-4 mr-3" />
                      Detailed performance scoring
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <FaCheckCircle className="text-green-500 w-4 h-4 mr-3" />
                      Improvement recommendations
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <FaCheckCircle className="text-green-500 w-4 h-4 mr-3" />
                      Progress tracking
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group">
                <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 border border-purple-100">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <FaUsers className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Analytics</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Track your improvement over time with detailed analytics and personalized learning paths tailored to your career goals.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-700">
                      <FaCheckCircle className="text-green-500 w-4 h-4 mr-3" />
                      Performance dashboards
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <FaCheckCircle className="text-green-500 w-4 h-4 mr-3" />
                      Strength & weakness analysis
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <FaCheckCircle className="text-green-500 w-4 h-4 mr-3" />
                      Custom learning plans
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Get Interview-Ready in 3 Simple Steps
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Start practicing today and see immediate improvement in your interview performance
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Choose Your Role</h3>
                  <p className="text-gray-600">
                    Select your industry and position. Our AI will customize questions specific to your field and experience level.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Practice with AI</h3>
                  <p className="text-gray-600">
                    Engage in realistic interview conversations. Answer questions naturally as our AI evaluates your responses.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Get Better & Land Jobs</h3>
                  <p className="text-gray-600">
                    Review detailed feedback, track your progress, and watch your confidence soar as you ace real interviews.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Success Stories from Real Users
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Join thousands of professionals who've transformed their interview skills
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map(i => (
                    <FaStar key={i} className="text-yellow-400 w-4 h-4" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "InterviewAI helped me land my dream job at Google! The AI feedback was incredibly detailed and helped me improve my technical explanations."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    AJ
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Alex Johnson</h4>
                    <p className="text-sm text-gray-600">Software Engineer at Google</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map(i => (
                    <FaStar key={i} className="text-yellow-400 w-4 h-4" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "The behavioral interview practice was game-changing. I went from nervous wreck to confident professional in just two weeks."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    SW
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sarah Williams</h4>
                    <p className="text-sm text-gray-600">Product Manager at Microsoft</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map(i => (
                    <FaStar key={i} className="text-yellow-400 w-4 h-4" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "As a career changer, this platform gave me the confidence to interview for senior roles. The industry-specific practice was perfect."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    MC
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Michael Chen</h4>
                    <p className="text-sm text-gray-600">Data Scientist at Netflix</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Ace Your Next Interview?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful professionals who've used our AI coaching to land their dream jobs
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/dashboard">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Your Free Trial
                  <FaArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <p className="text-blue-200 text-sm">No credit card required • 7-day free trial</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gray-50">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <FaBrain className="text-white text-sm" />
                </div>
                <span className="text-2xl font-bold">InterviewAI</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Empowering professionals worldwide with AI-driven interview preparation. 
                Transform your career with confidence.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/18vikastg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Platform</h4>
              <ul className="space-y-3">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="/dashboard" className="text-gray-400 hover:text-white transition-colors">Get Started</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Support</h4>
              <ul className="space-y-3">
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} InterviewAI. All rights reserved. Built  for job seekers worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default page;
