import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./Components/Main";
import Postjob from "./Pages/Postjob";
import Listjob from "./Pages/Listjob";
import Editjob from "./Pages/Editjob";
import CondidatAccepted from "./Pages/CondidatAccepted";
import Totaljob from "./Pages/Totaljob";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SendEmail from "./Pages/SendEmail";
import Postcondidat from "./Pages/Postcondidat";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
const router = createBrowserRouter([
  {
    path: "/admin-dashboard",
    element: <Main />,
  },
  {
    path: "/post",
    element: <Postjob />,
  },
  {
    path: "/postlist",
    element: <Listjob />,
  },
  {
    path: "/:id",
    element: <Editjob />,
  },

  {
    path: "/sendemail",
    element: <SendEmail />,
  },
  {
    path: "/last",
    element: <Listjob />,
  },
  { path: "/total", element: <Totaljob /> },
  { path: "/postcondidat", element: <Postcondidat /> },
  { path: "/condidataccepted", element: <CondidatAccepted /> },
  { path: "/", element: <Login /> },
  { path: "/profile", element: <Profile /> },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
