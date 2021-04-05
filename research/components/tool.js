import { Box, Text, Grid, Container, Themed } from 'theme-ui'
import { Layout, Guide, Row, Column } from '@carbonplan/components'
import BackArrow from './back-arrow'
import BackLink from './back-link'
import contents from '../contents'

const prefix = 'https://images.carbonplan.org'

const Tool = ({ title, description, meta, children }) => {
  return (
    <Layout
      card={`${prefix}/social/${meta.card}.png`}
      metadata={false}
      description={meta.summary}
      title={meta.title.toLowerCase() + ' / research / carbonplan'}
      links={'local'}
    >
      <Guide />
      <Row sx={{ mb: [3, 4, 5, 6] }}>
        <Box sx={{ display: ['none', 'none', 'none', 'none'] }}>
          <Column
            start={[1, 1]}
            width={[2]}
            sx={{ mb: [-5, -6, 0, 0], mt: [3, 3, 6, 7] }}
          >
            <BackArrow />
          </Column>
        </Box>
        <Box sx={{ display: ['initial', 'initial', 'initial', 'initial'] }}>
          <Column
            start={[1, 1]}
            width={[2]}
            dr={1}
            sx={{ mb: [-2, -4, 0, 0], mt: [3, 4, '104px', '140px'] }}
          >
            <BackLink />
          </Column>
        </Box>
        <Column start={[1, 2]} width={[6, 4, 6, 6]}>
          <Box sx={{}}>
            <Box as='h1' variant='styles.h1' sx={{ mt: [5, 7, 7, 8] }}>
              {title}
            </Box>
            <Box sx={{ mb: [0, 0, 4], mt: [0, 0, 7, 8] }}>
              <Themed.p>{description}</Themed.p>
            </Box>
          </Box>
        </Column>
        <Column start={[1, 9]} width={[1, 2]}>
          <Box
            sx={{
              display: ['none', 'none', 'initial'],
              fontSize: [2, 2, 2, 3],
            }}
          >
            <Box sx={{ mt: [5, 6, 7, 7] }}>
              <Box
                sx={{
                  fontFamily: 'heading',
                  letterSpacing: 'smallcaps',
                  mb: [3],
                  pt: ['20px', '20px', '42px', '86px'],
                }}
              >
                / QUICK LOOK
              </Box>
              <Box sx={{ color: meta.color }}>{meta.summary}</Box>
            </Box>
          </Box>
        </Column>
      </Row>
      <Row>
        <Column start={[1, 2]} width={[6, 10]} sx={{ mb: [0, 0, 5, 6] }}>
          {children}
        </Column>
      </Row>
    </Layout>
  )
}

export default Tool
