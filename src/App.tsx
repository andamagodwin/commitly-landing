
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import AuthCallback from './pages/AuthCallback'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth-callback" element={<AuthCallback />} />
    </Routes>
  )
}

export default App
