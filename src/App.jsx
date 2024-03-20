import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./component/Navbar.jsx"
import Index from "./pages/Index.jsx"
import About from "./pages/About.jsx"
import Gallery from "./pages/Gallery.jsx"
import Contect from "./pages/Contect.jsx"
import Fqa from "./pages/Fqa.jsx"





function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contect" element={<Contect />} />
        <Route path="/fqa" element={<Fqa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
