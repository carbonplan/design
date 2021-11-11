import Section from '../components/section'

# Badge

Used for numbers and counters with lots of color options.

```jsx live
<Badge sx={{ mr: [2] }}>200</Badge>
<Badge sx={{ mr: [2] }}>10</Badge>
<Badge sx={{ mr: [2] }}>100k</Badge>
```

```jsx live
<Badge sx={{ mr: [2], color: 'secondary' }}>200</Badge>
<Badge sx={{ mr: [2], color: 'secondary' }}>10</Badge>
<Badge sx={{ mr: [2], color: 'secondary' }}>100k</Badge>
```

```jsx live
{
  colors.map((color, index) => (
    <Badge key={color} sx={{ mr: [2], color: color }}>
      {index}
    </Badge>
  ))
}
```

export default ({children}) => <Section name='badge'>{children}</Section>
