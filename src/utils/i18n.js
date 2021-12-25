import { getItem, setItem } from './storage'

const baseKey = 'LANGUAGE'

export const getLanguage = () => {
  const lang = getItem(baseKey) || 'zh'
  return lang
}

export const setLanguage = (value) => {
  setItem(baseKey, value)
}

export const getCheckoutLanguage = (lang) => {
  const currentLanuage = getLanguage()
  if (!lang) {
    if (currentLanuage === 'zh') {
      lang = 'en'
    } else if (currentLanuage === 'en') {
      lang = 'zh'
    }
  }
  return lang
}
