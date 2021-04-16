import { Link, Box } from 'theme-ui'
import { default as NextLink } from 'next/link'
import { Guide, Layout, Row, Column } from '@carbonplan/components'
import Lottie from 'react-lottie'
import * as animationData from '../animations/carbonplan-infographic-desktop-sample-01.json'

const Index = () => {
  return (
    <Layout links={'homepage'} title={'carbonplan'}>
      <Guide />
      <Box
        sx={{
          width: 'calc(100vw)',
          ml: [-3, -4, -5, -6],
          mt: ['-20px']
        }}
      >
      <Lottie 
        options={{
          loop: true,
          autoplay: true, 
          animationData: animationData.default,
        }}
        height={400}
        width={'100%'}
      />
      </Box>
      <Row sx={{ position: 'relative', mt: [1] }}>
        <Column start={[1, 3, 6, 6]} width={[5, 5, 6, 6]}>
          <Box
            sx={{
              fontFamily: 'heading',
              lineHeight: 'heading',
              fontSize: [6, 6, 7, 8],
            }}
          >
            Data and science for climate action
          </Box>
        </Column>
      </Row>
      <Row sx={{ position: 'relative', mt: [4, 4, 4, 5] }}>
        <Column start={[1, 3, 6, 6]} width={[6, 4, 4, 4]}>
          <Box sx={{ fontSize: [3, 3, 3, 4] }}>
            Improving the transparency and scientific integrity of carbon
            removal and climate solutions through open data and tools
          </Box>
        </Column>
      </Row>
      <Row sx={{ position: 'relative', mt: [4, 4, 4, 5], mb: [6, 10] }}>
        <Column start={[1, 3, 6, 6]} width={[6, 6, 6, 6]}>
          <InternalLink href={'/about'}>About</InternalLink>
          <InternalLink href={'/research'}>Research</InternalLink>
          <InternalLink href={'/team'}>Team</InternalLink>
          <InternalLink href={'/faq'}>FAQ</InternalLink>
          <InternalLink href={'/donate'} final>Donate</InternalLink>
        </Column>
      </Row>
    </Layout>
  )
}

function InternalLink({ children, href, final = false }) {
  return (
    <NextLink href={href} passHref>
      <Link
        sx={{
          fontSize: [2, 3, 3, 4],
          textTransform: 'uppercase',
          fontFamily: 'heading',
          display: 'inline-block',
          letterSpacing: 'smallcaps',
          borderStyle: 'solid',
          borderColor: 'primary',
          borderWidth: '0px',
          borderBottomWidth: '1px',
          pb: [1],
          mr: [final ? 0 : 4],
          mb: [2],
          color: 'primary',
          textDecoration: 'none',
          '&:hover': {
            borderColor: 'secondary',
            color: 'secondary',
          },
        }}
      >
        {children}
      </Link>
    </NextLink>
  )
}

export default Index
