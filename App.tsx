import './App.css'



import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Basket from './components/Basket'
import Contact from './components/Contact'
import Fav from './components/Fav'
import NotFint from './components/NotFint'
import Login from './components/Login'
import CreateAcconts from './components/CreateAcconts'
import MoreDetal from './components/MoreDetal'


function App() {

  return (

    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fav' element={<Fav />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFint />} />
        <Route path='/login' element={<Login />} />
        <Route path='/createaccounts' element={<CreateAcconts />} />
        <Route path='/:id' element={<MoreDetal />} />
      </Routes>
    </div>

  )
}
export default App
