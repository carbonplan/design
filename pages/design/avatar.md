import Section from '../../components/section'

# Avatar

Show icons of people with options for sources and colors.

You can specify the image directly with a URL (`src`). We have also created standardized, black and white images for all of our team members that we host. You can specify these using the name of one of our team members (case insensitive) (`name`). You can also specify a GitHub username (`github`).

```jsx live
<Group direction='horizontal' spacing={2}>
  <Avatar name={'Joe Hamman'} />
  <Avatar src={'https://images.carbonplan.org/team/joe-hamman.png'} />
  <Avatar github={'jhamman'} />
</Group>
```

You can vary the width.

```jsx live
<Group direction='horizontal' spacing={2}>
  <Avatar width={90} name={'Joe Hamman'} />
  <Avatar width={60} name={'Joe Hamman'} />
  <Avatar width={30} name={'Joe Hamman'} />
  <Avatar width={20} name={'Joe Hamman'} />
</Group>
```

And you can add a color overlay, which additionally applies a crushed black and white image filter for the image underneath.

```jsx live
{
  colors.map((color, index) => (
    <Avatar
      key={color}
      color={color}
      width={90}
      sx={{ mr: 2, mb: 2 }}
      name={'Joe Hamman'}
    />
  ))
}
```

Finally we have an `AvatarGroup` component for rendering a group of people icons. While essentially just a wrapper for `Group` and `Avatar`, it includes some additional options for responsive spacing and alignment.

Here's a simple horizontal group with fixed width and spacing.

```jsx live
<AvatarGroup
  direction='horizontal'
  width={90}
  spacing={2}
  members={[
    { name: 'Joe Hamman', color: 'red' },
    { name: 'Joe Hamman', color: 'orange' },
    { name: 'Joe Hamman', color: 'yellow' },
    { name: 'Joe Hamman', color: 'pink' },
  ]}
/>
```

Here is a fixed count group designed for up to 6 avatars where each avatar scales to 100% of its allocated space and the group is right aligned on mobile and tablet and left aligned on desktop.

```jsx live
<AvatarGroup
  fixedCount={6}
  spacing={2}
  width={'100%'}
  align={['right', 'right', 'left', 'left']}
  members={[
    { name: 'Joe Hamman', color: 'red' },
    { name: 'Joe Hamman', color: 'orange' },
  ]}
/>
```

export default ({ children }) => <Section name='avatar'>{children}</Section>
