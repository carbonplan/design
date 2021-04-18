import { Flex, Grid, Box, Themed, Divider, Text, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'
import { Row, Column, Layout, Guide, Arrow } from '@carbonplan/components'
import Heading from '../homepage/components/heading'

const data = {
  recentHighlights: [
    {
      label: 'CDR Database',
      href: '/research/cdr-database',
    },
    {
      label: 'CDR Primer',
      href: 'https://cdrprimer.org/',
    },
    {
      label: 'DAC Calculator',
      href: '/research/dac-calculator',
    },
    {
      label: 'Permanence Calculator',
      href: '/research/permanence-calculator',
    },
  ],
  recentPress: [
    {
      label: 'Financial Times',
      href: 'https://www.ft.com/content/de5e8631-bdf2-4c2e-8b7f-83c0c80cdea8',
    },
    {
      label: 'Bloomberg',
      href:
        'https://www.bloomberg.com/features/2020-nature-conservancy-carbon-offsets-trees/',
    },
    {
      label: 'Ars Technica',
      href:
        'https://arstechnica.com/science/2020/11/want-to-offset-your-carbon-footprint-heres-what-you-need-to-know/',
    },
    {
      label: 'Grist',
      href:
        'https://grist.org/climate/this-oregon-forest-was-supposed-to-store-carbon-for-100-years-now-its-on-fire/',
    },
  ],
}

const About = () => {
  return (
    <Layout links={'homepage'} title={'about / carbonplan'} nav={'about'}>
      <Guide />
      <Heading>About</Heading>
      <Box sx={{ display: ['none', 'none', 'initial', 'initial'] }}>
        <Row sx={{ mb: [5, 6, 7, 8] }}>
          <Column start={[1, 2]} width={[6, 4]}>
            <Flex
              sx={{
                height: '100%',
                alignContent: 'space-between',
                flexWrap: 'wrap',
              }}
            >
              <Box sx={{ width: '100%', mt: [0, 0, '-7px', '-13px'] }}>
                <WelcomeArrow />
              </Box>
              <Box
                sx={{
                  width: '100%',
                  fontSize: [3, 4, 5, 6],
                  letterSpacing: 'heading',
                  lineHeight: 'heading',
                }}
              >
                We’re a non-profit that analyzes climate solutions based on the
                best available science and data.
              </Box>
            </Flex>
          </Column>
          <Column start={[1, 7]} width={[6, 5]}>
            <Box>
              <Box as='p' variant='styles.p' sx={{ mt: [0] }}>
                Addressing the climate crisis requires action on several fronts.
                We need critical reductions in emissions. We also need
                large-scale deployment of carbon removal. Our solutions need to
                respect science and support just outcomes. And we no longer have
                time for approaches that don't work.
              </Box>
              <Box as='p' variant='styles.p' sx={{ mb: [0] }}>
                We work collaboratively to build open tools and resources for
                the evaluation and deployment of robust climate programs. We
                share what we have learned through public communication and
                collaboration with journalists. And we help organizations in the
                public and private sector make better decisions to advance their
                climate goals.
              </Box>
            </Box>
          </Column>
        </Row>
      </Box>
      <Box sx={{ display: ['initial', 'initial', 'none', 'none'] }}>
        <Row>
          <Column start={[1, 2]} width={[6, 3]}>
            <Box
              as='h2'
              variant='styles.h2'
              sx={{ mt: [0, 0, 0, 0], mb: [0, 3, 5, 5] }}
            >
              Our mission
            </Box>
          </Column>
        </Row>
        <Row sx={{ mb: [4, 5, 6, 7] }}>
          <Column start={[1, 1, 1, 1]} width={[6, 6, 5, 5]}>
            <Box sx={{ pb: [1] }}>
              <Box as='p' variant='styles.p' sx={{ mb: [4, 5, 6, 7] }}>
                Addressing the climate crisis requires action on several fronts.
                We need critical reductions in emissions. We also need
                large-scale deployment of carbon removal. Our solutions need to
                respect science and support just outcomes. And we no longer have
                time for approaches that don't work.
              </Box>
            </Box>
          </Column>
        </Row>
        <Row sx={{ mb: [3, 5, 6, 7] }}>
          <Column start={[1]} width={[1]}>
            <WelcomeArrowMobile />
          </Column>
          <Column start={[2, 2, 2, 2]} width={[5, 4, 3, 3]}>
            <Box
              sx={{
                width: '100%',
                fontSize: ['28px', 5, 5, 5],
                letterSpacing: 'heading',
                lineHeight: 'heading',
              }}
            >
              We’re a non-profit that analyzes climate solutions based on the
              best available science and data.
            </Box>
          </Column>
        </Row>
        <Row sx={{ mb: [4, 5, 6, 7] }}>
          <Column start={[1, 1, 1, 1]} width={[6, 6, 5, 5]}>
            <Box sx={{ pb: [1] }}>
              <Box as='p' variant='styles.p' sx={{ mb: [2] }}>
                We work collaboratively to build open tools and resources for
                the evaluation and deployment of robust climate programs. We
                share what we have learned through public communication and
                collaboration with journalists. And we help organizations in the
                public and private sector make better decisions to advance their
                climate goals.
              </Box>
            </Box>
          </Column>
        </Row>
      </Box>

      <Row>
        <Column start={[1, 2]} width={[6, 10, 10, 10]}>
          <Divider sx={{ width: '100%', my: [0] }}></Divider>
        </Column>
      </Row>
      <Row sx={{ mt: [4, 5, 6, 7] }}>
        <Column start={[1, 2]} width={[6, 3]}>
          <Box as='h2' variant='styles.h2' sx={{ my: [0, 0, 0] }}>
            Our work
          </Box>
        </Column>
      </Row>
      <Row sx={{ mt: [4, 5, 6, 7], mb: [5, 6, 7, 8] }}>
        <Column start={[2, 3]} width={[6, 5, 3, 3]} sx={{ mb: [4, 5, 0, 0] }}>
          <Box sx={{ fontSize: [3, 3, 3, 4] }}>
            <Box
              sx={{
                mb: [3],
                fontFamily: 'heading',
                letterSpacing: 'smallcaps',
                color: 'red',
              }}
            >
              RESEARCH
            </Box>
            <Box as='p'>
              We collaborate with researchers to build open source data and
              tools. Through this work we produce datasets and models that
              directly inform decision making across a range of sectors.
            </Box>
          </Box>
        </Column>
        <Column start={[2, 6]} width={[6, 5, 3, 3]} sx={{ mb: [4, 5, 0, 0] }}>
          <Box sx={{ fontSize: [3, 3, 3, 4] }}>
            <Box
              sx={{
                mb: [3],
                fontFamily: 'heading',
                letterSpacing: 'smallcaps',
                color: 'yellow',
              }}
            >
              COMMUNICATION
            </Box>
            <Box as='p'>
              We combine scientific storytelling and modern web technology to
              explain complex concepts with interactive data and visuals, and
              provide timely commentary on newsworthy events.
            </Box>
          </Box>
        </Column>
        <Column start={[2, 9]} width={[6, 5, 3, 3]}>
          <Box sx={{ fontSize: [3, 3, 3, 4] }}>
            <Box
              sx={{
                mb: [3],
                fontFamily: 'heading',
                letterSpacing: 'smallcaps',
                color: 'teal',
              }}
            >
              ENGAGEMENT
            </Box>
            <Box>
              We work with companies, non-profits, and government organizations
              to help analyze climate programs. We focus on transparency and
              quality, bringing rigorous science to complex problems.
            </Box>
          </Box>
        </Column>
      </Row>
      <Row>
        <Column start={[1, 2]} width={[6, 8, 10, 10]}>
          <Divider sx={{ width: '100%', my: [0] }}></Divider>
        </Column>
      </Row>
      <Row sx={{ mt: [4, 5, 6, 7], mb: [5, 6, 7, 8] }}>
        <Column
          start={[1, 1, 2, 2]}
          width={[6, 4, 5, 5]}
          sx={{ mb: [3, 0, 0, 0] }}
        >
          <Box
            sx={{
              fontSize: [6],
              mb: [2, 0, 0],
            }}
          >
            <ArrowLink
              label={
                <span>
                  Browse our
                  <br />
                  latest research
                </span>
              }
              big={true}
              href={'/research'}
              color={'red'}
            />
          </Box>
        </Column>
        <Column start={[1, 5, 7, 7]} width={[6, 4, 5, 5]}>
          <Box sx={{ fontSize: [6] }}>
            <ArrowLink
              big={true}
              href={
                'https://carbonplan-assets.s3.amazonaws.com/docs/CarbonPlan-Annual-Report-2020.pdf'
              }
              color={'yellow'}
              label={
                <span>
                  Download 2020 <br /> annual report
                </span>
              }
            />
          </Box>
        </Column>
      </Row>
      <Row>
        <Column start={[1, 2]} width={[6, 8, 10, 10]}>
          <Divider sx={{ width: '100%', my: [0] }}></Divider>
        </Column>
      </Row>
      <Row sx={{ my: [5, 6, 7, 8] }}>
        <Column
          start={[2, 2, 3, 3]}
          width={[5, 5, 3, 3]}
          sx={{ mb: [4, 5, 0, 0] }}
        >
          <Box sx={{ fontSize: [3, 3, 3, 4] }}>
            <Box
              sx={{
                mb: [3],
                fontFamily: 'heading',
                letterSpacing: 'smallcaps',
                color: 'teal',
              }}
            >
              RECENT HIGHLIGHTS
            </Box>
            {data.recentHighlights.map((d, i) => (
              <ArrowLink key={i} label={d.label} href={d.href} />
            ))}
          </Box>
        </Column>
        <Column start={[2, 2, 8, 8]} width={[5, 5, 3, 3]}>
          <Box sx={{ fontSize: [3, 3, 3, 4] }}>
            <Box
              sx={{
                mb: [3],
                fontFamily: 'heading',
                letterSpacing: 'smallcaps',
                color: 'red',
              }}
            >
              RECENT PRESS
            </Box>
            {data.recentPress.map((d, i) => (
              <ArrowLink key={i} label={d.label} href={d.href} />
            ))}
          </Box>
        </Column>
      </Row>
      <Row>
        <Column start={[1, 2]} width={[6, 8, 10, 10]}>
          <Divider sx={{ width: '100%', my: [0] }}></Divider>
        </Column>
      </Row>
      <Row sx={{ mt: [4, 5, 6, 7] }}>
        <Column start={[1, 2]} width={[6, 10]}>
          <Box as='h2' variant='styles.h2' sx={{ my: [0, 0, 0] }}>
            Want more?
          </Box>
        </Column>
      </Row>
      <Row sx={{ mt: [4, 4, 5, 6], mb: [3, 5, 7, 8] }}>
        <Column start={[1, 3]} width={[3, 4, 2, 2]} sx={{ mb: [3, 0, 0, 0] }}>
          <Box sx={{ fontSize: [3, 3, 3, 4], mb: [3, 3, 0] }}>
            <LearnMoreLink internal={true} label={'TEAM'} href='/team'>
              Read about our team and collaborators
            </LearnMoreLink>
          </Box>
        </Column>
        <Column start={[4, 5, 5, 5]} width={[3, 4, 2, 2]}>
          <Box sx={{ fontSize: [3, 3, 3, 4], mb: [3, 3, 0] }}>
            <LearnMoreLink internal={true} label={'PRESS'} href='/press'>
              View a list of press about our work
            </LearnMoreLink>
          </Box>
        </Column>
        <Column start={[1, 7]} width={[3, 4, 2, 2]}>
          <Box sx={{ fontSize: [3, 3, 3, 4], mb: [3, 3, 0] }}>
            <LearnMoreLink
              label={'GITHUB'}
              href='https://github.com/carbonplan'
            >
              Check out our open source code
            </LearnMoreLink>
          </Box>
        </Column>
        <Column start={[4, 5, 9, 9]} width={[3, 4, 2, 2]}>
          <Box sx={{ fontSize: [3, 3, 3, 4], mb: [3, 3, 0] }}>
            <LearnMoreLink internal={true} label={'DONATE'} href='/donate'>
              Donate to our organization
            </LearnMoreLink>
          </Box>
        </Column>
      </Row>
    </Layout>
  )
}

function LearnMoreLink({ label, href, children, internal = false }) {
  const sx = {
    link: {
      textDecoration: 'none',
      '&:hover > #container > #arrow': {
        transform: 'rotate(45deg)',
        fill: 'secondary',
      },
    },
  }

  function Wrapper({ href, children }) {
    if (internal) {
      return (
        <NextLink href={href} passHref>
          <Link sx={sx.link}>{children}</Link>
        </NextLink>
      )
    } else {
      return (
        <Link href={href} sx={sx.link}>
          {children}
        </Link>
      )
    }
  }

  return (
    <Box
      sx={{
        fontSize: [3, 3, 3, 4],
        lineHeight: '1.2em',
        width: 'fit-content',
        mb: [1],
      }}
    >
      <Wrapper href={href}>
        <Box sx={{ transition: '0.15s', pb: [2] }}>{children}</Box>
        <Box
          sx={{
            transition: '0.15s',
            display: 'inline-block',
            textTransform: 'uppercase',
            letterSpacing: 'smallcaps',
            fontFamily: 'heading',
            fontSize: [2, 2, 2, 3],
          }}
        >
          {label}
        </Box>
        <Box
          as='span'
          id='container'
          sx={{
            ml: [2],
            display: 'inline-block',
          }}
        >
          <Arrow
            id='arrow'
            sx={{
              transition: 'fill 0.15s, transform 0.15s',
              position: 'relative',
              top: ['2px'],
              fill: 'primary',
              height: [15, 15, 15, 17],
              width: [15, 15, 15, 17],
            }}
          />
        </Box>
        <Box as='span' sx={{ display: 'inline-block', width: ['12px'] }} />
      </Wrapper>
    </Box>
  )
}

function ArrowLink({ href, label, big = false, color = 'text' }) {
  const InnerArrow = () => {
    return (
      <Box
        as='span'
        id='container'
        sx={{
          ml: big ? ['8px', '8px', '12px', '16px'] : [2],
          display: 'inline-block',
        }}
      >
        <Arrow
          id='arrow'
          sx={{
            transition: 'fill 0.15s, transform 0.15s',
            position: 'relative',
            top: big ? ['4px', '4px', '5px', '6px'] : ['3px'],
            fill: color,
            height: big ? [25, 25, 35, 45] : [18, 18, 18, 24],
            width: big ? [25, 25, 35, 45] : [18, 18, 18, 24],
          }}
        />
      </Box>
    )
  }

  return (
    <Box
      sx={{
        fontSize: big ? [5, 5, 6, 7] : [4, 4, 4, 5],
        fontFamily: big ? 'heading' : 'body',
        lineHeight: 'heading',
        width: 'fit-content',
        mb: big ? [0] : [1],
      }}
    >
      <Link
        id='link'
        sx={{
          textDecoration: 'none',
          transition: 'color 0.15s',
          '&:hover': {
            color: 'secondary',
          },
          '&:hover > #span-1 > #container > #arrow': {
            transform: 'rotate(45deg)',
            fill: 'secondary',
          },
          '&:hover > #span-1 > #span-2 > #container > #arrow': {
            transform: 'rotate(45deg)',
            fill: 'secondary',
          },
        }}
        href={href}
      >
        {!(typeof label === 'string') && (
          <span id='span-1'>
            {label}
            <InnerArrow />
          </span>
        )}
        {typeof label === 'string' && (
          <span id='span-1'>
            {label
              .split(' ')
              .slice(0, label.split(' ').length - 1)
              .join(' ')}{' '}
            <Box as='span' id='span-2' sx={{ whiteSpace: 'nowrap' }}>
              {label
                .split(' ')
                .slice(label.split(' ').length - 1, label.split(' ').length)}
              <InnerArrow />
            </Box>
          </span>
        )}
        <Box as='span' sx={{ display: 'inline-block', width: ['1px'] }} />
      </Link>
    </Box>
  )
}

function WelcomeArrow() {
  return (
    <Grid
      columns={[
        '40px 1fr 40px',
        '40px 1fr 40px',
        '40px 1fr 40px',
        '60px 1fr 60px',
      ]}
      gap={[0]}
    >
      <Box
        sx={{
          stroke: 'primary',
          display: 'inline-block',
          fill: 'none',
          width: ['40px', '40px', '40px', '60px'],
          height: ['40px', '40px', '40px', '60px'],
          strokeWidth: 1,
        }}
      >
        <svg x='0px' y='0px' viewBox='0 0 20 20'>
          <circle vectorEffect='non-scaling-stroke' cx='10' cy='10' r='8.5' />
        </svg>
      </Box>
      <Box
        sx={{
          stroke: 'primary',
          display: 'inline-block',
          fill: 'none',
          width: [
            'calc(100% + 42px)',
            'calc(100% + 42px)',
            'calc(100% + 42px)',
            'calc(100% + 62px)',
          ],
          ml: '-3px',
        }}
      >
        <Box
          as='svg'
          x='0px'
          y='0px'
          width='100%'
          sx={{ height: ['40px', '40px', '40px', '60px'] }}
        >
          <line x1='0' x2='100%' y1='50%' y2='50%' />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'inline-block',
          float: 'right',
          stroke: 'primary',
          fill: 'none',
          width: ['40px', '40px', '40px', '60px'],
          height: ['40px', '40px', '40px', '60px'],
          strokeWidth: 1,
        }}
      >
        <svg x='0px' y='0px' viewBox='0 0 20 20'>
          <line
            vectorEffect='non-scaling-stroke'
            x1='9'
            y1='0'
            x2='20'
            y2='10'
          />
          <line
            vectorEffect='non-scaling-stroke'
            x1='9'
            y1='20'
            x2='20'
            y2='10'
          />
        </svg>
      </Box>
    </Grid>
  )
}

function WelcomeArrowMobile() {
  return (
    <Box
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'space-between',
        height: '100%',
        display: 'flex',
      }}
    >
      <Box sx={{ width: '100%', height: '20px' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            stroke: 'primary',
            strokeWidth: 1,
            fill: 'none',
          }}
        >
          <svg x='0px' y='0px' width='20px' height='100%'>
            <circle vectorEffect='non-scaling-stroke' cx='10' cy='10' r='9' />
          </svg>
        </Box>
      </Box>
      <Box
        sx={{
          height: '100%',
          width: '100%',
          flex: '1 1 auto',
          stroke: 'primary',
          strokeWidth: 1,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <svg
            x='0px'
            y='0px'
            width='30'
            height='100%'
            preserveAspectRatio='none'
          >
            <line
              vectorEffect='non-scaling-stroke'
              x1='50%'
              x2='50%'
              y1='0%'
              y2='100%'
            />
          </svg>
        </Box>
      </Box>
      <Box sx={{ width: '100%', height: '20px' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            stroke: 'primary',
            strokeWidth: 1,
            fill: 'none',
            mt: ['-10px'],
          }}
        >
          <svg x='0px' y='0px' width='20px' height='100%'>
            <line
              vectorEffect='non-scaling-stroke'
              x1='0'
              x2='10'
              y1='0'
              y2='10'
            />
            <line
              vectorEffect='non-scaling-stroke'
              x1='20'
              x2='10'
              y1='0'
              y2='10'
            />
          </svg>
        </Box>
      </Box>
    </Box>
  )
}

export default About
