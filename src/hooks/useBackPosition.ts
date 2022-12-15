import { useEffect } from "react"
let scrollTop = 0
function useBackPosition () {
  
  const scrollCb = (e: any) => {
    scrollTop = e.target.scrollingElement.scrollTop
    
  }
  useEffect(() => {
    document.documentElement.scrollTop =  Number(sessionStorage.getItem('preScrollTop')) || 0
    
    document.addEventListener('scroll', scrollCb)
    return () => {
      document.removeEventListener('scroll', scrollCb)
      sessionStorage.setItem('preScrollTop', scrollTop + '')
    }
  }, [])
}

export default useBackPosition
