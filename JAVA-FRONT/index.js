//0 starting value
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the html
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let g = 0

function increment() {
    count += 1;
    countEl.innerText = count
}

function save() {
    let countStr = count
    if(g == 0)
    {
        saveEl.textContent += countStr
        g++
    }
    else
    {
        saveEl.textContent += " - " + countStr
    }
    countEl.innerText = 0
    count = 0
}