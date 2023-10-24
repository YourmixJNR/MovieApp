import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SearchPage from './pages/SearchPage';
import DetailPage from "./pages/DetailPage";
import './App.css';

function App() {
  return (
    <Router>
      <div className="">
        <div className="">
        <Header />
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/:imdbID" element={<DetailPage />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
