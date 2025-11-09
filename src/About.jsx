import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()

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
          {t('nav.contact')}
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
          {t('aboutPage.title')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto leading-relaxed"
        >
          {t('aboutPage.intro')}
        </motion.p>
      </section>

      {/* Technologies Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
          {t('aboutPage.tech.title')}
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
          {t('aboutPage.tech.desc')}
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
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
          {t('aboutPage.compare.title')}
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-16 leading-relaxed">
          {t('aboutPage.compare.desc')}
        </p>

        <div className="space-y-12 text-left">
          {/* Example 1 */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-xl font-semibold mb-2 text-blue-900 text-center">
              {t('aboutPage.compare.example1.title')}
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">{t('aboutPage.compare.agency')}</span>
                <span className="text-gray-500 text-sm">{t('aboutPage.compare.example1.agencyTime')}</span>
              </div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '90%' }}
                transition={{ duration: 1.2 }}
                className="h-3 rounded-full bg-gradient-to-r from-gray-300 to-gray-400"
              />
              <div className="flex items-center justify-between">
                <span className="text-blue-800 font-semibold">MK NetzWerk</span>
                <span className="text-gray-500 text-sm">{t('aboutPage.compare.example1.ourTime')}</span>
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
            <p className="text-xl font-semibold mb-2 text-blue-900 text-center">
              {t('aboutPage.compare.example2.title')}
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">{t('aboutPage.compare.agency')}</span>
                <span className="text-gray-500 text-sm">{t('aboutPage.compare.example2.agencyTime')}</span>
              </div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '95%' }}
                transition={{ duration: 1.2 }}
                className="h-3 rounded-full bg-gradient-to-r from-gray-300 to-gray-400"
              />
              <div className="flex items-center justify-between">
                <span className="text-blue-800 font-semibold">MK NetzWerk</span>
                <span className="text-gray-500 text-sm">{t('aboutPage.compare.example2.ourTime')}</span>
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
          {t('aboutPage.compare.footnote')}
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
            alt={t('aboutPage.ceo.alt')}
            className="w-48 h-48 rounded-full mx-auto mb-6 shadow-xl object-cover"
          />
          <h3 className="text-2xl font-bold text-blue-900 mb-2">Maksad Kulhanov</h3>
          <p className="text-gray-600 mb-4">{t('aboutPage.ceo.role')}</p>
          <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed">
            {t('aboutPage.ceo.quote')}
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white text-center py-8">
        <p className="text-lg font-medium tracking-wide">
          © {new Date().getFullYear()} MK NetzWerk — {t('footer.copyright')}
        </p>
      </footer>
    </div>
  )
}