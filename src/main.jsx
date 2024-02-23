import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
// import BreakingNew from './Components/BreakingNew/BreakingNew.jsx';
import Home from './Components/Pages/Home.jsx';
import Middle from './Components/Pages/Layout/Middle.jsx';
import Login from './Components/User/Login.jsx';
import Registration from './Components/User/Registration.jsx';
import ContextApi from './Components/ContextApi/ContextApi.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [

      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../public/data/categories.json'),
        children: [
          {
            path: "/:id",
            element: <Middle></Middle>
          }
        ]
      }
      // {
      //   path : '/:id',
      //   element : <Middle></Middle>,
      //   loader : ()=> fetch ('../public/data/news.json')
      // }
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: "/registration",
    element: <Registration></Registration>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <ContextApi>
      <RouterProvider router={router}></RouterProvider>
    </ContextApi>
  </React.StrictMode>,
)
