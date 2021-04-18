import { Box } from 'theme-ui'
import { keyframes } from '@emotion/react'

const SingleBar = () => {
  const animatePosition = (start, end, delay) => {
    const keys = {}
    keys[`${20 + delay}%`] = {
      cx: start + '%',
    }
    keys[`${45 + delay}%`] = {
      cx: end + '%',
    }
    keys[`${55 + delay}%`] = {
      cx: end + '%',
    }
    keys[`${80 + delay}`] = {
      cx: start + '%',
    }
    return keyframes(keys)
  }

  const CircleLine = ({ start, end, delay, i }) => {
    const animation = animatePosition(start, end, delay)

    return (
      <g id='group'>
        <Box
          className='circle'
          as='circle'
          cx={start + '%'}
          cy={`${10 + (80 / 3) * i}%`}
          r='7'
          sx={{
            animationName: animation.toString(),
            animationDelay: '0ms',
            animationDuration: '2000ms',
            animationIterationCount: 'infinite',
            opacity: 1,
            transition: 'fill 0.5s ease-out',
            animationPlayState: 'paused',
          }}
        />
        <Box
          as='line'
          className='line'
          x1='0%'
          x2='100%'
          y1={`${10 + (80 / 3) * i}%`}
          y2={`${10 + (80 / 3) * i}%`}
          sx={{
            transition: 'stroke 0.5s ease-out',
            opacity: 0.5,
            stroke: 'secondary',
          }}
        />
      </g>
    )
  }

  return (
    <Box
      as='svg'
      height='75px'
      width='100%'
      sx={{
        fill: 'secondary',
        '&:hover > #group > .line': {
          stroke: 'pink',
        },
        '&:hover > #group > .circle': {
          fill: 'pink',
          animationPlayState: 'running',
        },
      }}
    >
      <CircleLine start={20} end={50} delay={0} i={0} />
      <CircleLine start={5} end={25} delay={5} i={1} />
      <CircleLine start={40} end={5} delay={10} i={2} />
      <CircleLine start={90} end={50} delay={15} i={3} />
    </Box>
  )
}

export default SingleBar
