
import { Outlet } from 'react-router'
import './App.css'
import NavItems from './Components/NavItems'
import Footer from './Components/Footer'

function App() {
  

  return (
    <>
       <NavItems/>
       <div className='min-height: 100vh'>
        
        <Outlet />
       </div>
        <Footer/>
    </>
  )
}

export default App
