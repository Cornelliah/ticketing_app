import './App.css'
import { ModerationProvider } from './store/ModerationContext'

function App() {
  

  return (
    <ModerationProvider>
      <div className="app-container">
        <h1>Système de Modération</h1>
        <p>Branche : feature/setup - Prêt pour le développement de la fonctionnalité 1.</p>
      </div>
    </ModerationProvider>
  )
}

export default App
