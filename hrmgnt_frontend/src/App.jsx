import Header_component from "./components/Header_component"
import Footer_component from "./components/Footer_components"

import Home from "./pages/home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import UserHome from "./pages/UserHome"
import Register from "./pages/Register"

import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <div>
      <Header_component></Header_component>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/userHome" element={<UserHome />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer_component></Footer_component>
    </div>
  )

}

export default App
