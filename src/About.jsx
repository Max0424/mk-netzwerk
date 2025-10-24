import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900 font-sans">
      {/* Header */}
      <header className="max-w-7xl mx-auto flex justify-between items-center p-6 md:p-10">
        <a href="/" className="text-2xl font-bold text-blue-900 hover:text-purple-700 transition">
          MK NetzWerk
        </a>
        <a
          href="/contact"
          className="bg-gradient-to-r from-blue-600 to-purple-500 text-white px-6 py-2.5 rounded-2xl shadow-lg hover:scale-105 transition-transform"
        >
          Contact
        </a>
      </header>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold text-blue-950 text-center mb-10"
        >
          About MK NetzWerk
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto leading-relaxed"
        >
          At MK NetzWerk, we’re dedicated to building digital experiences that combine design, performance, and security. 
          Our websites aren’t just visually appealing — they’re engineered with the latest technologies to ensure reliability and scalability.
        </motion.p>
      </section>

      {/* Technologies Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">Technologies We Use</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
          We stay ahead by using modern frameworks and tools like <b>React</b>, <b>Vite</b>, <b>Tailwind CSS</b>, and <b>Framer Motion</b> 
          — assisted by <b>AI-powered development tools</b> that optimize workflow and code quality. 
          Unlike traditional agencies, we merge automation with human expertise to deliver stunning websites faster, 
          without ever compromising quality or precision.
        </p>
        <div className="flex justify-center flex-wrap gap-6">
          {['React', 'Vite', 'Tailwind', 'Framer Motion', 'Spring Boot', 'PostgreSQL'].map((tech) => (
            <div
              key={tech}
              className="px-6 py-3 bg-white rounded-2xl shadow-md border border-gray-100 text-blue-700 font-semibold hover:shadow-lg transition"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">How We Compare</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-16 leading-relaxed">
          The difference isn’t just in design — it’s in delivery. Traditional agencies rely on multi-layered teams and outdated workflows.
          At MK NetzWerk, modern frameworks and AI-assisted development allow us to complete projects in days instead of weeks.
        </p>

        <div className="space-y-12 text-left">
          {/* Example 1 */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-xl font-semibold mb-2 text-blue-900 text-center">Modern Business Website</p>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Traditional Agency</span>
                <span className="text-gray-500 text-sm">4–6 weeks</span>
              </div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '90%' }}
                transition={{ duration: 1.2 }}
                className="h-3 rounded-full bg-gradient-to-r from-gray-300 to-gray-400"
              />
              <div className="flex items-center justify-between">
                <span className="text-blue-800 font-semibold">MK NetzWerk</span>
                <span className="text-gray-500 text-sm">3–5 days</span>
              </div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '25%' }}
                transition={{ duration: 1.2 }}
                className="h-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
              />
            </div>
          </motion.div>

          {/* Example 2 */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <p className="text-xl font-semibold mb-2 text-blue-900 text-center">E-Commerce Website (Small to Medium Business)</p>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Traditional Agency</span>
                <span className="text-gray-500 text-sm">6–10 weeks</span>
              </div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '95%' }}
                transition={{ duration: 1.2 }}
                className="h-3 rounded-full bg-gradient-to-r from-gray-300 to-gray-400"
              />
              <div className="flex items-center justify-between">
                <span className="text-blue-800 font-semibold">MK NetzWerk</span>
                <span className="text-gray-500 text-sm">2–3 weeks</span>
              </div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '40%' }}
                transition={{ duration: 1.2 }}
                className="h-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
              />
            </div>
          </motion.div>
        </div>

        <p className="text-gray-600 mt-12 text-center italic">
          *Results based on typical project timelines. Our process blends AI efficiency with hands-on expertise to deliver high-quality work faster.*
        </p>
      </section>

      {/* CEO Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/ceo.jpg"
            alt="CEO"
            className="w-48 h-48 rounded-full mx-auto mb-6 shadow-xl object-cover"
          />
          <h3 className="text-2xl font-bold text-blue-900 mb-2">Maksad Kulhanov</h3>
          <p className="text-gray-600 mb-4">Founder & CEO</p>
          <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed">
            “I founded MK NetzWerk with one mission — to help businesses thrive online through beautiful, fast, and secure digital products.
            Every project we take on reflects our dedication to innovation, detail, and trust.”
          </p>
        </motion.div>
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