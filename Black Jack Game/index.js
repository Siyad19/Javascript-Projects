let firstCard = randomCard()
let secondCard = randomCard()
let cards = [firstCard,secondCard]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = " "
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el") //let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")

let player = {
    name : "john",
    credits : 100
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name+ ": $" + player.credits
function randomCard(){
    let num = Math.floor(Math.random()*13)+1
    if(num === 1){
        return 11
    }else if(num > 10){
        return 10
    }else{
        return num
    }
}

function startGame(){
    isAlive = true
    let firstCard = randomCard()
    let secondCard = randomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){
    cardEl.textContent = "Cards: "
    for(let i=0;i<cards.length;i++){
        cardEl.textContent += cards[i] +  " "
    }

    sumEl.textContent = "Sum: " +sum
    if(sum <21){
        message = "Do you want to draw a new card? 🙂"
    }
    else if(sum === 21){
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    }
    else{
        message = "You're out of the game! 😭"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
    let card = randomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
    }
}