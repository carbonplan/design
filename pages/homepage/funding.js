import { Box, Text, Themed, Grid, Link } from 'theme-ui'
import { Layout, Row, Column, Guide } from '@carbonplan/components'
import Heading from '../../homepage/components/heading'

const data = {
  unrestricted: [
    {
      name: 'Pamela Mensch',
      description: 'Individual',
    },
    {
      name: 'Hampus Jakobsson',
      description: 'Individual',
    },
    {
      name: 'Jason Jacobs + Allison Pincus-Jacobs',
      description: 'Individual',
    },
    {
      name: 'Colin Rust + Jeannie Tseng',
      description: 'Individual',
    },
    {
      name: 'Teach a Man to Fish Foundation',
      description: 'Individual',
    },
    {
      name: 'Eutopia Foundation',
      description: 'Individual',
    },
    {
      name: 'Incite labs',
      description: 'Corporate',
    },
  ],
  projectSpecific: [
    {
      name: 'Carbon 180',
      description: (
        <Link href='https://medium.com/@carbon180/all-star-fellows-join-carbon180-7fdbd00eae3b'>
          Entrepreneur in Residence Fellowship
        </Link>
      ),
    },
    {
      name: 'Stripe',
      description: (
        <Link href='/research/stripe-reports-insights'>
          Negative Emissions Purchase 2020
        </Link>
      ),
    },
    {
      name: 'WattTime',
      description: (
        <Link href='https://www.climatetrace.org'>Climate TRACE</Link>
      ),
    },
    {
      name: 'Generation IM',
      description: 'Guidance on evaluating climate benefits from investments',
    },
    {
      name: 'ClimateWorks',
      description: (
        <Link href='/research/permanence-calculator'>
          Permanence calculator
        </Link>
      ),
    },
    {
      name: (
        <span>
          Lowercase Carbon +<br /> Rio Vista Foundation +<br /> ClimateWorks
        </span>
      ),
      description: <Link href='https://cdrprimer.org'>CDR Primer</Link>,
    },
    {
      name: 'NASA',
      description: (
        <Link href='https://earthdata.nasa.gov/esds/competitive-programs/access/pangeo-ml'>
          Pangeo ML
        </Link>
      ),
    },
    {
      name: 'Microsoft AI for Earth',
      description: 'Forest carbon risk mapping (coming soon)',
    },
  ],
}

const sx = {
  name: {
    textTransform: 'uppercase',
    letterSpacing: 'smallcaps',
    fontFamily: 'heading',
    fontSize: [2],
  },
  description: {
    fontSize: [2],
    fontFamily: 'faux',
    letterSpacing: 'faux',
    mb: ['1px'],
    mt: [2, 2, 0, 0],
  },
  row: {
    borderStyle: 'solid',
    borderWidth: '0px',
    borderTopWidth: '1px',
    borderColor: 'muted',
    py: [3, 3, 3, 4],
    mb: ['1px'],
  },
}

const Funding = () => {
  return (
    <Layout links={'homepage'} title={'funding / carbonplan'}>
      <Guide />
      <Box sx={{ mb: [5, 6, 7, 8] }}>
        <Heading>Funding</Heading>
        <Row>
          <Column start={[1, 3]} width={[6, 6]}>
            <Themed.p>
              We receive a mix of unrestricted funding through donations and
              grants, and project-specific funding through contracts and grants.
              We are incredibly grateful to all of our donors, funders, and
              partners. Here we list all sources of funding greater than $1000
              in either category. Funding for additional, ongoing projects will
              be listed in the future.
            </Themed.p>
          </Column>
        </Row>
        <Box sx={{ mb: [2, 3, 4, 5] }}>
          <Section heading='Unrestricted donations' data={data.unrestricted} />
        </Box>
        <Section
          heading='Project-specific funding'
          data={data.projectSpecific}
          variant='narrow'
        />
      </Box>
    </Layout>
  )
}

function Section({ heading, data, variant, children }) {
  return (
    <Box>
      <Row sx={{ mb: [2, 3, 4, 5] }}>
        <Column start={[1, 2]} width={[6, 6]}>
          <Themed.h2>{heading}</Themed.h2>
        </Column>
      </Row>
      <Row>
        <Column start={[1, 3]} width={[6, 6]}>
          <Box
            sx={{
              borderStyle: 'solid',
              borderWidth: '0px',
              borderBottomWidth: '1px',
              borderColor: 'muted',
            }}
          >
            {data.map((d, i) => (
              <Funder key={i} funder={d} variant={variant} />
            ))}
          </Box>
        </Column>
      </Row>
    </Box>
  )
}

function Funder({ funder, variant }) {
  return (
    <Box sx={sx.row}>
      <Row columns={[6, 6]}>
        <Column
          start={[1, 1, 1, 1]}
          width={[
            6,
            3,
            variant == 'narrow' ? 3 : 4,
            variant == 'narrow' ? 3 : 4,
          ]}
        >
          <Box sx={sx.name}>{funder.name}</Box>
        </Column>
        <Column
          start={[
            1,
            4,
            variant == 'narrow' ? 4 : 5,
            variant == 'narrow' ? 4 : 5,
          ]}
          width={[
            6,
            3,
            variant == 'narrow' ? 3 : 2,
            variant == 'narrow' ? 3 : 2,
          ]}
        >
          <Box
            sx={{
              textAlign: [
                'left',
                'left',
                variant == 'narrow' ? 'left' : 'right',
              ],
              ...sx.description,
            }}
          >
            {funder.description}
          </Box>
        </Column>
      </Row>
    </Box>
  )
}

export default Funding
