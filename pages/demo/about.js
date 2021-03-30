import { Box, Themed, Divider, Text, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'
import { Row, Column, Layout, Guide } from '../../components'

const About = () => {
  return (
    <Layout title='about / carbonplan'>
      <Guide />
      <Row sx={{ mt: [5, 6, 7, 8], mb: [4, 5, 6, 7] }}>
        <Column start={[1, 2]} width={[6, 6]}>
          <Box
            as='h1'
            variant='styles.h1'
            sx={{ my: [0, 0, 0], mb: [4, 5, 5, 6] }}
          >
            About
          </Box>
          <Box as='h2' variant='styles.h2' sx={{ my: [0, 0, 0] }}>
            Mission
          </Box>
        </Column>
      </Row>
      <Row sx={{ mb: [5, 6, 7, 8] }}>
        <Column start={[1, 3]} width={[6, 4, 6, 6]}>
          <Box sx={{ maxWidth: '750px', display: 'inline-block' }}>
            <Text as='p' variant='styles.p' sx={{ mt: [0] }}>
              Addressing the climate crisis requires action on several fronts.
              We need critical reductions in emissions. We also need large-scale
              deployment of carbon removal. Our solutions need to respect
              science and support just outcomes. And we no longer have time for
              approaches that don't work.
            </Text>
            <Text as='p' variant='styles.p' sx={{ mb: [0] }}>
              We're a non-profit that analyzes climate solutions based on the
              best available science and data. We work collaboratively to build
              open tools and resources for the evaluation and deployment of
              robust climate programs. We share what we have learned through
              public communication and collaboration with journalists. And we
              help organizations in the public and private sector make better
              decisions to advance their climate goals.
            </Text>
          </Box>
        </Column>
        <Column
          start={[1, 10]}
          width={[2, 1]}
          sx={{ display: ['none', 'none', 'initial'] }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Arrow />
          </Box>
        </Column>
      </Row>
      <Row>
        <Column start={[1, 2]} width={[6, 10]}>
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
        <Column start={[1, 3]} width={[6, 4, 3, 3]}>
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
        <Column start={[1, 6]} width={[6, 4, 3, 3]}>
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
        <Column start={[1, 9]} width={[6, 4, 3, 3]}>
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
        <Column start={[1, 2]} width={[6, 10]}>
          <Divider sx={{ width: '100%', my: [0] }}></Divider>
        </Column>
      </Row>
      <Row sx={{ mt: [4, 5, 6, 7], mb: [5, 6, 7, 8] }}>
        <Column start={[1, 1, 2, 2]} width={[6, 3, 5, 5]}>
          <Box
            sx={{
              fontSize: [6],
              mb: [2, 0, 0],
            }}
          >
            <ArrowLink big={true} href={'/research'} color={'red'}>
              Browse our latest
              <br />
              research
            </ArrowLink>
          </Box>
        </Column>
        <Column start={[1, 4, 7, 7]} width={[6, 3, 5, 5]}>
          <Box sx={{ fontSize: [6] }}>
            <ArrowLink
              big={true}
              href={
                'https://carbonplan-assets.s3.amazonaws.com/docs/CarbonPlan-Annual-Report-2020.pdf'
              }
              color={'yellow'}
            >
              Download 2020
              <br />
              annual report
            </ArrowLink>
          </Box>
        </Column>
      </Row>
      <Row>
        <Column start={[1, 2]} width={[6, 10]}>
          <Divider sx={{ width: '100%', my: [0] }}></Divider>
        </Column>
      </Row>
      <Row sx={{ my: [5, 6, 7, 8] }}>
        <Column start={[1, 3]} width={[3, 3]}>
          <Box sx={{ fontSize: [3, 3, 3, 4] }}>
            <Box
              sx={{
                mb: [3],
                fontFamily: 'heading',
                letterSpacing: 'smallcaps',
                color: 'red',
              }}
            >
              RECENT HIGHLIGHTS
            </Box>
            <ArrowLink href='/research/cdr-database'>CDR Database</ArrowLink>
            <ArrowLink href='https://cdrprimer.org/'>CDR Primer</ArrowLink>
            <ArrowLink href='/research/dac-calculator'>
              DAC Calculator
            </ArrowLink>
            <ArrowLink href='/research/permanence-calculator'>
              Permanence Calculator
            </ArrowLink>
          </Box>
        </Column>
        <Column start={[4, 8]} width={[3, 3]}>
          <Box sx={{ fontSize: [3, 3, 3, 4] }}>
            <Box
              sx={{
                mb: [3],
                fontFamily: 'heading',
                letterSpacing: 'smallcaps',
                color: 'yellow',
              }}
            >
              RECENT PRESS
            </Box>
            <ArrowLink href='https://www.ft.com/content/de5e8631-bdf2-4c2e-8b7f-83c0c80cdea8'>
              Financial Times
            </ArrowLink>
            <ArrowLink href='https://www.bloomberg.com/features/2020-nature-conservancy-carbon-offsets-trees/'>
              Bloomberg
            </ArrowLink>
            <ArrowLink href='https://arstechnica.com/science/2020/11/want-to-offset-your-carbon-footprint-heres-what-you-need-to-know/'>
              Ars Technica
            </ArrowLink>
            <ArrowLink href='https://grist.org/climate/this-oregon-forest-was-supposed-to-store-carbon-for-100-years-now-its-on-fire/'>
              Grist
            </ArrowLink>
          </Box>
        </Column>
      </Row>
      <Row>
        <Column start={[1, 2]} width={[6, 10]}>
          <Divider sx={{ width: '100%', my: [0] }}></Divider>
        </Column>
      </Row>
      <Row sx={{ mt: [4, 5, 6, 7] }}>
        <Column start={[1, 2]} width={[6, 10]}>
          <Box as='h2' variant='styles.h2' sx={{ my: [0, 0, 0] }}>
            Learn more
          </Box>
        </Column>
      </Row>
      <Row sx={{ mt: [4, 4, 5, 6], mb: [5, 6, 7, 8] }}>
        <Column start={[1, 3]} width={[2, 2]}>
          <Box sx={{ fontSize: [3, 3, 3, 4], mb: [3, 3, 0] }}>
            <LearnMoreLink internal={true} label={'TEAM'} href='/team'>
              Read about our team and collaborators
            </LearnMoreLink>
          </Box>
        </Column>
        <Column start={[4, 5]} width={[2, 2]}>
          <Box sx={{ fontSize: [3, 3, 3, 4], mb: [3, 3, 0] }}>
            <LearnMoreLink internal={true} label={'PRESS'} href='/press'>
              View a list of press about our work
            </LearnMoreLink>
          </Box>
        </Column>
        <Column start={[1, 7]} width={[2, 2]}>
          <Box sx={{ fontSize: [3, 3, 3, 4], mb: [3, 3, 0] }}>
            <LearnMoreLink
              label={'GITHUB'}
              href='https://github.com/carbonplan'
            >
              Check out our open source code
            </LearnMoreLink>
          </Box>
        </Column>
        <Column start={[4, 9]} width={[2, 2]}>
          <Box sx={{ fontSize: [3, 3, 3, 4], mb: [3, 3, 0] }}>
            <LearnMoreLink internal={true} label={'FUNDING'} href='/funding'>
              View our sources of funding
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
      '&:hover > #arrow': {
        transform: 'rotate(45deg)',
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
            ...sx,
          }}
        >
          {label}
        </Box>
        <Box
          as='span'
          id='arrow'
          sx={{
            ml: [2],
            fontSize: [4],
            position: 'relative',
            top: '3px',
            display: 'inline-block',
            lineHeight: 0,
            left: '0px',
            transition: '0.15s',
            ...sx,
          }}
        >
          ↗
        </Box>
        <Box as='span' sx={{ display: 'inline-block', width: ['12px'] }} />
      </Wrapper>
    </Box>
  )
}

function ArrowLink({ href, children, big = false, color = 'text' }) {
  return (
    <Box
      sx={{
        fontSize: big ? [5, 5, 6, 7] : [4, 4, 4, 5],
        lineHeight: ['1.2em', '1.25em', 'heading'],
        width: 'fit-content',
        mb: big ? [0] : [1],
      }}
    >
      <Link
        id='link'
        sx={{
          textDecoration: 'none',
          transition: '0.15s',
          '&:hover > #arrow': {
            transform: 'rotate(45deg)',
            color: 'secondary',
          },
        }}
        href={href}
      >
        {children}
        <Box
          as='span'
          id='arrow'
          sx={{
            ml: [2],
            fontSize: big ? [7, 7, 7, 8] : [4, 4, 4, 5],
            position: 'relative',
            top: big ? '9px' : '3px',
            display: 'inline-block',
            lineHeight: 0,
            left: '0px',
            transition: '0.15s',
            color: color,
          }}
        >
          ↗
        </Box>
        <Box as='span' sx={{ display: 'inline-block', width: ['1px'] }} />
      </Link>
    </Box>
  )
}

function Arrow() {
  return (
    <Box
      sx={{
        stroke: 'primary',
        fill: 'none',
        width: '58px',
      }}
    >
      <svg x='0px' y='0px' viewBox='0 0 51.2 216.4'>
        <line x1='25.7' y1='35.2' x2='25.7' y2='211.4' />
        <circle cx='25.6' cy='23.7' r='11.2' />
        <g transform='translate(0,19)'>
          <line x1='25.8' y1='193' x2='40.7' y2='178.4' />
          <line x1='25.8' y1='193' x2='10.8' y2='178.4' />
        </g>
      </svg>
    </Box>
  )
}

export default About
