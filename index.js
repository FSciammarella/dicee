let player1=Math.trunc(Math.random()*6+1)
let player2=Math.trunc(Math.random()*6+1)

function rollDices(){
    let player1=Math.trunc(Math.random()*6+1)
    let player2=Math.trunc(Math.random()*6+1)
    document.querySelector(".img1").setAttribute("src","images/dice"+player1+".png")
    document.querySelector(".img2").setAttribute("src","images/dice"+player2+".png")
    if (player1>player2){
        document.querySelector(".result").innerHTML="Player 1 Wins!"
    }else if(player2>player1){
        document.querySelector(".result").innerHTML="Player 2 Wins!"
    }else{
        document.querySelector(".result").innerHTML="Draw!"
    }
}

document.querySelector("#clickMe").addEventListener("click",rollDices)
