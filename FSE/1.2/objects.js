const allUsers = [
  { firstName: "Tridib", gender: "Male" },
  { firstName: "raman", gender: "Male" },
  { firstName: "Aisha", gender: "Female" },
  { firstName: "Sofia", gender: "Female" },
  { firstName: "Liam", gender: "Male" },
  { firstName: "Priya", gender: "Female" },
  { firstName: "Carlos", gender: "Male" },
];

for (let i = 0; i < allUsers.length; i++) {
  if (allUsers[i].gender === "Male") {
    console.log(allUsers[i].firstName);
  }
}
