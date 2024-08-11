import "./App.css";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Users from "./Pages/Users";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Err from "./Pages/Err";
import Settings from "./Pages/Settings";
import Posts from "./Pages/Posts";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/" element={<Users />} />
          <Route path="/users/:username" element={<Users />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="*" element={<Err />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
