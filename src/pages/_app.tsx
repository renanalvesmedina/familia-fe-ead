import React from 'react'
import seo from '../../next-seo.config'

import type { AppProps } from 'next/app'

import { DefaultSeo } from 'next-seo'
import { Toaster } from 'react-hot-toast'

import { withQueryClient } from '@hocs/with-query-client'
import { ThemeProvider } from '@contexts/theme.context'
import { AuthProvider } from '@contexts/auth.context'

import '@styles/globals.css'

const App: React.FC<AppProps> = ({ Component, pageProps }) =>
  withQueryClient(
    <ThemeProvider>
      <AuthProvider>
        <DefaultSeo {...seo} />
        <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  )

export default App
