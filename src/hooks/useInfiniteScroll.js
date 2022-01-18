import { useState, useEffect } from 'react'

const OFFSET_FOR_LOADING_HEIGHT = 100

export const useInfiniteScroll = (callback) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleScroll = () => {
    const value = Math.abs(
      window.innerHeight +
        document.documentElement.scrollTop -
        document.documentElement.offsetHeight
    )

    if (value <= OFFSET_FOR_LOADING_HEIGHT) setIsLoading(true)
    return
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isLoading) return
    callback()
  }, [isLoading])

  return [isLoading, setIsLoading]
}
