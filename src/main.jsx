import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fontsource/geist-sans"
import './index.css'
import App from './App.jsx'
import "@fontsource/outfit"
import "@fontsource/roboto"
import "@fontsource/jetbrains-mono"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
