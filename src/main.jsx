import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Privacy from './pages/Privacy.jsx'
import Termini from './pages/Termini.jsx'
import Cookie from './pages/Cookie.jsx'
import GrazieDownload from './pages/GrazieDownload.jsx'
import GrazieAcquisto from './pages/GrazieAcquisto.jsx'

const routes = {
  '/privacy': Privacy,
  '/termini': Termini,
  '/cookie': Cookie,
  '/grazie-download': GrazieDownload,
  '/grazie-acquisto': GrazieAcquisto,
}

const path = window.location.pathname
const Page = routes[path] || App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
