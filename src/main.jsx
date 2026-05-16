import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Version-gated data reset
const DATA_VERSION = 'lupindo-v3'
if (localStorage.getItem('_lss_version') !== DATA_VERSION) {
  Object.keys(localStorage)
    .filter(k => k.startsWith('lss_'))
    .forEach(k => localStorage.removeItem(k))
  localStorage.setItem('_lss_version', DATA_VERSION)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
