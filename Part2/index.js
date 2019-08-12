console.log('connection successful')

let getID = document.getElementById('idInput');
let getColor = document.getElementById('colorInput')

console.log(getID)
console.log(colorInput)

function setCard(){
    let card = document.getElementById(idInput.value);
    card.style.color = colorInput.value
    console.log(card)
}
