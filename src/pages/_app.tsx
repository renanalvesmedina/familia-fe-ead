import React from 'react'
import seo from '../../next-seo.config'

import type { AppProps } from 'next/app'

import { DefaultSeo } from 'next-seo'
import { Toaster } from 'react-hot-toast'

import { withQueryClient } from '@hocs/with-query-client'
import { AuthProvider } from '@contexts/auth.context'

import 'react-calendar/dist/Calendar.css'
import '@styles/globals.css'

const App: React.FC<AppProps> = ({ Component, pageProps }) =>
  withQueryClient(
    <AuthProvider>
      <DefaultSeo {...seo} />
      <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
      <Component {...pageProps} />
    </AuthProvider>
  )

export default App
