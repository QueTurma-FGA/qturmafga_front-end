import { Routes, Route } from 'react-router-dom'
// import { Home } from './pages/Home'
import Home from './pages/Home'

const Router = () => {
  return (
    <Routes>
      <Route path='/' exact element={<Home/>} />
    </Routes>
  )
}

export { Router }