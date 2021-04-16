import { Box, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'
import { Arrow } from '@carbonplan/components'

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
              '@media (hover: hover) and (pointer: fine)': {
                '&:hover': {
                  color: 'primary'
                },
                '&:hover > #arrow': {
                  fill: 'primary',
                },
              },
            }}
          >
            <Arrow id='arrow' sx={{
              transition: 'fill 0.15s',
              transform: 'rotate(-135deg)',
              position: 'relative',
              top: ['3px'],
              fill: 'secondary',
              width: 13,
              height: 13
            }}/>
            <Box
              as='span'
              sx={{
                fontSize: [2, 2, 2, 3],
                position: 'relative',
                pb: [1],
                ml: [2],
                top: ['2px'],
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
