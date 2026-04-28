import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import cars from "../data/cars";
import { saveCar } from "../utils/storage";

function BuildPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [color, setColor] = useState(null);
  const [wheels, setWheels] = useState("Standard");
  const [interior, setInterior] = useState("Standard");

  const car = cars.find((c) => String(c.id) === String(id));

  if (!car) {
    return <h2 style={{ color: "#fff" }}>Car not found</h2>;
  }

  if (color === null && car.colors?.[0]) {
    setColor(car.colors[0]);
  }

  // ✅ FIXED PRICE HANDLING
  const basePrice =
    typeof car.price === "string"
      ? parseInt(car.price.replace(/\D/g, ""))
      : car.price || 0;

  const extraCost =
    (color?.name !== car.colors?.[0]?.name ? 50000 : 0) +
    (wheels === "Sport" ? 80000 : 0) +
    (interior === "Luxury" ? 100000 : 0);

  const finalPrice = basePrice + extraCost;

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#020617",
        color: "#fff",
      }}
    >
      {/* LEFT SIDE */}
      <div
        style={{
          width: "40%",
          padding: "30px",
          borderRight: "1px solid #1e293b",
        }}
      >
        <button
          onClick={() => navigate(-1)}
          style={{
            marginBottom: "20px",
            background: "none",
            border: "1px solid #333",
            color: "#aaa",
            padding: "6px 12px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          ← Back
        </button>

        <h2>{car.name}</h2>

        {/* COLOR */}
        <div style={{ marginTop: "20px" }}>
          <h3>Color</h3>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {(car.colors || []).map((c) => (
              <div
                key={c.name}
                onClick={() => setColor(c)}
                title={c.name}
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background: c.value,
                  cursor: "pointer",
                  border:
                    color?.name === c.name
                      ? "3px solid #ef4444"
                      : "2px solid #333",
                  boxShadow:
                    color?.name === c.name
                      ? "0 0 10px #ef4444"
                      : "none",
                  transition: "0.2s",
                }}
              />
            ))}
          </div>

          <p style={{ marginTop: "8px", color: "#aaa" }}>
            Selected: {color?.name}
          </p>
        </div>

        {/* WHEELS */}
        <div style={{ marginTop: "20px" }}>
          <h3>Wheels</h3>
          {["Standard", "Sport"].map((w) => (
            <button
              key={w}
              onClick={() => setWheels(w)}
              style={{
                display: "block",
                margin: "6px 0",
                padding: "10px",
                width: "100%",
                background: wheels === w ? "#ef4444" : "#111",
                border: "none",
                color: "#fff",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              {w}
            </button>
          ))}
        </div>

        {/* INTERIOR */}
        <div style={{ marginTop: "20px" }}>
          <h3>Interior</h3>
          {["Standard", "Luxury"].map((i) => (
            <button
              key={i}
              onClick={() => setInterior(i)}
              style={{
                display: "block",
                margin: "6px 0",
                padding: "10px",
                width: "100%",
                background: interior === i ? "#ef4444" : "#111",
                border: "none",
                color: "#fff",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              {i}
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        style={{
          width: "60%",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <img
          src={`/assets/images/cars/${car.image}`}
          style={{
            width: "100%",
            borderRadius: "12px",
            marginBottom: "20px",
            transition: "0.3s",
            filter:
              color?.name === "Black"
                ? "brightness(0.7)"
                : color?.name === "White"
                ? "brightness(1.2)"
                : "none",
          }}
        />

        <h1>{car.name}</h1>

        <p style={{ color: "#aaa" }}>
          {color?.name} • {wheels} • {interior}
        </p>

        <h2 style={{ color: "#ef4444" }}>
          ₹{finalPrice.toLocaleString()}
        </h2>

        {/* ACTIONS */}
        <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
          <button
            onClick={() =>
              saveCar({
                ...car,
                price: finalPrice,
                custom: {
                  color: color?.name,
                  wheels,
                  interior,
                },
                displayPrice: `₹${finalPrice.toLocaleString()}`,
              })
            }
            style={{
              flex: 1,
              background: "#111",
              border: "1px solid #ef4444",
              padding: "12px",
              color: "#ef4444",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            ❤️ Save Build
          </button>

          <a
            href={`mailto:carmania@gmail.com?subject=Custom Build ${car.name}&body=Hi,%0D%0A%0D%0AI am interested in the following build:%0D%0A%0D%0ACar: ${car.name}%0D%0AColor: ${color?.name}%0D%0AWheels: ${wheels}%0D%0AInterior: ${interior}%0D%0APrice: ₹${finalPrice.toLocaleString()}%0D%0A%0D%0APlease share more details.`}
            style={{
              flex: 1,
              background: "#ef4444",
              padding: "12px",
              borderRadius: "8px",
              color: "#fff",
              textAlign: "center",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Contact Dealer
          </a>
        </div>
      </div>
    </div>
  );
}

export default BuildPage;