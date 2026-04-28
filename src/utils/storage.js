export const getSavedCars = () => {
  return JSON.parse(localStorage.getItem("savedCars")) || [];
};

export const saveCar = (car) => {
  const cars = getSavedCars();
  const exists = cars.find((c) => c.id === car.id);

  if (!exists) {
    localStorage.setItem("savedCars", JSON.stringify([...cars, car]));
  }
};

export const removeCar = (id) => {
  const cars = getSavedCars().filter((c) => c.id !== id);
  localStorage.setItem("savedCars", JSON.stringify(cars));
};

export const isSaved = (id) => {
  return getSavedCars().some((c) => c.id === id);
};