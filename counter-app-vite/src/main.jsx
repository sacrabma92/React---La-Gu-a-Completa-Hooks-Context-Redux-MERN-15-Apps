import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles.css'

import { FirstApp } from './FirstApp'
import { CounterApp } from './CounterApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HelloWorldApp /> */}
    <FirstApp title="Hola Carlos" subtitle="Soy un subtitulo" />
    {/* <CounterApp value={1992} /> */}
  </React.StrictMode>
)