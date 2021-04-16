import { memo } from 'react'
import { Box, Paragraph, Grid, Text, Link, Heading } from 'theme-ui'
import { default as NextLink } from 'next/link'
import { Row, Column, Tag, Arrow, TaggedLink } from '@carbonplan/components'
import { mix } from '@theme-ui/color'
import Icon from './icon'

const formatDate = (date) => {
  let d = new Date(date.replace(/-/g, '/'))
  let month = d.toLocaleString('default', { month: 'short' })
  let day = String(d.getDay()).padStart(2, '0')
  let year = d.getFullYear()
  return month + ' ' + day + ' ' + year
}

const Entry = ({ info, first, final }) => {
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
          pb: [4, 6, 6, 7],
          pt: [4, 0, 0, 0],
          borderStyle: 'solid',
          borderColor: 'muted',
          borderWidth: '0px',
          borderTopWidth: [first ? '1px' : '0px', '0px', '0px', '0px'],
          borderBottomWidth: [final ? '0px' : '1px', '0px', '0px'],
          color: 'text',
        }}
      >
        <Row id='grid' columns={[6, 7, 7, 7]}>
          <Column
            start={[1]}
            width={[2]}
            sx={{ display: ['initial', 'none', 'none', 'none'] }}
          >
            {icon && (
              <WrappedLink url={links[0].url}>
                <Icon icon={icon} color={color} />
              </WrappedLink>
            )}
          </Column>
          <Column
            start={[3, 1, 2, 2]}
            width={[4, 4, 4, 4]}
            sx={{
              borderStyle: 'solid',
              borderColor: 'muted',
              borderWidth: '0px',
              borderLeftWidth: ['0px', '1px', '1px', '1px'],
              pl: [0, 5, 5, 6],
              ml: [0, -5, -5, -6],
            }}
          >
            <Box
              sx={{
                color: 'secondary',
                fontFamily: 'mono',
                letterSpacing: '0.05em',
                fontSize: [1, 1, 1, 2],
                userSelect: 'none',
                textTransform: 'uppercase',
                display: ['none', 'block', 'block', 'block'],
              }}
            >
              {formatDate(date)}{' '}
            </Box>
            <Box
              sx={{
                mb: ['14px'],
                mt: ['-5px', '10px', '10px', '10px'],
                ml: ['-1px'],
                lineHeight: 'heading',
                fontFamily: 'heading',
                fontSize: [4, 5, 5, 6],
                color: color,
              }}
            >
              {title}
            </Box>
            <Box
              sx={{
                color: 'secondary',
                fontFamily: 'mono',
                letterSpacing: '0.05em',
                fontSize: [1, 1, 1, 2],
                userSelect: 'none',
                textTransform: 'uppercase',
                display: ['block', 'none', 'none', 'none'],
              }}
            >
              {formatDate(date)}{' '}
            </Box>
            <Box
              sx={{
                mt: [2],
                mb: [1],
                fontSize: [2, 2, 2, 3],
                lineHeight: 1.35,
                display: ['none', 'block', 'block', 'block'],
              }}
            >
              {summary}
            </Box>
            <Box
              sx={{
                mt: ['12px'],
                fontSize: [2, 2, 2, 3],
                userSelect: 'none',
                display: ['none', 'block', 'block', 'block'],
              }}
            >
              <Box sx={{ mb: [-1] }}>
                <LinkGroup links={links} />
              </Box>
            </Box>
          </Column>
          <Column
            start={[1, 5, 6, 6]}
            width={[4, 2, 2, 2]}
            sx={{ display: ['none', 'block', 'block'] }}
          >
            <Box
              sx={{
                textAlign: 'right',
                mt: ['-3px', '-3px', '-3px', '-1px'],
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
        <Box sx={{ display: ['initial', 'none', 'none', 'none'] }}>
          <Box sx={{ my: [3], fontSize: [2, 2, 2, 3], lineHeight: 1.35 }}>
            {summary}
          </Box>
          <Box sx={{ mt: [3], display: 'block' }}>
            <LinkGroup links={links} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

function LinkGroup({ links }) {
  return links.map((link, ix) => {
    const pad = links.length > 1 && ix < links.length - 1
    return (
      <WrappedLink key={ix} url={link.url}>
        <Box
          sx={{
            color: 'secondary',
            mr: [4, 4, 4, 5],
            pr: [0, 0, 2, 0],
            mb: [1],
            mt: [0, 0, 1],
            cursor: 'pointer',
            display: ['inline-block'],
            '@media (hover: hover) and (pointer: fine)': {
              '&:hover': {
                color: 'text',
              },
              '&:hover > #container > #arrow': {
                transform: 'rotate(45deg)',
                fill: 'primary',
              },
            },
          }}
        >
          <Box as='span' id='label' sx={{ transition: '0.15s' }}>
            {link.label}
          </Box>
          <Box id='container' as='span' sx={{ position: 'relative' }}>
            <Arrow
              id='arrow'
              sx={{
                transition: 'fill 0.15s, transform 0.15s',
                position: 'relative',
                top: '2px',
                width: 12,
                height: 12,
                ml: [1, 1, 2, 2],
                fill: 'secondary',
              }}
            />
          </Box>
        </Box>
      </WrappedLink>
    )
  })
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
