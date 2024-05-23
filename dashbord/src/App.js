import React from "react";
import Main from "./Components/Main";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import Forgetpassword from "./Pages/Forgetpassword";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import Postjob from "./Pages/Postjob";
import Listjob from "./Pages/Listjob";
import Editjob from "./Pages/Editjob";
import CondidatAccepted from "./Pages/CondidatAccepted";
import Totaljob from "./Pages/Totaljob";
import SendEmail from "./Pages/SendEmail";
import Postcondidat from "./Pages/Postcondidat";
import Profile from "./Pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/admin-dashboard"
          exact
          element={
            <PrivateRoute>
              <Main />
            </PrivateRoute>
          }
        />
         <Route
          path="/postlist"
          exact
          element={
            <PrivateRoute>
              <Listjob />
            </PrivateRoute>
          }
        />
         <Route
          path="/post"
          exact
          element={
            <PrivateRoute>
              <Postjob />
            </PrivateRoute>
          }
        />
         <Route
          path="/:id"
          exact
          element={
            <PrivateRoute>
              <Editjob />
            </PrivateRoute>
          }
        />
         <Route
          path="/sendemail"
          exact
          element={
            <PrivateRoute>
              <SendEmail />
            </PrivateRoute>
          }
        />
         <Route
          path="/last"
          exact
          element={
            <PrivateRoute>
              <Listjob />
            </PrivateRoute>
          }
        />
         <Route
          path="/total"
          exact
          element={
            <PrivateRoute>
              <Totaljob />
            </PrivateRoute>
          }
        />
         <Route
          path="/postcondidat"
          exact
          element={
            <PrivateRoute>
              <Postcondidat />
            </PrivateRoute>
          }
        />
         <Route
          path="/condidataccepted"
          exact
          element={
            <PrivateRoute>
              <CondidatAccepted />
            </PrivateRoute>
          }
        />
         <Route
          path="/profile"
          exact
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
         
         <Route
          path="/forget"
          exact
          element={
            <PublicRoute>
              <Forgetpassword />
            </PublicRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
