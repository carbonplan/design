import { Box, Themed, Text, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'
import { Layout, Row, Column, Guide } from '@carbonplan/components'
import Heading from '../homepage/components/heading'

const FAQ = () => {
  return (
    <Layout links={'homepage'} title={'faq / carbonplan'} nav={'faq'}>
      <Guide />
      <Box sx={{ mb: [5, 6, 7, 8] }}>
        <Heading>FAQ</Heading>
        <Question first>Are you a nonprofit?</Question>
        <Answer>
          Yes. We are a registered non-profit public benefit corporation in
          California that is recognized by the IRS as a 501(c)(3) tax-exempt
          public charity. Our commitment and responsibility is to the public's
          interest in a safe and stable climate, not to shareholders.
        </Answer>
        <Question>What is carbon removal?</Question>
        <Answer>
          Good question! Carbon removal is removing carbon dioxide from the
          atmosphere and storing it in a durable, ideally permanent, form. It's
          a nascent field, and{' '}
          <NextLink href='/about#technologies' passHref>
            <Link>several methods</Link>
          </NextLink>{' '}
          are being explored and developed, including natural or biological
          solutions (e.g. forests, soil), engineered systems (e.g. direct air
          capture, enhanced mineralization), and more . Note that some
          technologies can play a role in carbon removal but are not, on their
          own, carbon removal systems — you can read more about this distinction
          in an <Link href='/research/carbon-removal-mechanisms'>article</Link>{' '}
          we wrote. In some places carbon removal is referred to as "Carbon
          Dioxide Removal" or CDR. Also note that the phrase "Negative Emissions
          Technologies" or NETs is sometimes used to describe technologies that
          implement carbon removal.
        </Answer>
        <Question>Are you a verifier?</Question>
        <Answer>
          No, we are not a verifier. Several organizations act as third-party
          verifiers in the space of carbon removal and carbon offsets. We play a
          different role. We validate the scientific integrity of projects and
          technologies. Our focus is understanding, quantifying, and clarifying
          the underlying data and science. Using this information, we help guide
          future procurement and deployment decisions.
        </Answer>
        <Question>How are you funded?</Question>
        <Answer>
          We receive a mix of unrestricted funding through donations and grants,
          and project-specific funding through contracts and grants. In both
          cases we list publicly all sources of funding greater than $1000. For
          project-specific funding, we list as soon as the project, or our
          involvement in the project, becomes public. We also include the terms
          and conditions of our engagements. View{' '}
          <NextLink href='/funding' passHref>
            <Link>our list</Link>
          </NextLink>{' '}
          of funding sources.
        </Answer>
        <Question>Who designed this website?</Question>
        <Answer>
          We've been working with{' '}
          <Link href='https://ot.studio/'>Ordinary Things</Link> (formerly known
          as Cast Iron Design). They are incredible. They developed the brand
          and design system and we work collaboratively on site design and
          implementation. Talk to them about your next project. Seriously.
        </Answer>
      </Box>
    </Layout>
  )
}

function Question({ children, first = false }) {
  return (
    <Row>
      <Column start={[1, 2]} width={[6, 6]}>
        <Box
          as='h2'
          variant='styles.h2'
          sx={{ mt: first ? [0, 0, 0, 0] : [4, 5, 6, 7], mb: [3, 4, 5, 6] }}
        >
          {children}
        </Box>
      </Column>
    </Row>
  )
}

function Answer({ children }) {
  return (
    <Row>
      <Column start={[2, 3]} width={[5, 5, 6, 6]}>
        <Themed.p>{children}</Themed.p>
      </Column>
    </Row>
  )
}

export default FAQ
