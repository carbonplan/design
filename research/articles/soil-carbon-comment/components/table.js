import { Text, Box, Grid } from 'theme-ui'

const Row = ({ children }) => {
  return (
    <Grid
      columns={[6]}
      sx={{
        borderStyle: 'solid',
        borderWidth: '0px',
        borderTopWidth: '1px',
        borderColor: 'muted',
        columnGap: [4, 5, 5, 6],
        pt: [3, 3, 3, 4],
        pb: [3, 3, 3, 4],
        mb: ['2px', 0, 0],
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

const title = {
  textTransform: 'uppercase',
  letterSpacing: 'smallcaps',
  fontFamily: 'heading',
  fontSize: [2, 2, 2, 3],
  mt: [0, 0, 0],
  mb: [0, '2px', '2px'],
  color: 'orange',
}

const header = {
  textTransform: 'uppercase',
  letterSpacing: 'smallcaps',
  fontFamily: 'heading',
  mt: [0, 0, 0],
  fontSize: [2, 2, 2, 3],
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

const Table = () => {
  return (
    <Box
      sx={{
        my: [5, 6, 7, 8],
        borderStyle: 'solid',
        borderWidth: '0px',
        borderBottomWidth: '1px',
        borderColor: 'muted',
      }}
    >
      <Top>
        <Text sx={title}>Additionality</Text>
      </Top>
      <Row>
        <Text sx={header}>Problem</Text>
        <Text sx={entry}>
          Contrary to key standards for compliance grade markets and the Climate
          Action Reserve’s own requirements for private markets, the protocol
          does not evaluate project additionality.
        </Text>
      </Row>
      <Row>
        <Text sx={header}>Recommendation</Text>
        <Text sx={entry}>
          To accurately inform prospective credit buyers, the protocol should
          acknowledge that it is not evaluating the financial viability of
          credited projects and therefore is not testing for additionality.
        </Text>
      </Row>
      <Top>
        <Text sx={title}>Model selection</Text>
      </Top>
      <Row>
        <Text sx={header}>Problem</Text>
        <Text sx={entry}>
          Projects can select their own models to calculate the number of
          credits earned under the protocol, subject to a set of ambiguous
          quality control criteria.
        </Text>
      </Row>
      <Row>
        <Text sx={header}>Recommendation</Text>
        <Text sx={entry}>
          All model calculations should be based on well-established,
          scientifically vetted models and either be fully disclosed such that
          an independent researcher could fully replicate calculations or
          independently verified by a financially disinterested third party.
        </Text>
      </Row>
      <Top>
        <Text sx={title}>Sampling and verification</Text>
      </Top>
      <Row>
        <Text sx={header}>Problem</Text>
        <Text sx={entry}>
          The protocol does not prescribe specific sampling methods to ensure
          accurate measurement of individual project sites, nor does it require
          independent measurement of soil carbon in the verification process.
          <br />
          <br />
          The protocol proposes that fewer than 1% of large project aggregators’
          sites be verified, without justifying that rate with respect to known
          data on soil carbon quantification and sampling.
          <br />
          <br />
          Numerous loopholes would allow offset projects to avoid all physical
          site visits in the verification process.
        </Text>
      </Row>
      <Row>
        <Text sx={header}>Recommendation</Text>
        <Text sx={entry}>
          Projects should rigorously sample soils at baseline and regular
          intervals, with sampling designs and randomization schemes that
          adequately capture underlying variation, in accordance with best
          practices from the scientific literature.
          <br />
          <br />
          The rate of sampling of individual project sites for large aggregators
          should be increased.
          <br />
          <br />
          Verification sampling must be done on-site and should not be replaced
          with self-reporting or remote sensing techniques that are not widely
          accepted in the scientific literature.
        </Text>
      </Row>
      <Top>
        <Text sx={title}>Permanence</Text>
      </Top>
      <Row>
        <Text sx={header}>Problem</Text>
        <Text sx={entry}>
          Although the protocol offers 100-year guarantees on carbon permanence,
          it only requires physical soil carbon monitoring for 30 years and
          allows projects to select shorter compliance timeframes in private
          contracts with the Climate Action Reserve.
          <br />
          <br />
          The protocol does not support its choice of buffer pool parameters.
          The buffer pool rules also include a series of loopholes that do not
          protect against the possibility that participating projects might
          default on their contracts.
        </Text>
      </Row>
      <Row>
        <Text sx={header}>Recommendation</Text>
        <Text sx={entry}>
          The permanence of any credits issued under the protocol should be the
          lesser of (1) the period of time over which projects must physically
          monitor soil carbon and (2) any shorter time period the carbon offset
          project elects in its private contract with the Climate Action
          Reserve.
          <br />
          <br />
          The protocol should justify the choice of parameters used to calculate
          the contribution of its buffer pool and eliminate loopholes that allow
          private parties to avoid contributing to the buffer pool to cover
          their default risks.
        </Text>
      </Row>
    </Box>
  )
}

export default Table
