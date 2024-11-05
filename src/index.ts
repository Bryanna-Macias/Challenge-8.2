// import classes
import Truck from "./classes/Truck.js";
import Car from "./classes/Car.js";
import Motorbike from "./classes/Motorbike.js";
import Wheel from "./classes/Wheel.js";
import Cli from "./classes/Cli.js";

// create an array of vehicles
const vehicles: (Truck | Car | Motorbike)[] = [];

// Create a new Truck instance (uncomment once Truck is implemented)
const truck1 = new Truck(
  Cli.generateVin(), // Assuming Cli has a method to generate a VIN
  "red",
  "Ford",
  "F-150",
  2021,
  5000,
  120,
  [], // Will use default wheels
  10000
);

// Create a new Car instance
const car1 = new Car(
  Cli.generateVin(),
  'blue',
  'Toyota',
  'Camry',
  2021,
  3000,
  130,
  [] // Will use default wheels
);

// Create a new Motorbike instance (uncomment once Motorbike is implemented)
const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
const motorbike1 = new Motorbike(
  Cli.generateVin(),
  "black",
  "Harley Davidson",
  "Sportster",
  2021,
  500,
  125,
  motorbike1Wheels
);

// Push vehicles to array
// Uncomment once trucks are implemented
vehicles.push(truck1);
vehicles.push(car1);
// Uncomment once motorbikes are implemented
vehicles.push(motorbike1);

// create a new instance of the Cli class
const cli = new Cli(vehicles);

// start the cli
cli.startCli();
