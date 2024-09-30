import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { Layout } from "./pages/Layout/Index";
import Summary from "./pages/Profile/Summary";
import AboutMe from "./pages/Profile/AboutMe";
import Project from "./pages/Project/Project";
import Skill from "./pages/Skill";
import Contact from "./pages/Contact";

const App = () =>{

  return (
    <>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<Summary/>} />
          <Route path="/aboutMe" element={<AboutMe/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/skill" element={<Skill/>} />
          <Route path="/works" element={<AboutMe/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<Home/>} /> 
        </Routes>
      </Layout>
      </BrowserRouter>
    </>
  )
}

export default App