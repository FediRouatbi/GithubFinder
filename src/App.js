import Navbar from "./components/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import GithubContext from "./context/GithubContext";
function App() {
  return (
    <GithubContext>
      <BrowserRouter>
        <div className=" w-11/12 mx-auto">
          <Navbar />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </GithubContext>
  );
}

export default App;
