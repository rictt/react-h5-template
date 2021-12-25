import './index.scss'
import { useTranslation } from "react-i18next";
import { getCheckoutLanguage, setLanguage } from '@/utils/i18n'
import logo from '@/assets/images/logo.png'

function Home() {
  const { t, i18n } = useTranslation()

  const onCheckoutLanguage = () => {
    const lang = getCheckoutLanguage()
    i18n.changeLanguage(lang)
    setLanguage(lang)
  }

  return (
    <div className='home-page-test'>
      <div>{t('welcome')}</div>
      <div>{t('user.name')}</div>
      <div>{t('user.password', { psd: 123456 })}</div>
      <div className='btn' onClick={onCheckoutLanguage}>{t('checkoutLanguage')}</div>
      <h3 className='custom-color'>自定义颜色</h3>
      <img src={logo} />
    </div>
  )
}

export default Home