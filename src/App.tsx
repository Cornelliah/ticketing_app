import { useState } from 'react'
import './App.css'
import { ModerationProvider } from './store/ModerationContext'
import { ImageList } from './components/ImageList'
import { TicketList } from './components/TicketList'

function App() {
  const [view, setView] = useState<'user' | 'moderator'>('user');

  return (
    <ModerationProvider>
      <div className="app-container">
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', borderBottom: '1px solid #eee', marginBottom: '20px' }}>
          <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Système de Modération</h1>
          <div className="view-toggle">
            <button 
              onClick={() => setView('user')} 
              style={{ marginRight: '10px', backgroundColor: view === 'user' ? '#1890ff' : '#f0f0f0', color: view === 'user' ? 'white' : 'black', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}
            >
              Vue Utilisateur
            </button>
            <button 
              onClick={() => setView('moderator')}
              style={{ backgroundColor: view === 'moderator' ? '#1890ff' : '#f0f0f0', color: view === 'moderator' ? 'white' : 'black', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}
            >
              Vue Modérateur
            </button>
          </div>
        </header>
        
        {view === 'user' ? <ImageList /> : <TicketList />}
      </div>
    </ModerationProvider>
  )
}

export default App
