import MainContainer from "./routes/MainContainer"
import Redirect from "./routes/Redirect"
import { Routes, Route } from "react-router-dom"

function App() {
  
  return ( 
      <Routes>
        <Route path="r/:shortedUrl" element={<Redirect />} />
        <Route path="*" element={<MainContainer />} />
      </Routes>
  )
}

export default App


