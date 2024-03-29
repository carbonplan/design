import Section from '../../components/section'

# Logo

Below we show how to embed our logo and monogram via our React components. You can also [download the assets](https://images.carbonplan.org/logos.zip) directly in SVG and PNG formats with both light and dark modes.

## Wordmark

Our wordmark is built around our core font and the concepts of circularity and enclosure. The primary color format is Chalk on Carbon, but it can also be used in Carbon on Chalk (or White). It can be rendered at multiple sizes.

```jsx live
<Logo sx={{ width: 150, display: 'block' }} />
<Logo sx={{ width: 200, display: 'block' }} />
<Logo sx={{ width: 300, display: 'block' }} />
```

## Monogram

Our monogram is narrower than the logo and useful for social media cards, favicons, and other highlights. Coloring is the same as for the logo, and it can be rendered at multiple sizes, including very small sizes.

```jsx live
<Monogram sx={{ width: 40, display: 'block' }} />
<Monogram sx={{ width: 80, display: 'block' }} />
<Monogram sx={{ width: 120, display: 'block' }} />
```

export default ({ children }) => <Section name='logo'>{children}</Section>
