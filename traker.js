let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const containerEl = document.getElementById("container")



inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
    // listItems += "<li><a href= '#' target= '_blank'>" + myLeads[i] + "</a></li>"
    listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
        </li>
        `
    }
ulEl.innerHTML = listItems
}

containerEl.innerHTML = "<button onclick = 'buy()'>Buy</button>"
function buy() {
    containerEl.innerHTML += "<p> Thank you for buying! </p>"
}