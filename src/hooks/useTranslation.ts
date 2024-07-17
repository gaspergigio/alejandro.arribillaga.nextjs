import { cookies } from 'next/headers'

import en from '@/messages/en.json'
import es from '@/messages/es.json'

export const useTranslation = () => {
  const cookieStore = cookies()
  const locale = cookieStore.get('x-locale')?.value ?? 'en'

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const messages: any = locale === 'es' ? es : en

  const t = (key: string): string => {
    return key.split('.').reduce((obj, i) => (obj ? obj[i] : null), messages)
  }

  return { t, locale }
}
