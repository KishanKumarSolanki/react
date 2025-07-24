import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './assets/components/Navbar.jsx'
import Slider from './assets/components/Slider.jsx'
import Card1 from './assets/components/Card1.jsx'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar />
    <Slider />
    <Card1 />
  </StrictMode>,
)
