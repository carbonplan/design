import Section from '../../components/section'

# Callout

A simple combination of text and label for calling out content.

```jsx live
<Callout label='callout' href='/design/callout'>
  This is a description of a link
</Callout>
```

Similar to the `Button` component, if you pass an `href` it will render an `<a>` element and otherwise render a `<button>`. When using an `href` you can also pass the extra `internal` and `tracking` options used by the `Link` component.

We often use a horizontal series of callouts, e.g. to highlight additional content to explore at the end of a page.

```jsx live
<Row columns={6}>
  <Column start={1} width={2}>
    <Callout label='callout 1'>This is a description of the first link</Callout>
  </Column>
  <Column start={3} width={2}>
    <Callout label='callout 2'>
      This is a description of a different link
    </Callout>
  </Column>
  <Column start={5} width={2}>
    <Callout label='callout 2'>This is a description of a third link</Callout>
  </Column>
</Row>
```

Similar to buttons, we can invert the color scheme for a more subtle callout.

```jsx live
<Callout label='callout' inverted>
  This is a description of a link
</Callout>
```

export default ({ children }) => <Section name='callout'>{children}</Section>
