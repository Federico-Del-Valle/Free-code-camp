// conditionales


// dineroCofla = prompt("cuanto dinero tiene Cofla?");

// if (dineroCofla >= 0.6 && dineroCofla <1) {
//     alert("compra palito bombon helado")
// }
// else if (dineroCofla >= 1 && dineroCofla <1.6) {
//     alert("compra helado de grido")
// }
// else if (dineroCofla >= 1.6 && dineroCofla <1.7) {
//     alert("compra helado de helado total")
// }
// else if (dineroCofla >= 1.7 && dineroCofla <1.8) {
//     alert("compra helado de las leñas")
// }
// else if (dineroCofla >= 1.8 && dineroCofla <2.9) {
//     alert("compra helado de italia")
// }
// else if (dineroCofla >= 2.9){
//     alert("helado de italia o las leñas");
// }
// else{
//     alert("sos un pobre de mierda")
// }

// Ejercicio 1 clase 2 

// const username = "Pedro"
// const password = "password"
// const numero = 1234

// const usernameLogin = prompt("Ingrese el usuario")
// const passwordLogin = prompt("Ingrese el password")

// if(usernameLogin === username && passwordLogin === password){
// alert(username + numero + password)
// }
// else {
//     alert("401 unauthorized")
// }







// const username = prompt("Cual es tu nombre?")
// const password = prompt("Cual es tu contraseña?")
// const VALUE = 600

// // alert(username + VALUE+ password)

// initialize the count as 0 
// listen for clicks on the increment burron 
// increment the count variable when the btton is clicked
// change the count-el in the HTML to reflext the new count
// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     count = count + 1
//     countEl.innerText = count
//     console.log(count)
// }

// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")
// let count = 0


// function increment() {
//     count +=  1
//     countEl.innerText = count 

// }
// function decrease(){
//     count -= 1
//     countEl.innerText = count
// }

// function save() {
//     let countStr = count + " - "
//     saveEl.textContent += countStr
//     countEl.textContent = 0
//     count = 0
// }



// exercise number 1 


// Create teo variables, firstName and lastName
// Concatenate the two variables into a third variable called fullName
// Log fullname to the console

// let firstName = "Federico"

// let lastName = " Del Valle"

// let fullName = firstName + lastName


// console.log (fullName)


// // exercise number 2 


// let name = "Linda"
// let greeting = "Hi there"

// function lindaGreeting() {
//     console.log(greeting + " " + name)
// }
// lindaGreeting()

// // exercise number 3

// let myPoints = 3

// // Create two functions, add3Points() and remove1Point(), and have them
// // add/remove points to/from the myPoints variable

// function add3Points() {
//     myPoints += 3
// }

// function remove1Point() {
//     myPoints -= 1
// }
// // Call the functions to that the line below logs out 10

// add3Points()
// add3Points()
// add3Points()

// remove1Point()
// remove1Point()
// console.log(myPoints)


// // Try to predict what each of the lines eill log out

// console.log("2" + 2) // 22
// console.log(11+7) // 18
// console.log(6+"5") // 65
// console.log("myPoints: " + 5 + 9) // "myPoints: 59"
// console.log("11" + "14") // 1114

// let error = document.getElementById("error")

// function purchaseBtn() {
//     error.textContent = "Something went wrong, please try again"
// }



// exercise calculator

// let num1 = 8
// let num2 = 2 
// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2
// let sumEl = document.getElementById("sum-el")

// function add() {
//     sumEl.textContent = "Sum: " + (num1 + num2)
// }
// function subtract() {
//     sumEl.textContent = "Sum: " +  (num1 - num2)
// }
// function divide() {
//     sumEl.textContent = "Sum: " +  num1 / num2
// }
// function multiply() {
//     sumEl.textContent = "Sum: " +  num1 * num2
// }






// EXERCISE NUMBER I DONT REMEMBER

// // chek if the person is old enough to enter the nightclub (21)
// // Log a suitable message to the console in both cases

// let age = 22

// // if less than 21 -> "you can not enter the club!"
// // else             -> "welcome!"

// if (age <= 20) {
//     console.log("You can not enter the club!")
// } else {
//     console.log("Welcome!")
// }

// EXERCISE NUMBER 8

// // Check if the person is elegible for a birthday card from the King! (100)

// let age = 100

// //  if less than 100  -> "Not elegible"
// //  else if exactly 100 -> "Here is your birthday card from the King!"
// // else         ->"Not elegible, you hace already gotten one"

// if(age < 100) {
//     console.log("Not elegible")
// } else if(age === 100) {
//     console.log("Here is your birthday card from the King!")
// } else {
//     console.log("Not elegible, you have already gotten one")
// }


// Blackjack Game
let cards = [0]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Fede",
    chips: 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "

for(let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
}

    sumEl.textContent = "Sum: " + sum
    if(sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if(isAlive === true){
    let card = getRandomCard()
    cards.push(card)
    sum += card 
    renderGame()
    }
}
function getRandomCard() {
    let randomCard = Math.floor ( Math.random() *13) + 1
    if (randomCard > 10) {
        return 10
    } else if (randomCard === 1 && hasBlackJack === false) {
        return 11
    } else {
        return randomCard
    }
}















// FOR (SUPER IMPORTANTE!)

// Count to ten 

// We need to specify...

// Where shoyld we START counting?
//  Where is the FINISH line?
//  what's the STEP SIZE we should use?

//    START         FINISH        STEP SIZE
// for ( let count = 10; count < 21; count += 1) {
//     console.log(count)
// }


// let sentence = ["Hello ", "my ", "name ", "is ", "Fede"]

// let greetingEl = document.getElementById("greeting-el")

// for(i=0; i < sentence.length; i++) {
//     greetingEl.textContent += sentence[i]
// }



// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime() {
//     if(player1Time < player2Time) {
//         return player1Time
//     } else if (player2Time < player1Time){
//         return player1Time
//     } else {
//         return player1Time
//     }
// }

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)


// function getToltalRaceTime() {
//     return player1Time + player2Time
// }
// let totalTime = getToltalRaceTime()

// console.log(totalTime)


let hasSolverChallenge = false
let hasHintsLeft = false 


if (hasSolverChallenge === false && hasHintsLeft === false) {
    showSolution()
}
function showSolution() {
    console.log("showing the solution")
}




// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either og those variables are true 


let likesDocumentaries = true
let likesStartups = false
if(likesDocumentaries === true || likesStartups === true) {
    recommendMovie()
}
function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}