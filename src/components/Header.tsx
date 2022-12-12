import './components.scss'
import HomeIcon from '../assets/icons/home.svg'
import ArticleIcon from '../assets/icons/article.svg'
import GitHubIcon from '../assets/icons/github.svg'
import MeIcon from '../assets/icons/me.svg'
import LifeIcon from '../assets/icons/life.svg'
import { useNavigate } from 'react-router-dom'

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

  return (
    <div className="header">
      <div className="header-continer">
        <div className="left">
          <div className="index">
            <fc-bubbles click onClick={onRouter('home')}>
              <img src={HomeIcon} className="icon" />
            </fc-bubbles>
          </div>
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
