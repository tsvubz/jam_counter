let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
  count += 1
  countEl.textContent = count
 }

function save() {
  let numSaved = count + " - "
  saveEl.textContent += numSaved
  countEl.textContent = 0
  count = 0
  return
 }

let welcomeEl = document.getElementById("welcome-el")
let greeting = "Welcome King to the Jam Counter"

welcomeEl.innerText = greeting

welcomeEl.innerText += " 😜"
