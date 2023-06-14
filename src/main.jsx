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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import InstructorsDetails from './Components/AllInstructors/InstructorsDetails.jsx';
import AllClasses from './AllClasses/AllClasses.jsx';
import PrivateRoute from './Components/Routes/PrivateRoute.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import SelectedClass from './Components/Dashboard/SelectedClass.jsx';
import EnrolledClass from './Components/Dashboard/EnrolledClass.jsx';
import ManageClasses from './Components/Dashboard/Admin/ManageClasses.jsx';
import ManageUsers from './Components/Dashboard/Admin/ManageUsers.jsx';
import DashHome from './Components/Dashboard/DashHome.jsx';
import PrivateAdminRoutes from './Components/Routes/PrivateAdminRoutes.jsx';
import AddClass from './Components/Dashboard/Instructors/AddClass.jsx';
import MyClasses from './Components/Dashboard/Instructors/MyClasses.jsx';
import PrivateInstructorRoutes from './Components/Routes/PrivateInstructorRoute.jsx';
import Checkout from './Components/Dashboard/Checkout.jsx';
import PaymentHistory from './Components/Dashboard/PaymentHistory.jsx';

const queryClient = new QueryClient()

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
        path: "/classes",
        element: <AllClasses></AllClasses>,
      },
      {
        path: "/instructors",
        element: <InstructorsDetails></InstructorsDetails>,
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
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "dashhome",
        element: <DashHome></DashHome>
      },
      // Admin Section 
      {
        path: "manageclasses",
        element: <PrivateAdminRoutes><ManageClasses></ManageClasses></PrivateAdminRoutes>
      },
      {
        path: "manageusers",
        element: <PrivateAdminRoutes><ManageUsers></ManageUsers></PrivateAdminRoutes>
      },
      // Instructor section 
      {
        path: "addclass",
        element: <PrivateInstructorRoutes><AddClass></AddClass></PrivateInstructorRoutes>
      },
      {
        path: "myclasses",
        element: <PrivateInstructorRoutes><MyClasses></MyClasses></PrivateInstructorRoutes>
      },
      // Students Section 
      {
        path: "selectedclass",
        element: <SelectedClass></SelectedClass>
      },
      {
        path: "enrolledclass",
        element: <EnrolledClass></EnrolledClass>
      },
      {
        path: "payment",
        element: <Checkout></Checkout>
      },
      {
        path: "paymenthistory",
        element: <PaymentHistory></PaymentHistory>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <HelmetProvider>
      <Authprovider>
        <QueryClientProvider client={queryClient}>
          <div className=' w-full font-serif'>
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </Authprovider>
    </HelmetProvider>
  </React.StrictMode>,

)
