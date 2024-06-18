// let list = [12,33,33,12,12,34,55,32,67,123];

// let stat = 0
// let temp = 0
//  for(let i=0;i<list.length;i++){
//       for (let j=0;j<i;j++) {

//         if(list[i]==list[j]){
//              console.log(list[i]);
//             cout =1
//             temp = list[i]

//         }
//         console.log(temp)
      
//         if (stat==1){
//             break;
//         }
//         break
//     }
//  }

// let x = 100;

// x<10 ? (console.log("less than 10")) :(console.log("more than 10"))

// x > 10 && (console.log('yes'))

// function hello(){
//     console.log(x)
// }
// hello()

// console.log(typeof([2,1]))

// let a = 9
// let b = 6
// console.log(a===b)

// let a = 9

// if(typeof(a) == "number"){
//     console.log("true")
// }

// else {
//     console.log("false")
// }

// let car = {price:200000}
// car.color = "blue"
// // console.log(car)
// console.log(car.price)
// console.log(car.color)

let apple = {weight:"250gm"}
apple.color = "red"
apple.shape = "round"
apple.taste = "sweet"

// console.log(apple)

// let pear = apple
// pear.color ="green"
// for (let i in pear){
//     console.log(pear[i])
// }

let nepal = {
    capital : 'Kathmandu',
    language : 'Nepali',
    population : '294504'
}

// console.log(`My country's capital is ${nepal.capital}` , "and the language is ", nepal.language)

let bike = {
    color:'black',
    topspeed:'150',
    brakes:'avs',
    tire:'tubeless'
}

// console.log(`top speed of bike is ${bike.topspeed}`)
let arr = [1,"meow",2,3,4,5,6]
let brr = arr.map((item) => (item+1))
let crr = brr.map((item) => {
    return item + 1
})

// console.log(brr)
// console.log(crr)

let b = ["controller","duelist","initiator","sentinel"]
let x = b.map((item) => {
    return item + "s"
})

// console.log(x)

let drr = crr.filter((item) => {
    return item <5
})
// console.log(drr)

let aaa = "reyna"
// console.log(aaa.includes("a"))

let bbc = [
    {
        name:"reyna",  
        age:20,
        height:5.9,
        weight:50
    },
    {
        name:"jett",  
        age:20,
        height:5.8,
        weight:45
    },
    {
        name:"phoenix",  
        age:20,
        height:6.1,
        weight:70
    }
]

let ccc = bbc.filter((item) => {
    return item.name.includes("jett")
})
// console.log(ccc)

let m = 5
let n = 6

function sum(m,n){
    return m+n
}
let o = sum(m,n)
// console.log(o)

let d = [1,2,3]
 const myFunction = (arr) => {
     arr.push(4)
     return arr
 }

//  console.log(myFunction(d))

 const myInitiator = ["skye","sova","kayo","gekko","fade"]

 const print = (z) => {
    return z[2]
 }
//  console.log(print(myInitiator))
const Person = {name : "alecks"}
const list = ["computer engineer","js"]
const addValue = (obj) => {
    obj.occupation = list[0]
 return obj
}
const l = addValue(Person)

console.log(addValue(l))