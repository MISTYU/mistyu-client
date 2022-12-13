import './articles.scss'
import Article from './components/Item'

function Articles () {
  return (
    <div className="content articles">
      <Article title={'图解 HTTP'} desc={'读书笔记'} createdAt={'2021-09-01 14:23'} id={1}/>
    </div>
  )
}

export default Articles
