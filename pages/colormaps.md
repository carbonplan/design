import { Box } from 'theme-ui'
import Section from '../components/section'
import { colormaps } from '@carbonplan/colormaps'
import { ColormapSample } from '../components/samples'

# Colormaps

We use colormaps for a variety of data visualization needs at CarbonPlan, especially maps. They are available in the [`@carbonplan/colormaps`](https://github.com/carbonplan/colormaps) package. They are all derived from a variant of the primary CarbonPlan color palette, modified slightly for better balance in hue and luminance, and further refined using bezier interpolation and brightness correction from the `chroma-js` library. Are all designed for use with both light and dark mode. They attempt to be both aesthetically pleasing and perceptually well-balanced.

## Sequential single-hue

<Box>
  {colormaps.filter(d => d.type === 'sequentialSingleHue').map((d) => (
    <ColormapSample key={d} name={d.name} />
  ))}
</Box>

## Sequential multi-hue

<Box>
  {colormaps.filter(d => d.type === 'sequentialMultiHue').map(
    (d) => (
      <ColormapSample key={d} name={d.name} />
    )
  )}
</Box>

## Diverging

<Box>
  {colormaps.filter(d => d.type === 'diverging').map((d) => (
    <ColormapSample key={d} name={d.name} />
  ))}
</Box>

## Cyclical

<Box>
  {colormaps.filter(d => d.type === 'cyclical').map((d) => (
    <ColormapSample key={d} name={d.name} />
  ))}
</Box>

export default ({children}) => <Section name='colormaps'>{children}</Section>
