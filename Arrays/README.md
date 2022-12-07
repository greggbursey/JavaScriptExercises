# Arrays

## Questions

1. What kind of item is an array?
   a. string
   b. function
   c. object
   d. other
   e. c & b
2. List out some of the most common usages of an array.

## Isolated Exercises

### Basic

1. Create an array and give it a name.
2. Populate that array with three simple values (like strings or numbers).
3. Access the first item in the array.
4. Access the last item in the array.
5. Remove middle item in the array.
6. Add a new value to the end of the array.
7. Add a new value to the beginning of the array.
8. Using a standard `for` loop, loop over every item in the array and log it to the console.
9. Log the length of the array to the console.

### Intermediate

```js
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
```

1. Create an array and populate it with the numbers 1 to 100 using a loop.
2. Create a new array, and add each object in the `persons` array above.
3. Sort the array by `firstName`, and log it to the console.
4. Using the `.find` method on the Array prototype, find and log out a `Person` with only one bobby.
5. Using the `.filter` method on the Array prototype, filter and log out all the `Person`s with more than 1 hobby.
6. Using the `.filter` method on the Array prototype, filter and log out all the `Person`s that have `cigars` as a hobby.

### Advanced

```js
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
        features: ["power windows"],
        horsePower: 140,
    },
];
```

1. Create a new array and populate that array with the `cars` array above using the `.map` method on the Array prototype, but then - in the same call - add a new car to it.
2. Using the `.reduce` method on the Array prototype, log out the total `horsePower` on all cars.
3. Using the `.some` method on the Array prototype:
    - log out whether some `cars` have more than one hundred thousand miles.
    - log out whether some `cars` have four wheel drive
    - log out whether some `cars` have more than 4 features
    - log out whether some `cars` are made by Tesla
4. Using the `.every` method on the Array prototype:
    - log out whether every car has a `trim` specified
    - log out whether every car has at least 1 feature
    - if every car has more than 5 miles, log out "Every car has been driven", otherwise log out "They're all new"

## Big-Picture Exercises - POWER RANGERS

```js
const colors = {
    Red: {
        color: "Red",
        attributes: ["leader", "strength", "fighting", "adventurous"],
    },
    Blue: {
        color: "Blue",
        attributes: ["2nd in command", "honor", "teamwork"],
    },
    Black: {
        color: "Black",
        attributes: ["Keep power coins safe", "could be good or evil"],
    },
    Green: {
        color: "Green",
        attributes: ["mighty"],
    },
    White: {
        color: "White",
        attributes: [
            "Carries sword",
            "Carries shield",
            "Leader",
            "Heroic",
            "Loyal",
            "Dark side",
            "Protective",
        ],
    },
    Pink: {
        color: "Pink",
        attributes: [
            "Power Bow",
            "Fights monsters",
            "Uses hammer when no bow available",
        ],
    },
    Yellow: {
        color: "Yellow",
        attributes: ["Youngest", "Empathetic", "Senses emotions"],
    },
    Silver: {
        color: "Silver",
        attributes: ["transforms"],
    },
    Gold: {
        color: "Gold",
        attributes: ["Boomerang", "Leader"],
    },
    Purple: {
        color: "Purple",
        attributes: ["supporting", "funny", "protect"],
    },
};
```

Create a simple html page in this folder.
