
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Components/Main";

import Jobs from './Pages/Jobs';

function App() {
  return (
    <div className="App">
    <Router>
      
      <Main />
      
      <Routes>
      <Route path="/jobs" element={<Jobs />} />

       
        
      </Routes>
    </Router>
  </div>
  );
}

export default App;
