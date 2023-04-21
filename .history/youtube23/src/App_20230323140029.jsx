import Navbar from "./components/navbar/Navbar"
import React from "react"
import Home from "./pages/home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
function App() {


  
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
