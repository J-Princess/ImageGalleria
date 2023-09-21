import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config/index";


const LoginPage = (e) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // State for handling errors
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User logged in:", user.email);
      // You can redirect the user or perform other actions after successful login
      navigate("/dashboard");
    } catch (err) {
      console.error("Error signing in:", err.message);
      setError(err.message); // Set the error message in state
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="container-fluid"
      style={{
        // background: `url(${Slid3Img}) rgba(255, 255, 255, 0.2)` ,
        // backgroundSize: "cover",
        height: "800px",
      }}
    >
      <div className="page-banner2">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-md-6 mt-5 pt-5">
            <h1 className="text-center text-secondary my-5">Sign In</h1>

            <div className="input-group flex-nowrap mt-3">
              <span
                className="input-group-text px-3"
                id="addon-wrapping"
                style={{ borderRadius: "2px 0 0 2px" }}
              >
                #
              </span>
              <input
                type="email"
                className="form-control p-3"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="on"
                required
              />
            </div>
            <div className="input-group flex-nowrap mt-4">
              <span
                className="input-group-text px-3"
                id="addon-wrapping"
                style={{ borderRadius: "2px 0 0 2px" }}
              >
                *
              </span>
              <input
                className="form-control p-3"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
              />
              <button
                onClick={togglePasswordVisibility}
                style={{
                  borderRadius: "0 2px 2px 0",
                  border: "none",
                  padding: "0 14px",
                }}
              >
                {" "}
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-3">
          <button
            type="button"
            className="btn btn-primary btn-lg align-items-center mt-5 px-5 fw-md"
            onClick={handleLogin}
          >
            Log In
          </button>
        </div>
        {error && <p style={{ color: "red", fontSize: "18px" }}>{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;

