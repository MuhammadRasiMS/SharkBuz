import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './Layout'
import Home from "./Pages/Home/HomePage";
import ContestPage from "./Pages/Contests/ContestPage";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contests" element={<ContestPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
