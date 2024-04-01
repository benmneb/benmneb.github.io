import { motion, useInvertedScale } from 'framer-motion'
import { CardProps } from '../card-list/data'
import { closeSpring } from './constants'

export default function Image({
  id,
  isSelected,
  pointOfInterest = 0,
  backgroundColor,
}: CardProps) {
  const inverted = useInvertedScale()

  return (
    <motion.div
      className="card-image-container"
      style={{ ...inverted, backgroundColor, originX: 0, originY: 0 }}
    >
      <motion.img
        className="card-image"
        src={`images/${id}.jpg`}
        alt=""
        initial={false}
        animate={
          isSelected ? { x: -20, y: -20 } : { x: -pointOfInterest, y: 0 }
        }
        transition={closeSpring}
      />
    </motion.div>
  )
}
