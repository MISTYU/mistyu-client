import './articles.scss'
import Article from './components/Item'
import useMountData from '../../hooks/useMountData'
import { ArticleType } from './types'
import { useEffect, useState, useRef } from 'react'

function Articles () {
  const [pageIndex, setPageIndex] = useState(0)
  const [list, hasMore] = useMountData(pageIndex) as [ArticleType[], React.MutableRefObject<boolean>]
  const scrollTopValue = useRef(0)
  const scrollCb = (e: any) => {
    if (hasMore.current && e.target.scrollTop - scrollTopValue.current > 400) {
      scrollTopValue.current = e.target.scrollTop
      setPageIndex(pageIndex + 1)
    }
  }
  useEffect(() => {
    let containerRef = document.querySelector('.container')
    containerRef!.addEventListener('scroll', scrollCb)
    
    return () => {
      containerRef!.removeEventListener('scroll', scrollCb)
      containerRef = null
    }
  }, [])

  return (
    <div className='content'>
      <div>{JSON.stringify(hasMore)}</div>
      <div className="articles">
        { 
          (list as ArticleType[]).map
            (article =>
              <Article
                key={article.id}
                title={article.title}
                desc={article.desc}
                createdAt={article.createdAt}
                tag={article.tag}
                id={article.id}
              />
            )
        }
      </div>
    </div>
  )
}

export default Articles
