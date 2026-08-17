import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/bootstrap.min.css'
import './css/fontawesome.css'
import './css/templatemo-tale-seo-agency.css'
import './css/owl.css'
import './css/animate.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
