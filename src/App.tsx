import Navbar from "./components/Navbar";
import './App.css'
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PostPage from "./pages/PostPage";
import ThemeProviderMain from "./contexts/ThemeContext";

function App() {

  return (
    <ThemeProviderMain>      
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/tsn" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/p/:postId" element={<PostPage />} />
          </Routes>
        </div>      
    </ThemeProviderMain>

  )
}

export default App