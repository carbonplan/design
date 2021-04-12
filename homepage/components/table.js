import { Box, Themed } from 'theme-ui'
import { Row, Column } from '@carbonplan/components'
import Sidenote from './sidenote'

const sx = {
  name: {
    textTransform: 'uppercase',
    letterSpacing: 'smallcaps',
    fontFamily: 'heading',
    fontSize: [2, 2, 2, 3],
  },
  description: {
    fontSize: [2, 2, 2, 3],
    fontFamily: 'faux',
    letterSpacing: 'faux',
    mb: ['1px'],
    mt: [2, 2, 0, 0],
  },
  row: {
    py: [3, 3, 3, 4],
    mb: ['1px'],
  },
}

const Table = ({ heading, data, sidenote, children }) => {
  return (
    <Box>
      <Row sx={{ mt: [5, 6, 7, 8], mb: [4, 5, 6, 7] }}>
        <Column start={[1, 2]} width={[6, 6]}>
          <Box variant='styles.h2' sx={{ my: [0, 0, 0, 0] }}>
            {heading}
          </Box>
        </Column>
        {sidenote && <Sidenote variant='h2'>{sidenote}</Sidenote>}
      </Row>
      <Row>
        <Column start={[2, 3]} width={[5, 6]}>
          {data.map((d, i) => (
            <Box
              key={i}
              sx={{
                borderStyle: 'solid',
                borderWidth: '0px',
                borderBottomWidth: i === data.length - 1 ? '0px' : '1px',
                borderColor: 'muted',
              }}
            >
              <Entry name={d.name} description={d.description} />
            </Box>
          ))}
        </Column>
      </Row>
    </Box>
  )
}

function Entry({ name, description, final }) {
  return (
    <Box sx={sx.row}>
      <Row columns={[6, 5, 6, 6]}>
        <Column start={[1, 1, 1, 1]} width={[6, 2, 3, 3]}>
          {Array.isArray(name) &&
            name.map((d, i) => (
              <Box key={i} sx={sx.name}>
                {d}
              </Box>
            ))}
          {!Array.isArray(name) && <Box sx={sx.name}>{name}</Box>}
        </Column>
        <Column start={[1, 3, 4, 4]} width={[6, 3, 3, 3]}>
          <Box
            sx={{
              textAlign: ['left'],
              ...sx.description,
            }}
          >
            {description}
          </Box>
        </Column>
      </Row>
    </Box>
  )
}

export default Table
