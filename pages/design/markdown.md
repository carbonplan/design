import Section from '../../components/section'

# Markdown

This section demonstrates our styling of markdown content.

## This is a heading 2

### This is a heading 3

#### This is a heading 4

##### This is a heading 5

###### This is a heading 6

This is body copy.

> This is a block quote

This is more body copy.

This is a list

- item 1
- item 2
- item 3

This is an ordered list

1. item 1
2. item 2
3. item 3

This text uses _emphasize_ formatting.

This text uses **strong** formatting.

This text uses ~~strikethrough~~ formatting.

---

This is a [link](/markdown)

This is a code block.

```jsx
const a = 2
```

This is body copy that includes `inline code`.

This is a code block with a live editor.

```jsx live
const a = 2
```

This is a code block with `jsx` syntax highlighting.

```jsx
// comment
function formatName(user) {
  return user.firstName + ' ' + user.lastName
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
}

const element = <h1>Hello, {formatName(user)}!</h1>
```

This is a code block with `python` syntax highlighting.

```python
# comment
@decorator(param=1)
def f(x):
    """ Syntax Highlighting Demo
        @param x Parameter"""
    s = ("Test", 2+3, {'a': 'b'}, x)   # Comment
    print s[0].lower()

class Foo:
    def __init__(self):
        byte_string = 'newline:\n also newline:\x0a'
        text_string = u"Cyrillic Я is \u042f. Oops: \u042g"
        self.makeSense(whatever=1)

    def makeSense(self, whatever):
        self.sense = whatever
        if True:
            pass

x = len('abc')
print(f.__doc__)
```

export default ({ children }) => <Section name='markdown'>{children}</Section>
