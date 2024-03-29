import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Layout from './Layout.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/AboutUs/About.jsx'
import Contact from './components/ContactUs/Contact.jsx'
import Github,{ githubInfoLoader } from './components/Github/Github.jsx'

// we will make the router prop for RouterProvider
// createBrowserRouter consists of array of objects of diffterent paths 
// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"/about",
//         element:<About/>
//       },
//       {
//         path:"/contact",
//         element:<Contact/>
//       },
//       {
//         path:"github",
//         element:<Github/>
//       }
//     ]
//   }
// ])

{/* <Route path='user/:userid' element={<User />} />   to fetch the user by id */}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
