var rand;
var number;
var addnum;
var subtractnum;
var roundnum;
var final;
var ceilnum;
var floornum;
var squarenum;
var sqrtnum;

function getRandom(){
    rand= Math.random();
    document.getElementById("output1").innerHTML=rand;
}

function numberOperation(){
    number= parseInt(document.getElementById("userInput").value);
    document.getElementById("output2").innerHTML=number;
}

function Add(){
    addnum=number+rand;
    document.getElementById("output3").innerHTML=addnum;
    final= addnum;
}

function Subtract(){
    subtractnum= number-rand;
    document.getElementById("output3").innerHTML=subtractnum;
    final= subtractnum;
}

function Round(){
    roundnum= Math.round(final);
    document.getElementById("output4").innerHTML=roundnum;
}

function Ceil(){
    ceilnum= Math.ceil(final);
    document.getElementById("output4").innerHTML=ceilnum;
}

function Floor(){
    floornum= Math.floor(final);
    document.getElementById("output4").innerHTML=floornum;
}

function Square(){
    squarenum= Math.pow(final, 2);
    document.getElementById("output4").innerHTML=squarenum;
}

function Sqrt(){
    sqrtnum=Math.sqrt(final);
    document.getElementById("output4").innerHTML=sqrtnum;
}

