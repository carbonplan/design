import { memo } from 'react'
import { Box, Paragraph, Grid, Text, Link, Heading } from 'theme-ui'
import { default as NextLink } from 'next/link'
import { Row, Column, Tag, TaggedLink } from '@carbonplan/components'
import { mix } from '@theme-ui/color'
import Icon from './icon'

const Entry = ({ info, final }) => {
  let {
    title,
    color,
    tags,
    authors,
    version,
    date,
    icon,
    summary,
    links,
  } = info

  color = color || 'text'

  if (color == 'secondary') {
    color = mix('primary', 'background', 0.6)
  }

  return (
    <Box sx={{}}>
      <Box
        id='box'
        sx={{
          pt: [4, 5, 6, 7],
          pb: [4, 5, 6, 7],
          borderStyle: 'solid',
          borderColor: 'muted',
          borderWidth: '0px',
          borderBottomWidth: final ? '0px' : '1px',
          color: 'text',
        }}
      >
        <Row id='grid' columns={[6]}>
          <Column start={[1]} width={[6, 4, 4, 4]}>
            <Box
              sx={{
                color: 'secondary',
                fontFamily: 'mono',
                letterSpacing: '0.05em',
                fontSize: [2, 2, 2, 3],
                userSelect: 'none',
              }}
            >
              {date}{' '}
            </Box>
            <Box
              sx={{
                mb: ['14px'],
                mt: ['10px'],
                ml: ['-1px'],
                lineHeight: 'heading',
                fontFamily: 'heading',
                fontSize: [5, 5, 5, 6],
                color: color,
              }}
            >
              {title}
            </Box>
            <Box sx={{ my: [2], fontSize: [2, 2, 2, 3], lineHeight: 1.35 }}>
              {summary}
            </Box>
            <Box sx={{ mt: [3], fontSize: [2, 2, 2, 3], userSelect: 'none' }}>
              <Box sx={{ mt: [0, 0, '-4px'] }}>
                {links.map((link, ix) => {
                  const pad = links.length > 1 && ix < links.length - 1
                  return (
                    <WrappedLink key={ix} url={link.url}>
                      <Box
                        sx={{
                          color: 'secondary',
                          mr: [5, 5, 5, 6],
                          pr: [0, 0, 2, 0],
                          mb: [pad ? 2 : 0, pad ? 2 : 0, 0],
                          mt: [0, 0, 1],
                          cursor: 'pointer',
                          display: ['block', 'block', 'inline-block'],
                          float: ['left', 'left', 'initial'],
                          clear: ['left', 'left', 'initial'],
                          '@media (hover: hover) and (pointer: fine)': {
                            '&:hover': {
                              color: 'text',
                            },
                            '&:hover > #container > #arrow': {
                              transform: 'rotate(45deg)',
                              color: 'text',
                            },
                          }
                        }}
                      >
                        <Box as='span' id='label' sx={{ transition: '0.15s' }}>
                          {link.label}
                        </Box>
                        <Box
                          id='container'
                          as='span'
                          sx={{ position: 'relative' }}
                        >
                          <Box
                            id='arrow'
                            as='span'
                            sx={{
                              position: 'absolute',
                              top: '-5px',
                              left: '5px',
                              fontSize: [4],
                              transition: '0.15s',
                            }}
                          >
                            ↗
                          </Box>
                        </Box>
                      </Box>
                    </WrappedLink>
                  )
                })}
              </Box>
            </Box>
          </Column>
          <Column
            start={[1, 5, 5, 5]}
            width={[4, 2, 2, 2]}
            sx={{ display: ['none', 'block', 'block'] }}
          >
            <Box
              sx={{
                textAlign: 'right',
                mt: ['-1px'],
              }}
            >
              {tags
                .sort((a, b) => (a > b ? 1 : -1))
                .map((tag) => (
                  <Tag
                    key={tag}
                    sx={{
                      ml: [2],
                      color: 'secondary',
                    }}
                  >
                    {tag}
                  </Tag>
                ))}
            </Box>
            {icon && (
              <WrappedLink url={links[0].url}>
                <Icon icon={icon} color={color} />
              </WrappedLink>
            )}
          </Column>
        </Row>
      </Box>
    </Box>
  )
}

function WrappedLink({ url, children }) {
  if (url.startsWith('/research')) {
    return (
      <NextLink href={url} passHref={true}>
        <Link sx={{ textDecoration: 'none' }}>{children}</Link>
      </NextLink>
    )
  } else {
    let action = 'website'
    let category = 'external'
    if (url.includes('pdf')) {
      action = 'PDF'
      category = 'download'
    }
    return (
      <TaggedLink
        action={action}
        category={category}
        sx={{ textDecoration: 'none' }}
        href={url}
      >
        {children}
      </TaggedLink>
    )
  }
}

export default memo(Entry)
