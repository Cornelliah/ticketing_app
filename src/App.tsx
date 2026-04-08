import './App.css'
import { ModerationProvider } from './store/ModerationContext'
import { ImageList } from './components/ImageList'

function App() {
  

  return (
    <ModerationProvider>
      <div className="app-container">
        <h1>Système de Modération</h1>
        <ImageList />
      </div>
    </ModerationProvider>
  )
}

export default App
