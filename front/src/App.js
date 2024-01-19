import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/login_page/LoginPage";
import MainPage from "./components/main_page/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login_page" element={<LoginPage />} />
        <Route path="main_page" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
