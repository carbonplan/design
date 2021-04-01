import { Box, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'

const BackLink = () => {
  return (
    <Box
      sx={{
        ml: ['-2px', '-2px', '-2px', '-2px'],
      }}
    >
      <NextLink href='/research' passHref>
        <Link
          sx={{
            display: 'inline-block',
            position: 'relative',
            zIndex: 10,
            textDecoration: 'none',
          }}
        >
          <Box
            sx={{
              color: 'secondary',
              fontFamily: 'body',
              letterSpacing: 'body',
              transition: '0.15s',
              '&:hover': {
                color: 'primary',
              },
            }}
          >
            <Box
              as='span'
              sx={{
                position: 'relative',
                top: ['-3px'],
                fontSize: [4, 4, 4, 5],
              }}
            >
              ←
            </Box>
            <Box
              as='span'
              sx={{
                fontSize: [3, 3, 3, 4],
                position: 'relative',
                pb: [1],
                ml: [2],
                top: ['-6px'],
              }}
            >
              Back
            </Box>
          </Box>
        </Link>
      </NextLink>
    </Box>
  )
}

export default BackLink
