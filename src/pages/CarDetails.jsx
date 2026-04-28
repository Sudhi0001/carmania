import { useParams, useNavigate } from "react-router-dom";
import cars from "../data/cars";
import { saveCar } from "../utils/storage";

function CarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const car = cars.find((c) => c.id === parseInt(id));

  if (!car) return <h2 style={{ color: "#fff" }}>Car not found</h2>;

  return (
    <div style={{
      background: "#020617",
      minHeight: "100vh",
      color: "#fff",
      padding: "30px",
      maxWidth: "1100px",
      margin: "0 auto"
    }}>

      {/* BACK */}
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: "20px",
          background: "none",
          border: "1px solid #333",
          padding: "6px 12px",
          borderRadius: "6px",
          color: "#aaa",
          cursor: "pointer"
        }}
      >
        ← Back
      </button>

      {/* HERO */}
      <div style={{
        borderRadius: "16px",
        overflow: "hidden",
        marginBottom: "25px",
        position: "relative"
      }}>
        <img
          src={`/assets/images/cars/${car.image}`}
          alt={car.name}
          style={{
            width: "100%",
            height: "350px",
            objectFit: "cover"
          }}
        />

        <div style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          background: "rgba(0,0,0,0.6)",
          padding: "15px 20px",
          borderRadius: "10px"
        }}>
          <h1>{car.name}</h1>
          <p style={{ color: "#ef4444", fontWeight: "bold" }}>
            {car.displayPrice}
          </p>
        </div>
      </div>

      {/* BASIC INFO */}
      <div style={{
        display: "flex",
        gap: "20px",
        marginBottom: "25px"
      }}>
        <div style={{ flex: 1 }}>
          <p style={{ color: "#aaa" }}>Brand</p>
          <h3>{car.brand}</h3>
        </div>

        <div style={{ flex: 1 }}>
          <p style={{ color: "#aaa" }}>Type</p>
          <h3>{car.type}</h3>
        </div>

        <div style={{ flex: 1 }}>
          <p style={{ color: "#aaa" }}>Fuel</p>
          <h3>{car.fuel}</h3>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div style={{ marginBottom: "25px" }}>
        <h2>Description</h2>
        <p style={{ color: "#ccc", lineHeight: "1.6" }}>
          {car.description}
        </p>
      </div>

      {/* SPECS + FEATURES GRID */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "25px",
        marginBottom: "25px"
      }}>

        <div>
          <h3>Specifications</h3>
          <ul style={{ color: "#ccc" }}>
            {car.specs.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Features</h3>
          <ul style={{ color: "#ccc" }}>
            {car.features.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Safety</h3>
          <ul style={{ color: "#ccc" }}>
            {car.safety.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Pros & Cons</h3>
          <ul style={{ color: "#4ade80" }}>
            {car.pros.map((item, i) => (
              <li key={i}>✔ {item}</li>
            ))}
          </ul>
          <ul style={{ color: "#ef4444" }}>
            {car.cons.map((item, i) => (
              <li key={i}>✖ {item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* ACTIONS */}
      <div style={{
        display: "flex",
        gap: "15px"
      }}>

        {/* SAVE */}
        <button
          onClick={() => saveCar(car)}
          style={{
            flex: 1,
            background: "#111827",
            border: "1px solid #ef4444",
            padding: "12px",
            borderRadius: "8px",
            color: "#ef4444",
            cursor: "pointer"
          }}
        >
          ❤️ Save Car
        </button>
        <button onClick={() => navigate(`/build/${car.id}`)}>
  Customize Build
</button>

        {/* CONTACT */}
        <a
          href={`mailto:carmania@gmail.com?subject=Interested in ${car.name}`}
          style={{
            flex: 1,
            textAlign: "center",
            background: "#ef4444",
            padding: "12px",
            borderRadius: "8px",
            color: "#fff",
            textDecoration: "none",
            fontWeight: "600"
          }}
        >
          Contact Dealer
        </a>

      </div>

    </div>
  );
}

export default CarDetails;