import Section from '../components/section'

# Tag

Use to indicate a binary option. Useful for filters on lists, map layers, etc.

Here are two, one of which is set to on and the other off.

```jsx live=True
<Tag label={'Always on'} value={true} sx={{ mr: [2] }}>
  Always on
</Tag>
<Tag label={'Always off'} value={false} >
  Always off
</Tag>
```

They can be made clickable by adding a toggle method. Here's an example where we add state.

```jsx live=True
;() => {
  const [value, setValue] = useState(true)
  return (
    <Tag value={value} onClick={() => setValue((prev) => !prev)}>
      Click me
    </Tag>
  )
}
```

Here are a bunch in different colors.

```jsx live=True
{
  colors.map((color) => (
    <Tag key={color} sx={{ color: color, mr: [2] }}>
      {color}
    </Tag>
  ))
}
```

export default ({children}) => <Section name='tag'>{children}</Section

>
