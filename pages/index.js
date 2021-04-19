import { Link, Box, Image } from 'theme-ui'
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
        <Column start={[1, 3, 6, 6]} width={[6, 5, 6, 6]}>
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
        <Column start={[1, 3, 6, 6]} width={[5, 4, 4, 4]}>
          <Box
            sx={{ fontSize: [3, 3, 3, 4], lineHeight: 'h3', mb: [2, 3, 0, 0] }}
          >
            Improving the transparency and scientific integrity of carbon
            removal and climate solutions through open data and tools
          </Box>
        </Column>
      </Row>
      <Row sx={{ mt: [4, 4, 4, 5] }}>
        <Column start={[2, 3, 6, 6]} width={[4, 6, 6, 6]}>
          <InternalNav href={'/about'}>About</InternalNav>
          <InternalNav href={'/research'}>Research</InternalNav>
          <InternalNav href={'/team'}>Team</InternalNav>
          <InternalNav href={'/faq'}>FAQ</InternalNav>
          <InternalNav href={'/donate'} final>
            Donate
          </InternalNav>
        </Column>
      </Row>
      <Row sx={{ mt: [5, 7, 8, 9] }}>
        <Column
          start={[1, 2]}
          width={[6, 8, 10, 10]}
          sx={{
            pt: [4, 5, 6, 7],
            ...sx.borderTop,
          }}
        >
          <Box
            as='h2'
            variant='styles.h2'
            sx={{ mt: [2, 2, 2, 2], mb: [4, 4, 5, 6] }}
          >
            Recent research
          </Box>
        </Column>
      </Row>
      <Row sx={{ mb: [4, 5, 6, 7] }}>
        <Column start={[1, 1, 2, 2]} width={[6, 4, 6, 6]} sx={{}}>
          <Image
            src='/CDR-Database.png'
            sx={{ width: '100%', height: ['125px', '225px', '225px', '280px'] }}
          />
        </Column>
        <Column start={[1, 5, 8, 8]} width={[5, 4]} sx={{}}>
          <Box sx={{ width: '100%' }}>
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
                mb: [4, 3, 3, 4],
                ml: ['-1px'],
                lineHeight: 'heading',
                fontFamily: ['body', 'heading', 'heading', 'heading'],
                fontSize: [4, 5, 5, 6],
                mt: [4, 3, 3, 4],
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
              }}
            >
              {research.summary}
              <Box
                sx={{
                  mt: ['12px'],
                  fontSize: [2, 2, 2, 3],
                  userSelect: 'none',
                }}
              >
                <Box sx={{ mb: [-1] }}>
                  {research.links.map((d, i) => {
                    return (
                      <WrappedLink
                        key={i}
                        href={d.href}
                        sx={{
                          display: 'inline-block',
                          textDecoration: 'none',
                          mr: [4, 4, 4, 5],
                        }}
                      >
                        <ArrowButton
                          key={i}
                          label={d.label}
                          color={'secondary'}
                          fill={'secondary'}
                          sx={{
                            mb: ['6px'],
                            mt: ['5px'],
                          }}
                        />
                      </WrappedLink>
                    )
                  })}
                </Box>
              </Box>
            </Box>
          </Box>
        </Column>
      </Row>
      <Row sx={{ mt: [5, 6, 7, 8], mb: [8, 8, 9, 10], pb: [1] }}>
        <Column
          start={[1, 1, 2, 2]}
          width={[6, 8, 10, 10]}
          sx={{ pt: [5, 6, 7, 8], ...sx.borderTop }}
        >
          <Row columns={[6, 8, 10, 10]}>
            <Column start={[1, 3, 1, 1]} width={[5, 6, 3, 3]}>
              <Box sx={{ fontSize: [3, 3, 3, 4] }}>
                <Box
                  sx={{
                    ...sx.highlight,
                    color: 'red',
                  }}
                >
                  Annual report
                </Box>
                <WrappedLink
                  href={
                    'https://carbonplan-assets.s3.amazonaws.com/docs/CarbonPlan-Annual-Report-2020.pdf'
                  }
                  sx={{ display: 'block', textDecoration: 'none', mb: [3] }}
                >
                  <ArrowButton label={'Our 2020 in review'} size={'md'} />
                </WrappedLink>
                <Box
                  sx={{
                    fontSize: [3, 3, 3, 4],
                    fontFamily: 'body',
                    letterSpacing: 'body',
                    lineHeight: 'h3',
                  }}
                >
                  Read all about the work we did in our first year, and some of
                  what we're planning to do next.
                </Box>
              </Box>
            </Column>
            <Column start={[2, 3, 5, 5]} width={[5, 3, 3, 3]}>
              <Box sx={{ fontSize: [3, 3, 3, 4] }}>
                <Box
                  sx={{
                    ...sx.highlight,
                    color: 'yellow',
                    mt: [6, 6, 0, 0],
                  }}
                >
                  Recent highlights
                </Box>
                {highlights.map((d, i) => (
                  <WrappedLink
                    key={i}
                    href={d.href}
                    sx={{ textDecoration: 'none' }}
                  >
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
            <Column start={[1, 6, 8, 8]} width={[5, 3, 3, 3]}>
              <Box sx={{ fontSize: [3, 3, 3, 4] }}>
                <Box
                  sx={{
                    ...sx.highlight,
                    color: 'teal',
                    mt: [6, 6, 0, 0],
                  }}
                >
                  Recent press
                </Box>
                {press.map((d, i) => (
                  <WrappedLink
                    key={i}
                    href={d.href}
                    sx={{ textDecoration: 'none' }}
                  >
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
