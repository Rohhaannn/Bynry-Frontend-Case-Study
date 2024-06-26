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
import { Provider } from 'react-redux'
import store from './redux/store/store.js'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/profilelist' element={<ProfileList/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
