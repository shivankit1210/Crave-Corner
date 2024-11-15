
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import Coffee from './components/Category/Coffee'
import Breakfast from './components/Category/Breakfast'
import Delivery from './components/Category/Delivery'
import Dining from './components/Category/Dining'
import Dinner from './components/Category/Dinner'
import Drinks from './components/Category/Drinks'
function App() {
 return(
  <>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home />} />

    <Route path='/coffee' element={<Coffee />} />
    <Route path='/breakfast' element={<Breakfast />} />
    <Route path='/home-delivery' element={<Delivery />} />
    <Route path='/book-table' element={<Dining/>} />
    <Route path='/dinner' element={<Dinner />} />
    <Route path='/drinks' element={<Drinks />} />
  </Routes>
  {/* <MainPage /> */}
  
  </>
 )
}

export default App
