import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import React from "react"
import { BrowserRouter } from 'react-router-dom'
import Navigators from './functional/navigators.jsx'

createRoot(document.getElementById('root')).render(
<React.StrictMode>
<App></App>
  
<BrowserRouter>
{/* <Navigators></Navigators> */}
</BrowserRouter>
</React.StrictMode>
)
