// The BASICS
const items = ["cat", "frog", "dog"];
const firstArrItem = items[0];
const lastArrItem = items[2];
const lastArrItem2 = items[items.length - 1];

// 1. access the first item in the array
// console.log(firstArrItem);
// 2. access the last item in the array - 2 ways
// console.log(lastArrItem);
// console.log(lastArrItem2);
// 3. remove the middle item in the array
items.splice(0, 1);
// console.log(items);
// 4. add a new value to the end of the array
items.push("rabbit");
// console.log(items);
// 5. add a new value to the beginning of the array
items.unshift("Kangaroo");
// console.log(items);

// using a standard for loop, loop over every item in  the array and log it to the console
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}
// console.log(items.length);

// Intermediate
const persons = [
  {
    firstName: "Billy",
    lastName: "Bobby",
    age: 14,
    hobbies: ["screaming"],
  },
  {
    firstName: "Mike",
    lastName: "Tyson",
    age: 21,
    hobbies: ["boxing", "pigeons", "exercising", "fighting"],
  },
  {
    firstName: "Babe",
    lastName: "Ruth",
    age: 38,
    hobbies: ["baseball", "drinking", "cigars"],
  },
  {
    firstName: "Gandalf",
    lastName: "The White",
    age: 2000,
    hobbies: ["spells", "cigars"],
  },
];

//  1. Create an array and populate it with the numbers 1 to 100 using a loop.
const numsArray = [];
for (let count = 1; count <= 100; count++) {
  numsArray.push(count);
}
// console.log(numsArray);

//  2. Create a new array, and add each object in the `persons` array above.
const people = [];
persons.forEach((person) => {
  people.push(person);
});
// console.log(people);

//  3. Sort the array by `firstName`, and log it to the console.
people.sort((a, b) => (a.firstName < b.firstName ? -1 : 1));
// console.log(people);

//  4. Using the `.find` method on the Array prototype, find and log out a `Person` with only one bobby.
const bobby = people.find((person) => person.lastName === "Bobby");
// console.log(bobby);

//  5. Using the `.filter` method on the Array prototype, filter and log out all the `Person`s with more than 1 hobby.
const filteredPeople = people.filter((person) => person.hobbies.length > 1);
// console.log(filteredPeople);

//  6. Using the `.filter` method on the Array prototype, filter and log out all the `Person`s that have `cigars` as a hobby.
const theBoncheros = people.filter((belvedere) =>
  belvedere.hobbies.includes("cigars")
);
console.log(theBoncheros);

// ### Advanced
const cars = [
  {
    make: "Ford",
    model: "F-150",
    trim: "Raptor",
    mileage: 0,
    driveTrain: 4,
    features: ["moon roof", "leather"],
    horsePower: 450,
  },
  {
    make: "Ram",
    model: "1500",
    trim: "TRX",
    mileage: 4,
    driveTrain: 4,
    features: ["moon roof", "leather", "premium audio"],
    horsePower: 700,
  },
  {
    make: "Tesla",
    model: "Cybertruck",
    trim: undefined,
    mileage: 0,
    driveTrain: 4,
    features: ["moon roof", "leather", "premium audio", "self-driving"],
    horsePower: 1000,
  },
  {
    make: "Kia",
    model: "Forte",
    trim: "base",
    mileage: 150_000,
    driveTrain: 2,
    features: ["power, windows"],
    horsePower: 140,
  },
];

// 1. Create a new array and populate that array with the `cars` array above using the `.map` method on the Array prototype, but then - in the same call - add a new car to it.
const newCarsArr = [];
cars.map(
  (car) => {
    newCarsArr.push(car);
  },
  (newCarsArr[newCarsArr.length] = {
    make: "Ferrari",
    model: "812 Superfast",
    trim: undefined,
    mileage: 4,
    driveTrain: 4,
    horsePower: 789,
    features: ["leather", "nightvision", "KITT A.I", "Coffee dispenser"],
  })
);
console.log(newCarsArr.map((car) => console.log(car.features)));
// 2. Using the `.reduce` method on the Array prototype, log out the total `horsePower` on all cars.
const total = newCarsArr.reduce(function (accumulator, currentVal) {
  return accumulator + currentVal.horsePower;
}, 0);
console.log(total);
// 3. Using the `.some` method on the Array prototype:

// - log out whether some `cars` have more than one hundred thousand miles.
newCarsArr.some((x) => console.log(x.mileage > 100000));
// a little fancier for clarity
newCarsArr.some((x) =>
  console.log(
    `The mileage of the ${x.make} ${x.model} is ${x.mileage} and is `,
    x.mileage > 100000
  )
);
newCarsArr.some((car) => {
  // - log out whether some `cars` have four wheel drive
  console.log(
    `${car.make} driveTrain is ${car.driveTrain},  ${car.driveTrain == 4}`
  );
  // - log out whether some `cars` have more than 4 features
  console.log(`Car: ${car.make} is `, car.features.length >= 4);
  // - log out whether some `cars` are made by Tesla
  console.log(
    `Car made by Tesla? ${car.make} ${car.model}:`,
    car.make === "Tesla"
  );
});

// 4. Using the `.every` method on the Array prototype:
// - log out whether every car has a `trim` specified
newCarsArr.every((car) => console.log(car.trim === true));
// - log out whether every car has at least 1 feature
newCarsArr.every((car) => console.log(car.features.length >= 1));

// - if every car has more than 5 miles, log out "Every car has been driven", otherwise log out "They're all new"
const carMileage = newCarsArr.every((car) => car.mileage);
if (carMileage <= 5) {
  console.log("They're all new");
} else if (carMileage > 5) {
  console.log("Every car has been driven");
}
