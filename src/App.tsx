import CardList from './card-list'
import Header from './header'
import ReloadPrompt from './reload-prompt'

export default function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <CardList />
      <ReloadPrompt />
    </div>
  )
}
