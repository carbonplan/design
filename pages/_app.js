import { ThemeProvider } from 'theme-ui'
import { MDXProvider } from '@mdx-js/react'
import theme from '../theme'
import '../globals.css'
import '../fonts.css'
import 'mapbox-gl/dist/mapbox-gl.css'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  )
}
