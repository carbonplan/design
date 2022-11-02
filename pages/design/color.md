import { Box } from 'theme-ui'
import { Dimmer } from '@carbonplan/components'
import { ColorSample, FontSample } from '../../components/samples'
import Section from '../../components/section'

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
  <ColorSample color='red' />
  <ColorSample color='orange' />
  <ColorSample color='yellow' />
  <ColorSample color='green' />
  <ColorSample color='teal' />
  <ColorSample color='blue' />
  <ColorSample color='purple' />
  <ColorSample color='pink' />
  <ColorSample color='grey' />
</Box>

When using colors to enhance a design without semantic meaning, rather than use the full subset, we generally pick one of several thematic combinations as a color "cycle", and then cycle through those colors across the page.

For example, this triad:

<Box sx={{ my: [5] }}>
  <ColorSample color='red' />
  <ColorSample color='yellow' />
  <ColorSample color='teal' />
</Box>

Or the warm quartet:

<Box sx={{ my: [5] }}>
  <ColorSample color='pink' />
  <ColorSample color='red' />
  <ColorSample color='orange' />
  <ColorSample color='yellow' />
</Box>

Or the cool quartet:

<Box sx={{ my: [5] }}>
  <ColorSample color='green' />
  <ColorSample color='teal' />
  <ColorSample color='blue' />
  <ColorSample color='purple' />
</Box>

## Usage

String names can be used to reference colors via `theme-ui`, for example

```jsx live
<Box sx={{ color: 'red' }}>This is red</Box>
```

You can also use the `Colors` component to quickly get an inline color

```jsx live
<Colors.Red>This is red</Colors.Red>
```

export default ({ children }) => <Section name='color'>{children}</Section>
