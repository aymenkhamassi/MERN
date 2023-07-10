import './App.css'
import { Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import ShowOne from './components/ShowOne'
import Update from './components/Update'
function App () {
  return (
    <div className='App'>
      <h1>TV SHOWS 🎬</h1>

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/shows/:id' element={<ShowOne />} />
        <Route path='/shows/edit/:id' element={<Update />} />
       
      </Routes>
    </div>
  )
}

export default App


