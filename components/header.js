import React, { useState } from 'react'
import { default as NextLink } from 'next/link'
import { Box, Flex, Container, Link } from 'theme-ui'
import Logo from './logo'
import Row from './row'
import Column from './column'
import Hamburger from './hamburger'
import Settings from './settings'
import Dimmer from './dimmer'

const sx = {
  link: (current, label, first = false) => {
    return {
      width: 'auto',
      color: current === label ? 'secondary' : 'text',
      fontSize: [6, 6, 7, 8],
      fontFamily: 'heading',
      letterSpacing: 'heading',
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

const links = [
  { url: 'about', display: 'About' },
  { url: 'research', display: 'Research' },
  { url: 'team', display: 'Team' },
  { url: 'faq', display: 'FAQ' },
]

const Nav = ({ link, mode, nav, first, setExpanded }) => {
  const { url, display } = link
  const href = mode === 'remote' ? 'https://carbonplan.org/' + url : '/' + url

  if (mode === 'homepage' || (mode === 'local' && nav === url)) {
    return (
      <NextLink href={href} passHref>
        <Link
          onClick={() => {
            if (nav === url) setExpanded(false)
          }}
          sx={sx.link(nav, url, first)}
        >
          {display}
        </Link>
      </NextLink>
    )
  } else {
    return (
      <Link href={href} sx={sx.link(nav, url, first)}>
        {display}
      </Link>
    )
  }
}

const NavGroup = ({ links, nav, mode, setExpanded }) => {
  return links.map((d, i) => {
    return (
      <Nav
        key={i}
        link={d}
        mode={mode}
        nav={nav}
        first={i === 0}
        setExpanded={setExpanded}
      />
    )
  })
}

const Header = ({ status, mode, nav, settings }) => {
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
                  sx={{
                    display: 'block',
                  }}
                >
                  <Logo
                    id='logo'
                    sx={{
                      cursor: 'pointer',
                    }}
                  />
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
          width={[1, 1]}
          dr={1}
          sx={{
            display: [status ? 'flex' : 'none', 'flex', 'flex', 'flex'],
            alignItems: 'center',
          }}
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
          start={[status ? 6 : 4, 6, 12, 12]}
          width={[status ? 1 : 3, 3, 1, 1]}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <Box
            sx={{
              mr: ['18px'],
              position: 'relative',
              top: ['-1px'],
              display: [status ? 'none' : 'block', 'block', 'none', 'none'],
            }}
          >
            <Dimmer sx={{ stroke: 'primary' }} />
          </Box>
          {settings && (
            <Box
              sx={{
                mr: ['18px'],
                position: 'relative',
                display: [status ? 'none' : 'block', 'block', 'none', 'none'],
              }}
            >
              <Settings
                value={settings.value}
                onClick={settings.onClick}
                sx={{ stroke: 'primary' }}
              />
            </Box>
          )}
          <Hamburger value={expanded} onClick={toggle} />
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
                    <NavGroup
                      links={links}
                      nav={nav}
                      mode={mode}
                      setExpanded={setExpanded}
                    />
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
