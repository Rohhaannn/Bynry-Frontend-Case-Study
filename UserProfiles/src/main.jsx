import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import ProfileList from './components/ProfileList.jsx'
import Admin from './components/Admin.jsx'
import SearchUser from './components/SearchUser.jsx'
import Contact from './components/Contact.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/profilelist' element={<ProfileList/>}/>
      <Route path='/searchuser' element={<SearchUser/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
