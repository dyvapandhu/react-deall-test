import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookmarkPage from "./pages/Bookmark";
import DashboardPage from "./pages/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/bookmark" element={<BookmarkPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
