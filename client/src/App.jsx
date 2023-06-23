import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './Layout'
import HomePage from "./Pages/HomePage/HomePage";
import ContestPage from "./Pages/ContestsPage/ContestPage";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import CategorySelectPage from "./Pages/CategorySelectPage/CategorySelectPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import WinnersPage from "./Pages/WinnersPage/WinnersPage";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contests" element={<ContestPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/category-select/:id" element={<CategorySelectPage />} />
          <Route path="/winners" element={< WinnersPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App
