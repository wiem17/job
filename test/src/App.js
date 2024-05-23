import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Main from "./Components/Main";
import Jobs from "./Pages/Jobs";
import Postcategory from "./Pages/Postcategory";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CategoryPage from "./Pages/CategoryPage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Loginuser from "./Pages/Loginuser";
import Forgetpassword from "./Pages/Forgetpassword";
import Totaljob from "./Pages/Totaljob";
import ApplyJobModal from "./Pages/ApplyJobModal";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={
           
              <Main />
           
          }
        />

        <Route
          path="/jobs"
          exact
          element={
           
              <Jobs />
           
          }
        />
         <Route
          path="/:categories"
          exact
          element={
          
              <CategoryPage />
           
          }
        />
         <Route
          path="/register"
          exact
          element={
           
              <Register />
           
          }
        />
         <Route
          path="/login"
          exact
          element={
           
              <Login />
           
          }
        />
         <Route
          path="/loginuser"
          exact
          element={
           
              <Loginuser />
           
          }
        />
         <Route
          path="/total"
          exact
          element={
           
              <Totaljob />
           
          }
        />
         <Route
          path="/appel"
          exact
          element={
           
              <ApplyJobModal />
           
          }
        />
         <Route
          path="/forget"
          exact
          element={
           
              <Forgetpassword />
           
          }
        />
         <Route
          path="/postcat"
          exact
          element={
           
              <Postcategory />
           
          }
        />
         
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
