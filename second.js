
// let person = {
//     name: "Federico",
//     age: 21,
//     country: "Argentina"
// }
// function logData() {
//     console.log (person.name + " is " + person.age + " years old and lives in " + person.country )
// }

// logData()

// let age = 66
// if(age < 6) {
//     console.log("Free")
// } else if (age > 6 && age < 17) {
//     console.log("child discount")
// } else if(age > 18 && age < 26) {
//     console.log("student discount")
// } else if (age > 27 && age < 66) {
//     console.log("Full price")
// } else {
//     console.log("senior citizen discount")
// }

// let largeCountries = ["China", "India","USA", "Indonesia", "Pakistan"]

// for( let i = 0; i < largeCountries.length; i++) {
//     console.log("- " + largeCountries[i])
// }

// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

// largeCountries.pop()
// largeCountries.push("Pakistan")
// largeCountries.shift()
// largeCountries.unshift("China")
// console.log(largeCountries)


// let dayOfMonth = 13
// let weekday = "Friday"

// if (dayOfMonth && weekday) {
//     console.log("😱")
// }

// let hands = ["rock", "paper", "scissor"]

// function getHand() {
//     let randomIndex = Math.floor(Math.random() * 3)
//     return hands[randomIndex]
// }
// console.log(getHand())

let fruit = ["🍎", "🍊", "🍎","🍎","🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function sortFruit()         {
        for(let i = 0; i < fruit.length; i++) {
            if (fruit[i] === "🍎") {
            appleShelf.textContent += "🍎"
        } else if ( fruit[i] === "🍊") {
            orangeShelf.textContent += "🍊"
        }
    }
}
sortFruit()