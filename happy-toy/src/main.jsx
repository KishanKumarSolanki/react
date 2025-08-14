import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Slider from './components/Slider.jsx'
import Card1 from './components/Card1.jsx'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar />
    <Slider />
    <Card1 />
  </StrictMode>,
)