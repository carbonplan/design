import Section from '../../components/section'

# Slider

Basic responsive slider. All the usual props can be added.

{/* prettier-ignore */}
```jsx live
() => {
  const [value, setValue] = useState(5)
  return (
    <>
      Value: {value}
      <Slider
        value={value}
        min={0}
        max={10}
        step={1}
        onChange={(e) => setValue(parseFloat(e.target.value))}
      />
    </>
  )
}
```

A color can be specified.

```jsx live
{
  colors.map((color, index) => <Slider sx={{ color: color, mb: [4] }} />)
}
```

export default ({ children }) => <Section name='slider'>{children}</Section>
