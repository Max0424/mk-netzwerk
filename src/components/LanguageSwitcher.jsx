import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher({ className = '' }) {
  const { i18n, t } = useTranslation()

  const change = (lng) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('lang', lng)
    document.documentElement.lang = lng
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        onClick={() => change('en')}
        className={`px-3 py-1.5 rounded-xl text-sm font-semibold border transition
          ${i18n.language === 'en'
            ? 'bg-white text-blue-700 border-blue-300 shadow'
            : 'bg-transparent text-blue-900 border-transparent hover:bg-white/60'}`}
        aria-label={t('lang.en')}
      >
        EN
      </button>
      <button
        onClick={() => change('de')}
        className={`px-3 py-1.5 rounded-xl text-sm font-semibold border transition
          ${i18n.language === 'de'
            ? 'bg-white text-blue-700 border-blue-300 shadow'
            : 'bg-transparent text-blue-900 border-transparent hover:bg-white/60'}`}
        aria-label={t('lang.de')}
      >
        DE
      </button>
    </div>
  )
}