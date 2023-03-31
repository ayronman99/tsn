import Navbar from "./components/Navbar";
import './App.css'
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PostPage from "./pages/PostPage";
import ThemeProviderMain from "./contexts/ThemeContext";
import Error404 from "./pages/Error404";


function App() {

  return (
    <ThemeProviderMain>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/tsn" element={<Index />} />
          <Route path="/tsn/about" element={<About />} />
          <Route path="/tsn/contact" element={<Contact />} />
          <Route path="/tsn/p/:postId" element={<PostPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </ThemeProviderMain>

  )
}

export default App
