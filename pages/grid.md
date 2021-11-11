import Section from '../components/section'

# Grid

Our design system makes extensive use of a grid. For a good reference on grid systems in design, we recommend [this book](https://bookshop.org/books/grid-systems-in-graphic-design-a-visual-communication-manual-for-graphic-designers-typographers-and-three-dimensional-designers/9783721201451) by Josef Müller-Brockmann. Extra special thanks to Jonny Black for teaching our team grid systems in the Spring of 2021, using this book as a reference.

Our system uses two custom components to power the grid, `Row` and `Column`, both of which are fairly simple wrappers around the built in CSS Grid layout engine. You can see the grid behind our design on all our sites by pressing ⌘ + ; (command + semicolon) via the `Guide` component, which is included in the `Layout` by default.

The Row component builds in our standard set of column counts and gutter spacings across desktop, tablet, and mobile. We use 12 columns on desktop, 8 on tablet, and 6 on mobile. Columns then specify start locations and widths. Rows can be nested within other rows, just make sure you use the correct number of columns. For example, the text you are currently reading is contained within a 6 width column in a 6 column row nested in a 12 column row.

Below we'll use our components to create a few 6 column Rows, and within each create different column combnations with varied starts and widths.

```jsx live
<Row columns={[6]}>
  <Column start={[1]} width={[1]}>
    <GridSample>1</GridSample>
  </Column>
  <Column start={[2]} width={[1]}>
    <GridSample>2</GridSample>
  </Column>
  <Column start={[3]} width={[1]}>
    <GridSample>2</GridSample>
  </Column>
  <Column start={[4]} width={[1]}>
    <GridSample>4</GridSample>
  </Column>
  <Column start={[5]} width={[1]}>
    <GridSample>5</GridSample>
  </Column>
  <Column start={[6]} width={[1]}>
    <GridSample>6</GridSample>
  </Column>
</Row>
```

```jsx live
<Row columns={[6]}>
  <Column start={[1]} width={[1]}>
    <GridSample>1</GridSample>
  </Column>
  <Column start={[2]} width={[2]}>
    <GridSample>2</GridSample>
  </Column>
  <Column start={[5]} width={[1]}>
    <GridSample>3</GridSample>
  </Column>
  <Column start={[6]} width={[1]}>
    <GridSample>4</GridSample>
  </Column>
</Row>
```

```jsx live
<Row columns={[6]}>
  <Column start={[1]} width={[2]}>
    <GridSample>1</GridSample>
  </Column>
  <Column start={[3]} width={[2]}>
    <GridSample>2</GridSample>
  </Column>
  <Column start={[5]} width={[2]}>
    <GridSample>3</GridSample>
  </Column>
</Row>
```

```jsx live
<Row columns={[6]}>
  <Column start={[1]} width={[2]}>
    <GridSample>1</GridSample>
  </Column>
  <Column start={[3]} width={[4]}>
    <GridSample>2</GridSample>
  </Column>
</Row>
```

```jsx live
<Row columns={[6]}>
  <Column start={[1]} width={[3]}>
    <GridSample>1</GridSample>
  </Column>
  <Column start={[4]} width={[3]}>
    <GridSample>2</GridSample>
  </Column>
</Row>
```

export default ({ children }) => <Section name='grid'>{children}</Section>
