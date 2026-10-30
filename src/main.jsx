import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { GuardadosProvider } from './context/GuardadosContext.jsx'
import { TemaProvider } from './context/TemaContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <TemaProvider>
        <GuardadosProvider>
          <App />
        </GuardadosProvider>
      </TemaProvider>
    </BrowserRouter>
  </StrictMode>
)