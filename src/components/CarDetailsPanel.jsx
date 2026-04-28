import { useNavigate } from "react-router-dom";
import cars from "../data/cars";
import { saveCar } from "../utils/storage";

function CarDetailsPanel({ car, close, setSelectedCar }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "520px",
        height: "100vh",
        background: "#020617",
        display: "flex",
        color: "#fff",
        zIndex: 1000,
        boxShadow: "-10px 0 30px rgba(0,0,0,0.6)"
      }}
    >

      {/* LEFT SIDE - CAR LIST */}
      <div style={{
        width: "38%",
        borderRight: "1px solid #1e293b",
        padding: "15px",
        overflowY: "auto"
      }}>
        <button
          onClick={close}
          style={{
            background: "#ef4444",
            border: "none",
            color: "#fff",
            padding: "6px 12px",
            marginBottom: "15px",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Close
        </button>

        {cars.map((c) => (
          <div
            key={c.id}
            onClick={() => setSelectedCar(c)}
            style={{
              padding: "10px",
              marginBottom: "8px",
              cursor: "pointer",
              background: c.id === car.id ? "#ef4444" : "transparent",
              borderRadius: "8px",
              transition: "0.2s"
            }}
          >
            {c.name}
          </div>
        ))}
      </div>

      {/* RIGHT SIDE - DETAILS */}
      <div style={{
        width: "62%",
        padding: "20px",
        overflowY: "auto"
      }}>

        {/* IMAGE */}
        <img
          src={`/src/assets/images/cars/${car.image}`}
          style={{
            width: "100%",
            borderRadius: "12px",
            marginBottom: "15px"
          }}
        />

        {/* TITLE */}
        <h2 style={{ marginBottom: "5px" }}>{car.name}</h2>

        <p style={{
          color: "#ef4444",
          fontWeight: "700",
          marginBottom: "10px"
        }}>
          {car.displayPrice}
        </p>

        {/* DESCRIPTION */}
        <p style={{
          color: "#aaa",
          marginBottom: "15px",
          lineHeight: "1.5"
        }}>
          {car.description}
        </p>

        {/* SPECS */}
        <h3 style={{ marginTop: "15px" }}>Specifications</h3>
        <ul style={{ color: "#ccc" }}>
          {car.specs.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>

        {/* FEATURES */}
        <h3 style={{ marginTop: "15px" }}>Features</h3>
        <ul style={{ color: "#ccc" }}>
          {car.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
        <button onClick={() => navigate(`/build/${car.id}`)}>
  Customize Build
</button>

        {/* ACTIONS */}
        <div style={{ marginTop: "20px" }}>

          {/* CONTACT */}
          <a
            href={`mailto:carmania@gmail.com?subject=Interested in ${car.name}&body=Hi, I am interested in the ${car.name}. Please share more details.`}
            style={{
              display: "block",
              textAlign: "center",
              background: "#ef4444",
              padding: "12px",
              borderRadius: "8px",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "600",
              marginBottom: "10px",
              boxShadow: "0 0 10px #ef4444"
            }}
          >
            Contact Dealer
          </a>

          {/* SAVE */}
          <button
            onClick={() => saveCar(car)}
            style={{
              width: "100%",
              background: "#111827",
              padding: "10px",
              border: "1px solid #ef4444",
              borderRadius: "8px",
              color: "#ef4444",
              cursor: "pointer"
            }}
          >
            ❤️ Save Car
          </button>

        </div>

      </div>
    </div>
  );
}

export default CarDetailsPanel;