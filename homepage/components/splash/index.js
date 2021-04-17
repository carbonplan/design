import { Box } from 'theme-ui'
import { Row, Column } from '@carbonplan/components'
import BigBars from './big-bars'
import Line from './line'

const SplashRow = () => {
  return (
    <Row sx={{ height: '75px', my: [4, 5, 5, 5] }}>
      <Column start={[1, 1, 1, 1]} width={[3, 4, 3, 3]}>
        <BigBars />
      </Column>
      <Column start={[4, 5, 4, 4]} width={[3, 4, 3, 3]}>
        <Line />
      </Column>
      <Column
        start={[7]}
        width={[3]}
        sx={{ display: ['none', 'none', 'initial', 'initial'] }}
      >
        <BigBars />
      </Column>
      <Column
        start={[10]}
        width={[3]}
        sx={{ display: ['none', 'none', 'initial', 'initial'] }}
      >
        <BigBars />
      </Column>
    </Row>
  )
}

const Splash = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <SplashRow />
      <SplashRow />
      <SplashRow />
    </Box>
  )
}

export default Splash
