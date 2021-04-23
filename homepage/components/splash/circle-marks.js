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

const Circle = ({ playState, color, i }) => {
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
        fill: playState ? color : 'secondary',
        opacity: 1,
        transition: 'fill 0.5s ease-out, opacity 0.5s ease-out',
      }}
    />
  )
}

const CircleMarks = ({ height, color, delay = 0 }) => {
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
      {Array(6)
        .fill(0)
        .map((d, i) => {
          return <Circle i={i} color={color} playState={playState} />
        })}
    </Box>
  )
}

export default CircleMarks
