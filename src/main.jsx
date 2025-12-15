import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GeneralProvider from './context/GeneralProvider.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GeneralProvider>
      <App />
    </GeneralProvider>
  </StrictMode>,
)
