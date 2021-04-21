import { Box, Themed } from 'theme-ui'
import { Row, Column } from '@carbonplan/components'

const Endnote = ({ label, children }) => {
  return (
    <>
      <Row columns={[6]}>
        <Column start={[1]} width={[6]}>
          <Themed.h2>{label}</Themed.h2>
        </Column>
      </Row>
      <Row columns={[6]}>
        <Column start={[2]} width={[5]}>
          <Themed.p>{children}</Themed.p>
        </Column>
      </Row>
    </>
  )
}

export default Endnote
