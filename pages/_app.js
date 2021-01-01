import { ThemeProvider } from 'theme-ui'
import { Fonts, Globals } from '../components'
import theme from '../theme'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <Fonts />
      <Globals />
    </ThemeProvider>
  )
}
