let homeScore = 0
let guestScore = 0

let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")

function homeOne() {
    homeScore += 1
    homeEl.textContent = homeScore
}

function homeTwo() {
    homeScore += 2
    homeEl.textContent = homeScore
}

function homeThree() {
    homeScore += 3
    homeEl.textContent = homeScore
}

function guestOne() {
    guestScore += 1
    guestEl.textContent = guestScore
}

function guestTwo() {
    guestScore += 2
    guestEl.textContent = guestScore
}

function guestThree() {
    guestScore += 3
    guestEl.textContent = guestScore
}

function newGame() {
    homeScore = 0
    guestScore = 0
    homeEl.textContent = homeScore
    guestEl.textContent = guestScore
}
