var prev = document.getElementById("prev");
var next = document.getElementById("next");
var thumbnail = document.getElementsByClassName("thumbnail");
var hero = document.getElementById("hero");

var backgroundImg =  new Array(
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
);
let i = 0;
next.onclick = function(){


    if(i < 3){
        hero.style.backgroundImage = 'url("'+backgroundImg[i+1]+'")';
        thumbnail[i+1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i++;
    }
    
}
prev.onclick = function(){


    if(i > 0){
        hero.style.backgroundImage = 'url("'+backgroundImg[i-1]+'")';
        thumbnail[i-1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i--;
    }
    
}
