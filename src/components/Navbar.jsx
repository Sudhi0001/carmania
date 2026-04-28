import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function Navbar() {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  const { user, logoutUser } = context || {};

  const handleLogout = () => {
    logoutUser();
    navigate("/login"); // 🔥 better flow
  };

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 30px",
      background: "#020617",
      color: "#fff",
      borderBottom: "1px solid #111"
    }}>
      
      {/* LOGO */}
      <h2 style={{
        color: "#ef4444",
        fontFamily: "Poppins, sans-serif",
        fontWeight: "700",
        letterSpacing: "3px",
        cursor: "pointer"
      }}
      onClick={() => navigate("/")}
      >
        CARMANIA
      </h2>

      {/* NAV LINKS */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "25px"
      }}>
        <Link to="/" style={{ color: "#ccc", textDecoration: "none" }}>
          Home
        </Link>

        <Link to="/dashboard" style={{ color: "#ccc", textDecoration: "none" }}>
          Garage
        </Link>

        {/* USER SECTION */}
        {user ? (
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "15px"
          }}>

            {/* USER NAME */}
            <span style={{
              color: "#ef4444",
              fontWeight: "600"
            }}>
              {user.name}
            </span>

            {/* LOGOUT */}
            <button
              onClick={handleLogout}
              style={{
                background: "#ef4444",
                border: "none",
                padding: "6px 12px",
                borderRadius: "6px",
                color: "#fff",
                cursor: "pointer",
                fontSize: "13px",
                boxShadow: "0 0 10px #ef4444"
              }}
            >
              Logout
            </button>

          </div>
        ) : (
          <Link
            to="/login"
            style={{
              background: "#ef4444",
              padding: "6px 12px",
              borderRadius: "6px",
              color: "#fff",
              textDecoration: "none",
              fontSize: "13px"
            }}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;