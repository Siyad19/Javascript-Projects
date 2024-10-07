let homePoints = document.getElementById("homescore")
let guestPoints = document.getElementById("guestscore")

let pointh = 0
let pointg = 0

function add1PointHome(){
    pointh += 1
    homePoints.textContent = pointh
}
function add2PointsHome(){
    pointh += 2
    homePoints.textContent = pointh
}
function add3PointsHome(){
    pointh += 3
    homePoints.textContent = pointh
}
function add1PointGuest(){
    pointg += 1
    guestPoints.textContent = pointg
}
function add2PointsGuest(){
    pointg += 2
    guestPoints.textContent = pointg
}
function add3PointsGuest(){
    pointg += 3
    guestPoints.textContent = pointg
}
function newGame(){
    homePoints.textContent = 0
    guestPoints.textContent = 0
}