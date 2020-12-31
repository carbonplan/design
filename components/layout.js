import { Container, Flex, Box, Text } from 'theme-ui'
import Seo from './seo'
import Header from './header'
import Footer from './footer'
import Switch from './switch'

const Layout = ({ footer, header, title, description, card, children }) => {
  footer = footer == null ? true : footer
  header = header == null ? true : header
  return (
    <>
      <Seo card={card} description={description} title={title} />
      <Flex
        sx={{
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        {header && (
          <Box
            sx={{
              width: '100%',
              borderStyle: 'solid',
              borderColor: 'muted',
              borderWidth: '0px',
              borderBottomWidth: '1px',
              position: 'sticky',
              top: 0,
              bg: 'background',
              height: '56px',
              zIndex: 1000,
            }}
          >
            <Container
              sx={{
                px: [3, 3, 4],
              }}
            >
              <Header />
            </Container>
          </Box>
        )}
        <Box
          sx={{
            width: '100%',
            flex: '1 1 auto',
          }}
        >
          {children}
        </Box>
        {footer && (
          <Box
            sx={{
              width: '100%',
              borderStyle: 'solid',
              borderColor: 'muted',
              borderWidth: '0px',
              borderTopWidth: '1px',
            }}
          >
            <Container
              sx={{
                px: [3, 3, 4],
              }}
            >
              <Footer />
            </Container>
          </Box>
        )}
        <Switch />
      </Flex>
    </>
  )
}

export default Layout
