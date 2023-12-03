// Code your solutions in this file
function writeCards(names) {
    let cardsArr = []
    for (let i = 0; i < names.length; i++) {
        cardsArr[i] = `Thank you, ${names[i]}, for the wonderful surprise gift!`
    }
    return cardsArr
}

function countDown(num) {
    while (num >= 0) {
        console.log(num)
        num--
    }
}