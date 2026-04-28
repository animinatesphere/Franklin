import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import Dashboard from "./page/Dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
