import { motion, useInvertedScale } from 'framer-motion'
import * as React from 'react'

const Content = React.memo(() => {
  const inverted = useInvertedScale()

  return (
    <motion.div
      className="content-container"
      style={{ ...inverted, originY: 0, originX: 0 }}
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, numquam
      natus? Autem quisquam, aliquam libero quos ipsum nostrum totam ducimus
      dolor cum, deleniti sint fugit iste ut minus voluptatum cupiditate?
      Dolorem doloribus voluptatem ex iure delectus molestiae a id esse nostrum
      fuga modi voluptates molestias atque cupiditate beatae minima libero,
      labore debitis repellendus cum eum eius ad enim sit? Autem! Cum ea vitae
      ducimus quod dicta porro id debitis nisi quo optio quas, ab excepturi
      alias voluptates quisquam temporibus recusandae! Ducimus unde provident
      illum mollitia doloribus, voluptatem est error molestiae. Ducimus sunt
      placeat modi necessitatibus delectus quo, quaerat aut veritatis totam
      aspernatur repudiandae laborum, magnam corrupti voluptate, assumenda
      voluptates veniam officiis sequi et esse asperiores! Eos repellat veniam
      numquam similique. Nesciunt aperiam eos sapiente obcaecati nisi dicta
      magnam maiores explicabo. Aut sit enim mollitia aliquid. Architecto
      impedit amet eos. Quibusdam optio repellendus tempore quidem velit quaerat
      nesciunt reiciendis sequi. Quo?
    </motion.div>
  )
})

export default Content
