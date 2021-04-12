import { Box } from 'theme-ui'

const Funnel = ({ sx, ...props }) => {
  return (
    <Box
      as='svg'
      viewBox='0 0 18 14'
      sx={{
        display: 'inline-block',
        width: '20px',
        height: '20px',
        stroke: 'secondary',
        ...sx,
      }}
      {...props}
    >
      <line
        x1='1'
        x2='17'
        y1='1'
        y2='1'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <line
        x1='3'
        x2='15'
        y1='5'
        y2='5'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <line
        x1='5'
        x2='12'
        y1='9'
        y2='9'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <line
        x1='7'
        x2='10'
        y1='13'
        y2='13'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </Box>
  )
}

export default Funnel
