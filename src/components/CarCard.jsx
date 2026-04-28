import { useState } from "react";
import { saveCar, removeCar, isSaved } from "../utils/storage";
import Toast from "./Toast";

function CarCard({ car, onClick }) {
  const [saved, setSaved] = useState(() => isSaved(car.id));
  const [toast, setToast] = useState({ show: false, message: "" });

  const toggleSave = (e) => {
    e.stopPropagation();

    if (saved) {
      removeCar(car.id);
      setToast({ show: true, message: "Removed from garage" });
    } else {
      saveCar(car);
      setToast({ show: true, message: "Saved to garage ❤️" });
    }

    setSaved(!saved);
  };

  return (
    <>
      <div
        style={{
          width: "260px",
          borderRadius: "16px",
          overflow: "hidden",
          background: "#0f172a",
          color: "#fff",
          boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
          transition: "0.3s",
          cursor: "pointer",
          position: "relative"
        }}
        onClick={() => onClick(car)}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 0 20px #ef4444";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.5)";
        }}
      >

        {/* ❤️ HEART BUTTON */}
        <button
          onClick={toggleSave}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "rgba(0,0,0,0.6)",
            border: "none",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            fontSize: "18px",
            color: saved ? "#ef4444" : "#aaa",
            cursor: "pointer",
            transition: "0.2s"
          }}
        >
          ♥
        </button>

        {/* IMAGE */}
        <img
          src={`/assets/images/cars/${car.image}`}
          alt={car.name}
          style={{
            width: "100%",
            height: "160px",
            objectFit: "cover"
          }}
        />

        {/* CONTENT */}
        <div style={{ padding: "15px" }}>
          <h3 style={{ marginBottom: "5px" }}>{car.name}</h3>

          <p style={{
            color: "#ef4444",
            fontWeight: "bold",
            marginBottom: "5px"
          }}>
            {car.displayPrice}
          </p>

          <p style={{
            color: "#aaa",
            fontSize: "14px"
          }}>
            {car.brand} • {car.type}
          </p>

          <button
            style={{
              marginTop: "12px",
              padding: "8px 12px",
              background: "#ef4444",
              border: "none",
              borderRadius: "8px",
              color: "#fff",
              cursor: "pointer",
              width: "100%",
              boxShadow: "0 0 10px #ef4444"
            }}
          >
            View Build
          </button>
        </div>
      </div>

      {/* 🔔 TOAST */}
      <Toast
        message={toast.message}
        show={toast.show}
        setShow={(val) =>
          setToast((prev) => ({ ...prev, show: val }))
        }
      />
    </>
  );
}

export default CarCard;