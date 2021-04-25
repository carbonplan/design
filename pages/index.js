import { useState } from 'react'
import { Themed, Container, Box, Text, Link } from 'theme-ui'
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
  Row,
  Column,
  Guide,
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
    <Layout title='design / carbonplan'>
      <Guide />
      <Row sx={{ mb: [8, 8, 9, 10] }}>
        <Column start={[1, 2, 3, 3]} width={[6, 7]}>
          <Box
            as='h1'
            variant='styles.h1'
            sx={{ mt: [5, 6, 7, 8], mb: [5, 6, 7, 8] }}
          >
            CarbonPlan Design
          </Box>
          <Themed.p>
            This site demos the components of our design system. The core
            elements were developed with{' '}
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
          </Themed.p>
          <Themed.h2>Logo</Themed.h2>
          <Themed.p>
            Our logo is built around our core font and the concepts of
            circularity and enclosure. The primary color format is Chalk on
            Carbon, but it can also be used in Carbon on Chalk (or White). It
            can be rendered at multiple sizes.
          </Themed.p>
          <Box sx={{ mb: [5] }}>
            <Logo sx={{ width: 150 }} />
            <Box
              sx={{
                fontSize: [2],
                fontFamily: 'mono',
                letterSpacing: 'mono',
              }}
            >
              150 px
            </Box>
          </Box>
          <Box sx={{ mb: [5] }}>
            <Logo sx={{ width: 200 }} />
            <Box
              sx={{
                fontSize: [2],
                fontFamily: 'mono',
                letterSpacing: 'mono',
              }}
            >
              200 px
            </Box>
          </Box>
          <Box sx={{ mb: [5] }}>
            <Logo sx={{ width: 300 }} />
            <Box
              sx={{
                fontSize: [2],
                fontFamily: 'mono',
                letterSpacing: 'mono',
              }}
            >
              300 px
            </Box>
          </Box>
          <Themed.h2>Monogram</Themed.h2>
          <Themed.p>
            Our monogram is narrower than the logo and useful for social media
            cards, favicons, and other highlights. Coloring is the same as for
            the logo, and it can be rendered at multiple sizes, including very
            small sizes.
          </Themed.p>
          <Box sx={{ mb: [5] }}>
            <Monogram sx={{ width: 40 }} />
            <Box
              sx={{
                fontSize: [2],
                fontFamily: 'mono',
                letterSpacing: 'mono',
              }}
            >
              40 px
            </Box>
          </Box>
          <Box sx={{ mb: [5] }}>
            <Monogram sx={{ width: 80 }} />
            <Box
              sx={{
                fontSize: [2],
                fontFamily: 'mono',
                letterSpacing: 'mono',
              }}
            >
              80 px
            </Box>
          </Box>
          <Box sx={{ mb: [5] }}>
            <Monogram sx={{ width: 120 }} />
            <Box
              sx={{
                fontSize: [2],
                fontFamily: 'mono',
                letterSpacing: 'mono',
              }}
            >
              120 px
            </Box>
          </Box>
          <Themed.h2>Typography</Themed.h2>
          <Themed.p>
            Our design system is built around four fonts from the family{' '}
            <Link
              href='https://www.colophon-foundry.org/typefaces/relative/'
              target='_blank'
              rel='noreferrer'
            >
              Relative
            </Link>
            .
          </Themed.p>
          <Box
            sx={{
              fontSize: [6],
              fontFamily: 'body',
              letterSpacing: 'body',
              letterSpacing: '0em',
            }}
          >
            Relative Pro Book
          </Box>
          <Box
            sx={{
              fontSize: [6],
              fontFamily: 'heading',
              letterSpacing: 'heading',
              letterSpacing: '0em',
            }}
          >
            Relative Pro Medium
          </Box>
          <Box
            sx={{
              fontSize: [6],
              fontFamily: 'faux',
              letterSpacing: 'faux',
              letterSpacing: '0em',
            }}
          >
            Relative Pro Faux Mono
          </Box>
          <Box
            sx={{
              fontSize: [6],
              fontFamily: 'mono',
              letterSpacing: 'mono',
              letterSpacing: '0em',
            }}
          >
            Relative Pro Mono 11 Pitch
          </Box>
          <Themed.p>
            Book is used in all body copy, typically at 18px, just like the text
            you are reading now. Medium is used for headings with a large font,
            and should always be used with reduced tracking, and reduced line
            spacing if the heading extends over multiple lines. Mono should
            generally only be used for numbers (e.g. in dashboards), axis labels
            on charts, and in small caps. Faux can be used as a complement to
            the others to add diversity to a composition (e.g. in tables, maps,
            infographics). Both Mono and Faux should almost always be used with
            significantly increased tracking, especially if in all caps.
          </Themed.p>
          <Box
            sx={{
              fontSize: [5],
              fontFamily: 'heading',
              letterSpacing: 'heading',
              mb: [3],
            }}
          >
            Relative Pro Medium (-15 tracking)
          </Box>
          <Box
            sx={{
              fontSize: [4],
              fontFamily: 'faux',
              letterSpacing: 'faux',
              mb: [3],
            }}
          >
            Relative Pro Faux Mono (+50 tracking)
          </Box>
          <Box
            sx={{
              fontSize: [2],
              fontFamily: 'mono',
              letterSpacing: 'mono',
              mb: [3],
            }}
          >
            RELATIVE PRO MONO 11 PITCH (+70 tracking)
          </Box>
          <Themed.h2>Layout</Themed.h2>
          <Themed.p>
            We provide a core layout that is shared acros many of our sites,
            though some sites and apps may use custom layouts (e.g. maps,
            dashboards, databases). The core layout is used on the site you are
            looking at now, and has two primary options: whether to include a
            header (with our menu), and whether to include a footer. The header
            additionally supports authentication status if you are wrapping a
            site with the{' '}
            <Link href='https://github.com/carbonplan/auth'>
              @carbonplan/auth
            </Link>{' '}
            library.
          </Themed.p>
          <Themed.p>
            Without either header or footer, the layout is essentially a Flexbox
            with tags from the Meta component, so you may also choose to skip it
            entirely, but then remember to include the Meta component if needed.
          </Themed.p>
          <Themed.h2>Base colors</Themed.h2>
          <Themed.p>Our primary colors are Carbon and Chalk.</Themed.p>
          <Box>
            <ColorSample color='#1b1e23' hex='1b1e23' label='carbon' border />
            <ColorSample color='#ebebec' hex='ebebec' label='chalk' border />
          </Box>
          <Themed.p>
            The core design is built around Chalk on Carbon. Changing the theme
            to light mode reverts it to Carbon on White (we use pure White
            rather than Chalk in light mode for improved contrast). You can use
            the light dimmer to change the theme. In the default layout it's in
            the lower right. You can also embed it elsewhere, like here:
          </Themed.p>
          <Dimmer />
          <Themed.p>
            Here are the core colors in three shades at a few sizes and fonts.
          </Themed.p>
          <Box sx={{ fontSize: [4] }}>Primary</Box>
          <Box
            sx={{
              fontSize: [2],
              fontFamily: 'mono',
              letterSpacing: 'mono',
            }}
          >
            PRIMARY
          </Box>
          <Box sx={{ fontSize: [4], color: 'secondary' }}>Secondary</Box>
          <Box
            sx={{
              fontSize: [2],
              fontFamily: 'mono',
              letterSpacing: 'mono',
              color: 'secondary',
            }}
          >
            SECONDARY
          </Box>
          <Box sx={{ fontSize: [4], color: 'muted' }}>Muted</Box>
          <Box
            sx={{
              fontSize: [2],
              fontFamily: 'mono',
              letterSpacing: 'mono',
              color: 'muted',
            }}
          >
            MUTED
          </Box>
          <Themed.h2>Accent colors</Themed.h2>
          <Themed.p>
            We have a series of accent colors. Typically they play a semantic
            purpose, e.g. green for forests, orange for soil, and cool gray for
            mineralization. Although semantic consistency is not strictly
            required, within a given context, colors should be chosen for
            semantic purposes, or purely aesthetic purposes, but never both! For
            example, we should never use orange to represent one CDR category on
            one site, and a different CDR category on another site. But picking
            a subset of colors purely for aesthetic purposes in an isolated
            setting may be acceptable.
          </Themed.p>
          <Box sx={{ mt: [6], mb: [0] }}>
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
          <Themed.h2>Controls</Themed.h2>
          <Themed.p>
            These elements are useful for providing interactivity.
          </Themed.p>
          <Themed.h3>Tags</Themed.h3>
          <Themed.p>
            Used for indicating optons, and can be made clickable by adding a
            toggle method. There are useful for filters on lists, map layers,
            etc.
          </Themed.p>
          <Box sx={{ mb: [2] }}>
            <Tag
              label={'Click me'}
              value={tag}
              onClick={() => setTag(!tag)}
              sx={{ mr: [2] }}
            >
              Click me
            </Tag>
            <Tag label={'Always on'} value={true} sx={{ mr: [2] }}>
              Always on
            </Tag>
            <Tag label={'Always off'} value={false} sx={{ mr: [2] }}>
              Always off
            </Tag>
          </Box>
          <Box>
            {colors.map((color, i) => (
              <Tag key={i} label={color} sx={{ color: color, mr: [2] }}>
                {color}
              </Tag>
            ))}
          </Box>
          <Themed.h3>Toggles</Themed.h3>
          <Themed.p>
            Used for binary options. Can be disabled, and specified in different
            colors.
          </Themed.p>
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
          <Themed.h3>Badges</Themed.h3>
          <Themed.p>
            Used for numbers and counters with lots of color options.
          </Themed.p>
          <Box>
            <Badge sx={{ mr: [2] }}>200</Badge>
            <Badge sx={{ mr: [2] }}>10</Badge>
            <Badge sx={{ mr: [2] }}>100k</Badge>
          </Box>
          <Box sx={{ mt: [2] }}>
            <Badge sx={{ mr: [2], color: 'secondary' }}>200</Badge>
            <Badge sx={{ mr: [2], color: 'secondary' }}>10</Badge>
            <Badge sx={{ mr: [2], color: 'secondary' }}>100k</Badge>
          </Box>
          <Box sx={{ mt: [2] }}>
            {colors.map((color, i) => (
              <Badge key={i} sx={{ mr: [2], color: color }}>
                {i}
              </Badge>
            ))}
          </Box>
          <Themed.h3>Icons</Themed.h3>
          <Themed.p>
            Used to indicate status, trigger info panels, etc. Available plain
            or circled and can be resized and colored.
          </Themed.p>
          <Box>
            <Check sx={{ mr: [3] }} />
            <Question sx={{ mr: [3] }} />
            <Info sx={{ mr: [3] }} />
          </Box>
          <Box>
            <Check closed={true} sx={{ mr: [3] }} />
            <Question closed={true} sx={{ mr: [3] }} />
            <Info closed={true} sx={{ mr: [3] }} />
          </Box>
          <Box
            sx={{
              mt: [1],
              fontSize: [2],
              fontFamily: 'mono',
              letterSpacing: 'mono',
            }}
          >
            24 px
          </Box>
          <Box sx={{ mt: [3] }}>
            <Check sx={{ mr: [3], width: '48px', height: '48px' }} />
            <Question sx={{ mr: [3], width: '48px', height: '48px' }} />
            <Info sx={{ mr: [3], width: '48px', height: '48px' }} />
          </Box>
          <Box>
            <Check
              closed={true}
              sx={{ mr: [3], width: '48px', height: '48px' }}
            />
            <Question
              closed={true}
              sx={{ mr: [3], width: '48px', height: '48px' }}
            />
            <Info
              closed={true}
              sx={{ mr: [3], width: '48px', height: '48px' }}
            />
          </Box>
          <Box
            sx={{
              fontSize: [2],
              mt: [1],
              fontFamily: 'mono',
              letterSpacing: 'mono',
            }}
          >
            48 px
          </Box>
          <Themed.h3>Expander</Themed.h3>
          <Themed.p>Used to expand panels and such.</Themed.p>
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
              <Box sx={{ display: 'inline-block', mr: [2], fontSize: [3] }}>
                Click to expand
              </Box>
              <Expander
                value={expander}
                onClick={() => setExpander(!expander)}
                sx={{ position: 'relative', top: ['3px'] }}
              />
              {expander && (
                <Box sx={{ mt: [3], fontSize: [3] }}>This is extra content</Box>
              )}
            </Box>
          </Box>
          <Themed.h2>Demos</Themed.h2>
          <Themed.p>
            Showing the use of these components in real applications (coming
            soon...)
          </Themed.p>
        </Column>
      </Row>
    </Layout>
  )
}

function ColorSample({ color, hex, label, border }) {
  return (
    <Box
      sx={{
        display: 'inline-block',
        mr: [5],
        mt: [3],
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
      <Box
        sx={{
          mt: [3],
          color: label ? 'primary' : color,
          fontFamily: 'mono',
          letterSpacing: 'mono',
          textTransform: 'uppercase',
        }}
      >
        {label ? label : color}
      </Box>
      <Box
        sx={{
          mt: [0],
          fontFamily: 'mono',
          letterSpacing: 'mono',
          textTransform: 'uppercase',
        }}
      >
        #{hex}
      </Box>
    </Box>
  )
}

export default Index
