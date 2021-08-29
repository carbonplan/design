import { Box, Themed } from 'theme-ui'
import { useColormap } from '@carbonplan/colormaps'

const GridSample = ({ children }) => {
  return (
    <Box
      sx={{
        borderStyle: 'solid',
        borderColor: 'muted',
        borderWidth: '1px',
        py: [3],
        my: [2],
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'mono',
        fontSize: [2, 2, 2, 3],
      }}
    >
      {children}
    </Box>
  )
}

const FontSample = ({ color, label }) => {
  return (
    <Box sx={{ color: color }}>
      <Box sx={{ fontSize: [4], fontFamily: 'body' }}>{label}</Box>
      <Box
        sx={{
          fontSize: [2],
          fontFamily: 'mono',
          letterSpacing: 'mono',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </Box>
    </Box>
  )
}

const ColorSample = ({ color, hex, label, border }) => {
  return (
    <Box
      sx={{
        display: 'inline-block',
        mr: [5],
        mt: [3],
        mb: [3],
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          width: '100px',
          height: '100px',
          backgroundColor: color,
          borderRadius: '50px',
          borderStyle: 'solid',
          borderWidth: border ? '1px' : '0px',
          borderColor: 'primary',
        }}
      ></Box>
      <Box
        sx={{
          mt: [3],
          color: label ? 'primary' : color,
          fontFamily: 'mono',
          letterSpacing: 'mono',
          textTransform: 'uppercase',
        }}
      >
        {label ? label : color}
      </Box>
      <Box
        sx={{
          mt: [0],
          fontFamily: 'mono',
          letterSpacing: 'mono',
          textTransform: 'uppercase',
        }}
      >
        #{hex}
      </Box>
    </Box>
  )
}

const ColormapSample = ({ name, discrete }) => {
  let values, colors

  if (discrete) {
    const count = 9
    colors = useColormap(name, count)
    values = colors.map((d, i) => {
      if (i == 0) return `rgb(${d}) ${Math.round(100 / count)}%`
      if (i == count - 1) return `rgb(${d}) ${Math.round(100 - 100 / count)}%`
      return `rgb(${d}) ${Math.round((100 / count) * i)}% ${Math.round(
        (100 / count) * (i + 1)
      )}%`
    })
  } else {
    colors = useColormap(name, 255)
    values = colors.map((d, i) => `rgb(${d}) ${(i / 255) * 100}%`)
  }

  const css = `linear-gradient(to right, ${values.join(',')})`
  return (
    <Box>
      <Themed.inlineCode>{name}</Themed.inlineCode>
      <Box
        sx={{
          mt: [2, 2, 2, 3],
          mb: [3, 3, 3, 4],
          height: '30px',
          width: '100%',
          border: ({ colors }) => `solid 0px ${colors.hinted}`,
          background: css,
        }}
      />
    </Box>
  )
}

export { GridSample, ColorSample, FontSample, ColormapSample }
