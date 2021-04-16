import { Box, Text, Grid, Container } from 'theme-ui'
import { Layout, Row, Column, Guide } from '@carbonplan/components'
import BackArrow from './back-arrow'
import BackLink from './back-link'

const prefix = 'https://images.carbonplan.org'

const Article = ({ children, meta }) => {
  return (
    <Layout
      card={`${prefix}/social/${meta.card}.png`}
      description={meta.summary}
      title={meta.title.toLowerCase() + ' / research / carbonplan'}
      links={'local'}
      metadata={'scroll'}
    >
      <Guide />
      <Box
        sx={{
          backgroundColor: meta.color,
          height: ['auto', 'auto', meta.background ? '275px' : 'auto'],
          position: ['relative', 'relative', 'absolute'],
          backgroundImage: [
            'none',
            'none',
            meta.background ? `url(${prefix}/${meta.background}.png)` : 'none',
          ],
          width: ['calc(100vw)'],
          left: [0],
          ml: [-3, -4, 0],
          backgroundSize: 'cover',
          backgroundPosition: '50% 70%',
          py: [3],
        }}
      >
        <Box
          sx={{
            position: [
              'intial',
              'initial',
              meta.background ? 'absolute' : 'relative',
            ],
            bottom: 0,
            pb: ['2px', '2px', meta.background ? 3 : 0],
            width: '100%',
            color: ['#1b1e23', '#1b1e23', meta.invert ? '#1b1e23' : '#ebebec'],
          }}
        >
          <Container>
            <Row>
              <Column start={[1, 1]} width={[6, 1]}>
                <Text
                  sx={{
                    fontFamily: 'mono',
                    letterSpacing: 'mono',
                    textTransform: 'uppercase',
                    fontSize: [2, 2, 2, 3],
                  }}
                >
                  ARTICLE({meta.number})
                </Text>
              </Column>
              <Column start={[1, 3]} width={[6, 6, 6, 6]}>
                <Text
                  sx={{
                    fontFamily: 'mono',
                    letterSpacing: 'mono',
                    textTransform: 'uppercase',
                    fontSize: [2, 2, 2, 3],
                  }}
                >
                  by{' '}
                  {meta.authors.map((author, ix) => (
                    <Text
                      key={author}
                      sx={{
                        display: 'inline-block',
                        mr: [2],
                        fontFamily: 'mono',
                        letterSpacing: 'mono',
                        fontSize: [2, 2, 2, 3],
                      }}
                    >
                      {author.replace(/ /g, '\u00a0')}{' '}
                      {ix < meta.authors.length - 1 ? '+' : ''}
                    </Text>
                  ))}
                </Text>
              </Column>
              <Column start={[1, 10]} width={[6, 2]}>
                <Text
                  sx={{
                    fontFamily: 'mono',
                    letterSpacing: 'mono',
                    textTransform: 'uppercase',
                    fontSize: [2, 2, 2, 3],
                  }}
                >
                  {meta.date}
                </Text>
              </Column>
            </Row>
          </Container>
        </Box>
      </Box>
      <Box
        sx={{
          px: [0, 0, 0],
          pt: [0, 0, meta.background ? '275px' : '100px'],
          mb: [3, 5, 7, 8],
        }}
      >
        <Row>
          <Box sx={{ display: ['none', 'none', 'none', 'none'] }}>
            <Column
              start={[1, 1]}
              width={[2]}
              sx={{ mb: [-5, -7, 0, 0], mt: [3, 3, 6, 7] }}
            >
              <BackArrow />
            </Column>
          </Box>
          <Box sx={{ display: ['initial', 'initial', 'initial', 'initial'] }}>
            <Column
              start={[1, 1]}
              width={[2]}
              dr={1}
              sx={{ mb: [-3, -4, 0, 0], mt: [3, 3, '104px', '104px'] }}
            >
              <BackLink />
            </Column>
          </Box>
          <Column start={[1, 3]} width={[6, 6, 6, 6]}>
            <Box>{children}</Box>
          </Column>
          <Column start={[1, 10]} width={[2]}>
            <Box
              sx={{
                display: ['none', 'none', 'initial'],
                fontSize: [2, 2, 2, 3],
              }}
            >
              <Box sx={{ mt: [5, 6, 7, 8] }}>
                <Box
                  sx={{
                    fontFamily: 'heading',
                    letterSpacing: 'smallcaps',
                    mb: [3],
                    pt: [0, 0, '42px', '22px'],
                  }}
                >
                  / QUICK LOOK
                </Box>
                <Box sx={{ color: meta.color }}>{meta.summary}</Box>
              </Box>
            </Box>
          </Column>
        </Row>
      </Box>
    </Layout>
  )
}

export default Article
