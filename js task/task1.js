let people = [
    { name: "karthick", age: 25 },
    { name: "deepthi", age: 22 },
    { name: "pavithra", age: 27 },
    { name: "john", age: 35 },
    { name: "mary", age: 30 }
  ];
  

// let findAge = people.filter((person) => {
//     return person.age >= 30;
// });
// console.log(findAge);



let numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];

let uniqNum = numbers.filter((num, index) => {
    return numbers.indexOf(num) === index;
});

// console.log(uniqNum);


let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let squareEven = numbers2.filter((num) =>{
    // let filterEven = num % 2 ===0;
    // console.log(filterEven);
    // return filterEven * 2;
    return num % 2 === 0;
}).map((num) => num * num)

// console.log(squareEven);


let products = [
    { name: "Laptop", price: 1500, category: "electronics" },
    { name: "Shoes", price: 100, category: "fashion" },
    { name: "Headphones", price: 200, category: "electronics" },
    { name: "Watch", price: 300, category: "fashion" },
    { name: "Smartphone", price: 800, category: "electronics" }
];
  
let findProduct = products.filter((prod) =>{
    return prod.category === "electronics";
}).map((prod) => prod.name)

// console.log(findProduct);

let numbers3 = [10, 20, 30, 40, 50];

let calSum = numbers3.reduce((acc, num) => {
    return acc + num;
})

// console.log(calSum);

let len = numbers3.length;

let findAvg = calSum / len;
// console.log(findAvg);

let total = {
    sum: calSum,
    average : findAvg
}

// console.log(total);


let names = ["Alice", "Bob", "Charlie", "David"];

let lenNames = names.map((name) =>{
    return {
        name: name,
        length: name.length
    }
})

console.log(lenNames);