import { Text } from 'theme-ui'

const Badge = ({ label, value, onClick, sx }) => {
  const color = sx && sx.color ? sx.color : 'primary'
  return (
    <Text
      onClick={onClick}
      sx={{
        display: 'inline-block',
        letterSpacing: 'wide',
        cursor: onClick ? 'pointer' : 'default',
        color: color,
        borderStyle: 'solid',
        borderColor: color,
        borderWidth: '0px',
        borderBottomWidth: '1px',
        textTransform: 'uppercase',
        userSelect: 'none',
        mb: [2],
        pt: ['1px'],
        pb: ['2px'],
        pl: [0],
        pr: [0],
        mr: [2],
        fontSize: [1],
        fontFamily: 'mono',
        opacity: value == null || value ? 1 : color == 'primary' ? 0.2 : 0.27,
        ...sx,
      }}
    >
      {label}
    </Text>
  )
}

export default Badge
