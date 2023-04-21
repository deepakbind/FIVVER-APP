import React from 'react'
import Navbar from './components/navbar/Navbar';
import {createBrowserRouter,
RouterProvider,Outlet
} from "react-router-dom";
import Home from "./pages/home/Home";
function App() {

  const Layout = () => {
    return (
      d
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
  ]);

  return (
    <div>
    <RouterProvider router={router} />
    </div>
  );
};

export default App;