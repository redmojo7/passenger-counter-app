let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let previousArray = []

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    previousArray.push(count)
    saveEl.textContent = previousArray.join("-")
    countEl.textContent = 0
    count = 0
}