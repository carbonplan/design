import Section from '../components/section'

# Colorbar

A colorbar useful for labeling graphics, maps, and any other places where we use colormaps.

There are several options for styling, including making it `horizontal`, using `discrete` values, and setting the `width` and `height`.

```jsx live
;() => {
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
;() => {
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
;() => {
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

export default ({ children }) => <Section name='colorbar'>{children}</Section

>
