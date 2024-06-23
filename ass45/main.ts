type Car = {
  manufacturer: string;
  modelName: string;
  [key: string]: any;
};

function createCar(
  manufacturer: string,
  modelName: string,
  ...options: string[]
): Car {
  const car: Car = {
    manufacturer: manufacturer,
    modelName: modelName,
  };
  options.forEach((option) => {
    let [key, value] = option.split(":");
    car[key.trim()] = value.trim();
  });

  return car;
}

const myCar = createCar("Toyota", "Corolla", "color : Black", "sunroof:true");

console.log(myCar);
