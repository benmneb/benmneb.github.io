import { clsx } from 'clsx'
import { motion, useMotionValue } from 'framer-motion'
import { memo, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { CardProps } from '../card-list/data'
import {
  useInvertedBorderRadius,
  useScrollConstraints,
  useWheelScroll,
} from '../hooks'
import { closeSpring, openSpring } from './constants'

const dismissDistance = 150

const Card = memo(({ isSelected, ...props }: CardProps) => {
  const navigate = useNavigate()

  const containerRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const constraints = useScrollConstraints({
    element: cardRef,
    enabled: isSelected,
  })

  const y = useMotionValue(0)
  const zIndex = useMotionValue(isSelected ? 2 : 0)

  // Maintain the visual border radius when we perform the layoutTransition by inverting its scaleX/Y
  const inverted = useInvertedBorderRadius(20)

  function checkSwipeToDismiss() {
    if (y.get() > dismissDistance) navigate('/')
  }

  function checkZIndex(latest) {
    if (isSelected) {
      zIndex.set(2)
    } else if (!isSelected && latest.scaleX < 1.01) {
      zIndex.set(0)
    }
  }

  useWheelScroll(containerRef, y, constraints, checkSwipeToDismiss, isSelected)

  return (
    <div className={clsx('h-48')} ref={containerRef}>
      <motion.div
        initial={false}
        animate={{ opacity: isSelected ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={clsx(
          'pointer-events-none fixed inset-0 bg-white backdrop-blur-sm bg-opacity-50',
          isSelected && 'pointer-events-auto',
        )}
        onClick={() => navigate('/')}
      />
      <motion.div
        ref={cardRef}
        className={clsx(
          'h-full rounded-2xl',
          props.backgroundColor,
          isSelected ? 'inset-0 fixed w-1/2 mx-auto h-auto my-12' : 'w-full',
        )}
        onClick={() => navigate(`/${props.id}`)}
        style={{ ...inverted, zIndex, y }}
        layoutTransition={isSelected ? openSpring : closeSpring}
        drag={isSelected ? 'y' : false}
        dragConstraints={constraints}
        onDrag={checkSwipeToDismiss}
        onUpdate={checkZIndex}
      />
    </div>
  )
})

export default Card
