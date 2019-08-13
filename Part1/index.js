// console.log('connection successful')
let board = [];


function play(val){
    var playerSpan = document.getElementById('player')
    var clicked = document.getElementById(val)
    var topLeft = board[0];
    var topCenter= board[1];
    var topRight = board[2];
    var middleLeft = board[3];
    var middleCenter = board[4];
    var middleRight = board[5];
    var bottomLeft = board[6];
    var bottomCenter = board[7];
    var bottomRight = board[8];
    var boardFull = true;
    
    
    if(playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O'
        clicked.innerText = 'X'
        board[val] = 'X'
    }else{
        playerSpan.innerText = 'X'
        clicked.innerText = 'O'
        board[val] = 'O'
    }
    console.log(board)

    //winner result
    if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight){
        alert('The winner is ' + topLeft)
        return 
    }else if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight){
        alert('The winner is ' + topLeft)
        return
    }else if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft){
        alert('The winner is ' + topLeft)
        return
    }else if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight){
        alert('The winner is ' + middleLeft)
        return 
    }else if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight){
        alert('The winner is ' + bottomLeft)
        return
    }else if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight){
        alert('The winner is ' + bottomLeft)
        return
    }else if (bottomLeft !== undefined && bottomLeft === middleLeft && bottomLeft === topLeft){
        alert('The winner is ' + bottomLeft)
        return
    }else if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter){
        alert('The winner is ' + topCenter)
        return
    }else if (topRight !== undefined && topRight === middleRight && topRight === bottomRight){
        alert('The winner is ' + topRight)
        return
    }
//alert if CAT game
    for (let i = 0; i <= 8; i++){
        if (board[i] === undefined){
            boardFull = false;
        }
    }
    if (boardFull === true){
        alert('CATS')
    }
}

//function to reset game
function reset(){
    for(let i = 0; i <= 8; i++){
        document.getElementById(i).innerText = '';
        
    }
}

