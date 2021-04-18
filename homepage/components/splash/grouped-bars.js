import { useThemeUI, Box } from 'theme-ui'
import { keyframes } from '@emotion/react'

const y = (v) => {
  return 100 - v + '%'
}

const h = (v) => {
  return v + '%'
}

const GroupedBars = () => {
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

  const Bar = ({ start, end, delay, group, opacity, i }) => {
    const animationHeight = animateHeight(start, end, delay)

    return (
      <Box
        className='bar'
        as='rect'
        x={i * (3 + 1.5) + group * 8.5 + '%'}
        y={y(start)}
        width='3%'
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

  const opacity = [1, 0.6, 0.3]
  const delay = [10, 20, 30]

  const start = [100, 70, 40, 55, 70, 50, 75, 85, 75, 20, 70, 100, 50, 25, 70]
  const end = [20, 25, 70, 75, 20, 50, 20, 30, 15, 60, 25, 35, 60, 50, 25]
  const group = [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4]

  return (
    <Box
      as='svg'
      height='75px'
      width='100%'
      sx={{
        '&:hover > .bar': {
          fill: 'red',
          animationPlayState: 'running',
        },
      }}
    >
      {Array(15)
        .fill(0)
        .map((d, i) => {
          return (
            <Bar
              key={i}
              start={start[i]}
              end={end[i]}
              delay={delay[i % 3]}
              group={group[i]}
              i={i}
              opacity={opacity[i % 3]}
            />
          )
        })}
    </Box>
  )
}

export default GroupedBars
