import { Box } from 'theme-ui'
import { Row, Column } from '@carbonplan/components'

const Heading = ({children}) => {
  return (
    <Row sx={{ mt: [5, 6, 7, 8], mb: [5, 6, 7, 8] }}>
        <Column start={[1, 2]} width={[6, 6]}>
          <Box
            as='h1'
            variant='styles.h1'
            sx={{ my: [0, 0, 0, 0], mb: [0, 0, 0, 0] }}
          >
            { children }
          </Box>
        </Column>
      </Row>
  )
}

export default Heading