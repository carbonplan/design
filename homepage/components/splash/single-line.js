import { useState, useCallback } from 'react'
import { Box } from 'theme-ui'
import { keyframes } from '@emotion/react'

const Line = () => {
  const [tick, setTick] = useState(null)

  const mouseEnter = (e) => {
    e.persist()
    setTick(
      setTimeout(() => {
        e.target.unpauseAnimations()
      }, 100)
    )
  }

  const mouseLeave = (e) => {
    if (tick) clearTimeout(tick)
    e.target.pauseAnimations()
  }

  const ref = useCallback((svg) => {
    if (svg) {
      setTimeout(() => {
        svg.pauseAnimations()
      }, 0)
    }
  }, [])

  const Segment = ({ start, end, delay, opacity, i }) => {
    return (
      <Box
        className='line'
        as='line'
        x1={(i * 100) / 9 + '%'}
        x2={((i + 1) * 100) / 9 + '%'}
        y1={100 - start.y1 + '%'}
        y2={100 - start.y2 + '%'}
        height={start + '%'}
        strokeLinecap='round'
        sx={{
          pointerEvents: 'none',
          opacity: opacity || 1,
          transition: 'stroke 0.5s ease-out',
        }}
      >
        {end && (
          <animate
            attributeName='y1'
            keyTimes={[0, 0.5 + delay / 100, 1].join(';')}
            values={[
              100 - start.y1 + '%',
              100 - end.y1 + '%',
              100 - start.y1 + '%',
            ].join(';')}
            dur='2000ms'
            repeatCount='indefinite'
            calcMode='spline'
            keySplines='0 0 0.5 1 ; 0 0 0.5 1'
          />
        )}
        {end && (
          <animate
            attributeName='y2'
            dur='2000ms'
            values={[
              100 - start.y2 + '%',
              100 - end.y2 + '%',
              100 - start.y2 + '%',
            ].join(';')}
            keyTimes={[0, 0.5 + delay / 100, 1].join(';')}
            repeatCount='indefinite'
            calcMode='spline'
            keySplines='0 0 0.5 1 ; 0 0 0.5 1'
          />
        )}
      </Box>
    )
  }

  return (
    <Box
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      ref={ref}
      as='svg'
      id='line'
      height='75px'
      width='100%'
      sx={{
        stroke: 'secondary',
        strokeWidth: '3px',
        '&:hover > .line': {
          stroke: 'orange',
          fill: 'none',
        },
      }}
    >
      <Segment
        start={{ y1: 5, y2: 50 }}
        end={{ y1: 5, y2: 15 }}
        delay={0}
        i={0}
      />
      <Segment
        start={{ y1: 50, y2: 25 }}
        end={{ y1: 15, y2: 45 }}
        delay={0}
        i={1}
      />
      <Segment
        start={{ y1: 25, y2: 35 }}
        end={{ y1: 45, y2: 35 }}
        delay={0}
        i={2}
      />
      <Segment
        start={{ y1: 35, y2: 20 }}
        end={{ y1: 35, y2: 50 }}
        delay={0}
        i={3}
      />
      <Segment
        start={{ y1: 20, y2: 15 }}
        end={{ y1: 50, y2: 15 }}
        delay={0}
        i={4}
      />
      <Segment
        start={{ y1: 15, y2: 60 }}
        end={{ y1: 15, y2: 50 }}
        delay={0}
        i={5}
      />
      <Segment
        start={{ y1: 60, y2: 60 }}
        end={{ y1: 50, y2: 60 }}
        delay={0}
        i={6}
      />
      <Segment
        start={{ y1: 60, y2: 90 }}
        end={{ y1: 60, y2: 15 }}
        delay={0}
        i={7}
      />
      <Segment
        start={{ y1: 90, y2: 98 }}
        end={{ y1: 15, y2: 98 }}
        delay={0}
        i={8}
      />
    </Box>
  )
}

export default Line
