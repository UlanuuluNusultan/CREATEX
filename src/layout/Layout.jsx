import { Outlet } from "react-router-dom"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import Hero11 from "../components/Hero11/Hero11.jsx";

const Layout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Hero11/>
        <Footer/>
    </div>
  )
}

export default Layout