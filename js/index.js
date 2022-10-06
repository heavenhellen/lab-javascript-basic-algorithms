// Iteration 1: Names and Input
console.log("I'm ready!"); 

let hacker1 = "Helena"

console.log("The driver's name is " + hacker1);

let hacker2 = "Pepojmc"

console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops

const letrasSeparadas = hacker1.split('').join(' ');
console.log(letrasSeparadas.toUpperCase())

let nombreAlReves = ""
for(let i = 0; i <= hacker2.length; i++) {
 let nombreNavigator = hacker2.slice(6-i,7-i)
 nombreAlReves = nombreAlReves + nombreNavigator;
}
console.log(nombreAlReves)

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.")
} else if(hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definitely.") 
} else {
  console.log("What?! You both have the same name?")
}