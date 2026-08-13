import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CurrencyConvert  from './pages/CurrencyConverter'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <CurrencyConvert/>
  </StrictMode>,
)
