import { Box, Styled, Link } from 'theme-ui'
import { Links } from '@carbonplan/components'
import Tool from '../../components/tool'
import Calculator from './components/calculator'

const { InternalLink } = Links

const Index = () => {
  const meta = {
    id: 'permanence-calculator',
    title: 'Permanence calculator',
    color: 'pink',
    card: 'permanence-calculator-explainer',
    summary:
      'How to compare the long-term cost of temporary and permanent carbon removal.',
  }

  const title = 'Permanence calculator'

  const description = (
    <span>
      The effects of CO₂ emissions last for hundreds to thousands of years. The
      permanence of CO₂ removal differs across methods, ranging from temporary
      (e.g. forests, soil) to effectively permanent (e.g. mineralization,
      geological). This calculator estimates the upfront costs needed to make a
      temporary carbon removal strategy permanent over time. Read more in our{' '}
      <InternalLink href={'/research/permanence-calculator-explainer'}>
        article
      </InternalLink>
      .
    </span>
  )

  return (
    <Tool meta={meta} title={title} description={description}>
      <Calculator></Calculator>
    </Tool>
  )
}

export default Index
