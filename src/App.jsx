import Navbar from "./components/Navbar"
import LandingPage from "./components/LandingPage"
import { Routes, Route } from "react-router-dom"
import LoginForm from "./components/authentication/LoginForm"
import Home from "./components/Home"

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={ <Home /> }/>
      <Route path="/login" element={ <LoginForm /> }/>
      </Routes>
    </>
  )
}

export default App
