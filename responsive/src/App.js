import './App.css';
import Navbar from "./components/Navbar/index.js";
import Projects from "./components/Projects/index.js";
import HomePage from "./components/HomePage/index.js";

function App() {
  return (
    <div className="container">
      <Navbar />
      <HomePage />
      <Projects />
    </div>
  );
}

export default App;