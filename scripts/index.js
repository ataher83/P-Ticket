
// const availableSeats40 = document.getElementById('available-seats')
let availableSeats = 40
let seatCounter = 0 
let totalPrice = 0

// console.log(availableSeats.innerText)
// console.log(parseInt(availableSeats.innerText, 10))
// let a = parseInt(availableSeats.innerText)
// console.log(typeof(availableSeats.innerText))
// console.log(typeof(availableSeats))
let seats = document.querySelectorAll(".seat");
for (let i = 0; i < seats.length; i++) {
  let seat = seats[i]

seat.addEventListener("click", function() {

    seat.style.backgroundColor = "#1DD100"
    seat.style.color = "white"

    availableSeats -= 1
    document.getElementById('available-seats').innerText = availableSeats

    seatCounter += 1
    document.getElementById('seat-counter').innerText = seatCounter
    

    let pS = document.createElement('p')
    pS.innerText = seat.innerText
    document.getElementById('container-Seat').appendChild(pS)

    let pC = document.createElement('p')
    pC.innerText = 'Economy'
    document.getElementById('container-Class').appendChild(pC)

    let pP = document.createElement('p')
    pP.innerText = 550
    document.getElementById('container-Price').appendChild(pP)

// console.log(typeof(pP.innerText))
// console.log(pP)
// console.log(typeof(pP))
    // let price = parseFloat(document.getElementById('total-price').innerText.split(' ')[1])
    // console.log(typeof(price))

    let price = parseInt(pP.innerText) 
    // console.log(price)
    totalPrice = totalPrice + price 
    // console.log(totalPrice)
    document.getElementById('total-price').innerText = totalPrice
    
    





    
})
}

