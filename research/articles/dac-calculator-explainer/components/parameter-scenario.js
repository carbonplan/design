import { Box, Divider, Grid } from 'theme-ui'
import { Row, Column } from '@carbonplan/components'
import Donut from './donut'
import LegendWithValues from './legend-with-values'

const ParameterScenario = ({
  energySource,
  capEx,
  electricReq,
  thermalReq,
  leakage,
  totalCost,
  variableOM,
  fixedOM,
  naturalGas,
  capitalRecovery,
}) => {
  const results = {
    'Capital Recovery [$/tCO2eq]': capitalRecovery,
    'Variable O&M [$/tCO2eq]': variableOM,
    'Natural Gas Cost [$/tCO2]': naturalGas,
    'Fixed O&M [$/tCO2eq]': fixedOM,
    'Total Cost [$/tCO2]': totalCost,
  }

  return (
    <Box sx={{ mt: [6, 6, 6, 7], mb: [4, 4, 4, 5] }}>
      <Row columns={[6]} sx={{ pb: [2] }}>
        <Column start={[1]} width={[6, 2, 2, 2]}>
          <Divider sx={{ mb: [3] }} />
          <Box>
            <Value>{capEx}</Value>
            <Label units='$/tCO₂ ann. cap.'>Cap Exp</Label>
          </Box>
          <Box sx={{ mt: [3] }}>
            <Value>{electricReq}</Value>
            <Label units='GJ/tCO₂'>Electric Req</Label>
          </Box>
          <Box sx={{ mt: [3], mb: leakage ? [0, 0, 0] : [2, 2, 0] }}>
            <Value>{thermalReq}</Value>
            <Label units='GJ/tCO₂'>Thermal Req</Label>
          </Box>
          {leakage > 0 && (
            <Box sx={{ mt: [3], mb: [2, 2, 0] }}>
              <Value>{leakage}</Value>
              <Label units='%'>Leakage Rate</Label>
            </Box>
          )}
        </Column>
        <Column start={[1, 3, 3, 3]} width={[3, 2, 2, 2]}>
          <Divider />
          <Box
            sx={{
              textAlign: ['left', 'center', 'center'],
              mt: ['13px', '13px', 4],
            }}
          >
            <Donut results={results} initWidth={150} />
          </Box>
        </Column>
        <Column start={[4, 5, 5, 5]} width={[3, 2, 2, 2]}>
          <Divider />
          <Box
            sx={{
              fontFamily: 'heading',
              letterSpacing: 'smallcaps',
              fontSize: [3, 3, 3, 4],
              mt: [3],
              textTransform: 'uppercase',
            }}
          >
            {energySource}
          </Box>
          <Box
            sx={{
              color: totalCost === 'N/A' ? 'secondary' : 'purple',
              fontSize: [6, 6, 6, 7],
              fontFamily: 'mono',
            }}
          >
            ${totalCost}
          </Box>
          <Box
            sx={{
              textAlign: 'left',
              color: 'text',
              fontSize: [2],
            }}
          >
            {totalCost === 'N/A' ? 'No Net Removal' : 'Net Removed Cost'}
            {!(totalCost === 'N/A') && (
              <Box
                sx={{
                  ml: [0],
                  display: 'block',
                  color: 'secondary',
                }}
              >
                $/tCO₂eq
              </Box>
            )}
          </Box>
          <Box
            sx={{
              mt: leakage ? [0, '56px', '59px'] : [0, '-2px', '-2px'],
            }}
          >
            <LegendWithValues results={results} />
          </Box>
        </Column>
      </Row>
      <Divider sx={{ mt: [0, 0, '-4px'] }} />
    </Box>
  )
}

function Value({ children }) {
  return (
    <Box
      sx={{
        fontFamily: 'mono',
        color: 'purple',
        fontSize: [3, 3, 3, 4],
        pb: [1],
        borderStyle: 'solid',
        borderColor: 'muted',
        borderWidth: '0px',
        borderBottomWidth: '1px',
      }}
    >
      {children}
    </Box>
  )
}

function Label({ units, children }) {
  return (
    <Box
      sx={{
        fontFamily: 'body',
        color: 'text',
        fontSize: [1, 1, 1, 2],
        pt: [1],
      }}
    >
      {children}
      <Box
        as='span'
        sx={{
          color: 'secondary',
          ml: [2],
        }}
      >
        {units}
      </Box>
    </Box>
  )
}

export default ParameterScenario
