import { Layout } from '../../components'
import Main from '../../research/components/main'
import { Guide } from '@carbonplan/components'

const Index = () => {
  return (
    <Layout
      title={'research / carbonplan'}
      description={
        'Articles, tools, and commentary on carbon removal and climate solutions.'
      }
      card={'https://images.carbonplan.org/social/research.png'}
      footer={false}
      links={'local'}
      metadata={'POSTS: 10'}
    >
      <Guide />
      <Main />
    </Layout>
  )
}

export default Index
