let people = [
    { name: "karthick", age: 25 },
    { name: "deepthi", age: 22 },
    { name: "karthick", age: 30 },
    { name: "pavithra", age: 35 },
    { name: "john", age: 21 }
  ];

  
let findName = people.filter((person) => {
    return person.name!=="karthick"
});
// console.log(findName);

let removeAge = people.filter((person)=>{
    return person.age >= 30;
})
// console.log(removeAge);


let names = ["Alice", "Bob", "Charlie", "David"];

let findNameAndLen = names.map((name) =>{
    return {
        name: name,
        length: name.length
    }
})
// console.log(findNameAndLen)


let books = [
    { title: "Harry Potter and the Sorcerer's Stone", year: 1997 },
    { title: "The Da Vinci Code", year: 2003 },
    { title: "The Hunger Games", year: 2008 },
    { title: "The Great Gatsby", year: 1925 }
  ];

  
let findBookTitle = books.filter((book) =>{
    return book.year > 2000;
}).map((book)=> book.title)
// console.log(findBookTitle)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let findEven = numbers.filter((num) =>{
    return num % 2===0
})

let findOdd = numbers.filter((num) =>{
    return num%2!==0
})
let output = {
    even: findEven,
    odd: findOdd
}
// console.log(output)



let students = [
    { name: "Alice", score: 80 },
    { name: "Bob", score: 65 },
    { name: "Charlie", score: 90 },
    { name: "David", score: 72 }
  ];

  
let findStudent = students.filter((student) =>{
    return student.score > 75;
}).map((student)=> student.name)
// console.log(findStudent)



let transactions = [
    { id: 1, amount: 100, type: "credit" },
    { id: 2, amount: 50, type: "debit" },
    { id: 3, amount: 200, type: "credit" },
    { id: 4, amount: 80, type: "debit" }
  ];
let findBalance = transactions.reduce((total, transaction)=>{
    if (transaction.type === "credit"){
        return total + transaction.amount
    }else{
        return total - transaction.amount
    }
}, 0);
// console.log("Total Balance:", findBalance)


let products = [
    { name: "Laptop", price: 1000, category: "Electronics" },
    { name: "Shirt", price: 30, category: "Clothing" },
    { name: "Phone", price: 500, category: "Electronics" },
    { name: "Pants", price: 40, category: "Clothing" }
  ];

  
let groupElectCategory = products.filter((prod) => {
    return prod.category === "Electronics";
}).map((prod) => prod.name)

let groupClothCategory = products.filter((prod)=>{
    return prod.category === "Clothing";
}).map((prod)=> prod.name)

let opt = {
    Electronics: groupElectCategory,
    Clothing: groupClothCategory
}
// console.log(opt)

let groupCategory = products.reduce((result, prod)=>{
    if(!result[prod.category]){
        result[prod.category] = []
    }
    result[prod.category].push(prod.name)
    return result
}, {})
// console.log(groupCategory)

let students1 = [
    { name: "John", grade: 85, subject: "Math" },
    { name: "Jane", grade: 90, subject: "Math" },
    { name: "Bob", grade: 78, subject: "English" },
    { name: "Alice", grade: 82, subject: "English" },
    { name: "Tom", grade: 92, subject: "Math" }
  ];

let findAvg = students1.reduce((avg, student) =>{
    if (!avg[student.subject]){
        avg[student.subject] = []
    }
    avg[student.subject].push(student.grade)
    return avg 
},{})
console.log(findAvg)

let subjectAvg = {};
for(let subject in findAvg){
    console.log(subject)
    let grades = findAvg[subject];
    console.log(grades)
    let total = grades.reduce((sum, grade) => sum + grade, 0);
    let res = total / grades.length
    subjectAvg[subject] = res
}
console.log(subjectAvg)