import Section from '../components/section'

# Select

Combine with options to create a menu for selection.

```jsx live
<Select>
  <option>First option</option>
  <option>Second option</option>
  <option>Third option</option>
</Select>
```

Available in different sizes.

```jsx live
{
  ;['xs', 'sm', 'md'].map((size) => (
    <Select size={size} sx={{ display: 'block', mb: [3] }}>
      <option>First option</option>
      <option>Second option</option>
    </Select>
  ))
}
```

export default ({children}) => <Section name='select'>{children}</Section

>
