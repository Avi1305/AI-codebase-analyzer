import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import Repositories from "./pages/Repositories";
import Files from "./pages/Files";
import Security from "./pages/Security";
import Dependencies from "./pages/Dependencies";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/repositories" element={<Repositories />} />
        <Route path="/files" element={<Files />} />
        <Route path="/security" element={<Security />} />
        <Route path="/dependencies" element={<Dependencies />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}
