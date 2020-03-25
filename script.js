var numSquares=6;
var colors=generateRandColor(numSquares)
var squares= document.querySelectorAll(".square");
var pickedColor= pickColor();
var colorDisplay= document.querySelector("#colorDisplay");
var messageDisplay= document.querySelector("#message");
var h1= document.querySelector("h1");
var reset= document.querySelector("#reset");
var easyBtn= document.querySelector("#easyBtn");
var hardBtn= document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares=3;
    colors=generateRandColor(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent= pickedColor;
    h1.style.background="steelblue";

    for(var i=0; i<squares.length;i++){
        if(colors[i]){
            squares[i].style.background=colors[i];
        }else{
            squares[i].style.display="none";
        }

    }

});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares=6;
    colors=generateRandColor(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent= pickedColor;
    h1.style.background="steelblue"

    for(var i=0; i<squares.length;i++){
     
        squares[i].style.background=colors[i];
        squares[i].style.display="block";
       
    }

    
});


reset.addEventListener("click",function(){
    colors= generateRandColor(6);

    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;

    for(var i =0; i < colors.length;i++){
        squares[i].style.background=colors[i];
    }
    
    h1.style.background="steelblue";

    if(reset.textContent==="Play again?"){
        reset.textContent="New Colors";
        messageDisplay.textContent="";
    }
})

colorDisplay.textContent=pickedColor;

for(var i =0; i < squares.length; i++){
    squares[i].style.background = colors[i];

    squares[i].addEventListener("click", function(){
       
        if(this.style.background === pickedColor){
            changeColors(pickedColor);
            messageDisplay.textContent="Correct Guess!";
            h1.style.background=pickedColor;
            reset.textContent="Play again?";
        }else{
            this.style.background="#232323";
            messageDisplay.textContent="Wrong Guess!";
        }
    });
}

function changeColors(color){

    for(var i =0; i < colors.length;i++){
        squares[i].style.background=color;
    }
}

function pickColor(){
    var random= Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandColor(num){
    var arr=[];

    for(var i=0; i <num; i++){
        arr.push(randomColor());
    }

    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

    return "rgb("+r+", "+g+", "+b+")";
}