import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Professors from './pages/Professors'

const Router = () => {
  return (
    <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/professors' element={<Professors/>} />
    </Routes>
  )
}

export { Router }