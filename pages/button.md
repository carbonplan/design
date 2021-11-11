import Section from '../components/section'

# Button

Combine text with icons to form buttons.

Available in five sizes that leverage our font size scale.

```jsx live=True
<Button size='xs' prefix={<Up/>}>Button</Button>
<Button size='sm' prefix={<Up/>}>Button</Button>
<Button size='md' prefix={<Up/>}>Button</Button>
<Button size='lg' prefix={<Up/>}>Button</Button>
<Button size='xl' prefix={<Up/>}>Button</Button>
```

You can put an icon at the front, or back, or both.

```jsx live=True
<Button prefix={<Reset/>}>Reset</Button>
<Button prefix={<Left/>}>Back</Button>
<Button suffix={<Right/>}>Forward</Button>
<Button prefix={<Up/>} suffix={<Up/>}>Up</Button>
<Button prefix={<X/>}>Cancel</Button>
```

The default button is in `primary` and transitions to `secondary`. You can use `inverted` to flip it.

```jsx live=True
<Button prefix={<Up/>}>Button</Button>
<Button prefix={<Up/>} inverted>Inverted button</Button>
```

You can also specify the color of the button as a whole.

```jsx live=True
{
  colors.map((color) => (
    <Button key={color} sx={{ color: color }} suffix={<RotatingArrow />}>
      <Box as='span' sx={{ textTransform: 'capitalize' }}>
        {color}
      </Box>
    </Button>
  ))
}
```

Or just specify the color for the icon.

```jsx live=True
{
  colors.map((color) => (
    <Button key={color} suffix={<RotatingArrow sx={{ color: color }} />}>
      <Box as='span' sx={{ textTransform: 'capitalize' }}>
        {color}
      </Box>
    </Button>
  ))
}
```

You can pass an `href` to render a link using the same styling as our buttons. This will be rendered as an `<a>` element rather than a `<button>`. When using an `href` you can also pass the extra `internal` and `tracking` options used by the `Link` component.

```jsx live=True
<Button href='/button' suffix={<RotatingArrow />}>
  This is a link
</Button>
```

export default ({ children }) => <Section name='button'>{children}</Section>
