import { Box, Themed, Text, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'
import { Layout, Row, Column, Guide, Arrow } from '@carbonplan/components'
import Heading from '../homepage/components/heading'

const amounts = [20, 50, 100, 500]

const Sidenote = () => {
  return (
    <span>
      Looking to make a larger donation?{' '}
      <Link href='mailto:hello@carbonplan.org'>Email us</Link>.
    </span>
  )
}

const Amount = ({ value, color }) => {
  return (
    <Link
      href=''
      sx={{
        textDecoration: 'none',
        display: 'block',
        width: 'fit-content',
        '&:hover > .container': {
          color: 'secondary',
        },
        '&:hover > .container > .arrow': {
          fill: 'secondary',
          transform: 'rotate(45deg)',
        },
      }}
    >
      <Box
        className='container'
        sx={{
          fontFamily: 'heading',
          fontSize: [6, 7, 8, 9],
          letterSpacing: 'heading',
          mt: [3, 3, 3, 4],
          mb: [2, 2, 2, 3],
          transition: 'color 0.15s',
        }}
      >
        ${value}
        <Arrow
          className='arrow'
          sx={{
            position: 'relative',
            ml: ['8px', '12px', '12px', '16px'],
            width: [34, 46, 56, 68],
            height: [34, 46, 56, 68],
            top: ['5px', '7px', '9px', '11px'],
            transition: 'fill 0.15s, transform 0.15s',
            fill: color,
          }}
        />
      </Box>
    </Link>
  )
}

const sx = {
  details: {
    color: 'secondary',
    fontFamily: 'mono',
    letterSpacing: 'mono',
    textTransform: 'uppercase',
    fontSize: [1, 1, 1, 2],
  },
  bordered: {
    borderStyle: 'solid',
    borderColor: 'muted',
    borderWidth: '0px',
    borderTopWidth: '1px',
    pt: [2],
    pb: [5, 5, 0, 0],
  },
}

const Donate = () => {
  return (
    <Layout links={'homepage'} title={'donate / carbonplan'} nav={'donate'}>
      <Guide />
      <Box sx={{ mb: [7, 8, 9, 10] }}>
        <Heading sidenote={<Sidenote />}>Donate</Heading>
        <Row>
          <Column
            start={[1, 1, 2, 2]}
            width={[6, 6, 6, 6]}
            sx={{ mb: [5, 6, 7, 8] }}
          >
            <Box
              sx={{
                fontSize: [3, 3, 3, 4],
                fontFamily: 'body',
                lineHeight: 'body',
                letterSpacing: 'body',
              }}
            >
              Thank you so much for considering supporting our work. Your
              donation will help us make progress on our mission, with complete
              commitment and responsibility to the public's interest in a safe
              and stable climate. Our team will do our best to do right by your
              generosity.
            </Box>
          </Column>
        </Row>
        <Row>
          <Column start={[1, 2]} width={[6, 4]}>
            <Box
              as='h2'
              variant='styles.h2'
              sx={{ mt: [0, 0, 0, 0], mb: [3, 4, 5, 6] }}
            >
              Select an amount
            </Box>
          </Column>
        </Row>
        <Row>
          <Column start={[1, 2, 3, 3]} width={[3, 3, 4, 3]}>
            <Amount value={20} color='red' />
          </Column>
          <Column start={[4, 5, 7, 7]} width={[3, 3, 4, 3]} dr={0.5}>
            <Amount value={100} color='yellow' />
          </Column>
          <Column start={[1, 2, 3, 3]} width={[3, 3, 4, 3]}>
            <Amount value={50} color='orange' />
          </Column>
          <Column start={[4, 5, 7, 7]} width={[3, 3, 4, 3]} dr={0.5}>
            <Amount value={500} color='green' />
          </Column>
        </Row>
        <Row sx={{ mt: [5, 6, 7, 8] }}>
          <Column start={[1, 2]} width={[5, 3]}>
            <Box
              sx={{
                fontSize: [2, 2, 2, 3],
                color: 'secondary',
                ...sx.bordered,
              }}
            >
              Your gift is tax-deductible to the full extent provided by law.
              Payment services provided through Stripe. All major credit cards
              as well as Apple Pay and Google Pay are accepted.
            </Box>
          </Column>
          <Column start={[1, 7]} width={[4, 4]}>
            <Row columns={[4]}>
              <Column start={[1]} width={[2]}>
                <Box sx={{ ...sx.details, ...sx.bordered }}>
                  Legal name: <br /> carbonplan
                </Box>
              </Column>
              <Column start={[3]} width={[2]}>
                <Box sx={{ ...sx.details, ...sx.bordered }}>
                  EIN #: <br /> 84-4378880
                </Box>
              </Column>
            </Row>
            <Row columns={[4]}>
              <Column start={[1]} width={[4]}>
                <Box sx={{ ...sx.details, ...sx.bordered, mt: [0, 0, 4, 5] }}>
                  Mailing address: <br />
                  2443 Fillmore St #380-6048 <br />
                  San Francisco, CA 94115
                </Box>
              </Column>
            </Row>
          </Column>
        </Row>
      </Box>
    </Layout>
  )
}

export default Donate
