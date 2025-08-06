import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import InvestmentProducts from './pages/InvestmentProducts'
import MarketInsights from './pages/MarketInsights'
import PortfolioTracker from './pages/PortfolioTracker'
import Calculator from './pages/Calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/investment-products" element={<InvestmentProducts />} />
          <Route path="/portfolio-tracker" element={<PortfolioTracker />} />
          <Route path="/market-insights" element={<MarketInsights />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
