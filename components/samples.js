import React, { useState } from 'react'
import { Box, Themed } from 'theme-ui'
import { useColormap } from '@carbonplan/colormaps'
import chroma from 'chroma-js'
import {
  Chart,
  Grid,
  Ticks,
  TickLabels,
  AxisLabel,
  Plot,
  Line,
} from '@carbonplan/charts'
import { Row, Column, Expander } from '@carbonplan/components'

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

const ColormapChart = ({ chartData, ranges, label }) => {
  // remove nans in the y-column
  const data = chartData.filter((d) => !Number.isNaN(d[1]))
  return (
    <Box sx={{ width: '100%', height: '200px' }}>
      <Chart x={ranges.x} y={ranges.y}>
        <Grid vertical horizontal />
        <Ticks left bottom />
        <TickLabels left bottom />
        <AxisLabel left>{label}</AxisLabel>
        <Plot>
          <Line data={data} />
        </Plot>
      </Chart>
    </Box>
  )
}

const ColormapAnalysis = ({ colors, expanded }) => {
  const lchValues = colors.map((d, i) => chroma(d).lch())

  const labels = ['lightness', 'saturation', 'hue']
  const ranges = {
    lightness: { x: [0, lchValues.length], y: [0, 100] },
    saturation: { x: [0, lchValues.length], y: [0, 80] },
    hue: { x: [0, lchValues.length], y: [0, 360] },
  }

  const chartData = {}
  chartData['lightness'] = lchValues.map((v, i) => [i, v[0]])
  chartData['saturation'] = lchValues.map((v, i) => [i, v[1]])
  chartData['hue'] = lchValues.map((v, i) => [i, v[2]])

  if (expanded) {
    return (
      <Row columns={[3]}>
        {labels.map((l, i) => (
          <Column key={l} start={[i + 1]} width={[1]}>
            <ColormapChart
              chartData={chartData[l]}
              ranges={ranges[l]}
              label={l}
            />
          </Column>
        ))}
      </Row>
    )
  } else {
    return <></>
  }
}

const ColormapSample = ({ name, discrete }) => {
  let values, colors

  const [expanded, setExpanded] = useState(false)

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
      <Expander
        value={expanded}
        onClick={() => setExpanded(!expanded)}
        sx={{ position: 'relative', top: ['2px'], ml: [1] }}
      />
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
      <ColormapAnalysis colors={colors} expanded={expanded} />
    </Box>
  )
}

export { GridSample, ColorSample, FontSample, ColormapSample }
