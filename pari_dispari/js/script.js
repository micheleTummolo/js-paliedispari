let userOddEven = prompt("Pari o Dispari?")
userOddEven = userOddEven.toUpperCase()
console.log("Scelta user: " + userOddEven)

let userNum = prompt("Inserire un numero da 1 a 5")
userNum = parseInt(userNum)
console.log("Numero user: " + userNum)

let computerNum = getRandomInt(5) + 1
console.log("Numero computer: " + computerNum)

let resultOddEven = sumOddEven()
console.log("Somma numeri pari o dispari: " + resultOddEven)

if (userOddEven == resultOddEven){
    console.log("Hai vinto!!")
    alert("Hai vinto!!")
}
else {
    console.log("Hai perso!!")
    alert("Hai perso!!")
}


function getRandomInt(max) {
    return Math.floor (Math.random() * max);
}

function sumOddEven() {
    let sum = userNum + computerNum
    let oddEven;
    if (sum % 2 == 0 )  
        oddEven = "PARI"
    else
        oddEven = "DISPARI"

    return oddEven
}