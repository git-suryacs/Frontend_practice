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
    return Math.random()

}

console.log(randomFraction())