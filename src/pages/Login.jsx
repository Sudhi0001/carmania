import { useState, useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);

  const handleLogin = () => {
    if (!name.trim()) {
      setError("Name is required");
      return;
    }

    setError("");
    loginUser({ name });
    navigate("/dashboard"); // 🔥 better UX
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#020617",
      color: "#fff"
    }}>
      <div style={{
        background: "#0f172a",
        padding: "35px",
        borderRadius: "14px",
        width: "300px",
        boxShadow: "0 0 25px rgba(0,0,0,0.5)"
      }}>

        <h2 style={{
          marginBottom: "10px",
          letterSpacing: "1px"
        }}>
          Login
        </h2>

        <p style={{
          color: "#888",
          fontSize: "14px",
          marginBottom: "15px"
        }}>
          Enter your name to continue
        </p>

        <input
          placeholder="Your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError("");
          }}
          style={{
            padding: "10px",
            width: "100%",
            borderRadius: "8px",
            border: "1px solid #222",
            outline: "none",
            background: "#020617",
            color: "#fff"
          }}
        />

        {/* ❌ Error Message */}
        {error && (
          <p style={{
            color: "#ef4444",
            fontSize: "13px",
            marginTop: "8px"
          }}>
            {error}
          </p>
        )}

        <button
          onClick={handleLogin}
          style={{
            marginTop: "15px",
            width: "100%",
            background: "#ef4444",
            border: "none",
            padding: "10px",
            borderRadius: "8px",
            color: "#fff",
            cursor: "pointer",
            fontWeight: "600",
            boxShadow: "0 0 10px #ef4444"
          }}
        >
          Continue
        </button>

      </div>
    </div>
  );
}

export default Login;