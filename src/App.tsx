import Navbar from "./components/Navbar";
import './App.css'
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PostPage from "./pages/PostPage";
import ThemeProviderMain from "./contexts/ThemeContext";
import Error404 from "./pages/Error404";
import Login from "./pages/Login";
import { LoginContext } from "./contexts/LoginContext";
import { useContext } from "react";

function App() {
  const { isLoggedIn } = useContext(LoginContext) as LoginType;

  return (
    <ThemeProviderMain>
      <div className="App">
        <Navbar />
        <Routes>

          {isLoggedIn ?
            <Route path="/tsn" element={<Index />} />
            :
            <Route path="/tsn" element={<Login />} />
          }

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
