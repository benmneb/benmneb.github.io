import { clsx } from 'clsx'
import { PanInfo, motion } from 'framer-motion'
import { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CardProps } from '../card-list/data'
import { useScrollConstraints } from '../hooks/use-scroll-constraints'

const openSpring = { type: 'spring', stiffness: 200, damping: 18 }
const closeSpring = { type: 'spring', stiffness: 300, damping: 30 }
const dismissDistance = 150

export default function Card(props: CardProps) {
  const navigate = useNavigate()
  const { id } = useParams()
  const isSelected = props.id === id
  const cardRef = useRef<HTMLDivElement>(null)
  const constraints = useScrollConstraints({
    element: cardRef,
    enabled: isSelected,
  })

  function handleDragEnd(
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) {
    if (!isSelected) return

    if (info.offset.y > dismissDistance) {
      navigate('/')
    }
  }

  return (
    <div className={clsx('h-48')}>
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
        layout
        initial={{ borderRadius: 16 }}
        transition={isSelected ? openSpring : closeSpring}
        drag={isSelected && 'y'}
        dragConstraints={constraints}
        dragSnapToOrigin
        onDragEnd={handleDragEnd}
      />
    </div>
  )
}
