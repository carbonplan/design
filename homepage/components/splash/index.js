import { Box } from 'theme-ui'
import { Row, Column } from '@carbonplan/components'
import WideBars from './wide-bars'
import BarSwoop from './bar-swoop'
import GroupedBars from './grouped-bars'
import SingleLine from './single-line'
import SingleBar from './single-bar'
import SlidingDots from './sliding-dots'
import DotGrid from './dot-grid'

const SplashRow = ({ components }) => {
  return (
    <Row sx={{ height: '75px', my: [4, 5, 5, 5] }}>
      <Column start={[1, 1, 1, 1]} width={[3, 4, 3, 3]}>
        {components[0]}
      </Column>
      <Column start={[4, 5, 4, 4]} width={[3, 4, 3, 3]}>
        {components[1]}
      </Column>
      <Column
        start={[7]}
        width={[3]}
        sx={{ display: ['none', 'none', 'initial', 'initial'] }}
      >
        {components[2]}
      </Column>
      <Column
        start={[10]}
        width={[3]}
        sx={{ display: ['none', 'none', 'initial', 'initial'] }}
      >
        {components[3]}
      </Column>
    </Row>
  )
}

const Splash = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <SplashRow
        components={[<WideBars />, <SingleLine />, <BarSwoop />, <WideBars />]}
      />
      <SplashRow
        components={[<WideBars />, <SingleBar />, <WideBars />, <WideBars />]}
      />
      <SplashRow
        components={[
          <DotGrid />,
          <SlidingDots />,
          <GroupedBars />,
          <WideBars />,
        ]}
      />
    </Box>
  )
}

export default Splash
