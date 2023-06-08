import { Outlet } from "react-router-dom"
import Navbar from "./Components/Header/Navbar"
import Footer from "./Components/Footer/Footer"

function App() {

  return (
    <>
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
