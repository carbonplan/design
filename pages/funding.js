import { Box, Text, Themed, Grid, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'
import { Layout, Row, Column, Guide } from '@carbonplan/components'
import Heading from '../homepage/components/heading'
import Table from '../homepage/components/table'
import { unrestricted, projectSpecific } from '../homepage/data/funding'

const Funding = () => {
  return (
    <Layout links={'homepage'} title={'funding / carbonplan'}>
      <Guide color='rainbow' />
      <Box sx={{ mb: [8, 8, 9, 10] }}>
        <Heading
          sidenote={
            <span>
              Interested in supporting our work? Make a{' '}
              <NextLink href='/donate' passHref>
                <Link>donation</Link>
              </NextLink>
              .
            </span>
          }
        >
          Funding
        </Heading>
        <Row>
          <Column start={[1, 1, 2, 2]} width={[6, 6, 6, 6]}>
            <Box
              sx={{
                fontSize: [3, 3, 3, 4],
                fontFamily: 'body',
                lineHeight: 'body',
                letterSpacing: 'body',
              }}
            >
              We receive a mix of unrestricted funding through donations and
              grants, and project-specific funding through contracts and grants.
              We are incredibly grateful to all of our donors, funders, and
              partners. Here we list all sources of funding greater than $1000
              in either category. Funding for additional, ongoing projects will
              be listed in the future.
            </Box>
          </Column>
        </Row>
        <Box sx={{ mb: [2, 3, 4, 5] }}>
          <Table heading='Unrestricted donations' data={unrestricted} />
        </Box>
        <Table
          heading='Project-specific funding'
          data={projectSpecific}
          variant='narrow'
        />
      </Box>
    </Layout>
  )
}

export default Funding
