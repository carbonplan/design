import { Box, Flex } from 'theme-ui'
import { Row, Column } from '@carbonplan/components'
import { Right } from '@carbonplan/icons'
import { FontSample } from '../../components/samples'
import Section from '../../components/section'

# Font

Our design system is built around four fonts from the family [Relative](https://www.colophon-foundry.org/typefaces/relative/).

{<>
  <Box sx={{ fontSize: [6], fontFamily: 'body', letterSpacing: '0em' }}>
    Relative Pro Book
  </Box>
  <Box sx={{ fontSize: [6], fontFamily: 'heading', letterSpacing: '0em' }}>
    Relative Pro Medium
  </Box>
  <Box sx={{ fontSize: [6], fontFamily: 'faux', letterSpacing: '0em' }}>
    Relative Pro Faux Mono
  </Box>
  <Box sx={{ fontSize: [6], fontFamily: 'mono', letterSpacing: '0em' }}>
    Relative Mono
  </Box>
</>}

These four fonts can be specified using the keys `body` `heading` `faux` or `mono` for both the `fontFamily` and `letterSpacing` properties.

Book is used in all body copy, typically at 18px, just like the text you are reading now. Medium is used for headings with a large font, and should always be used with reduced tracking and reduced line spacing.

```jsx live
<Box
  sx={{
    fontSize: [5],
    fontFamily: 'heading',
    letterSpacing: 'heading',
    lineHeight: 'heading',
  }}
>
  Relative Pro Medium (-15 tracking)
</Box>
```

Mono should generally only be used for numbers (e.g. in dashboards), axis labels on charts, and in small caps. Faux can be used as a complement to the others to add diversity to a composition (e.g. in tables, maps, infographics). Both Mono and Faux should almost always be used with significantly increased tracking, especially if in all caps.

```jsx live
<Box
  sx={{
    fontSize: [4],
    fontFamily: 'faux',
    letterSpacing: 'faux',
    mb: [3],
  }}
>
  Relative Pro Faux Mono (+50 tracking)
</Box>
<Box
  sx={{
    fontSize: [2],
    fontFamily: 'mono',
    letterSpacing: 'mono',
  }}
>
  RELATIVE PRO MONO 11 PITCH (+70 tracking)
</Box>
```

## Fallbacks outside of web

When custom fonts aren't available (e.g., Google Docs, Mailchimp), we should use the following fallbacks:

{<>
  <style>{`@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');`}</style>
  <Row columns={[6]} sx={{ mb: 3 }}>
    <Column start={[1]} width={[3]}>
      <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ fontSize: [4, 5, 5, 6], fontFamily: 'body', letterSpacing: 'body' }}>
          Relative Pro
        </Box>
        <Right />
      </Flex>
    </Column>
    <Column start={[4]} width={[3]}>
      <Box sx={{ fontSize: [4, 5, 5, 6], fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
        Helvetica Neue
      </Box>
    </Column>
  </Row>
  <Row columns={[6]} sx={{ mb: 3 }}>
    <Column start={[1]} width={[3]}>
      <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ fontSize: [4, 5, 5, 6], fontFamily: 'faux', letterSpacing: 'faux' }}>
          Relative Faux
        </Box>
        <Right />
      </Flex>
    </Column>
    <Column start={[4]} width={[3]}>
      <Box sx={{ fontSize: [4, 5, 5, 6], fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
        Helvetica Neue
      </Box>
    </Column>
  </Row>
  <Row columns={[6]} sx={{ textTransform: 'uppercase' }}>
    <Column start={[1]} width={[3]}>
      <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ fontSize: [4, 5, 5, 6], fontFamily: 'mono', letterSpacing: 'mono' }}>
          Relative Mono
        </Box>
        <Right />
      </Flex>
    </Column>
    <Column start={[4]} width={[3]}>
      <Box sx={{ fontSize: [4, 5, 5, 6], fontFamily: '"Roboto Mono", monospace', letterSpacing: 'mono' }}>
        Roboto Mono
      </Box>
    </Column>
  </Row>
</>}

In extreme cases (e.g. Mailchimp default fonts) Helvetica Neue should be changed to Helvetica and Roboto Mono should be changed to a different monospaced system font.

export default ({ children }) => <Section name='font'>{children}</Section>
