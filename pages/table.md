import Section from '../components/section'

# Table

A standardized design for tables powered by a simple tabular data structure, with several styling options. This is the default style, which includes a styled index column.

```jsx live
<Table
  columns={[6, 7, 7, 7]}
  start={[[1], [1, 3, 3, 3], [1, 5, 5, 5]]}
  width={[
    [6, 2, 2, 2],
    [6, 2, 2, 2],
    [6, 2, 2, 2],
  ]}
  data={[
    ['Row 0', 'Row 0 column 1', 'Row 0 column 2'],
    ['Row 1', 'Row 1 column 1', 'Row 1 column 2'],
  ]}
  sx={{ my: [5] }}
/>
```

You can add a header with a color, remove the index styling, and turn the top and bottom borders off, which usually looks more elegant unless the borders are especially helpful for dividing content, e.g. in an article.

```jsx live
<Table
  header={'Header'}
  color={'secondary'}
  columns={[6, 7, 7, 7]}
  start={[[1], [1, 3, 3, 3], [1, 5, 5, 5]]}
  width={[
    [6, 2, 2, 2],
    [6, 2, 2, 2],
    [6, 2, 2, 2],
  ]}
  data={[
    ['Row 0', 'Row 0 column 1', 'Row 0 column 2'],
    ['Row 1', 'Row 1 column 1', 'Row 1 column 2'],
  ]}
  borderTop={false}
  borderBottom={false}
  index={false}
  sx={{ my: [3] }}
/>
```

export default ({children}) => <Section name='table'>{children}</Section

>
