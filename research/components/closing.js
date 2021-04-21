import { Box, Link } from 'theme-ui'
import { Row, Column, Links } from '@carbonplan/components'

const { InternalLink } = Links

const Closing = ({ children }) => {
  return (
    <Row columns={[6]} sx={{ mt: [4, 5, 5, 6] }}>
      <Column start={[1]} width={[3, 3, 3, 3]}>
        <Box as='h3' variant='styles.h3' sx={{ mb: [0, 0, 0, 0] }}>
          Questions? Interested in collaborating on these problems?{' '}
          <Link href='mailto:hello@carbonplan.org'>Email us</Link>
        </Box>
      </Column>
      <Column start={[4, 5, 5, 5]} width={[3, 2, 2, 2]}>
        <Box as='h3' variant='styles.h3' sx={{ mb: [0, 0, 0, 0] }}>
          Want to read more? Explore our{' '}
          <InternalLink href='/research'>research</InternalLink>
        </Box>
      </Column>
    </Row>
  )
}

export default Closing
