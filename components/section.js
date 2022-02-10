import { Box } from 'theme-ui'
import { useState } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { NavSection } from '@carbonplan/layouts'
import { Code, LiveCode, Pre } from '@carbonplan/prism'
import { useThemedColormap } from '@carbonplan/colormaps'
import * as carbonPlanComponents from '@carbonplan/components'
import * as carbonPlanIcons from '@carbonplan/icons'
import * as carbonPlanEmoji from '@carbonplan/emoji'
import { ColorSample, GridSample } from './samples'
import { contents } from './contents'

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
  console.log(name)
  return (
    <MDXProvider components={components}>
      <NavSection
        name={name}
        menu={{ contents: contents, prefix: '/design' }}
        title={`${
          name === 'intro' ? 'Design' : name[0].toUpperCase() + name.slice(1)
        } – CarbonPlan`}
        description={
          'Documentation for our design system and component library.'
        }
      >
        {children}
      </NavSection>
    </MDXProvider>
  )
}

export default Section
