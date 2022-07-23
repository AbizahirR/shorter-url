import MainContainer from "./routes/MainContainer"
import Redirect from "./routes/Redirect"
import { Routes, Route } from "react-router-dom"

function App() {
  
  return ( 
      <Routes>
        <Route path="/*" element={<MainContainer />} />
        <Route path="/r/:shortedUrl" element={<Redirect />} />
      </Routes>
  )
}

export default App


