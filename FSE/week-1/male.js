const people = [
  {
    name: "Rohan",
    sex: "Male",
    age: 21,
  },
  {
    name: "Priya",
    sex: "Female",
    age: 25,
  },
  {
    name: "Amit",
    sex: "Male",
    age: 28,
  },
  {
    name: "Sneha",
    sex: "Female",
    age: 23,
  },
  {
    name: "Rajesh",
    sex: "Male",
    age: 30,
  },
  {
    name: "Kavya",
    sex: "Female",
    age: 26,
  },
  {
    name: "Arjun",
    sex: "Male",
    age: 24,
  },
  {
    name: "Meera",
    sex: "Female",
    age: 29,
  },
  {
    name: "Vikram",
    sex: "Male",
    age: 32,
  },
  {
    name: "Ananya",
    sex: "Female",
    age: 27,
  },
];

// Filter to get only male people
const maleNames = people.filter((person) => person.sex === "Male");
console.log("Male people:", maleNames);

// Filter to get only the names of male people
const maleNamesList = people
  .filter((person) => person.sex === "Male")
  .map((person) => person.name);
console.log("Male names only:", maleNamesList);

// Filter to get males above age 25
const malesAbove25 = people.filter(
  (person) => person.sex === "Male" && person.age > 25
);
console.log("Males above 25:", malesAbove25);

// Alternative way using arrow function
const getMalesByAge = (minAge) => {
  return people.filter(
    (person) => person.sex === "Male" && person.age >= minAge
  );
};

console.log("Males 30 and above:", getMalesByAge(30));
