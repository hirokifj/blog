import '@/styles/globals.scss'
import 'highlight.js/styles/atom-one-dark.css'
import type { AppProps } from 'next/app'
import { AppLayout } from '@/components/templates/layouts/AppLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default MyApp
