import { Box, Link, Text } from 'theme-ui'
import { default as NextLink } from 'next/link'

const BackArrow = ({ color }) => {
  return (
    <Box
      sx={{
        mt: ['-17px', '-17px', '-17px', '-44px'],
        ml: ['-2px', '-3px', '-5px', '-12px'],
      }}
    >
      <NextLink href='/research' passHref>
        <Link
          sx={{ display: 'inline-block', position: 'relative', zIndex: 10 }}
        >
          <Text
            as='span'
            sx={{
              userSelect: 'none',
              fontFamily: 'faux',
              color: 'text',
              display: 'inline-block',
              mr: [3],
              fontSize: [7, 8, 9, 10],
              transition: '0.1s',
              cursor: 'pointer',
              '&:hover': {
                color: 'secondary',
              },
            }}
          >
            ←
          </Text>
        </Link>
      </NextLink>
    </Box>
  )
}

export default BackArrow
