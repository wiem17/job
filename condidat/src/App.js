import React from "react";
import Main from "./Components/Main";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import Forgetpassword from "./Pages/Forgetpassword";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          exact
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/"
          exact
          element={
            <PrivateRoute>
              <Main />
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
