import { Box, Themed, Text, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'
import { Layout, Row, Column, Guide, CalloutLink } from '@carbonplan/components'
import Heading from '../homepage/components/heading'

const Thanks = () => {
  return (
    <Layout links={'homepage'} title={'thanks / carbonplan'}>
      <Guide />
      <Box sx={{ mb: [5, 6, 7, 8] }}>
        <Heading>Thank you</Heading>
        <Row>
          <Column start={[1, 1, 2, 2]} width={[6, 6, 6, 6]}>
            <Box as='p' variant='styles.p' sx={{ mt: [0] }}>
              We truly appreciate your generosity.
            </Box>
            <Themed.p>
              Follow us on{' '}
              <Link href='https://twitter.com/carbonplanorg'>
                @carbonplanorg
              </Link>{' '}
              or come back to this website anytime to see the latest updates on
              our work.
            </Themed.p>
          </Column>
        </Row>
        <Row sx={{ mt: [4, 5, 6, 7] }}>
          <Column start={[1, 2]} width={[6, 10]}>
            <Box as='h2' variant='styles.h2' sx={{ my: [0, 0, 0] }}>
              Read more
            </Box>
          </Column>
        </Row>
        <Row sx={{ mt: [4, 4, 5, 6], mb: [3, 5, 7, 8] }}>
          <Column start={[1, 3]} width={[3, 4, 2, 2]} sx={{ mb: [3, 0, 0, 0] }}>
            <Box sx={{ fontSize: [3, 3, 3, 4], mb: [3, 3, 0] }}>
              <CalloutLink internal={true} label={'research'} href='/research'>
                Browse our latest articles
              </CalloutLink>
            </Box>
          </Column>
          <Column start={[4, 5, 5, 5]} width={[3, 4, 2, 2]}>
            <Box sx={{ fontSize: [3, 3, 3, 4], mb: [3, 3, 0] }}>
              <CalloutLink internal={true} label={'press'} href='/press'>
                View a list of press about our work
              </CalloutLink>
            </Box>
          </Column>
          <Column start={[1, 7]} width={[3, 4, 2, 2]}>
            <Box sx={{ fontSize: [3, 3, 3, 4], mb: [3, 3, 0] }}>
              <CalloutLink internal={true} label={'team'} href='/team'>
                Read about our team and collaborators
              </CalloutLink>
            </Box>
          </Column>
          <Column start={[4, 5, 9, 9]} width={[3, 4, 2, 2]}>
            <Box sx={{ fontSize: [3, 3, 3, 4], mb: [3, 3, 0] }}>
              <CalloutLink
                label={'github'}
                href='https://github.com/carbonplan'
              >
                Check out our open source code
              </CalloutLink>
            </Box>
          </Column>
        </Row>
      </Box>
    </Layout>
  )
}

export default Thanks
