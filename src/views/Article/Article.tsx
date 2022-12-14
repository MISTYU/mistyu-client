
import './article.scss'
import gfm from '@bytemd/plugin-gfm'
import { Editor, Viewer } from '@bytemd/react'
import frontmatter from '@bytemd/plugin-frontmatter'
import highlight from '@bytemd/plugin-highlight'
import breaks from '@bytemd/plugin-breaks'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import '../../assets/css/markdown.scss'

const plugins = [
  breaks(),
  gfm(),
  frontmatter(),
  highlight()
  // Add more plugins here
]


function Article() {
  const [content, setContent] = useState('')
  const [updatedAt, setUpdatedAt] = useState('')
  const { id } = useParams()
  useEffect(() => {
    axios.get(`/api/articles/article/${id}`).then(res => {
      setContent(res.data.data.content)
      setUpdatedAt(res.data.data.updatedAt)
    })
  })
  return (
    <>
      <div className="detail">
        <Viewer
          value={content}
          plugins={plugins}
        />
        {/* <Editor
          value={value}
          plugins={plugins}
          onChange={(v) => {
            setValue(v)
          }}
        /> */}
        <div className="time">
          更新于：<span>{ updatedAt }</span>
        </div>
      </div>
      
    </>
    
    
  )
}

export default Article
