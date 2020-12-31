import { ThemeProvider } from 'theme-ui'
import { Style } from '../components'
import theme from '../theme'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <Style />
    </ThemeProvider>
  )
}
