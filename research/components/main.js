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
      <Column start={[1, 5]} width={[6, 7]} sx={{ mt: [0, 0, '13px', '27px'] }}>
        <List filter={filter} sort={sort} />
      </Column>
    </Row>
  )
}

export default Main
