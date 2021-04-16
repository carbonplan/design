import { Box, Themed, Link } from 'theme-ui'
import { Layout, Row, Column, Guide } from '@carbonplan/components'
import Heading from '../homepage/components/heading'

const FAQ = () => {
  return (
    <Layout links={'homepage'} title={'terms / carbonplan'}>
      <Guide />
      <Box sx={{ mb: [5, 6, 7, 8] }}>
        <Heading>Terms</Heading>
        <Row>
          <Column start={[2, 2, 3, 3]} width={[5, 5, 6, 6]}>
            <Themed.p>
              All code powering this website is{' '}
              <Link href='https://choosealicense.com/licenses/mit/'>MIT</Link>{' '}
              licensed and available on{' '}
              <Link href='https://github.com/carbonplan'>GitHub</Link>.
            </Themed.p>
            <Themed.p>
              Consistent with our charitable mission to build open tools and
              resources for the evaluation and deployment of climate solutions,
              we aim to release models and datasets under maximally permissive
              licenses.
            </Themed.p>
            <Themed.p>
              We do request that you please provide attribution if reusing any
              of our digital content (graphics, logo, data, articles, etc.).
            </Themed.p>
            <Themed.p>
              Some of the data made available on parts of this website or
              through our APIs is sourced from content made available under a{' '}
              <Link href='https://choosealicense.com/licenses/cc-by-4.0/'>
                CC-BY
              </Link>{' '}
              license. We include attribution for this content, and we please
              request that you also maintain that attribution if using this
              data.
            </Themed.p>
            <Themed.p>
              We may change some of these terms in the future. Please check back
              here for updates. If you have any questions, please contact us at{' '}
              <Link href='mailto:hello@carbonplan.org'>
                hello@carbonplan.org
              </Link>
              .
            </Themed.p>
          </Column>
        </Row>
      </Box>
    </Layout>
  )
}

export default FAQ
