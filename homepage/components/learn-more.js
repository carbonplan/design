import { Box, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'
import { Arrow } from '@carbonplan/components'

const LearnMore = ({ label, href, children, internal = false }) => {
  const sx = {
    link: {
      textDecoration: 'none',
      '&:hover > #container > #arrow': {
        transform: 'rotate(45deg)',
        fill: 'secondary',
      },
    },
  }

  function Wrapper({ href, children }) {
    if (internal) {
      return (
        <NextLink href={href} passHref>
          <Link sx={sx.link}>{children}</Link>
        </NextLink>
      )
    } else {
      return (
        <Link href={href} sx={sx.link}>
          {children}
        </Link>
      )
    }
  }

  return (
    <Box
      sx={{
        fontSize: [3, 3, 3, 4],
        lineHeight: '1.2em',
        width: 'fit-content',
        mb: [1],
      }}
    >
      <Wrapper href={href}>
        <Box sx={{ transition: '0.15s', pb: [2] }}>{children}</Box>
        <Box
          sx={{
            transition: '0.15s',
            display: 'inline-block',
            textTransform: 'uppercase',
            letterSpacing: 'smallcaps',
            fontFamily: 'heading',
            fontSize: [2, 2, 2, 3],
          }}
        >
          {label}
        </Box>
        <Box
          as='span'
          id='container'
          sx={{
            ml: [2],
            display: 'inline-block',
          }}
        >
          <Arrow
            id='arrow'
            sx={{
              transition: 'fill 0.15s, transform 0.15s',
              position: 'relative',
              top: ['2px'],
              fill: 'primary',
              height: [15, 15, 15, 17],
              width: [15, 15, 15, 17],
            }}
          />
        </Box>
        <Box as='span' sx={{ display: 'inline-block', width: ['12px'] }} />
      </Wrapper>
    </Box>
  )
}

export default LearnMore
