import Section from '../../components/section'

# Colorbar

A colorbar useful for labeling graphics, maps, and any other places where we use colormaps.

There are several options for styling, including making it `horizontal`, using `discrete` values, and setting the `width` and `height`.

```jsx live
() => {
  const colormap = useThemedColormap('warm', { count: 5 })
  return (
    <>
      <Colorbar colormap={colormap} horizontal />
      <Colorbar colormap={colormap} horizontal discrete />
      <Colorbar colormap={colormap} horizontal width={200} />
      <Colorbar colormap={colormap} horizontal discrete width={200} />
    </>
  )
}
```

You can also add a label (with optional units) and limit values, in either vertical or horizontal orientation. These are typically used for figure or map legends.

```jsx live
() => {
  const colormap = useThemedColormap('warm')
  return (
    <Colorbar
      colormap={colormap}
      units={'units'}
      label={'Label'}
      clim={[0, 10]}
    />
  )
}
```

```jsx live
() => {
  const colormap = useThemedColormap('warm')
  return (
    <Colorbar
      colormap={colormap}
      units={'units'}
      label={'Label'}
      clim={[0, 10]}
      horizontal
    />
  )
}
```

If you provide a `setClim` prop, the colorbar becomes modifiable, allowing you to click and drag the numbers to change the limits of the color scale.

```jsx live
() => {
  const colormap = useThemedColormap('warm')
  const [clim, setClim] = useState([0, 10])
  return (
    <Colorbar
      colormap={colormap}
      units={'units'}
      label={'Label'}
      clim={clim}
      setClim={setClim}
    />
  )
}
```

```jsx live
() => {
  const colormap = useThemedColormap('warm')
  const [clim, setClim] = useState([0, 10])
  return (
    <Colorbar
      colormap={colormap}
      units={'units'}
      label={'Label'}
      clim={clim}
      setClim={setClim}
      horizontal
    />
  )
}
```

A couple other style configurations are possible. For example, here's a version that moves the color limits to the bottom with adjustability, increases their size, removes the label, and fills the width.

```jsx live
() => {
  const colormap = useThemedColormap('warm')
  const [clim, setClim] = useState([0, 10])
  return (
    <Colorbar
      colormap={colormap}
      width={'100%'}
      clim={clim}
      setClim={setClim}
      sxClim={{fontSize: [1, 1, 1, 2], pt: [1]}}
      horizontal
      bottom
    />
  )
}
```

export default ({ children }) => <Section name='colorbar'>{children}</Section>
