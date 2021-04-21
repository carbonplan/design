import Check from './icons/check'
import Ex from './icons/ex'
import Squares from './graphics/squares'
import data from '../data'
import { Box, Grid, Link } from 'theme-ui'
import { useThemeUI } from 'theme-ui'

const Row = ({ children }) => {
  return (
    <Grid
      columns={[6]}
      sx={{
        borderStyle: 'solid',
        borderWidth: '0px',
        borderTopWidth: '1px',
        borderColor: 'muted',
        rowGap: [0],
        columnGap: [4, 5, 5, 6],
        pt: [3, 3, 3, 4],
        pb: [3, 3, 3, 4],
        mb: ['2px', '2px', '1px', '1px'],
      }}
    >
      {children}
    </Grid>
  )
}

const header = {
  textTransform: 'uppercase',
  letterSpacing: 'smallcaps',
  fontFamily: 'heading',
  fontSize: [2, 2, 2, 3],
  mb: [2, 0, 0, 0],
  mt: [0, 0, 0, 0],
  gridColumnStart: [1, 1, 1, 1],
  gridColumnEnd: [7, 3, 3, 3],
}

const entry = {
  fontSize: [2, 2, 2, 3],
  fontFamily: 'faux',
  letterSpacing: 'faux',
  mb: [0, 0, '2px'],
  gridColumnStart: [1, 3, 3, 3],
  gridColumnEnd: [7, 7, 7, 7],
}

const Metrics = () => {
  return (
    <Box
      sx={{
        my: [6, 6, 6, 7],
        borderStyle: 'solid',
        borderWidth: '0px',
        borderBottomWidth: '1px',
        borderColor: 'muted',
      }}
    >
      <Row>
        <Box sx={header}>Mechanism</Box>
        <Box sx={entry}>
          Does the project directly remove CO₂ from the atmosphere, avoid CO₂
          emissions that would otherwise end up in the atmosphere, or both?
        </Box>
      </Row>
      <Row>
        <Box sx={header}>VOLUME</Box>
        <Box sx={entry}>
          How many tons of CO₂ does the project claim to remove or avoid?
        </Box>
      </Row>
      <Row>
        <Box sx={header}>NEGATIVITY</Box>
        <Box sx={entry}>
          Based on a life cycle analysis, how emissions-intensive is the
          project's process relative to its carbon removal potential?
        </Box>
      </Row>
      <Row>
        <Box sx={header}>PERMANENCE</Box>
        <Box sx={entry}>
          How long does the project claim carbon will be safely removed from the
          atmosphere? Is that a question of physical material stability or
          socioeconomic choices?
        </Box>
      </Row>
      <Row>
        <Box sx={header}>COST</Box>
        <Box sx={entry}>
          How much does the project want to charge its buyer?
        </Box>
      </Row>
      <Row>
        <Box sx={header}>ADDITIONALITY</Box>
        <Box sx={entry}>
          Would an investment cause new climate benefits or take credit for
          benefits that may already be happening?
        </Box>
      </Row>
      <Row>
        <Box sx={header}>SPECIFICITY</Box>
        <Box sx={entry}>
          Is there enough detail in project proposals, publications, or other
          materials to independently validate the rest of our metrics?
        </Box>
      </Row>
    </Box>
  )
}

export default Metrics
