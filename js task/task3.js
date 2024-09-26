let orderss = [
    { product: "Laptop", quantity: 2, price: 1000 },
    { product: "Phone", quantity: 5, price: 500 },
    { product: "Laptop", quantity: 1, price: 1000 },
    { product: "Tablet", quantity: 3, price: 300 },
    { product: "Phone", quantity: 2, price: 500 }
];

  
let totalRevenue = orderss.reduce((revenue, ord) =>{
    if(!revenue[ord.product]){
        revenue[ord.product] = 0;
    }
    revenue[ord.product] += ord.quantity * ord.price;
    return revenue;
},{})

// console.log(totalRevenue)


const books = [
    { title: "The Road", author: "Cormac McCarthy", yearPublished: 2006, genre: "Fiction" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", yearPublished: 1925, genre: "Fiction" },
    { title: "Steve Jobs", author: "Walter Isaacson", yearPublished: 2011, genre: "Biography" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", yearPublished: 1951, genre: "Fiction" },
    { title: "Sapiens", author: "Yuval Noah Harari", yearPublished: 2014, genre: "Non-fiction" }
];
  
let findYear = books.filter((book)=>{
    return book.yearPublished < 2000;
})
// console.log(findYear)

let sortAuthor = books.sort((a, b) =>{
    return a.author.localeCompare(b.author)
})
// console.log(sortAuthor)

let countGenre = books.reduce((gen, book) => {
    if(!gen[book.genre]){
        gen[book.genre] = 0
    }
    gen[book.genre] +=  1
    return gen
},{})

// console.log(countGenre)

let findAuthor = books.some((book) =>{
    return book.author === 'J.D. Salinger'
})
// console.log(findAuthor)


const employees = [
    { name: "Alice", department: "Engineering", salary: 120000, yearsWorked: 6 },
    { name: "Bob", department: "HR", salary: 70000, yearsWorked: 4 },
    { name: "Charlie", department: "Engineering", salary: 95000, yearsWorked: 7 },
    { name: "Diana", department: "Marketing", salary: 80000, yearsWorked: 3 },
    { name: "Eve", department: "Engineering", salary: 105000, yearsWorked: 2 }
  ];

  
let findEmployee = employees.filter((employee) =>{
    return employee.yearsWorked > 5;
})

// console.log(findEmployee)
// console.log('******');
// console.log('******');

let calcSalary = employees.reduce((sal, employee) =>{
    if(employee.department === "Engineering"){
        return sal + employee.salary
    }
    return sal;
}, 0)

// console.log(calcSalary)

// console.log('******');

let findPercentageWorked = employees.map((employee) =>{
    return{
        name: employee.name,
        percentageWorked: (employee.yearsWorked / 10) * 100
    }
})

// console.log(findPercentageWorked)
// console.log('******');
// console.log('******');

let greatSalary = employees.some((employee) =>{
    return employee.salary > 100000;
})

// console.log(greatSalary)


const orders = [
    {
      id: "001",
      customerName: "John",
      items: [
        { productName: "Laptop", price: 1000, quantity: 1 },
        { productName: "Mouse", price: 25, quantity: 2 }
      ],
      status: "shipped"
    },
    {
      id: "002",
      customerName: "Jane",
      items: [
        { productName: "Phone", price: 500, quantity: 1 },
        { productName: "Charger", price: 50, quantity: 1 }
      ],
      status: "delivered"
    },
    {
      id: "003",
      customerName: "Alice",
      items: [
        { productName: "Tablet", price: 300, quantity: 1 },
        { productName: "Cover", price: 25, quantity: 3 }
      ],
      status: "pending"
    }
  ];
  
let calcTotalPrice = orders.map((order) =>{
    let calcPrice = order.items.reduce((total, item) =>{
        return total + item.price * item.quantity
   }, 0)
    return{
        id: order.id,
        totalPrice: calcPrice
    }
    
})

// console.log(calcTotalPrice)

let findDelivered = orders.filter((order)=>{
    return order.status === "delivered"
}).map((order) => order.customerName)
// console.log(findDelivered)

let findPending = orders.reduce((pen, order) =>{
    if(order.status === "pending"){
        return pen + 1
    }
    return pen
},0)

// console.log(findPending)

let findDistinctProduct = orders
.flatMap(order => order.items.map(item => item.productName))
.filter((value, index, self) => self.indexOf(value) === index);

// console.log(findDistinctProduct)


let calcTotalPrice1 = orders.map((order) =>{
    let calcPrice = order.items.reduce((total, item) =>{
        return total + item.price * item.quantity
   }, 0)
    return{
        id: order.id,
        customerName: order.customerName,
        totalPrice: calcPrice
    }
}).sort((a,b) => b.totalPrice - a.totalPrice)

// console.log(calcTotalPrice1)


let employeess = [
    { name: "Alice", salary: 5000, department: "Engineering" },
    { name: "Bob", salary: 4000, department: "Engineering" },
    { name: "Charlie", salary: 3000, department: "Marketing" },
    { name: "Dave", salary: 3500, department: "Marketing" },
    { name: "Eve", salary: 4500, department: "Engineering" }
  ];
  

let totalSalary = employeess.reduce((sal, employee) =>{
    if(!sal[employee.department]){
        sal[employee.department] = 0
    }
    sal[employee.department] += employee.salary
    return sal
},{})
// console.log(totalSalary)

let students = [
    { name: "John", age: 18, grades: [80, 85, 90] },
    { name: "Jane", age: 19, grades: [75, 80, 70] },
    { name: "Bob", age: 17, grades: [90, 92, 88] }
  ];

  
let avgGrade= students.map((student)=>{
    let calcGrade = student.grades.reduce((total, grade) =>{
        return total + grade 
    }, 0)

    let average = calcGrade / student.grades.length;

    return{
        name: student.name,
        averageGrade: average
    }
})

// console.log(avgGrade)

let products = [
    { name: "Laptop", price: 1200, category: "Electronics" },
    { name: "Smartphone", price: 800, category: "Electronics" },
    { name: "Tablet", price: 300, category: "Electronics" },
    { name: "Shirt", price: 50, category: "Clothing" },
    { name: "Jeans", price: 80, category: "Clothing" },
    { name: "Jacket", price: 120, category: "Clothing" }
  ];

  
let expensiveProduct = products.reduce((exp, product) =>{
    if(!exp[product.category] || product.price > exp[product.category].price){
        exp[product.category] = {
            name: product.name,
            price: product.price
        }
    }
    return exp
}, {})
// console.log(expensiveProduct)

let books1 = [
    { title: "Book A", author: "Author 1", pages: 200 },
    { title: "Book B", author: "Author 2", pages: 150 },
    { title: "Book C", author: "Author 1", pages: 300 },
    { title: "Book D", author: "Author 3", pages: 250 },
    { title: "Book E", author: "Author 2", pages: 180 },
    { title: "Book F", author: "Author 4", pages: 220 }
  ];
  

// Count the number of books per author
let maxBook = books.reduce((auth, book) => {
    if (!auth[book.author]) {
        auth[book.author] = 0;  // Initialize count for a new author
    }
    auth[book.author]++;  // Increment count for the author
    return auth;
}, {});

// Filter authors who have written more than one book
let countBooks = Object.keys(maxBook).filter(author => maxBook[author] > 1);

console.log(countBooks);