import axios from "axios"
import { useEffect, useState } from "react"
import { ArticleType } from "../views/Articles/types"

function useMountData () {
  const [list, setList] = useState<ArticleType[]>([])
  useEffect(() => {
    axios.get('/api/articles/articles').then(res => {
      setList(res.data.data.list)
    })
  }, [])

  return [list, setList]
}

export default useMountData
