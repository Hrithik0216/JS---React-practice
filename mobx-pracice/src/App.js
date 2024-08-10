import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Settings from "./Pages/Settings";
import Users from "./Pages/Users";
import Err from "./Pages/Err";
import About from "./Pages/About";
import Nav from "./Components/Nav";
import Posts from "./Pages/Posts";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:username" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:postNumber" element={<Posts />} />
          <Route path="*" element={<Err />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
