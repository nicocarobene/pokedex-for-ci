import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'

const root= createRoot(document.getElementById('app'))

root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)