import Section from '../../components/section'

# Icons

A family of simple icons are useful for basic UX elements. They are available in the [`@carbonplan/icons`](https://github.com/carbonplan/icons) package.

```jsx live=True
<Check />
<Question />
<X />
<ArrowThin />
<CheckCircle />
<QuestionCircle />
<XCircle />
<Info />
<Globe  />
<Search />
<Triangle />
<Reset />
<Sun />
```

We use arrows extensively, both to indicate the directionality of content (e.g. in buttons and links), and to add visual interest.

```jsx live=True
<Arrow />
<Left />
<Up />
<Right />
<Down />
<RotatingArrow />
```

Icons can easily be wrapped in the `IconButton` from `theme-ui` to create buttons. See the [Dimmer](/dimmer) component as an example.

export default ({ children }) => <Section name='icons'>{children}</Section>
