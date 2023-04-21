import Navbar from "./components/navbar/Navbar"
import React from "react"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: </Home/>,
    },
  ]);

  return (
    <div>
    <RouterProvider router={router} />
    </div>
  );
};

export default App;
