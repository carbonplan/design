import { useState, useEffect, memo } from 'react'
import { Box } from 'theme-ui'
import { keyframes } from '@emotion/react'
import useAnimation from './use-animation'

const animateOpacity = (delay) => {
  const keys = {}
  keys[`${15 + delay}%`] = {
    opacity: 1,
  }
  keys[`${45 + delay}%`] = {
    opacity: 0.3,
  }
  keys[`${75 + delay}`] = {
    opacity: 1,
  }
  return keyframes(keys)
}

const Circle = ({ playState, i }) => {
  const animation = animateOpacity(i * 5)

  return (
    <Box
      as='circle'
      cx={`${10 + i * 15.5}%`}
      cy='50%'
      r='5%'
      sx={{
        animationName: animation.toString(),
        animationDelay: '0ms',
        animationDuration: '2000ms',
        animationIterationCount: 'infinite',
        animationPlayState: playState ? 'running' : 'paused',
        fill: playState ? 'orange' : 'secondary',
        opacity: 1,
        transition: 'fill 0.5s ease-out, opacity 0.5s ease-out',
      }}
    />
  )
}

const CircleMarks = ({ height, delay = 0 }) => {
  const { mouseEnter, mouseLeave, playState } = useAnimation({ delay: delay })

  return (
    <Box
      as='svg'
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      width='100%'
      preserveAspectRatio='none'
      sx={{ height: height }}
    >
      <Circle i={0} playState={playState} />
      <Circle i={1} playState={playState} />
      <Circle i={2} playState={playState} />
      <Circle i={3} playState={playState} />
      <Circle i={4} playState={playState} />
      <Circle i={5} playState={playState} />
    </Box>
  )
}

export default CircleMarks
