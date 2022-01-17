import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'

const Home = React.lazy(() => import('../features/home'))
const Canvas = React.lazy(() => import('../features/draw'))
const App = React.lazy(() => import('../App'))

const Router: React.VFC = () => {
  return (
    <React.Suspense fallback={<div>LOADING...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout page={<Home />} />} />
          <Route path="/canvas/:hash" element={<Layout page={<Canvas />} />} />
          <Route path="/canvas" element={<Layout page={<Canvas />} />} />
          <Route path="/app" element={<Layout page={<App />} />} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  )
}

export default Router
