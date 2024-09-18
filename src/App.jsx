import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { Layout } from "./pages/Layout/Index";
import Summary from "./pages/Profile/Summary";

const App = () =>{

  return (
    <>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profil-summary" element={<Summary/>} />
          <Route path="*" element={<Home/>} /> 
        </Routes>
      </Layout>
      </BrowserRouter>
    </>
  )
}

export default App