import './articles.scss'
import Article from './components/Item'
import useMountData from '../../hooks/useMountData'
import { ArticleType } from './types'
import { useEffect, useState, useRef } from 'react'
import useBackPosition from '../../hooks/useBackPosition'

function Articles () {
  const [pageIndex, setPageIndex] = useState(1)
  const [list, hasMore] = useMountData(pageIndex) as [ArticleType[], React.MutableRefObject<boolean>]
  const scrollTopValue = useRef(0)
  const prePageIndex = useRef(1)
  // useBackPosition()
  // useEffect(() => {
  //   document.documentElement.scrollTop = Number(localStorage.getItem('ppreScrollTopre')) || 0
  // })
  const scrollCb = (e: any) => {
    if (hasMore.current && e.target.scrollingElement.scrollTop - scrollTopValue.current > 400) {
      scrollTopValue.current = e.target.scrollingElement.scrollTop
      prePageIndex.current++
      setPageIndex(prePageIndex.current)
    }
  }
  useEffect(() => {
    document.addEventListener('scroll', scrollCb)
    
    return () => {
      document.removeEventListener('scroll', scrollCb)
    }
  }, [])

  return (
    <div className='content'>
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
