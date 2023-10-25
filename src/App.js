import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SearchPage from './pages/SearchPage';
import DetailPage from "./pages/DetailPage";
import './App.css';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/:imdbID" element={<DetailPage />} />
        </Routes>
    </Router>
  );
}

export default App;
