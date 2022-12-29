# OBJECTS

## Introduction

In Javascript, everything is an object. Everything! Well, besides things like numbers, but for the most part, everything is an object.

An object is simply a representation of some kind of data structure. Each part of this data structure
is referred to as a "property". Each property can be a simple value, like `123`, another object, and
even functions. Objects are a key part of any object-oriented programming language, and a key part of Javascript.

## Topics covered

    1. Properties
    2. Methods
    3. Property Values
    4. this
    5. The DOM

## Data

The following can be referenced as data.

```js
const computer = {
    ramGB: 16,
    hdType: "ssd",
    gpuGB: 8,
    cpu: {
        make: "intel",
        type: "i7",
        cores: 20,
    },
    usbItems: [
        {
            type: "USB-A",
            version: 3.0,
        },
        {
            type: "USB-A",
            version: 2.0,
        },
        {
            type: "USB-C",
            version: 3.0,
        },
    ],
    id: Math.random(),
    os: "windows",
    // basically a random way of getting true / false
    hasUpdates: () => Math.random() > 0.5,
    name: "Bill Gates",
    password: "",
    // THIS
    getName: function () {
        return this.name;
    },
    getSelf: function () {
        return this;
    },
    whatIsThis: this,
    // Getter
    get getUserName() {
        return "Nick";
    },
    // Setter
    set setPassword(value) {
        this.password = value;
    },
    driveContents: {
        c: {
            folder1: {
                item1: undefined,
            },
        },
        d: {
            folder1: {
                item1: {
                    item2: {
                        item3: {
                            secretDirectory: [
                                folder1: {
                                    content: 1,
                                },
                                folder2: {
                                    content: "Folder2 Content",
                                },
                                folder3: {
                                    content: {
                                        moreContent: {
                                            evenMoreContent: {
                                                message: "How deep does this go?"
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    }
                }
            }
        },
    },
};
```

## Basic questions and exercises

    1. What is dot notation?
    2. What is bracket notation?
    3. Access the computer's OS via:
        a. dot notation
        b. bracket notation
    4. Access the computer's Ram via:
        a. dot notation
        b. bracket notation
    5. Access the computer's USB items as a whole (without a loop) - all items.
    6. Access the 3rd USB item's type and version using both dot notation and bracket notation.

## Intermediate questions and exercises

    1. If you were to access `computer.id`, what do you expect the value to
        be (roughly - doesn't need to be exact)?
    2. What would you expect the return value of the `getName` function to be?
    3. What would you expect the return value of the `getSelf` function to be?
    4. What would you expect the value of the `whatIsThis` value to be? Why is this particular value
        different from the other two places `this` is used?
    5. On the computer's "d" drive, access the most inner folder's content that read's
        "Folder2 Content".

## Advanced questions and exercises

    1. Given the two ways of getting a `userName` below, why would you use one over the other?

```js
    get getUserName() {
        return this.userName;
    }
```

        vs

```js
    getUserName: () {
        return this.userName;
    }
```

    2. On the computer's "d" drive, in the "secretDirectory" structure and do the following
        using a loop:
        a. Inside the loop, add an explicit check to see if "folder4" does not exist. If it does
            not, create it using dot notation.
        b. Inside the loop, add an explicit check to see if "folder5" does not exist. If it does
            not, create it using bracket notation.

```js
const moreSecretDirectoryContents = [
    {
        animalType: "Tiger",
    },
    {
        animalType: "Lion",
    },
    {
        animalType: "Lion",
    },
    {
        animalType: "Lion",
    },
    {
        animalType: "Bear",
    },
    {
        animalType: "Bear",
    },
];
```

    3. Looping over the `moreSecretDirectoryContents` array above, add each unique `animalType` to the
        `secretDirectory` data structure in the `computer` object above. Next to each `animalType`
        should be the number of times that animal count appears. Your output should look
        something like this:

```js
    Tiger: 1,
    Lion: 3,
    Bear: 2
```
