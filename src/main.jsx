import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Login from "./Login.jsx";
import Signup from "./assets/Signup.jsx";
import firebaseConfig from "./firebasConfiq.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ForgetPassword from "./ForgetPassword.jsx";
import Home from "./Home.jsx";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: (
  //     <div>
  //       <h1>Hello ChatApp Users</h1>
  //     </div>
  //   ),
  // },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/ForgetPassword",
    element: <ForgetPassword />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
