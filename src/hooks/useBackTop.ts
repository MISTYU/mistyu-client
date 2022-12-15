import { useEffect } from "react"

function useBackTop () {
  useEffect(() => {
    document.documentElement.scrollTop = 0
  }, [])
}

export default useBackTop
