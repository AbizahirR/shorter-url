import MainContainer from "./routes/MainContainer"
import Redirect from "./routes/Redirect"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainContainer />} />
        <Route path="r/:shortedUrl" element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


