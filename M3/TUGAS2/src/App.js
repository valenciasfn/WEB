import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Menu}/>
          <Route path="/about" Component={About}/>
          <Route path="/contact" Component={Contact}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;