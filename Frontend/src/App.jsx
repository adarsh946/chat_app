import "./App.css";

import Home from "../src/pages/home/Home";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/signUp/SignUp";
import LogIn from "./pages/logIn/LogIn";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
