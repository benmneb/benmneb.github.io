import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Card from '../card'
import { data } from './data'

function List() {
  const { id } = useParams()

  return (
    <ul className="card-list">
      {data.map(card => (
        <Card key={card.id} isSelected={card.id === id} {...card} />
      ))}
    </ul>
  )
}

export default function CardList() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id?" element={<List />} />
      </Routes>
    </BrowserRouter>
  )
}
