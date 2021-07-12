import Section from '../components/section'

# Toggle

Used for binary options. 

```jsx live
() => {
  const [toggle, setToggle] = useState(true)
  return <Toggle 
    value={toggle} 
    onClick={() => setToggle(!toggle)}
  />
}
```

Can be disabled.

```jsx live
<Toggle disabled/>
```

Can also have a custom color.

```jsx live
() => {
  const [toggle, setToggle] = useState(true)
  return colors.map(color => (
    <Toggle 
      key={color}
      value={toggle} 
      sx={{color: color, mr: [2]}}
      onClick={() => setToggle(!toggle)}
    />
  ))
}
```

export default ({children}) => <Section name='toggle'>{children}</Section>