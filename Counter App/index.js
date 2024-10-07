let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

console.log(countEl)

let count = 0

function increment(){
    console.log("clicked")
    count += 1
    countEl.textContent = count
}


function save(){
    let n = countEl.innerText + " - "
    saveEl.textContent += n
    countEl.textContent = 0
    count = 0
}