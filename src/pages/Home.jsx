import { useState } from "react";
import cars from "../data/cars";
import CarCard from "../components/CarCard";
import FilterBar from "../components/FilterBar";
import CarDetailsPanel from "../components/CarDetailsPanel";

function Home() {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [selectedCar, setSelectedCar] = useState(null);

  // 🔥 Filter Logic
  const filteredCars = cars.filter((car) => {
    return (
      car.name.toLowerCase().includes(search.toLowerCase()) &&
      (brand === "" || car.brand === brand) &&
      (type === "" || car.type === type)
    );
  });

  return (
    <div
      style={{
        background: "#020617",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      {/* HEADER */}
      <h1 style={{ padding: "20px" }}>
        Explore Custom Builds 
      </h1>

      {/* FILTER */}
      <div style={{ padding: "0 20px" }}>
        <FilterBar
          search={search}
          setSearch={setSearch}
          brand={brand}
          setBrand={setBrand}
          type={type}
          setType={setType}
        />
      </div>

      {/* MAIN LAYOUT */}
      <div style={{ display: "flex" }}>
        
        {/* LEFT SIDE GRID */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {filteredCars.length === 0 ? (
            <p>No cars found 🚫</p>
          ) : (
            filteredCars.map((car) => (
              <CarCard
                key={car.id}
                car={car}
                onClick={setSelectedCar}   // 🔥 click handler
              />
            ))
          )}
        </div>

      </div>
      {selectedCar && (
  <div
    onClick={() => setSelectedCar(null)}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.5)",
      backdropFilter: "blur(5px)",
      zIndex: 999
    }}
  />
)}

      {/* RIGHT SIDE PANEL */}
      {selectedCar && (
        <CarDetailsPanel
          car={selectedCar}
          close={() => setSelectedCar(null)}
          setSelectedCar={setSelectedCar}   // 🔥 IMPORTANT
        />
      )}
    </div>
  );
}

export default Home;