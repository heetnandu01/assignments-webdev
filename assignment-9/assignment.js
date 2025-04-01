let random = Math.random()
console.log(random)
let a = prompt("Enter the value of a");
let b = prompt("Enter the value of b");
let c = prompt("Enter the operation of c:");

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}

if (random > 0.1){
    console.log(`The result is ${a} ${c} ${b}`)
    
}

else {
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 
}













