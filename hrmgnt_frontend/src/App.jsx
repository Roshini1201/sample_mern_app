import Header_component from "./components/Header_component"
import Footer_component from "./components/Footer_components"

import Home from "./pages/home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <div>
      <Header_component></Header_component>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      <Footer_component></Footer_component>
    </div>
  )
  
}

export default App
