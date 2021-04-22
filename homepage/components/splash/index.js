import { Box } from 'theme-ui'
import { Row, Column } from '@carbonplan/components'
import WideBars from './wide-bars'
import JoyDivision from './joy-division'
import BarSwoop from './bar-swoop'
import GroupedBars from './grouped-bars'
import SingleLine from './single-line'
import SingleBar from './single-bar'
import SlidingDots from './sliding-dots'
import DotGrid from './dot-grid'
import CheckMarks from './check-marks'
import CircleMarks from './circle-marks'
import ScatterPlot from './scatter-plot'

const height = ['75px', '125px', '75px', '110px']

const delay = (i) => {
  return (i - 1) * 1000
}

const SplashRowDesktop = ({ components }) => {
  return (
    <Row sx={{ height: height, my: [4, 5, 5, 5] }}>
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
    <Row sx={{ height: height, my: [4, 5, 5, 5] }}>
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
            <WideBars height={height} delay={delay(6)} />,
            <SingleLine height={height} delay={delay(12)} />,
            <BarSwoop height={height} delay={delay(7)} />,
            <ScatterPlot height={height} delay={delay(3)} />,
          ]}
        />
        <SplashRowDesktop
          components={[
            <WideBars height={height} delay={delay(10)} />,
            <SingleBar height={height} delay={delay(2)} />,
            <CheckMarks height={height} delay={delay(5)} />,
            <CircleMarks height={height} delay={delay(9)} />,
          ]}
        />
        <SplashRowDesktop
          components={[
            <DotGrid height={height} delay={delay(4)} />,
            <SlidingDots height={height} delay={delay(8)} />,
            <GroupedBars height={height} delay={delay(1)} />,
            <JoyDivision height={height} delay={delay(11)} />,
          ]}
        />
      </Box>
      <Box sx={{ display: ['initial', 'initial', 'none', 'none'] }}>
        <SplashRowMobile
          components={[
            <GroupedBars height={height} delay={delay(1)} />,
            <JoyDivision height={height} delay={delay(4)} />,
          ]}
        />
        <SplashRowMobile
          components={[
            <SlidingDots height={height} delay={delay(2)} />,
            <BarSwoop height={height} delay={delay(3)} />,
          ]}
        />
      </Box>
    </Box>
  )
}

export default Splash
