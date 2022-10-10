// Function #1: Array Slice
const foods = ["pizza", "burger", "fingerChips"," donuts", "springRoll"];
let arr=foods.slice(1,4)
console.log(arr)


// Function #2: Array Splice
// const foods = ["pizza"," burger", "fingerShips", "donuts", "springRoll"];

foods.splice(2,0   ,"noodels","ice-creams")
console.log(foods)

// Function #3: Filter
const numberArray = [12,324,213,4,2,3,45,4234];
function isEven(numberArray)
{
    let even=[]
    for(i of numberArray)
    {
        if(i%2==0)
           even.push(i)
    }
    console.log(even)
}
isEven(numberArray)
let prime=[]

function isPrime(num)
{
    for(let j=2;j<num;j++)
    {
        if(num%j==0)
           return false
    }
    return true
}

for(i of numberArray)
{
    if(isPrime(i))
        prime.push(i)
}
console.log(prime)

// Function #4: Reject
let nonPrime=[]
for(i of numberArray)
{
    if(isPrime(i==false))
       nonPrime.push(i)
}
var promise = Promise.reject(nonPrime);
 
// Catch the promise and pass the
// function for logging the error in console
promise.catch(function (i) {
  console.log(i);
});


////////////////////Function #5: Map
const myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers(num)
{
    
    
        return num*num
    
}
let newArray=myArray.map(findSquareOfNumbers)
console.log(newArray)


//////////////////Function #6: Reduce
let arr1=[2, 3, 5, 10] 
let newArr1=arr1.reduce(multiply,1)
function multiply(a,num)
{
    return a*num
}
console.log(newArr1)
