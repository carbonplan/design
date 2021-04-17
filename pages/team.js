import { Box, Image, Divider, Styled, Text, Link, Grid } from 'theme-ui'
import { Layout, Row, Column, Guide } from '@carbonplan/components'
import Heading from '../homepage/components/heading'
import Table from '../homepage/components/table'

const team = [
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
  {
    name: 'Becky Hurst',
    role: 'Operations Manager',
    bio:
      'Becky has extensive experience in the nonprofit sector, and is energized by operations and project management. She is passionate about creating organizational systems that foster team productivity, and is excited to be involved in climate action. She holds a BA in English Literature from Western Washington University.',
  },
]

const board = [
  {
    name: 'Jeremy Freeman',
    description: 'CarbonPlan',
  },
  {
    name: 'Kelly Gannon',
    description: 'Global Fund for Women',
  },
  {
    name: 'Zeke Hausfather',
    description: 'CarbonBrief / Breakthrough Institute',
  },
]

const collaborators = [
  {
    name: 'Grayson Badgley',
    description: 'Black Rock Forest Consortium + Columbia University',
  },
  {
    name: 'Bill Anderegg',
    description: 'University of Utah',
  },
  {
    name: 'Anna Trugman',
    description: 'UC Ssanta Barbara',
  },
  {
    name: 'Barbara Haya',
    description: 'UC Berkeley',
  },
  {
    name: [
      'Jennifer Wilcox',
      'Noah McQueen',
      'Caleb Woodall',
      'HÉLÈNE PILORGÉ',
      'Ben Kolosz',
    ],
    description: 'University of Pennsylvania',
  },
  {
    name: ['Andrew Bergman', 'Toly Rinberg'],
    description: 'Harvard University',
  },
  {
    name: ['Jennifer Pett-Ridge', 'Eric Slessarev'],
    description: 'Lawrence Livermore National Laboratory',
  },
]

const colors = ['red', 'orange', 'yellow', 'pink']

const Team = () => {
  return (
    <Layout links={'homepage'} title={'team / carbonplan'} nav={'team'}>
      <Guide />
      <Heading
        sidenote={
          <span>
            Interested in joining our team? Check out our{' '}
            <Link href='https://carbonplan.org/jobs'>job openings</Link>.
          </span>
        }
      >
        Team
      </Heading>
      <Row>
        <Column start={[1, 2]} width={[6, 3]}>
          <Box
            as='h2'
            variant='styles.h2'
            sx={{ mt: [0, 0, 0, 0], mb: [3, 4, 5, 6] }}
          >
            Core team
          </Box>
        </Column>
      </Row>
      <Row sx={{ mt: [2, 3, 4, 5], mb: [4, 5, 6, 7] }}>
        <Column start={[1, 2]} width={[6, 8, 10, 10]}>
          <Box sx={{ pt: [2, 0, 0], pb: [1] }}>
            <Grid
              columns={[1, 2, 2, 2]}
              sx={{
                gridColumnGap: [4, 5, 5, 6],
                gridRowGap: [4, 5, 5, 6],
              }}
            >
              {team.sort((a, b) => a.name.localeCompare(b.name)).map((p, i) => (
                <Person
                  key={p.name}
                  name={p.name}
                  role={p.role}
                  bio={p.bio}
                  final={i == team.length - 1}
                  penultimate={i == team.length - 2}
                  color={colors[i % 4]}
                />
              ))}
            </Grid>
          </Box>
        </Column>
      </Row>
      <Row>
        <Column start={[1, 2]} width={[6, 8, 9, 9]}>
          <Divider sx={{ my: [0] }} />
        </Column>
      </Row>
      <Box sx={{ mb: [3, 4, 5, 6] }}>
        <Table heading='Board' data={board} />
      </Box>
      <Row>
        <Column start={[1, 2]} width={[6, 8, 9, 9]}>
          <Divider sx={{ my: [0] }} />
        </Column>
      </Row>
      <Box sx={{ mb: [5, 6, 7, 8] }}>
        <Table
          heading='Collaborators'
          data={collaborators}
          sidenote={
            <span>
              Interested in working together? Email us at{' '}
              <Link href='mailto:hello@carbonplan.org'>
                hello@carbonplan.org
              </Link>
              .
            </span>
          }
        />
      </Box>
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
    <Box sx={{ mb: [2] }}>
      <Box
        sx={{
          fontSize: [2, 2, 2, 3],
          mt: [3],
        }}
      >
        {text}
      </Box>
    </Box>
  )
}

function Person({ name, role, bio, penultimate, final, color }) {
  return (
    <Row columns={[6, 4, 5, 5]}>
      <Column start={[1]} width={[2, 1, 1, 1]}>
        <Box sx={{
          maxWidth: '100px', 
          width: '100%', 
          height: 'auto', 
          borderRadius: '50%', 
          position: 'relative', 
          bg: color,
        }}>
        <Image
          src={`https://images.carbonplan.org/team/${name.toLowerCase().replace(' ', '-')}.png`}
          sx={{ opacity: 0.25, filter: 'contrast(200%) brightness(100%)', width: '100%', borderRadius: '50%', display: 'block'}}
        >
        </Image>  
        </Box>
      </Column>
      <Column
        start={[3, 2, 2, 2]}
        width={[4, 3, 4, 4]}
        sx={{
          borderStyle: 'solid',
          borderWidth: '0px',
          borderBottomWidth: [
            (final) ? '0px' : '1px',
            (final || penultimate) ? '0px' : '1px',
            (final || penultimate) ? '0px' : '1px',
            (final || penultimate) ? '0px' : '1px'
          ],
          pb: [
            final ? 2 : 4,
            (final || penultimate) ? 2 : 4,
            (final || penultimate) ? 2 : 4,
            (final || penultimate) ? 2 : 4,
          ],
          borderColor: 'muted',
        }}
      >
        <Box sx={{ mb: [3, 2, 2] }}>
          <Box
            sx={{
              fontSize: [2, 2, 2, 3],
              fontFamily: 'heading',
              textTransform: 'uppercase',
              letterSpacing: 'smallcaps',
              mr: [2],
              mb: [1],
            }}
          >
            {name}
          </Box>
          <Box
            sx={{
              fontSize: [2, 2, 2, 3],
              fontFamily: 'faux',
              letterSpacing: 'faux',
            }}
          >
            {role}
          </Box>
          {bio && <Bio text={bio} />}
        </Box>
      </Column>
    </Row>
  )
}

export default Team
