
import { Outlet } from 'react-router'
import './App.css'
import NavItems from './Components/NavItems'
import Footer from './Components/Footer'

function App() {
  

  return (
    <>
       <NavItems/>
        <Outlet />
        <Footer/>
    </>
  )
}

export default App
