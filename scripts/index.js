
let availableSeats = 40
let seatCounter = 0 
let totalPrice = 0

// for 4 seat limittion
// let selectedSeat = 0

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


    let price = parseInt(pP.innerText) 
    totalPrice = totalPrice + price 

    document.getElementById('total-price').innerText = totalPrice

    // for 4 seat limittion
    // selectedSeat += 1

    // if ( selectedSeat >= 4) {
    //     // document.getElementById('seatDisabled').disabled = true;
    //     document.querySelectorAll(".seat").disabled = true;
    // }
   
})
}

const btnApply = document.getElementById('btn-Apply')
btnApply.addEventListener("click", function() {
    const couponCode = document.getElementById('coupon-Input-Field').value 

    if (couponCode === "NEW15") {
        document.getElementById('grand-total').innerText = totalPrice - (totalPrice * (15/100)) 
        document.getElementById('coupon-area').classList.add('hidden')
    }  else if (couponCode === "Couple 20") {
        document.getElementById('grand-total').innerText = totalPrice - (totalPrice * (20/100))
        document.getElementById('coupon-area').classList.add('hidden')
    } else {
        alert ('Invalid Coupon Code')
    }
     
})
