import './components.scss'
import HomeIcon from '../assets/icons/home.svg'
import ArticleIcon from '../assets/icons/article.svg'
import GitHubIcon from '../assets/icons/github.svg'
import MeIcon from '../assets/icons/me.svg'
import LifeIcon from '../assets/icons/life.svg'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { KeycodeEvent } from '../types'

function Header () {
  const navigate = useNavigate()

  const goGitHub = () => {
    window.open('https://github.com/mistyu', '__blank')
  }

  const onRouter = (route: string) => {
    return () => {
      navigate(`/${route}`)
    }
  }
  const [keyword, setKeyword] = useState('')
  // const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setKeyword(e.target.value)
  // }
  const handKeyDown = (event: Event) => {
    if ((event as KeycodeEvent).keyCode === 13) {
      console.log(keyword, (event.target as any).value)
      // 发送请求
    }
  }
  useEffect(() => {
    const ref = document.querySelector('fc-typing-input')
    ref!.addEventListener('keydown', handKeyDown)
  }, [])
  useEffect(() => () => {
    const ref = document.querySelector('fc-typing-input')
    ref!.removeEventListener('keydown', handKeyDown)
  })
  return (
    <div className="header">
      <div className="header-continer">
        <div className="left">
          <div className="home">
            <fc-bubbles click onClick={onRouter('home')}>
              <img src={HomeIcon} className="icon" />
            </fc-bubbles>
          </div>
        </div>
        <div className='center'>
          <fc-typing-input placeholder="功能开发中..." height="30px" /* onInput={handleInput} */ />

        </div>
        <div className="right">
          <div className="article">
            <fc-bubbles click onClick={onRouter('')}>
              <img src={ArticleIcon} className="icon" />
            </fc-bubbles>
          </div>
          <div className="life" onClick={onRouter('life')}>
            <fc-bubbles click>
              <img src={LifeIcon} className="icon" />
            </fc-bubbles>
          </div>
          <div className="me">
            <fc-bubbles click onClick={onRouter('me')}>
              <img src={MeIcon} className="icon" />
            </fc-bubbles>
          </div>
          <div className="github">
            <fc-bubbles click onClick={goGitHub}>
              <img src={GitHubIcon} className="icon" />
            </fc-bubbles>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
