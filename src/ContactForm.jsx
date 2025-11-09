import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function ContactForm() {
  const { t } = useTranslation()
  const [status, setStatus] = useState("idle")

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus("submitting")

    const formData = new FormData(event.target)
    const response = await fetch("https://formspree.io/f/xwprgdpb", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    })

    if (response.ok) {
      setStatus("success")
      event.target.reset()
    } else {
      setStatus("error")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.3, 1] }}
        className="w-full max-w-2xl bg-white shadow-2xl rounded-3xl p-10 border border-gray-100"
      >
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent">
          {t('contactForm.title')}
        </h1>

        {status === "success" ? (
          <div className="text-center text-green-600 font-semibold text-lg">
            ✅ {t('contactForm.success.line1')}<br />
            {t('contactForm.success.line2')}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                {t('contactForm.name.label')}
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder={t('contactForm.name.placeholder')}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                {t('contactForm.email.label')}
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder={t('contactForm.email.placeholder')}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                {t('contactForm.language.label')}
              </label>
              <div className="relative">
                <select
                  name="language"
                  required
                  className="appearance-none w-full px-4 py-3 border border-gray-300 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 font-medium"
                >
                  <option value="English">{t('contactForm.language.english')}</option>
                  <option value="German">{t('contactForm.language.german')}</option>
                  <option value="Spanish">{t('contactForm.language.spanish')}</option>
                  <option value="Polish">{t('contactForm.language.polish')}</option>
                  <option value="Russian">{t('contactForm.language.russian')}</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                {t('contactForm.subject.label')}
              </label>
              <input
                type="text"
                name="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder={t('contactForm.subject.placeholder')}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                {t('contactForm.message.label')}
              </label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                placeholder={t('contactForm.message.placeholder')}
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status === "submitting"}
              className={`w-full py-4 rounded-2xl font-semibold shadow-lg transition-all ${
                status === "submitting"
                  ? 'bg-gray-400 text-white cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-700 to-purple-600 text-white hover:shadow-[0_0_25px_rgba(120,70,255,0.4)]'
              }`}
            >
              {status === "submitting" ? t('contactForm.button.sending') : t('contactForm.button.default')}
            </motion.button>

            {status === "error" && (
              <p className="text-red-600 text-center font-medium mt-4">
                ❌ {t('contactForm.error')}
              </p>
            )}
          </form>
        )}
      </motion.div>
    </div>
  )
}