import { Styled, Container, Box, Text, Link } from 'theme-ui'
import { Layout, Logo, Monogram, Switch, Seo } from '../components'

function Index() {
  return (
    <Layout>
      <Container sx={{ px: [3, 3, 4] }}>
        <Box sx={{ maxWidth: '750px' }}>
          <Styled.h1>CarbonPlan Design</Styled.h1>
          <Styled.p>
            This site describes the primary components of our design system. The
            core concepts were developed with{' '}
            <Link href='https://ot.studio'>Oridnary Things</Link> in Spring
            2020, and it has evolved somewhat since then. Most components of the
            system can be used from our javascript packages:{' '}
            <Link href='https://github.com/carbonplan/theme'>
              @carbonplan/theme
            </Link>{' '}
            and{' '}
            <Link href='https://github.com/carbonplan/theme'>
              @carbonplan/components
            </Link>
            . This website and its{' '}
            <Link href='https://github.com/carbonplan/design'>source code</Link>{' '}
            are good examples of how to use the system.
          </Styled.p>
          <Styled.h2>Logo</Styled.h2>
          <Styled.p>
            Our logo is built around our core font and the concepts of
            circularity and enclosure. The primary color format is Chalk on
            Carbon, but it can also be used in Carbon on Chalk (or White). It
            can be rendered at multiple sizes.
          </Styled.p>
          <Box sx={{ mb: [3] }}>
            <Logo sx={{ width: 150 }} />
            <Text
              sx={{
                fontSize: [2],
                fontFamily: 'monospace',
                letterSpacing: 'monospace',
              }}
            >
              150 px
            </Text>
          </Box>
          <Box sx={{ mb: [3] }}>
            <Logo sx={{ width: 200 }} />
            <Text
              sx={{
                fontSize: [2],
                fontFamily: 'monospace',
                letterSpacing: 'monospace',
              }}
            >
              200 px
            </Text>
          </Box>
          <Box sx={{ mb: [3] }}>
            <Logo sx={{ width: 300 }} />
            <Text
              sx={{
                fontSize: [2],
                fontFamily: 'monospace',
                letterSpacing: 'monospace',
              }}
            >
              300 px
            </Text>
          </Box>
          <Styled.h2>Monogram</Styled.h2>
          <Styled.p>
            Our monogram is narrower than the logo and useful for social media
            cards, favicons, and other highlights. Coloring is the same as for
            the logo, and it can be rendered at multiple sizes, including very
            small sizes.
          </Styled.p>
          <Box sx={{ mb: [3] }}>
            <Monogram sx={{ width: 40 }} />
            <Text
              sx={{
                fontSize: [2],
                fontFamily: 'monospace',
                letterSpacing: 'monospace',
              }}
            >
              40 px
            </Text>
          </Box>
          <Box sx={{ mb: [3] }}>
            <Monogram sx={{ width: 80 }} />
            <Text
              sx={{
                fontSize: [2],
                fontFamily: 'monospace',
                letterSpacing: 'monospace',
              }}
            >
              80 px
            </Text>
          </Box>
          <Box sx={{ mb: [3] }}>
            <Monogram sx={{ width: 120 }} />
            <Text
              sx={{
                fontSize: [2],
                fontFamily: 'monospace',
                letterSpacing: 'monospace',
              }}
            >
              120 px
            </Text>
          </Box>
          <Styled.h2>Typography</Styled.h2>
          <Styled.p>
            Our design system is built around four fonts from the family
            Relative.
          </Styled.p>
          <Text
            sx={{
              fontSize: [6],
              fontFamily: 'body',
              letterSpacing: 'body',
              letterSpacing: '0em',
            }}
          >
            Relative Pro Book
          </Text>
          <Text
            sx={{
              fontSize: [6],
              fontFamily: 'heading',
              letterSpacing: 'heading',
              letterSpacing: '0em',
            }}
          >
            Relative Pro Medium
          </Text>
          <Text
            sx={{
              fontSize: [6],
              fontFamily: 'faux',
              letterSpacing: 'faux',
              letterSpacing: '0em',
            }}
          >
            Relative Pro Faux Mono
          </Text>
          <Text
            sx={{
              fontSize: [6],
              fontFamily: 'monospace',
              letterSpacing: 'monospace',
              letterSpacing: '0em',
            }}
          >
            Relative Pro Mono 11 Pitch
          </Text>
          <Styled.p>
            Book is used in all body copy, typically at 18px, just like the text
            you are reading now. Medium is used for headings with a large font,
            and should always be used with reduced tracking, and reduced line
            spacing if the heading extends over multiple lines. Mono should
            generally only be used for numbers (e.g. in dashboards), axis labels
            on charts, and in small caps. Faux can be used as a complement to
            the others to add diversity to a composition (e.g. in tables, maps,
            infographics). Both Mono and Faux should always be used with
            significantly increased tracking, especially if in all caps.
          </Styled.p>
          <Text
            sx={{
              fontSize: [5],
              fontFamily: 'heading',
              letterSpacing: 'heading',
              mb: [2],
            }}
          >
            Relative Pro Medium (-15 tracking)
          </Text>
          <Text
            sx={{
              fontSize: [4],
              fontFamily: 'faux',
              letterSpacing: 'faux',
              mb: [2],
            }}
          >
            Relative Pro Faux Mono (+50 tracking)
          </Text>
          <Text
            sx={{
              fontSize: [2],
              fontFamily: 'monospace',
              letterSpacing: 'monospace',
              mb: [2],
            }}
          >
            RELATIVE PRO MONO 11 PITCH (+130 tracking)
          </Text>
          <Styled.h2>Layout</Styled.h2>
          <Styled.p>
            We provide some basic layouts that are common across our sites,
            though some sites and apps may use custom layouts (e.g. maps,
            dashboards, databases). The layout is used on the site you are
            looking at now, and has two primary options: whether to include a
            header (with our menu), and whether to include a footer. The layout
            additionally supports authentication status if you are wrapping a
            site with the{' '}
            <Link href='https://github.com/carbonplan/auth'>
              @carbonplan/auth
            </Link>{' '}
            library.
          </Styled.p>
          <Styled.p>
            Without either header or footer, the layout is essentially a Flexbox
            with Meta tags from the Seo component, so you may also choose to
            skip it entirely, but then remember to include the Seo component if
            needed.
          </Styled.p>
          <Styled.h2>Color</Styled.h2>
          <Styled.h2>Controls</Styled.h2>
        </Box>
      </Container>
    </Layout>
  )
}

export default Index
