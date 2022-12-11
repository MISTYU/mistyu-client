import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bytemd/dist/index.css'
import 'highlight.js/styles/vs.css'
import './assets/css/highlight.css'
import { FcBubbles } from 'fancy-components'
new FcBubbles()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
