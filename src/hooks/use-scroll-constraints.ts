import { RefObject, useEffect, useState } from 'react'

interface Constraints {
  top: number
  bottom: number
}

interface Props {
  element: RefObject<HTMLDivElement>
  enabled: boolean
}

/**
 * Calculate the top/bottom scroll constraints of a full-screen element vs the viewport
 */
export function useScrollConstraints({ element, enabled }: Props) {
  const [constraints, setConstraints] = useState<Constraints>({
    top: 0,
    bottom: 0,
  })

  useEffect(() => {
    if (!enabled) return

    const el = element.current!
    const viewportHeight = window.innerHeight
    const contentTop = el.offsetTop
    const contentHeight = el.offsetHeight
    const scrollableViewport = viewportHeight - contentTop * 2
    const top = Math.min(scrollableViewport - contentHeight, 0)

    setConstraints({ top, bottom: 0 })
  }, [enabled, element])

  return constraints
}
