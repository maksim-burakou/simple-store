import { useMemo } from 'react'

export const getClassNames = (map = {}, baseClassName) =>
  Object.keys(map)
    .map((key) => (map[key] ? `${baseClassName}${key}` : ''))
    .join(' ')

export const useClassNames = (map = {}, baseClassName = '') => {
  const className = useMemo(() => {
    const classNames = getClassNames(map, baseClassName)
    if (baseClassName) {
      return `${baseClassName} ${classNames}`
    }

    return classNames
  }, [map, baseClassName])

  return className
}
