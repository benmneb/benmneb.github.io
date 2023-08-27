import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Card from '../card'
import { data } from './data'

function List() {
  return (
    <main className="grid grid-cols-3 gap-4">
      {data.map(card => (
        <Card key={card.id} {...card} />
      ))}
    </main>
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
