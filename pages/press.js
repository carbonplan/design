import { useState, useEffect } from 'react'
import { Box, Styled, Text, Link, Divider, Grid } from 'theme-ui'
import { default as NextLink } from 'next/link'
import { Tag, Row, Column, Guide, Layout, Arrow } from '@carbonplan/components'
import { alpha } from '@theme-ui/color'
import Heading from '../homepage/components/heading'
import Filter from '../homepage/components/filter'

const data = [
  {
    source: 'GreenBiz',
    href:
      'https://www.greenbiz.com/article/digging-complex-confusing-and-contentious-world-soil-carbon-offsets',
    date: '02-26-2021',
    title:
      'Digging into the complex, confusing and contentious world of soil carbon offsets',
    authors: ['Jim Giles'],
  },
  {
    source: 'E&E News',
    href: 'https://www.eenews.net/climatewire/stories/1063723981/',
    date: '02-02-2021',
    title: 'Burned by carbon pricing, Dems chart new course on climate',
    authors: ['Benjamin Storrow', 'Adam Aton'],
  },
  {
    source: 'Financial Times',
    href: 'https://www.ft.com/content/de5e8631-bdf2-4c2e-8b7f-83c0c80cdea8',
    date: '01-27-2021',
    title: 'Carney task force confronts concerns over carbon credits market',
    authors: ['Camilla Hodgson'],
  },
  {
    source: 'E&E News',
    href: 'https://www.eenews.net/climatewire/stories/1063723085/',
    date: '01-21-2021',
    title: 'Does carbon pricing work? Researchers are skeptical',
    authors: ['Chelsea Harvey'],
  },
  {
    source: 'Bloomberg',
    href:
      'https://www.bloomberg.com/news/audio/2020-12-21/cullenward-the-jury-is-still-out-on-carbon-credits',
    date: '12-21-2020',
    title: 'The jury is still out on carbon credits',
    authors: [],
  },
  {
    source: 'Bloomberg',
    href:
      'https://www.bloomberg.com/news/features/2020-12-17/the-real-trees-delivering-fake-climate-progress-for-corporate-america',
    date: '12-17-2020',
    title: 'The real trees delivering fake corporate climate progress',
    authors: ['Ben Elgin', 'Zachary Mider'],
  },
  {
    source: 'New York Times',
    href:
      'https://www.nytimes.com/2020/12/12/opinion/sunday/biden-climate-change-al-gore.html',
    date: '12-12-2020',
    title: 'Where I find hope',
    authors: ['Al Gore'],
  },
  {
    source: 'Bloomberg Green',
    href:
      'https://www.bloomberg.com/features/2020-nature-conservancy-carbon-offsets-trees/',
    date: '12-09-2020',
    title: 'These trees are not what they seem',
    authors: ['Ben Elgin'],
  },
  {
    source: 'GreenBiz',
    href:
      'https://www.greenbiz.com/article/quest-carbon-offsets-almost-anything-goes',
    date: '11-30-2020',
    title: 'In the quest for carbon offsets, (almost) anything goes',
    authors: ['Jesse Klein'],
  },
  {
    source: 'Ars Technica',
    href:
      'https://arstechnica.com/science/2020/11/want-to-offset-your-carbon-footprint-heres-what-you-need-to-know/',
    date: '11-25-2020',
    title: 'Want to offset your carbon footprint? Here’s what you need to know',
    authors: ['Scott K. Johnson'],
  },
  {
    source: 'Time',
    href:
      'https://time.com/collection/best-inventions-2020/5911362/climate-trace/',
    date: '11-19-2020',
    title: 'The best inventions of 2020: The climate cop',
    authors: [],
  },
  {
    source: 'Grist',
    href:
      'https://grist.org/climate/this-oregon-forest-was-supposed-to-store-carbon-for-100-years-now-its-on-fire/',
    date: '09-18-2020',
    title:
      'This Oregon forest was supposed to store carbon for 100 years. Now it’s on fire.',
    authors: ['Emily Pontecorvo', 'Shannon Osaka'],
  },
  {
    source: 'Rolling Stone',
    href:
      'https://www.rollingstone.com/politics/politics-features/tree-planting-wont-stop-climate-crisis-1020500/',
    date: '06-25-2020',
    title: 'Why planting trees won’t save us',
    authors: ['Jeff Goodell'],
  },
  {
    source: 'E&E News',
    href: 'https://www.eenews.net/climatewire/stories/1063394847/',
    date: '06-16-2020',
    title: 'Bleak cap-and-trade results raise doubts about program',
    authors: ['Anne C. Mulkern'],
  },
  {
    source: 'MIT Tech Review',
    href:
      'https://www.technologyreview.com/2020/06/03/1002484/why-we-cant-count-on-carbon-sucking-farms-to-slow-climate-change/',
    date: '06-03-2020',
    title: 'Why we can’t count on carbon-sucking farms to slow climate change',
    authors: ['James Temple'],
  },
]

const sources = [...new Set(data.map((d) => d.source))]

const sourceColors = {}
const initSource = {}

let count = 0

for (const key of sources) {
  initSource[key] = true
  sourceColors[key] = ['green', 'teal', 'blue', 'purple'][count % 4]
  count += 1
}

const initYear = {
  2020: true,
  2021: true,
}

const formatDate = (date) => {
  let d = new Date(date.replace(/-/g, '/'))
  let month = d.toLocaleString('default', { month: 'short' })
  let day = String(d.getDay()).padStart(2, '0')
  let year = d.getFullYear()
  return month + ' ' + day + ' ' + year
}

const Press = () => {
  const [source, setSource] = useState(initSource)
  const [year, setYear] = useState(initYear)
  const [filtered, setFiltered] = useState(data)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    setFiltered(
      data.filter((d) => {
        return (
          source[d.source] &&
          year[new Date(d.date.replace(/-/g, '/')).getFullYear()]
        )
      })
    )
  }, [year, source])

  const FilterContents = () => {
    return (
      <Filter
        filters={{ source: source, year: year }}
        setFilters={{ source: setSource, year: setYear }}
        filterLabels={{ source: 'Source', year: 'Year' }}
        filterColors={{ source: sourceColors }}
        filterList={['year', 'source']}
      />
    )
  }

  return (
    <Layout
      links={'homepage'}
      title={'press / carbonplan'}
      settings={{ value: expanded, onClick: () => setExpanded(!expanded) }}
    >
      <Guide />
      <Heading
        description={
          'A complete list of press that has either covered our work or featured members of our team.'
        }
      >
        Press
      </Heading>
      <Box
        sx={{
          display: ['inherit', 'inherit', 'none', 'none'],
          position: 'fixed',
          top: '56px',
          bottom: '0px',
          width: '100%',
          mt: ['56px'],
          bg: 'background',
          zIndex: 100,
          transition: 'opacity 0.15s',
          opacity: expanded ? 0.9 : 0,
          pointerEvents: expanded ? 'all' : 'none',
        }}
      />
      <Box
        sx={{
          display: ['inherit', 'inherit', 'none', 'none'],
          position: 'fixed',
          top: '0px',
          mt: ['56px'],
          pb: [6, 7, 7, 8],
          pt: [5, 6, 7, 8],
          bg: 'background',
          zIndex: 100,
          borderStyle: 'solid',
          borderColor: 'muted',
          borderWidth: '0px',
          borderBottomWidth: '1px',
          transition: 'transform 0.15s',
          ml: [-3, -4, -5, -6],
          pl: [3, 4, 5, 6],
          transform: expanded ? 'translateY(0)' : 'translateY(-400px)',
        }}
      >
        <Row>
          <Column start={[1, 1, 1, 1]} width={[5, 4, 1, 1]}>
            <FilterContents />
          </Column>
        </Row>
      </Box>
      <Row sx={{ mb: [0, 5, 5, 6] }}>
        <Column
          start={[1, 1, 2, 2]}
          width={[6, 6, 2, 2]}
          sx={{ display: ['none', 'none', 'initial', 'intial'] }}
        >
          <Box sx={{ position: 'sticky', top: '76px', height: 'auto' }}>
            <FilterContents />
          </Box>
        </Column>
        <Column start={[1, 2, 5, 5]} width={[6, 7, 7, 7]}>
          <Box sx={{ mt: ['-3px', '-3px', '-3px', '0px'], mb: [3, 0, 0, 0] }}>
            <Row columns={[1, 7, 7, 7]}>
              {filtered.map((d, i) => {
                return (
                  <Column
                    key={i}
                    start={[
                      1,
                      i % 2 === 0 ? 1 : 5,
                      i % 2 === 0 ? 1 : 5,
                      i % 2 === 0 ? 1 : 5,
                    ]}
                    width={[3, 3, 3, 3]}
                  >
                    <Item data={d} final={i == data.length - 1} />
                  </Column>
                )
              })}
            </Row>
          </Box>
        </Column>
      </Row>
    </Layout>
  )
}

function Item({ data, final = false }) {
  const { source, description, title, href, date, authors } = data

  return (
    <Link
      sx={{
        textDecoration: 'none',
        display: 'block',
        transition: 'color 0.15s',
        '@media (hover: hover) and (pointer: fine)': {
          '&:hover > #container > #title > #span-1 > #span-2 > #arrow': {
            transform: 'rotate(45deg)',
            fill: 'secondary',
          },
          '&:hover > #container': {
            borderColor: [
              'muted',
              alpha('secondary', 0.5),
              alpha('secondary', 0.5),
              alpha('secondary', 0.5),
            ],
          },
        },
      }}
      href={href}
    >
      <Box
        id='container'
        sx={{
          ml: [0, -5, -5, -6],
          mr: [0, -5, 0, 0],
          pr: [0, 5, 0, 0],
          pl: [0, 5, 5, 6],
          pt: [3, 0, 0, 0],
          mb: [0, 5, 6, 7],
          pb: [2, 0, 0, 0],
          transition: 'border-color 0.15s',
          borderStyle: 'solid',
          borderWidth: '0px',
          borderLeftWidth: ['0px', '1px', '1px', '1px'],
          borderTopWidth: ['1px', '0px', '0px', '0px'],
          borderColor: 'muted',
        }}
      >
        <Box
          sx={{
            color: 'secondary',
            fontSize: [1, 1, 1, 2],
            fontFamily: 'mono',
            letterSpacing: 'mono',
            textTransform: 'uppercase',
            display: 'inline-block',
          }}
        >
          {formatDate(date)}
        </Box>
        <Box
          sx={{
            display: 'inline-block',
            float: 'right',
          }}
        >
          <Tag sx={{ color: sourceColors[source] }}>{source}</Tag>
        </Box>
        <Box
          id='title'
          sx={{
            fontSize: [2, 2, 2, 3],
            mt: [3],
            pb: [2],
            mb: [1],
            lineHeight: 'body',
          }}
        >
          <span id='span-1'>
            {title
              .split(' ')
              .slice(0, title.split(' ').length - 1)
              .join(' ')}{' '}
            <Box as='span' id='span-2' sx={{ whiteSpace: 'nowrap' }}>
              {title
                .split(' ')
                .slice(title.split(' ').length - 1, title.split(' ').length)}
              <Arrow
                id='arrow'
                sx={{
                  transition: '0.15s',
                  position: 'relative',
                  top: ['2px', '2px', '2px', '2px'],
                  ml: [2],
                  width: ['12px', '12px', '12px', '13px'],
                  height: ['12px', '12px', '12px', '13px'],
                  fill: 'primary',
                }}
              />
            </Box>
          </span>
        </Box>
        {authors.length > 0 && (
          <Box
            id='authors'
            sx={{
              fontSize: [2],
              mt: [2],
              mb: [2],
              pb: [1],
              color: 'text',
            }}
          >
            <Box
              as='span'
              id='authors-span'
              sx={{
                letterSpacing: 'body',
                fontFamily: 'body',
                fontSize: [2, 2, 2, 3],
                color: 'secondary',
              }}
            >
              by {authors.join(' + ')}
            </Box>
          </Box>
        )}
      </Box>
    </Link>
  )
}

export default Press
