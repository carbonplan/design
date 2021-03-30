import { Box } from 'theme-ui'

const Column = ({ start, width, dl, dr, children, sx, ...props }) => {
  if (!start) {
    start = ['auto']
  }

  if (start && !Array.isArray(start)) {
    start = [start]
  }

  if (![1, 2, 4].includes(start.length)) {
    throw new Error('Array length must be 1, 2, or 4')
  }

  if (width && !Array.isArray(width)) {
    width = [width]
  }

  if (width && ![1, 2, 4].includes(width.length)) {
    throw new Error('Array length must be 1, 2, or 4')
  }

  if (Array.isArray(start) && start.length == 2) {
    start = start.map((d) => [d, d]).flat()
  }

  if (Array.isArray(width) && width.length == 2) {
    width = width.map((d) => [d, d]).flat()
  }

  let end
  if (width) {
    end = start.map((d, i) => d + width[i])
  } else {
    end = start.map((_) => 'auto')
  }

  let ml, mr

  if (dl) {
    if (![0.5, 1].includes(dl)) {
      throw new Error('dl must be 0.5 or 1')
    }
    if (dl === 0.5) {
      ml = ['-12px', -3, -3, -4]
    }
    if (dl === 1) {
      ml = [-4, -5, -5, -6]
    }
  }

  if (dr) {
    if (![0.5, 1].includes(dr)) {
      throw new Error('dr must be 0.5 or 1')
    }
    if (dr === 0.5) {
      mr = ['-12px', -3, -3, -4]
    }
    if (dr === 1) {
      mr = [-4, -5, -5, -6]
    }
  }

  return (
    <Box
      {...props}
      sx={{
        gridColumnStart: start,
        gridColumnEnd: end,
        ml: ml,
        mr: mr,
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}

export default Column
