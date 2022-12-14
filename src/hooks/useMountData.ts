import axios from "axios"
import { useEffect, useState, useRef } from "react"
import { ArticleType } from "../views/Articles/types"

function useMountData (pageIndex: number) {
  const [list, setList] = useState<ArticleType[]>([])
  const hasMore = useRef(true)
  useEffect(() => {
    console.log('useMountData')
    axios.get(`/api/articles/articles?pageIndex=${pageIndex}`).then(res => {
      setList([...res.data.data.list, {
        id: 15,
        tag: 'a',
        title: 'xxx',
        desc: '222',
        updatedAt: '2222',
        createdAt: '3333'
      }, {
        id: 5,
        tag: 'a',
        title: 'xxx',
        desc: '222',
        updatedAt: '2222',
        createdAt: '3333'
      }, {
        id: 6,
        tag: 'a',
        title: 'xxx',
        desc: '222',
        updatedAt: '2222',
        createdAt: '3333'
      }, {
        id: 7,
        tag: 'a',
        title: 'xxx',
        desc: '222',
        updatedAt: '2222',
        createdAt: '3333'
      }, {
        id: 8,
        tag: 'a',
        title: 'xxx',
        desc: '222',
        updatedAt: '2222',
        createdAt: '3333'
      }, {
        id: 9,
        tag: 'a',
        title: 'xxx',
        desc: '222',
        updatedAt: '2222',
        createdAt: '3333'
      }, {
        id: 10,
        tag: 'a',
        title: 'xxx',
        desc: '222',
        updatedAt: '2222',
        createdAt: '3333'
      }, {
        id: 11,
        tag: 'a',
        title: 'xxx',
        desc: '222',
        updatedAt: '2222',
        createdAt: '3333'
      }, {
        id: 12,
        tag: 'a',
        title: 'xxx',
        desc: '222',
        updatedAt: '2222',
        createdAt: '3333'
      }, {
        id: 13,
        tag: 'a',
        title: 'xxx',
        desc: '222',
        updatedAt: '2222',
        createdAt: '3333'
      }])
      hasMore.current = res.data.data.hasMore
    })
    
  }, [pageIndex])

  return [list, hasMore]
}

export default useMountData
