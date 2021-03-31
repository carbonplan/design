import { Box, Text, Styled, Divider } from 'theme-ui'
import { Tag, Row, Column } from '@carbonplan/components'

const Sidebar = ({ filter, sort, setFilter, setSort }) => {
  const toggleFilter = (value) => {
    if (value === 'all') {
      setFilter({
        all: true,
        article: true,
        tool: true,
        comment: true,
        publication: true,
        dataset: true,
      })
    } else {
      setFilter({
        all: false,
        article: value === 'article',
        tool: value === 'tool',
        comment: value === 'comment',
        publication: value === 'publication',
        dataset: value === 'dataset',
      })
    }
  }

  const toggleSort = (value) => {
    setSort({
      date: value === 'date',
      title: value === 'title',
    })
  }
  return (
    <Box
      sx={{
        width: '100%',
        mb: [0],
        pb: [0, 0, 3],
        position: ['initial', 'initial', 'sticky'],
        top: [56],
        height: ['fit-content', 'fit-content', 'calc(100vh - 56px)'],
        backgroundColor: 'background',
      }}
    >
      <Box
        as='h1'
        variant='styles.h1'
        sx={{ pt: [5, 6, 7, 8], mt: [0, 0, 0, 0], mb: [5, 6, 7, 8] }}
      >
        Research
      </Box>
      <Box sx={{ pb: [2, 3, 0] }}>
        <Styled.p>
          Articles, tools, and commentary on carbon removal and climate
          solutions.
        </Styled.p>
      </Box>
      <Box sx={{ mt: [0, 0, '40px'], mb: [0, 0, '40px'] }}>
        <Divider sx={{ mr: [0, 0, 0], mt: [0, 0, 4], mb: [0, 0, 0] }} />
      </Box>
      <Row
        columns={[1, 3]}
        sx={{
          mt: [4],
          display: ['none', 'none', 'grid'],
        }}
      >
        <Column start={[1]} width={[3]}>
          <Box>
            <Text
              sx={{
                fontFamily: 'mono',
                letterSpacing: 'mono',
                fontSize: [1, 1, 1, 2],
                color: 'secondary',
                userSelect: 'none',
              }}
            >
              FILTER BY
            </Text>
            <Box sx={{ mt: [3] }}>
              <Tag
                onClick={() => toggleFilter('all')}
                value={filter.all}
                sx={{ mr: [2] }}
              >
                All
              </Tag>
              <Tag
                onClick={() => toggleFilter('article')}
                value={filter.article}
                sx={{ mr: [2] }}
              >
                Article
              </Tag>
              <Tag
                onClick={() => toggleFilter('tool')}
                value={filter.tool}
                sx={{ mr: [2] }}
              >
                Tool
              </Tag>
              <Tag
                onClick={() => toggleFilter('comment')}
                value={filter.comment}
                label='Comment'
                sx={{ mr: [2] }}
              >
                Comment
              </Tag>
            </Box>
            <Box sx={{ mt: [1] }}>
              <Tag
                onClick={() => toggleFilter('publication')}
                value={filter.publication}
                sx={{ mr: [2] }}
              >
                Publication
              </Tag>
              <Tag
                onClick={() => toggleFilter('dataset')}
                value={filter.dataset}
                sx={{ mr: [2] }}
              >
                Dataset
              </Tag>
            </Box>
          </Box>
          <Box
            sx={{
              mt: [4],
              display: ['none', 'none', 'block'],
            }}
          >
            <Text
              sx={{
                fontFamily: 'mono',
                letterSpacing: 'mono',
                fontSize: [1, 1, 1, 2],
                color: 'secondary',
                userSelect: 'none',
              }}
            >
              SORT BY
            </Text>
            <Box sx={{ mt: [3], maxWidth: '250px' }}>
              <Tag
                onClick={() => toggleSort('date')}
                value={sort.date}
                sx={{ mr: [2] }}
              >
                Date
              </Tag>
              <Tag
                onClick={() => toggleSort('title')}
                value={sort.title}
                label='Title'
                sx={{ mr: [2] }}
              >
                Title
              </Tag>
            </Box>
          </Box>
        </Column>
      </Row>
    </Box>
  )
}

export default Sidebar
