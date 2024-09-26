let students = [
    { name: "Alice", grade: 92 },
    { name: "Bob", grade: 85 },
    { name: "Charlie", grade: 72 },
    { name: "David", grade: 88 },
    { name: "Eve", grade: 95 },
    { name: "Frank", grade: 67 }
];


let groupStudent = students.reduce((grad, student) => {
    if(student.grade >= 90 ){
        grad.group1.push(student.name)
    }
    else if(student.grade >= 75 && student.grade < 90  ){
        grad.group2.push(student.name)
    }
    else{
        grad.group3.push(student.name)
    }
    return grad;
},{
    group1: [],
    group2: [],
    group3: []
})

console.log(groupStudent)