import { motion } from 'framer-motion'
import { Shield, Monitor, Paintbrush, Zap, Handshake, Lock } from 'lucide-react'

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900 font-sans overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center p-6 md:p-8 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="MK NetzWerk Logo"
              className="w-32 h-32 scale-150 -ml-2"
            />
          </div>
        </motion.div>

        <nav className="hidden md:flex space-x-10 text-blue-900 font-semibold">
          <a onClick={(e) => { e.preventDefault(); scrollToSection('services') }} href="#services" className="hover:text-purple-600 transition cursor-pointer">Services</a>
          <a onClick={(e) => { e.preventDefault(); scrollToSection('about') }} href="#about" className="hover:text-purple-600 transition cursor-pointer">About</a>
          <a onClick={(e) => { e.preventDefault(); scrollToSection('contact') }} href="#contact" className="hover:text-purple-600 transition cursor-pointer">Contact</a>
        </nav>

        <a
          onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}
          href="#contact"
          className="bg-gradient-to-r from-blue-600 to-purple-500 text-white px-6 py-2.5 rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
        >
          Get Started
        </a>
      </header>

      {/* Hero */}
      <section className="text-center py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-500/10 blur-3xl pointer-events-none" />
        <motion.h2
          initial={{ opacity: 0, y: 30, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1], // "easeOutQuart" curve for butter-smooth end
            delay: 0.2,
          }}
          style={{ willChange: "transform, opacity" }}
          className="text-6xl md:text-7xl font-extrabold text-blue-950 drop-shadow-sm mb-8 tracking-tight"
        >
          Building the Future of the Web
        </motion.h2>

        <p className="max-w-3xl mx-auto text-xl text-gray-700 mt-10 mb-10 leading-relaxed">
          Transform your online presence with modern design, advanced security, and seamless user experiences. <br />
          MK NetzWerk turns digital ideas into stunning, reliable, and profitable websites.
        </p>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}>
          <a
            onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}
            href="#contact"
            className="bg-gradient-to-r from-blue-700 to-purple-600 text-white px-10 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:scale-105 hover:shadow-[0_0_30px_rgba(120,70,255,0.4)] transition-all inline-block cursor-pointer"
          >
            Get Your Free Consultation
          </a>
        </motion.div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 bg-gradient-to-b from-white to-blue-50 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[400px] bg-gradient-to-r from-blue-100 via-purple-100 to-transparent blur-3xl opacity-40" />
        <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
          <h3 className="text-4xl md:text-5xl font-bold text-blue-900 mb-20">Our Core Services</h3>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white/80 backdrop-blur-sm border-none shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-3xl p-10">
              <Monitor className="w-14 h-14 mx-auto text-blue-700 mb-6" />
              <h4 className="text-2xl font-bold mb-3">Website Development</h4>
              <p className="text-gray-600 leading-relaxed">
                We create lightning-fast, responsive, and SEO-optimized websites that elevate your brand’s digital footprint.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border-none shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-3xl p-10">
              <Paintbrush className="w-14 h-14 mx-auto text-purple-700 mb-6" />
              <h4 className="text-2xl font-bold mb-3">Design Modernization</h4>
              <p className="text-gray-600 leading-relaxed">
                Revitalize your website with cutting-edge, aesthetic redesigns that blend creativity with usability for a world-class experience.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border-none shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-3xl p-10">
              <Shield className="w-14 h-14 mx-auto text-blue-600 mb-6" />
              <h4 className="text-2xl font-bold mb-3">Web Security Consultation</h4>
              <p className="text-gray-600 leading-relaxed">
                Fortify your online assets with expert vulnerability audits, malware protection, and proactive cybersecurity solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 bg-gradient-to-r from-blue-50 via-white to-purple-50 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-blue-900 mb-8">About MK NetzWerk</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            At MK NetzWerk, we believe that a website is more than just an online presence — it’s a digital reflection of your identity.
            <br />We combine creativity, performance, and security to deliver breathtaking results that attract and retain clients.
          </p>
          <a
            href="/about"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 text-lg rounded-2xl shadow-xl hover:scale-105 transition-transform inline-block cursor-pointer"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section className="py-32 bg-gradient-to-b from-white to-blue-100 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-4xl md:text-5xl font-bold text-blue-900 mb-16">Why Clients Choose Us</h3>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all">
              <Zap className="w-12 h-12 mx-auto text-yellow-500 mb-6" />
              <h4 className="text-2xl font-bold mb-4">Speed Without Sacrifice</h4>
              <p className="text-gray-600 leading-relaxed">
                Projects move fast because we eliminate the middlemen — design, development, and optimization happen together.
                Quality stays high, timelines stay short.
              </p>
            </div>

            <div className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all">
              <Handshake className="w-12 h-12 mx-auto text-blue-600 mb-6" />
              <h4 className="text-2xl font-bold mb-4">Direct Communication</h4>
              <p className="text-gray-600 leading-relaxed">
                You talk to the person who actually builds your website. No layers, no delays — just clear updates and real solutions.
              </p>
            </div>

            <div className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all">
              <Lock className="w-12 h-12 mx-auto text-purple-600 mb-6" />
              <h4 className="text-2xl font-bold mb-4">Built for Security and Longevity</h4>
              <p className="text-gray-600 leading-relaxed">
                Every site is engineered with performance, reliability, and protection in mind — so your business runs smoothly and safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 bg-gradient-to-br from-blue-700 to-purple-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,white,transparent_70%)]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h3 className="text-4xl font-extrabold mb-6">Let’s Build Something Incredible</h3>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Ready to transform your website into a high-performing masterpiece? Reach out today — we’ll get back to you within 24 hours.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-700 font-semibold px-10 py-4 rounded-2xl hover:bg-blue-100 transition inline-block"
          >
            Contact Us
          </a>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white text-center py-8">
        <p className="text-lg font-medium tracking-wide">
          © {new Date().getFullYear()} MK NetzWerk — Crafted with passion in Switzerland 🇨🇭
        </p>
      </footer>
    </div>
  )
}