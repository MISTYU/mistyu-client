import { useEffect } from 'react'

const useClickOutside = (selector: string): boolean => {
  let isClickOutside = false
  let elementRef: HTMLElement | null = null
  const handler = (e: MouseEvent) => {
    if (elementRef) {
      if (elementRef.contains(e.target as HTMLElement)) {
        isClickOutside = true
      } else {
        isClickOutside = false
      }
    }
  }

  useEffect(() => {
    elementRef = document.querySelector(selector)
    document.addEventListener('click', handler)
  }, [])
  // 解绑事件
  useEffect(() => () => {
    document.removeEventListener('click', handler)
  }, [])

  return isClickOutside
}

export default useClickOutside
