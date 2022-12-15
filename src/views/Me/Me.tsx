import breaks from '@bytemd/plugin-breaks'
import frontmatter from '@bytemd/plugin-frontmatter'
import gfm from '@bytemd/plugin-gfm'
import { Viewer } from '@bytemd/react'
import './me.scss'
import content from './me.md?raw'

const plugins = [
  breaks(),
  gfm(),
  frontmatter()
]

function Me () {
  return (
    <div className="content me">
      <div className="me-content">
        <Viewer
          value={ content }
          plugins={ plugins }
        />
      </div>
    </div>
  )
}

export default Me
