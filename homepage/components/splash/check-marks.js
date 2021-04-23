import { useState, useEffect, memo } from 'react'
import { Box } from 'theme-ui'
import { keyframes } from '@emotion/react'
import useAnimation from './use-animation'

const animateOpacity = (delay) => {
  const keys = {}
  keys[`${20 + delay}%`] = {
    opacity: 1,
  }
  keys[`${50 + delay}%`] = {
    opacity: 0.3,
  }
  keys[`${80 + delay}`] = {
    opacity: 1,
  }
  return keyframes(keys)
}

const Check = ({ playState, color, i }) => {
  const animation = animateOpacity(i * 5)

  return (
    <Box
      as='g'
      sx={{
        transform: [
          `translateX(${i * 20 - 1.5}%) translateY(0px) scaleX(1.1)`,
          `translateX(${i * 20 - 1.5}%) translateY(0px) scaleX(1.1)`,
          `translateX(${i * 20 - 1.5}%) translateY(0px) scaleX(1.1)`,
          `translateX(${i * 20 - 1.5}%) translateY(0px) scaleX(1.1)`,
        ],
      }}
    >
      <Box
        as='polygon'
        points='31.41,47.16 21.29,37.04 19.8,38.53 31.41,50.14 55.2,26.35 53.71,24.86'
        strokeWidth='50'
        sx={{
          animationName: animation.toString(),
          animationDelay: '0ms',
          animationDuration: '2000ms',
          animationIterationCount: 'infinite',
          animationPlayState: playState ? 'running' : 'paused',
          vectorEffect: 'non-scaling-stroke',
          strokeWidth: '1px',
          stroke: playState ? color : 'secondary',
          fill: playState ? color : 'secondary',
          opacity: 1,
          transition:
            'stroke 0.5s ease-out, fill 0.5s ease-out, opacity 0.5s ease-out',
        }}
      />
    </Box>
  )
}

const CheckMarks = ({ height, color, delay = 0 }) => {
  const { mouseEnter, mouseLeave, playState } = useAnimation({ delay: delay })

  return (
    <Box
      as='svg'
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      width='100%'
      viewBox='0 0 375 75'
      preserveAspectRatio='none'
      sx={{ height: height }}
    >
      {Array(5)
        .fill(0)
        .map((d, i) => {
          return <Check i={i} color={color} playState={playState} />
        })}
    </Box>
  )
}

export default CheckMarks
