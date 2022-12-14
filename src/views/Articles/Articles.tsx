import './articles.scss'
import Article from './components/Item'
import useMountData from '../../hooks/useMountData'
import { ArticleType } from './types'

function Articles () {

  const [list, setList] = useMountData()
  return (
    <div className="content articles">
      { 
        (list as ArticleType[]).map
          (article =>
            <Article
              key={article.id}
              title={article.title}
              desc={article.desc}
              createdAt={article.createdAt}
              id={article.id}
            />
          )
      }
      
    </div>
  )
}

export default Articles
