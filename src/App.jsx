import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import BlogDetails from "./components/BlogDetails"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import NotFound from "./components/NotFound"
import Create from "./components/Create"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


function App() {

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    <ToastContainer position='top-center' autoClose={9000} />
    </div>
  );
}

export default App
