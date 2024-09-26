let people = [
    { name: "karthick", age: 25 },
    { name: "deepthi", age: 22 },
    { name: "karthick", age: 30 },
    { name: "pavithra", age: 27 },
    { name: "john", age: 21 }
  ];


let findNames = people.filter((person) =>{
    return person.name !== "karthick";
});
console.log(findNames);