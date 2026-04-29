import './App.scss'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './modules/Home'
import ServicePage from './modules/ServicePage'
import CompanyPage from './modules/CompanyPage'
import CareerPage from './modules/CareerPage'
import Navbar from './components/common/Navbar/Navbar'
import BlogPage from './modules/BlogPage'
import ContactUs from './modules/ContactUs'
import Footer from './components/common/Footer/Footer'
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy'
import TeamTemplatePage from "./modules/TeamTemplatePage"
import InnerBlogPage from './modules/InnerBlogPage'
import InnerCareerPage from "./modules/InnerCareerPage"
import AdminPage from './modules/AdminPage'

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
        <Route path='/career/:id' element={
          <>
            <InnerCareerPage/>
          </>
        }/>
        <Route path='/blog' element={
          <>
            <BlogPage/>
          </>
        }/>
        <Route path='/blog/:id' element={
          <>
            <InnerBlogPage/>
          </>
        }/>
        <Route path='/blog_preview/:id' element={
          <>
            <BlogPage/>
          </>
        }/>
        <Route path='/contact_us' element={
          <>
            <ContactUs/>
          </>
        }/>
        <Route path='/privacy_policy' element={
          <>
            <PrivacyPolicy/>
          </>
        }/>
        <Route path='/team/:id' element={
          <>
            <TeamTemplatePage/>
          </>
        }/>
        <Route path='/admin' element={
          <>
            <AdminPage/>
          </>
        }/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  )
}

export default App
