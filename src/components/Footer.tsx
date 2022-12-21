import icp from '../assets/icons/icp.svg'
import copyright from '../assets/icons/copyright.svg'

function Footer () {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="icp">
          <div>
            <img className="icon" src={icp} alt="" />
          </div>
          <div>赣ICP备2022011372号-1</div>
        </div>
        <div className="copyright">
          <div>
            <img className="icon" src={copyright} alt="" />
          </div>
          <div>2021-2023 @mistyu</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
