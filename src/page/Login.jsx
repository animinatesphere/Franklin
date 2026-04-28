import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logos.svg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Check credentials provided by the user
    if (username === "TommyBeckyestate" && password === "Becky&Tommylove01") {
      // Simulate successful login
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      setError("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F4F8] flex flex-col items-center justify-center p-4">
      {/* Logo and Header */}
      <div className="mb-8 text-center">
        <img src={logo} alt="Logo" className="h-16 mx-auto mb-4" />
        <h1 className="text-[#014481] text-3xl font-bold">Secure Access Portal</h1>
        <p className="text-[#5C5C5C] mt-2">Enter your credentials to access the dashboard</p>
      </div>

      {/* Login Form Card */}
      <div className="bg-white w-full max-w-md rounded-xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="bg-[#014481] p-6 text-white text-center">
          <h2 className="text-xl font-semibold uppercase tracking-wider">Login</h2>
        </div>
        
        <form onSubmit={handleLogin} className="p-8 space-y-6">
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 text-red-700 text-sm animate-pulse">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-bold text-[#014481] uppercase" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4DCC78] focus:border-transparent outline-none transition-all"
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-[#014481] uppercase" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4DCC78] focus:border-transparent outline-none transition-all"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1959A6] hover:bg-[#014481] text-white font-bold py-4 rounded-lg shadow-lg transform transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>

        <div className="p-6 bg-gray-50 border-t border-gray-100 text-center">
          <Link to="/" className="text-[#014481] hover:underline text-sm font-medium">
            &larr; Back to Public Portal
          </Link>
        </div>
      </div>

      {/* Footer Info */}
      <p className="mt-8 text-xs text-[#5C5C5C] text-center">
        &copy; 2026 Franklin County Court of Common Pleas, Probate Division, Ohio<br />
        Authorized access only. All activities are monitored.
      </p>
    </div>
  );
};

export default Login;
