import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Professors from './pages/Professors'
import DetailsProfessors from './pages/DetailsProfessors'

const Router = () => {
  return (
    <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path="/professors/:discipline" element={<Professors />} />
      <Route path='/details' element={<DetailsProfessors/>} />
    </Routes>
  )
}

export { Router }