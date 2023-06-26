var prev=document.getElementById("prev");
var next=document.getElementById("next");
var thumbnail = document.getElementsByClassName("thumbnail");
var hero=document.getElementById("hero");

var backgroundImg =  new Array(
    "download.jpg",
    "image1.png",
    "image2.png",
    "image3.png",
);
let i = 0;
next.onclick = function(){
    hero.style.backgroundImage = 'url("'+backgroundImg[i+1]+'")';
}
