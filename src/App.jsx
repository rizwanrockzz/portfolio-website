import { Routes, Route } from "react-router";
import Portfolio from "./components/Portfolio";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App