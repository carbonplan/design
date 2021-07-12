import { Box } from 'theme-ui'
import Section from '../components/section'
import { FontSample } from '../components/samples'

# Font

Our design system is built around four fonts from the family [Relative](https://www.colophon-foundry.org/typefaces/relative/).

<Box
  sx={{
    fontSize: [6],
    fontFamily: 'body',
    letterSpacing: 'body',
    letterSpacing: '0em',
  }}
  >
  Relative Pro Book
</Box>
<Box
  sx={{
    fontSize: [6],
    fontFamily: 'heading',
    letterSpacing: 'heading',
    letterSpacing: '0em',
  }}
>
  Relative Pro Medium
</Box>
<Box
  sx={{
    fontSize: [6],
    fontFamily: 'faux',
    letterSpacing: 'faux',
    letterSpacing: '0em',
  }}
>
  Relative Pro Faux Mono
</Box>
<Box
  sx={{
    fontSize: [6],
    fontFamily: 'mono',
    letterSpacing: 'mono',
    letterSpacing: '0em',
  }}
>
  Relative Pro Mono
</Box>

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

export default ({children}) => <Section name='font'>{children}</Section>