import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Main from "./Components/Main";
import Jobs from "./Pages/Jobs";
import Postcategory from "./Pages/Postcategory";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoryPage from "./Pages/CategoryPage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Loginuser from "./Pages/Loginuser";
import Forgetpassword from "./Pages/Forgetpassword";
import Totaljob from "./Pages/Totaljob";
import ApplyJobModal from "./Pages/ApplyJobModal";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  { path: "/:categories", element: <CategoryPage /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/loginuser", element: <Loginuser /> },
  { path: "/total", element: <Totaljob /> },
  { path: "/appel", element: <ApplyJobModal /> },
  { path: "/forget", element: <Forgetpassword /> },
  { path: "/postcat", element: <Postcategory /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
