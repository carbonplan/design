import { Box, Text, Themed, Grid, Link } from 'theme-ui'
import { Layout, Row, Column, Guide } from '@carbonplan/components'
import Heading from '../homepage/components/heading'
import Table from '../homepage/components/table'

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
      name: (
        <span>
          Jason Jacobs +<br />
          Allison Pincus-Jacobs
        </span>
      ),
      description: 'Individual',
    },
    {
      name: (
        <span>
          Colin Rust +<br />
          Jeannie Tseng
        </span>
      ),
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
          Permanence Calculator
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

const Funding = () => {
  return (
    <Layout links={'homepage'} title={'funding / carbonplan'}>
      <Guide />
      <Box sx={{ mb: [5, 6, 7, 8] }}>
        <Heading
          sidenote={'Interested in supporting our work? Make a donation.'}
        >
          Funding
        </Heading>
        <Row>
          <Column start={[1, 1, 2, 2]} width={[6, 6, 6, 6]}>
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
          <Table heading='Unrestricted donations' data={data.unrestricted} />
        </Box>
        <Table
          heading='Project-specific funding'
          data={data.projectSpecific}
          variant='narrow'
        />
      </Box>
    </Layout>
  )
}

export default Funding
