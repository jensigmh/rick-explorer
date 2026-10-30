import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App.jsx'
import { TemaProvider } from './context/TemaContext.jsx'
import { store } from './store/store.js'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <TemaProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </TemaProvider>
    </BrowserRouter>
  </StrictMode>
)
