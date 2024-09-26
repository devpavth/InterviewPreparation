// find the maximum element in an array
function findMax(arr){
    let max = arr[0];

    for(let i = 1; i <= arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

const array = [1, 3, 7, 2, 9, 4];
console.log(findMax(array))



// remove duplicates from an array
function removeDuplicates(arr){
    let unique = []
    arr.forEach(element => {
        if(!unique.includes(element)){
            unique.push(element);
        }
    });
    return unique;
}

const arr = [1,2,2,3,4,4,5,6,6]
console.log(removeDuplicates(arr))



// Reverse a String 
function reverseString(str){
    let reverseStr = '';
    for(let i=str.length-1; i>=0 ;i--){
        reverseStr += str[i];
    }
    return reverseStr;
}

const originalString = "Hello World!";
console.log(reverseString(originalString))



// Find the Factorial of a Number 
function factorial(n){
    let result= 1;
    for(let i=2; i<=n;i++){
        result = result * i;
    }
    return result;
}
console.log(factorial(5))

// Find the Factorial of a Number Using Recursive Approach
function factorialRecursive(n){
    if(n===0 || n===1){
        return 1;
    }
    return n * factorialRecursive(n-1);
}
console.log(factorialRecursive(6));



// to Check Whether a String is Palindrome or Not
function isPalindrome(str){
    let cleanedStr = '';
    for(let i=0; i<str.length; i++){
        let char = str[i].toLowerCase();
        if(char >= 'a' && char <= 'z' || char >= '0' && char<='9') {
            cleanedStr+=char;
        }
    }
    let len = cleanedStr.length;
    for(let i=0; i<len/2; i++){
        if(cleanedStr[i] !== cleanedStr[len-1-i]){
            return false;
        }
    }
    return true;
}

const originalStr = "Mam";
console.log(isPalindrome(originalStr))


// to Check for Palindrome Number
function isPalindromeNumber(num){
    let originalNum = num;
    let reverseNum = 0;

    while(num > 0){
        let lastDigit = num % 10;
        reverseNum = reverseNum * 10 + lastDigit;
        num = Math.floor(num / 10);
    }
    return originalNum === reverseNum;
}

const number1 = 12241;

console.log(isPalindromeNumber(number1))



// Program to Check if a Number is Odd or Even
function isEven(number){
    return number % 2 === 0;
}

function isOdd(number){
    return number % 2 !== 0;
}

const number2 = 19

console.log(isEven(number2))
console.log(isOdd(number2))

// function checkOddEven(number){
//     const input = prompt("Enter a number:");

//     const numbers = Number(input);

//     if(isEven(numbers)){
//         console.log(`${numbers} is Even`);
//     }
//     else if(isOdd(numbers)){
//         console.log(`${numbers} is Odd`);
//     }
// }

// checkOddEven();




// Program to print Fibonacci Series
function fibonacciSeries(num2){
    let a = 0;
    let b = 1;
    let c;

    for(let i=1; i<=num2; i++){
        console.log(a);
        c = a+b;
        a=b;
        b=c;
    }
}

fibonacciSeries(10);




// Check a number is Prime or not 
function checkPrime(n1){
    let flag = true;

    if(n1<=1){
        return false;
    }
    
    for(let i=2; i*i<=n1; i++){
        if(n1 % i === 0){
            flag = false;
            break;
        }
    }
    if(flag){
        console.log(n1, "is a prime number");
    }
    else{
        console.log(n1, "is not a prime number");
    }
}

checkPrime(12);
checkPrime(17);




// Program to Find All Factors of a Natural Number
function findFactors(n2){
    const factors = [];
    for(let i=1; i*i<=n2; i++){
        if(n2%i === 0){
            factors.push(i);
            if(i !== n2/i){
                factors.push(n2/i);
            }
        }
    }
    factors.sort((a,b) => a - b);

    console.log("Factors of", n2, "are", factors.join(", "));
}
findFactors(12);
findFactors(5);