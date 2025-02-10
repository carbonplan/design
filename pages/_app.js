import React from 'react'
import Script from 'next/script'
import { ThemeProvider } from 'theme-ui'
import theme from '@carbonplan/theme'
import '@carbonplan/components/globals.css'
import '@carbonplan/components/fonts.css'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      {process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' && (
        <Script
          data-domain='carbonplan.org'
          data-api='https://carbonplan.org/proxy/api/event'
          src='https://carbonplan.org/js/script.file-downloads.outbound-links.js'
        />
      )}
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
