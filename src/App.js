import React from 'react'
import NotesHomePage from './Components/NotesHomePage'
import About from './Components/About'
import { BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<NotesHomePage/>}/>
      <Route exact path="/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
