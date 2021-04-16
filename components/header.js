import React, { useState } from 'react'
import { default as NextLink } from 'next/link'
import { Box, Flex, Container, IconButton, Link } from 'theme-ui'
import Logo from './logo'
import Row from './row'
import Column from './column'

const sx = {
  link: (current, label, first = false) => {
    return {
      width: 'auto',
      color: current === label ? 'secondary' : 'text',
      fontSize: [6, 6, 7, 8],
      borderStyle: 'solid',
      borderColor: 'muted',
      borderWidth: '0px',
      borderBottomWidth: '1px',
      borderTopWidth: first ? '1px' : '0px',
      py: [3, 3, 4, 5],
      textDecoration: 'none',
      display: 'block',
      transition: 'color 0.15s',
      '&:hover': {
        color: 'secondary',
      },
    }
  },
}

const links = ['about', 'research', 'team', 'faq']

const displayLinks = {
  about: 'About',
  research: 'Research',
  team: 'Team',
  faq: 'FAQ',
}

const Header = ({ status, mode, nav }) => {
  const [expanded, setExpanded] = useState(false)

  const toggle = (e) => {
    setExpanded(!expanded)
  }

  return (
    <Box
      sx={{
        width: '100%',
        pt: ['12px'],
        pb: [3],
      }}
    >
      <Row>
        <Column start={[1]} width={[2]}>
          <Box sx={{ display: 'block', width: 'fit-content' }}>
            {(mode == 'homepage' || mode == 'local') && (
              <NextLink href='/' passHref>
                <Link
                  aria-label='CarbonPlan Homepage'
                  sx={{ display: 'block' }}
                >
                  <Logo sx={{ cursor: 'pointer' }} />
                </Link>
              </NextLink>
            )}
            {(mode == null || mode == 'remote') && (
              <Link
                href='https://carbonplan.org'
                aria-label='CarbonPlan Homepage'
                sx={{ display: 'block' }}
              >
                <Logo sx={{ cursor: 'pointer' }} />
              </Link>
            )}
          </Box>
        </Column>
        <Column
          start={[4, 9]}
          width={[2, 2]}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <Box
            sx={{
              fontSize: [1, 2, 3],
              position: 'relative',
              top: ['-2px', '-3px', '-3px'],
            }}
          >
            {status ? `(${status})` : ''}
          </Box>
        </Column>
        <Column
          start={[6, 8, 12, 12]}
          width={[1, 1]}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <IconButton
            onClick={toggle}
            sx={{
              cursor: 'pointer',
              fill: 'none',
              strokeWidth: '2px',
              stroke: 'text',
              '.paren': {
                opacity: '0',
              },
              '&:hover .paren': {
                opacity: '1',
              },
            }}
            aria-label='Toggle Menu'
          >
            {!expanded && (
              <svg
                style={{
                  width: '50px',
                  height: '30px',
                  transform: 'scale(2)',
                  marginTop: '-3px',
                }}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 68 36'
              >
                <line x1='52' y1='29.9' x2='16' y2='29.9' />
                <line x1='52' y1='6.1' x2='16' y2='6.1' />
                <line x1='52' y1='18' x2='16' y2='18' />
                <path
                  style={{ transition: 'all 0.2s' }}
                  className='paren'
                  d='M6.4,1.2c-6.3,10.3-6.3,23.3,0,33.6'
                />
                <path
                  style={{ transition: 'all 0.2s' }}
                  className='paren'
                  d='M61.6,34.8c6.3-10.3,6.3-23.3,0-33.6'
                />
              </svg>
            )}
            {expanded && (
              <svg
                style={{
                  width: '50px',
                  height: '30px',
                  transform: 'scale(2)',
                  marginTop: '-3px',
                }}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 68 36'
              >
                <line x1='50.85' y1='29.79' x2='17.15' y2='6.21' />
                <line x1='17.15' y1='29.79' x2='50.85' y2='6.21' />
                <path
                  style={{ transition: 'all 0.2s' }}
                  className='paren'
                  d='M6.4,1.2c-6.3,10.3-6.3,23.3,0,33.6'
                />
                <path
                  style={{ transition: 'all 0.2s' }}
                  className='paren'
                  d='M61.6,34.8c6.3-10.3,6.3-23.3,0-33.6'
                />
              </svg>
            )}
          </IconButton>
        </Column>
        <Box>
          <Box
            sx={{
              opacity: expanded ? 1 : 0,
              pointerEvents: expanded ? 'all' : 'none',
              position: 'fixed',
              top: '0px',
              right: '0px',
              bottom: '0px',
              minWidth: '0px',
              maxHeight: '100vh',
              width: '100vw',
              backgroundColor: 'background',
              zIndex: 5000,
              mt: ['55px'],
              pt: [4],
              transition: 'opacity 0.25s',
            }}
          >
            <Container>
              <Row>
                <Column start={[2, 4, 7, 7]} width={[5, 4, 5, 5]}>
                  <Box
                    sx={{
                      display: expanded ? 'inherit' : 'none',
                      mt: [5],
                    }}
                  >
                    <Box>
                      {mode == 'homepage' && (
                        <Box>
                          {links.map((d, i) => {
                            return (
                              <NextLink href={'/' + d} passHref>
                                <Link
                                  onClick={() => {
                                    if (nav === d) setExpanded(false)
                                  }}
                                  sx={sx.link(nav, d, i == 0)}
                                >
                                  {displayLinks[d]}
                                </Link>
                              </NextLink>
                            )
                          })}
                        </Box>
                      )}
                      {mode == 'local' && (
                        <Box>
                          {links.map((d, i) => {
                            return (
                              <Link href={'/' + d} sx={sx.link(nav, d, i == 0)}>
                                {displayLinks[d]}
                              </Link>
                            )
                          })}
                        </Box>
                      )}
                      {(mode == null || mode == 'remote') && (
                        <Box>
                          {links.map((d, i) => {
                            return (
                              <Link
                                href={'https://carbonplan.org/' + d}
                                sx={sx.link(nav, d, i == 0)}
                              >
                                {displayLinks[d]}
                              </Link>
                            )
                          })}
                        </Box>
                      )}
                    </Box>
                  </Box>
                </Column>
              </Row>
            </Container>
          </Box>
        </Box>
      </Row>
    </Box>
  )
}

export default Header
