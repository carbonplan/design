import { useState } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Box } from 'theme-ui'
import * as carbonPlanComponents from '@carbonplan/components'
import * as carbonPlanIcons from '@carbonplan/icons'
import * as carbonPlanEmoji from '@carbonplan/emoji'
import { Layout, Row, Column, FadeIn, Tray } from '@carbonplan/components'
import { Code, LiveCode, Pre } from '@carbonplan/prism'
import Sidenav from './sidenav'
import { useThemedColormap } from '@carbonplan/colormaps'
import { ColorSample, GridSample } from './samples'

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'purple',
  'pink',
  'grey',
]

const transform = (src) => {
  if (!src.startsWith('()')) {
    return `<>${src}</>`
  } else {
    return `${src}`
  }
}

const scope = {
  ...carbonPlanComponents,
  ...carbonPlanIcons,
  ...carbonPlanEmoji,
  Box,
  useState,
  ColorSample,
  GridSample,
  useThemedColormap,
  colors,
}

const components = {
  code: ({ ...props }) => (
    <LiveCode
      theme={'monochrome'}
      transform={transform}
      scope={scope}
      {...props}
    />
  ),
  pre: Pre,
}

const Section = ({ children, name }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <MDXProvider components={components}>
      <Layout
        fade={false}
        settings={{
          value: expanded,
          onClick: () => setExpanded((prev) => !prev),
        }}
      >
        <Row>
          <Column start={[1, 1, 2, 2]} width={[4, 4, 2, 2]}>
            <Sidenav active={name} expanded={expanded} />
          </Column>
          <Column start={[1, 2, 5, 5]} width={[6]}>
            <FadeIn>{children}</FadeIn>
          </Column>
        </Row>
      </Layout>
    </MDXProvider>
  )
}

export default Section
