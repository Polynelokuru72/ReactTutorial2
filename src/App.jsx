import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import UserManagement from "./pages/UserManagement";
import Books from "./pages/Books/Books";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/Books" element={<Books />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
