import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './css/index.css'
import App from './pages/App.jsx'
import TeamMaker from './pages/TeamMaker.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <TeamMaker />
    </BrowserRouter>
  </StrictMode>,
)
