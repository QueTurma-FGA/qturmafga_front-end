import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import './global.css'

const App = () => {
  return (
    <BrowserRouter >
      <Router />
    </BrowserRouter >
  )
}

export default App