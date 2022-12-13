const langKey = 'lang'
import Cookies from 'js-cookie'

export const saveLanguage = (locale: string) => {
  Cookies.remove('NEXT_LOCALE')
  document.cookie = `NEXT_LOCALE=${locale}; expires=Fri, 31 Dec 9999 23:59:59 GMT`
}

export const getLanguage = () => {
  const match = document.cookie.match(new RegExp('(^| )' + langKey + '=([^;]+)'))
  if (match) return match[2]
}
