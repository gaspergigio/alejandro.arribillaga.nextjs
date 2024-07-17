import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const cookies = request.cookies
  const acceptLanguage = request.headers.get('accept-language')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let locale: any = cookies.get('x-locale')?.value ?? 'en' // default language

  if (!cookies.get('x-locale') && acceptLanguage) {
    locale = acceptLanguage.split(',')[0].split('-')[0]
  }

  const response = NextResponse.next()
  response.cookies.set('x-locale', locale)
  return response
}

export const config = {
  matcher: '/',
}
