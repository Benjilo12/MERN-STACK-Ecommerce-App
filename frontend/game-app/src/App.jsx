import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import Home from "./Pages/Home";
import EmailVerificationPage from "./Pages/EmailVerificationPage";

function App() {
  return (
    <div className=" bg-gray-900  overflow-hidden text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
