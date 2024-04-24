import React from "react";
import Main from "./Components/Main";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />

        <Route path="/condidat-dashboard" exact element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
