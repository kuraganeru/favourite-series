import React from 'react'
import ReactDOM from 'react-dom/client'
import FavouriteSeriesGrid from './FavouriteSeriesGrid.jsx'
import './css/index.css'
import '@picocss/pico/'
import "./css/custom.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavouriteSeriesGrid />
  </React.StrictMode>,
)
