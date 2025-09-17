import { Routes, Route } from "react-router";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
    </Routes>
  )
}

export default App