import { useState } from "react";
import { getSavedCars, removeCar } from "../utils/storage";
import CarDetailsPanel from "../components/CarDetailsPanel";

function Dashboard() {
  const [cars, setCars] = useState(() => getSavedCars());
  const [selectedCar, setSelectedCar] = useState(null);
  const [featured, setFeatured] = useState(null);

  const currentFeatured = featured || cars[0];

  return (
    <div style={{
      background: "linear-gradient(to bottom, #020617, #020617, #111827)",
      minHeight: "100vh",
      color: "#fff",
      padding: "30px",
      maxWidth: "1200px",
      margin: "0 auto"
    }}>

      {/* HEADER */}
      <div style={{
        background: "#0f172a",
        padding: "25px",
        borderRadius: "14px",
        marginBottom: "25px",
        boxShadow: "0 0 20px rgba(0,0,0,0.4)"
      }}>
        <h1>Your Garage</h1>
        <p style={{ color: "#aaa" }}>
          {cars.length} saved build{cars.length !== 1 && "s"}
        </p>
      </div>

      {/* STATS */}
      <div style={{
        display: "flex",
        gap: "20px",
        marginBottom: "25px"
      }}>
        <div style={{
          flex: 1,
          background: "#0f172a",
          padding: "18px",
          borderRadius: "12px"
        }}>
          <h2>{cars.length}</h2>
          <p style={{ color: "#aaa" }}>Saved Cars</p>
        </div>

        <div style={{
          flex: 1,
          background: "#0f172a",
          padding: "18px",
          borderRadius: "12px"
        }}>
          <h2>{[...new Set(cars.map(c => c.brand))].length}</h2>
          <p style={{ color: "#aaa" }}>Brands</p>
        </div>
      </div>

      {/* FEATURED */}
      {currentFeatured && (
        <div style={{
          marginBottom: "30px",
          borderRadius: "16px",
          overflow: "hidden",
          position: "relative"
        }}>
          <img
            src={`/src/assets/images/cars/${currentFeatured.image}`}
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover"
            }}
          />

          <div style={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
            background: "rgba(0,0,0,0.6)",
            padding: "12px 18px",
            borderRadius: "10px"
          }}>
            <h2>{currentFeatured.name}</h2>
            <p style={{ color: "#ef4444" }}>
              {currentFeatured.displayPrice}
            </p>
          </div>
        </div>
      )}

      {/* ACTIONS */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20px"
      }}>
        <select
          onChange={(e) => {
            if (!e.target.value) return;

            const sorted = [...cars].sort((a, b) => {
              const priceA = parseInt(a.price?.replace(/\D/g, "")) || 0;
              const priceB = parseInt(b.price?.replace(/\D/g, "")) || 0;

              return e.target.value === "low"
                ? priceA - priceB
                : priceB - priceA;
            });

            setCars(sorted);
          }}
          style={{
            padding: "8px",
            borderRadius: "6px"
          }}
        >
          <option value="">Sort</option>
          <option value="low">Price Low → High</option>
          <option value="high">Price High → Low</option>
        </select>

        <button
          onClick={() => {
            localStorage.removeItem("savedCars");
            setCars([]);
            setFeatured(null);
          }}
          style={{
            background: "#ef4444",
            border: "none",
            padding: "8px 14px",
            borderRadius: "6px",
            color: "#fff",
            cursor: "pointer"
          }}
        >
          Clear All
        </button>
      </div>

      {/* EMPTY */}
      {cars.length === 0 ? (
        <div style={{
          textAlign: "center",
          marginTop: "80px",
          color: "#666"
        }}>
          <h2>No saved cars</h2>
          <p>Go explore and save builds</p>
        </div>
      ) : (

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px"
        }}>
          {cars.map((car) => (
            <div
              key={car.id}
              onClick={() => {
                setSelectedCar(car);
                setFeatured(car);
              }}
              style={{
                background: "#020617",
                border: currentFeatured?.id === car.id
                  ? "2px solid #ef4444"
                  : "1px solid #1e293b",
                borderRadius: "14px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "0.3s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 0 20px #ef4444";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >

              <img
                src={`/src/assets/images/cars/${car.image}`}
                style={{
                  width: "100%",
                  height: "160px",
                  objectFit: "cover"
                }}
              />

              <div style={{ padding: "14px" }}>
                <h3>{car.name}</h3>

                <p style={{ color: "#ef4444", fontWeight: "600" }}>
                  {car.displayPrice}
                </p>

                <p style={{ color: "#aaa", fontSize: "14px" }}>
                  {car.brand} • {car.type}
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeCar(car.id);

                    const updated = getSavedCars();
                    setCars(updated);

                    if (featured?.id === car.id) {
                      setFeatured(null);
                    }
                  }}
                  style={{
                    marginTop: "10px",
                    width: "100%",
                    background: "#ef4444",
                    border: "none",
                    padding: "10px",
                    borderRadius: "8px",
                    color: "#fff"
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SIDE PANEL */}
      {selectedCar && (
        <CarDetailsPanel
          car={selectedCar}
          close={() => setSelectedCar(null)}
          setSelectedCar={setSelectedCar}
        />
      )}

    </div>
  );
}

export default Dashboard;