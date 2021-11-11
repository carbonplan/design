import { Box } from 'theme-ui'
import Section from '../components/section'
import { ColorSample, FontSample } from '../components/samples'
import { Dimmer } from '@carbonplan/components'

# Color

Our primary colors are Carbon and Chalk.

<Box sx={{ my: [5] }}>
  <ColorSample color='#1b1e23' hex='1b1e23' label='carbon' border />
  <ColorSample color='#ebebec' hex='ebebec' label='chalk' border />
</Box>

The core design is built around Chalk on Carbon. Changing the theme to light mode reverts it to Carbon on White (we use pure White rather than Chalk in light mode for improved contrast). These two colors are available in our theme as `primary` and `background` depending on whether you are in `light` more or `dark` mode. You can use the light dimmer to change the theme.

<Dimmer />

We also have additional shades for accenting: `primary` `secondary` `muted` and `hinted`. Here is text in a few sizes and fonts rendered in those shades.

<FontSample color='primary' label='Primary' />
<FontSample color='secondary' label='Secondary' />
<FontSample color='muted' label='Muted' />
<FontSample color='hinted' label='Hinted' />

The `hinted` shade should almost never be used for text and should instead be used to provide a minimal background.

> It is used, for example, as the background for code block and blockquote elements, like this one.

## Accent colors

We have a series of accent colors. Sometimes they play a semantic purpose, e.g. green for forests, orange for soil, and cool gray for mineralization. Although semantic consistency is not strictly required, within a given context, colors should be chosen for semantic purposes, or purely aesthetic purposes, but not both!

For example, we would never use pink to represent direct air capture on one site, and then use it to represent energy systems on another site. But a subset of colors can be used purely for aesthetic purposes in an isolated setting.

<Box sx={{ my: [5] }}>
  <ColorSample color='red' hex='f16f71' />
  <ColorSample color='orange' hex='eb9755' />
  <ColorSample color='yellow' hex='d4c05d' />
  <ColorSample color='green' hex='7db269' />
  <ColorSample color='teal' hex='65b9c4' />
  <ColorSample color='blue' hex='8b9fd1' />
  <ColorSample color='purple' hex='b386bc' />
  <ColorSample color='pink' hex='e487b5' />
  <ColorSample color='grey' hex='a9b4c5' />
</Box>

When using colors to enhance a design without semantic meaning, rather than use the full subset, we generally pick one of several thematic combinations as a color "cycle", and then cycle through those colors across the page.

For example, this triad:

<Box sx={{ my: [5] }}>
  <ColorSample color='red' hex='f16f71' />
  <ColorSample color='yellow' hex='eb9755' />
  <ColorSample color='teal' hex='d4c05d' />
</Box>

Or the warm quartet:

<Box sx={{ my: [5] }}>
  <ColorSample color='pink' hex='f16f71' />
  <ColorSample color='red' hex='f16f71' />
  <ColorSample color='orange' hex='eb9755' />
  <ColorSample color='yellow' hex='d4c05d' />
</Box>

Or the cool quartet:

<Box sx={{ my: [5] }}>
  <ColorSample color='green' hex='f16f71' />
  <ColorSample color='teal' hex='f16f71' />
  <ColorSample color='blue' hex='8b9fd1' />
  <ColorSample color='purple' hex='d4c05d' />
</Box>

export default ({ children }) => <Section name='color'>{children}</Section>
