"use client"
import React, { useState, useEffect } from 'react';
import { 
  Download, 
  Calendar, 
  Users, 
  QrCode, 
  Bell, 
  BarChart3, 
  Shield, 
  Star,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Tablet,
  Monitor,
  Menu,
  X,
  CreditCard,
  FileText,
  Image,
  Filter,
  UserCheck,
  Hash,
  ExternalLink
} from 'lucide-react';

const EventsAppLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Event Management",
      description: "Create, manage, and track events with comprehensive admin controls"
    },
    {
      icon: <QrCode className="w-8 h-8" />,
      title: "QR Food Coupons",
      description: "Digital food coupon system with QR code scanning and usage tracking"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Registration System",
      description: "User registration with approval workflows and payment integration"
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Push Notifications",
      description: "Real-time notifications to keep users informed about events"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Reports",
      description: "Download registration data in Excel/CSV format for analysis"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Feedback System",
      description: "Custom feedback forms with rating systems and data collection"
    }
  ];

  const adminFeatures = [
    "Create and manage events with sessions",
    "Upload and manage resources (images, documents)",
    "QR code generation for food coupons",
    "User registration approval system",
    "Push notifications to registered users",
    "Download registration data (Excel/CSV)",
    "Create custom feedback forms",
    "View detailed user analytics",
    "Event scheduling and timeline management"
  ];

  const userFeatures = [
    "Browse and search events by category, location, date",
    "Register for events with secure payment",
    "Receive push notifications for updates",
    "Access event resources and materials",
    "Use digital food coupons via QR codes",
    "Provide feedback through custom forms",
    "View event schedules and timelines",
    "Manage your registered events",
    "Offline event access"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-black">EventsApp</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-black font-medium transition-colors">Features</a>
              <a href="#download" className="text-gray-600 hover:text-black font-medium transition-colors">Download</a>
              <a href="#versions" className="text-gray-600 hover:text-black font-medium transition-colors">Versions</a>
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium">
                Get Started
              </button>
            </div>

            <button 
              className="md:hidden text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 mt-4">
                <a href="#features" className="text-gray-600 hover:text-black font-medium transition-colors">Features</a>
                <a href="#download" className="text-gray-600 hover:text-black font-medium transition-colors">Download</a>
                <a href="#versions" className="text-gray-600 hover:text-black font-medium transition-colors">Versions</a>
                <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-all duration-200 w-full font-medium">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
                Professional Event
                <br />Management Platform
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Streamline event creation, manage registrations, and engage attendees with our comprehensive event automation solution
              </p>
            </div>

            {/* Download Section - Moved to top */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-16 border border-gray-200">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-black mb-2">Download Latest Version</h2>
                <p className="text-gray-600">Get the most recent version of EventsApp for Android</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                    <Download className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-black">EventsApp v2.1.0</p>
                    <p className="text-sm text-gray-500">APK • 28.5 MB • June 2025</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                <a
                  href="https://expo.dev/artifacts/eas/tLw9M8V2rCs2wLxM57G8H4.aab"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-black cursor-pointer text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download APK
                  </button>
                </a>

                <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 font-medium flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  View Details
                </button>
              </div>

              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-600">Virus Free</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-600">No Ads</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-600">Secure Download</span>
                  </div>
                </div>
              </div>
            </div>

            {/* App Preview */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">Mobile App</h3>
                  <p className="text-gray-600">Native Android application with full functionality</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Tablet className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">Tablet Ready</h3>
                  <p className="text-gray-600">Optimized interface for larger screens</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Monitor className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">Web Dashboard</h3>
                  <p className="text-gray-600">Comprehensive admin panel for event management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Enterprise-Grade Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From small workshops to large conferences, our platform provides everything you need to manage successful events
            </p>
          </div>

          {/* Interactive Feature Showcase */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border-2 ${
                    activeFeature === index
                      ? 'bg-black text-white border-black'
                      : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl ${
                      activeFeature === index ? 'bg-white/20' : 'bg-gray-100'
                    }`}>
                      <div className={activeFeature === index ? 'text-white' : 'text-black'}>
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className={`text-xl font-semibold mb-2 ${
                        activeFeature === index ? 'text-white' : 'text-black'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className={`${
                        activeFeature === index ? 'text-white/80' : 'text-gray-600'
                      }`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="text-center">
                <div className="w-24 h-24 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-white">
                    {features[activeFeature].icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{features[activeFeature].title}</h3>
                <p className="text-gray-600 text-lg">{features[activeFeature].description}</p>
              </div>
            </div>
          </div>

          {/* Admin vs User Features */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-sm">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-black mr-3" />
                <h3 className="text-2xl font-bold text-black">Admin Dashboard</h3>
              </div>
              <ul className="space-y-3">
                {adminFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-sm">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-black mr-3" />
                <h3 className="text-2xl font-bold text-black">User Experience</h3>
              </div>
              <ul className="space-y-3">
                {userFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Complete Event Ecosystem</h2>
            <p className="text-xl text-gray-600">Every tool you need for professional event management</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Filter className="w-8 h-8" />, title: "Smart Filters", desc: "Search by location, category, date, price" },
              { icon: <QrCode className="w-8 h-8" />, title: "QR Coupons", desc: "Secure digital food coupon system" },
              { icon: <FileText className="w-8 h-8" />, title: "Dynamic Forms", desc: "Custom registration and feedback forms" },
              { icon: <Image className="w-8 h-8" />, title: "Resource Hub", desc: "Upload and share event materials" },
              { icon: <UserCheck className="w-8 h-8" />, title: "Attendance", desc: "Track and manage event attendance" },
              { icon: <CreditCard className="w-8 h-8" />, title: "Payments", desc: "Secure payment processing" },
              { icon: <Hash className="w-8 h-8" />, title: "Security", desc: "SHA256 encryption for QR codes" },
              { icon: <Star className="w-8 h-8" />, title: "Feedback", desc: "5-star rating and review system" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Download Options
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose your preferred installation method
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Direct APK</h3>
              <p className="text-gray-600 mb-6">Direct APK download for Android devices</p>
              <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200">
                Download v2.1.0
              </button>
              <p className="text-xs text-gray-500 mt-2">28.5 MB • Secure Download</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-gray-300 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Play Store</h3>
              <p className="text-gray-600 mb-6">Official Google Play Store release</p>
              <button className="w-full bg-gray-300 text-gray-600 py-3 rounded-lg font-semibold cursor-not-allowed">
                Coming Soon
              </button>
              <p className="text-xs text-gray-500 mt-2">Under Review</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Web App</h3>
              <p className="text-gray-600 mb-6">Access from any web browser</p>
              <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200">
                Launch Web App
              </button>
              <p className="text-xs text-gray-500 mt-2">No Installation Required</p>
            </div>
          </div>
        </div>
      </section>

      {/* Versions Section */}
      <section id="versions" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Release History</h2>
            <p className="text-xl text-gray-600">Stay updated with the latest features and improvements</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                version: "v2.1.0",
                date: "June 14, 2025",
                status: "Current",
                size: "28.5 MB",
                features: [
                  "Enhanced QR code security with SHA256 encryption",
                  "Dynamic form generation for feedback",
                  "Improved notification system",
                  "Performance optimizations and bug fixes"
                ]
              },
              {
                version: "v2.0.0",
                date: "May 20, 2025",
                status: "Previous",
                size: "26.8 MB",
                features: [
                  "Complete UI/UX redesign",
                  "Food coupon system with QR codes",
                  "Advanced analytics dashboard",
                  "Multi-language support"
                ]
              },
              {
                version: "v1.8.0",
                date: "April 15, 2025",
                status: "Legacy",
                size: "24.2 MB",
                features: [
                  "Push notification system",
                  "Excel/CSV export functionality",
                  "User role management",
                  "Payment gateway integration"
                ]
              }
            ].map((version, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <h3 className="text-xl font-bold text-black">{version.version}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      version.status === 'Current' ? 'bg-green-100 text-green-800' :
                      version.status === 'Previous' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {version.status}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-600 text-sm">{version.date}</div>
                    <div className="text-gray-500 text-xs">{version.size}</div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {version.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                {version.status !== 'Current' && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <button className="text-black hover:text-gray-600 font-medium text-sm flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      Download {version.version}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join event organizers who trust EventsApp for their professional event management needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download Latest Version
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-200 flex items-center justify-center gap-2">
              Contact Support
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-200 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-black">EventsApp</span>
              </div>
              <p className="text-gray-600">
                Professional event management solution for modern organizers.
              </p>
            </div>
            
            <div>
              <h4 className="text-black font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Event Management</li>
                <li>QR Food Coupons</li>
                <li>Analytics Dashboard</li>
                <li>Push Notifications</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-black font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Documentation</li>
                <li>API Reference</li>
                <li>Help Center</li>
                <li>Contact Support</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-black font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Release Notes</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2025 EventsApp. All rights reserved. Version 2.1.0</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EventsAppLanding;
