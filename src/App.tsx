import CardList from './card-list'
import Header from './header'
import ReloadPrompt from './reload-prompt'

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <CardList />
      <ReloadPrompt />
    </div>
  )
}
