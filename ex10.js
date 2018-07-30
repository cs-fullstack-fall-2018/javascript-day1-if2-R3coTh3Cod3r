var cardNum= parseInt(prompt("Enter card Number"));
var cardNum2= parseInt(prompt("Enter card Number"));
var cardNum3= parseInt(prompt("Enter card Number"));
var total= cardNum+cardNum2+cardNum3;
if (cardNum+cardNum2+cardNum3==21){
    alert("BLACKJACK")
}
if (cardNum+cardNum2+cardNum3>21){
    alert("BUST")
}
alert("The total is "+ total);