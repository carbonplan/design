import { useState } from 'react'
import { Styled, Container, Box, Text, Link } from 'theme-ui'
import {
  Layout,
  Logo,
  Monogram,
  Dimmer,
  Tag,
  Toggle,
  Expander,
  Badge,
  Icons,
} from '@carbonplan/components'

const { Check, Question, Info } = Icons

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'purple',
  'pink',
  'grey',
]

function Index() {
  const [tag, setTag] = useState(true)
  const [toggle, setToggle] = useState(true)
  const [expander, setExpander] = useState(false)

  return (
    <Layout>
      <Box sx={{ maxWidth: ['100%', '100%', '64%'], mb: [6] }}>
        <Text as='h1' variant='styles.h1' sx={{ mt: [4, 5, 5] }}>
          CarbonPlan Design
        </Text>
        <Styled.p>
          This site demos the components of our design system. The core elements
          were developed with{' '}
          <Link href='https://ot.studio' target='_blank' rel='noreferrer'>
            Oridnary Things
          </Link>{' '}
          in Spring 2020, and the system has evolved since. (They are amazing,
          by the way. Definitely talk to them about your next project.) Most
          components of the system can be used from our javascript packages{' '}
          <Link
            href='https://github.com/carbonplan/theme'
            target='_blank'
            rel='noreferrer'
          >
            @carbonplan/theme
          </Link>{' '}
          and{' '}
          <Link
            href='https://github.com/carbonplan/components'
            target='_blank'
            rel='noreferrer'
          >
            @carbonplan/components
          </Link>
          . This website and its{' '}
          <Link
            href='https://github.com/carbonplan/design/blob/main/pages/index.js'
            target='_blank'
            rel='noreferrer'
          >
            source code
          </Link>{' '}
          are good examples of how to use the system.
        </Styled.p>
        <Styled.h2>Logo</Styled.h2>
        <Styled.p>
          Our logo is built around our core font and the concepts of circularity
          and enclosure. The primary color format is Chalk on Carbon, but it can
          also be used in Carbon on Chalk (or White). It can be rendered at
          multiple sizes.
        </Styled.p>
        <Box sx={{ mb: [3] }}>
          <Logo sx={{ width: 150 }} />
          <Text
            sx={{
              fontSize: [2],
              fontFamily: 'mono',
              letterSpacing: 'mono',
            }}
          >
            150 px
          </Text>
        </Box>
        <Box sx={{ mb: [3] }}>
          <Logo sx={{ width: 200 }} />
          <Text
            sx={{
              fontSize: [2],
              fontFamily: 'mono',
              letterSpacing: 'mono',
            }}
          >
            200 px
          </Text>
        </Box>
        <Box sx={{ mb: [3] }}>
          <Logo sx={{ width: 300 }} />
          <Text
            sx={{
              fontSize: [2],
              fontFamily: 'mono',
              letterSpacing: 'mono',
            }}
          >
            300 px
          </Text>
        </Box>
        <Styled.h2>Monogram</Styled.h2>
        <Styled.p>
          Our monogram is narrower than the logo and useful for social media
          cards, favicons, and other highlights. Coloring is the same as for the
          logo, and it can be rendered at multiple sizes, including very small
          sizes.
        </Styled.p>
        <Box sx={{ mb: [3] }}>
          <Monogram sx={{ width: 40 }} />
          <Text
            sx={{
              fontSize: [2],
              fontFamily: 'mono',
              letterSpacing: 'mono',
            }}
          >
            40 px
          </Text>
        </Box>
        <Box sx={{ mb: [3] }}>
          <Monogram sx={{ width: 80 }} />
          <Text
            sx={{
              fontSize: [2],
              fontFamily: 'mono',
              letterSpacing: 'mono',
            }}
          >
            80 px
          </Text>
        </Box>
        <Box sx={{ mb: [3] }}>
          <Monogram sx={{ width: 120 }} />
          <Text
            sx={{
              fontSize: [2],
              fontFamily: 'mono',
              letterSpacing: 'mono',
            }}
          >
            120 px
          </Text>
        </Box>
        <Styled.h2>Typography</Styled.h2>
        <Styled.p>
          Our design system is built around four fonts from the family{' '}
          <Link
            href='https://www.colophon-foundry.org/typefaces/relative/'
            target='_blank'
            rel='noreferrer'
          >
            Relative
          </Link>
          .
        </Styled.p>
        <Text
          sx={{
            fontSize: [6],
            fontFamily: 'body',
            letterSpacing: 'body',
            letterSpacing: '0em',
          }}
        >
          Relative Pro Book
        </Text>
        <Text
          sx={{
            fontSize: [6],
            fontFamily: 'heading',
            letterSpacing: 'heading',
            letterSpacing: '0em',
          }}
        >
          Relative Pro Medium
        </Text>
        <Text
          sx={{
            fontSize: [6],
            fontFamily: 'faux',
            letterSpacing: 'faux',
            letterSpacing: '0em',
          }}
        >
          Relative Pro Faux Mono
        </Text>
        <Text
          sx={{
            fontSize: [6],
            fontFamily: 'mono',
            letterSpacing: 'mono',
            letterSpacing: '0em',
          }}
        >
          Relative Pro Mono 11 Pitch
        </Text>
        <Styled.p>
          Book is used in all body copy, typically at 18px, just like the text
          you are reading now. Medium is used for headings with a large font,
          and should always be used with reduced tracking, and reduced line
          spacing if the heading extends over multiple lines. Mono should
          generally only be used for numbers (e.g. in dashboards), axis labels
          on charts, and in small caps. Faux can be used as a complement to the
          others to add diversity to a composition (e.g. in tables, maps,
          infographics). Both Mono and Faux should almost always be used with
          significantly increased tracking, especially if in all caps.
        </Styled.p>
        <Text
          sx={{
            fontSize: [5],
            fontFamily: 'heading',
            letterSpacing: 'heading',
            mb: [2],
          }}
        >
          Relative Pro Medium (-15 tracking)
        </Text>
        <Text
          sx={{
            fontSize: [4],
            fontFamily: 'faux',
            letterSpacing: 'faux',
            mb: [2],
          }}
        >
          Relative Pro Faux Mono (+50 tracking)
        </Text>
        <Text
          sx={{
            fontSize: [2],
            fontFamily: 'mono',
            letterSpacing: 'mono',
            mb: [2],
          }}
        >
          RELATIVE PRO MONO 11 PITCH (+70 tracking)
        </Text>
        <Styled.h2>Layout</Styled.h2>
        <Styled.p>
          We provide a core layout that is shared acros many of our sites,
          though some sites and apps may use custom layouts (e.g. maps,
          dashboards, databases). The core layout is used on the site you are
          looking at now, and has two primary options: whether to include a
          header (with our menu), and whether to include a footer. The header
          additionally supports authentication status if you are wrapping a site
          with the{' '}
          <Link href='https://github.com/carbonplan/auth'>
            @carbonplan/auth
          </Link>{' '}
          library.
        </Styled.p>
        <Styled.p>
          Without either header or footer, the layout is essentially a Flexbox
          with tags from the Meta component, so you may also choose to skip it
          entirely, but then remember to include the Meta component if needed.
        </Styled.p>
        <Styled.h2>Base colors</Styled.h2>
        <Styled.p>Our primary colors are Carbon and Chalk.</Styled.p>
        <Box>
          <ColorSample color='#1b1e23' hex='1b1e23' label='carbon' border />
          <ColorSample color='#ebebec' hex='ebebec' label='chalk' border />
        </Box>
        <Styled.p>
          The core design is built around Chalk on Carbon. Changing the
          theme to light mode reverts it to Carbon on White (we use pure White rather than Chalk in light mode for improved contrast). You can use the light dimmer to
          change the theme. In the default layout it's in the lower right. You
          can also embed it elsewhere, like here:
        </Styled.p>
        <Dimmer />
        <Styled.p>
          Here are the core colors in three shades at a few sizes and fonts.
        </Styled.p>
        <Text sx={{ fontSize: [4] }}>Primary</Text>
        <Text
          sx={{
            fontSize: [2],
            fontFamily: 'mono',
            letterSpacing: 'mono',
          }}
        >
          PRIMARY
        </Text>
        <Text sx={{ fontSize: [4], color: 'secondary' }}>Secondary</Text>
        <Text
          sx={{
            fontSize: [2],
            fontFamily: 'mono',
            letterSpacing: 'mono',
            color: 'secondary',
          }}
        >
          SECONDARY
        </Text>
        <Text sx={{ fontSize: [4], color: 'muted' }}>Muted</Text>
        <Text
          sx={{
            fontSize: [2],
            fontFamily: 'mono',
            letterSpacing: 'mono',
            color: 'muted',
          }}
        >
          MUTED
        </Text>
        <Styled.h2>Accent colors</Styled.h2>
        <Styled.p>
          We have a series of accent colors. Typically they play a semantic
          purpose, e.g. green for forests, orange for soil, and cool gray for
          mineralization. Although semantic consistency is not strictly
          required, within a given context, colors should be chosen for semantic
          purposes, or purely aesthetic purposes, but never both! For example,
          we should never use orange to represent one CDR category on one site,
          and a different CDR category on another site. But picking a subset of
          colors purely for aesthetic purposes in an isolated setting may be
          acceptable.
        </Styled.p>
        <Box sx={{ mt: [4], mb: [0] }}>
          <ColorSample color='red' hex='f16f71' />
          <ColorSample color='orange' hex='eb9755' />
          <ColorSample color='yellow' hex='d4c05d' />
          <ColorSample color='green' hex='7db269' />
          <ColorSample color='teal' hex='65b9c4' />
          <ColorSample color='blue' hex='8b9fd1' />
          <ColorSample color='purple' hex='b386bc' />
          <ColorSample color='pink' hex='e487b5' />
          <ColorSample color='grey' hex='a9b4c5' />
        </Box>
        <Styled.h2>Controls</Styled.h2>
        <Styled.p>
          These elements are useful for providing interactivity.
        </Styled.p>
        <Styled.h3>Tags</Styled.h3>
        <Styled.p>
          Used for indicating optons, and can be made clickable by adding a
          toggle method. There are useful for filters on lists, map layers, etc.
        </Styled.p>
        <Box>
          <Tag label={'Click me'} value={tag} onClick={() => setTag(!tag)}>
            Click me
          </Tag>
          <Tag label={'Always on'} value={true}>
            Always on
          </Tag>
          <Tag label={'Always off'} value={false}>
            Always off
          </Tag>
        </Box>
        <Box>
          {colors.map((color, i) => (
            <Tag key={i} label={color} sx={{ color: color }}>
              {color}
            </Tag>
          ))}
        </Box>
        <Styled.h3>Toggles</Styled.h3>
        <Styled.p>
          Used for binary options. Can be disabled, and specified in different
          colors.
        </Styled.p>
        <Box>
          <Toggle value={toggle} onClick={() => setToggle(!toggle)} />
          <Toggle value={false} sx={{ cursor: 'default', ml: [2] }} />
        </Box>
        <Box sx={{ mt: [2] }}>
          {colors.map((color, i) => (
            <Toggle
              key={i}
              value={toggle}
              onClick={() => setToggle(!toggle)}
              sx={{ mr: [2], mb: [2], color: color }}
            />
          ))}
        </Box>
        <Styled.h3>Badges</Styled.h3>
        <Styled.p>
          Used for numbers and counters with lots of color options.
        </Styled.p>
        <Box>
          <Badge>200</Badge>
          <Badge>10</Badge>
          <Badge>100k</Badge>
        </Box>
        <Box sx={{ mt: [2] }}>
          <Badge sx={{ color: 'secondary' }}>200</Badge>
          <Badge sx={{ color: 'secondary' }}>10</Badge>
          <Badge sx={{ color: 'secondary' }}>100k</Badge>
        </Box>
        <Box sx={{ mt: [2] }}>
          {colors.map((color, i) => (
            <Badge key={i} sx={{ color: color }}>
              {i}
            </Badge>
          ))}
        </Box>
        <Styled.h3>Icons</Styled.h3>
        <Styled.p>
          Used to indicate status, trigger info panels, etc. Available plain or
          circled and can be resized and colored.
        </Styled.p>
        <Box>
          <Check sx={{ mr: [2] }} />
          <Question sx={{ mr: [2] }} />
          <Info sx={{ mr: [2] }} />
        </Box>
        <Box>
          <Check closed={true} sx={{ mr: [2] }} />
          <Question closed={true} sx={{ mr: [2] }} />
          <Info closed={true} sx={{ mr: [2] }} />
        </Box>
        <Text
          sx={{
            mt: [1],
            fontSize: [2],
            fontFamily: 'mono',
            letterSpacing: 'mono',
          }}
        >
          24 px
        </Text>
        <Box sx={{mt: [2]}}>
          <Check sx={{ mr: [2], width: '48px', height: '48px' }} />
          <Question sx={{ mr: [2], width: '48px', height: '48px' }} />
          <Info sx={{ mr: [2], width: '48px', height: '48px' }} />
        </Box>
        <Box>
          <Check
            closed={true}
            sx={{ mr: [2], width: '48px', height: '48px' }}
          />
          <Question
            closed={true}
            sx={{ mr: [2], width: '48px', height: '48px' }}
          />
          <Info closed={true} sx={{ mr: [2], width: '48px', height: '48px' }} />
        </Box>
        <Text
          sx={{
            fontSize: [2],
            mt: [1],
            fontFamily: 'mono',
            letterSpacing: 'mono',
          }}
        >
          48 px
        </Text>
        <Styled.h3>Expander</Styled.h3>
        <Styled.p>Used to expand panels and such.</Styled.p>
        <Box>
          <Box
            sx={{
              borderStyle: 'solid',
              borderColor: 'muted',
              borderWidth: '1px',
              borderRadius: '6px',
              px: [3],
              pt: ['12px'],
              pb: [3],
              height: 'fit-content',
              width: '210px',
            }}
          >
            <Text sx={{ display: 'inline-block', mr: [2], fontSize: [3] }}>
              Click to expand
            </Text>
            <Expander
              value={expander}
              onClick={() => setExpander(!expander)}
              sx={{ position: 'relative', top: ['3px'] }}
            />
            {expander && (
              <Text sx={{ mt: [2], fontSize: [3] }}>This is extra content</Text>
            )}
          </Box>
        </Box>
        <Styled.h2>Demos</Styled.h2>
        <Styled.p>
          Showing the use of these components in real applications (coming
          soon...)
        </Styled.p>
      </Box>
    </Layout>
  )
}

function ColorSample({ color, hex, label, border }) {
  return (
    <Box
      sx={{
        display: 'inline-block',
        mr: [4],
        mt: [2],
        mb: [3],
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          width: '100px',
          height: '100px',
          backgroundColor: color,
          borderRadius: '50px',
          borderStyle: 'solid',
          borderWidth: border ? '1px' : '0px',
          borderColor: 'primary',
        }}
      ></Box>
      <Text
        sx={{
          mt: [2],
          color: label ? 'primary' : color,
          fontFamily: 'mono',
          letterSpacing: 'mono',
          textTransform: 'uppercase',
        }}
      >
        {label ? label : color}
      </Text>
      <Text
        sx={{
          mt: [0],
          fontFamily: 'mono',
          letterSpacing: 'mono',
          textTransform: 'uppercase',
        }}
      >
        #{hex}
      </Text>
    </Box>
  )
}

export default Index
