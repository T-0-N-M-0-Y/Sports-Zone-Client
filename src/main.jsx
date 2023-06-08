import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Authprovider from './Provider/AuthProvider.jsx';
import Login from './Components/LoginAndSignUpPage/Login.jsx';
import SignUp from './Components/LoginAndSignUpPage/SignUp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=' w-full font-serif'>
    <React.StrictMode>
      <HelmetProvider>
        <Authprovider>
          <div>
            <RouterProvider router={router} />
          </div>
        </Authprovider>
      </HelmetProvider>
    </React.StrictMode>,
  </div>
)