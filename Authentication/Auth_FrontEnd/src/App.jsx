import { useState } from 'react'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import './App.css'

function App() {
  const [view, setView] = useState('signup')

  return (
    <div className="app-page">
      {view === 'signup' ? (
        <SignUp onSuccess={() => setView('signin')} />
      ) : (
        <SignIn onBack={() => setView('signup')} />
      )}
    </div>
  )
}
export default App
