import { Link, Box } from 'theme-ui'
import { default as NextLink } from 'next/link'
import {
  Guide,
  Layout,
  Row,
  Column,
  Buttons,
  Links,
} from '@carbonplan/components'
import Splash from '../homepage/components/splash'
import { formatDate } from '../utils'
import { research, highlights, press } from '../homepage/data/recent'

const { ArrowButton } = Buttons
const { WrappedLink } = Links

const sx = {
  borderTop: {
    borderStyle: 'solid',
    borderWidth: '0px',
    borderTopWidth: '1px',
    borderColor: 'muted',
  },
  highlight: {
    mb: [3],
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
  },
}

const Index = () => {
  return (
    <Layout links={'homepage'} title={'carbonplan'}>
      <Guide />
      <Box
        sx={{
          mb: [5, 6, 7, 8],
        }}
      >
        <Splash />
      </Box>
      <Row sx={{ position: 'relative', mt: [1] }}>
        <Column start={[1, 3, 6, 6]} width={[5, 5, 6, 6]}>
          <Box
            sx={{
              fontFamily: 'heading',
              lineHeight: 'heading',
              fontSize: [6, 6, 7, 8],
            }}
          >
            Data and science for climate action
          </Box>
        </Column>
      </Row>
      <Row sx={{ position: 'relative', mt: [4, 4, 4, 5] }}>
        <Column start={[1, 3, 6, 6]} width={[6, 4, 4, 4]}>
          <Box sx={{ fontSize: [3, 3, 3, 4] }}>
            Improving the transparency and scientific integrity of carbon
            removal and climate solutions through open data and tools
          </Box>
        </Column>
      </Row>
      <Row sx={{ mt: [4, 4, 4, 5] }}>
        <Column start={[1, 3, 6, 6]} width={[4, 6, 6, 6]}>
          <InternalNav href={'/about'}>About</InternalNav>
          <InternalNav href={'/research'}>Research</InternalNav>
          <InternalNav href={'/team'}>Team</InternalNav>
          <InternalNav href={'/faq'}>FAQ</InternalNav>
          <InternalNav href={'/donate'} final>
            Donate
          </InternalNav>
        </Column>
      </Row>
      <Row sx={{ mt: [6, 7, 8, 9] }}>
        <Column
          start={[1, 2]}
          width={[6, 10]}
          sx={{
            pt: [4, 5, 6, 7],
            ...sx.borderTop,
          }}
        >
          <Box
            as='h2'
            variant='styles.h2'
            sx={{ mt: [0, 0, 0, 0], mb: [3, 4, 5, 6] }}
          >
            Recent research
          </Box>
        </Column>
      </Row>
      <Row sx={{ mb: [4, 5, 6, 7] }}>
        <Column start={[1, 2]} width={[6, 6]} sx={{}}>
          <Box sx={{ width: '100%', height: '200px', bg: 'green' }}>
            Graphic
          </Box>
        </Column>
        <Column start={[1, 8]} width={[6, 4]} sx={{}}>
          <Box sx={{ width: '100%', height: '200px', bg: 'green' }}>
            <Box
              sx={{
                color: 'secondary',
                fontFamily: 'mono',
                letterSpacing: '0.05em',
                fontSize: [1, 1, 1, 2],
                userSelect: 'none',
                textTransform: 'uppercase',
                display: ['none', 'block', 'block', 'block'],
              }}
            >
              {formatDate(research.date)}{' '}
            </Box>
            <Box
              sx={{
                mb: ['14px'],
                mt: ['-5px', '10px', '10px', '10px'],
                ml: ['-1px'],
                lineHeight: 'heading',
                fontFamily: 'heading',
                fontSize: [4, 5, 5, 6],
                color: research.color,
              }}
            >
              {research.title}
            </Box>
            <Box
              sx={{
                color: 'secondary',
                fontFamily: 'mono',
                letterSpacing: '0.05em',
                fontSize: [1, 1, 1, 2],
                userSelect: 'none',
                textTransform: 'uppercase',
                display: ['block', 'none', 'none', 'none'],
              }}
            >
              {formatDate(research.date)}{' '}
            </Box>
            <Box
              sx={{
                mt: [2],
                mb: [1],
                fontSize: [2, 2, 2, 3],
                lineHeight: 1.35,
                display: ['none', 'block', 'block', 'block'],
              }}
            >
              {research.summary}
            </Box>
            <Box
              sx={{
                mt: ['12px'],
                fontSize: [2, 2, 2, 3],
                userSelect: 'none',
                display: ['none', 'block', 'block', 'block'],
              }}
            >
              <Box sx={{ mb: [-1] }}></Box>
            </Box>
          </Box>
        </Column>
      </Row>
      <Row sx={{ mt: [6, 7, 8, 9], mb: [7, 8, 9, 10] }}>
        <Column
          start={[2]}
          width={[10]}
          sx={{ pt: [4, 5, 6, 7], ...sx.borderTop }}
        >
          <Row columns={[10]}>
            <Column start={[1]} width={[3]}>
              <Box sx={{ fontSize: [3, 3, 3, 4] }}>
                <Box
                  sx={{
                    ...sx.highlight,
                    color: 'red',
                  }}
                >
                  Annual report
                </Box>
              </Box>
            </Column>
            <Column start={[5]} width={[3]}>
              <Box sx={{ fontSize: [3, 3, 3, 4] }}>
                <Box
                  sx={{
                    ...sx.highlight,
                    color: 'yellow',
                  }}
                >
                  Recent highlights
                </Box>
                {highlights.map((d, i) => (
                  <WrappedLink href={d.href} sx={{ textDecoration: 'none' }}>
                    <ArrowButton
                      key={i}
                      label={d.label}
                      size={'md'}
                      sx={{ mb: [1] }}
                    />
                  </WrappedLink>
                ))}
              </Box>
            </Column>
            <Column start={[8]} width={[3]}>
              <Box sx={{ fontSize: [3, 3, 3, 4] }}>
                <Box
                  sx={{
                    ...sx.highlight,
                    color: 'teal',
                  }}
                >
                  Recent press
                </Box>
                {press.map((d, i) => (
                  <WrappedLink href={d.href} sx={{ textDecoration: 'none' }}>
                    <ArrowButton
                      key={i}
                      label={d.label}
                      size={'md'}
                      sx={{ mb: [1] }}
                    />
                  </WrappedLink>
                ))}
              </Box>
            </Column>
          </Row>
        </Column>
      </Row>
    </Layout>
  )
}

function InternalNav({ children, href, final = false }) {
  return (
    <NextLink href={href} passHref>
      <Link
        sx={{
          fontSize: [2, 3, 3, 4],
          textTransform: 'uppercase',
          fontFamily: 'heading',
          display: 'inline-block',
          letterSpacing: 'smallcaps',
          borderStyle: 'solid',
          borderColor: 'primary',
          borderWidth: '0px',
          borderBottomWidth: '1px',
          pb: [1],
          mr: [final ? 0 : 4],
          mb: [3, 2, 2, 2],
          color: 'primary',
          textDecoration: 'none',
          transition: 'color 0.15s',
          '&:hover': {
            borderColor: 'secondary',
            color: 'secondary',
          },
        }}
      >
        {children}
      </Link>
    </NextLink>
  )
}

export default Index
