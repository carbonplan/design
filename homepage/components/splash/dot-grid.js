import { Box } from 'theme-ui'
import { keyframes } from '@emotion/react'
import seed from 'math-random-seed'

const DotGrid = () => {
  const animateOpacity = (start, end) => {
    const keys = {}
    keys[`${10}%`] = {
      opacity: start,
    }
    keys[`${30}%`] = {
      opacity: end,
    }
    keys[`${50}%`] = {
      opacity: start,
    }
    keys[`${70}%`] = {
      opacity: end,
    }
    keys[`${90}%`] = {
      opacity: start,
    }
    return keyframes(keys)
  }

  const Dot = ({ x, y }) => {
    return (
      <Box
        className='circle'
        as='circle'
        cx={x + '%'}
        cy={y + '%'}
        r='4.5'
        sx={{
          transition: 'fill 0.5s ease-out',
        }}
      />
    )
  }

  const Dots = () => {
    const random = seed('1')

    const animation1 = animateOpacity(1, 0.2)
    const animation2 = animateOpacity(0.2, 1)

    const nrows = 6
    const ncols = 20

    const dots1 = []
    const dots2 = []
    let row, col
    for (row = 0; row < nrows; row++) {
      for (col = 0; col < ncols; col++) {
        if (random() > 0.3) {
          dots1.push(
            <Dot key={row + '-' + col} y={row * 20 + 10} x={col * 5 + 2} />
          )
        } else {
          dots2.push(
            <Dot key={row + '-' + col} y={row * 20 + 10} x={col * 5 + 2} />
          )
        }
      }
    }

    return (
      <g id='group'>
        <Box
          as='g'
          id='dots-1'
          sx={{
            animationName: animation1.toString(),
            animationDelay: '0ms',
            animationDuration: '3000ms',
            animationIterationCount: 'infinite',
            opacity: 1,
            transition: 'fill 0.5s ease-out',
            animationPlayState: 'paused',
          }}
        >
          {dots1}
        </Box>
        <Box
          as='g'
          id='dots-2'
          sx={{
            animationName: animation2.toString(),
            animationDelay: '0ms',
            animationDuration: '3000ms',
            animationIterationCount: 'infinite',
            opacity: 0.2,
            transition: 'fill 0.5s ease-out',
            animationPlayState: 'paused',
          }}
        >
          {dots2}
        </Box>
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
        '&:hover > #group > #dots-1 > .circle': {
          fill: 'green',
        },
        '&:hover > #group > #dots-2 > .circle': {
          fill: 'green',
        },
        '&:hover > #group > #dots-1': {
          animationPlayState: 'running',
        },
        '&:hover > #group > #dots-2': {
          animationPlayState: 'running',
        },
      }}
    >
      <Dots />
    </Box>
  )
}

export default DotGrid
