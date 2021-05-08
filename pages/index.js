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
  Buttons,
  Table,
} from '@carbonplan/components'

const { Check, Question, Info } = Icons
const { ArrowButton, BackButton, CalloutButton } = Buttons

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
            in Spring 2020, we revamped the system in Spring 2021, and we are
            continuing to evolve it. (They are amazing, by the way. Definitely
            talk to them about your next project.) Most components of the system
            can be used from our javascript packages{' '}
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
            though some very specific apps may use a slightly modified version).
            The core layout is used on the site you are looking at now, and has
            several options, including: whether to include a header (with our
            menu), and whether to include a footer, the origin for links in the
            main menu nav, and more. The header additionally supports a status
            indicator, which is useful if you are wrapping a site with the{' '}
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
          <Box sx={{ my: [5] }}>
            <ColorSample color='#1b1e23' hex='1b1e23' label='carbon' border />
            <ColorSample color='#ebebec' hex='ebebec' label='chalk' border />
          </Box>
          <Themed.p>
            The core design is built around Chalk on Carbon. Changing the theme
            to light mode reverts it to Carbon on White (we use pure White
            rather than Chalk in light mode for improved contrast). You can use
            the light dimmer to change the theme. In the default layout it's in
            the lower right on desktop, and in the menu on mobile or tablet. You
            can also embed it elsewhere, like here:
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
            We have a series of accent colors. Sometimes they play a semantic
            purpose, e.g. green for forests, orange for soil, and cool gray for
            mineralization. Although semantic consistency is not strictly
            required, within a given context, colors should be chosen for
            semantic purposes, or purely aesthetic purposes, but not both! For
            example, we would never use pink to represent direct air capture on
            one site, and then use it to represent an energy systems on another
            site. But picking a subset of colors purely for aesthetic purposes
            in an isolated setting may be acceptable.
          </Themed.p>
          <Box sx={{ my: [5] }}>
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
          <Themed.p>
            When using colors purely to enhance a design, rather than use the
            full subset, we generally pick one of several thematic combinations
            as a color "cycle", and then cycle through those colors across the
            page. For example, this triad
          </Themed.p>
          <Box sx={{ my: [5] }}>
            <ColorSample color='red' hex='f16f71' />
            <ColorSample color='yellow' hex='eb9755' />
            <ColorSample color='teal' hex='d4c05d' />
          </Box>
          <Themed.p>Or the warm quartet</Themed.p>
          <Box sx={{ my: [5] }}>
            <ColorSample color='pink' hex='f16f71' />
            <ColorSample color='red' hex='f16f71' />
            <ColorSample color='orange' hex='eb9755' />
            <ColorSample color='yellow' hex='d4c05d' />
          </Box>
          <Themed.p>Or the cool quartet</Themed.p>
          <Box sx={{ my: [5] }}>
            <ColorSample color='green' hex='f16f71' />
            <ColorSample color='teal' hex='f16f71' />
            <ColorSample color='blue' hex='eb9755' />
            <ColorSample color='purple' hex='d4c05d' />
          </Box>
          <Themed.h2>Grid</Themed.h2>
          <Themed.p>
            Our design system makes extensive use of a grid. For a good
            reference on grid systems in design, we recommend{' '}
            <Link href='https://bookshop.org/books/grid-systems-in-graphic-design-a-visual-communication-manual-for-graphic-designers-typographers-and-three-dimensional-designers/9783721201451'>
              this book
            </Link>{' '}
            by Josef Müller-Brockmann. Extra special thanks to Jonny Black for
            teaching our team grid systems in the Spring of 2021, using this
            book as a reference.
          </Themed.p>
          <Themed.p>
            Our system uses two custom components to power the grid, Row and
            Column, both of which are fairly simple wrappers around the built in
            CSS Grid layout engine. You can see the grid behind our design on
            all our sites by pressing ⌘ + ; (command + semicolon).
          </Themed.p>
          <Themed.p>
            The Row component builds in our standard set of column counts and
            gutter spacings across desktop, tablet, and mobile. We use 12
            columns on desktop, 8 on tablet, and 6 on mobile. Columns then
            specify start locations and widths. Rows can be nested within other
            rows, just make sure you use the correct number of columns. For
            example, the text you are currently reading is contained within a 7
            width column in a 7 column row nested in a 12 column row.
          </Themed.p>
          <Themed.p>
            Below we'll use our components to create a 6 column row, and inside
            it we'll create three rows with 6, 3, and 2 columns respectively.
            Turn on the background grid to confirm alignment.
          </Themed.p>
          <Row columns={[6, 7, 7, 7]} sx={{ my: [5] }}>
            <Column start={[1]} width={[6]}>
              <Row columns={[6]}>
                <Column start={[1]} width={[1]}>
                  <GridSample>1</GridSample>
                </Column>
                <Column start={[2]} width={[1]}>
                  <GridSample>2</GridSample>
                </Column>
                <Column start={[3]} width={[1]}>
                  <GridSample>3</GridSample>
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
              <Row columns={[6]}>
                <Column start={[1]} width={[3]}>
                  <GridSample>1</GridSample>
                </Column>
                <Column start={[4]} width={[3]}>
                  <GridSample>2</GridSample>
                </Column>
              </Row>
            </Column>
          </Row>
          <Themed.p>
            The most important rule of grids is to never, ever cheat. Everything
            should live on the grid. Exceptions should be exceedingly rare, and
            intentional. Also, if you want a styled table, checkout the Table
            component (which is itself built on the grid), rather than using the
            Row and Column components directly. Those should be used for primary
            layout composition.
          </Themed.p>
          <Themed.h2>Buttons</Themed.h2>
          <Themed.p>
            We have a variety of buttons that combine text with arrows to
            indicate actions. They can be used for links or for navigation
            around the site.
          </Themed.p>
          <Themed.h3>Arrow button</Themed.h3>
          <Themed.p>
            These are for external links and other kinds of forward navigation.
            They can be styled with color and come in several sizes. We most
            commonly use it in extra small with gray color for groups of links.
          </Themed.p>
          <ArrowButton
            label='Link one'
            fill='secondary'
            color='secondary'
            size='xs'
            sx={{ display: 'inline-block', mr: [3], my: [2] }}
          />
          <ArrowButton
            label='Link two'
            fill='secondary'
            color='secondary'
            size='xs'
            sx={{ display: 'inline-block', mr: [3], my: [2] }}
          />
          <ArrowButton
            label='Link three'
            fill='secondary'
            color='secondary'
            size='xs'
            sx={{ display: 'inline-block', mr: [3], my: [2] }}
          />
          <Themed.p>There are several sizes available.</Themed.p>
          <ArrowButton
            label='Extra small'
            size='xs'
            fill='secondary'
            color='secondary'
            sx={{ my: [2], mt: [4] }}
          />
          <ArrowButton
            label='Small'
            size='sm'
            fill='secondary'
            color='secondary'
            sx={{ my: [2] }}
          />
          <ArrowButton
            label='Medium'
            size='md'
            fill='secondary'
            color='secondary'
            sx={{ my: [2] }}
          />
          <ArrowButton
            label='Large'
            size='lg'
            fill='secondary'
            color='secondary'
            sx={{ my: [2] }}
          />
          <ArrowButton
            label='Extra large'
            size='xl'
            fill='secondary'
            color='secondary'
            sx={{ my: [2], mb: [4] }}
          />
          <Themed.p>
            Along with the gray, we often use the large size with colored
            arrows.
          </Themed.p>
          <ArrowButton
            label='Red'
            size='lg'
            fill='red'
            color='primary'
            sx={{ my: [2], mt: [4] }}
          />
          <ArrowButton
            label='Teal'
            size='lg'
            fill='teal'
            color='primary'
            sx={{ my: [2] }}
          />
          <ArrowButton
            label='Yellow'
            size='lg'
            fill='yellow'
            color='primary'
            sx={{ my: [2], mb: [4] }}
          />
          <Themed.p>And we use the small size with full color.</Themed.p>
          <ArrowButton
            label='Link one'
            fill='red'
            color='red'
            size='xs'
            sx={{ display: 'inline-block', mr: [3], my: [2] }}
          />
          <ArrowButton
            label='Link two'
            fill='teal'
            color='teal'
            size='xs'
            sx={{ display: 'inline-block', mr: [3], my: [2] }}
          />
          <ArrowButton
            label='Link three'
            fill='yellow'
            color='yellow'
            size='xs'
            sx={{ display: 'inline-block', mr: [3], my: [2] }}
          />
          <Themed.p>
            Feel free to get creative with different combinations.
          </Themed.p>
          <Themed.h3>Back button</Themed.h3>
          <Themed.p>
            This small button indicates going backwards (e.g. to a previous page
            or UI element). The default label is 'Back' but you can also
            customize it. This button is currently only available in gray and in
            one size (small).
          </Themed.p>
          <BackButton sx={{ my: [2], mr: [3] }} />
          <BackButton label='Customized' sx={{ my: [2], mr: [3] }} />
          <Themed.h3>Callout button</Themed.h3>
          <Themed.p>
            This button is for calling out a link or similar with a combination
            of both a text description and a labeled arrow.
          </Themed.p>
          <CalloutButton label='Click me' sx={{ maxWidth: '250px', my: [5] }}>
            This is a short description of what we're linking to
          </CalloutButton>
          <Themed.p>
            Two of more of these side by side create a nice panel of external
            links at the end of a section.
          </Themed.p>
          <Themed.h2>Table</Themed.h2>
          <Themed.p>
            This component provides a standardized design for tables powered by
            a simple tabular data structure, with several styling options. This
            is the default style, which includes a styled index column.
          </Themed.p>
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
          <Themed.p>
            As examples of some of the options, you can add a header with a
            color, remove the index styling, and turn the top and bottom borders
            off, which usually looks more elegant unless the borders are
            especially helpful for dividing content, e.g. in an article.
          </Themed.p>
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
          <Box sx={{ my: [2] }}>
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
          <Themed.p>
            Although not used here, we usually use expanders with{' '}
            <Link href='https://github.com/Stanko/react-animate-height'>
              react-animate-height
            </Link>{' '}
            to animate the change in height during expansion and contraction.
          </Themed.p>
        </Column>
      </Row>
    </Layout>
  )
}

function GridSample({ children }) {
  return (
    <Box
      sx={{
        borderStyle: 'solid',
        borderColor: 'muted',
        borderWidth: '1px',
        py: [3],
        my: [2],
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'mono',
        fontSize: [2, 2, 2, 3],
      }}
    >
      {children}
    </Box>
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
