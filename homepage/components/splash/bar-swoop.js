import { Box } from 'theme-ui'
import { keyframes } from '@emotion/react'

const y = (v) => {
  return (v > 0 ? 50 - v : 50) + '%'
}

const h = (v) => {
  return Math.abs(v) + '%'
}

const BarSwoop = () => {
  const animateHeight = (start, end, delay) => {
    const keys = {}
    keys[`${10 + delay}%`] = {
      height: h(start),
      y: y(start),
    }
    keys[`${40 + delay}%`] = {
      height: h(end),
      y: y(end),
    }
    keys[`${60 + delay}`] = {
      height: h(start),
      y: y(start),
    }
    return keyframes(keys)
  }

  const Bar = ({ start, end, delay, opacity, i }) => {
    const animationHeight = animateHeight(start, end, delay)

    return (
      <Box
        className='bar'
        as='rect'
        x={i * (10 + 20 / 7) + '%'}
        y={y(start)}
        width='10%'
        height={h(start)}
        sx={{
          animationName: animationHeight.toString(),
          animationDelay: '0ms',
          animationDuration: '2000ms',
          animationIterationCount: 'infinite',
          opacity: opacity || 1,
          transition: 'fill 0.5s ease-out',
          animationPlayState: 'paused',
          fill: 'secondary',
        }}
      />
    )
  }

  return (
    <Box
      as='svg'
      height='75px'
      width='100%'
      sx={{
        '&:hover > .bar': {
          fill: 'yellow',
          animationPlayState: 'running',
        },
        '&:hover > .line': {
          stroke: 'yellow',
          animationPlayState: 'running',
        },
      }}
    >
      <Bar start={-25} end={0} delay={0} i={0} opacity={0.5} />
      <Bar start={-50} end={0} delay={5} i={1} opacity={0.5} />
      <Bar start={-25} end={0} delay={10} i={2} opacity={0.5} />
      <Bar start={-15} end={0} delay={15} i={3} opacity={0.5} />
      <Bar start={25} end={0} delay={20} i={4} />
      <Bar start={50} end={0} delay={25} i={5} />
      <Bar start={25} end={0} delay={30} i={6} />
      <Bar start={15} end={0} delay={35} i={7} />
      <Box
        className='line'
        as='line'
        x1={'0%'}
        x2={'100%'}
        y1={'50%'}
        y2={'50%'}
        sx={{
          stroke: 'secondary',
          transition: 'stroke 0.5s ease-out',
        }}
      />
    </Box>
  )
}

export default BarSwoop
