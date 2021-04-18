import { Box } from 'theme-ui'
import { keyframes } from '@emotion/react'

const SingleBar = () => {
  const animateWidth = () => {
    const keys = {}
    keys[`${20}%`] = {
      width: '70%',
    }
    keys[`${40}%`] = {
      width: '10%',
    }
    keys[`${60}%`] = {
      width: '40%',
    }
    keys[`${80}`] = {
      width: '70%',
    }
    return keyframes(keys)
  }

  const AnimatedBar = ({}) => {
    const animation = animateWidth()

    return (
      <Box
        className='bar'
        as='rect'
        x={'10%'}
        y={'38%'}
        width='70%'
        height={'24%'}
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
    )
  }

  const Bar = ({ start, end }) => {
    return (
      <Box
        className='bar'
        as='rect'
        x={'10%'}
        y={'38%'}
        width='80%'
        height={'24%'}
        sx={{
          opacity: 0.5,
          transition: 'fill 0.5s ease-out',
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
        fill: 'secondary',
        '&:hover > .bar': {
          fill: 'blue',
          animationPlayState: 'running',
        },
      }}
    >
      <Bar />
      <AnimatedBar />
    </Box>
  )
}

export default SingleBar
