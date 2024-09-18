import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { Layout } from "./pages/Layout/Index";

const App = () =>{

  return (
    <>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} /> 
        </Routes>
      </Layout>
      </BrowserRouter>
    </>
  )
}

export default App