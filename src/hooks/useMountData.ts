import axios from "axios"
import { useEffect, useState, useRef } from "react"
import { ArticleType } from "../views/Articles/types"

function useMountData (pageIndex: number) {
  const [list, setList] = useState<ArticleType[]>([])
  const hasMore = useRef(true)
  useEffect(() => {
    axios.get(`/api/articles/articles?pageIndex=${pageIndex}`).then(res => {
      setList([...list, ...res.data.data.list])
      hasMore.current = res.data.data.hasMore
    })
    
  }, [pageIndex])

  return [list, hasMore]
}

export default useMountData
