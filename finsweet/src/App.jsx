import './App.scss'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './modules/Home'
import ServicePage from './modules/ServicePage'
import CompanyPage from './modules/CompanyPage'
import CareerPage from './modules/CareerPage'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={
          <>
            <Home/>
          </>
        }/>
         <Route path='/service' element={
          <>
            <ServicePage/>
          </>
        }/>
        <Route path='/company' element={
          <>
            <CompanyPage/>
          </>
        }/>
        <Route path='/career' element={
          <>
            <CareerPage/>
          </>
        }/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
