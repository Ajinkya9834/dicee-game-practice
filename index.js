

let randomNumber1 = Math.floor(Math.random()*6) + 1;
let randomNumber2 = Math.floor(Math.random()*6) + 1;

//player 1
let image1 = document.querySelectorAll("img")[0];

let dirOfImage = "./images";
let fileName1 = "/dice" + randomNumber1;
let fileExtension = ".png";

let randomSrcImage1 = dirOfImage + fileName1 + fileExtension ;

image1.setAttribute("src",randomSrcImage1);

//player 2

let image2 = document.querySelectorAll("img")[1];

let fileName2 = "/dice" + randomNumber2;
let randomSrcImage2 = dirOfImage + fileName2 + fileExtension;
image2.setAttribute("src",randomSrcImage2);


// winner
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "player 1 wins";
} else if (randomNumber1 < randomNumber2 ){
    document.querySelector("h1").innerHTML = "player 2 wins";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}