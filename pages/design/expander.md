import Section from '../../components/section'

# Expander

Used to expand panels and such.

{/* prettier-ignore */}
```jsx live
() => {
  const [expanded, setExpanded] = useState(false)
  return (
    <Box sx={{ p: [3], bg: 'hinted', mr: [2], fontSize: [3] }}>
      Click to expand
      <Expander
        value={expanded}
        onClick={() => setExpanded(!expanded)}
        sx={{ position: 'relative', top: ['2px'] }}
      />
      {expanded && <Box>This is extra content</Box>}
    </Box>
  )
}
```

export default ({ children }) => <Section name='expander'>{children}</Section>
