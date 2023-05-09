import Section from '../../components/section'

# Filter

Used to filter values, with radio group or checkbox group like behavior.

{/* prettier-ignore */}
```jsx live
() => {
  const [values, setValues] = useState({One: true, Two: true, Three: true})
  return (
    <Filter
      values={values}
      setValues={setValues}
      showAll
    />
  )
}
```

You can set the multiSelect property to false to get radio-like behavior.

{/* prettier-ignore */}
```jsx live
() => {
  const [values, setValues] = useState({One: true, Two: false, Three: false})
  return (
    <Filter
      values={values}
      setValues={setValues}
      multiSelect={false}
    />
  )
}
```

Additional props, `label`, `labels`, and `colors`, are available for styling.

{/* prettier-ignore */}
```jsx live
() => {
  const [values, setValues] = useState({One: true, Two: false, Three: false})
  return (
    <Filter
      values={values}
      setValues={setValues}
      showAll
      label='Quantity'
      labels={{One: '01', Two: '02', Three: '03'}}
      colors={{One: 'red', Two: 'yellow', Three: 'teal'}}
    />
  )
}
```

If you would like to specify a value order distinct from the default object order, you may use the `order` prop.

{/* prettier-ignore */}
```jsx live
() => {
  const [values, setValues] = useState({1: true, 2: false, 3: false})
  return (
    <Filter
      values={values}
      setValues={setValues}
      multiSelect={false}
      order={[3, 2, 1]}
    />
  )
}
```

export default ({ children }) => <Section name='filter'>{children}</Section>
