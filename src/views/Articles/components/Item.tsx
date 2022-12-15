import { ArticleType } from "../types"
import { useNavigate } from 'react-router-dom'

function Article (props: ArticleType) {
  const { title, desc, createdAt, id, tag, updatedAt } = props
  const navigate = useNavigate()
  return (
    <div className="item" onClick={() => {navigate(`article/${id}`)}}>
      <div>
        <div className="item-title">{ title }</div>
        { desc ? <div className="item-desc">{ desc }</div> : null }
      </div>
      <div className="item-time">
        <div>{ tag }</div>
        <div>
          <span className="update-time">updatedAt：{ updatedAt }</span>
          <span>createdAt：{ createdAt }</span>
        </div>
      </div>
    </div>
  )
}

export default Article
