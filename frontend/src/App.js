import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import AjouterPoste from "./Pages/AjouterPoste";
import Poste from "./Pages/Poste";
import CategoryPage from "./Pages/CategoryPage";
import AdminDashboard from "./Pages/AdminDashboard";
import EditPoste from "./Pages/EditPoste";
import Condidat from './Pages/Condidat';
import CondidatHome from './Pages/CondidatHome';
import CondidatAccepter from './Pages/CondidatAccepter';
import SendEmail from './Pages/SendEmail';

function App() {
  return (
    <div className="App">
    <Router>
      
      <Navigation />
      <Routes>
      <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/ajouterposte" element={<AjouterPoste />} />
        <Route path="/poste/:id"element={<Poste />} />
        <Route path="/category/:categories" element={<CategoryPage />} />
        <Route path="/dashbord" element={<AdminDashboard />} />
        <Route path="/poste/po/:id/edit" element={<EditPoste />} />
        <Route path="/condidat" element={<Condidat />} />
        <Route path="/condidathome" element={<CondidatHome />} />
        <Route path="/condidataccepter" element={<CondidatAccepter />} />
        <Route path="/sendemail" element={<SendEmail />} />
        
      </Routes>
    </Router>
  </div>
  );
}

export default App;
