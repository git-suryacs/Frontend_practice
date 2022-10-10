// var x = 10; // global scope
// console.log(x);
// /* data types:
// undefined
// null
// boolean
// string
// symbol
// number
// object
// */


// let r = "Hey there!" // local scope

// const pi = 3.14; // constant no change
// console.log(pi*2);

// var a; 
// console.log(a)

// var a = "Hello world"
// console.log(a[a.length -1])


function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result = "";
    result += "The "+myAdjective+" "+myNoun+" "+myVerb+" to the store "+myAdverb
    return result;
}
var a = "dog";
var b = "big";
var c = "ran";
var d = "quickly";
console.log(wordBlanks(a,b,c,d))


var myarray = ['HI',12,'Hello']
myarray.push("Surya")
console.log(myarray)
myarray.pop()
console.log(myarray)
myarray.shift()
console.log(myarray)
myarray.unshift("The first element")
console.log(myarray)


var sum = 10

function add(sum){
var sum = sum + 3
return sum
}

console.log("The sum of the number with 3 is "+add(sum))


function randomFraction(){
    return Math.floor(Math.random()*20)

}

console.log(randomFraction())


function parsing(str){
    return parseInt(str,2)
}

console.log(parsing("10011"))


const A = ()=> "Hey bud"



console.log(A())


var arrow = function(a1,a2){
    return a1.concat(" ").concat(a2)
}

console.log(arrow("hi","surya"))        



const realNumberArray = [4,5.6,-9.8,3.14,42,6,8.34,-2]
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num =>Number.isInteger(num)&& num > 0).map(x => x*x) ;
    return squaredIntegers;
};


const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);


const sum1 = (function(){
    return function sum1(...args){
        return args.reduce((a,b)=> a+b,0);
    };
})();


const sum2 = (...args)=>{
    return args.reduce((a,b)=>a+b,0);
} 

console.log(sum1(1,2,3,4,5));