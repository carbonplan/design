import { Box, Grid, Divider } from 'theme-ui'

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

const Top = ({ children }) => {
  return (
    <Box
      sx={{
        borderStyle: 'solid',
        borderWidth: '0px',
        borderTopWidth: '1px',
        borderColor: 'muted',
        pt: [3],
        pb: [3],
        mb: ['2px', 0, 0],
      }}
    >
      {children}
    </Box>
  )
}

const sx = {
  title: {
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
    mt: [0],
    mb: [0, '2px', '2px'],
    fontSize: [2, 2, 2, 3],
  },
  label: {
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
    mt: [0],
    mb: [2, 0, 0, 0],
    fontSize: [2, 2, 2, 3],
    gridColumnStart: [1, 1, 1, 1],
    gridColumnEnd: [7, 4, 4, 4],
  },
  description: {
    fontFamily: 'faux',
    letterSpacing: 'faux',
    fontSize: [2, 2, 2, 3],
    mb: [0, 0, '2px'],
    mb: ['1px', '1px', 0],
    gridColumnStart: [1, 4, 4, 4],
    gridColumnEnd: [7, 7, 7, 7],
  },
  number: {
    fontFamily: 'mono',
    letterSpacing: 'mono',
    fontSize: [5],
    color: 'pink',
  },
  units: {
    textTransform: 'initial',
    fontFamily: 'faux',
    letterSpacing: 'faux',
    fontSize: [2],
    color: 'secondary',
  },
  group: {
    borderStyle: 'solid',
    borderWidth: '0px',
    borderTopWidth: '1px',
    borderColor: 'muted',
    pt: [3],
    pb: [3],
  },
}

const Parameters = ({}) => {
  return (
    <Box sx={{ my: [6, 6, 6, 7] }}>
      <Top>
        <Box sx={{ ...sx.title, ...{ color: 'pink' } }}>Parameters</Box>
      </Top>
      <Row>
        <Box sx={sx.label}>
          Project duration
          <Box sx={sx.units}>years</Box>
        </Box>
        <Box sx={sx.description}>
          How long the temporary carbon removal lasts before needing a renewal.
        </Box>
      </Row>
      <Row>
        <Box sx={sx.label}>
          Switching time
          <Box sx={sx.units}>years</Box>
        </Box>
        <Box sx={sx.description}>
          The year in which the decision-maker switches from temporary to
          permanent carbon removal. (Optional.)
        </Box>
      </Row>
      <Row>
        <Box sx={sx.label}>
          Discount rate
          <Box sx={sx.units}>%</Box>
        </Box>
        <Box sx={sx.description}>
          Used to discount future year costs and generate a net present value
          calculation.
        </Box>
      </Row>
      <Row>
        <Box sx={sx.label}>
          Project risk
          <Box sx={sx.units}>%/year</Box>
        </Box>
        <Box sx={sx.description}>
          The risk that a project fails and releases its carbon back to the
          atmosphere.
        </Box>
      </Row>
      <Row>
        <Box sx={sx.label}>
          Temporary project cost
          <Box sx={sx.units}>$/tCO₂</Box>
        </Box>
        <Box sx={sx.description}>
          Project costs set as constant or based on a custom price trajectory.
        </Box>
      </Row>
      <Row>
        <Box sx={sx.label}>
          Permanent project cost
          <Box sx={sx.units}>$/tCO₂</Box>
        </Box>
        <Box sx={sx.description}>
          Project costs set as constant or based on a custom price trajectory.
        </Box>
      </Row>
      <Divider sx={{ mt: [1], width: ['100%'] }} />
    </Box>
  )
}

export default Parameters
