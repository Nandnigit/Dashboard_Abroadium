import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'

const route = createBrowserRouter([ {
   path:"/",
   element:<Layout/>,
   children:[
   {
    path:"",
    element:<App/>
   }
   ]
   
   
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
    {/* <App /> */}
  </React.StrictMode>,
)
