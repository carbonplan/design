import { Box } from 'theme-ui'
import { Row, Column } from '@carbonplan/components'
import WideBars from './wide-bars'
import BarSwoop from './bar-swoop'
import GroupedBars from './grouped-bars'
import SingleLine from './single-line'
import SingleBar from './single-bar'
import SlidingDots from './sliding-dots'
import DotGrid from './dot-grid'

const SplashRowDesktop = ({ components }) => {
  return (
    <Row sx={{ height: '75px', my: [4, 5, 5, 5] }}>
      <Column start={[1]} width={[3]}>
        {components[0]}
      </Column>
      <Column start={[4]} width={[3]}>
        {components[1]}
      </Column>
      <Column start={[7]} width={[3]}>
        {components[2]}
      </Column>
      <Column start={[10]} width={[3]}>
        {components[3]}
      </Column>
    </Row>
  )
}

const SplashRowMobile = ({ components }) => {
  return (
    <Row sx={{ height: '75px', my: [4, 5, 5, 5] }}>
      <Column start={[1, 1, 1, 1]} width={[3, 4, 3, 3]}>
        {components[0]}
      </Column>
      <Column start={[4, 5, 4, 4]} width={[3, 4, 3, 3]}>
        {components[1]}
      </Column>
    </Row>
  )
}

const Splash = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: ['none', 'none', 'initial', 'initial'] }}>
        <SplashRowDesktop
          components={[
            <WideBars />,
            <SingleLine />,
            <BarSwoop />,
            <WideBars />,
          ]}
        />
        <SplashRowDesktop
          components={[<WideBars />, <SingleBar />, <WideBars />, <WideBars />]}
        />
        <SplashRowDesktop
          components={[
            <DotGrid />,
            <SlidingDots />,
            <GroupedBars />,
            <WideBars />,
          ]}
        />
      </Box>
      <Box sx={{ display: ['initial', 'initial', 'none', 'none'] }}>
        <SplashRowMobile components={[<WideBars />, <BarSwoop />]} />
        <SplashRowMobile components={[<SlidingDots />, <GroupedBars />]} />
      </Box>
    </Box>
  )
}

export default Splash
