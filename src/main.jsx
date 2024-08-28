import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GitaContextProvider from './context/GitaContext'

createRoot(document.getElementById('root')).render(
  <GitaContextProvider>
    <App />
  </GitaContextProvider>, 
)
