import { Box, Divider, Styled, Text, Heading, Link, Grid } from 'theme-ui'
import { Layout, Row, Column, Guide } from '@carbonplan/components'

const data = [
  {
    name: 'Jeremy Freeman',
    role: 'Executive Director',
    bio:
      'Jeremy is a scientist with a passion for open science, open source software, and bringing cross-disciplinary teams together to tackle big problems. He holds a PhD in Neural Science from New York University and a BA in Neuroscience from Swarthmore College.',
  },
  {
    name: 'Joe Hamman',
    role: 'Technology Director',
    bio:
      'Joe is a climate scientist and engineer. He is passionate about open science and his work has long focused on the development of open data and software tools for basic and applied research. He holds a MS and PhD in Civil Engineering from the University of Washington and a PE in Washington State.',
  },
  {
    name: 'Danny Cullenward',
    role: 'Policy Director',
    bio:
      'Danny is an energy economist and lawyer focused on the design and implementation of scientifically grounded climate policy. He holds a JD and PhD from Stanford University, where he teaches classes on energy law and climate policy.',
  },
  {
    name: 'Oriana Chegwidden',
    role: 'Research Scientist',
    bio:
      'Oriana is a climate scientist committed to conducting impactful, equitable science. She is an alum of AmeriCorps, where she worked to support immigrant rights. She holds a PhD in Civil and Environmental Engineering from the University of Washington and a BS in Chemistry from Haverford College.',
  },
  {
    name: 'Cindy Chiao',
    role: 'Data Scientist',
    bio:
      'Cindy is a data and environmental scientist. She is passionate about sustainable development and is excited to contribute via data analysis and machine learning. She holds a MSE in Environmental Engineering and a MS in Sustainable Systems from the University of Michigan.',
  },
  {
    name: 'Freya Chay',
    role: 'Program Analyst',
    bio:
      'Freya has an interdisciplinary background in decarbonization. She’s particularly interested in how climate-forced transformations will impact culture and communities. She holds an MS in Earth Systems and a BS in Computer Science from Stanford University.',
  },
  {
    name: 'Jane Zelikova',
    role: 'Senior Fellow',
    bio:
      'Jane is an ecosystem scientist working at the intersection of climate science and policy. Her work focuses on advancing the science of engineered and natural carbon sequestration. She earned a PhD from the University of Colorado, is a researcher at the University of Wyoming, and is the founder of 500 Women Scientists.',
  },
]

const Team = () => {
  return (
    <Layout links={'homepage'} title={'team / carbonplan'}>
      <Guide />
      <Row>
        <Column start={[1, 2]} width={[6, 3]}>
          <Box
            as='h1'
            variant='styles.h1'
            sx={{ mt: [5, 6, 7, 8], mb: [5, 6, 7, 8] }}
          >
            Team
          </Box>
          <Box as='h2' variant='styles.h2' sx={{ mb: [0, 3, 5, 5] }}>
            Core team
          </Box>
        </Column>
      </Row>
      <Row sx={{ mb: [4, 5, 6, 7] }}>
        <Column start={[1, 3]} width={[6, 6, 8, 8]}>
          <Box sx={{ pt: [2, 0, 0], pb: [1] }}>
            <Box variant='styles.p' sx={{ mb: [4, 5, 6, 7] }}>
              Interested in joining our team? Check out our{' '}
              <Link href='https://apply.workable.com/carbonplan/'>
                job openings
              </Link>
              .
            </Box>
            <Grid
              columns={[1, 2, 2, 2]}
              sx={{
                gridColumnGap: [4, 5, 5, 6],
                gridRowGap: [4, 5, 5, 6],
              }}
            >
              {data.map((p) => (
                <Person key={p.name} name={p.name} role={p.role} bio={p.bio} />
              ))}
            </Grid>
          </Box>
        </Column>
      </Row>
      <Row>
        <Column start={[1, 2]} width={[6, 9]}>
          <Divider sx={{ my: [0] }} />
        </Column>
      </Row>
      <Row>
        <Column start={[1, 2]} width={[6, 2]}>
          <Styled.h2>Board</Styled.h2>
        </Column>
      </Row>
      <Row sx={{ mb: [4, 5, 6, 7] }}>
        <Column start={[1, 3]} width={[6, 6]}>
          <Box sx={{ pb: [1] }}>
            <Person name='Jeremy Freeman' role='CarbonPlan' />
            <Person name='Kelly Gannon' role='Global Fund for Women' />
            <Person
              name='Zeke Hausfather'
              role='Breakthrough Institute / Carbon Brief'
            />
          </Box>
        </Column>
      </Row>
      <Row>
        <Column start={[1, 2]} width={[6, 9]}>
          <Divider sx={{ my: [0] }} />
        </Column>
      </Row>
      <Row>
        <Column start={[1, 2]} width={[6, 2]}>
          <Styled.h2>Collaborators</Styled.h2>
        </Column>
      </Row>
      <Row>
        <Column start={[1, 3]} width={[6, 4, 6, 6]}>
          <Box sx={{ fontSize: [3, 3, 3, 4] }}>
            <Box
              as='p'
              variant='styles.p'
              sx={{ mt: [2, 3, 4, 5], mb: [4, 5, 6, 7] }}
            >
              We collaborate closely with a community of experts and advisors.
              Interested in working together? Email us{' '}
              <Link href='mailto:hello@carbonplan.org'>
                hello@carbonplan.org
              </Link>
            </Box>
            <Box sx={{ mb: [3] }}>
              <Span sx={{ color: 'green' }}>BILL ANDEREGG</Span>
              <Box as='p' sx={{ color: 'secondary' }}>
                University of Utah
              </Box>
            </Box>
            <Box sx={{ mb: [3] }}>
              <Span sx={{ color: 'green' }}>GRAYSON BADGLEY</Span>
              <Box as='p' sx={{ color: 'secondary' }}>
                Black Rock Forest Consortium / Columbia University
              </Box>
            </Box>
            <Box sx={{ mb: [3] }}>
              <Span sx={{ color: 'green' }}>ANNA TRUGMAN</Span>
              <Box sx={{ color: 'secondary' }}>UC Santa Barbara</Box>
            </Box>
            <Box sx={{ mb: [3] }}>
              <Span sx={{ color: 'green' }}>BARBARA HAYA</Span>
              <Box sx={{ color: 'secondary' }}>UC Berkeley</Box>
            </Box>
            <Box
              sx={{ mb: [3], letterSpacing: 'smallcaps', color: 'secondary' }}
            >
              <Span sx={{ color: 'purple' }}>JENNIFER WILCOX</Span> /{' '}
              <Span sx={{ color: 'purple' }}>NOAH MCQUEEN</Span> /{' '}
              <Span sx={{ color: 'purple' }}>CALEB WOODALL</Span> /{' '}
              <Span sx={{ color: 'purple' }}>HÉLÈNE PILORGÉ</Span> /{' '}
              <Span sx={{ color: 'purple' }}>BEN KOLOSZ</Span>
              <Box as='p' sx={{ color: 'secondary' }}>
                University of Pennsylvania
              </Box>
            </Box>
            <Box
              sx={{ mb: [3], letterSpacing: 'smallcaps', color: 'secondary' }}
            >
              <Span sx={{ color: 'purple' }}>ANDREW BERGMAN</Span> /{' '}
              <Span sx={{ color: 'purple' }}>TOLY RINBERG</Span>
              <Box as='p' sx={{ color: 'secondary' }}>
                Harvard University
              </Box>
            </Box>
            <Box
              sx={{
                mb: [5, 6, 7, 8],
                letterSpacing: 'smallcaps',
                color: 'secondary',
              }}
            >
              <Span sx={{ color: 'orange' }}>JENNIFER PETT-RIDGE</Span> /{' '}
              <Span sx={{ color: 'orange' }}>ERIC SLESSAREV</Span>
              <Box as='p'>Lawrence Livermore National Laboratory</Box>
            </Box>
          </Box>
        </Column>
      </Row>
    </Layout>
  )
}

function Span({ sx, children }) {
  return (
    <Text
      as='span'
      sx={{
        display: 'inline-block',
        letterSpacing: 'smallcaps',
        fontFamily: 'heading',
        ...sx,
      }}
    >
      {children}
    </Text>
  )
}

function Bio({ text }) {
  return (
    <Box>
      <Divider sx={{ my: [3] }}></Divider>
      <Text
        sx={{
          fontSize: [2, 2, 2, 3],
          mt: [3],
        }}
      >
        {text}
      </Text>
    </Box>
  )
}

function Person({ name, role, bio }) {
  return (
    <Box sx={{ mb: [3, 2, 2] }}>
      <Box
        as='span'
        sx={{
          fontSize: [3, 3, 3, 4],
          fontFamily: 'heading',
          textTransform: 'uppercase',
          letterSpacing: 'smallcaps',
          display: 'inline-block',
          mr: [2],
        }}
      >
        {name}
      </Box>
      <Box
        as='span'
        sx={{
          fontSize: [3, 3, 3, 4],
          fontFamily: 'body',
          letterSpacing: 'body',
          color: 'secondary',
          display: ['block', 'inline-block', 'inline-block'],
        }}
      >
        {role}
      </Box>
      {bio && <Bio text={bio} />}
    </Box>
  )
}

export default Team
