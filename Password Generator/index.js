let  characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let numbers = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"]
let symbols = ['!','@','#','$','%','^','&','*','~']

let password1 = document.getElementById("password1-el")
let password2 = document.getElementById("password2-el")
let setLimit = document.getElementById("setLimit-el")
let addSymbols = document.getElementById("symbols-el")
let addNumbers = document.getElementById("numbers-el")

function randomPass(){
    renderPass()
    let limit = setLimit.value

    for(let i=0;i<limit;i++){

        let randomIndexOne = Math.floor(Math.random()* characters.length)
        let randomIndexTwo = Math.floor(Math.random()* characters.length)

        password1.textContent += characters[randomIndexOne]
        password2.textContent += characters[randomIndexTwo]
    }    
}

function renderPass(){
    password1.textContent = " "
    password2.textContent = " "
}

function pushSymbols(){

    if(addSymbols.checked === true){
        characters = characters.concat(symbols)
    }
    else{
        characters =["a","b","c","d","e","f","g","h","i","j","k","l",
            "m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    }
}
function pushNumbers(){
    
    if(addNumbers.checked === true){
        for(let i=0;i<numbers.length;i++){
        characters = characters.concat(numbers)
        }
    }else{
        characters =["a","b","c","d","e","f","g","h","i","j","k","l",
            "m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    }
}
function copyText1(){
    let copy = document.getElementById("password1-el").textContent
    navigator.clipboard.writeText(copy)
}
function copyText2(){
    let copy = document.getElementById("password2-el").textContent
    navigator.clipboard.writeText(copy)
}
