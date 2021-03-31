import { useState } from 'react'
import { Box } from 'theme-ui'
import { Row, Column } from '@carbonplan/components'
import Sidebar from './sidebar'
import List from './list'

const initFilter = {
  all: true,
  article: true,
  tool: true,
  comment: true,
  publication: true,
  dataset: true,
}

const initSort = {
  date: true,
  title: false,
}

const Main = () => {
  const [filter, setFilter] = useState(initFilter)
  const [sort, setSort] = useState(initSort)

  return (
    <Row>
      <Column start={[1, 2]} width={[6, 3]}>
        <Sidebar
          filter={filter}
          setFilter={setFilter}
          sort={sort}
          setSort={setSort}
        />
      </Column>
      <Column
        start={[5]}
        width={[1]}
        sx={{ display: ['none', 'none', 'flex'], justifyContent: 'center' }}
      >
        <Box
          sx={{
            position: 'fixed',
            bg: 'muted',
            width: '1px',
            mt: [4, 5, 6, 7],
            height: 'calc(100% - 152px)',
          }}
        ></Box>
      </Column>
      <Column start={[1, 6]} width={[6, 6]}>
        <List filter={filter} sort={sort} />
      </Column>
    </Row>
  )
}

export default Main
